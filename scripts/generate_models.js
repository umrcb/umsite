const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, '../src/models');
if (!fs.existsSync(modelsDir)) {
    fs.mkdirSync(modelsDir, { recursive: true });
}

// 1. User
const userModel = `import mongoose, { Schema, Document, Model } from 'mongoose';

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
`;

// 2. Vehicle
const vehicleModel = `import mongoose, { Schema, Document, Model } from 'mongoose';

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
`;

// 3. Route
const routeModel = `import mongoose, { Schema, Document, Model } from 'mongoose';

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
`;

// 4. Booking
const bookingModel = `import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBooking extends Document {
    userId?: mongoose.Types.ObjectId;
    customerInfo: {
        name: string;
        email: string;
        phone: string;
    };
    pickup: string;
    dropoff: string;
    datetime: Date;
    routeId?: mongoose.Types.ObjectId;
    vehicles: {
        vehicleId: mongoose.Types.ObjectId;
        quantity: number;
    }[];
    passengers: number;
    luggage: number;
    notes?: string;
    flightNumber?: string;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    payment: {
        method: string;
        status: 'paid' | 'unpaid' | 'refunded';
        amount: number;
        currency: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
    customerInfo: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
    },
    pickup: { type: String, required: true },
    dropoff: { type: String, required: true },
    datetime: { type: Date, required: true, index: true },
    routeId: { type: Schema.Types.ObjectId, ref: 'Route' },
    vehicles: [{
        vehicleId: { type: Schema.Types.ObjectId, ref: 'Vehicle' },
        quantity: { type: Number, default: 1 }
    }],
    passengers: { type: Number, default: 1 },
    luggage: { type: Number, default: 0 },
    notes: { type: String },
    flightNumber: { type: String },
    status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending', index: true },
    payment: {
        method: { type: String, default: 'cash' },
        status: { type: String, enum: ['paid', 'unpaid', 'refunded'], default: 'unpaid' },
        amount: { type: Number, required: true },
        currency: { type: String, default: 'SAR' },
    }
}, { timestamps: true });

export const Booking: Model<IBooking> = mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);
`;

// 5. Review
const reviewModel = `import mongoose, { Schema, Document, Model } from 'mongoose';

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
`;

// 6. Settings
const settingsModel = `import mongoose, { Schema, Document, Model } from 'mongoose';

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
`;

// 7. Index
const indexModel = `export * from './User';
export * from './Vehicle';
export * from './Route';
export * from './Booking';
export * from './Review';
export * from './Setting';
`;

fs.writeFileSync(path.join(modelsDir, 'User.ts'), userModel);
fs.writeFileSync(path.join(modelsDir, 'Vehicle.ts'), vehicleModel);
fs.writeFileSync(path.join(modelsDir, 'Route.ts'), routeModel);
fs.writeFileSync(path.join(modelsDir, 'Booking.ts'), bookingModel);
fs.writeFileSync(path.join(modelsDir, 'Review.ts'), reviewModel);
fs.writeFileSync(path.join(modelsDir, 'Setting.ts'), settingsModel);
fs.writeFileSync(path.join(modelsDir, 'index.ts'), indexModel);

console.log('Successfully generated new models');
