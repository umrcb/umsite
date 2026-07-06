'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function ServicesHero() {
    return (
        <section className="relative min-h-[85vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-32 overflow-hidden bg-white">
            {/* Background elements to create a premium feel with soft golden lighting */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[80%] md:w-[60%] h-full bg-gradient-to-l from-gold/5 via-gold/5 to-transparent rounded-bl-[100px]" />
                <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    
                    {/* Left Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 space-y-6 lg:space-y-8 z-10"
                    >
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-2">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <span>›</span>
                            <span className="text-primary font-semibold">Services</span>
                        </div>

                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="text-gold fill-gold" />
                                ))}
                            </div>
                            <span className="text-sm font-medium text-slate-700">Trusted by Thousands of Pilgrims</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-[800] text-navy leading-[1.15]">
                            Premium Transportation <br className="hidden md:block"/>
                            Services Across <br className="hidden md:block"/>
                            <span className="text-primary">Saudi Arabia</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                            Reliable airport transfers, Umrah transport, Ziyarat tours, hotel pickups, and luxury intercity travel with professional drivers and transparent pricing.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/booking" className="btn-primary py-4 px-8 text-lg group">
                                Book Your Ride 
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a 
                                href={getWhatsAppLink("Hello! I would like to know more about your Umrah Taxi services.")} 
                                target="_blank"
                                rel="noreferrer"
                                className="btn-secondary py-4 px-8 text-lg"
                            >
                                <MessageCircle size={20} className="mr-2" />
                                WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Content: Composite Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-1/2 relative mt-8 lg:mt-0"
                    >
                        <div className="relative w-full aspect-square lg:aspect-[4/3] max-w-[600px] mx-auto">
                            {/* Background Image (Masjid Nabawi / Kaaba) */}
                            <div className="absolute top-0 right-0 w-[85%] h-[80%] rounded-[32px] overflow-hidden shadow-2xl border border-white/50">
                                <Image
                                    src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1200"
                                    alt="Masjid Nabawi Madinah"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                            </div>
                            
                            {/* Foreground Vehicle (White Luxury SUV) */}
                            <div className="absolute bottom-0 -left-4 lg:-left-12 w-[90%] h-[60%] z-20">
                                <Image
                                    src="/images/fleet/gmc-yukon-hero-professional.png"
                                    alt="Luxury GMC Yukon Umrah Taxi"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
