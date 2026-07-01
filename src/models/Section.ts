import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ISectionImage {
    type: 'desktop' | 'mobile' | string;
    url: string;
    alt?: string;
}

export interface ISectionCustomField {
    key: string;
    value: string;
}

export interface ISection extends Document {
    name: string;
    title?: string;
    content?: string;
    isActive: boolean;
    images?: ISectionImage[];
    customFields?: ISectionCustomField[];
    createdAt: Date;
    updatedAt: Date;
}

const sectionSchema = new Schema<ISection>({
    name: { type: String, required: true, unique: true },
    title: { type: String },
    content: { type: String },
    isActive: { type: Boolean, default: true },
    images: [{
        type: { type: String, required: true },
        url: { type: String, required: true },
        alt: { type: String }
    }],
    customFields: [{
        key: { type: String, required: true },
        value: { type: String, required: true }
    }]
}, {
    timestamps: true
});

// Use existing model if it exists, otherwise create it
export const Section: Model<ISection> = mongoose.models.Section || mongoose.model<ISection>('Section', sectionSchema);
