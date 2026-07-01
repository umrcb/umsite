import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IDraftBooking extends Document {
    sessionId: string;
    data: any;
    step: number;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
}

const DraftBookingSchema = new Schema<IDraftBooking>({
    sessionId: { type: String, required: true },
    data: { type: Schema.Types.Mixed },
    step: { type: Number, default: 1 },
    expiresAt: { type: Date, required: true },
}, { timestamps: true });

export const DraftBooking: Model<IDraftBooking> = mongoose.models.DraftBooking || mongoose.model<IDraftBooking>('DraftBooking', DraftBookingSchema);
