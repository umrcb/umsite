'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function ServicesCTABanner() {
    return (
        <section className="py-20 bg-navy relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary/20" />
                <div className="absolute inset-0 opacity-5 bg-[url('/patterns/islamic-pattern.png')] bg-repeat" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/30 to-transparent" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
                        Ready to Book Your Ride?
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
                        Experience the best transportation services in Saudi Arabia. Book now to secure your luxury vehicle and ensure a peaceful spiritual journey.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            href="/booking" 
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold text-navy font-bold text-lg hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-gold/30 flex items-center justify-center gap-2 group"
                        >
                            Book Now
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        <a 
                            href={getWhatsAppLink("Hello! I want to book a ride.")} 
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={20} />
                            Chat on WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
