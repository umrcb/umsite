'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Sparkles, Settings } from 'lucide-react';

const stats = [
    {
        icon: <Settings size={28} strokeWidth={1.5} />,
        title: "Well Maintained",
        description: "Regularly serviced for safety"
    },
    {
        icon: <Sparkles size={28} strokeWidth={1.5} />,
        title: "Spacious & Clean",
        description: "Comfortable interiors for a pleasant ride"
    },
    {
        icon: <ShieldCheck size={28} strokeWidth={1.5} />,
        title: "Licensed & Insured",
        description: "Fully licensed with comprehensive insurance"
    },
    {
        icon: <UserCheck size={28} strokeWidth={1.5} />,
        title: "Professional Drivers",
        description: "Experienced, polite & well trained"
    }
];

export default function FleetOverviewStats() {
    return (
        <section className="bg-white py-12 border-b border-slate-100 z-30 relative">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center md:items-start text-center md:text-left gap-3 group"
                        >
                            <div className="text-primary bg-primary/5 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {stat.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-navy mb-1 font-poppins">{stat.title}</h3>
                                <p className="text-sm text-slate-500 font-light">{stat.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
