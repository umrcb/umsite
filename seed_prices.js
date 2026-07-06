const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://umrahcabs1_db_user:Yx9NtydH8rw3l7Ya@ac-gz4yynl-shard-00-00.oyrxhf3.mongodb.net:27017,ac-gz4yynl-shard-00-01.oyrxhf3.mongodb.net:27017,ac-gz4yynl-shard-00-02.oyrxhf3.mongodb.net:27017/umrah_taxi_services?ssl=true&replicaSet=atlas-72xrut-shard-0&authSource=admin&retryWrites=true&w=majority';

async function seed() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB');

        const vehicleSchema = new mongoose.Schema({
            name: String,
            category: String,
            passengers: Number,
            luggage: Number,
            hourlyRate: Number,
            isActive: Boolean
        }, { timestamps: true });

        const routeSchema = new mongoose.Schema({
            origin: String,
            destination: String,
            isActive: Boolean
        }, { timestamps: true });

        const routePriceSchema = new mongoose.Schema({
            route: { type: mongoose.Schema.Types.ObjectId, ref: 'routes' },
            vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'vehicles' },
            price: Number
        }, { timestamps: true });

        const Vehicle = mongoose.models.vehicles || mongoose.model('vehicles', vehicleSchema);
        const Route = mongoose.models.routes || mongoose.model('routes', routeSchema);
        const RoutePrice = mongoose.models.routeprices || mongoose.model('routeprices', routePriceSchema);

        // Delete existing pricing and routes to avoid duplicates for now
        await RoutePrice.deleteMany({});
        console.log('Deleted old prices');

        // Note: we might not want to delete vehicles if they have images, but let's update them
        const vehiclesData = [
            { name: 'Car', passengers: 4, luggage: 3, hourlyRate: 70 },
            { name: 'Hiace', passengers: 11, luggage: 11, hourlyRate: 100 },
            { name: 'GMC', passengers: 7, luggage: 7, hourlyRate: 140 },
            { name: 'MP4', passengers: 4, luggage: 5, hourlyRate: 80 },
            { name: 'Staria', passengers: 7, luggage: 7, hourlyRate: 90 },
            { name: 'Coaster', passengers: 18, luggage: 20, hourlyRate: 200 },
        ];

        const vehicleMap = {};
        for (const v of vehiclesData) {
            let vehicle = await Vehicle.findOne({ name: { $regex: new RegExp(`^${v.name}$`, 'i') } });
            if (vehicle) {
                vehicle.passengers = v.passengers;
                vehicle.luggage = v.luggage;
                vehicle.hourlyRate = v.hourlyRate;
                vehicle.isActive = true;
                await vehicle.save();
            } else {
                vehicle = await Vehicle.create({ ...v, category: 'Standard', isActive: true });
            }
            vehicleMap[v.name] = vehicle._id;
        }
        console.log('Vehicles ready');

        const routesData = [
            { origin: 'Jeddah Airport', destination: 'Jeddah Hotel', prices: [130, 200, 300, 140, 150, 350] },
            { origin: 'Jeddah Airport', destination: 'Makkah Hotel', prices: [200, 300, 450, 210, 225, 500] },
            { origin: 'Jeddah Airport', destination: 'Madinah Hotel', prices: [380, 530, 1000, 400, 425, 850] },
            { origin: 'Madina Hotel', destination: 'Jeddah Airport', prices: [360, 500, 900, 400, 420, 800] },
            { origin: 'Makkah', destination: 'Ziyyarat', prices: [170, 250, 350, 175, 200, 400] },
            { origin: 'Madinah', destination: 'Ziyarat', prices: [170, 250, 350, 175, 200, 400] },
            { origin: 'Makkah', destination: 'Taif and Return', prices: [400, 550, 900, 400, 450, 800] },
            { origin: 'Jeddah', destination: 'Taif and Return', prices: [550, 700, 1000, 550, 600, 1200] },
            { origin: 'Makkah Hotel', destination: 'Madinah Hotel', prices: [350, 500, 800, 400, 420, 800] },
            { origin: 'Madinah Hotel', destination: 'Makkah Hotel', prices: [350, 500, 800, 400, 420, 800] },
            { origin: 'Madinah Hotel', destination: 'Madinah Airport', prices: [100, 200, 250, 130, 150, 300] },
            { origin: 'Madinah Airport', destination: 'Madinah Hotel', prices: [150, 250, 300, 180, 200, 350] },
            { origin: 'Makkah Hotel', destination: 'Jeddah Airport', prices: [150, 250, 350, 180, 200, 350] },
            { origin: 'Makkah Hotel', destination: 'Train Station', prices: [100, 200, 250, 150, 150, 300] },
            { origin: 'Madinah Hotel', destination: 'Train Station', prices: [120, 200, 250, 150, 150, 300] },
        ];

        await Route.deleteMany({});
        console.log('Deleted old routes');

        const vehicleNames = ['Car', 'Hiace', 'GMC', 'MP4', 'Staria', 'Coaster'];

        for (const r of routesData) {
            const route = await Route.create({ origin: r.origin, destination: r.destination, isActive: true });
            
            for (let i = 0; i < vehicleNames.length; i++) {
                const vehicleId = vehicleMap[vehicleNames[i]];
                const price = r.prices[i];
                if (price > 0) {
                    await RoutePrice.create({
                        route: route._id,
                        vehicle: vehicleId,
                        price: price
                    });
                }
            }
        }
        console.log('Seeding complete!');
    } catch (e) {
        console.error(e);
    } finally {
        process.exit(0);
    }
}

seed();
