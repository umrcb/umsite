'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Calendar } from 'lucide-react';

export default function FleetHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-32 overflow-hidden bg-white">
            {/* Soft Ambient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
                <div className="absolute top-0 right-0 w-[80%] md:w-[60%] h-full bg-gradient-to-l from-primary/5 via-primary/5 to-transparent rounded-bl-[120px]" />
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    
                    {/* Left Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-5/12 space-y-6 lg:space-y-8 z-10"
                    >
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-2">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <span>›</span>
                            <span className="text-primary font-semibold">Fleet</span>
                        </div>

                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 shadow-sm">
                            <Star size={16} className="text-primary fill-primary" />
                            <span className="text-sm font-medium text-navy">Premium Fleet For Your Comfort</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-[72px] font-poppins font-[800] text-navy leading-[1.1]">
                            Travel in Comfort <br />
                            <span className="text-primary">With Our Premium Fleet</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                            Choose from our carefully maintained fleet of luxury SUVs, spacious vans, and comfortable buses designed for airport transfers, Umrah, Ziyarat, and intercity travel across Saudi Arabia.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button 
                                onClick={() => document.getElementById('fleet-showcase')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-secondary py-4 px-8 text-lg group"
                            >
                                View Vehicles
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <Link href="/booking" className="btn-primary py-4 px-8 text-lg group">
                                <Calendar size={20} className="mr-2" />
                                Book Now 
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Content: Composite Image / Fleet Lineup */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-7/12 relative mt-8 lg:mt-0 h-[400px] lg:h-[600px] flex items-center justify-center"
                    >
                        <div className="relative w-full h-full max-w-[900px] mx-auto">
                            <Image
                                src="/images/fleet/gmc-yukon-hero-professional.png"
                                alt="Umrah Cabs Premium Fleet Lineup"
                                fill
                                className="object-contain drop-shadow-2xl z-20 scale-125 lg:scale-110 translate-y-12"
                                priority
                                sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center rounded-3xl opacity-30 -z-10 blur-[2px]" style={{ maskImage: 'linear-gradient(to bottom, black, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)' }} />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
