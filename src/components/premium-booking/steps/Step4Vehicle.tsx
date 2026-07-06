'use client';

import React, { useEffect, useState } from 'react';
import { usePremiumBooking } from '../BookingContext';
import { Users, Luggage, CheckCircle, ArrowRight, Loader2, Info } from 'lucide-react';
import Image from 'next/image';

export default function Step4Vehicle({ hideButtons = false }: { hideButtons?: boolean }) {
    const { state, updateState, nextStep, prevStep } = usePremiumBooking();
    const [vehicles, setVehicles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/pricing')
            .then(res => res.json())
            .then(data => {
                if (data.vehicles) {
                    setVehicles(data.vehicles);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch vehicles', err);
                setLoading(false);
            });
    }, []);

    const handleSelect = (v: any, price: number) => {
        updateState({ 
            selectedVehicles: [{ vehicleId: v.id, vehicleName: v.name, quantity: 1 }],
            calculatedPrice: price
        });
    };

    const handleNext = () => {
        if (state.selectedVehicles.length > 0) {
            nextStep();
        }
    };

    const isComplete = state.selectedVehicles.length > 0;

    return (
        <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Select Vehicle</h2>
            <p className="text-slate-500 mb-8">Choose the perfect premium ride for your journey.</p>

            {loading ? (
                <div className="flex justify-center items-center py-12">
                    <Loader2 className="animate-spin text-emerald-600" size={32} />
                </div>
            ) : (
                <div className="space-y-4 mb-8 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    {vehicles.map((v) => {
                        const isSelected = state.selectedVehicles.some(sv => sv.vehicleId === v.id);
                        
                        // Extract dynamic price based on the selected route
                        const isHourly = state.journeyType === 'Hourly Hire';
                        const price = isHourly ? (v.hourlyRate || 0) : (state.route?.customRates?.[v.id] || 0);

                        return (
                            <div
                                key={v.id}
                                onClick={() => handleSelect(v, price)}
                                className={`relative flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl border-2 transition-all duration-300 cursor-pointer group ${
                                    isSelected
                                    ? 'border-emerald-600 bg-emerald-50/50 shadow-md'
                                    : 'border-slate-100 bg-white hover:border-emerald-200 hover:shadow-lg'
                                }`}
                            >
                                {/* Selection Indicator */}
                                <div className={`absolute top-6 right-6 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                    isSelected ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 text-transparent group-hover:border-emerald-300'
                                }`}>
                                    <CheckCircle size={16} strokeWidth={3} />
                                </div>

                                {/* Vehicle Image Placeholder */}
                                <div className="w-full md:w-48 h-32 bg-slate-100 rounded-xl relative overflow-hidden flex-shrink-0">
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold">
                                        {v.name}
                                    </div>
                                    {v.image && (
                                        <Image src={v.image} alt={v.name} fill className="object-contain p-2" />
                                    )}
                                </div>

                                <div className="flex-1 w-full text-left">
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-xl font-bold text-slate-900">{v.name}</h3>
                                            {(v.category === 'VIP' || v.category === 'SUV') && (
                                                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-wider">VIP</span>
                                            )}
                                        </div>
                                        <div className="text-right pr-6">
                                            <div className="text-2xl font-black text-emerald-600">
                                                {price > 0 ? `${price}/-` : 'N/A'}
                                            </div>
                                            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                                                {isHourly ? 'Per Hour' : 'Total Price'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm font-medium text-slate-700 mt-4">
                                        <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                                            <Users size={16} className="text-emerald-600" /> 
                                            <span>{v.capacity}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                                            <Luggage size={16} className="text-emerald-600" /> 
                                            <span>{v.luggage}</span>
                                        </div>
                                        {v.features?.includes('Air Conditioning') && (
                                            <div className="flex items-center gap-1.5 ml-auto text-emerald-600 font-bold bg-emerald-100 px-3 py-1.5 rounded-lg">
                                                A/C
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {!hideButtons && (
                <div className="flex justify-between items-center mt-10">
                    <button
                        onClick={prevStep}
                        className="px-6 py-3 rounded-full text-slate-600 font-bold hover:bg-slate-100 transition-colors"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={!isComplete}
                        className={`px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${
                            isComplete ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                    >
                        Continue <ArrowRight size={18} />
                    </button>
                </div>
            )}
        </div>
    );
}
