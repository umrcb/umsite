import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISubscriber extends Document {
    email: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const SubscriberSchema = new Schema<ISubscriber>({
    email: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

export const Subscriber: Model<ISubscriber> = mongoose.models.Subscriber || mongoose.model<ISubscriber>('Subscriber', SubscriberSchema);
