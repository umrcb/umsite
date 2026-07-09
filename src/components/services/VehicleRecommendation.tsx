'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, ChevronRight, Check } from 'lucide-react';

const recommendations = [
    {
        id: 'airport',
        category: 'Solo / Couple (Airport)',
        vehicle: 'Toyota Camry / Hyundai Sonata',
        image: '/images/fleet/toyota-camry-hero.png',
        capacity: '3 Passengers',
        luggage: '2-3 Medium Bags',
        description: 'Perfect for individuals or couples traveling light. Enjoy a smooth, comfortable ride from the airport directly to your hotel.',
        features: ['Premium Sedan', 'Air Conditioned', 'Comfortable Seating'],
        link: '/booking?service=jeddah-airport-transfer&vehicle=sedan'
    },
    {
        id: 'family',
        category: 'Family Travel',
        vehicle: 'Toyota Fortuner / Innova',
        image: '/images/fleet/toyota-fortuner-hero.png',
        capacity: '5 Passengers',
        luggage: '4-5 Bags',
        description: 'The ideal choice for families. Spacious interiors ensure everyone travels comfortably, with plenty of room for luggage.',
        features: ['Spacious SUV', 'Family Friendly', 'Extra Luggage Space'],
        link: '/booking?service=makkah-hotel&vehicle=suv'
    },
    {
        id: 'vip',
        category: 'VIP Experience',
        vehicle: 'GMC Yukon XL',
        image: '/images/fleet/gmc-yukon-hero-professional.png',
        capacity: '6 Passengers',
        luggage: '5-6 Bags',
        description: 'Experience ultimate luxury and privacy. Perfect for business travelers or VIP pilgrims seeking top-tier comfort.',
        features: ['Executive Luxury', 'Privacy Windows', 'Premium Leather'],
        link: '/booking?service=vip'
    },
    {
        id: 'group',
        category: 'Small Group',
        vehicle: 'Hyundai Staria',
        image: '/images/fleet/hyundai-staria-hero.png',
        capacity: '7 Passengers',
        luggage: '6-7 Bags',
        description: 'A modern, comfortable van perfect for small groups or large families traveling together.',
        features: ['Modern Van', 'Captain Seats', 'Panoramic Windows'],
        link: '/booking?service=group&vehicle=staria'
    },
    {
        id: 'large-group',
        category: 'Large Groups',
        vehicle: 'Toyota Hiace',
        image: '/images/fleet/toyota-hiace-hero.png',
        capacity: '12-14 Passengers',
        luggage: '10+ Bags',
        description: 'The best solution for travel groups and Hajj groups. Reliable, spacious, and extremely practical.',
        features: ['Group Transport', 'High Roof', 'Maximum Capacity'],
        link: '/booking?service=group&vehicle=hiace'
    }
];

export default function VehicleRecommendation() {
    const [activeTab, setActiveTab] = useState(recommendations[0].id);

    const activeData = recommendations.find(r => r.id === activeTab) || recommendations[0];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
                        Find Your Perfect Ride
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-navy mb-6">
                        Vehicle Recommendations
                    </h2>
                    <p className="text-lg text-slate-600">
                        Not sure which vehicle to choose? Select your travel profile below to see our recommended fleet option.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">
                    {/* Tabs */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-3">
                        {recommendations.map((rec) => (
                            <button
                                key={rec.id}
                                onClick={() => setActiveTab(rec.id)}
                                className={`text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                                    activeTab === rec.id
                                        ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                                }`}
                            >
                                <span className="font-bold text-lg">{rec.category}</span>
                                <ChevronRight size={20} className={activeTab === rec.id ? 'opacity-100' : 'opacity-50'} />
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-2/3 bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-sm relative overflow-hidden min-h-[450px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="w-full flex flex-col lg:flex-row gap-8 items-center"
                            >
                                {/* Image */}
                                <div className="w-full lg:w-1/2 relative h-48 lg:h-64">
                                    <Image
                                        src={activeData.image}
                                        alt={activeData.vehicle}
                                        fill
                                        className="object-contain drop-shadow-xl"
                                    />
                                </div>

                                {/* Details */}
                                <div className="w-full lg:w-1/2 flex flex-col">
                                    <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2">
                                        Recommended Vehicle
                                    </span>
                                    <h3 className="text-3xl font-bold text-navy mb-4 font-playfair">
                                        {activeData.vehicle}
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {activeData.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium bg-white px-3 py-2 rounded-lg border border-slate-200">
                                            <Users size={18} className="text-primary" />
                                            {activeData.capacity}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium bg-white px-3 py-2 rounded-lg border border-slate-200">
                                            <Briefcase size={18} className="text-primary" />
                                            {activeData.luggage}
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-8">
                                        {activeData.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                                                <Check size={16} className="text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={activeData.link}
                                        className="btn-primary w-full sm:w-auto"
                                    >
                                        Book This Vehicle
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
