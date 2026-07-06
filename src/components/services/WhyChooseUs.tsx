'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Headphones, Car, BadgeDollarSign, PlaneTakeoff, HeartHandshake } from 'lucide-react';

const reasons = [
    {
        icon: <ShieldCheck size={32} strokeWidth={1.5} />,
        title: "Licensed Chauffeurs",
        description: "Experienced, fully licensed drivers who know the routes to Makkah and Madinah perfectly, ensuring a safe and smooth journey."
    },
    {
        icon: <Headphones size={32} strokeWidth={1.5} />,
        title: "24/7 Customer Support",
        description: "Our dedicated support team is available around the clock via WhatsApp and phone to assist you at any stage of your trip."
    },
    {
        icon: <Car size={32} strokeWidth={1.5} />,
        title: "Luxury Fleet",
        description: "Travel in comfort with our meticulously maintained fleet of premium Sedans, SUVs, and spacious Vans suited for all group sizes."
    },
    {
        icon: <BadgeDollarSign size={32} strokeWidth={1.5} />,
        title: "Transparent Pricing",
        description: "Fixed rates with zero hidden fees. What you see is exactly what you pay, including all tolls and airport parking charges."
    },
    {
        icon: <PlaneTakeoff size={32} strokeWidth={1.5} />,
        title: "Flight Monitoring",
        description: "We track your flight in real-time. If you are delayed or arrive early, your driver will adjust the pickup time automatically."
    },
    {
        icon: <HeartHandshake size={32} strokeWidth={1.5} />,
        title: "Professional Hospitality",
        description: "We treat every pilgrim as a VIP. Enjoy complimentary meet & greet service, luggage assistance, and a warm welcome."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-playfair text-navy mb-4">
                        Why Choose Our Services
                    </h2>
                    <p className="text-lg text-slate-600">
                        We are committed to providing the highest standard of transportation for Guests of Allah, combining luxury, reliability, and heartfelt hospitality.
                    </p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {reasons.map((reason, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">
                                {reason.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
