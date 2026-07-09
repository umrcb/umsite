import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
    Building2, MapPin, Clock, Calendar, Users, Car, CheckCircle2, 
    ArrowRight, Star, ShieldCheck, Map, ChevronRight, Phone, MessageCircle,
    Plane, Luggage, Wallet, Briefcase, ChevronDown, Check, ThumbsUp, Hotel
} from 'lucide-react';
import FleetShowcaseLoader from '@/components/fleet/FleetShowcaseLoader';

export const metadata: Metadata = {
    title: "Luxury Hotel Transfer Services | Hotel Pickup & Drop-Off Saudi Arabia",
    description: "Book premium hotel transfers in Makkah, Madinah, Jeddah, and Taif with luxury vehicles, professional chauffeurs, fixed pricing, and 24/7 support. Safe, reliable transportation for Umrah, Hajj, business, and leisure travelers.",
    keywords: [
        "Hotel Transfer Saudi Arabia",
        "Hotel Pickup Service",
        "Hotel Drop-Off Service",
        "Makkah Hotel Transfer",
        "Madinah Hotel Taxi",
        "Luxury Hotel Transportation",
        "Hotel to Airport Transfer",
        "Airport to Hotel Taxi",
        "Umrah Hotel Transfer",
        "Premium Chauffeur Service"
    ],
    alternates: {
        canonical: "https://umrahtaxiservice.com/services/hotel-transfers",
    },
    openGraph: {
        title: "Luxury Hotel Transfer Services | Umrah Taxi Services",
        description: "Seamless transportation between hotels, airports, holy sites, and major cities with licensed chauffeurs and luxury vehicles.",
        url: "https://umrahtaxiservice.com/services/hotel-transfers",
        type: "website",
        images: [
            {
                url: "/images/services/hotel-transfer-real.jpg",
                width: 1200,
                height: 630,
                alt: "Luxury Hotel Transfer Services in Saudi Arabia",
            }
        ]
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Luxury Hotel Transfer Services",
            "provider": {
                "@type": "LocalBusiness",
                "name": "Umrah Taxi Service",
                "image": "https://umrahtaxiservice.com/logo.png",
                "telephone": "+966502891323",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Makkah",
                    "addressCountry": "SA"
                }
            },
            "description": "Premium hotel transfers in Makkah, Madinah, Jeddah, and Taif with luxury vehicles and professional chauffeurs.",
            "areaServed": [
                { "@type": "City", "name": "Makkah" },
                { "@type": "City", "name": "Madinah" },
                { "@type": "City", "name": "Jeddah" },
                { "@type": "City", "name": "Taif" }
            ],
            "offers": {
                "@type": "Offer",
                "priceCurrency": "SAR",
                "price": "150",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can my driver meet me in the hotel lobby?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, our drivers offer a premium Meet & Greet service directly in the hotel lobby with a personalized name sign."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Will you help with luggage?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Our professional chauffeurs provide full luggage assistance from the lobby to the vehicle and upon arrival at your destination."
                    }
                }
            ]
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
                        "@id": "https://umrahtaxiservice.com/services/hotel-transfers",
                        "name": "Hotel Transfers"
                    }
                }
            ]
        }
    ]
};

export default function HotelTransfersPage() {
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
                        src="https://images.unsplash.com/photo-1542314831-c6a4d14b8fc4?auto=format&fit=crop&q=80&w=2000"
                        alt="Luxury Hotel Arrival in Saudi Arabia"
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
                            <span className="text-[#2E8B57]">Hotel Transfers</span>
                        </div>

                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-sm mb-8">
                            <Star className="text-[#C9A227] fill-[#C9A227]" size={16} />
                            <span className="text-sm font-semibold text-slate-800">Trusted Hotel Transfer Service Across Saudi Arabia</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-[#0F172A] leading-tight mb-6 font-poppins tracking-tight">
                            <span className="text-[#2E8B57]">Hotel Transfer Services</span><br />
                            for Every Journey
                        </h1>

                        <p className="text-lg md:text-xl text-[#475569] leading-relaxed mb-10 max-w-3xl">
                            Enjoy seamless transportation between hotels, airports, holy sites, and major cities with licensed chauffeurs, luxury vehicles, fixed pricing, and 24/7 customer support. Whether arriving for Umrah, Hajj, business, or leisure, your journey begins and ends with comfort.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                            <Link href="/booking" className="w-full sm:w-auto px-8 py-4 bg-[#2E8B57] hover:bg-[#1B5E20] text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                                Book Hotel Transfer <ArrowRight size={20} />
                            </Link>
                            <div className="flex gap-4 w-full sm:w-auto">
                                <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-[#E2E8F0] hover:border-[#2E8B57] text-slate-700 hover:text-[#2E8B57] rounded-xl font-semibold text-lg transition-all flex items-center justify-center">
                                    Get Instant Quote
                                </Link>
                                <a href="https://wa.me/966502891323" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-[#E2E8F0] hover:border-[#2E8B57] text-[#2E8B57] rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
                                    <MessageCircle size={20} /> WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 2. FLOATING QUICK BOOKING CARD */}
                    <div className="w-full max-w-5xl mt-12">
                        <div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-[20px] shadow-2xl border border-white/50">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                <div className="space-y-2 text-left">
                                    <label className="text-sm font-semibold text-slate-700 block">Pickup Hotel</label>
                                    <div className="relative">
                                        <Hotel className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                        <input type="text" placeholder="e.g. Swissôtel Makkah" className="w-full pl-10 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2E8B57] outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-sm font-semibold text-slate-700 block">Destination</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                        <input type="text" placeholder="e.g. Jeddah Airport" className="w-full pl-10 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2E8B57] outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-sm font-semibold text-slate-700 block">Travel Date & Time</label>
                                    <div className="flex gap-2">
                                        <div className="relative w-1/2">
                                            <Calendar className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                            <input type="text" placeholder="Date" className="w-full pl-10 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2E8B57] outline-none transition-all text-sm" />
                                        </div>
                                        <div className="relative w-1/2">
                                            <Clock className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                            <input type="text" placeholder="Time" className="w-full pl-10 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2E8B57] outline-none transition-all text-sm" />
                                        </div>
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
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TRUST BAR */}
            <section className="bg-white border-y border-[#E2E8F0] py-6 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {[
                            "Fixed Pricing", "Hotel Pickup", "Luxury Fleet", "Professional Chauffeurs", 
                            "24/7 Service", "Instant Confirmation", "Flight Monitoring", "Meet & Greet"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-[#2E8B57]" />
                                <span className="font-medium text-slate-700 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. OUR HOTEL TRANSFER SERVICES */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#C9A227] font-bold tracking-wider uppercase text-sm mb-3 block">Bespoke Journeys</span>
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                            Premium Transfer Services
                        </h2>
                        <p className="text-lg text-[#475569] leading-relaxed">
                            Tailored transportation solutions designed for maximum comfort, privacy, and peace of mind during your stay in Saudi Arabia.
                        </p>
                    </div>

                    <div className="space-y-24">
                        {/* Service Block 1 */}
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 w-full order-2 lg:order-1">
                                <h3 className="text-3xl font-bold font-poppins text-[#0F172A] mb-4">Airport to Hotel & Hotel to Airport</h3>
                                <p className="text-lg text-[#475569] mb-8 leading-relaxed">
                                    Begin and end your journey with absolute comfort. Our chauffeurs monitor your flight, provide meet & greet services in the arrivals hall, assist with luggage, and drive you directly to your hotel lobby.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-[#2E8B57]/10 flex items-center justify-center shrink-0">
                                            <Check size={14} className="text-[#2E8B57]" />
                                        </div>
                                        <span className="text-slate-700">Flight tracking for delayed arrivals at zero extra cost</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-[#2E8B57]/10 flex items-center justify-center shrink-0">
                                            <Check size={14} className="text-[#2E8B57]" />
                                        </div>
                                        <span className="text-slate-700">Direct drop-off at hotel entrances (Makkah & Madinah zones)</span>
                                    </li>
                                </ul>
                                <Link href="/booking" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#E2E8F0] hover:border-[#2E8B57] text-slate-800 hover:text-[#2E8B57] rounded-xl font-semibold transition-all">
                                    Book Airport Transfer <ArrowRight size={18} />
                                </Link>
                            </div>
                            <div className="lg:w-1/2 w-full order-1 lg:order-2">
                                <div className="relative h-[400px] w-full rounded-[20px] overflow-hidden shadow-2xl">
                                    <Image src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000" alt="Airport to Hotel Transfer" fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Service Block 2 */}
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 w-full">
                                <div className="relative h-[400px] w-full rounded-[20px] overflow-hidden shadow-2xl">
                                    <Image src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000" alt="Hotel to Masjid Transfer" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <h3 className="text-3xl font-bold font-poppins text-[#0F172A] mb-4">Hotel to Holy Sites & Intercity</h3>
                                <p className="text-lg text-[#475569] mb-8 leading-relaxed">
                                    Travel between Makkah and Madinah hotels in a luxury vehicle. We also offer dedicated transfers from distant hotels to Masjid Al-Haram and Masjid An-Nabawi, ensuring you never miss a prayer.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-[#2E8B57]/10 flex items-center justify-center shrink-0">
                                            <Check size={14} className="text-[#2E8B57]" />
                                        </div>
                                        <span className="text-slate-700">Spacious SUVs and Vans for large families and luggage</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-[#2E8B57]/10 flex items-center justify-center shrink-0">
                                            <Check size={14} className="text-[#2E8B57]" />
                                        </div>
                                        <span className="text-slate-700">Customized Ziyarat tour routes originating from your hotel</span>
                                    </li>
                                </ul>
                                <Link href="/booking" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#E2E8F0] hover:border-[#2E8B57] text-slate-800 hover:text-[#2E8B57] rounded-xl font-semibold transition-all">
                                    Book Intercity Transfer <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. POPULAR HOTEL ROUTES */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                            Popular Hotel Routes
                        </h2>
                        <p className="text-lg text-[#475569] leading-relaxed">
                            Frequently requested premium routes featuring transparent pricing and comfortable transit times.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Hilton Makkah → Jeddah Airport", time: "1h 15m", dist: "100 km", price: "From SAR 250", type: "Airport Transfer" },
                            { name: "Pullman ZamZam → Madinah", time: "4h 30m", dist: "450 km", price: "From SAR 450", type: "Intercity" },
                            { name: "Mövenpick Madinah → MED Airport", time: "25 min", dist: "20 km", price: "From SAR 150", type: "Airport Transfer" },
                            { name: "Swissôtel Makkah → Ziyarat Sites", time: "3 hours", dist: "Tour", price: "From SAR 300", type: "Ziyarat" },
                            { name: "Jeddah Hotel → Makkah Hotel", time: "1h 10m", dist: "85 km", price: "From SAR 200", type: "City to City" },
                            { name: "Taif Hotel → Makkah Hotel", time: "1h 20m", dist: "90 km", price: "From SAR 300", type: "City to City" },
                        ].map((route, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-[20px] border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                                <div className="text-xs font-bold text-[#C9A227] uppercase tracking-wider mb-2">{route.type}</div>
                                <h3 className="text-xl font-bold font-poppins text-[#0F172A] mb-4 group-hover:text-[#2E8B57] transition-colors">{route.name}</h3>
                                <div className="flex items-center gap-4 text-sm text-[#475569] mb-6">
                                    <div className="flex items-center gap-1.5"><Clock size={16} /> {route.time}</div>
                                    <div className="flex items-center gap-1.5"><Map size={16} /> {route.dist}</div>
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                                    <div className="font-semibold text-slate-800">{route.price}</div>
                                    <Link href="/booking" className="text-[#2E8B57] font-semibold text-sm hover:underline flex items-center gap-1">
                                        Book <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. WHY CHOOSE US */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#C9A227] font-bold tracking-wider uppercase text-sm mb-3 block">Five-Star Standard</span>
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                            The Luxury Choice
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Briefcase size={32} />, title: "Professional Drivers", desc: "Licensed, courteous, and knowledgeable local chauffeurs." },
                            { icon: <Car size={32} />, title: "Luxury Fleet", desc: "Immaculate sedans, premium SUVs, and spacious family vans." },
                            { icon: <Users size={32} />, title: "Meet & Greet", desc: "Personalized reception in the hotel lobby or airport arrivals." },
                            { icon: <Luggage size={32} />, title: "Luggage Assistance", desc: "Full support loading and unloading your belongings." },
                            { icon: <Building2 size={32} />, title: "Hotel Coordination", desc: "We coordinate with concierge desks for smooth departures." },
                            { icon: <Wallet size={32} />, title: "Transparent Pricing", desc: "Fixed rates with zero hidden fees or surge pricing." },
                            { icon: <MapPin size={32} />, title: "GPS Tracking", desc: "Real-time tracking for peace of mind and precision." },
                            { icon: <ShieldCheck size={32} />, title: "24/7 Support", desc: "Dedicated dispatch team available around the clock." }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[20px] shadow-sm border border-[#E2E8F0] hover:shadow-lg hover:-translate-y-1 transition-all group">
                                <div className="w-14 h-14 rounded-xl bg-[#2E8B57]/10 flex items-center justify-center text-[#2E8B57] mb-6 group-hover:bg-[#2E8B57] group-hover:text-white transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold font-poppins text-[#0F172A] mb-3">{feature.title}</h3>
                                <p className="text-[#475569] leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. PREMIUM FLEET */}
            <section className="py-24 bg-[#0F172A] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#C9A227] font-bold tracking-wider uppercase text-sm mb-3 block">Travel in Style</span>
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins mb-6 leading-tight">
                            Premium Hotel Fleet
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            Select the perfect vehicle for your group size and luggage requirements.
                        </p>
                    </div>
                    {/* Reusing Global Component */}
                    <div className="bg-[#1E293B] rounded-[20px] p-8 border border-slate-800">
                        <FleetShowcaseLoader />
                    </div>
                </div>
            </section>

            {/* 8. WHAT'S INCLUDED */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 w-full">
                            <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                                Always Included with Every Booking
                            </h2>
                            <p className="text-lg text-[#475569] mb-10 leading-relaxed">
                                We believe luxury means never having to ask for the essentials. Every hotel transfer includes these premium features as standard.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                {[
                                    "Professional Chauffeur", "Hotel Pickup", "Hotel Drop-Off", "Flight Tracking",
                                    "Free Waiting Time", "Complimentary Water", "Phone Charging Ports", "Luggage Assistance",
                                    "Child Seats (On Request)", "Full Insurance", "GPS Navigation", "24/7 Dispatch Support"
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
                                <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000" alt="Luxury Amenities" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. HOW HOTEL TRANSFERS WORK */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-[#C9A227] font-bold tracking-wider uppercase text-sm mb-3 block">The Process</span>
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                            Effortless from Booking to Arrival
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-[#E2E8F0] hidden md:block"></div>
                        <div className="space-y-12">
                            {[
                                { step: "1", title: "Book Online", desc: "Enter your hotel details, destination, and select your preferred luxury vehicle." },
                                { step: "2", title: "Receive Confirmation", desc: "Get an instant booking confirmation via email and WhatsApp." },
                                { step: "3", title: "Driver Assigned", desc: "We assign a professional chauffeur and share their contact details before pickup." },
                                { step: "4", title: "Driver Arrives", desc: "Your driver arrives at the hotel lobby or airport arrivals promptly." },
                                { step: "5", title: "Luggage Assistance", desc: "Sit back while we handle loading your luggage carefully." },
                                { step: "6", title: "Comfortable Journey", desc: "Enjoy a smooth, climate-controlled ride in our premium vehicles." },
                                { step: "7", title: "Safe Arrival", desc: "Arrive safely at your destination with final luggage unloading." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 relative">
                                    <div className="w-20 h-20 bg-white rounded-full border-4 border-[#F8FAFC] shadow-lg flex items-center justify-center shrink-0 relative z-10 hidden md:flex">
                                        <span className="text-2xl font-bold text-[#2E8B57]">{item.step}</span>
                                    </div>
                                    <div className="bg-white p-8 rounded-[20px] shadow-sm border border-[#E2E8F0] flex-1">
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

            {/* 10. PARTNER HOTELS (Showcase Style) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                            Serving Premium Hotels
                        </h2>
                        <p className="text-lg text-[#475569] leading-relaxed">
                            We provide dedicated transfer services to and from all major 5-star hotels in the Kingdom.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "Hilton Convention", loc: "Makkah", img: "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&q=80&w=800" },
                            { name: "Fairmont Clock Royal Tower", loc: "Makkah", img: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&q=80&w=800" },
                            { name: "Pullman ZamZam", loc: "Madinah", img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800" },
                            { name: "Anwar Al Madinah Mövenpick", loc: "Madinah", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800" },
                            { name: "InterContinental Dar Al Tawhid", loc: "Makkah", img: "https://images.unsplash.com/photo-1522798514397-e04f05167fb6?auto=format&fit=crop&q=80&w=800" },
                            { name: "Swissôtel", loc: "Makkah", img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800" }
                        ].map((hotel, idx) => (
                            <div key={idx} className="group relative h-64 rounded-[20px] overflow-hidden shadow-md">
                                <Image src={hotel.img} alt={hotel.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="text-sm font-semibold text-[#C9A227] mb-1">{hotel.loc}</div>
                                    <h3 className="text-xl font-bold text-white">{hotel.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. PRICING OVERVIEW */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#C9A227] font-bold tracking-wider uppercase text-sm mb-3 block">Transparent Rates</span>
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                            Premium Pricing, No Hidden Fees
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Sedan */}
                        <div className="bg-white rounded-[20px] p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all relative">
                            <h3 className="text-2xl font-bold font-poppins text-[#0F172A] mb-2">Standard Luxury</h3>
                            <p className="text-slate-500 mb-6">Toyota Camry or similar</p>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-[#2E8B57]">SAR 150</span>
                                <span className="text-slate-500"> / transfer</span>
                            </div>
                            <div className="flex gap-4 text-sm text-slate-600 mb-8 border-b border-[#E2E8F0] pb-6">
                                <div className="flex items-center gap-1"><Users size={16}/> Up to 4</div>
                                <div className="flex items-center gap-1"><Luggage size={16}/> 3 Bags</div>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-slate-700"><Check size={16} className="text-[#2E8B57]" /> Local Hotel Transfer</li>
                                <li className="flex items-center gap-3 text-slate-700"><Check size={16} className="text-[#2E8B57]" /> AC Included</li>
                            </ul>
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
                                <span className="text-4xl font-bold text-[#C9A227]">SAR 350</span>
                                <span className="text-slate-400"> / transfer</span>
                            </div>
                            <div className="flex gap-4 text-sm text-slate-300 mb-8 border-b border-slate-700 pb-6">
                                <div className="flex items-center gap-1"><Users size={16}/> Up to 7</div>
                                <div className="flex items-center gap-1"><Luggage size={16}/> 5 Bags</div>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-slate-200"><Check size={16} className="text-[#C9A227]" /> Hotel to Airport</li>
                                <li className="flex items-center gap-3 text-slate-200"><Check size={16} className="text-[#C9A227]" /> Extra Legroom</li>
                                <li className="flex items-center gap-3 text-slate-200"><Check size={16} className="text-[#C9A227]" /> VIP Comfort</li>
                            </ul>
                            <Link href="/booking" className="block w-full py-3 text-center bg-[#2E8B57] hover:bg-[#1B5E20] text-white rounded-xl font-semibold transition-all">
                                Book Premium SUV
                            </Link>
                        </div>

                        {/* Van */}
                        <div className="bg-white rounded-[20px] p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all relative">
                            <h3 className="text-2xl font-bold font-poppins text-[#0F172A] mb-2">Family Van</h3>
                            <p className="text-slate-500 mb-6">Hyundai Staria / Hiace</p>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-[#2E8B57]">SAR 450</span>
                                <span className="text-slate-500"> / transfer</span>
                            </div>
                            <div className="flex gap-4 text-sm text-slate-600 mb-8 border-b border-[#E2E8F0] pb-6">
                                <div className="flex items-center gap-1"><Users size={16}/> Up to 11</div>
                                <div className="flex items-center gap-1"><Luggage size={16}/> 10 Bags</div>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-slate-700"><Check size={16} className="text-[#2E8B57]" /> Group Intercity</li>
                                <li className="flex items-center gap-3 text-slate-700"><Check size={16} className="text-[#2E8B57]" /> Spacious Interior</li>
                            </ul>
                            <Link href="/booking" className="block w-full py-3 text-center border-2 border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white rounded-xl font-semibold transition-all">
                                Book Family Van
                            </Link>
                        </div>
                    </div>
                    <p className="text-center text-sm text-slate-500 mt-8">* Base prices shown. Final price depends on exact pickup and destination locations.</p>
                </div>
            </section>

            {/* 12. CUSTOMER REVIEWS */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6 leading-tight">
                            Trusted by Pilgrims
                        </h2>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar">
                        {[
                            { name: "Ahmed R.", hotel: "Hilton Makkah", rev: "Excellent service from Jeddah airport directly to the Hilton lobby. Driver helped with all 5 bags. Highly recommended." },
                            { name: "Sarah M.", hotel: "Pullman ZamZam", rev: "Booked a Yukon for our family. The car was spotless, driver was early, and the ride from Madinah to Makkah was incredibly smooth." },
                            { name: "Zaid K.", hotel: "Swissôtel Makkah", rev: "Professionalism at its peak. The driver met us in the lobby on time. No hidden charges. 5 stars." }
                        ].map((review, idx) => (
                            <div key={idx} className="min-w-[350px] max-w-[400px] bg-white p-8 rounded-[20px] shadow-sm border border-[#E2E8F0] snap-center">
                                <div className="flex gap-1 mb-4">
                                    {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-[#C9A227] fill-[#C9A227]" />)}
                                </div>
                                <p className="text-slate-700 mb-6 italic">"{review.rev}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#0F172A]">{review.name}</div>
                                        <div className="text-sm text-slate-500">Traveled to {review.hotel}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 13. FAQ */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-[48px] font-bold font-poppins text-[#0F172A] mb-6">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: "Can my driver meet me in the hotel lobby?", a: "Yes, our drivers offer a premium Meet & Greet service directly in the hotel lobby with a personalized name sign to ensure a seamless connection." },
                            { q: "Will you help with luggage?", a: "Absolutely. Our professional chauffeurs provide full luggage assistance from the lobby to the vehicle and upon arrival at your destination." },
                            { q: "Can I book hotel to airport transfers?", a: "Yes, we specialize in punctual hotel-to-airport transfers to guarantee you arrive with plenty of time for your flight." },
                            { q: "Do you work with all hotels?", a: "We service all major hotels in Makkah, Madinah, Jeddah, and Taif. For specific or remote locations, please contact our support team." },
                            { q: "Are child seats available?", a: "Yes, complimentary child seats are available upon request during the booking process." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white rounded-[20px] border border-[#E2E8F0] overflow-hidden">
                                <summary className="flex justify-between items-center font-bold font-poppins cursor-pointer list-none p-6 text-lg text-[#0F172A] hover:text-[#2E8B57] transition-colors">
                                    {faq.q}
                                    <span className="transition group-open:rotate-180">
                                        <ChevronDown size={20} className="text-slate-400" />
                                    </span>
                                </summary>
                                <div className="text-[#475569] p-6 pt-0 leading-relaxed">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 14. RELATED SERVICES */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#0F172A] mb-6">
                            Explore Other Services
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Airport Transfers", href: "/services/airport-transfers", icon: <Plane size={24}/> },
                            { title: "Makkah ↔ Madinah Taxi", href: "/services/makkah-madinah-taxi", icon: <Car size={24}/> },
                            { title: "Ziyarat Tours", href: "/services", icon: <MapPin size={24}/> }
                        ].map((svc, idx) => (
                            <Link key={idx} href={svc.href} className="flex items-center gap-4 p-6 rounded-[20px] border border-[#E2E8F0] hover:border-[#2E8B57] hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-[#F8FAFC] rounded-full flex items-center justify-center text-[#2E8B57] group-hover:bg-[#2E8B57] group-hover:text-white transition-colors">
                                    {svc.icon}
                                </div>
                                <span className="font-bold text-[#0F172A] group-hover:text-[#2E8B57] transition-colors">{svc.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 15. FINAL CTA */}
            <section className="py-24 bg-[#0F172A] relative overflow-hidden">
                {/* Abstract geometric background elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2E8B57]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C9A227]/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-[56px] font-bold font-poppins text-white mb-6 leading-tight">
                        Your Hotel Journey Starts with Premium Service
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Book a reliable hotel transfer with luxury vehicles, professional chauffeurs, and exceptional hospitality today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/booking" className="w-full sm:w-auto px-8 py-4 bg-[#2E8B57] hover:bg-[#1B5E20] text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center">
                            Book Now
                        </Link>
                        <a href="https://wa.me/966502891323" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-[#2E8B57] text-white rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 hover:bg-[#2E8B57]/10">
                            <MessageCircle size={20} /> WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
