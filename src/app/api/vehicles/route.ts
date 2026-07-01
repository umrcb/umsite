import { NextResponse } from 'next/server';
import { VehicleService } from '@/services/vehicleService';

export async function GET(req: Request) {
    try {
        const vehicles = await VehicleService.getActiveVehicles();
        return NextResponse.json({ success: true, data: vehicles });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        // TODO: Add Authentication & Admin Role check here
        
        const body = await req.json();
        const newVehicle = await VehicleService.createVehicle(body);
        
        return NextResponse.json({ success: true, data: newVehicle }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
