'use client';

import React from 'react';
import { usePremiumBooking } from './BookingContext';
import { MapPin, Navigation, Calendar, Clock, Car, Users, CheckCircle, HelpCircle } from 'lucide-react';

export default function BookingSummarySidebar() {
    const { state, currentStep } = usePremiumBooking();

    // The sticky sidebar shouldn't show the summary if we are on step 8 success screen.
    // We don't have explicit success state in Context, but if we did we could hide it.
    // For now, it will just show the entered details.

    // For now, it will just show the entered details.

    const total = state.calculatedPrice || 0;

    return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                Booking Summary
            </h3>

            <div className="space-y-6">
                
                {/* Trip Info */}
                <div className="relative">
                    <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-slate-200 -z-10" />
                    
                    <div className="flex gap-4 items-start mb-6 bg-white relative z-10">
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5 border-4 border-white">
                            <MapPin size={12} className="text-slate-500" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Pickup</p>
                            <p className="font-semibold text-slate-900">{state.pickup || '—'}</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start bg-white relative z-10">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5 border-4 border-white">
                            <Navigation size={12} className="text-emerald-600" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Dropoff</p>
                            <p className="font-semibold text-slate-900">{state.dropoff || '—'}</p>
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-slate-100" />

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5"><Calendar size={12}/> Date</p>
                        <p className="font-semibold text-slate-900 text-sm">{state.date ? state.date.toLocaleDateString() : '—'}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5"><Clock size={12}/> Time</p>
                        <p className="font-semibold text-slate-900 text-sm">{state.time || '—'}</p>
                    </div>
                </div>

                <div className="h-px w-full bg-slate-100" />

                {/* Vehicle & Passengers */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5"><Car size={12}/> Vehicle</p>
                        <p className="font-semibold text-slate-900 text-sm uppercase">{state.selectedVehicles[0]?.vehicleName || state.selectedVehicles[0]?.vehicleId || '—'}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5"><Users size={12}/> Passengers</p>
                        <p className="font-semibold text-slate-900 text-sm">{state.passengerInfo.adults + state.passengerInfo.children} Total</p>
                    </div>
                </div>

                {/* Pricing Details - Only show if vehicle is selected */}
                {state.selectedVehicles.length > 0 && total > 0 && (
                    <>
                        <div className="h-px w-full bg-slate-100" />
                        
                        <div className="space-y-3">
                            <div className="flex justify-between font-black text-slate-900 text-xl pt-2">
                                <span>Total Price</span>
                                <span className="text-emerald-600">SAR {total}</span>
                            </div>
                        </div>
                    </>
                )}

            </div>

            {/* Help Section */}
            <div className="mt-8 bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm flex-shrink-0 mt-1">
                    <HelpCircle size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-sm">Need Assistance?</h4>
                    <p className="text-xs text-slate-500 mb-2 mt-1">Our support team is available 24/7 to help you.</p>
                    <a href="https://wa.me/966500000000" target="_blank" rel="noreferrer" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                        Chat on WhatsApp &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
}
