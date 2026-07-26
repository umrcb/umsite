'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Briefcase } from 'lucide-react';
import Image from 'next/image';

const categories = [
    {
        title: "Luxury SUV",
        icon: <Shield size={24} />,
        vehicles: "GMC Yukon, Chevrolet Tahoe",
        idealFor: ["VIP Guests", "Business Travelers", "Small Families"],
        image: "/images/fleet/gmc-transparent.png"
    },
    {
        title: "Premium Van",
        icon: <Users size={24} />,
        vehicles: "Hyundai Staria, Hyundai Starex",
        idealFor: ["Families", "Airport Transfers", "Umrah Groups"],
        image: "/images/fleet/staria-transparent.png"
    },
    {
        title: "Group Transport",
        icon: <Briefcase size={24} />,
        vehicles: "Toyota Hiace, Toyota Coaster",
        idealFor: ["Large Families", "Group Pilgrims", "Hajj & Umrah Tours"],
        image: "/images/fleet/hiace-transparent.png"
    }
];

export default function FleetCategories() {
    return (
        <section className="py-24 bg-slate-50 border-b border-slate-200">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
                        Our Vehicle Classes
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-navy mb-4">
                        Tailored for Every Group Size
                    </h2>
                    <p className="text-lg text-slate-600">
                        Whether you're traveling solo, with family, or managing a large tour group, we have the perfect vehicle classification to ensure a comfortable journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {category.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-navy">{category.title}</h3>
                                </div>
                            </div>
                            
                            <div className="relative h-56 w-full mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-50 border border-slate-200/60 shadow-inner flex items-center justify-center p-4">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/80 rounded-full blur-[40px]"></div>
                                <Image 
                                    src={category.image} 
                                    alt={category.title} 
                                    fill 
                                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)] z-10 mix-blend-multiply" 
                                />
                            </div>

                            <div className="mt-auto space-y-4">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Featured Vehicles</h4>
                                    <p className="font-medium text-navy">{category.vehicles}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Ideal For</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.idealFor.map((item, i) => (
                                            <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
