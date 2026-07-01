const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

// We compile TS models down to JS or run via tsx. Since we are running via tsx, we can import them directly.
// This script is meant to be run with `npx tsx scripts/seed.ts`
const { User, Vehicle, Route, Setting } = require('../src/models/index');
const { dbConnect } = require('../src/lib/mongodb');

async function seed() {
    try {
        await dbConnect();
        console.log('Connected to database.');

        // Clear existing data (optional, handle with care)
        await User.deleteMany({});
        await Vehicle.deleteMany({});
        await Route.deleteMany({});
        await Setting.deleteMany({});
        console.log('Cleared existing data.');

        // Admin User
        const adminPassword = await bcrypt.hash('admin123', 10);
        await User.create({
            name: 'System Admin',
            email: 'admin@ahsas.local',
            password: adminPassword,
            role: 'admin',
            isActive: true,
        });

        // Vehicles
        const v1 = await Vehicle.create({
            name: 'Toyota Camry',
            category: 'Standard',
            passengers: 4,
            luggage: 2,
            price: 150,
            features: ['AC', 'Free WiFi'],
            isActive: true,
        });

        const v2 = await Vehicle.create({
            name: 'GMC Yukon',
            category: 'SUV',
            passengers: 7,
            luggage: 5,
            price: 300,
            features: ['AC', 'Free WiFi', 'Spacious'],
            isActive: true,
        });

        // Routes
        await Route.create({
            origin: 'Jeddah Airport',
            destination: 'Makkah Hotel',
            distance: '100 km',
            duration: '1.5 hours',
            isActive: true,
        });

        await Route.create({
            origin: 'Makkah Hotel',
            destination: 'Madinah Hotel',
            distance: '450 km',
            duration: '4.5 hours',
            isActive: true,
        });

        // Settings
        await Setting.create({
            key: 'site_name',
            value: 'Ahsas Cab Services',
            type: 'text'
        });

        console.log('Seeding completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
}

seed();
