import React from 'react';
import { Check } from 'lucide-react';

export default function PricingTrustBar() {
    const trustPoints = [
        "Fixed Prices",
        "No Hidden Fees",
        "Professional Drivers",
        "Luxury Fleet",
        "Instant Booking",
        "24/7 Support"
    ];

    return (
        <div className="bg-[#F8FAFC] border-y border-[#E2E8F0] py-6">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1500px]">
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:justify-between items-center">
                    {trustPoints.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                <Check size={14} className="text-[#2E8B57] font-bold" />
                            </div>
                            <span className="text-slate-700 font-medium text-sm md:text-base whitespace-nowrap">
                                {point}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
