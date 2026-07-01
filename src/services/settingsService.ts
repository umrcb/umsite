import dbConnect from '@/lib/mongodb';
import { Setting } from '@/models';

export const settingsService = {
    async getSettings() {
        await dbConnect();
        const settings = await Setting.find({}).lean();
        return settings.map((s: any) => ({ key: s.key, value: s.value }));
    },

    async getSetting(key: string) {
        await dbConnect();
        const setting = await Setting.findOne({ key }).lean();
        return setting ? setting.value : null;
    },

    async updateSetting(key: string, value: string) {
        await dbConnect();
        const updatedSetting = await Setting.findOneAndUpdate(
            { key },
            { value },
            { upsert: true, new: true }
        ).lean();
        return updatedSetting;
    },
};
