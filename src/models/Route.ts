import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IRoute extends Document {
    origin: string;
    destination: string;
    distance?: string;
    duration?: string;
    category: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const RouteSchema = new Schema<IRoute>({
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    distance: { type: String },
    duration: { type: String },
    category: { type: String, default: 'Standard' },
    isActive: { type: Boolean, default: true, index: true },
}, { timestamps: true });

RouteSchema.index({ origin: 1, destination: 1 }, { unique: true });

export const Route: Model<IRoute> = mongoose.models.Route || mongoose.model<IRoute>('Route', RouteSchema);
