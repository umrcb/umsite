'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, CheckSquare, UserCheck, Navigation } from 'lucide-react';

const steps = [
    {
        icon: <MapPin size={28} />,
        title: "Choose Service",
        description: "Select your route, pickup location, and date."
    },
    {
        icon: <Car size={28} />,
        title: "Select Vehicle",
        description: "Pick from our fleet of Sedans, SUVs, or Vans."
    },
    {
        icon: <CheckSquare size={28} />,
        title: "Confirm Details",
        description: "Review your booking and secure your ride."
    },
    {
        icon: <UserCheck size={28} />,
        title: "Driver Assigned",
        description: "Receive your professional chauffeur's details."
    },
    {
        icon: <Navigation size={28} />,
        title: "Journey Begins",
        description: "Enjoy a safe and comfortable trip."
    }
];

export default function BookingProcessTimeline() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
                        How It Works
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-navy mb-6">
                        Simple Booking Process
                    </h2>
                    <p className="text-lg text-slate-600">
                        We've made reserving your Umrah transport as seamless as possible. Book your ride in just a few clicks.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />

                    <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-12 lg:gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center relative group w-full lg:w-1/5"
                            >
                                {/* Mobile connecting line */}
                                {index !== steps.length - 1 && (
                                    <div className="block lg:hidden absolute top-24 left-1/2 w-[2px] h-16 bg-primary/30 -translate-x-1/2" />
                                )}

                                <div className="w-24 h-24 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {step.icon}
                                    </div>
                                    
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center border-2 border-white shadow-sm">
                                        {index + 1}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-600 max-w-[200px] leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
