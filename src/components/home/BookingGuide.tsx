'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Car, ArrowRight, ShieldCheck, MousePointerClick } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/common/FadeIn';
import { getWhatsAppLink } from '@/lib/whatsapp';

const STEPS = [
    {
        id: 1,
        title: "Search & Schedule",
        description: "Enter your pickup location and schedule. Our smart system instantly routes your journey.",
        icon: MapPin,
        delay: 0.1
    },
    {
        id: 2,
        title: "Select VIP Vehicle",
        description: "Choose from our premium GMC Yukon or Family Staria fleet. Transparent pricing, no hidden costs.",
        icon: Car,
        delay: 0.2
    },
    {
        id: 3,
        title: "Instant Confirmation",
        description: "Receive immediate booking confirmation. Pay securely upon arrival with our trusted service.",
        icon: ShieldCheck,
        delay: 0.3
    }
];

export default function BookingGuide() {
    return (
        <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
            {/* Elegant Background Patterns */}
            <div className="absolute inset-0 pattern-grid-fade opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <FadeIn>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Simple & Professional
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0F172A] mb-6">
                            Your Journey in <br className="hidden md:block" />
                            <span className="text-primary">3 Simple Steps</span>
                        </h2>
                        <p className="text-[#475569] text-lg leading-relaxed font-inter">
                            Experience the gold standard of Umrah transport. Streamlined for your comfort and peace of mind.
                        </p>
                    </div>
                </FadeIn>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative px-4 max-w-5xl mx-auto mb-20">
                    {/* Connecting Dotted Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] border-t-2 border-dashed border-[#CBD5E1] z-0"></div>

                    {STEPS.map((step, idx) => (
                        <FadeIn key={step.id} delay={step.delay}>
                            <div className="relative z-10 group">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-6">
                                        <div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-[#E2E8F0] flex items-center justify-center relative z-10 group-hover:border-primary group-hover:shadow-md transition-all duration-300">
                                            <step.icon size={36} className="text-primary group-hover:scale-110 transition-transform" />
                                        </div>

                                        {/* Step Number Badge */}
                                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gold text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-md z-20">
                                            {step.id}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold font-poppins text-[#0F172A] mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#475569] font-inter leading-relaxed max-w-[260px] mx-auto text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* CTA */}
                <FadeIn delay={0.4}>
                    <div className="text-center">
                        <a
                            href={getWhatsAppLink("Salam, I would like to book a ride.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex py-4 px-10 text-lg"
                        >
                            Book Your Ride Now
                            <ArrowRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="mt-6 text-sm font-medium text-[#475569] flex items-center justify-center gap-2">
                            <MousePointerClick size={16} className="text-primary" />
                            No prepayment required • Pay upon arrival
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
