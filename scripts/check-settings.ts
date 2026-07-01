import dbConnect from '../src/lib/mongodb';
import { Setting } from '../src/models';

async function checkSettings() {
    try {
        await dbConnect();
        console.log('Connected to DB');
        
        const settings = await Setting.find({}).lean();
        console.log('Current Settings:');
        settings.forEach(s => {
            if (s.key.startsWith('discount_')) {
                console.log(`${s.key}: ${s.value}`);
            }
        });
    } catch (error) {
        console.error('Error checking settings:', error);
    }
    process.exit();
}

checkSettings();
