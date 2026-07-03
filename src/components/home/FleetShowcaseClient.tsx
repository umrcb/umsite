'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Briefcase, Check, ArrowRight, Tag } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export interface FleetVehicle {
    id: string;
    name: string;
    image: string;
    passengers: number | string;
    luggage: number;
    features: string[];
    price: string;
}

interface FleetShowcaseClientProps {
    vehicles: FleetVehicle[];
    discount?: {
        enabled: boolean;
        type: 'percentage' | 'fixed';
        value: number;
        startDate?: string;
        endDate?: string;
    };
}

export default function FleetShowcaseClient({ vehicles, discount }: FleetShowcaseClientProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    if (vehicles.length === 0) return null;

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.firstElementChild?.clientWidth || 400;
            const gap = 32; // 2rem gap
            const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const now = new Date();
    const isDiscountActive = discount?.enabled &&
        (!discount.startDate || new Date(discount.startDate) <= now) &&
        (!discount.endDate || new Date(discount.endDate) > now);

    return (
        <div className="relative w-full overflow-hidden pb-12 max-w-[1400px] mx-auto px-4 md:px-8">
            
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between px-2 md:px-4 pointer-events-none">
                <button
                    onClick={() => scroll('left')}
                    className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-[#E2E8F0] shadow-md flex items-center justify-center text-[#475569] hover:text-primary hover:border-primary transition-all duration-300"
                    aria-label="Previous"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-[#E2E8F0] shadow-md flex items-center justify-center text-[#475569] hover:text-primary hover:border-primary transition-all duration-300"
                    aria-label="Next"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <motion.div
                ref={scrollContainerRef}
                className="flex gap-8 overflow-x-auto pb-8 pt-4 cursor-grab active:cursor-grabbing hide-scrollbar snap-x snap-mandatory"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {vehicles.map((vehicle, idx) => (
                    <div 
                        key={vehicle.id} 
                        className="premium-card shrink-0 w-[320px] md:w-[400px] snap-center flex flex-col overflow-hidden bg-white hover:-translate-y-2 transition-transform duration-500"
                    >
                        {/* Image Section */}
                        <div className="relative h-[240px] w-full bg-[#F8FAFC]">
                            <Image
                                src={vehicle.image}
                                alt={vehicle.name}
                                fill
                                sizes="(max-width: 768px) 320px, 400px"
                                className="object-cover"
                                draggable={false}
                            />
                            {isDiscountActive && (
                                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                                    <Tag size={12} />
                                    {discount?.type === 'percentage' ? `${discount.value}% OFF` : `${discount?.value} SAR OFF`}
                                </div>
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="p-6 md:p-8 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-6 border-b border-[#E2E8F0] pb-4">
                                <div>
                                    <h3 className="text-2xl font-bold font-poppins text-[#0F172A] mb-1">{vehicle.name}</h3>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-1">Starting</span>
                                    <span className="text-lg font-bold text-primary">{vehicle.price}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 mb-6">
                                <div className="flex items-center gap-2 text-[#475569]">
                                    <div className="w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center text-primary">
                                        <Users size={16} />
                                    </div>
                                    <span className="font-medium text-sm">{vehicle.passengers} Pax</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#475569]">
                                    <div className="w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center text-primary">
                                        <Briefcase size={16} />
                                    </div>
                                    <span className="font-medium text-sm">{vehicle.luggage} Bags</span>
                                </div>
                            </div>

                            <div className="space-y-2 mb-8">
                                {vehicle.features.slice(0, 3).map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-[#475569]">
                                        <Check size={16} className="text-gold" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <a
                                    href={getWhatsAppLink(`Salam Umrah Cabs, I am interested in booking the ${vehicle.name} (${vehicle.passengers} pax).`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full py-3.5 flex justify-center text-sm"
                                >
                                    Book via WhatsApp <ArrowRight size={16} className="ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
