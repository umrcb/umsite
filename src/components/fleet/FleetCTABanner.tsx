'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function FleetCTABanner() {
    return (
        <section className="py-24 bg-[#1B5E20] relative overflow-hidden">
            {/* Ambient Lighting & Patterns */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/patterns/islamic-pattern.png')] bg-repeat opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/40 to-transparent blur-3xl" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-gold font-bold tracking-wider uppercase text-sm mb-4 block">
                        Begin Your Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
                        Ready to Travel in Comfort?
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
                        Choose the perfect vehicle and book your journey with confidence. Our premium fleet and professional chauffeurs await you.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            href="/booking" 
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold text-navy font-bold text-lg hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-gold/30 flex items-center justify-center gap-2 group"
                        >
                            Book Your Vehicle
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        <a 
                            href={getWhatsAppLink("Hello! I want to book a vehicle from your fleet.")} 
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={20} />
                            Contact via WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
