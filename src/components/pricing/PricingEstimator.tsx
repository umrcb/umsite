'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Clock, Car, Users, Calculator, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function PricingEstimator() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        pickup: '',
        destination: '',
        vehicle: '',
        passengers: '',
        date: '',
        time: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (formData.pickup) params.append('pickup', formData.pickup);
        if (formData.destination) params.append('dropoff', formData.destination);
        if (formData.vehicle) params.append('vehicle', formData.vehicle);
        
        router.push(`/booking?${params.toString()}`);
    };

    return (
        <div className="w-full flex flex-col h-full bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm relative overflow-hidden" id="price-estimator">
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy mb-2">Get Instant Price Estimate</h2>
                <p className="text-slate-500 text-sm">Enter your trip details to calculate the estimated fare</p>
            </div>

            <form onSubmit={handleCalculate} className="space-y-6 flex-grow flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Pickup */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-navy uppercase tracking-wider">Pickup Location</label>
                        <div className="relative">
                            <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input 
                                type="text"
                                name="pickup"
                                value={formData.pickup}
                                onChange={handleChange}
                                placeholder="Enter pickup location"
                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                            />
                        </div>
                    </div>

                    {/* Destination */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-navy uppercase tracking-wider">Destination</label>
                        <div className="relative">
                            <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input 
                                type="text"
                                name="destination"
                                value={formData.destination}
                                onChange={handleChange}
                                placeholder="Enter destination"
                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                            />
                        </div>
                    </div>

                    {/* Vehicle Type */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-navy uppercase tracking-wider">Vehicle Type</label>
                        <div className="relative">
                            <Car size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <select 
                                name="vehicle"
                                value={formData.vehicle}
                                onChange={handleChange}
                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm appearance-none cursor-pointer"
                            >
                                <option value="">Select vehicle</option>
                                <option value="yukon">GMC Yukon (Luxury SUV)</option>
                                <option value="staria">Hyundai Staria (Premium Van)</option>
                                <option value="starex">Hyundai Starex (Standard Van)</option>
                                <option value="hiace">Toyota Hiace (Spacious Van)</option>
                                <option value="coaster">Toyota Coaster (Mini Bus)</option>
                            </select>
                        </div>
                    </div>

                    {/* Passengers */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-navy uppercase tracking-wider">Passengers</label>
                        <div className="relative">
                            <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <select 
                                name="passengers"
                                value={formData.passengers}
                                onChange={handleChange}
                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm appearance-none cursor-pointer"
                            >
                                <option value="">Select passengers</option>
                                <option value="1-4">1 - 4 Passengers</option>
                                <option value="5-7">5 - 7 Passengers</option>
                                <option value="8-10">8 - 10 Passengers</option>
                                <option value="11-15">11 - 15 Passengers</option>
                                <option value="16+">16+ Passengers</option>
                            </select>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-navy uppercase tracking-wider">Date</label>
                        <div className="relative">
                            <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input 
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm text-slate-600"
                            />
                        </div>
                    </div>

                    {/* Time */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-navy uppercase tracking-wider">Time</label>
                        <div className="relative">
                            <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input 
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm text-slate-600"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button 
                        type="submit"
                        className="bg-[#1B5E20] hover:bg-primary text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors w-full"
                    >
                        <Calculator size={18} />
                        Calculate Estimate
                    </button>
                    <a 
                        href={getWhatsAppLink("Hello! I need a final quote for my trip.")}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white border border-slate-200 text-navy hover:border-primary hover:text-primary py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors w-full"
                    >
                        <MessageCircle size={18} className="text-green-500" />
                        Request Final Quote
                    </a>
                </div>
            </form>
        </div>
    );
}
