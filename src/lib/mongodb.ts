import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    if (process.env.NODE_ENV !== 'production') {
        console.warn('MONGODB_URI is not defined in environment variables. Connection will fail if required.');
    }
}

interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    // eslint-disable-next-line no-var
    var mongoose: MongooseCache | undefined;
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
    if (cached!.conn) {
        return cached!.conn;
    }

    if (!cached!.promise) {
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        };

        cached!.promise = mongoose.connect(MONGODB_URI as string, opts).then((mongooseInstance) => {
            return mongooseInstance;
        }).catch(err => {
            console.error('Mongoose connection error:', err);
            cached!.promise = null;
            throw err;
        });
    }

    try {
        cached!.conn = await cached!.promise;
    } catch (e) {
        cached!.promise = null;
        cached!.conn = null;
        throw e;
    }

    return cached!.conn;
}

export default dbConnect;
