import { getBaseUrl } from '@/lib/url-utils';
import { getSettings } from '@/lib/settings-storage';
import { constructMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { 
    ArrowRight, Plane, ShieldCheck, UserCheck, Clock, CheckCircle, 
    MapPin, Star, HeartHandshake, PhoneCall, Quote, ChevronRight,
    Wifi, BatteryCharging, Droplets, CarFront, Check
} from 'lucide-react';
import Image from 'next/image';

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jeddah Airport to Makkah Transfer",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Umrah Cabs",
        "image": `${getBaseUrl()}/logo.png`
    },
    "serviceType": "Airport Transfer",
    "areaServed": {
        "@type": "Airport",
        "name": "King Abdulaziz International Airport (JED)"
    },
    "description": "Private luxury transfer from Jeddah Airport to Makkah. Premium fleet, 24/7 Meet & Greet.",
    "offers": {
        "@type": "Offer",
        "price": "200",
        "priceCurrency": "SAR",
        "availability": "https://schema.org/InStock"
    },
    "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${getBaseUrl()}` },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": `${getBaseUrl()}/services` },
            { "@type": "ListItem", "position": 3, "name": "Jeddah Airport to Makkah", "item": `${getBaseUrl()}/services/jeddah-airport-transfer` }
        ]
    }
};

const faqs = [
    {
        question: "Where will my chauffeur meet me?",
        answer: "Your chauffeur will be waiting for you in the arrivals hall, holding a personalized sign with your name. They will assist you with your luggage and escort you directly to your luxury vehicle."
    },
    {
        question: "Do you monitor flight delays?",
        answer: "Yes, our team monitors all inbound flights in real-time. If your flight is delayed or arrives early, your chauffeur will adjust their arrival time accordingly, ensuring a seamless pickup without any extra waiting fees."
    },
    {
        question: "How long does the transfer to Makkah take?",
        answer: "The journey from King Abdulaziz International Airport to your Makkah hotel typically takes between 60 to 75 minutes in our premium vehicles, offering a smooth and relaxing ride."
    },
    {
        question: "Can I choose my vehicle type?",
        answer: "Absolutely. We offer a diverse fleet ranging from the spacious Toyota Hiace for groups to the luxurious GMC Yukon AT4 for smaller families requiring premium comfort. You can select your preferred vehicle during the booking process."
    }
];

export async function generateMetadata() {
    return constructMetadata({
        title: "Jeddah Airport Transfer | Luxury Umrah Taxi",
        description: "Experience premium, reliable, and comfortable airport transfers from Jeddah to Makkah. Book your luxury Umrah chauffeur service today.",
        keywords: ["Jeddah Airport Transfer", "Airport Taxi Makkah", "Airport Transfer Saudi Arabia", "Luxury Chauffeur Service", "Umrah Taxi", "Airport Pickup"],
        canonicalUrl: '/services/jeddah-airport-transfer',
    });
}

export default async function JeddahAirportTransferLuxuryPage() {
    const settings = await getSettings();
    const phoneNumber = settings.contact.phone;
    const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=I%20need%20a%20premium%20transfer%20from%20Jeddah%20Airport%20to%20Makkah`;

    return (
        <main className="bg-white min-h-screen font-sans selection:bg-primary/20 selection:text-primary">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* 1. PREMIUM HERO */}
            <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/images/routes/jeddah-airport-hero-professional.png" 
                        alt="Jeddah Airport Luxury Transfer"
                        fill
                        className="object-cover object-center opacity-90"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-md">
                            <Star size={14} className="fill-primary" /> Premium Chauffeur Service
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] font-poppins tracking-tight">
                            Jeddah Airport to Makkah.
                            <span className="block text-primary font-light italic mt-2">Elevated.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-inter max-w-xl">
                            Begin your Umrah journey with absolute peace of mind. Professional drivers, VIP meet & greet, and luxury vehicles ensuring a serene arrival.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            <Link href={whatsappLink} className="inline-flex items-center gap-2 bg-primary text-white hover:bg-[#1B5E20] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:-translate-y-1">
                                Book Arrival Transfer <ArrowRight size={20} />
                            </Link>
                            <Link href="#fleet" className="inline-flex items-center gap-2 bg-white text-slate-800 border border-slate-200 hover:border-slate-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-sm hover:shadow-md">
                                Explore Fleet
                            </Link>
                        </div>

                        {/* Floating Trust Indicators */}
                        <div className="mt-12 flex items-center gap-6 pt-8 border-t border-slate-200/60">
                            <div className="flex -space-x-4">
                                {[1,2,3,4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                                        <Image src={`/images/reviews/avatar-${i}.jpg`} alt="User" fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-[#C9A227] mb-1">
                                    <Star size={16} className="fill-current" /><Star size={16} className="fill-current" /><Star size={16} className="fill-current" /><Star size={16} className="fill-current" /><Star size={16} className="fill-current" />
                                </div>
                                <p className="text-sm text-slate-600 font-medium">Trusted by 25,000+ Pilgrims</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. TRUST STATISTICS */}
            <section className="py-16 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
                        <div className="text-center px-4">
                            <p className="text-4xl md:text-5xl font-bold text-primary mb-2 font-poppins">25K+</p>
                            <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Happy Pilgrims</p>
                        </div>
                        <div className="text-center px-4">
                            <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 font-poppins">100K</p>
                            <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Trips Completed</p>
                        </div>
                        <div className="text-center px-4">
                            <p className="text-4xl md:text-5xl font-bold text-[#C9A227] mb-2 font-poppins">4.9<span className="text-2xl">★</span></p>
                            <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Google Rating</p>
                        </div>
                        <div className="text-center px-4">
                            <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 font-poppins">99%</p>
                            <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">On-Time Pickup</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHY CHOOSE US */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins">A Standard Above the Rest</h2>
                        <p className="text-lg text-slate-600 font-inter">We don't just provide transportation; we deliver an experience defined by punctuality, comfort, and unwavering professionalism.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: "Licensed Drivers", desc: "Expert chauffeurs with deep knowledge of Makkah and Madinah routes." },
                            { icon: CarFront, title: "Luxury Fleet", desc: "Immaculate, late-model vehicles tailored to your group size and comfort." },
                            { icon: Clock, title: "24/7 Support", desc: "Round-the-clock customer assistance to manage your itinerary seamlessly." },
                            { icon: Plane, title: "Flight Tracking", desc: "We monitor your flight and adjust pickup times automatically for delays." },
                            { icon: UserCheck, title: "Meet & Greet", desc: "Personalized reception at the arrivals terminal with luggage assistance." },
                            { icon: HeartHandshake, title: "Professional Hospitality", desc: "Experience genuine Saudi hospitality from the moment you land." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                                    <item.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-inter">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. PREMIUM SERVICE SHOWCASE */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                        <div className="flex-1 w-full relative">
                            <div className="aspect-[4/3] rounded-[24px] overflow-hidden relative shadow-2xl">
                                <Image src="/images/routes/jeddah-airport-hero.png" alt="Meet and Greet Service" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <Plane size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">Flight Monitored</p>
                                        <p className="text-sm text-slate-500">Zero waiting fees</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins">Seamless Arrivals at King Abdulaziz Airport</h2>
                            <p className="text-lg text-slate-600 mb-8 font-inter leading-relaxed">
                                Navigating a bustling airport can be overwhelming. Our exclusive Meet & Greet service guarantees a stress-free transition from the terminal to your vehicle. Your chauffeur will handle the logistics while you relax.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {["Personalized name-board reception", "Dedicated luggage handling", "Direct escort to the VIP parking area", "Complimentary bottled water on arrival"].map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                                        <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href={whatsappLink} className="text-primary font-semibold hover:text-[#1B5E20] inline-flex items-center gap-2 transition-colors">
                                Discover Arrival Protocol <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. ROUTE EXPLORER */}
            <section className="py-24 bg-[#0F172A] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-white">The Journey to Makkah</h2>
                        <p className="text-lg text-slate-300 font-inter">A highly optimized, secure, and comfortable route directly to your hotel's doorstep.</p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-[24px] p-8 md:p-12 border border-slate-700 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row items-center justify-between relative">
                            {/* Visual Line */}
                            <div className="hidden md:block absolute left-[15%] right-[15%] top-1/2 h-0.5 bg-slate-700 -z-10"></div>
                            
                            <div className="text-center mb-8 md:mb-0 relative bg-slate-800/50 p-4 rounded-xl">
                                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-slate-800">
                                    <Plane size={24} className="text-primary" />
                                </div>
                                <h4 className="font-bold text-lg mb-1">Jeddah Airport</h4>
                                <p className="text-sm text-slate-400">Terminal 1 / North</p>
                            </div>

                            <div className="text-center mb-8 md:mb-0 bg-slate-800/80 px-6 py-4 rounded-full border border-slate-700 shadow-xl">
                                <p className="text-primary font-bold text-xl mb-1">95 KM</p>
                                <p className="text-sm text-slate-400">60 - 75 Minutes</p>
                            </div>

                            <div className="text-center relative bg-slate-800/50 p-4 rounded-xl">
                                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-slate-800">
                                    <MapPin size={24} className="text-[#C9A227]" />
                                </div>
                                <h4 className="font-bold text-lg mb-1">Makkah Hotel</h4>
                                <p className="text-sm text-slate-400">Direct Door Drop-off</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FLEET SHOWCASE */}
            <section id="fleet" className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins">Our Premium Fleet</h2>
                        <p className="text-lg text-slate-600 font-inter">Select from our meticulously maintained range of luxury vehicles to suit your group size and preferences.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "GMC Yukon AT4", class: "VIP SUV", img: "/images/fleet/yukon.png", seats: "7", luggage: "5", price: "400" },
                            { name: "Hyundai Staria", class: "Premium Minivan", img: "/images/fleet/staria.png", seats: "7", luggage: "6", price: "250" },
                            { name: "Toyota Hiace", class: "Group Transport", img: "/images/fleet/hiace.png", seats: "12", luggage: "10", price: "350" }
                        ].map((vehicle, idx) => (
                            <div key={idx} className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                                    {vehicle.class}
                                </div>
                                <div className="aspect-[16/9] relative mb-6 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                                    <Image src={vehicle.img} alt={vehicle.name} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">{vehicle.name}</h3>
                                <div className="flex items-center justify-between border-y border-slate-100 py-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <UserCheck size={18} className="text-slate-400" />
                                        <span className="text-sm font-medium text-slate-600">{vehicle.seats} Seats</span>
                                    </div>
                                    <div className="w-px h-8 bg-slate-100"></div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded border-2 border-slate-400 relative">
                                            <div className="absolute top-0.5 left-1 w-1 h-2 bg-slate-400 rounded-sm"></div>
                                        </div>
                                        <span className="text-sm font-medium text-slate-600">{vehicle.luggage} Bags</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-slate-500 mb-0.5">Starting from</p>
                                        <p className="text-2xl font-bold text-slate-900">{vehicle.price} <span className="text-sm text-slate-500 font-normal">SAR</span></p>
                                    </div>
                                    <Link href={whatsappLink} className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-primary transition-colors">
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-12">
                        <Link href="/fleet" className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-xl font-semibold hover:border-primary hover:text-primary transition-colors shadow-sm">
                            View Full Fleet <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 7. WHAT'S INCLUDED */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins">Complimentary Amenities</h2>
                        <p className="text-lg text-slate-600 font-inter">Every transfer includes premium touches designed to refresh you after your flight.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: Droplets, label: "Bottled Water" },
                            { icon: Wifi, label: "Onboard Wi-Fi" },
                            { icon: BatteryCharging, label: "Phone Charging" },
                            { icon: ShieldCheck, label: "Comprehensive Insurance" },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-100 hover:border-primary/20 transition-colors">
                                <div className="w-12 h-12 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center text-primary mb-4">
                                    <item.icon size={24} />
                                </div>
                                <h4 className="font-bold text-slate-900">{item.label}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. BOOKING PROCESS */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins">How It Works</h2>
                        <p className="text-lg text-slate-600 font-inter">Booking your airport transfer is designed to be as effortless as the journey itself.</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {[
                                { step: "01", title: "Select Your Vehicle", desc: "Choose from our premium fleet based on your group size and luggage requirements." },
                                { step: "02", title: "Provide Flight Details", desc: "Share your flight number and arrival time so we can track your journey." },
                                { step: "03", title: "Instant Confirmation", desc: "Receive immediate confirmation via WhatsApp with your chauffeur's details." },
                                { step: "04", title: "Meet & Greet", desc: "Find your chauffeur waiting at the arrivals terminal with a personalized sign." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 md:p-8 rounded-[24px] shadow-sm border border-slate-100 relative overflow-hidden group">
                                    <div className="absolute -right-4 -top-4 text-9xl font-bold text-slate-50 font-poppins group-hover:text-primary/5 transition-colors select-none pointer-events-none">
                                        {item.step}
                                    </div>
                                    <div className="w-16 h-16 shrink-0 bg-primary/10 text-primary rounded-2xl flex items-center justify-center font-bold text-xl relative z-10">
                                        {item.step}
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 font-poppins">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed font-inter">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. TESTIMONIALS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins">Pilgrim Experiences</h2>
                        <p className="text-lg text-slate-600 font-inter">Don't just take our word for it. Hear from thousands of satisfied travelers.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Ahmed R.", country: "UK", text: "Exceptional service. The driver was waiting at Jeddah airport despite our flight being delayed by 2 hours. The GMC Yukon was spotless." },
                            { name: "Fatima M.", country: "Malaysia", text: "Traveled with my elderly parents. The chauffeur was incredibly patient and helpful with the wheelchair. Highly recommend." },
                            { name: "Tariq S.", country: "USA", text: "Smooth booking process via WhatsApp. Clear communication, transparent pricing, and a very comfortable ride to our hotel in Makkah." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-[24px] border border-slate-100">
                                <Quote size={40} className="text-primary/20 mb-6" />
                                <p className="text-slate-700 leading-relaxed mb-6 italic">"{item.text}"</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.name}</h4>
                                        <p className="text-sm text-slate-500">{item.country}</p>
                                    </div>
                                    <div className="flex text-[#C9A227]">
                                        <Star size={16} className="fill-current" /><Star size={16} className="fill-current" /><Star size={16} className="fill-current" /><Star size={16} className="fill-current" /><Star size={16} className="fill-current" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. FAQ */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins">Common Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <details key={idx} className="group bg-white rounded-[20px] shadow-sm border border-slate-100 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-slate-900">
                                    {faq.question}
                                    <span className="transition group-open:rotate-180 text-primary">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed font-inter">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. RELATED SERVICES */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-poppins">Continue Your Journey</h2>
                            <p className="text-slate-600">Explore our other premium transport routes.</p>
                        </div>
                        <Link href="/services" className="hidden md:inline-flex items-center text-primary font-semibold hover:text-[#1B5E20]">
                            View All Routes <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Makkah to Madinah", link: "/services/makkah-madinah-taxi", img: "/images/routes/makkah-madinah-route-hero.png" },
                            { title: "Madinah Airport Transfer", link: "/services/madinah-airport-transfer", img: "/images/routes/madinah-airport-hero.png" },
                            { title: "Ziyarat Tours", link: "/services/ziyarat-tours", img: "/images/routes/makkah-ziyarat-hero.png" }
                        ].map((item, idx) => (
                            <Link key={idx} href={item.link} className="group block relative rounded-[20px] overflow-hidden aspect-[4/3]">
                                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                                    <h3 className="text-white font-bold text-xl">{item.title}</h3>
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 12. FINAL CTA */}
            <section className="py-24 bg-[#0F172A] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -mr-[400px] -mt-[400px] pointer-events-none"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">Ready for Your Journey?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-inter">
                        Secure your premium airport transfer today. Our team is available 24/7 to assist you.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href={whatsappLink} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-[#1B5E20] px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_0_40px_rgba(46,139,87,0.4)] hover:shadow-[0_0_60px_rgba(46,139,87,0.6)]">
                            <PhoneCall size={22} /> Book via WhatsApp
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20 border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg transition-all backdrop-blur-md">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
