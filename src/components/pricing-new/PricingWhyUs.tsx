import React from 'react';
import { Shield, TrendingDown, Star, Award, Clock, ThumbsUp } from 'lucide-react';

export default function PricingWhyUs() {
    const reasons = [
        {
            icon: <Shield />,
            title: "Transparent & Fixed",
            desc: "The price you see is the price you pay. No hidden surprises."
        },
        {
            icon: <TrendingDown />,
            title: "No Surge Pricing",
            desc: "Even during peak seasons and Hajj, we maintain fair rates."
        },
        {
            icon: <Star />,
            title: "Luxury Fleet",
            desc: "New, well-maintained vehicles for ultimate comfort."
        },
        {
            icon: <Award />,
            title: "Professional Drivers",
            desc: "Experienced, licensed, and courteous chauffeurs."
        },
        {
            icon: <Clock />,
            title: "Reliable Service",
            desc: "Always on time, with free wait times at airports."
        },
        {
            icon: <ThumbsUp />,
            title: "Competitive Rates",
            desc: "Premium service at highly competitive market prices."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1500px]">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 font-poppins">Why Choose Our Pricing?</h2>
                        <p className="text-lg text-slate-500 font-inter mb-8">
                            We believe that premium transportation shouldn't come with complicated pricing or hidden fees. Our straightforward approach ensures peace of mind from booking to destination.
                        </p>
                    </div>
                    
                    <div className="w-full lg:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {reasons.map((reason, idx) => (
                                <div key={idx} className="flex flex-col gap-3">
                                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#2E8B57]">
                                        {reason.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-lg">{reason.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{reason.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
