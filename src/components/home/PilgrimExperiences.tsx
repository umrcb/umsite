'use client';

import React from 'react';
import { Star, MessageSquarePlus, ChevronRight, Quote } from 'lucide-react';
import { curatedTestimonials } from '@/data/testimonials';
import FadeIn from '@/components/common/FadeIn';

export default function PilgrimExperiences() {
    // Hardcoded stats for premium feel, in a real app this could be fetched
    const averageRating = "5.0";
    const totalReviews = "2,500+";

    return (
        <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
            {/* Elegant Background Patterns */}
            <div className="absolute inset-0 pattern-grid-fade opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                            Pilgrim Reviews
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0F172A] mb-6 tracking-tight">
                            Trusted by <span className="text-primary">Thousands</span>
                        </h2>

                        <p className="text-[#475569] text-lg leading-relaxed font-inter max-w-2xl mx-auto mb-10">
                            Real stories from brothers and sisters who trusted us with their journey of a lifetime.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <div className="text-6xl font-bold text-[#0F172A] font-poppins">{averageRating}</div>
                                    <div className="flex gap-1 justify-center mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={20} className="fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <div className="text-sm text-[#475569] font-medium mt-2">{totalReviews} Verified Reviews</div>
                                </div>
                            </div>

                            <div className="hidden md:block w-px h-20 bg-[#E2E8F0]" />

                            <div className="flex flex-col items-center sm:items-start gap-4">
                                <a
                                    href="https://search.google.com/local/writereview?placeid=ChIJmdXkoZ0dwhURzAKZlMOFpLg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex items-center gap-2 py-3 px-6 shadow-md hover:shadow-lg"
                                >
                                    <MessageSquarePlus size={18} />
                                    <span>Write a Review</span>
                                </a>
                                <div className="flex items-center gap-1.5 text-xs font-medium text-[#475569]">
                                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#10B981] text-white">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    <span>Verified on Google</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {curatedTestimonials.map((testimonial, index) => (
                        <FadeIn key={testimonial.id} delay={0.3 + (index * 0.1)}>
                            <div className="premium-card h-full relative group flex flex-col p-8 bg-white hover:-translate-y-2 transition-transform duration-500">
                                <Quote className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors" size={48} />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={`${i < testimonial.rating ? "fill-primary text-primary" : "text-[#E2E8F0]"}`}
                                        />
                                    ))}
                                </div>

                                <h3 className="font-bold text-[#0F172A] font-poppins text-xl mb-3 pr-10">
                                    "{testimonial.title}"
                                </h3>

                                <p className="text-[#475569] mb-8 leading-relaxed font-inter flex-1">
                                    {testimonial.story}
                                </p>

                                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#F1F5F9]">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg shrink-0 font-poppins">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#0F172A] font-poppins">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-xs text-[#64748B] flex items-center gap-1 font-medium">
                                            <span className="text-primary">{testimonial.origin}</span>
                                            <span>•</span>
                                            <span>{testimonial.trip}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Footer CTA */}
                <FadeIn delay={0.6}>
                    <div className="text-center">
                        <a
                            href="https://www.google.com/maps?cid=13304906274217460428"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 text-[#475569] hover:text-primary transition-colors font-medium text-sm group"
                        >
                            <span>Read all reviews on Google</span>
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
