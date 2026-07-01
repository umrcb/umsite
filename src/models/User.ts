import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
    name?: string;
    email: string;
    password?: string;
    phone?: string;
    role: 'user' | 'admin' | 'manager' | 'driver';
    isActive: boolean;
    location?: {
        lat: number;
        lng: number;
        address?: string;
        lastUpdated: Date;
    };
    branding?: {
        logo: string;
        primaryColor: string;
    };
    pushSubscription?: any;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
    name: { type: String },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String },
    phone: { type: String },
    role: { type: String, enum: ['user', 'admin', 'manager', 'driver'], default: 'user' },
    isActive: { type: Boolean, default: true },
    location: {
        lat: { type: Number },
        lng: { type: Number },
        address: { type: String },
        lastUpdated: { type: Date }
    },
    branding: {
        logo: { type: String },
        primaryColor: { type: String }
    },
    pushSubscription: { type: Schema.Types.Mixed }
}, { timestamps: true });

export const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
