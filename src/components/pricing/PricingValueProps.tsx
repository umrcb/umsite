'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Diamond, Clock } from 'lucide-react';

const valueProps = [
    {
        title: 'Fixed Prices',
        description: 'No hidden fees, surge pricing, or unexpected costs. What you see is exactly what you pay.',
        icon: <CheckCircle2 size={32} strokeWidth={1.5} />
    },
    {
        title: 'Transparent Quotes',
        description: 'Know your exact fare instantly before you confirm your booking, with all inclusions listed clearly.',
        icon: <ShieldCheck size={32} strokeWidth={1.5} />
    },
    {
        title: 'Premium Service',
        description: 'Enjoy luxury vehicles, professional well-groomed drivers, and a five-star travel experience.',
        icon: <Diamond size={32} strokeWidth={1.5} />
    },
    {
        title: '24/7 Availability',
        description: 'We are available anytime, anywhere in Saudi Arabia. Early morning or late night, we are here.',
        icon: <Clock size={32} strokeWidth={1.5} />
    }
];

export default function PricingValueProps() {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-100 z-30 relative">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {valueProps.map((prop, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center gap-6"
                        >
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {prop.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy mb-2 font-poppins">{prop.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-light text-sm">{prop.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
