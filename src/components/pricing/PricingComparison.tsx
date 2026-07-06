'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

const ourFeatures = [
    "Fixed & transparent pricing",
    "No hidden charges",
    "Licensed & professional drivers",
    "Premium & well-maintained fleet",
    "Flight monitoring & on-time pickup",
    "24/7 customer support",
    "Insurance covered",
    "Best value for money"
];

const competitorFeatures = [
    "Unfixed / changing prices",
    "Hidden charges",
    "Unverified drivers",
    "Old & uncomfortable vehicles",
    "No flight tracking",
    "Limited support",
    "No insurance",
    "Overpriced for same service"
];

export default function PricingComparison() {
    return (
        <div className="w-full flex flex-col h-full">
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy mb-2">Why Our Pricing is Better?</h2>
                <p className="text-sm text-slate-500">Compare and see the difference.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 relative flex-grow">
                {/* VS Badge */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#1B5E20] text-white rounded-full items-center justify-center font-bold font-playfair z-10 shadow-lg border-4 border-white">
                    VS
                </div>

                {/* Our Services */}
                <div className="w-full md:w-1/2 bg-white rounded-3xl p-6 lg:p-8 border-2 border-primary/20 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
                    <h3 className="font-bold text-navy text-lg mb-6 pb-4 border-b border-slate-100 text-center">Umrah Cabs</h3>
                    <ul className="space-y-4">
                        {ourFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Check size={14} className="text-primary font-bold" />
                                </div>
                                <span className="text-sm font-medium text-slate-700">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* VS Badge for Mobile */}
                <div className="flex md:hidden w-10 h-10 bg-[#1B5E20] text-white rounded-full items-center justify-center font-bold font-playfair mx-auto my-[-20px] z-10 border-4 border-white">
                    VS
                </div>

                {/* Typical Services */}
                <div className="w-full md:w-1/2 bg-slate-50 rounded-3xl p-6 lg:p-8 border border-slate-200">
                    <h3 className="font-bold text-slate-600 text-lg mb-6 pb-4 border-b border-slate-200 text-center">Typical Taxi Services</h3>
                    <ul className="space-y-4 opacity-75">
                        {competitorFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="mt-0.5 flex-shrink-0">
                                    <X size={16} className="text-red-500 stroke-[3]" />
                                </div>
                                <span className="text-sm font-medium text-slate-600 line-through decoration-slate-300">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
