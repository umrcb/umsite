'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Star, Clock } from 'lucide-react';

const stats = [
    {
        icon: <Users size={32} strokeWidth={1.5} />,
        value: "25,000+",
        label: "Happy Pilgrims"
    },
    {
        icon: <Award size={32} strokeWidth={1.5} />,
        value: "10+",
        label: "Years Experience"
    },
    {
        icon: <Star size={32} strokeWidth={1.5} />,
        value: "500+",
        label: "Five Star Reviews"
    },
    {
        icon: <Clock size={32} strokeWidth={1.5} />,
        value: "99%",
        label: "On Time Pickup"
    }
];

export default function ServicesTrustSection() {
    return (
        <section className="py-16 bg-[#1B5E20] relative overflow-hidden text-white">
            {/* Subtle Pattern Background */}
            <div className="absolute inset-0 opacity-10 bg-[url('/patterns/islamic-pattern.png')] bg-repeat" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left px-4"
                        >
                            <div className="text-gold">
                                {stat.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold font-poppins">{stat.value}</span>
                                <span className="text-sm font-medium text-white/80">{stat.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
