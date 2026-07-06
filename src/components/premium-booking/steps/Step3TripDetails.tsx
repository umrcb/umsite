'use client';

import React from 'react';
import { usePremiumBooking } from '../BookingContext';
import { Calendar, Clock, PlaneLanding, Building, AlignLeft, ArrowRight } from 'lucide-react';

const journeyTypes = ['One Way', 'Round Trip', 'Hourly Hire'] as const;

export default function Step3TripDetails({ hideButtons = false }: { hideButtons?: boolean }) {
    const { state, updateState, nextStep, prevStep } = usePremiumBooking();

    const handleNext = () => {
        if (state.date && state.time) {
            nextStep();
        }
    };

    const isComplete = state.date !== null && state.time.trim() !== '';

    return (
        <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Trip Details</h2>
            <p className="text-slate-500 mb-8">When are you traveling?</p>


            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="relative">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 block">Travel Date *</label>
                    <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        {/* Using standard date input for simplicity. For a real app, a DatePicker component might be better */}
                        <input
                            type="date"
                            value={state.date ? state.date.toISOString().split('T')[0] : ''}
                            onChange={(e) => updateState({ date: e.target.value ? new Date(e.target.value) : null })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 block">Travel Time *</label>
                    <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="time"
                            value={state.time}
                            onChange={(e) => updateState({ time: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 block">Flight Number (Optional)</label>
                    <div className="relative">
                        <PlaneLanding className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="e.g. SV123"
                            value={state.flightNumber}
                            onChange={(e) => updateState({ flightNumber: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 block">Hotel Name (Optional)</label>
                    <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="e.g. Hilton Makkah"
                            value={state.hotelName}
                            onChange={(e) => updateState({ hotelName: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all"
                        />
                    </div>
                </div>
            </div>

            <div className="relative mb-8">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 block">Special Instructions (Optional)</label>
                <div className="relative">
                    <AlignLeft className="absolute left-4 top-4 text-slate-400" size={20} />
                    <textarea
                        rows={3}
                        placeholder="Any special requests or details..."
                        value={state.specialInstructions}
                        onChange={(e) => updateState({ specialInstructions: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all resize-none"
                    />
                </div>
            </div>

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
