import React from 'react';
import Link from 'next/link';

export default function PricingHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1500px] relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 font-bold rounded-full text-sm tracking-wider uppercase mb-6 border border-emerald-100">
                            Fixed & Transparent Rates
                        </div>
                        <h1 className="text-5xl lg:text-[72px] leading-tight font-black text-slate-900 mb-6 font-poppins">
                            Affordable & <br className="hidden lg:block" />
                            <span className="text-[#2E8B57]">Transparent Pricing</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-inter leading-relaxed">
                            Professional pricing for airport transfers, hotel transfers, intercity travel, Umrah, Hajj, and Ziyarat. No hidden fees, no surge pricing—just reliable luxury travel across Saudi Arabia.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/booking" className="px-8 py-4 bg-[#2E8B57] text-white font-bold rounded-full hover:bg-[#1B5E20] transition-colors shadow-lg shadow-emerald-600/20 text-center text-lg">
                                Book Now
                            </Link>
                            <Link href="/contact" className="px-8 py-4 bg-white text-slate-700 font-bold rounded-full hover:bg-slate-50 transition-colors border-2 border-[#E2E8F0] text-center text-lg">
                                Get Instant Quote
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative">
                        {/* Premium illustration or image placeholder */}
                        <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent z-10" />
                            <img 
                                src="/images/gallery/gallery-2.jpg" // Using an existing gallery image for luxury feel
                                alt="Premium Chauffeur Service"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Floating Royal Gold Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    ★
                                </div>
                                <div>
                                    <p className="font-black text-slate-900">Premium Fleet</p>
                                    <p className="text-sm text-slate-500">2023-2024 Models</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
