'use client';

import React from 'react';
import { UserCheck, Fuel, MapPin, Plane, Clock, Snowflake, Droplets, BatteryCharging, Navigation, Sparkles, ShieldCheck, Headphones } from 'lucide-react';

const inclusions = [
    { icon: <UserCheck size={28} strokeWidth={1.5} />, label: "Professional\nChauffeur" },
    { icon: <Fuel size={28} strokeWidth={1.5} />, label: "Fuel & Toll\nCharges" },
    { icon: <MapPin size={28} strokeWidth={1.5} />, label: "Airport Meet\n& Greet" },
    { icon: <Plane size={28} strokeWidth={1.5} />, label: "Flight\nMonitoring" },
    { icon: <Clock size={28} strokeWidth={1.5} />, label: "Waiting Time\nIncluded" },
    { icon: <Snowflake size={28} strokeWidth={1.5} />, label: "Air\nConditioning" },
    { icon: <Droplets size={28} strokeWidth={1.5} />, label: "Complimentary\nWater" },
    { icon: <BatteryCharging size={28} strokeWidth={1.5} />, label: "Phone\nCharging" },
    { icon: <Navigation size={28} strokeWidth={1.5} />, label: "GPS\nTracking" },
    { icon: <Sparkles size={28} strokeWidth={1.5} />, label: "Daily\nSanitization" },
    { icon: <ShieldCheck size={28} strokeWidth={1.5} />, label: "Fully\nInsured" },
    { icon: <Headphones size={28} strokeWidth={1.5} />, label: "24/7 Customer\nSupport" }
];

export default function PricingWhatsIncluded() {
    return (
        <div className="w-full flex flex-col h-full bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
            
            <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy mb-2">What's Included in Every Ride</h2>
                <div className="w-12 h-1 bg-primary rounded-full" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 flex-grow">
                {inclusions.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center group">
                        <div className="w-14 h-14 rounded-2xl bg-slate-50 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white group-hover:-translate-y-1 transition-all duration-300">
                            {item.icon}
                        </div>
                        <span className="text-xs font-semibold text-navy leading-snug whitespace-pre-line">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
