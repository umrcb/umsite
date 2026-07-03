import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, MapPin, Shield, PlaneLanding, Briefcase, Car, CheckCircle2, ChevronRight } from 'lucide-react';
import { blogService } from '@/services/blogService';
import FadeIn from '@/components/common/FadeIn';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default async function SEOArticles() {
    // Get the first 3 articles from DB
    const posts = await blogService.getPosts();
    const latestPosts = posts.slice(0, 3);

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
                            Planning your spiritual journey? Navigating Saudi Arabia's transport options can be overwhelming. <strong>Umrah Cabs</strong> provides the most reliable <Link href="/services/jeddah-airport-transfer" className="text-gold font-semibold hover:underline">Jeddah Airport to Makkah taxi</Link> service.
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
                                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> True Door-to-Door Service</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> Flexible 24/7 Availability</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> Zero Luggage Hassles</li>
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

                {/* --- Latest Articles Section --- */}
                {latestPosts.length > 0 && (
                    <div className="pt-16 border-t border-[#F1F5F9]">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div>
                                <h2 className="text-3xl font-bold font-poppins text-[#0F172A] mb-3">Latest Travel Insights</h2>
                                <p className="text-[#475569] font-inter">Guides, tips, and news for your spiritual journey.</p>
                            </div>
                            <Link href="/blog" className="text-primary font-semibold font-poppins flex items-center gap-2 hover:gap-3 transition-all">
                                View All Articles <ArrowRight size={20} />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {latestPosts.map((post, index) => (
                                <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col premium-card overflow-hidden bg-white hover:-translate-y-2 transition-transform duration-500">
                                    <div className="relative h-[240px] w-full overflow-hidden bg-[#F8FAFC]">
                                        <Image
                                            src={post.image}
                                            alt={post.alt || post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold font-poppins text-[#0F172A] mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-[#475569] font-inter text-sm mb-6 line-clamp-3 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between border-t border-[#F1F5F9] pt-4 mt-auto">
                                            <span className="flex items-center gap-1.5 text-xs font-medium text-[#64748B]">
                                                <Clock size={14} />
                                                {post.readTime}
                                            </span>
                                            <span className="text-sm font-semibold text-primary flex items-center gap-1">
                                                Read More <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
