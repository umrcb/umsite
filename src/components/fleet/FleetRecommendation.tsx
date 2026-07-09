'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ChevronRight, ArrowRight, Shield, CheckCircle } from 'lucide-react';

const recommendations = [
    {
        id: '2-4',
        passengers: '2–4 Passengers',
        vehicle: 'GMC Yukon',
        image: '/images/fleet/gmc-yukon-hero-professional.png',
        description: 'Enjoy ultimate comfort and privacy. Perfect for couples or small families wanting a VIP experience.',
        luggage: '5-6 Large Bags',
        link: '/booking?service=vip&vehicle=yukon'
    },
    {
        id: '5-8',
        passengers: '5–8 Passengers',
        vehicle: 'Hyundai Staria',
        image: '/images/fleet/hyundai-staria-hero.png',
        description: 'A spacious and modern premium van that provides an incredibly smooth ride for families.',
        luggage: '7-9 Bags',
        link: '/booking?service=family&vehicle=staria'
    },
    {
        id: '8-10',
        passengers: '8–10 Passengers',
        vehicle: 'Hyundai Starex',
        image: '/images/fleet/hyundai-starex-hero.png',
        description: 'The perfect balance of space and comfort for medium-sized families or small groups.',
        luggage: '8-10 Bags',
        link: '/booking?service=group&vehicle=starex'
    },
    {
        id: '10-13',
        passengers: '10–13 Passengers',
        vehicle: 'Toyota Hiace',
        image: '/images/fleet/toyota-hiace-hero.png',
        description: 'Highly reliable and spacious. The standard choice for Umrah groups and large families.',
        luggage: '12-15 Bags',
        link: '/booking?service=group&vehicle=hiace'
    },
    {
        id: '20-30',
        passengers: '20–30 Passengers',
        vehicle: 'Toyota Coaster',
        image: '/images/fleet/toyota-coaster-hero.png',
        description: 'A comfortable mini-bus designed specifically for large tours and Hajj groups.',
        luggage: '20+ Bags',
        link: '/booking?service=group&vehicle=coaster'
    }
];

export default function FleetRecommendation() {
    const [activeId, setActiveId] = useState(recommendations[0].id);

    const activeData = recommendations.find(r => r.id === activeId) || recommendations[0];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
                        Need Help Choosing?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-navy mb-6">
                        Which Vehicle Should I Choose?
                    </h2>
                    <p className="text-lg text-slate-600">
                        Select your group size below, and we'll recommend the ideal vehicle to ensure everyone travels comfortably with their luggage.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Passenger Selectors */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-3">
                        {recommendations.map((rec) => (
                            <button
                                key={rec.id}
                                onClick={() => setActiveId(rec.id)}
                                className={`text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                                    activeId === rec.id
                                        ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Users size={20} className={activeId === rec.id ? 'text-white' : 'text-slate-400'} />
                                    <span className="font-bold text-lg">{rec.passengers}</span>
                                </div>
                                <ChevronRight size={20} className={activeId === rec.id ? 'opacity-100' : 'opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0'} />
                            </button>
                        ))}
                    </div>

                    {/* Result Card */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-sm relative overflow-hidden min-h-[400px] flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeId}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full flex flex-col lg:flex-row gap-8 items-center"
                                >
                                    {/* Image */}
                                    <div className="w-full lg:w-1/2 relative h-56 lg:h-72">
                                        <Image
                                            src={activeData.image}
                                            alt={activeData.vehicle}
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="w-full lg:w-1/2 flex flex-col">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                                            <Shield size={14} /> Recommended
                                        </div>
                                        <h3 className="text-4xl font-bold text-navy mb-4 font-playfair">
                                            {activeData.vehicle}
                                        </h3>
                                        <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                                            {activeData.description}
                                        </p>
                                        
                                        <div className="flex items-center gap-2 text-slate-700 font-medium mb-8">
                                            <CheckCircle size={18} className="text-primary" />
                                            Accommodates {activeData.luggage}
                                        </div>

                                        <Link
                                            href={activeData.link}
                                            className="btn-primary w-full sm:w-auto"
                                        >
                                            Book This Vehicle <ArrowRight size={18} className="ml-2" />
                                        </Link>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
