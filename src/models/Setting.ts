import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISetting extends Document {
    key: string;
    value: any;
    type: string;
    createdAt: Date;
    updatedAt: Date;
}

const SettingSchema = new Schema<ISetting>({
    key: { type: String, required: true, unique: true, index: true },
    value: { type: Schema.Types.Mixed, required: true },
    type: { type: String, default: 'text' },
}, { timestamps: true });

export const Setting: Model<ISetting> = mongoose.models.Setting || mongoose.model<ISetting>('Setting', SettingSchema);
