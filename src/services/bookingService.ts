import { dbConnect } from '@/lib/mongodb';
import { Booking, IBooking } from '@/models/Booking';

export class BookingService {
    /**
     * Get all bookings (Admin)
     */
    static async getAllBookings(skip = 0, limit = 50): Promise<IBooking[]> {
        await dbConnect();
        return Booking.find()
            .populate('userId', 'name email')
            .populate('vehicles.vehicleId', 'name category')
            .populate('routeId', 'origin destination')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean();
    }

    /**
     * Get user's bookings
     */
    static async getUserBookings(userId: string): Promise<IBooking[]> {
        await dbConnect();
        return Booking.find({ userId })
            .populate('vehicles.vehicleId', 'name category')
            .sort({ createdAt: -1 })
            .lean();
    }

    /**
     * Get a single booking by ID
     */
    static async getBookingById(id: string): Promise<IBooking | null> {
        await dbConnect();
        return Booking.findById(id)
            .populate('userId', 'name email')
            .populate('vehicles.vehicleId', 'name')
            .populate('routeId', 'origin destination')
            .lean();
    }

    /**
     * Create a new booking
     */
    static async createBooking(data: Partial<IBooking>): Promise<IBooking> {
        await dbConnect();
        return Booking.create(data);
    }

    /**
     * Update booking status (Admin)
     */
    static async updateStatus(id: string, status: IBooking['status']): Promise<IBooking | null> {
        await dbConnect();
        return Booking.findByIdAndUpdate(id, { status }, { new: true }).lean();
    }
}
