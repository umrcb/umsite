import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IGalleryItem extends Document {
    title: string;
    url: string;
    category: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const GalleryItemSchema = new Schema<IGalleryItem>({
    title: { type: String, required: true },
    url: { type: String, required: true },
    category: { type: String, default: 'general' },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

export const GalleryItem: Model<IGalleryItem> = mongoose.models.GalleryItem || mongoose.model<IGalleryItem>('GalleryItem', GalleryItemSchema);
