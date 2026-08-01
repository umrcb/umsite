import React from 'react';
import Link from 'next/link';
import { MapPin, PlaneLanding, Car, CheckCircle2 } from 'lucide-react';

export default function SEOArticles() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                
                {/* --- SEO Section: Guide --- */}
                <div className="mb-20">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                            The Complete Guide to <span className="text-primary">Umrah Transportation</span>
                        </h2>
                        <p className="text-lg text-[#475569] font-inter leading-relaxed">
                            Planning your spiritual journey? Navigating Saudi Arabia's transport options can be overwhelming. <strong>Umrah Cabs</strong> provides the most reliable <Link href="/services/jeddah-airport-transfer" className="text-primary font-semibold hover:underline">Jeddah Airport to Makkah taxi</Link> service.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                    <PlaneLanding className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-poppins text-[#0F172A] mb-2">Arriving at Jeddah Airport</h3>
                                    <p className="text-[#475569] font-inter leading-relaxed text-sm">
                                        By booking your Umrah taxi in advance, you bypass chaotic taxi ranks. Our chauffeurs offer a premium "Meet and Greet" service, tracking your flight to adjust to delays automatically.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                    <Car className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-poppins text-[#0F172A] mb-2">Private Taxi vs. Train</h3>
                                    <p className="text-[#475569] font-inter leading-relaxed text-sm mb-3">
                                        While the Haramain Train is modern, a private car provides a superior door-to-door experience for families.
                                    </p>
                                    <ul className="space-y-2 text-sm text-[#475569] font-inter">
                                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> True Door-to-Door Service</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Flexible 24/7 Availability</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Zero Luggage Hassles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Distances Table - Premium Card */}
                        <div className="premium-card p-8 bg-[#F8FAFC] border-none shadow-lg">
                            <h4 className="text-xl font-bold font-poppins mb-6 flex items-center gap-2 text-[#0F172A]">
                                <MapPin className="text-primary" /> Essential Holy Routes
                            </h4>
                            <div className="space-y-4">
                                {[
                                    { route: 'Jeddah Airport → Makkah', dist: '100 km', time: '1hr 15m' },
                                    { route: 'Makkah → Madinah', dist: '450 km', time: '4hr 30m' },
                                    { route: 'Jeddah Airport → Madinah', dist: '400 km', time: '4hr' },
                                    { route: 'Makkah → Jeddah City', dist: '85 km', time: '1hr' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#E2E8F0] hover:border-primary/50 transition-colors shadow-sm">
                                        <div className="font-semibold text-[#0F172A] text-sm">{item.route}</div>
                                        <div className="text-right">
                                            <div className="text-primary font-bold text-sm">{item.dist}</div>
                                            <div className="text-xs text-[#64748B] font-medium">{item.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
