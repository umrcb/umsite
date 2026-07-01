import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IRoutePrice extends Document {
    route: mongoose.Types.ObjectId;
    vehicle: mongoose.Types.ObjectId;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

const RoutePriceSchema = new Schema<IRoutePrice>({
    route: { type: Schema.Types.ObjectId, ref: 'Route', required: true },
    vehicle: { type: Schema.Types.ObjectId, ref: 'Vehicle', required: true },
    price: { type: Number, required: true },
}, { timestamps: true });

RoutePriceSchema.index({ route: 1, vehicle: 1 }, { unique: true });

export const RoutePrice: Model<IRoutePrice> = mongoose.models.RoutePrice || mongoose.model<IRoutePrice>('RoutePrice', RoutePriceSchema);
