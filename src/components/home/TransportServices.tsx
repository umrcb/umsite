'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Car, Plane, Building2, MapPin } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';

const services = [
    {
        id: 'intercity',
        title: 'Intercity Transport',
        subtitle: 'Makkah • Madinah • Jeddah • Taif',
        description: 'Experience safe, comfortable travel between major Saudi cities. Our premium intercity transport ensures a smooth journey for pilgrims performing Umrah and Ziyarat. Punctual, reliable, and stress-free long-distance travel.',
        image: '/images/services/intercity-transport-v2.png',
        icon: <Car size={32} className="text-primary" />,
        link: '/services/intercity-transfer',
        keywords: ['intercity transport Saudi Arabia', 'Makkah to Madinah transport']
    },
    {
        id: 'airport-pickups',
        title: 'Airport Transport',
        subtitle: 'Jeddah (KAIA) • Madinah (Prince Mohammad)',
        description: 'Seamless pickup and drop-off from Jeddah and Madinah airports. We offer real-time flight tracking, professional meet-and-greet service, and luggage assistance for a stress-free arrival in the Holy Land.',
        icon: <Plane size={32} className="text-primary" />,
        image: '/images/services/airport-transfer-v2.png',
        link: '/services/airport-transfers',
        keywords: ['Jeddah Airport pickup', 'Madinah Airport transfer']
    },
    {
        id: 'hotel-transfers',
        title: 'Hotel Transfers',
        subtitle: 'Door-to-Door • Makkah & Madinah Hotels',
        description: 'Quick and reliable transfers between your hotel and the Holy Mosques. Enjoy premium comfort and cleanliness, perfectly suitable for families, groups, and elderly pilgrims seeking ease of movement.',
        icon: <Building2 size={32} className="text-primary" />,
        image: '/images/services/hotel-transfers-v2.png',
        link: '/services/hotel-transfers',
        keywords: ['hotel transfer Makkah', 'hotel shuttle Madinah']
    },
    {
        id: 'ziyarat-tours',
        title: 'Ziyarat Tours',
        subtitle: 'Historical Sites • Guided Tours',
        description: 'Enrich your Umrah with visits to sacred sites like Masjid Quba, Mount Uhud, and Cave Hira. Our knowledgeable drivers ensure you experience the history of Islam with comfort and convenience.',
        icon: <MapPin size={32} className="text-primary" />,
        image: '/images/blog/makkah-haram-view.jpg',
        link: '/services/ziyarat-tours',
        keywords: ['Makkah Ziyarat', 'Madinah Ziyarat']
    },
    {
        id: 'ramadan-transport',
        title: 'Ramadan Transport',
        subtitle: '24/7 Availability • Tarawih & Qiyam',
        description: 'Specialized transport services for the Holy Month. We handle the heavy traffic during peak times so you can focus on your fasting and prayers. Pre-book to guarantee your ride.',
        icon: <Car size={32} className="text-primary" />,
        image: '/images/hero/ramadan-transport-hero.png',
        link: '/services/ramadan-transport',
        keywords: ['Ramadan transport Makkah', 'Tarawih taxi']
    }
];

export default function TransportServices() {
    return (
        <section className="relative py-24 bg-background overflow-hidden z-20">
            <div className="container relative z-10 mx-auto px-4" suppressHydrationWarning>
                <FadeIn>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Our Services</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6 font-poppins">
                            Reliable Services for Every Journey
                        </h2>
                        <p className="text-lg text-[#475569]">
                            Comprehensive travel solutions designed for the Guests of Allah. From airport arrivals to intercity travel, we ensure every mile is comfortable and safe.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <FadeIn key={service.id} delay={index * 0.1} scale>
                            <article className="premium-card flex flex-col h-full group">
                                <div className="mb-6 flex justify-center items-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto">
                                    {service.icon}
                                </div>
                                <div className="text-center flex-1">
                                    <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-poppins">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#475569] leading-relaxed mb-6 text-sm">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="text-center mt-auto">
                                    <Link
                                        href={service.link}
                                        className="inline-flex items-center gap-2 text-primary font-bold hover:text-[#1B5E20] transition-colors"
                                    >
                                        Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
