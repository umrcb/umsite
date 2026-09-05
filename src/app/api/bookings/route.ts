import { NextResponse } from 'next/server';
import { getBookings, addBooking } from '@/lib/db';
import { sendEmail, getBookingConfirmationTemplate, getAdminBookingNotificationTemplate } from '@/lib/email';
import { BookingSchema } from '@/lib/validations';
import { validateRequest } from '@/lib/server-auth';
import { getSettings } from '@/lib/settings-storage';
import { routeService, RouteWithPrices } from '@/services/routeService';
import { VehicleService } from '@/services/vehicleService';
import { calculateFinalPrice } from '@/lib/pricing';
import { formatBookingReference } from '@/lib/formatters';


export async function GET() {
    try {
        const bookings = await getBookings();
        
        // Map nested Mongoose structure back to flat structure expected by admin UI
        const formattedBookings = bookings.map((booking: any) => {
            let date = '';
            let time = '';
            
            if (booking.datetime) {
                const dt = new Date(booking.datetime);
                if (!isNaN(dt.getTime())) {
                    date = dt.toISOString().split('T')[0];
                    time = dt.toTimeString().split(' ')[0].substring(0, 5);
                }
            }

            return {
                id: booking._id ? booking._id.toString() : booking.id,
                name: booking.customerInfo?.name || booking.name || 'Unknown',
                email: booking.customerInfo?.email || booking.email || '',
                phone: booking.customerInfo?.phone || booking.phone || '',
                pickup: booking.pickup,
                dropoff: booking.dropoff,
                date: date || booking.date,
                time: time || booking.time,
                passengers: booking.passengers,
                luggage: booking.luggage,
                notes: booking.notes,
                flightNumber: booking.flightNumber,
                status: booking.status || 'pending',
                paymentMethod: booking.payment?.method || booking.paymentMethod || 'cash',
                paymentStatus: booking.payment?.status || booking.paymentStatus || 'unpaid',
                price: booking.payment?.amount || booking.price || 0,
                selectedVehicles: booking.selectedVehicles || [], // Fallback for the flat format
                vehicle: booking.vehicle || '',
                createdAt: booking.createdAt,
                updatedAt: booking.updatedAt
            };
        });

        return NextResponse.json(formattedBookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
    }
}

export async function POST(request: Request) {

    try {
        console.log('[Booking API] Received new booking request');
        const body = await request.json();

        // Validate input
        const validation = BookingSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { success: false, message: 'Invalid booking data', errors: validation.error.format() },
                { status: 400 }
            );
        }

        const bookingData = validation.data;
        let priceDetails: any = {};
        const selectedVehiclesList = [];

        // Normalize vehicle selection
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let vehiclesToProcess: any[] = [];
        if (bookingData.selectedVehicles && bookingData.selectedVehicles.length > 0) {
            vehiclesToProcess = bookingData.selectedVehicles;
        } else if (bookingData.vehicleId) {
            vehiclesToProcess = [{ vehicleId: bookingData.vehicleId, quantity: bookingData.vehicleCount || 1 }];
        }

        // Calculate price and resolve vehicle names
        if (bookingData.routeId && vehiclesToProcess.length > 0) {
            try {
                const [routes, vehicles, settings] = await Promise.all([
                    routeService.getRoutes(),
                    VehicleService.getActiveVehicles(),
                    getSettings()
                ]);

                const route = (routes as RouteWithPrices[]).find(r => r.id === bookingData.routeId);

                let totalBasePrice = 0;
                let vehicleNames: string[] = [];

                for (const sv of vehiclesToProcess) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const vehicle = (vehicles as any[]).find(v => v.id === sv.vehicleId);
                    if (vehicle) {
                        // Check availability
                        if (bookingData.date && vehicle.unavailableDates?.includes(bookingData.date)) {
                            // If this specific vehicle is unavailable on the requested date
                            throw new Error(`Vehicle ${vehicle.name} is unavailable on ${bookingData.date}`);
                        }

                        selectedVehiclesList.push({ name: vehicle.name, quantity: sv.quantity });
                        vehicleNames.push(`${sv.quantity} x ${vehicle.name}`);

                        if (route) {
                            const priceEntry = route.prices?.find(p => p.vehicleId === sv.vehicleId);
                            if (priceEntry) {
                                totalBasePrice += (priceEntry.price * sv.quantity);
                            }
                        }
                    }
                }

                if (totalBasePrice > 0) {
                    const { price, originalPrice, discountApplied, discountType } = calculateFinalPrice(totalBasePrice, settings.discount);

                    if (discountApplied > 0) {
                        console.log(`[Booking] Discount applied: ${discountApplied} (${discountType})`);
                    }

                    priceDetails = {
                        originalPrice,
                        discountApplied,
                        finalPrice: price,
                        discountType,
                        price: String(price) // Store final price as string for compatibility
                    };
                }

                // Set the fallback/summary vehicle string
                if (vehicleNames.length > 0) {
                    bookingData.vehicle = vehicleNames.join(', ');
                }

            } catch (err) {
                console.error('Error calculating price:', err);
            }
        }

        // Check if user is logged in (Optional)
        let userId = undefined;
        try {
            const { verifyToken } = await import('@/lib/auth-utils');
            const { cookies } = await import('next/headers');
            const cookieStore = await cookies();
            const token = cookieStore.get('admin_token')?.value;

            if (token) {
                const decoded = await verifyToken(token);
                if (decoded && decoded.userId) {
                    userId = decoded.userId;
                }
            }
        } catch (err) {
            console.log('Booking created as guest (no valid token found)');
        }




        // Format the document for Mongoose schema
        const dbPayload = {
            userId,
            customerInfo: {
                name: bookingData.name,
                email: bookingData.email,
                phone: bookingData.phone,
            },
            pickup: bookingData.pickup,
            dropoff: bookingData.dropoff,
            datetime: new Date(`${bookingData.date}T${bookingData.time}:00`),
            flightNumber: bookingData.flightNumber,
            notes: bookingData.notes,
            passengers: bookingData.passengers || 1,
            luggage: bookingData.luggage || 0,
            routeId: bookingData.routeId === 'custom' ? undefined : bookingData.routeId,
            status: 'pending',
            payment: {
                method: bookingData.paymentMethod || 'cash',
                status: 'unpaid',
                amount: priceDetails.finalPrice || priceDetails.originalPrice || 0,
                currency: 'SAR'
            },
            // Since Mongoose expects ObjectId, we omit vehicle mapping if vehicleId isn't an ObjectId. 
            // In a robust implementation, we map `sv.vehicleId`. But `selectedVehiclesList` is just names.
            // For now, we'll bypass the strict validation on `vehicles` or map it if valid.
        };

        const booking = await addBooking(dbPayload as any);

        // Send standardized emails and notifications
        console.log('[Booking API] Processing emails and notifications...');
        try {
            if (booking) {
                const { sendBookingConfirmationEmail, sendAdminNewBookingEmail } = await import('@/lib/email');

                const emailData = {
                    name: bookingData.name,
                    email: bookingData.email,
                    status: booking.status || 'pending',
                    id: formatBookingReference(((booking as any)._id || booking.id).toString()),
                    vehicle: bookingData.vehicle || selectedVehiclesList.map(v => `${v.quantity}x ${v.name}`).join(', '),
                    pickup: bookingData.pickup,
                    dropoff: bookingData.dropoff,
                    date: bookingData.date,
                    time: bookingData.time,
                    passengers: bookingData.passengers,
                    vehicleCount: bookingData.vehicleCount,
                    luggage: bookingData.luggage,
                    notes: bookingData.notes,
                    price: priceDetails.finalPrice ? `${priceDetails.finalPrice} SAR` : undefined,
                    selectedVehicles: selectedVehiclesList,
                    country: bookingData.country,
                    flightNumber: bookingData.flightNumber,
                    arrivalDate: bookingData.arrivalDate,
                    phone: bookingData.phone,
                };

                if (bookingData.email) {
                    await sendBookingConfirmationEmail(emailData);
                }
                await sendAdminNewBookingEmail(emailData);
                console.log('Standardized emails sent successfully');

                const { pusherServer } = await import('@/lib/pusher');
                await pusherServer.trigger('admin-channel', 'new-booking', {
                    message: `New booking: ${(booking as any)._id || booking.id}`,
                    bookingId: (booking as any)._id || booking.id,
                    data: emailData
                });
            }
        } catch (error) {
            console.error('Error sending standardized emails or notifications:', error);
        }

        return NextResponse.json(booking);
    } catch (error) {
        console.error('Booking error:', error);
        return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
    }
}
