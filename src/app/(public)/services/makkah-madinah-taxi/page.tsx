import { getBaseUrl } from '@/lib/url-utils';
import { getSettings } from '@/lib/settings-storage';
import { constructMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { 
    ArrowRight, MapPin, Clock, ShieldCheck, Star, UserCheck, 
    CheckCircle, HeartHandshake, PhoneCall, Quote, Check,
    Wifi, BatteryCharging, Droplets, CarFront, Navigation, Shield, CreditCard
} from 'lucide-react';
import Image from 'next/image';

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Makkah to Madinah Intercity Taxi",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Umrah Cabs",
        "image": `${getBaseUrl()}/logo.png`
    },
    "serviceType": "Intercity Transfer",
    "areaServed": {
        "@type": "Country",
        "name": "Saudi Arabia"
    },
    "description": "Premium private transport between Makkah and Madinah in GMC Yukon or Staria.",
    "offers": {
        "@type": "Offer",
        "price": "400",
        "priceCurrency": "SAR",
        "availability": "https://schema.org/InStock"
    },
    "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${getBaseUrl()}` },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": `${getBaseUrl()}/services` },
            { "@type": "ListItem", "position": 3, "name": "Makkah to Madinah Taxi", "item": `${getBaseUrl()}/services/makkah-madinah-taxi` }
        ]
    }
};

const faqs = [
    {
        question: "How long is the journey from Makkah to Madinah?",
        answer: "The distance is approximately 450 km. Traveling by private luxury taxi takes about 4.5 to 5 hours depending on traffic. You can also request stops for prayer or rest along the way."
    },
    {
        question: "Can we stop during the trip?",
        answer: "Yes, our private intercity transfers are completely flexible. You can request to stop at designated rest areas for food, restrooms, or prayer times. We can also stop at the Miqat (Bir Ali) if you need to assume Ihram."
    },
    {
        question: "Are child seats available?",
        answer: "Yes, we prioritize safety. Child seats are available upon request during the booking process at no additional cost. Please let us know the age of the child when booking."
    },
    {
        question: "Can I book a return trip?",
        answer: "Absolutely. You can easily book a round trip. Just select the return option in the booking widget and let us know your return date and time."
    },
    {
        question: "Is luggage included?",
        answer: "Yes, standard luggage is included based on the vehicle capacity. For example, a GMC Yukon can easily accommodate up to 5 large suitcases. There are no hidden fees for luggage within the vehicle's capacity."
    },
    {
        question: "Are prices fixed?",
        answer: "Yes, we operate on a strict fixed pricing model. The price you see during booking is the final price. There are no hidden fees, toll charges, or surge pricing."
    },
    {
        question: "Do you operate 24/7?",
        answer: "Yes, our intercity transfer services operate 24 hours a day, 7 days a week. You can book a transfer for any time of the day or night."
    }
];

export async function generateMetadata() {
    return constructMetadata({
        title: "Premium Makkah to Madinah Taxi | Luxury Intercity Transfer | Umrah Taxi Services",
        description: "Book a reliable Makkah to Madinah taxi with licensed chauffeurs, luxury vehicles, fixed pricing, and 24/7 service. Safe and comfortable intercity transportation for Umrah and Hajj pilgrims.",
        keywords: ["Makkah to Madinah Taxi", "Madinah to Makkah Taxi", "Intercity Taxi Saudi Arabia", "Umrah Taxi Service", "Private Taxi Makkah Madinah", "Luxury Chauffeur Saudi Arabia", "Makkah Madinah Transfer", "Hajj Transportation", "Premium Umrah Transport"],
        canonicalUrl: '/services/makkah-madinah-taxi',
    });
}

export default async function MakkahMadinahTaxiLuxuryPage() {
    const settings = await getSettings();
    const phoneNumber = settings.contact.phone;
    const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=I%20would%20like%20to%20book%20a%20premium%20transfer%20from%20Makkah%20to%20Madinah`;

    return (
        <main className="bg-white min-h-screen font-sans selection:bg-primary/20 selection:text-primary">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* 1. PREMIUM HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/images/routes/makkah-madinah-route-hero.png" 
                        alt="Luxury Taxi from Makkah to Madinah"
                        fill
                        className="object-cover object-center opacity-90"
                        priority
                    />
                    <div className="absolute inset-0 bg-white/90"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-white/50 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center gap-12">
                    <div className="max-w-4xl w-full flex flex-col items-center">
                        <div className="mb-4 text-sm font-medium text-slate-500 font-inter">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <span className="mx-2">→</span>
                            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                            <span className="mx-2">→</span>
                            <span className="text-primary">Makkah ↔ Madinah Taxi</span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-md">
                            <Star size={14} className="fill-primary" /> Trusted by Thousands of Umrah & Hajj Travelers
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] font-poppins tracking-tight">
                            Premium Taxi Service Between <span className="text-primary block mt-2">Makkah & Madinah</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-inter max-w-2xl">
                            Travel comfortably between the two holiest cities in Islam with licensed chauffeurs, luxury vehicles, fixed pricing, and 24/7 availability. Whether you are traveling after Umrah, before Hajj, or for business, enjoy a seamless and peaceful journey.
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/booking" className="inline-flex items-center gap-2 bg-primary text-white hover:bg-[#1B5E20] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(46,139,87,0.3)] hover:shadow-[0_0_30px_rgba(46,139,87,0.5)] hover:-translate-y-1">
                                Book Your Journey <ArrowRight size={20} />
                            </Link>
                            <Link href={whatsappLink} className="inline-flex items-center gap-2 bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-sm hover:shadow-md">
                                <PhoneCall size={20} className="text-primary" /> WhatsApp Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TRUST INDICATORS */}
            <section className="py-16 bg-white relative z-20 -mt-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: CreditCard, title: "Fixed Pricing" },
                            { icon: ShieldCheck, title: "Licensed Drivers" },
                            { icon: CarFront, title: "Luxury Fleet" },
                            { icon: Clock, title: "24/7 Service" },
                            { icon: Navigation, title: "GPS Tracking" },
                            { icon: CheckCircle, title: "Instant Booking" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                                <item.icon size={28} className="text-primary mb-3" strokeWidth={1.5} />
                                <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SERVICE OVERVIEW */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins leading-tight">
                                A Spiritual Journey Deserves a Serene Ride
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 font-inter leading-relaxed">
                                The journey between Makkah and Madinah is a profound part of your pilgrimage. Our premium intercity chauffeur service is designed to ensure you travel in absolute comfort, allowing you to focus on your spiritual goals.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 font-inter leading-relaxed">
                                Avoid the stress of crowded buses, strict train schedules, and navigating train stations with luggage. We provide a seamless door-to-door experience from your Makkah hotel lobby directly to your Madinah accommodation.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {["Direct Hotel-to-Hotel Transfer", "Comfortable Seating & Legroom", "Scenic Highway Route", "Optional Ziyarat Stops"].map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-800 font-medium">
                                        <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative">
                            <div className="aspect-[4/3] rounded-[24px] overflow-hidden relative shadow-2xl border-4 border-white">
                                <Image src="/images/fleet/yukon.png" alt="Luxury GMC Yukon" fill className="object-cover bg-slate-200" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[20px] shadow-xl border border-slate-100 max-w-[280px] hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#C9A227]/10 rounded-full flex items-center justify-center text-[#C9A227]">
                                        <Star size={24} className="fill-current" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 leading-tight">First Class Comfort</p>
                                        <p className="text-sm text-slate-500">Premium Leather Interiors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. ROUTE INFORMATION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins">Route Information</h2>
                        <p className="text-lg text-slate-600 font-inter">Everything you need to know about the journey between the Holy Cities.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { title: "Distance", value: "Approx. 450 km", desc: "Via Haramain Highway" },
                            { title: "Estimated Time", value: "4.5 – 5 Hours", desc: "Depending on traffic" },
                            { title: "Rest Stops", value: "Available", desc: "For prayer and food" },
                            { title: "Best Time", value: "Morning / Evening", desc: "To avoid the heat" }
                        ].map((info, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-[20px] border border-slate-100 text-center hover:border-primary/30 transition-colors">
                                <h4 className="text-slate-500 uppercase tracking-wider text-xs font-bold mb-3">{info.title}</h4>
                                <p className="text-2xl font-bold text-slate-900 mb-2 font-poppins">{info.value}</p>
                                <p className="text-sm text-slate-600">{info.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. WHY CHOOSE US */}
            <section className="py-24 bg-[#0F172A] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">The Premium Standard</h2>
                        <p className="text-lg text-slate-400 font-inter">We obsess over every detail of your journey so you don't have to.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: UserCheck, title: "Professional Chauffeurs", desc: "Vetted, experienced, and deeply familiar with intercity routes." },
                            { icon: Shield, title: "GPS Tracking", desc: "All vehicles are centrally monitored for maximum security." },
                            { icon: Droplets, title: "Free Bottled Water", desc: "Complimentary chilled water provided for every passenger." },
                            { icon: BatteryCharging, title: "Phone Charging", desc: "USB ports available in every vehicle to keep you connected." },
                            { icon: CarFront, title: "Premium Vehicles", desc: "Immaculate fleet consisting of latest model vehicles." },
                            { icon: HeartHandshake, title: "Luggage Assistance", desc: "Driver handles loading and unloading at both hotels." },
                            { icon: ShieldCheck, title: "Child Seats Available", desc: "Complimentary child safety seats upon request." },
                            { icon: Clock, title: "24/7 Support", desc: "Dedicated dispatch team available around the clock." }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-slate-800/50 p-8 rounded-[20px] border border-slate-700/50 hover:bg-slate-800 transition-colors">
                                <feature.icon size={28} className="text-primary mb-5" strokeWidth={1.5} />
                                <h3 className="text-xl font-bold text-white mb-3 font-poppins">{feature.title}</h3>
                                <p className="text-slate-400 font-inter text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FLEET SHOWCASE */}
            <section id="fleet" className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins">Our Premium Fleet</h2>
                        <p className="text-lg text-slate-600 font-inter">Choose the perfect vehicle for your journey between the Holy Cities.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { name: "Toyota Hiace", class: "Group Transport", img: "/images/fleet/hiace.png", seats: "12", luggage: "10", price: "550", bestFor: "Large Families" },
                            { name: "Hyundai Staria", class: "Premium Minivan", img: "/images/fleet/staria.png", seats: "7", luggage: "6", price: "450", bestFor: "Comfort Seekers" },
                            { name: "GMC Yukon AT4", class: "VIP SUV", img: "/images/fleet/yukon.png", seats: "7", luggage: "5", price: "700", bestFor: "Luxury Travel" }
                        ].map((vehicle, idx) => (
                            <div key={idx} className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
                                        {vehicle.class}
                                    </div>
                                    <div className="inline-block px-3 py-1 bg-[#C9A227]/10 text-[#C9A227] text-xs font-bold rounded-full">
                                        {vehicle.bestFor}
                                    </div>
                                </div>
                                <div className="aspect-[16/9] relative mb-8 rounded-xl overflow-hidden bg-white flex items-center justify-center p-4">
                                    <Image src={vehicle.img} alt={vehicle.name} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-poppins">{vehicle.name}</h3>
                                <div className="flex items-center justify-between border-y border-slate-100 py-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <UserCheck size={18} className="text-slate-400" />
                                        <span className="text-sm font-medium text-slate-600">{vehicle.seats} Passengers</span>
                                    </div>
                                    <div className="w-px h-8 bg-slate-100"></div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded border-2 border-slate-400 relative">
                                            <div className="absolute top-0.5 left-1 w-1 h-2 bg-slate-400 rounded-sm"></div>
                                        </div>
                                        <span className="text-sm font-medium text-slate-600">{vehicle.luggage} Bags</span>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <p className="text-sm text-slate-500 mb-1">Intercity Fare from</p>
                                    <p className="text-3xl font-bold text-slate-900 mb-6 font-poppins">{vehicle.price} <span className="text-base text-slate-500 font-normal">SAR</span></p>
                                    <Link href="/booking" className="block w-full text-center bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white py-3.5 rounded-xl font-bold transition-colors">
                                        Book This Vehicle
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. WHAT'S INCLUDED */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="bg-slate-50 rounded-[32px] p-8 md:p-16 border border-slate-100">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-poppins">Always Included</h2>
                            <p className="text-lg text-slate-600">No hidden fees, no surprises. Just premium service.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                            {[
                                "Professional Driver", "Fuel Surcharges", "Toll Charges", "Parking Fees",
                                "Air Conditioning", "Complimentary Water", "Prayer Stop on Request", "Rest Stop on Request",
                                "Luggage Assistance", "GPS Navigation", "Fully Insured Vehicles", "24/7 Customer Support"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="font-semibold text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. JOURNEY EXPERIENCE TIMELINE */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins">The Booking Experience</h2>
                    </div>

                    <div className="relative border-l-2 border-primary/20 ml-4 md:ml-8 space-y-12 pb-8">
                        {[
                            { step: "01", title: "Book Online", desc: "Select your route, date, and preferred luxury vehicle through our secure platform." },
                            { step: "02", title: "Receive Confirmation", desc: "Get instant confirmation and booking details sent directly to your WhatsApp and email." },
                            { step: "03", title: "Driver Assigned", desc: "We assign a vetted professional chauffeur to your journey a day before travel." },
                            { step: "04", title: "Driver Arrives", desc: "Your chauffeur arrives at your hotel lobby precisely on time, ready to assist with luggage." },
                            { step: "05", title: "Comfortable Journey", desc: "Relax in an air-conditioned, luxury environment for the 4.5 hour scenic drive." },
                            { step: "06", title: "Safe Arrival", desc: "Arrive refreshed at your destination hotel doorstep. Payment can be finalized securely." }
                        ].map((item, idx) => (
                            <div key={idx} className="relative pl-12 md:pl-16">
                                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold border-4 border-slate-50 shadow-sm">
                                    {item.step}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-poppins">{item.title}</h3>
                                <p className="text-slate-600 text-lg font-inter">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. CUSTOMER TESTIMONIALS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins">Pilgrim Experiences</h2>
                        <p className="text-lg text-slate-600 font-inter">Discover why thousands of travelers choose our intercity service.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Dr. Hassan K.", country: "UAE", vehicle: "GMC Yukon AT4", text: "The drive from Makkah to Madinah was incredibly smooth. The Yukon was spacious enough for our family of 6. The driver was very respectful and stopped for Asr prayer exactly when we requested." },
                            { name: "Sarah & Family", country: "UK", vehicle: "Hyundai Staria", text: "Traveling with kids can be tough, but the Staria was so comfortable. The complimentary water and phone charging ports were a lifesaver. Arrived in Madinah completely refreshed." },
                            { name: "Omar F.", country: "USA", vehicle: "Toyota Hiace", text: "We booked the Hiace for our group of 10. Plenty of room for our luggage. The fixed pricing gave us peace of mind with no haggling required. Highly professional service." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-[24px] border border-slate-100 shadow-sm">
                                <Quote size={40} className="text-primary/20 mb-6" />
                                <p className="text-slate-700 leading-relaxed mb-6 italic font-inter">"{item.text}"</p>
                                <div className="flex items-center justify-between border-t border-slate-200 pt-6 mt-auto">
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.name}</h4>
                                        <p className="text-xs text-slate-500">{item.country} • {item.vehicle}</p>
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

            {/* 12. FAQ */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins">Frequently Asked Questions</h2>
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

            {/* 13. RELATED SERVICES */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-poppins">Explore More Services</h2>
                            <p className="text-slate-600">Complete your Umrah journey with our other premium transport options.</p>
                        </div>
                        <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:text-[#1B5E20]">
                            View All Services <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Jeddah Airport Transfer", link: "/services/jeddah-airport-transfer", img: "/images/routes/jeddah-airport-hero.png" },
                            { title: "Madinah Airport Transfer", link: "/services/madinah-airport-transfer", img: "/images/routes/madinah-airport-hero.png" },
                            { title: "Ziyarat Tours", link: "/services/ziyarat-tours", img: "/images/routes/makkah-ziyarat-hero.png" }
                        ].map((item, idx) => (
                            <Link key={idx} href={item.link} className="group block relative rounded-[20px] overflow-hidden aspect-[4/3] shadow-sm">
                                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
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

            {/* 14. FINAL CTA */}
            <section className="py-24 bg-[#1B5E20] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2E8B57]/30 rounded-full blur-[120px] -mr-[400px] -mt-[400px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C9A227]/10 rounded-full blur-[100px] -ml-[300px] -mb-[300px] pointer-events-none"></div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">Ready to Travel Between Makkah & Madinah?</h2>
                    <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-inter">
                        Book your premium intercity transfer today and enjoy a safe, comfortable, and stress-free journey with professional chauffeurs.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/booking" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#1B5E20] hover:bg-slate-50 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                            Book Now
                        </Link>
                        <Link href={whatsappLink} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2E8B57] text-white hover:bg-[#2E8B57]/90 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-md hover:-translate-y-1 border border-[#2E8B57]/50">
                            <PhoneCall size={22} /> WhatsApp
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
