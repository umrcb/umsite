'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const inclusions = [
    "Professional Licensed Driver",
    "Fuel & Mileage",
    "Toll Gates & Taxes",
    "Airport Parking Fees",
    "Air Conditioning",
    "Complimentary Water",
    "In-Car Phone Charger",
    "Flight Tracking",
    "GPS Navigation",
    "Meet & Greet Service",
    "Comprehensive Insurance",
    "24/7 Customer Support"
];

export default function WhatsIncluded() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    
                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
                            No Hidden Fees
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-navy mb-6">
                            What's Included in Your Ride?
                        </h2>
                        <p className="text-lg text-slate-600 mb-10">
                            We believe in 100% transparent pricing. When you book an Umrah Taxi with us, everything you need for a comfortable and stress-free journey is already included in the fixed price.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                            {inclusions.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1549687989-b003a27072cc?auto=format&fit=crop&q=80&w=1200"
                            alt="Luxury Chauffeur Service"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex flex-col justify-end p-10">
                            <h3 className="text-white text-2xl font-bold font-playfair mb-2">
                                Premium Hospitality
                            </h3>
                            <p className="text-white/80">
                                Sit back, relax, and focus on your spiritual journey while we take care of the rest.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
