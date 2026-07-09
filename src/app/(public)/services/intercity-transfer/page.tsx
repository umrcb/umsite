import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
    ChevronRight, Star, ArrowRight, MessageCircle, MapPin, 
    Calendar, Clock, Users, CheckCircle2, ShieldCheck,
    Briefcase, Car, Luggage, Wallet, Navigation, Wind, Check, 
    Map, ChevronDown, Award, Coffee, UserCheck
} from 'lucide-react';
import FleetShowcase from '@/components/home/FleetShowcase';
import { constructMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return constructMetadata({
        title: "Premium Intercity Transfer Saudi Arabia | Luxury Chauffeur Between Cities | Umrah Taxi Services",
        description: "Book premium intercity transfers across Saudi Arabia with luxury vehicles, licensed chauffeurs, fixed pricing, and 24/7 support. Travel comfortably between Makkah, Madinah, Jeddah, Taif, KAEC, and more.",
        keywords: [
            "Intercity Transfer Saudi Arabia",
            "Makkah to Madinah Taxi",
            "Jeddah to Makkah Transfer",
            "Luxury Chauffeur Saudi Arabia",
            "Private Intercity Taxi",
            "Saudi Highway Transfer",
            "Long Distance Taxi Saudi Arabia",
            "Umrah Transportation",
            "Premium City Transfer",
            "Executive Car Service Saudi Arabia"
        ],
        canonicalUrl: '/services/intercity-transfer',
    });
}

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Luxury Intercity Transfers Saudi Arabia",
            "provider": {
                "@type": "Organization",
                "name": "Umrah Taxi Services",
                "url": "https://umrahtaxiservice.com"
            },
            "description": "Premium intercity transportation between Makkah, Madinah, Jeddah, Taif, and other major Saudi Arabian cities with luxury vehicles and professional chauffeurs.",
            "areaServed": {
                "@type": "Country",
                "name": "Saudi Arabia"
            }
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@id": "https://umrahtaxiservice.com",
                        "name": "Home"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@id": "https://umrahtaxiservice.com/services",
                        "name": "Services"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@id": "https://umrahtaxiservice.com/services/intercity-transfer",
                        "name": "Intercity Transfers"
                    }
                }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How long is the journey between Makkah and Madinah?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The journey between Makkah and Madinah takes approximately 4.5 hours on the smooth Hijrah Highway. We adjust the speed for your comfort and safety, and can make stops upon request."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you stop at the Miqat for Ihram?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, if you are traveling from Madinah to Makkah, we stop at Miqat Dhul Hulayfah (Abyar Ali) for 15-20 minutes so you can assume Ihram."
                    }
                }
            ]
        }
    ]
};

export default function IntercityTransferPage() {
    return (
        <main className="bg-white min-h-screen font-inter text-slate-600">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. PREMIUM HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?auto=format&fit=crop&q=80&w=2000"
                        alt="Luxury SUV on Saudi Highway"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-white/90"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-white/50 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center gap-10">
                    <div className="max-w-4xl w-full flex flex-col items-center">
                        {/* Breadcrumb */}
                        <div className="mb-6 text-sm font-medium text-slate-500 flex items-center justify-center gap-2">
                            <Link href="/" className="hover:text-[#2E8B57] transition-colors">Home</Link>
                            <ChevronRight size={14} />
                            <Link href="/services" className="hover:text-[#2E8B57] transition-colors">Services</Link>
                            <ChevronRight size={14} />
                            <span className="text-[#2E8B57]">Intercity Transfers</span>
                        </div>

                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-sm mb-8">
                            <Star className="text-[#C9A227] fill-[#C9A227]" size={16} />
                            <span className="text-sm font-semibold text-slate-800">Saudi Arabia's Premier Long-Distance Chauffeur Service</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-[#0F172A] leading-tight mb-6 font-poppins tracking-tight">
                            Premium <span className="text-[#2E8B57]">Intercity Transfers</span><br />
                            Across Saudi Arabia
                        </h1>

                        <p className="text-lg md:text-xl text-[#475569] leading-relaxed mb-10 max-w-3xl">
                            Travel comfortably between Saudi Arabia's major cities with professional chauffeurs, luxury vehicles, fixed pricing, and 24/7 customer support.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                            <Link href="/booking" className="w-full sm:w-auto px-8 py-4 bg-[#2E8B57] hover:bg-[#1B5E20] text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                                Book Now <ArrowRight size={20} />
                            </Link>
                            <div className="flex gap-4 w-full sm:w-auto">
                                <Link href="#routes" className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-[#E2E8F0] hover:border-[#2E8B57] text-slate-700 hover:text-[#2E8B57] rounded-xl font-semibold text-lg transition-all flex items-center justify-center">
                                    View Routes
                                </Link>
                                <a href="https://wa.me/966502891323" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-[#E2E8F0] hover:border-[#2E8B57] text-[#2E8B57] rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
                                    <MessageCircle size={20} /> WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* FLOATING BOOKING WIDGET */}
                    <div className="w-full max-w-5xl mt-12">
                        <div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-[20px] shadow-2xl border border-white/50">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                <div className="space-y-2 text-left">
                                    <label className="text-sm font-semibold text-slate-700 block">Pickup City</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                        <input type="text" placeholder="e.g. Makkah" className="w-full pl-10 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2E8B57] outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-sm font-semibold text-slate-700 block">Destination City</label>
                                    <div className="relative">
                                        <Navigation className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                        <input type="text" placeholder="e.g. Madinah" className="w-full pl-10 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2E8B57] outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-sm font-semibold text-slate-700 block">Travel Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                        <input type="text" placeholder="Select Date" className="w-full pl-10 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2E8B57] outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-sm font-semibold text-slate-700 block">Passengers</label>
                                    <div className="relative">
                                        <Users className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                        <select className="w-full pl-10 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2E8B57] outline-none transition-all appearance-none cursor-pointer text-slate-700">
                                            <option>1-4 Passengers (Sedan)</option>
                                            <option>5-7 Passengers (SUV)</option>
                                            <option>8+ Passengers (Van)</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" size={18} />
                                    </div>
                                </div>
                                <div className="flex items-end">
                                    <Link href="/booking" className="w-full py-3 bg-[#2E8B57] hover:bg-[#1B5E20] text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                                        Get Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. TRUST BAR */}
            <section className="bg-white border-y border-[#E2E8F0] py-6 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {[
                            "Fixed Pricing", "Licensed Drivers", "Luxury Fleet", "GPS Tracking", 
                            "24/7 Support", "Family Friendly", "VIP Service", "Instant Confirmation"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-[#2E8B57]" />
                                <span className="font-medium text-slate-700 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. POPULAR ROUTES */}
            <section id="routes" className="py-24 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#C9A227] font-bold tracking-wider uppercase text-sm mb-3 block">Seamless Journeys</span>
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                            Popular Intercity Routes
                        </h2>
                        <p className="text-lg text-[#475569] leading-relaxed">
                            Discover our most requested long-distance routes, featuring fixed transparent pricing and premium comfort from door to door.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { from: "Makkah", to: "Madinah", time: "4h 30m", dist: "450 km", price: "SAR 450", img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800", rec: "Premium SUV" },
                            { from: "Jeddah", to: "Makkah", time: "1h 15m", dist: "85 km", price: "SAR 250", img: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&q=80&w=800", rec: "Sedan" },
                            { from: "Jeddah", to: "Madinah", time: "4h 00m", dist: "400 km", price: "SAR 450", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800", rec: "Premium SUV" },
                            { from: "Taif", to: "Makkah", time: "1h 30m", dist: "90 km", price: "SAR 300", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800", rec: "Sedan" },
                            { from: "Madinah", to: "Taif", time: "5h 00m", dist: "480 km", price: "SAR 800", img: "https://images.unsplash.com/photo-1522798514397-e04f05167fb6?auto=format&fit=crop&q=80&w=800", rec: "Hiace Van" },
                            { from: "Jeddah", to: "KAEC", time: "1h 45m", dist: "130 km", price: "SAR 400", img: "https://images.unsplash.com/photo-1542314831-c6a4d14b8fc4?auto=format&fit=crop&q=80&w=800", rec: "VIP SUV" }
                        ].map((route, idx) => (
                            <div key={idx} className="bg-white rounded-[20px] overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image src={route.img} alt={`${route.from} to ${route.to}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0F172A]">
                                        Best for: {route.rec}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold font-poppins text-[#0F172A]">{route.from} <span className="text-[#2E8B57]">→</span> {route.to}</h3>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-[#475569] mb-6">
                                        <div className="flex items-center gap-1.5"><Clock size={16} className="text-[#C9A227]" /> {route.time}</div>
                                        <div className="flex items-center gap-1.5"><Map size={16} className="text-[#C9A227]" /> {route.dist}</div>
                                    </div>
                                    <div className="mt-auto pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider">Starting from</div>
                                            <div className="font-bold text-[#0F172A] text-lg">{route.price}</div>
                                        </div>
                                        <Link href="/booking" className="px-5 py-2 bg-[#2E8B57] text-white text-sm font-semibold rounded-lg hover:bg-[#1B5E20] transition-colors">
                                            Book Route
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. WHY TRAVEL WITH US */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#C9A227] font-bold tracking-wider uppercase text-sm mb-3 block">Unmatched Comfort</span>
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                            The Luxury Long-Distance Choice
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <UserCheck size={32} />, title: "Professional Chauffeurs", desc: "Highly trained drivers familiar with all major highways." },
                            { icon: <Car size={32} />, title: "Luxury Vehicles", desc: "Immaculate, late-model vehicles ensuring a smooth ride." },
                            { icon: <ShieldCheck size={32} />, title: "Safe Highway Travel", desc: "Speed monitoring and GPS tracking for ultimate safety." },
                            { icon: <Wallet size={32} />, title: "Fixed Prices", desc: "Transparent pricing per vehicle, not per person." },
                            { icon: <Coffee size={32} />, title: "Prayer Stops", desc: "Flexible stops at Miqats and highway mosques." },
                            { icon: <Users size={32} />, title: "Family Friendly", desc: "Spacious seating and child seats available upon request." },
                            { icon: <Luggage size={32} />, title: "Luggage Assistance", desc: "Complete handling of all your baggage door-to-door." },
                            { icon: <Navigation size={32} />, title: "24/7 Operations", desc: "Our dispatch team monitors every journey in real-time." }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-[#F8FAFC] p-8 rounded-[20px] shadow-sm border border-[#E2E8F0] hover:border-[#2E8B57] hover:shadow-lg hover:-translate-y-1 transition-all group">
                                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#2E8B57] mb-6 group-hover:bg-[#2E8B57] group-hover:text-white transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold font-poppins text-[#0F172A] mb-3">{feature.title}</h3>
                                <p className="text-[#475569] leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. JOURNEY EXPERIENCE */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                            The Journey Experience
                        </h2>
                        <p className="text-lg text-[#475569] leading-relaxed">
                            Long distances across the Kingdom shouldn't feel tiring. We transform intercity travel into a restful, premium experience.
                        </p>
                    </div>

                    <div className="space-y-24">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 w-full order-2 lg:order-1">
                                <h3 className="text-3xl font-bold font-poppins text-[#0F172A] mb-4">Comfort & Privacy</h3>
                                <p className="text-lg text-[#475569] mb-8 leading-relaxed">
                                    Our vehicles are equipped with dual-zone climate control, privacy tinting, and plush seating. Enjoy the silence of a well-maintained cabin, perfect for resting or preparing for your Umrah.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-[#2E8B57]/10 flex items-center justify-center shrink-0">
                                            <Check size={14} className="text-[#2E8B57]" />
                                        </div>
                                        <span className="text-slate-700">Spacious legroom even in standard sedans</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-[#2E8B57]/10 flex items-center justify-center shrink-0">
                                            <Check size={14} className="text-[#2E8B57]" />
                                        </div>
                                        <span className="text-slate-700">VIP configuration available in premium SUVs</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:w-1/2 w-full order-1 lg:order-2">
                                <div className="relative h-[400px] w-full rounded-[20px] overflow-hidden shadow-2xl">
                                    <Image src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000" alt="Comfortable Luxury Interior" fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 w-full">
                                <div className="relative h-[400px] w-full rounded-[20px] overflow-hidden shadow-2xl">
                                    <Image src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000" alt="Rest Stops and Highway" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <h3 className="text-3xl font-bold font-poppins text-[#0F172A] mb-4">Rest & Prayer Stops</h3>
                                <p className="text-lg text-[#475569] mb-8 leading-relaxed">
                                    You control the pace. Our chauffeurs will gladly stop at modern highway service stations for refreshments, or specific mosques along the Hijrah route for prayer and Ihram preparation.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-[#2E8B57]/10 flex items-center justify-center shrink-0">
                                            <Check size={14} className="text-[#2E8B57]" />
                                        </div>
                                        <span className="text-slate-700">Complimentary waiting time at Miqat (Dhul Hulayfah)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-[#2E8B57]/10 flex items-center justify-center shrink-0">
                                            <Check size={14} className="text-[#2E8B57]" />
                                        </div>
                                        <span className="text-slate-700">Recommendations for the best service stations en route</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. PREMIUM FLEET */}
            <section className="py-24 bg-[#0F172A] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#C9A227] font-bold tracking-wider uppercase text-sm mb-3 block">Our Vehicles</span>
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins mb-6 leading-tight">
                            The Long-Distance Fleet
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            Select the ideal vehicle class for your highway journey, ensuring ample space for all passengers and luggage.
                        </p>
                    </div>
                    {/* Reusing Global Component */}
                    <div className="bg-[#1E293B] rounded-[20px] p-8 border border-slate-800">
                        <FleetShowcase />
                    </div>
                </div>
            </section>

            {/* 7. SERVICE INCLUSIONS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 w-full">
                            <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                                Included in Every Intercity Journey
                            </h2>
                            <p className="text-lg text-[#475569] mb-10 leading-relaxed">
                                We've thought of everything so you don't have to. Enjoy these complimentary amenities on all long-distance transfers.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                {[
                                    "Professional Chauffeur", "Fuel Included", "Highway Tolls", "Air Conditioning",
                                    "Complimentary Water", "Phone Charging Ports", "Prayer Stops", "Rest Stops",
                                    "Child Seats (On Request)", "Full Insurance", "GPS Tracking", "24/7 Dispatch"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 size={20} className="text-[#2E8B57]" />
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="relative h-[500px] w-full rounded-[20px] overflow-hidden shadow-2xl">
                                <Image src="https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?auto=format&fit=crop&q=80&w=1000" alt="Premium Inclusions" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. HOW BOOKING WORKS */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-[#C9A227] font-bold tracking-wider uppercase text-sm mb-3 block">Simple Steps</span>
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                            How Intercity Booking Works
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-[#E2E8F0] hidden md:block"></div>
                        <div className="space-y-12">
                            {[
                                { step: "1", title: "Select Route & Vehicle", desc: "Choose your cities, travel date, and the luxury vehicle that fits your group." },
                                { step: "2", title: "Instant Confirmation", desc: "Receive your booking details immediately via email and WhatsApp." },
                                { step: "3", title: "Driver Assignment", desc: "We assign a highway-certified professional chauffeur to your journey." },
                                { step: "4", title: "Door-to-Door Pickup", desc: "Your chauffeur arrives directly at your hotel, home, or airport." },
                                { step: "5", title: "The Highway Journey", desc: "Relax and enjoy the smooth ride with optional prayer and rest stops." },
                                { step: "6", title: "Safe Arrival", desc: "Arrive at your final destination relaxed and refreshed." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 relative">
                                    <div className="w-20 h-20 bg-white rounded-full border-4 border-[#F8FAFC] shadow-lg flex items-center justify-center shrink-0 relative z-10 hidden md:flex">
                                        <span className="text-2xl font-bold text-[#2E8B57]">{item.step}</span>
                                    </div>
                                    <div className="bg-white p-8 rounded-[20px] shadow-sm border border-[#E2E8F0] flex-1 hover:border-[#2E8B57] transition-colors">
                                        <div className="flex items-center gap-4 mb-2 md:hidden">
                                            <div className="w-10 h-10 bg-[#2E8B57] rounded-full flex items-center justify-center shrink-0">
                                                <span className="text-white font-bold">{item.step}</span>
                                            </div>
                                            <h3 className="text-xl font-bold font-poppins text-[#0F172A]">{item.title}</h3>
                                        </div>
                                        <h3 className="text-xl font-bold font-poppins text-[#0F172A] mb-2 hidden md:block">{item.title}</h3>
                                        <p className="text-[#475569] text-lg">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. PRICING SECTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#C9A227] font-bold tracking-wider uppercase text-sm mb-3 block">Clear Pricing</span>
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                            Makkah ↔ Madinah Estimates
                        </h2>
                        <p className="text-lg text-[#475569]">Fixed per-vehicle rates. No hidden fees or surge pricing.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Sedan */}
                        <div className="bg-[#F8FAFC] rounded-[20px] p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all relative">
                            <h3 className="text-2xl font-bold font-poppins text-[#0F172A] mb-2">Sedan</h3>
                            <p className="text-slate-500 mb-6">Toyota Camry or similar</p>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-[#2E8B57]">SAR 450</span>
                                <span className="text-slate-500"> / trip</span>
                            </div>
                            <div className="flex gap-4 text-sm text-slate-600 mb-8 border-b border-[#E2E8F0] pb-6">
                                <div className="flex items-center gap-1"><Users size={16}/> Up to 4</div>
                                <div className="flex items-center gap-1"><Luggage size={16}/> 3 Bags</div>
                            </div>
                            <Link href="/booking" className="block w-full py-3 text-center border-2 border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white rounded-xl font-semibold transition-all">
                                Book Sedan
                            </Link>
                        </div>

                        {/* SUV (Highlighted) */}
                        <div className="bg-[#0F172A] rounded-[20px] p-8 border border-slate-800 shadow-2xl relative transform md:-translate-y-4">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C9A227] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                                MOST POPULAR
                            </div>
                            <h3 className="text-2xl font-bold font-poppins text-white mb-2">Premium SUV</h3>
                            <p className="text-slate-400 mb-6">GMC Yukon or similar</p>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-[#C9A227]">SAR 850</span>
                                <span className="text-slate-400"> / trip</span>
                            </div>
                            <div className="flex gap-4 text-sm text-slate-300 mb-8 border-b border-slate-700 pb-6">
                                <div className="flex items-center gap-1"><Users size={16}/> Up to 7</div>
                                <div className="flex items-center gap-1"><Luggage size={16}/> 5 Bags</div>
                            </div>
                            <Link href="/booking" className="block w-full py-3 text-center bg-[#2E8B57] hover:bg-[#1B5E20] text-white rounded-xl font-semibold transition-all">
                                Book Premium SUV
                            </Link>
                        </div>

                        {/* Van */}
                        <div className="bg-[#F8FAFC] rounded-[20px] p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all relative">
                            <h3 className="text-2xl font-bold font-poppins text-[#0F172A] mb-2">Family Van</h3>
                            <p className="text-slate-500 mb-6">Toyota Hiace or similar</p>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-[#2E8B57]">SAR 1100</span>
                                <span className="text-slate-500"> / trip</span>
                            </div>
                            <div className="flex gap-4 text-sm text-slate-600 mb-8 border-b border-[#E2E8F0] pb-6">
                                <div className="flex items-center gap-1"><Users size={16}/> Up to 12</div>
                                <div className="flex items-center gap-1"><Luggage size={16}/> 10 Bags</div>
                            </div>
                            <Link href="/booking" className="block w-full py-3 text-center border-2 border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white rounded-xl font-semibold transition-all">
                                Book Van
                            </Link>
                        </div>
                    </div>
                    <div className="text-center mt-8 text-sm text-slate-500">
                        * Prices are estimates for Makkah ↔ Madinah. Final pricing depends on exact pickup/drop-off locations.
                    </div>
                </div>
            </section>

            {/* 10. CUSTOMER STORIES */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                            Trusted by Global Travelers
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Ahmed R.", country: "UK", text: "The 4-hour drive from Makkah to Madinah felt like a breeze. The GMC Yukon was incredibly spacious and our driver was very respectful.", route: "Makkah → Madinah" },
                            { name: "Sarah K.", country: "USA", text: "Excellent service. We landed in Jeddah and took the VIP SUV straight to our Madinah hotel. Very professional and safe highway driving.", route: "Jeddah → Madinah" },
                            { name: "Mohammad A.", country: "UAE", text: "Booked a Hiace for our large family from Taif to Makkah. Plenty of room for luggage, AC worked perfectly, and fixed pricing gave us peace of mind.", route: "Taif → Makkah" }
                        ].map((review, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[20px] shadow-sm border border-[#E2E8F0]">
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} className="text-[#C9A227] fill-[#C9A227]" />)}
                                </div>
                                <p className="text-slate-600 mb-6 text-lg italic">"{review.text}"</p>
                                <div className="border-t border-[#E2E8F0] pt-4">
                                    <div className="font-bold text-[#0F172A]">{review.name}</div>
                                    <div className="text-sm text-slate-500">{review.country} • {review.route}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "How long is the journey between Makkah and Madinah?", a: "The journey takes approximately 4.5 hours on the smooth Hijrah Highway. We adjust the speed for your comfort and safety, and can make stops upon request." },
                            { q: "Do you stop at the Miqat for Ihram?", a: "Yes, if you are traveling from Madinah to Makkah, we stop at Miqat Dhul Hulayfah (Abyar Ali) for 15-20 minutes so you can assume Ihram at no extra cost." },
                            { q: "Are the prices per person or per vehicle?", a: "All our prices are per vehicle. The price remains the same regardless of how many passengers (up to the vehicle's capacity)." },
                            { q: "Can we request a bathroom break during the trip?", a: "Absolutely. Our chauffeurs will stop at clean, well-maintained service stations along the highway whenever you request a break." },
                            { q: "Is it safe to travel at night?", a: "Yes, the main highways connecting Jeddah, Makkah, and Madinah are well-lit, highly secure, and heavily trafficked. Our drivers are fully trained for night driving." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] overflow-hidden">
                                <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none p-6 text-[#0F172A] group-open:text-[#2E8B57] transition-colors">
                                    {faq.q}
                                    <span className="transition group-open:rotate-180">
                                        <ChevronDown size={20} />
                                    </span>
                                </summary>
                                <div className="p-6 pt-0 text-[#475569] leading-relaxed border-t border-[#E2E8F0]">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 12. RELATED SERVICES */}
            <section className="py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold font-poppins text-[#0F172A] mb-12 text-center">Explore Other Premium Services</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Airport Transfers", link: "/services/jeddah-airport-transfer", desc: "Seamless connections from JED and MED airports to your hotel." },
                            { title: "Hotel Transfers", link: "/services/hotel-transfers", desc: "Luxury door-to-door transportation between 5-star accommodations." },
                            { title: "Ziyarat Tours", link: "/services/ziyarat-tours", desc: "Guided luxury tours of historical Islamic sites in Makkah and Madinah." }
                        ].map((srv, idx) => (
                            <Link key={idx} href={srv.link} className="bg-white p-6 rounded-[20px] border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2E8B57] transition-all flex flex-col">
                                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{srv.title}</h3>
                                <p className="text-slate-500 mb-4 flex-grow">{srv.desc}</p>
                                <div className="text-[#2E8B57] font-semibold flex items-center gap-1 text-sm">
                                    Learn More <ArrowRight size={16} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 13. FINAL CTA */}
            <section className="py-24 bg-[#2E8B57] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-[48px] font-bold font-poppins mb-6 leading-tight max-w-3xl mx-auto">
                        Travel Across Saudi Arabia in Comfort and Confidence
                    </h2>
                    <p className="text-lg text-emerald-50 mb-10 max-w-2xl mx-auto">
                        Experience premium intercity transportation with luxury vehicles, professional chauffeurs, transparent pricing, and exceptional customer care.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/booking" className="px-8 py-4 bg-white text-[#2E8B57] rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg">
                            Book Transfer Now
                        </Link>
                        <a href="https://wa.me/966502891323" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                            <MessageCircle size={20} /> Contact WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
