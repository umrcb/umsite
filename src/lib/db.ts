import { Booking } from '@/models';
import { VehicleService } from '@/services/vehicleService';
import dbConnect from './mongodb';

// Booking helpers
export const getBookings = async () => {
    await dbConnect();
    return Booking.find({}).sort({ createdAt: -1 }).lean();
};

export const getBooking = async (id: string) => {
    await dbConnect();
    return Booking.findById(id).lean();
};

export const addBooking = async (data: any) => {
    await dbConnect();
    return Booking.create(data);
};

export const updateBooking = async (id: string, data: any) => {
    await dbConnect();
    return Booking.findByIdAndUpdate(id, data, { new: true }).lean();
};

export const updateBookingStatus = async (id: string, status: string) => {
    await dbConnect();
    return Booking.findByIdAndUpdate(id, { status }, { new: true }).lean();
};

export const deleteBooking = async (id: string) => {
    await dbConnect();
    return Booking.findByIdAndDelete(id).lean();
};

// Fleet helpers
export const getFleet = async () => {
    return VehicleService.getActiveVehicles();
};

export const addVehicle = async (data: any) => {
    return VehicleService.createVehicle(data);
};

export const updateVehicle = async (id: string, data: any) => {
    return VehicleService.updateVehicle(id, data);
};

export const deleteVehicle = async (id: string) => {
    return VehicleService.deleteVehicle(id);
};

// Dashboard Stats
export const getDashboardStats = async () => {
    await dbConnect();
    const totalBookings = await Booking.countDocuments();
    const pendingBookings = await Booking.countDocuments({ status: 'pending' });
    const completedBookings = await Booking.countDocuments({ status: 'completed' });
    
    // Calculate simple revenue
    const bookings = await Booking.find({ status: 'completed' }).select('price').lean();
    const revenue = bookings.reduce((sum: number, b: any) => sum + (Number(b.price) || 0), 0);

    return {
        totalBookings,
        pendingBookings,
        completedBookings,
        revenue,
        conversionRate: 15,
        visitors: 1200
    };
};
