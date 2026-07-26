'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Plane, Building2, MapPin, Route, Moon, Camera, Diamond, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        id: 'airport-transfer',
        icon: <Plane size={24} />,
        title: 'Airport Transfer',
        description: 'Hassle-free airport pickup with meet & greet. Start your journey with our reliable service.',
        image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8YWlycG9ydCUyMHRheGl8ZW58MHx8fHwxNzg1MDk2MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        features: ['Meet & Greet', 'Flight Tracking', 'Luggage Assistance', 'Fixed Price'],
        link: '/services/jeddah-airport-transfer'
    },
    {
        id: 'makkah-hotel',
        icon: <Building2 size={24} />,
        title: 'Makkah Hotel Transfers',
        description: 'Luxury pickups and drops between your hotel, apartment, and the Haram in Makkah.',
        image: 'https://images.unsplash.com/photo-1627728734379-a5f8c099763e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWFra2FofGVufDB8fHx8MTc4NDkwNDc2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        features: ['Luxury Vehicle', 'Private Transfer', '24/7 Availability', 'Haram Drops'],
        link: '/booking?service=makkah-hotel'
    },
    {
        id: 'madinah-transfer',
        icon: <MapPin size={24} />,
        title: 'Madinah Transfers',
        description: 'Seamless transportation across Madinah, including airport, hotels, and the Prophet\'s Mosque.',
        image: 'https://images.unsplash.com/photo-1572358899655-f63ece97bfa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWFkaW5haHxlbnwwfHx8fDE3ODUwMTE2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        features: ['Airport Pickup', 'Hotel Transfers', 'Station Drops', 'Private Rides'],
        link: '/booking?service=madinah-transfer'
    },
    {
        id: 'intercity',
        icon: <Route size={24} />,
        title: 'Intercity Transfers',
        description: 'Comfortable long-distance travel between Makkah, Madinah, Jeddah, Taif, and Yanbu.',
        image: 'https://images.unsplash.com/photo-1486673748761-a8d18475c757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8aGlnaHdheSUyMGRyaXZpbmd8ZW58MHx8fHwxNzg1MDk2MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        features: ['Flexible Schedule', 'Door-to-Door', 'Comfortable Ride', 'Rest Stops'],
        link: '/services/makkah-madinah-taxi'
    },
    {
        id: 'umrah',
        icon: <Moon size={24} />,
        title: 'Umrah Transportation',
        description: 'Dedicated Umrah vehicles for private family transportation with professional drivers.',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZmFtaWx5JTIwY2FyfGVufDB8fHx8MTc4NDk0ODgwMXww&ixlib=rb-4.1.0&q=80&w=1080',
        features: ['Family Transport', 'Professional Drivers', 'Spacious Vehicles', 'Safe Journey'],
        link: '/booking?service=umrah'
    },
    {
        id: 'ziyarat',
        icon: <Camera size={24} />,
        title: 'Ziyarat Tours',
        description: 'Guided tours to historical places and Islamic landmarks in Makkah and Madinah.',
        image: 'https://images.unsplash.com/photo-1574246604907-db69e30ddb97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8aXNsYW1pYyUyMGhpc3RvcmljYWx8ZW58MHx8fHwxNzg1MDk2MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        features: ['Custom Itinerary', 'Half/Full Day', 'Historical Sites', 'Knowledgeable Drivers'],
        link: '/services/ziyarat-tours'
    },
    {
        id: 'vip',
        icon: <Diamond size={24} />,
        title: 'VIP Luxury Transport',
        description: 'Executive SUVs and premium vans for business travelers and VIP pilgrims seeking the best.',
        image: 'https://images.unsplash.com/photo-1700884520248-92092bd21e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bHV4dXJ5JTIwc3V2fGVufDB8fHx8MTc4NTA3MzQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        features: ['Executive SUVs', 'Luxury Experience', 'Premium Amenities', 'Maximum Privacy'],
        link: '/booking?service=vip'
    },
    {
        id: 'group',
        icon: <Users size={24} />,
        title: 'Group Transportation',
        description: 'Reliable transport for families, travel groups, and Hajj groups using Hiace and Coaster buses.',
        image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dG91ciUyMGJ1c3xlbnwwfHx8fDE3ODUwOTMzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        features: ['Hiace & Coaster', 'Large Groups', 'Ample Luggage', 'Coordinated Travel'],
        link: '/booking?service=group'
    }
];

export default function ServicesGrid() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
                        What We Offer
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-navy mb-6">
                        Our Premium Services
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-[1px] w-12 bg-primary/50" />
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div className="h-[1px] w-12 bg-primary/50" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <motion.div 
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
                        >
                            {/* Image Header */}
                            <div className="relative h-64 overflow-hidden bg-slate-100">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                                
                                {/* Floating Icon */}
                                <div className="absolute -bottom-6 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:-translate-y-2 transition-transform duration-300">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <ul className="grid grid-cols-2 gap-y-3 mb-8">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                            <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Action */}
                                <div className="mt-auto pt-6 border-t border-slate-100">
                                    <Link 
                                        href={service.link}
                                        className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary transition-colors group/link"
                                    >
                                        Learn More
                                        <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
