'use client';

import React, { useState } from 'react';
import { Search, MapPin, Navigation, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { pricingRoutes, vehiclesData } from '@/data/pricingRoutes';

const WhatsappIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function PricingMainSection() {
    const [searchQuery, setSearchQuery] = useState('');
    const [serviceFilter, setServiceFilter] = useState('All');

    const serviceTypes = ['All', 'Transfer', 'Intercity', 'Ziyarat', 'Return', 'Hourly'];

    const filteredRoutes = pricingRoutes.filter((route) => {
        const matchesSearch = route.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesService = serviceFilter === 'All' || route.type === serviceFilter;
        return matchesSearch && matchesService;
    });

    return (
        <section className="py-20 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1500px]">
                
                {/* Search & Filter Header */}
                <div className="mb-10 max-w-4xl mx-auto">
                    <div className="text-center mb-6">
                        <h2 className="text-4xl font-black text-slate-900 mb-4 font-poppins">Find Your Route</h2>
                        <p className="text-slate-500">Quickly search for your destination or filter by service type.</p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-start sm:items-center gap-4 text-amber-800">
                        <div className="bg-amber-100 p-2 rounded-full hidden sm:block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        </div>
                        <p className="text-sm font-medium">
                            <strong>Please Note:</strong> These prices are estimated and may vary depending on the season (e.g., Ramadan, Hajj). Please contact us on WhatsApp to confirm the exact pricing or proceed to the booking page.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#E2E8F0] flex flex-col md:flex-row gap-4">
                        <div className="relative flex-grow">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input 
                                type="text"
                                placeholder="Search pickup or destination (e.g. Makkah, Airport)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2E8B57] focus:ring-1 focus:ring-[#2E8B57] transition-all bg-slate-50"
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar items-center">
                            {serviceTypes.map(type => (
                                <button
                                    key={type}
                                    onClick={() => setServiceFilter(type)}
                                    className={`px-6 py-3 rounded-xl font-medium text-sm whitespace-nowrap transition-all ${
                                        serviceFilter === type 
                                        ? 'bg-[#2E8B57] text-white shadow-md' 
                                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Route Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredRoutes.map((route) => (
                        <div key={route.id} className="bg-white rounded-[20px] shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E2E8F0] overflow-hidden group border-t-4 border-t-[#2E8B57] flex flex-col relative">
                            
                            {/* Popular Badge */}
                            {route.popular && (
                                <div className="absolute top-4 right-4 bg-[#C9A227] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10">
                                    Most Popular
                                </div>
                            )}

                            {/* Card Header */}
                            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 bg-emerald-100 p-2 rounded-lg text-[#2E8B57]">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-[#2E8B57] uppercase tracking-wider mb-1 block">{route.type}</span>
                                        <h3 className="text-xl font-bold text-slate-900 font-poppins">{route.name}</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Pricing Grid */}
                            <div className="p-6 flex-grow">
                                <div className="grid grid-cols-2 gap-4">
                                    {vehiclesData.map(vehicle => (
                                        <div key={vehicle.id} className="bg-slate-50 rounded-xl p-3 border border-slate-100 hover:border-emerald-200 transition-colors">
                                            <p className="text-xs text-slate-500 font-medium mb-1 truncate">{vehicle.name}</p>
                                            <p className="text-lg font-black text-slate-900">
                                                SAR {route.prices[vehicle.id as keyof typeof route.prices]}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Card Footer CTAs */}
                            <div className="p-6 pt-0 mt-auto">
                                <div className="flex gap-3">
                                    <Link href="/booking" className="flex-grow bg-[#2E8B57] text-white text-center py-3 rounded-xl font-bold hover:bg-[#1B5E20] transition-colors flex items-center justify-center gap-2">
                                        Book Now <ArrowRight size={16} />
                                    </Link>
                                    <a href="https://wa.me/966500000000" target="_blank" rel="noreferrer" className="bg-emerald-50 text-[#2E8B57] p-3 rounded-xl hover:bg-[#2E8B57] hover:text-white transition-colors flex items-center justify-center border border-emerald-100 shadow-sm">
                                        <WhatsappIcon size={24} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {filteredRoutes.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Navigation size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">No routes found</h3>
                        <p className="text-slate-500">Try adjusting your search or filters.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
