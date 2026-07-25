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
                        className="premium-card shrink-0 w-[280px] md:w-[320px] snap-center flex flex-col overflow-hidden bg-white hover:-translate-y-2 transition-transform duration-500 rounded-2xl"
                    >
                        {/* Image Section */}
                        <div className="relative h-[180px] w-full bg-[#F8FAFC]">
                            <Image
                                src={vehicle.image}
                                alt={vehicle.name}
                                fill
                                sizes="(max-width: 768px) 280px, 320px"
                                className="object-cover"
                                draggable={false}
                            />
                            {isDiscountActive && (
                                <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                                    <Tag size={10} />
                                    {discount?.type === 'percentage' ? `${discount.value}% OFF` : `${discount?.value} SAR OFF`}
                                </div>
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="p-5 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-4 border-b border-[#E2E8F0] pb-3">
                                <div>
                                    <h3 className="text-xl font-bold font-poppins text-[#0F172A] mb-0.5">{vehicle.name}</h3>
                                </div>
                                <div className="text-right">
                                    <span className="block text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mb-0.5">Starting</span>
                                    <span className="text-base font-bold text-primary">{vehicle.price}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-1.5 text-[#475569]">
                                    <div className="w-7 h-7 rounded-full bg-[#F8FAFC] flex items-center justify-center text-primary">
                                        <Users size={14} />
                                    </div>
                                    <span className="font-medium text-xs">{vehicle.passengers} Pax</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-[#475569]">
                                    <div className="w-7 h-7 rounded-full bg-[#F8FAFC] flex items-center justify-center text-primary">
                                        <Briefcase size={14} />
                                    </div>
                                    <span className="font-medium text-xs">{vehicle.luggage} Bags</span>
                                </div>
                            </div>

                            <div className="space-y-1.5 mb-5">
                                {vehicle.features.slice(0, 3).map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-[#475569]">
                                        <Check size={14} className="text-primary shrink-0" />
                                        <span className="truncate">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <a
                                    href={getWhatsAppLink(`Salam Umrah Cabs, I am interested in booking the ${vehicle.name} (${vehicle.passengers} pax).`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full py-2.5 flex justify-center text-xs rounded-xl"
                                >
                                    Book via WhatsApp <ArrowRight size={14} className="ml-1.5" />
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
