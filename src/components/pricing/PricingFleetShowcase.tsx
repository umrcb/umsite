'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Users, Briefcase, Award } from 'lucide-react';

const vehicles = [
    {
        id: 'yukon',
        name: 'GMC Yukon',
        passengers: '6 - 7 Seats',
        luggage: '4 - 6 Luggage',
        type: 'Luxury SUV',
        price: 'SAR 650',
        image: '/images/fleet/gmc-yukon-hero-professional.png',
        tag: 'BEST FOR VIP',
        link: '/booking?service=vip&vehicle=yukon'
    },
    {
        id: 'staria',
        name: 'Hyundai Staria',
        passengers: '7 - 9 Seats',
        luggage: '6 - 8 Luggage',
        type: 'Premium Van',
        price: 'SAR 500',
        image: '/images/fleet/hyundai-staria-hero.png',
        tag: 'POPULAR',
        link: '/booking?service=family&vehicle=staria'
    },
    {
        id: 'starex',
        name: 'Hyundai Starex',
        passengers: '8 - 10 Seats',
        luggage: '7 - 9 Luggage',
        type: 'Premium Van',
        price: 'SAR 400',
        image: '/images/fleet/hyundai-starex-hero.png',
        link: '/booking?service=group&vehicle=starex'
    },
    {
        id: 'hiace',
        name: 'Toyota Hiace',
        passengers: '10 - 13 Seats',
        luggage: '10 - 12 Luggage',
        type: 'Spacious Van',
        price: 'SAR 450',
        image: '/images/fleet/toyota-hiace-hero.png',
        link: '/booking?service=group&vehicle=hiace'
    },
    {
        id: 'coaster',
        name: 'Toyota Coaster',
        passengers: '20 - 30 Seats',
        luggage: '15 - 20 Luggage',
        type: 'Mini Bus',
        price: 'SAR 700',
        image: '/images/fleet/toyota-coaster-hero.png',
        link: '/booking?service=group&vehicle=coaster'
    }
];

export default function PricingFleetShowcase() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full flex flex-col h-full overflow-hidden">
            <div className="flex items-end justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold font-poppins text-navy mb-2">Our Fleet & Pricing</h2>
                    <p className="text-sm text-slate-500">Choose the perfect vehicle for your journey</p>
                </div>
                <div className="flex gap-2 hidden sm:flex">
                    <button 
                        onClick={() => scroll('left')}
                        className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            <div className="relative flex-grow">
                {/* Horizontal Scroll Container */}
                <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar h-full"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {vehicles.map((vehicle, index) => (
                        <div 
                            key={index} 
                            className="flex-none w-[260px] md:w-[280px] bg-white rounded-2xl border border-slate-100 shadow-sm snap-start flex flex-col relative group hover:shadow-lg hover:border-slate-200 transition-all duration-300"
                        >
                            {vehicle.tag && (
                                <div className={`absolute top-3 left-3 z-10 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${vehicle.tag.includes('VIP') ? 'bg-gold text-white' : 'bg-primary text-white'}`}>
                                    {vehicle.tag}
                                </div>
                            )}
                            
                            <div className="h-32 w-full relative bg-slate-50 rounded-t-2xl p-4 flex items-center justify-center border-b border-slate-50">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="font-bold text-navy text-lg mb-3">{vehicle.name}</h3>
                                
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-xs text-slate-600">
                                        <Users size={14} className="text-primary mr-2" />
                                        {vehicle.passengers}
                                    </div>
                                    <div className="flex items-center text-xs text-slate-600">
                                        <Briefcase size={14} className="text-primary mr-2" />
                                        {vehicle.luggage}
                                    </div>
                                    <div className="flex items-center text-xs text-slate-600">
                                        <Award size={14} className="text-primary mr-2" />
                                        {vehicle.type}
                                    </div>
                                </div>
                                
                                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] text-slate-500 block uppercase">From</span>
                                        <span className="font-bold text-navy">{vehicle.price}</span>
                                    </div>
                                    <Link 
                                        href={vehicle.link}
                                        className="bg-[#1B5E20] hover:bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="mt-4 text-center">
                <Link href="/fleet" className="inline-flex items-center justify-center px-6 py-2 bg-slate-50 border border-slate-200 hover:border-primary/30 hover:bg-primary/5 text-sm font-semibold text-navy rounded-full transition-colors">
                    View All Vehicles <ChevronRight size={16} className="ml-1" />
                </Link>
            </div>

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
