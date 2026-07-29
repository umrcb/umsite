import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function PricingWhatsIncluded() {
    const includedItems = [
        "Professional Driver",
        "Fuel Included",
        "Air Conditioning",
        "No Hidden Charges",
        "Flight Monitoring",
        "Complimentary Water",
        "24/7 Support",
        "Insurance",
        "GPS Tracking"
    ];

    return (
        <section className="py-20 bg-slate-50 border-b border-slate-200">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1500px]">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 font-poppins">What's Included in Your Fare?</h2>
                    <p className="text-lg text-slate-500 font-inter">Everything you need for a comfortable journey, with absolutely zero hidden fees.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {includedItems.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:border-emerald-200 hover:shadow-md transition-all">
                            <CheckCircle2 className="text-[#2E8B57] flex-shrink-0" size={24} />
                            <span className="font-bold text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
