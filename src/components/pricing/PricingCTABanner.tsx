'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Calculator, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function PricingCTABanner() {
    return (
        <section className="py-24 bg-[#0F291E] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 to-transparent" />
                <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-primary/20 blur-[120px] rounded-full" />
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gold/10 blur-[100px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-10 mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
                        Ready to Book Your Journey?
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Travel comfortably with transparent pricing and professional chauffeurs. Experience the difference of a true premium service.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 w-full max-w-3xl">
                        <Link 
                            href="/booking" 
                            className="w-full sm:w-auto flex-1 sm:flex-none px-6 py-4 rounded-xl bg-gold text-navy font-bold text-base hover:bg-white transition-colors duration-300 shadow-lg flex items-center justify-center gap-2"
                        >
                            <Calendar size={18} />
                            Book Now
                        </Link>

                        <button 
                            onClick={() => document.getElementById('price-estimator')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto flex-1 sm:flex-none px-6 py-4 rounded-xl bg-transparent border border-white/30 text-white font-bold text-base hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            <Calculator size={18} />
                            Get Instant Quote
                        </button>
                        
                        <a 
                            href={getWhatsAppLink("Hello! I am ready to book a journey.")} 
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto flex-1 sm:flex-none px-6 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#20bd5a] transition-colors duration-300 shadow-lg flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={18} />
                            WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
