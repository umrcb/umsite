import React, { Suspense } from 'react';
import { VehicleService } from '@/services/vehicleService';
import { getSettings } from '@/lib/settings-storage';
import FleetShowcaseClient, { FleetVehicle } from './FleetShowcaseClient';

async function FleetFetcher() {
    const vehicles = await VehicleService.getActiveVehicles();
    const settings = await getSettings();

    // Map to FleetVehicle format
    const showcaseVehicles: FleetVehicle[] = vehicles
        .filter(v => v.isActive && v.image && v.image.trim() !== '')
        .slice(0, 6)
        .map((v, idx) => ({
            id: (v as any)._id ? (v as any)._id.toString() : (v.id || `vehicle-${idx}`),
            name: v.name,
            image: v.image,
            passengers: v.name.toLowerCase().includes('hiace') ? "10/11" : v.passengers,
            luggage: v.luggage,
            features: v.features,
            price: v.price > 0 ? `SAR ${v.price}` : getStartingPrice(v.name)
        }));

    return <FleetShowcaseClient vehicles={showcaseVehicles} discount={settings.discount} />;
}

function getStartingPrice(name: string): string {
    const n = name.toLowerCase();
    if (n.includes('camry')) return 'SAR 200';
    if (n.includes('yukon') || n.includes('gmc')) return 'SAR 400';
    if (n.includes('staria')) return 'SAR 300';
    if (n.includes('starex') || n.includes('h1')) return 'SAR 250';
    if (n.includes('hiace')) return 'SAR 350';
    if (n.includes('coaster')) return 'SAR 600';
    if (n.includes('bus')) return 'SAR 600';
    return 'Contact us';
}

export default function FleetShowcase() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 pattern-grid-fade opacity-5 pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 mb-16 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-6">
                        Premium Fleet
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0F172A] mb-6">
                        Travel in <span className="text-gold">Absolute Comfort</span>
                    </h2>
                    <p className="text-[#475569] text-lg leading-relaxed font-inter">
                        Meticulously maintained vehicles designed for your comfort, safety, and style.
                    </p>
                </div>
            </div>

            <Suspense fallback={<div className="h-[500px] w-full max-w-7xl mx-auto bg-slate-50 animate-pulse rounded-3xl" />}>
                <FleetFetcher />
            </Suspense>
        </section>
    );
}
