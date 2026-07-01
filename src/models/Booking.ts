import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBooking extends Document {
    userId?: mongoose.Types.ObjectId;
    customerInfo: {
        name: string;
        email: string;
        phone: string;
    };
    pickup: string;
    dropoff: string;
    datetime: Date;
    routeId?: mongoose.Types.ObjectId;
    vehicles: {
        vehicleId: mongoose.Types.ObjectId;
        quantity: number;
    }[];
    passengers: number;
    luggage: number;
    notes?: string;
    flightNumber?: string;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    payment: {
        method: string;
        status: 'paid' | 'unpaid' | 'refunded';
        amount: number;
        currency: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
    customerInfo: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
    },
    pickup: { type: String, required: true },
    dropoff: { type: String, required: true },
    datetime: { type: Date, required: true, index: true },
    routeId: { type: Schema.Types.ObjectId, ref: 'Route' },
    vehicles: [{
        vehicleId: { type: Schema.Types.ObjectId, ref: 'Vehicle' },
        quantity: { type: Number, default: 1 }
    }],
    passengers: { type: Number, default: 1 },
    luggage: { type: Number, default: 0 },
    notes: { type: String },
    flightNumber: { type: String },
    status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending', index: true },
    payment: {
        method: { type: String, default: 'cash' },
        status: { type: String, enum: ['paid', 'unpaid', 'refunded'], default: 'unpaid' },
        amount: { type: Number, required: true },
        currency: { type: String, default: 'SAR' },
    }
}, { timestamps: true });

export const Booking: Model<IBooking> = mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);
