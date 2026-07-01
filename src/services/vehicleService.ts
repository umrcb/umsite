import { dbConnect } from '@/lib/mongodb';
import { Vehicle, IVehicle } from '@/models/Vehicle';

export class VehicleService {
    /**
     * Get all active vehicles
     */
    static async getActiveVehicles(): Promise<IVehicle[]> {
        await dbConnect();
        return Vehicle.find({ isActive: true }).lean();
    }

    /**
     * Get a single vehicle by ID
     */
    static async getVehicleById(id: string): Promise<IVehicle | null> {
        await dbConnect();
        return Vehicle.findById(id).lean();
    }

    /**
     * Create a new vehicle (Admin)
     */
    static async createVehicle(data: Partial<IVehicle>): Promise<IVehicle> {
        await dbConnect();
        return Vehicle.create(data);
    }

    /**
     * Update a vehicle (Admin)
     */
    static async updateVehicle(id: string, updates: Partial<IVehicle>): Promise<IVehicle | null> {
        await dbConnect();
        return Vehicle.findByIdAndUpdate(id, updates, { new: true }).lean();
    }

    /**
     * Delete / deactivate a vehicle (Admin)
     */
    static async deleteVehicle(id: string): Promise<boolean> {
        await dbConnect();
        // Soft delete via isActive flag is preferred
        const result = await Vehicle.findByIdAndUpdate(id, { isActive: false });
        return !!result;
    }
}
