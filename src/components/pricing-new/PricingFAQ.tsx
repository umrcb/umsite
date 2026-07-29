'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function PricingFAQ() {
    const faqs = [
        {
            question: "Are prices fixed?",
            answer: "Yes, all our prices are 100% fixed. The quote you receive includes all taxes, tolls, parking, and driver fees. You won't pay a Riyal more."
        },
        {
            question: "Are tolls included?",
            answer: "Absolutely. All road tolls and parking fees are already included in the final price of your journey."
        },
        {
            question: "Can I stop during the trip?",
            answer: "Yes! Short rest stops are complimentary for intercity travel. If you need a longer stop or diversion, it can be arranged for a small additional fee."
        },
        {
            question: "How do I pay?",
            answer: "You can pay securely online using Visa, Mastercard, Apple Pay, Mada, or choose to pay cash to the driver upon arrival."
        },
        {
            question: "Can I book round-trip?",
            answer: "Yes, you can easily book round-trip journeys. In fact, booking a return trip often secures you a better overall rate."
        },
        {
            question: "Do prices change during Hajj?",
            answer: "While demand is extremely high during Hajj and Ramadan, we strive to keep our prices fair and competitive without excessive surge pricing. It's best to book early during these periods."
        }
    ];

    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section className="py-20 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 font-poppins">Frequently Asked Questions</h2>
                    <p className="text-lg text-slate-500 font-inter">Everything you need to know about our pricing and payment policies.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div 
                            key={idx} 
                            className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openIdx === idx ? 'border-[#2E8B57] shadow-md' : 'border-[#E2E8F0] hover:border-slate-300'}`}
                        >
                            <button 
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                            >
                                <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                                <ChevronDown className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${openIdx === idx ? 'rotate-180 text-[#2E8B57]' : ''}`} />
                            </button>
                            <div 
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'pb-5 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
