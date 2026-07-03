'use client';

import React, { useState } from 'react';
import { Shield, Clock, Heart, AlertTriangle, Phone, ShieldCheck, UserCheck, Users, HeartHandshake, CheckCircle2 } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhyChooseUs() {
    const [activeCareTab, setActiveCareTab] = useState<'sisters' | 'families' | 'elderly'>('families');

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                
                {/* 1. Core Pillars */}
                <FadeIn>
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Umrah Cabs Excellence</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
                            Why Choose Us for <span className="text-primary">Umrah Transport?</span>
                        </h2>
                        <p className="text-lg text-[#475569] font-inter">
                            The most trusted choice for safe, comfortable, and punctual Makkah to Madinah travel.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <FadeIn delay={0.1}>
                        <div className="premium-card p-10 text-center h-full flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-sm">
                                <Shield size={36} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold font-poppins mb-2 text-[#0F172A]">Safe & Trusted</h3>
                            <p className="text-primary font-bold font-reem-kufi mb-4 text-base">نقل آمن وموثوق</p>
                            <p className="text-[#475569] font-inter leading-relaxed">
                                Officially licensed chauffeurs & well-maintained vehicles. Your safety is our highest priority.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="premium-card p-10 text-center h-full flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-sm">
                                <Clock size={36} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold font-poppins mb-2 text-[#0F172A]">Punctual Transfers</h3>
                            <p className="text-primary font-bold font-reem-kufi mb-4 text-base">دقة في المواعيد</p>
                            <p className="text-[#475569] font-inter leading-relaxed">
                                We track your flight to ensure timely pickups. Reliable airport service available 24/7.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="premium-card p-10 text-center h-full flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-sm">
                                <Heart size={36} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold font-poppins mb-2 text-[#0F172A]">VIP Hospitality</h3>
                            <p className="text-primary font-bold font-reem-kufi mb-4 text-base">ضيافة وراحة VIP</p>
                            <p className="text-[#475569] font-inter leading-relaxed">
                                Spacious GMC Yukons & luxury vans. We serve the guests of Allah with utmost respect.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* 2. The "Never Stranded" Promise */}
                <FadeIn>
                    <div className="premium-card bg-gradient-to-br from-white to-[#F8FAFC] border-primary/20 p-8 md:p-12 mb-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                                    <ShieldCheck size={18} />
                                    <span>Umrah Cabs Guarantee</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-[#0F172A]">
                                    Our "Never Stranded" Promise
                                </h3>
                                <p className="text-[#475569] font-inter text-lg mb-8 leading-relaxed">
                                    We don't just hope for the best; we engineer for the unexpected. Our Emergency Deployment Protocol ensures your spiritual journey remains uninterrupted.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white rounded-lg p-3 text-primary shadow-sm border border-[#E2E8F0]">
                                            <AlertTriangle size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#0F172A] mb-1">Instant Replacement</h4>
                                            <p className="text-[#475569] text-sm">Backup vehicles routed immediately if needed.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white rounded-lg p-3 text-primary shadow-sm border border-[#E2E8F0]">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#0F172A] mb-1">24/7 Command Support</h4>
                                            <p className="text-[#475569] text-sm">Direct line to our Operations Manager.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
                                <h4 className="font-bold font-poppins text-lg mb-4 flex items-center gap-2 border-b border-[#E2E8F0] pb-4">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                    Standard Operating Procedure
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">1</div>
                                        <div>
                                            <h5 className="font-bold text-[#0F172A] text-sm">Secure & Comfort</h5>
                                            <p className="text-[#475569] text-sm">Driver secures vehicle in safe zone. AC & Water provided immediately.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">2</div>
                                        <div>
                                            <h5 className="font-bold text-[#0F172A] text-sm">Rapid Deployment</h5>
                                            <p className="text-[#475569] text-sm">Nearest standby unit dispatched from Makkah/Madinah bases.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* 3. Passenger Care */}
                <FadeIn>
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Dedicated Service</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Tailored Care for Every Guest</h2>
                        <p className="text-lg text-[#475569] font-inter">
                            Every pilgrim's needs are unique. Our service provides dignified support tailored to your requirements.
                        </p>
                    </div>

                    <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-4">
                        <button 
                            onClick={() => setActiveCareTab('sisters')}
                            className={`px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-2 ${activeCareTab === 'sisters' ? 'bg-primary text-white shadow-md' : 'bg-white text-[#475569] hover:bg-[#F8FAFC] border border-[#E2E8F0]'}`}
                        >
                            <UserCheck size={18} /> Solo Sisters
                        </button>
                        <button 
                            onClick={() => setActiveCareTab('families')}
                            className={`px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-2 ${activeCareTab === 'families' ? 'bg-primary text-white shadow-md' : 'bg-white text-[#475569] hover:bg-[#F8FAFC] border border-[#E2E8F0]'}`}
                        >
                            <Users size={18} /> Families
                        </button>
                        <button 
                            onClick={() => setActiveCareTab('elderly')}
                            className={`px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-2 ${activeCareTab === 'elderly' ? 'bg-primary text-white shadow-md' : 'bg-white text-[#475569] hover:bg-[#F8FAFC] border border-[#E2E8F0]'}`}
                        >
                            <HeartHandshake size={18} /> Elderly Parents
                        </button>
                    </div>

                    <div className="premium-card p-6 md:p-10 bg-white min-h-[400px] flex items-center">
                        <AnimatePresence mode="wait">
                            {activeCareTab === 'sisters' && (
                                <motion.div 
                                    key="sisters"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="grid md:grid-cols-2 gap-10 items-center w-full"
                                >
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0]">
                                        <Image src="/images/blog/solo-sister-travel.jpg" alt="Solo Sisters" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold font-poppins mb-2 text-[#0F172A]">Trusted & Secure for Solo Sisters</h3>
                                        <p className="text-[#475569] mb-6 leading-relaxed">
                                            We specialize in female-friendly transport where your security is our #1 priority. Our drivers are rigorously vetted professionals trained to respect your privacy and adhere to Islamic Etiquette.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} /> <span className="text-[#475569]">24/7 Control Room Tracking.</span></li>
                                            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} /> <span className="text-[#475569]">Share Live Trip Link instantly with family.</span></li>
                                        </ul>
                                    </div>
                                </motion.div>
                            )}

                            {activeCareTab === 'families' && (
                                <motion.div 
                                    key="families"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="grid md:grid-cols-2 gap-10 items-center w-full"
                                >
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0]">
                                        <Image src="/images/blog/family-umrah-transport.png" alt="Families" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold font-poppins mb-2 text-[#0F172A]">Privacy & Space for Families</h3>
                                        <p className="text-[#475569] mb-6 leading-relaxed">
                                            We provide spacious GMC Yukons and H1 Vans so your entire family stays together. We create a calm environment for children and respect your family's private moments.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} /> <span className="text-[#475569]">Spacious Interiors with room for strollers.</span></li>
                                            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} /> <span className="text-[#475569]">Flexible Stops for prayer or children's needs.</span></li>
                                        </ul>
                                    </div>
                                </motion.div>
                            )}

                            {activeCareTab === 'elderly' && (
                                <motion.div 
                                    key="elderly"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="grid md:grid-cols-2 gap-10 items-center w-full"
                                >
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0]">
                                        <Image src="/images/blog/elderly-care-gmc.jpg" alt="Elderly" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold font-poppins mb-2 text-[#0F172A]">Dignity & Patience for Elderly</h3>
                                        <p className="text-[#475569] mb-6 leading-relaxed">
                                            We understand the physical challenges of Umrah. Our chauffeurs are trained to be extra patient, providing physical assistance at every step.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} /> <span className="text-[#475569]">Door-to-Door Assistance.</span></li>
                                            <li className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} /> <span className="text-[#475569]">Gentle driving style to protect sensitive backs.</span></li>
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
