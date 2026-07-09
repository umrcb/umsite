'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Map, Clock, MapPin, Tag } from 'lucide-react';

const routes = [
    {
        from: 'Jeddah Airport (KAIA)',
        to: 'Makkah Hotels',
        distance: '100 km',
        duration: '1.5 Hours',
        price: 'SAR 150',
        link: '/services/jeddah-airport-transfer'
    },
    {
        from: 'Makkah',
        to: 'Madinah',
        distance: '450 km',
        duration: '4.5 Hours',
        price: 'SAR 450',
        link: '/services/makkah-madinah-taxi'
    },
    {
        from: 'Madinah Airport',
        to: 'Madinah Hotels',
        distance: '20 km',
        duration: '30 Mins',
        price: 'SAR 100',
        link: '/booking?service=madinah-transfer'
    },
    {
        from: 'Taif',
        to: 'Makkah',
        distance: '110 km',
        duration: '1.5 Hours',
        price: 'SAR 250',
        link: '/booking?service=intercity'
    },
    {
        from: 'Jeddah',
        to: 'Madinah',
        distance: '420 km',
        duration: '4 Hours',
        price: 'SAR 450',
        link: '/booking?service=intercity'
    }
];

export default function PopularRoutes() {
    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
                            Top Destinations
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-navy mb-4">
                            Popular Routes
                        </h2>
                        <p className="text-lg text-slate-600">
                            Discover our most requested transfers across Saudi Arabia. Fixed prices, direct routes, and ultimate comfort.
                        </p>
                    </div>
                    <Link href="/booking" className="btn-secondary whitespace-nowrap">
                        View All Routes
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {routes.map((route, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-2"
                        >
                            {/* Route Map Visual */}
                            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                                <div className="flex flex-col items-center">
                                    <div className="w-3 h-3 rounded-full bg-primary" />
                                    <div className="w-[2px] h-8 bg-slate-200 my-1" />
                                    <div className="w-3 h-3 rounded-full bg-primary" />
                                </div>
                                <div className="flex flex-col justify-between h-[60px]">
                                    <span className="text-sm font-bold text-navy">{route.from}</span>
                                    <span className="text-sm font-bold text-navy">{route.to}</span>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-4 mb-8 flex-grow">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <Map size={16} /> Distance
                                    </div>
                                    <span className="font-semibold text-navy">{route.distance}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <Clock size={16} /> Duration
                                    </div>
                                    <span className="font-semibold text-navy">{route.duration}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <Tag size={16} /> Starting Price
                                    </div>
                                    <span className="font-semibold text-primary">{route.price}</span>
                                </div>
                            </div>

                            {/* Action */}
                            <Link 
                                href={route.link}
                                className="w-full py-3 rounded-xl bg-slate-50 text-navy font-bold text-center border border-slate-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                Book Route
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
