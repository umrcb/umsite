'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';

export default function PricingCorporate() {
    return (
        <div className="w-full flex flex-col h-full bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="flex flex-col md:flex-row h-full">
                {/* Content Side */}
                <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy mb-4">Corporate & Group Booking</h2>
                    <p className="text-slate-600 mb-8 font-medium">Special pricing for businesses, travel agencies, and large group bookings.</p>
                    
                    <ul className="space-y-4 mb-8 flex-grow">
                        <li className="flex items-center gap-3">
                            <Star size={16} className="text-primary fill-primary/30" />
                            <span className="text-sm font-semibold text-navy">Special corporate rates</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Star size={16} className="text-primary fill-primary/30" />
                            <span className="text-sm font-semibold text-navy">Monthly billing available</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Star size={16} className="text-primary fill-primary/30" />
                            <span className="text-sm font-semibold text-navy">Bulk & group discounts</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Star size={16} className="text-primary fill-primary/30" />
                            <span className="text-sm font-semibold text-navy">Custom travel solutions</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Star size={16} className="text-primary fill-primary/30" />
                            <span className="text-sm font-semibold text-navy">Dedicated account manager</span>
                        </li>
                    </ul>

                    <Link 
                        href="/contact?subject=Corporate+Booking"
                        className="w-fit bg-primary hover:bg-navy text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2"
                    >
                        Contact Sales Team <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Image Side */}
                <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=1200" // Corporate/Business travelers
                        alt="Corporate and Business Travel"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
                </div>
            </div>
        </div>
    );
}
