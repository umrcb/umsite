'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Navigation, Baby, Clock, Plane, Sparkles, ShieldCheck, Headphones, Droplets, BatteryCharging } from 'lucide-react';

const features = [
    { icon: <UserCheck size={24} />, text: 'Professional Drivers' },
    { icon: <Navigation size={24} />, text: 'GPS Tracking' },
    { icon: <Baby size={24} />, text: 'Child Seat Available' },
    { icon: <Clock size={24} />, text: 'Free Waiting Time' },
    { icon: <Plane size={24} />, text: 'Flight Monitoring' },
    { icon: <Sparkles size={24} />, text: 'Daily Sanitization' },
    { icon: <ShieldCheck size={24} />, text: 'Fully Insured' },
    { icon: <Headphones size={24} />, text: '24/7 Support' },
    { icon: <Droplets size={24} />, text: 'Complimentary Water' },
    { icon: <BatteryCharging size={24} />, text: 'Phone Charging' }
];

export default function FleetFeatures() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
                        Premium Standard
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-navy mb-4">
                        Every Vehicle Comes With
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                        <div className="h-[1px] w-12 bg-gold/50" />
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        <div className="h-[1px] w-12 bg-gold/50" />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="text-primary group-hover:text-gold transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <span className="text-sm font-semibold text-navy">
                                {feature.text}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
