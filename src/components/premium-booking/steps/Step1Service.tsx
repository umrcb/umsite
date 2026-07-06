'use client';

import React from 'react';
import { usePremiumBooking } from '../BookingContext';
import { Plane, Car, Map, ArrowRightLeft, Building, Building2, Crown, Users } from 'lucide-react';

const services = [
    { id: 'airport_transfer', name: 'Airport Transfer', icon: Plane, description: 'To or from Jeddah & Madinah airports' },
    { id: 'umrah_transport', name: 'Umrah Transport', icon: Car, description: 'Makkah to Madinah premium rides' },
    { id: 'ziyarat_tour', name: 'Ziyarat Tour', icon: Map, description: 'Guided holy sites tour' },
    { id: 'intercity', name: 'Intercity Transfer', icon: ArrowRightLeft, description: 'City-to-city travel in KSA' },
    { id: 'hotel_pickup', name: 'Hotel Pickup', icon: Building, description: 'From your hotel to any destination' },
    { id: 'hotel_dropoff', name: 'Hotel Drop-off', icon: Building2, description: 'Arrive at your hotel in comfort' },
    { id: 'vip_transfer', name: 'VIP Transfer', icon: Crown, description: 'Luxury fleet for VIP guests' },
    { id: 'group_transport', name: 'Group Transport', icon: Users, description: 'Vans and coasters for groups' },
];

export default function Step1Service() {
    const { state, updateState, nextStep } = usePremiumBooking();

    const handleSelect = (serviceId: string) => {
        updateState({ service: serviceId });
        // Automatically advance to the next step
        nextStep();
    };

    return (
        <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Select Service</h2>
            <p className="text-slate-500 mb-8">What type of journey are you planning?</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                {services.map((svc) => {
                    const Icon = svc.icon;
                    const isSelected = state.service === svc.id;

                    return (
                        <button
                            key={svc.id}
                            onClick={() => handleSelect(svc.id)}
                            className={`flex flex-col items-center text-center p-6 rounded-2xl border-2 transition-all duration-300 ${
                                isSelected 
                                ? 'border-emerald-600 bg-emerald-50 shadow-md transform -translate-y-1' 
                                : 'border-slate-100 bg-white hover:border-emerald-200 hover:shadow-lg'
                            }`}
                        >
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors ${
                                isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                            }`}>
                                <Icon size={28} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">{svc.name}</h3>
                            <p className="text-xs text-slate-500">{svc.description}</p>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
