import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IVehicle extends Document {
    name: string;
    category: string;
    passengers: number;
    luggage: number;
    features: string[];
    price: number;
    hourlyRate?: number;
    images: string[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const VehicleSchema = new Schema<IVehicle>({
    name: { type: String, required: true },
    category: { type: String, default: 'Standard', index: true },
    passengers: { type: Number, required: true, default: 4 },
    luggage: { type: Number, required: true, default: 2 },
    features: { type: [String], default: [] },
    price: { type: Number, required: true },
    hourlyRate: { type: Number },
    images: { type: [String], default: [] },
    isActive: { type: Boolean, default: true, index: true },
}, { timestamps: true });

export const Vehicle: Model<IVehicle> = mongoose.models.Vehicle || mongoose.model<IVehicle>('Vehicle', VehicleSchema);
