'use client';

import React, { useState } from 'react';
import { usePremiumBooking } from '../BookingContext';
import { ArrowRight, User, Globe, Phone, Mail, FileText, Info } from 'lucide-react';

export default function Step5Passenger({ hideButtons = false }: { hideButtons?: boolean }) {
    const { state, updatePassengerInfo, nextStep, prevStep } = usePremiumBooking();
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!state.passengerInfo.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!state.passengerInfo.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!state.passengerInfo.country.trim()) newErrors.country = 'Country is required';
        if (!state.passengerInfo.phone.trim()) newErrors.phone = 'Phone is required';
        if (!state.passengerInfo.email.trim() || !/^\S+@\S+\.\S+$/.test(state.passengerInfo.email)) {
            newErrors.email = 'Valid email is required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validate()) {
            nextStep();
        }
    };

    const inputClasses = (hasError: boolean) => `
        w-full bg-slate-50 border rounded-xl py-3 pl-10 pr-4 text-slate-900 
        focus:ring-2 outline-none transition-all
        ${hasError ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-emerald-600 focus:border-emerald-600'}
    `;

    return (
        <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Passenger Info</h2>
            <p className="text-slate-500 mb-8">Please provide contact details for the lead passenger.</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 block">First Name *</label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            value={state.passengerInfo.firstName}
                            onChange={(e) => updatePassengerInfo({ firstName: e.target.value })}
                            className={inputClasses(!!errors.firstName)}
                        />
                    </div>
                    {errors.firstName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.firstName}</p>}
                </div>
                <div className="relative">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 block">Last Name *</label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            value={state.passengerInfo.lastName}
                            onChange={(e) => updatePassengerInfo({ lastName: e.target.value })}
                            className={inputClasses(!!errors.lastName)}
                        />
                    </div>
                    {errors.lastName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.lastName}</p>}
                </div>

                <div className="relative">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 block">Email Address *</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="email"
                            value={state.passengerInfo.email}
                            onChange={(e) => updatePassengerInfo({ email: e.target.value })}
                            className={inputClasses(!!errors.email)}
                        />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                </div>
                <div className="relative">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 block">Country *</label>
                    <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            value={state.passengerInfo.country}
                            onChange={(e) => updatePassengerInfo({ country: e.target.value })}
                            className={inputClasses(!!errors.country)}
                        />
                    </div>
                    {errors.country && <p className="text-red-500 text-xs mt-1 ml-1">{errors.country}</p>}
                </div>

                <div className="relative">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 block">Phone Number *</label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="tel"
                            placeholder="+966"
                            value={state.passengerInfo.phone}
                            onChange={(e) => updatePassengerInfo({ phone: e.target.value })}
                            className={inputClasses(!!errors.phone)}
                        />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                </div>
                <div className="relative">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 block">WhatsApp (Optional)</label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="tel"
                            value={state.passengerInfo.whatsapp}
                            onChange={(e) => updatePassengerInfo({ whatsapp: e.target.value })}
                            className={inputClasses(false)}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 block">Adults</label>
                    <input
                        type="number"
                        min="1"
                        value={state.passengerInfo.adults}
                        onChange={(e) => updatePassengerInfo({ adults: parseInt(e.target.value) || 1 })}
                        className="w-full bg-white border border-slate-200 rounded-xl py-2 px-4 text-center font-bold text-slate-900 outline-none"
                    />
                </div>
                <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 block">Children</label>
                    <input
                        type="number"
                        min="0"
                        value={state.passengerInfo.children}
                        onChange={(e) => updatePassengerInfo({ children: parseInt(e.target.value) || 0 })}
                        className="w-full bg-white border border-slate-200 rounded-xl py-2 px-4 text-center font-bold text-slate-900 outline-none"
                    />
                </div>
                <div className="flex flex-col items-center justify-center pt-5">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${state.passengerInfo.childSeat ? 'bg-emerald-600 border-emerald-600' : 'border-slate-300 bg-white group-hover:border-emerald-600'}`}>
                            {state.passengerInfo.childSeat && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                        </div>
                        <span className="text-xs font-bold text-slate-700">Child Seat</span>
                        <input type="checkbox" className="hidden" checked={state.passengerInfo.childSeat} onChange={(e) => updatePassengerInfo({ childSeat: e.target.checked })} />
                    </label>
                </div>
                <div className="flex flex-col items-center justify-center pt-5">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${state.passengerInfo.specialAssistance ? 'bg-emerald-600 border-emerald-600' : 'border-slate-300 bg-white group-hover:border-emerald-600'}`}>
                            {state.passengerInfo.specialAssistance && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                        </div>
                        <span className="text-xs font-bold text-slate-700">Assistance</span>
                        <input type="checkbox" className="hidden" checked={state.passengerInfo.specialAssistance} onChange={(e) => updatePassengerInfo({ specialAssistance: e.target.checked })} />
                    </label>
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
                        className="px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg"
                    >
                        Continue <ArrowRight size={18} />
                    </button>
                </div>
            )}
        </div>
    );
}
