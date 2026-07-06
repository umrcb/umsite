'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Briefcase, Snowflake, ArrowRight } from 'lucide-react';

const vehicles = [
    {
        id: 'hiace',
        name: 'Toyota Hiace',
        tag: '15 Seats',
        capacity: '15 Seats',
        luggage: '15 Luggage',
        description: 'Spacious and comfortable van perfect for group travel and Umrah trips.',
        price: 'SAR 450',
        image: '/images/fleet/toyota-hiace-hero.png',
        link: '/booking?service=group&vehicle=hiace'
    },
    {
        id: 'yukon',
        name: 'GMC Yukon',
        tag: '7 Seats',
        capacity: '7 Seats',
        luggage: '6 Luggage',
        description: 'Luxury SUV with premium comfort for VIP and family travel.',
        price: 'SAR 650',
        image: '/images/fleet/gmc-yukon-hero-professional.png',
        link: '/booking?service=vip&vehicle=yukon'
    },
    {
        id: 'staria',
        name: 'Hyundai Staria',
        tag: '11 Seats',
        capacity: '11 Seats',
        luggage: '9 Luggage',
        description: 'Modern and stylish van with spacious interior and smooth ride.',
        price: 'SAR 500',
        image: '/images/fleet/hyundai-staria-hero.png',
        link: '/booking?service=family&vehicle=staria'
    },
    {
        id: 'starex',
        name: 'Hyundai Starex',
        tag: '12 Seats',
        capacity: '12 Seats',
        luggage: '10 Luggage',
        description: 'Reliable and comfortable option for medium sized groups.',
        price: 'SAR 400',
        image: '/images/fleet/hyundai-starex-hero.png', // Fallback to generic van or placeholder
        link: '/booking?service=group&vehicle=starex'
    },
    {
        id: 'coaster',
        name: 'Toyota Coaster',
        tag: '22 Seats',
        capacity: '22 Seats',
        luggage: '20 Luggage',
        description: 'Ideal for large groups with ample space and premium comfort.',
        price: 'SAR 700',
        image: '/images/fleet/toyota-coaster-hero.png',
        link: '/booking?service=group&vehicle=coaster'
    }
];

export default function FleetShowcaseGrid() {
    return (
        <section id="fleet-showcase" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-navy mb-6">
                        Our Fleet
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
                    {vehicles.map((vehicle, index) => (
                        <motion.div
                            key={vehicle.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group relative"
                        >
                            {/* Tag */}
                            <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                {vehicle.tag}
                            </div>

                            {/* Image Box */}
                            <div className="relative h-48 w-full bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100 overflow-hidden">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-navy mb-4 font-poppins">{vehicle.name}</h3>
                                
                                {/* Specs */}
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-600 mb-4 pb-4 border-b border-slate-100">
                                    <div className="flex items-center gap-1.5">
                                        <Users size={14} className="text-primary" />
                                        <span>{vehicle.capacity}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Briefcase size={14} className="text-primary" />
                                        <span>{vehicle.luggage}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Snowflake size={14} className="text-primary" />
                                        <span>AC</span>
                                    </div>
                                </div>

                                <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">
                                    {vehicle.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="text-sm text-slate-500 mb-4">
                                        From <span className="font-bold text-navy text-lg">{vehicle.price}</span>
                                    </div>
                                    <Link 
                                        href={vehicle.link}
                                        className="w-full bg-[#1B5E20] hover:bg-primary text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors duration-300"
                                    >
                                        Book Now
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
