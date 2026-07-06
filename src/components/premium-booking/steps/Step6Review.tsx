'use client';

import React from 'react';
import { usePremiumBooking } from '../BookingContext';
import { ArrowRight, Edit2, MapPin, Navigation, Calendar, Clock, Car, Users } from 'lucide-react';

export default function Step6Review() {
    const { state, nextStep, prevStep, setCurrentStep } = usePremiumBooking();

    return (
        <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Booking Summary</h2>
            <p className="text-slate-500 mb-8">Please review your trip details before proceeding to payment.</p>

            <div className="space-y-6 mb-8">
                {/* Route Section */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative group">
                    <button onClick={() => setCurrentStep(2)} className="absolute top-6 right-6 text-emerald-600 hover:text-emerald-700 bg-emerald-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Edit2 size={16} />
                    </button>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Route Info</h3>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase">Pickup</p>
                            <p className="font-bold text-slate-900">{state.pickup || 'Not Selected'}</p>
                        </div>
                    </div>
                    <div className="w-0.5 h-6 bg-slate-200 ml-5 my-1" />
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                            <Navigation size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase">Destination</p>
                            <p className="font-bold text-slate-900">{state.dropoff || 'Not Selected'}</p>
                        </div>
                    </div>
                </div>

                {/* Date & Time */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative group">
                    <button onClick={() => setCurrentStep(3)} className="absolute top-6 right-6 text-emerald-600 hover:text-emerald-700 bg-emerald-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Edit2 size={16} />
                    </button>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Schedule</h3>
                    <div className="flex gap-8">
                        <div className="flex items-center gap-3">
                            <Calendar className="text-emerald-600" size={20} />
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase">Date</p>
                                <p className="font-bold text-slate-900">{state.date ? state.date.toLocaleDateString() : 'Not Selected'}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="text-emerald-600" size={20} />
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase">Time</p>
                                <p className="font-bold text-slate-900">{state.time || 'Not Selected'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vehicle & Passengers */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative group">
                    <button onClick={() => setCurrentStep(4)} className="absolute top-6 right-6 text-emerald-600 hover:text-emerald-700 bg-emerald-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Edit2 size={16} />
                    </button>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Vehicle & Passengers</h3>
                    <div className="flex flex-col md:flex-row gap-6 md:items-center">
                        <div className="flex items-center gap-3 flex-1">
                            <Car className="text-emerald-600" size={20} />
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase">Vehicle</p>
                                <p className="font-bold text-slate-900 uppercase">{state.selectedVehicles[0]?.vehicleId || 'Not Selected'}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 flex-1">
                            <Users className="text-emerald-600" size={20} />
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase">Passengers</p>
                                <p className="font-bold text-slate-900">{state.passengerInfo.adults} Adults, {state.passengerInfo.children} Children</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mt-10">
                <button
                    onClick={prevStep}
                    className="px-6 py-3 rounded-full text-slate-600 font-bold hover:bg-slate-100 transition-colors"
                >
                    Back
                </button>
                <button
                    onClick={nextStep}
                    className="px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg"
                >
                    Proceed to Payment <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
}
