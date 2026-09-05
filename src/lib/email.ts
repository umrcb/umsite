import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = 'Umrah Cabs <booking@umrahcabs.com>'; // Professional sender name with verified domain
const REPLY_TO_EMAIL = 'umrahcabs1@gmail.com'; // Where customer replies will go

interface EmailOptions {
    to: string;
    subject: string;
    html: string;
}

export const sendEmail = async ({ to, subject, html }: EmailOptions) => {
    console.log(`[Email] Attempting to send email to: ${to.substring(0, 3)}***@${to.split('@')[1]}`);
    console.log(`[Email] Environment check - RESEND_API_KEY: ${!!process.env.RESEND_API_KEY ? 'Set' : 'Missing'}`);

    try {
        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL,
            reply_to: REPLY_TO_EMAIL,
            to,
            subject,
            html,
        });

        if (error) {
            console.error('[Email] Resend API Error:', error);
            return false;
        }

        console.log('[Email] Sent successfully. Id:', data?.id);
        return true;
    } catch (error: any) {
        console.error('[Email] Failed to send exception:', error.message);
        return false;
    }
};

interface BookingData {
    name: string;
    email?: string; // Added email field
    status: string;
    id: string;
    vehicle: string; // Keep for fallback/summary
    pickup: string;
    dropoff: string;
    date: string;
    time: string;
    passengers: number;
    vehicleCount?: number;
    luggage?: number;
    notes?: string;
    price?: string;
    selectedVehicles?: { name: string; quantity: number }[]; // New field
    country?: string;
    flightNumber?: string;
    arrivalDate?: string;
    phone?: string; // Added phone field
}

import { replaceTemplateVariables } from './email-templates';
import { getSettings } from './settings-storage';

// ... imports

// Helper to format vehicle list for the template substitution
const formatVehicles = (booking: BookingData) => {
    if (booking.selectedVehicles && booking.selectedVehicles.length > 0) {
        return `<ul style="margin: 0; padding-left: 20px;">
            ${booking.selectedVehicles.map(v => `<li>${v.quantity} x ${v.name}</li>`).join('')}
           </ul>`;
    }
    return booking.vehicle || 'Standard Vehicle';
};

const formatPriceRow = (booking: BookingData) => {
    if (!booking.price) return '';
    return `<tr>
        <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; width: 40%; color: #64748B;">
            <div style="font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Total Price</div>
        </td>
        <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; font-weight: 700; color: #0F172A; font-size: 18px;">
            ${booking.price}
        </td>
    </tr>`;
};

// Generic function to prepare variables
const prepareBookingVariables = (booking: BookingData) => {
    return {
        name: booking.name,
        booking_id: booking.id,
        date: booking.date,
        time: booking.time,
        pickup: booking.pickup,
        dropoff: booking.dropoff,
        vehicle_details: formatVehicles(booking),
        passengers: booking.passengers,
        luggage: booking.luggage || 0,
        price_row: formatPriceRow(booking), // Use row HTML for conditional rendering
        status: booking.status,
        submission_time: new Date().toLocaleString(),
        year: new Date().getFullYear(), // Added for footer
        country_row: booking.country ? `<p><strong>Country:</strong> ${booking.country}</p>` : '',
        flight_row: booking.flightNumber ? `<p><strong>Flight:</strong> ${booking.flightNumber}</p>` : '',
        arrival_date_row: booking.arrivalDate ? `<p><strong>Arrival Date:</strong> ${booking.arrivalDate}</p>` : '',
        notes_row: booking.notes ? `<p><strong>Notes:</strong> ${booking.notes}</p>` : '',
        phone_row: booking.phone ? `<p><strong>Phone:</strong> ${booking.phone}</p>` : '',
    };
};

export const getBookingConfirmationTemplate = (booking: BookingData, templateString: string) => {
    return replaceTemplateVariables(templateString, prepareBookingVariables(booking));
};

export const getAdminBookingNotificationTemplate = (booking: BookingData, templateString: string) => {
    return replaceTemplateVariables(templateString, prepareBookingVariables(booking));
};

interface ContactFeedbackData {
    name: string;
    message: string;
}

export const getContactFeedbackTemplate = ({ name, message }: ContactFeedbackData) => {
    return `
    <div style="font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #0F172A; max-width: 600px; margin: 0 auto; background-color: #FFFFFF; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(15, 23, 42, 0.05); border: 1px solid #E2E8F0;">
        <div style="text-align: center; border-bottom: 3px solid #D4AF37; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #0F172A; font-size: 24px; text-transform: uppercase; letter-spacing: 1px; margin: 0;">Thank You for Reaching Out</h1>
        </div>
        
        <div style="color: #334155; font-size: 16px; line-height: 1.6;">
            <p style="margin-bottom: 15px;">Dear <strong>${name}</strong>,</p>
            <p style="margin-bottom: 25px;">We have received your message and our support team will get back to you as soon as possible. Your inquiry is important to us.</p>
            
            <div style="background-color: #F8FAFC; padding: 20px; border-radius: 8px; border-left: 4px solid #D4AF37; margin: 30px 0;">
                <h3 style="margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; color: #64748B; letter-spacing: 0.5px;">Your Message</h3>
                <p style="margin: 0; color: #0F172A; font-style: italic;">"${message}"</p>
            </div>

            <p style="margin-top: 30px; margin-bottom: 5px;">Best Regards,</p>
            <p style="margin: 0; font-weight: 700; color: #D4AF37;">Umrah Cabs Support Team</p>
        </div>
    </div>
`;
};

export const sendBookingConfirmationEmail = async (booking: BookingData) => {
    // 1. Fetch Request Settings
    const settings = await getSettings();
    const templateString = settings.emailTemplates?.bookingConfirmation || DEFAULT_BOOKING_CONFIRMATION_TEMPLATE;

    // 2. Prepare HTML using the dynamic template
    const htmlContent = getBookingConfirmationTemplate(booking, templateString);

    // 3. Bilingual Subject
    const subject = `Booking Confirmation #${booking.id}`;

    // 4. Send
    return await sendEmail({
        to: booking.email || '', // Ensure email exists
        subject,
        html: htmlContent
    });
};

export const sendAdminNewBookingEmail = async (booking: BookingData) => {
    const adminEmail = process.env.ADMIN_EMAIL_NOTIFICATIONS || 'umrahcabs1@gmail.com'; // Fallback
    if (!adminEmail) return false;

    // 1. Fetch Request Settings
    const settings = await getSettings();
    const templateString = settings.emailTemplates?.adminNotification || DEFAULT_ADMIN_NOTIFICATION_TEMPLATE;

    const htmlContent = getAdminBookingNotificationTemplate(booking, templateString);

    return await sendEmail({
        to: adminEmail,
        subject: `🔔 New Booking #${booking.id} Received`,
        html: htmlContent
    });
};

import { DEFAULT_BOOKING_CONFIRMATION_TEMPLATE, DEFAULT_ADMIN_NOTIFICATION_TEMPLATE } from './email-templates';
