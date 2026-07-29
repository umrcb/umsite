require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

const vehiclesData = [
    { key: 'Car', name: 'Toyota Camry', category: 'Standard', passengers: 4, luggage: 4, images: ['/images/fleet/camry-transparent.png'], isActive: true },
    { key: 'Hiace', name: 'Toyota Hiace', category: 'Premium', passengers: 11, luggage: 11, images: ['/images/fleet/hiace-transparent.png'], isActive: true },
    { key: 'GMC', name: 'GMC Yukon', category: 'Premium', passengers: 7, luggage: 7, images: ['/images/fleet/gmc-transparent.png'], isActive: true },
    { key: 'Staria', name: 'Hyundai Staria', category: 'Premium', passengers: 7, luggage: 7, images: ['/images/fleet/staria-transparent.png'], isActive: true },
    { key: 'Coaster', name: 'Toyota Coaster', category: 'Standard', passengers: 19, luggage: 15, images: ['/images/fleet/coaster-transparent.png'], isActive: true },
];

const pricingMatrix = [
    { route: 'Per Hour Rates', car: 70, hiace: 100, gmc: 140, staria: 90, coaster: 200 },
    { route: 'Jeddah Airport → Jeddah Hotel', car: 130, hiace: 200, gmc: 300, staria: 150, coaster: 350 },
    { route: 'Jeddah Airport → Makkah Hotel', car: 200, hiace: 300, gmc: 450, staria: 225, coaster: 500 },
    { route: 'Jeddah Airport → Madinah Hotel', car: 380, hiace: 530, gmc: 1000, staria: 425, coaster: 850 },
    { route: 'Madinah Hotel → Jeddah Airport', car: 360, hiace: 500, gmc: 900, staria: 420, coaster: 800 },
    { route: 'Makkah Ziyarat', car: 170, hiace: 250, gmc: 350, staria: 200, coaster: 400 },
    { route: 'Madinah Ziyarat', car: 170, hiace: 250, gmc: 350, staria: 200, coaster: 400 },
    { route: 'Makkah → Taif (Return)', car: 400, hiace: 550, gmc: 900, staria: 450, coaster: 800 },
    { route: 'Jeddah → Taif (Return)', car: 550, hiace: 700, gmc: 1000, staria: 600, coaster: 1200 },
    { route: 'Makkah Hotel → Madinah Hotel', car: 350, hiace: 500, gmc: 800, staria: 420, coaster: 800 },
    { route: 'Madinah Hotel → Makkah Hotel', car: 350, hiace: 500, gmc: 800, staria: 420, coaster: 800 },
    { route: 'Madinah Hotel → Madinah Airport', car: 100, hiace: 200, gmc: 250, staria: 150, coaster: 300 },
    { route: 'Madinah Airport → Madinah Hotel', car: 150, hiace: 250, gmc: 300, staria: 200, coaster: 350 },
    { route: 'Makkah Hotel → Jeddah Airport', car: 150, hiace: 250, gmc: 350, staria: 200, coaster: 350 },
    { route: 'Makkah Hotel → Train Station', car: 100, hiace: 200, gmc: 250, staria: 150, coaster: 300 },
    { route: 'Madinah Hotel → Train Station', car: 120, hiace: 200, gmc: 250, staria: 150, coaster: 300 },
];

function parseRouteName(routeName) {
    if (routeName === 'Per Hour Rates') return { origin: 'Hourly Booking', destination: 'Per Hour' };
    if (routeName === 'Makkah Ziyarat') return { origin: 'Makkah', destination: 'Ziyarat' };
    if (routeName === 'Madinah Ziyarat') return { origin: 'Madinah', destination: 'Ziyarat' };
    if (routeName === 'Makkah → Taif (Return)') return { origin: 'Makkah', destination: 'Taif (Return)' };
    if (routeName === 'Jeddah → Taif (Return)') return { origin: 'Jeddah', destination: 'Taif (Return)' };
    const parts = routeName.split(' → ');
    if (parts.length === 2) return { origin: parts[0], destination: parts[1] };
    return { origin: routeName, destination: '' };
}

async function run() {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('umrahcabs');

    const vehiclesCol = db.collection('vehicles');
    const routesCol = db.collection('routes');
    const routePricesCol = db.collection('routeprices');

    console.log('Clearing old routes and pricing...');
    await routesCol.deleteMany({});
    await routePricesCol.deleteMany({});

    console.log('Upserting vehicles...');
    const vehicleDocsMap = {};
    for (const vData of vehiclesData) {
        // Upsert vehicle
        let vDoc = await vehiclesCol.findOne({ name: { $regex: vData.name, $options: 'i' } });
        if (vDoc) {
            await vehiclesCol.updateOne({ _id: vDoc._id }, { $set: { passengers: vData.passengers, luggage: vData.luggage, images: vData.images } });
            console.log('Updated', vData.name);
            vehicleDocsMap[vData.key] = vDoc._id;
        } else {
            const res = await vehiclesCol.insertOne({
                name: vData.name,
                category: vData.category,
                passengers: vData.passengers,
                luggage: vData.luggage,
                price: 0,
                features: ['Air Conditioning', 'Complimentary Water', 'USB Charging'],
                images: vData.images,
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            console.log('Created', vData.name);
            vehicleDocsMap[vData.key] = res.insertedId;
        }
    }

    console.log('Inserting routes and route prices...');
    for (const p of pricingMatrix) {
        const { origin, destination } = parseRouteName(p.route);
        let category = 'Intercity';
        if (origin.includes('Airport') || destination.includes('Airport')) {
            category = origin.includes('Airport') ? 'Airport Departure' : 'Airport Arrival';
        } else if (destination.includes('Ziyarat')) {
            category = 'Ziarat';
        } else if (origin.includes('Hourly')) {
            category = 'Hourly';
        }

        const res = await routesCol.insertOne({
            origin,
            destination,
            category,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        const routeId = res.insertedId;

        const pricesToInsert = [
            { vKey: 'Car', price: p.car },
            { vKey: 'Hiace', price: p.hiace },
            { vKey: 'GMC', price: p.gmc },
            { vKey: 'Staria', price: p.staria },
            { vKey: 'Coaster', price: p.coaster },
        ];

        for (const pt of pricesToInsert) {
            const vehicleId = vehicleDocsMap[pt.vKey];
            if (vehicleId) {
                await routePricesCol.insertOne({
                    route: routeId,
                    vehicle: vehicleId,
                    price: pt.price,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
            }
        }
        console.log(`Added route ${p.route} with prices`);
    }

    await client.close();
    console.log('Done seeding!');
}

run().catch(console.error);
