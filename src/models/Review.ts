import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IReview extends Document {
    userId?: mongoose.Types.ObjectId;
    bookingId?: mongoose.Types.ObjectId;
    name: string;
    rating: number;
    comment: string;
    source: 'google' | 'website';
    status: 'pending' | 'approved' | 'rejected';
    createdAt: Date;
    updatedAt: Date;
}

const ReviewSchema = new Schema<IReview>({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    bookingId: { type: Schema.Types.ObjectId, ref: 'Booking' },
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    source: { type: String, enum: ['google', 'website'], default: 'website' },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending', index: true },
}, { timestamps: true });

export const Review: Model<IReview> = mongoose.models.Review || mongoose.model<IReview>('Review', ReviewSchema);
