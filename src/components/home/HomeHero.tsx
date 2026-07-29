'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Star, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function HomeHero() {
    return (
        <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/images/user_hero_nabawi.jpg"
                    alt="Masjid al-Nabawi, Madinah"
                    fill
                    sizes="100vw"
                    quality={100}
                    className="object-cover object-bottom"
                    priority
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-20 pt-24 pb-8 lg:pt-32 lg:pb-16">
                <div className="flex flex-col items-start gap-8 max-w-3xl">
                    
                    {/* Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full space-y-6 lg:space-y-8"
                    >
                        <div className="max-md:sr-only inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
                            <Star size={16} className="text-[#C9A227] fill-[#C9A227]" />
                            <span className="text-sm font-medium text-white">Trusted by Thousands of Pilgrims</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-[800] text-white leading-[1.1]">
                            Premium Umrah Taxi <br className="hidden md:block"/>
                            Services from <br className="hidden md:block"/>
                            <span className="text-primary">Makkah & Madinah</span>
                        </h1>

                        {/* Subheading */}
                        <p className="max-md:sr-only text-lg md:text-xl text-gray-200 max-w-xl font-normal leading-relaxed">
                            Experience the ultimate comfort and reliability with our luxury fleet. Dedicated to making your spiritual journey seamless, safe, and stress-free.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-row gap-3 sm:gap-4 pt-4 w-full">
                            <Link href="/booking" className="btn-primary flex-1 py-3 px-2 sm:py-4 sm:px-8 text-sm sm:text-lg inline-flex items-center justify-center text-center hover:scale-105 transition-transform duration-300">
                                <span className="truncate">Book Your Ride</span>
                                <span className="ml-1 sm:ml-2">&rarr;</span>
                            </Link>
                            <a 
                                href={getWhatsAppLink("Hello! I want to book a ride.")} 
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#25D366] hover:bg-[#20bd5a] flex-1 text-white font-semibold rounded-lg py-3 px-2 sm:py-4 sm:px-8 text-sm sm:text-lg inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
                            >
                                <MessageCircle className="mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                <span className="truncate hidden sm:inline">Chat on WhatsApp</span>
                                <span className="truncate sm:hidden">WhatsApp</span>
                            </a>
                        </div>

                        {/* Features List */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8 border-t border-white/20 mt-8">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="text-primary" size={20} />
                                <span className="text-white font-semibold text-sm">Licensed Drivers</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="text-primary" size={20} />
                                <span className="text-white font-semibold text-sm">Premium Fleet</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-primary" size={20} />
                                <span className="text-white font-semibold text-sm">24/7 Support</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
