'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Star, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function HomeHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
            {/* Background Image - Faint Mosque/Landscape */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1565552643952-b43cb4c16a67?auto=format&fit=crop&q=80&w=2000"
                    alt="Masjid Al Haram"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                    
                    {/* Left Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 space-y-6 lg:space-y-8"
                    >
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-sm">
                            <Star size={16} className="text-[#C9A227] fill-[#C9A227]" />
                            <span className="text-sm font-medium text-[#475569]">Trusted by Thousands of Pilgrims</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-[800] text-[#0F172A] leading-[1.1]">
                            Premium Umrah Taxi <br className="hidden md:block"/>
                            Services from <br className="hidden md:block"/>
                            <span className="text-primary">Makkah & Madinah</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg md:text-xl text-[#475569] max-w-xl font-normal leading-relaxed">
                            Experience the ultimate comfort and reliability with our luxury fleet. Dedicated to making your spiritual journey seamless, safe, and stress-free.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link href="/booking" className="btn-primary py-4 px-8 text-lg">
                                Book Your Ride &rarr;
                            </Link>
                            <a 
                                href={getWhatsAppLink("Hello! I want to book a ride.")} 
                                target="_blank"
                                rel="noreferrer"
                                className="btn-secondary py-4 px-8 text-lg"
                            >
                                <MessageCircle size={20} className="mr-2" />
                                Chat on WhatsApp
                            </a>
                        </div>

                        {/* Features List */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="text-primary" size={20} />
                                <span className="text-[#0F172A] font-semibold text-sm">Licensed Drivers</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="text-primary" size={20} />
                                <span className="text-[#0F172A] font-semibold text-sm">Premium Fleet</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-primary" size={20} />
                                <span className="text-[#0F172A] font-semibold text-sm">24/7 Support</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content: Vehicle Showcase */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-1/2 relative mt-10 lg:mt-0"
                    >
                        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
                            {/* We use a placeholder image for the white SUV. In a real app, it should be a transparent PNG of a Fortuner. */}
                            <Image
                                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000"
                                alt="Luxury SUV"
                                fill
                                className="object-cover rounded-2xl shadow-2xl"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
