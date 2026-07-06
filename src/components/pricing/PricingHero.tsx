'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Calendar, CheckCircle, ShieldCheck, Clock, Car } from 'lucide-react';

export default function PricingHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-32 overflow-hidden bg-white">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
                <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-primary/5 via-primary/5 to-transparent rounded-bl-[120px]" />
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
                            <span className="text-primary font-semibold">Pricing</span>
                        </div>

                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 shadow-sm">
                            <Star size={16} className="text-gold fill-gold" />
                            <span className="text-sm font-bold text-navy">Transparent Pricing • No Hidden Charges</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-[72px] font-poppins font-[800] text-navy leading-[1.1]">
                            Premium Pricing <br />
                            for <span className="text-primary">Every Journey</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                            Fixed fares, professional chauffeurs, luxury vehicles, and transparent pricing for airport transfers, Umrah, Ziyarat, and intercity travel throughout Saudi Arabia.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button 
                                onClick={() => document.getElementById('price-estimator')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary py-4 px-8 text-lg group"
                            >
                                Get Instant Quote
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <Link href="/booking" className="btn-secondary py-4 px-8 text-lg group flex items-center justify-center">
                                <Calendar size={20} className="mr-2" />
                                Book Your Ride 
                            </Link>
                        </div>

                        {/* Small Trust Indicators */}
                        <div className="flex flex-wrap items-center gap-4 pt-6 mt-6 border-t border-slate-100">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                                <CheckCircle size={16} className="text-primary" />
                                Fixed Prices
                            </div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                                <ShieldCheck size={16} className="text-primary" />
                                Licensed Drivers
                            </div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                                <Clock size={16} className="text-primary" />
                                24/7 Support
                            </div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                                <Car size={16} className="text-primary" />
                                Premium Fleet
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content: Vehicle with Makkah/Madinah Background */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-1/2 relative mt-12 lg:mt-0 h-[400px] lg:h-[600px] flex items-center justify-center"
                    >
                        <div className="relative w-full h-full max-w-[800px] mx-auto">
                            {/* The vehicle */}
                            <Image
                                src="/images/fleet/gmc-yukon-hero-professional.png" // Fallback luxury SUV
                                alt="Luxury Premium SUV for Umrah Transport"
                                fill
                                className="object-contain drop-shadow-2xl z-20 scale-125 lg:scale-110 translate-y-12"
                                priority
                            />
                            {/* Background Image (Makkah/Kaaba blur) */}
                            <div 
                                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center rounded-3xl opacity-40 -z-10" 
                                style={{ 
                                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', 
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' 
                                }} 
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
