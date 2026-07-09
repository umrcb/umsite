import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowRight, MapPin, PhoneCall, Star, CheckCircle2, Shield, 
    Plane, Clock, Users, Briefcase, Car, CreditCard,
    Headset, Quote, Navigation
} from 'lucide-react';
import { getSettings } from '@/lib/settings-storage';
import FleetShowcase from '@/components/home/FleetShowcase';
import FAQSection from '@/components/services/FAQSection';

export const metadata: Metadata = {
    title: "Premium Madinah Airport Transfer | Airport Taxi & Hotel Transfer | Umrah Taxi Services",
    description: "Book reliable Madinah Airport transfers with licensed chauffeurs, luxury vehicles, flight tracking, meet-and-greet service, and fixed pricing. Safe transportation to hotels, Makkah, and major destinations.",
    alternates: {
        canonical: '/services/madinah-airport-transfer'
    },
    openGraph: {
        title: "Premium Madinah Airport Transfer | Airport Taxi & Hotel Transfer",
        description: "Book reliable Madinah Airport transfers with licensed chauffeurs, luxury vehicles, flight tracking, meet-and-greet service, and fixed pricing.",
        url: "/services/madinah-airport-transfer",
        type: "website",
        images: [
            {
                url: "/images/routes/madinah-airport-hero.png",
                width: 1200,
                height: 630,
                alt: "Madinah Airport Premium Transfer"
            }
        ]
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Premium Madinah Airport Transfer",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Umrah Taxi Services",
        "image": "/logo.png",
        "telephone": "+966500000000",
        "priceRange": "$$"
    },
    "serviceType": "Airport Transfer",
    "areaServed": {
        "@type": "Airport",
        "name": "Prince Mohammad Bin Abdulaziz International Airport"
    },
    "description": "Professional airport transfer services between Prince Mohammad Bin Abdulaziz Airport, Madinah hotels, Masjid An-Nabawi, Makkah, and surrounding destinations.",
    "offers": {
        "@type": "Offer",
        "price": "150",
        "priceCurrency": "SAR",
        "availability": "https://schema.org/InStock"
    }
};

const faqItems = [
    {
        question: "Where will my driver meet me?",
        answer: "Your assigned chauffeur will be waiting for you at the arrival hall holding a personalized name sign. They will assist you with your luggage directly to the vehicle."
    },
    {
        question: "What if my flight is delayed?",
        answer: "We offer complimentary flight tracking. If your flight is delayed, we adjust the pickup time automatically, and your driver will be waiting for you when you land at no extra cost."
    },
    {
        question: "Is flight tracking included?",
        answer: "Yes, real-time flight tracking is included with all our airport transfers to ensure a seamless pickup experience."
    },
    {
        question: "How much luggage can I bring?",
        answer: "Luggage capacity depends on the vehicle you select. Our standard sedans accommodate 2-3 bags, while our SUVs and vans can comfortably hold up to 10+ bags for larger families."
    },
    {
        question: "Can I book a return transfer?",
        answer: "Absolutely! You can easily book a round-trip transfer from your hotel back to Madinah Airport. We recommend booking in advance to guarantee availability."
    },
    {
        question: "Can I pay online?",
        answer: "Yes, we accept secure online payments, or you can choose to pay the chauffeur directly in cash upon arrival."
    },
    {
        question: "Are child seats available?",
        answer: "Yes, complimentary child safety seats are available upon request. Please specify your requirements during the booking process."
    },
    {
        question: "Is service available 24/7?",
        answer: "Yes, our airport transfer service operates 24 hours a day, 7 days a week, ensuring you always have a ride regardless of your arrival time."
    }
];

export default async function MadinahAirportTransferPage() {
    const settings = await getSettings();
    const phoneNumber = settings.contact.phone;
    const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=I%20would%20like%20to%20book%20a%20premium%20transfer%20from%20Madinah%20Airport`;

    return (
        <main className="bg-[#F8FAFC] min-h-screen font-sans selection:bg-primary/20 selection:text-primary">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* 1. PREMIUM HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/images/routes/madinah-airport-hero.png" 
                        alt="Madinah Airport Transfer"
                        fill
                        className="object-cover object-center opacity-90"
                        priority
                    />
                    <div className="absolute inset-0 bg-white/90"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-white/50 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center gap-12">
                    <div className="max-w-4xl w-full flex flex-col items-center">
                        <div className="mb-4 text-sm font-medium text-slate-500 font-inter">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <span className="mx-2">→</span>
                            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                            <span className="mx-2">→</span>
                            <span className="text-primary">Madinah Airport Transfer</span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-md">
                            <Star size={14} className="fill-[#C9A227] text-[#C9A227]" /> Trusted Airport Transfer Service for Umrah & Hajj Travelers
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] font-poppins tracking-tight">
                            Premium <span className="text-primary block mt-2">Madinah Airport Transfer</span> Services
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-inter max-w-3xl">
                            Professional airport transfer services between Prince Mohammad Bin Abdulaziz Airport, Madinah hotels, Masjid An-Nabawi, Makkah, and surrounding destinations. Enjoy fixed pricing, luxury vehicles, meet-and-greet service, and professional chauffeurs.
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/booking" className="inline-flex items-center gap-2 bg-primary text-white hover:bg-[#1B5E20] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(46,139,87,0.3)] hover:shadow-[0_0_30px_rgba(46,139,87,0.5)] hover:-translate-y-1">
                                Book Airport Transfer <ArrowRight size={20} />
                            </Link>
                            <Link href={whatsappLink} className="inline-flex items-center gap-2 bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-sm hover:shadow-md">
                                <PhoneCall size={20} className="text-primary" /> WhatsApp Support
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TRUST BAR */}
            <section className="py-12 bg-white border-b border-slate-200 relative z-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                        {[
                            { icon: Plane, text: "Flight Monitoring" },
                            { icon: Users, text: "Meet & Greet" },
                            { icon: CreditCard, text: "Fixed Pricing" },
                            { icon: Shield, text: "Licensed Drivers" },
                            { icon: Car, text: "Luxury Vehicles" },
                            { icon: Headset, text: "24/7 Support" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <item.icon size={20} className="text-primary" />
                                </div>
                                <span className="font-semibold text-slate-800 font-inter">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. AIRPORT TRANSFER OVERVIEW */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-poppins leading-tight">
                                Your First Class Experience in <span className="text-primary">Madinah</span>
                            </h2>
                            <p className="text-lg text-slate-600 font-inter leading-relaxed">
                                Arriving at Prince Mohammad Bin Abdulaziz International Airport (MED) should be the beginning of a peaceful and spiritually uplifting journey. We eliminate the stress of finding a taxi or negotiating prices after a long flight.
                            </p>
                            <p className="text-lg text-slate-600 font-inter leading-relaxed">
                                Whether you are heading to your hotel near Masjid An-Nabawi, traveling directly to Makkah, or arriving for a business meeting, our fleet of luxury vehicles and professional chauffeurs ensure your arrival is seamless, safe, and exceptionally comfortable.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-6 pt-6">
                                {[
                                    "Airport Pickups", "Airport Drop-offs",
                                    "Hotel Transfers", "Umrah Transfers",
                                    "Group Transfers", "VIP Transfers"
                                ].map((topic, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 size={24} className="text-primary shrink-0" />
                                        <span className="font-semibold text-slate-800">{topic}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden relative shadow-2xl">
                                <Image 
                                    src="/images/gallery/madinah-1.jpg" 
                                    alt="Madinah Luxury Transfer" 
                                    fill 
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                                        <div className="flex items-center gap-4 mb-2">
                                            <Star size={24} className="fill-[#C9A227] text-[#C9A227]" />
                                            <span className="font-bold text-xl">5.0 Star Rated Service</span>
                                        </div>
                                        <p className="text-white/80">Voted Best Airport Transfer in Madinah</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. POPULAR AIRPORT ROUTES */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-poppins">
                            Popular Airport Routes
                        </h2>
                        <p className="text-lg text-slate-600 font-inter">
                            Transparent, fixed-price transfers to the most requested destinations from Madinah Airport.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { route: "MED → Masjid An-Nabawi Hotels", time: "25 Mins", dist: "20 km" },
                            { route: "MED → Makkah", time: "4.5 Hours", dist: "450 km" },
                            { route: "MED → Madinah City Center", time: "30 Mins", dist: "25 km" },
                            { route: "Hotel → MED Airport", time: "25 Mins", dist: "20 km" },
                            { route: "MED → Ziyarat Locations", time: "Variable", dist: "Custom" },
                            { route: "MED → Jeddah", time: "4.5 Hours", dist: "420 km" }
                        ].map((item, idx) => (
                            <div key={idx} className="group bg-white border border-slate-200 rounded-[24px] p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                                    <MapPin size={100} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 pr-8 font-poppins">{item.route}</h3>
                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3 text-slate-600">
                                        <Clock size={18} className="text-primary" />
                                        <span>Travel Time: <strong className="text-slate-900">{item.time}</strong></span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-600">
                                        <Navigation size={18} className="text-primary" />
                                        <span>Distance: <strong className="text-slate-900">{item.dist}</strong></span>
                                    </div>
                                </div>
                                <Link href="/booking" className="inline-flex items-center text-primary font-semibold hover:text-[#1B5E20] group/btn">
                                    Book Transfer <ArrowRight size={18} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. WHY CHOOSE UMRAH TAXI SERVICES */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-poppins">
                            Why Choose Our Service?
                        </h2>
                        <p className="text-lg text-slate-600 font-inter">
                            Experience the highest standard of luxury airport transportation designed for discerning travelers and pilgrims.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Users, title: "Professional Chauffeurs", desc: "Trained, licensed, and courteous drivers with excellent local knowledge." },
                            { icon: Briefcase, title: "Airport Meet & Assist", desc: "Personalized greeting inside the terminal with baggage assistance." },
                            { icon: Car, title: "Luxury Fleet", desc: "Immaculate, latest-model vehicles equipped for maximum comfort." },
                            { icon: Plane, title: "Flight Tracking", desc: "We monitor your flight and adjust pickup times for any delays automatically." },
                            { icon: Shield, title: "Family-Friendly", desc: "Spacious vehicles perfect for families and large pilgrim groups." },
                            { icon: CheckCircle2, title: "Child Seats Available", desc: "Complimentary safety seats provided upon request for your peace of mind." },
                            { icon: CreditCard, title: "Fixed Pricing", desc: "Transparent rates with zero hidden fees or unexpected surge charges." },
                            { icon: Clock, title: "Instant Confirmation", desc: "Secure your booking instantly and receive immediate digital confirmation." }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[24px] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                    <feature.icon size={28} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. AIRPORT ARRIVAL EXPERIENCE */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-poppins">
                            Your Arrival Experience
                        </h2>
                        <p className="text-lg text-slate-600 font-inter">
                            From the moment you step off the plane, we take care of the rest.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4 relative z-10">
                            {[
                                { step: 1, title: "Book Online", desc: "Reserve your ride." },
                                { step: 2, title: "Receive Confirmation", desc: "Instant details." },
                                { step: 3, title: "Driver Tracks Flight", desc: "We monitor delays." },
                                { step: 4, title: "Meet at Arrival Hall", desc: "Look for your name." },
                                { step: 5, title: "Luggage Assistance", desc: "We carry your bags." },
                                { step: 6, title: "Comfortable Journey", desc: "Relax and enjoy." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-100 group-hover:border-primary text-slate-400 group-hover:text-primary flex items-center justify-center text-xl font-bold mb-6 transition-colors shadow-sm relative z-10">
                                        {item.step}
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2 font-poppins">{item.title}</h4>
                                    <p className="text-sm text-slate-500 font-inter">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. PREMIUM FLEET SHOWCASE */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#C9A227] font-bold tracking-wider uppercase text-sm mb-4 block">Our Luxury Vehicles</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
                            Premium Fleet Selection
                        </h2>
                        <p className="text-lg text-slate-400 font-inter">
                            Choose the perfect vehicle for your group size and luggage requirements.
                        </p>
                    </div>

                    <FleetShowcase />
                </div>
            </section>

            {/* 9. WHAT'S INCLUDED & 10. AIRPORT TERMINAL GUIDE */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* What's Included */}
                        <div className="bg-white p-10 rounded-[32px] shadow-xl border border-slate-100">
                            <h3 className="text-3xl font-bold text-slate-900 mb-8 font-poppins">What's Included</h3>
                            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                                {[
                                    "Professional Driver", "Airport Pickup", 
                                    "Meet & Greet", "Flight Tracking", 
                                    "Waiting Time", "Air Conditioning", 
                                    "Complimentary Water", "Phone Charging", 
                                    "Luggage Assistance", "Insurance", 
                                    "GPS Tracking", "24/7 Support"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={14} className="text-primary" />
                                        </div>
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Terminal Guide */}
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-slate-900 font-poppins">Madinah Airport Terminal Guide</h3>
                            <p className="text-lg text-slate-600 font-inter">
                                Navigating Prince Mohammad Bin Abdulaziz International Airport is easy with our meet and greet service.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                                        <MapPin className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Meeting Point</h4>
                                        <p className="text-slate-600">Your driver will be waiting immediately outside the customs exit in the Arrival Hall holding a clearly visible name board.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                                        <PhoneCall className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Driver Contact Process</h4>
                                        <p className="text-slate-600">You will receive your chauffeur's contact details via WhatsApp prior to your arrival for seamless communication.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                                        <Shield className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Lost Luggage Assistance</h4>
                                        <p className="text-slate-600">If your luggage is delayed, simply message your driver. They will wait comfortably while you file a report.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. PRICING OVERVIEW */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-poppins">
                            Transparent Pricing
                        </h2>
                        <p className="text-lg text-slate-600 font-inter">
                            No hidden fees. The price you see is the price you pay. All airport parking and toll charges are included.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { vehicle: "Luxury Sedan", cap: "2-3 Passengers", price: "150 SAR", rec: false },
                            { vehicle: "Premium SUV", cap: "6-7 Passengers", price: "350 SAR", rec: true },
                            { vehicle: "Family Van", cap: "10-13 Passengers", price: "450 SAR", rec: false }
                        ].map((tier, idx) => (
                            <div key={idx} className={`rounded-[32px] p-8 border ${tier.rec ? 'border-primary shadow-2xl relative bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-900 shadow-xl'} transition-transform hover:-translate-y-2 duration-300`}>
                                {tier.rec && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C9A227] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className={`text-2xl font-bold mb-2 font-poppins`}>{tier.vehicle}</h3>
                                <p className={tier.rec ? 'text-slate-400' : 'text-slate-500'}>Up to {tier.cap}</p>
                                <div className="my-8">
                                    <span className="text-4xl font-bold">From {tier.price}</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {["Meet & Greet", "Flight Tracking", "Luggage Help", "Free Cancellation"].map((inc, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle2 size={18} className={tier.rec ? 'text-primary' : 'text-primary'} />
                                            <span className={tier.rec ? 'text-slate-300' : 'text-slate-600'}>{inc}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/booking" className={`block w-full text-center py-4 rounded-xl font-bold transition-colors ${tier.rec ? 'bg-primary hover:bg-[#1B5E20] text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
                                    Book Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 12. CUSTOMER TESTIMONIALS */}
            <section className="py-24 bg-[#F8FAFC] overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="flex justify-center gap-1 mb-6">
                            {[...Array(5)].map((_, i) => <Star key={i} size={28} className="fill-[#C9A227] text-[#C9A227]" />)}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-poppins">
                            Trusted by Pilgrims Worldwide
                        </h2>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
                        {[
                            { name: "Ahmed R.", country: "UK", text: "Driver was waiting with a sign even though our flight was delayed by 2 hours. Extremely professional service. The GMC Yukon was immaculate.", route: "MED to Hotel" },
                            { name: "Fatima S.", country: "Malaysia", text: "Traveled with my elderly parents. The driver was so patient and helped us with all our heavy luggage. Truly a blessing.", route: "MED to Makkah" },
                            { name: "Omar M.", country: "USA", text: "Seamless experience. Booked online, got WhatsApp updates, and arrived at our hotel in comfort. Worth every penny.", route: "MED to Masjid Nabawi" }
                        ].map((review, idx) => (
                            <div key={idx} className="min-w-[350px] md:min-w-[400px] bg-white p-8 rounded-[24px] shadow-lg border border-slate-100 snap-center">
                                <Quote size={40} className="text-primary/20 mb-6" />
                                <p className="text-lg text-slate-700 italic mb-8 font-inter">"{review.text}"</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{review.name}</h4>
                                            <p className="text-sm text-slate-500">{review.country}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                                            {review.route}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 13. FAQ SECTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-poppins">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <FAQSection items={faqItems} title="" />
                </div>
            </section>

            {/* 14. RELATED SERVICES */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 font-poppins text-center">Explore Other Premium Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Jeddah Airport Transfers", link: "/services/jeddah-airport-transfer" },
                            { title: "Makkah ↔ Madinah Taxi", link: "/services/makkah-madinah-taxi" },
                            { title: "Madinah Ziyarat Tours", link: "/services/madinah-ziyarat" }
                        ].map((srv, idx) => (
                            <Link key={idx} href={srv.link} className="bg-white p-8 rounded-[24px] shadow-sm border border-slate-200 hover:border-primary hover:shadow-xl transition-all group">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 font-poppins group-hover:text-primary transition-colors">{srv.title}</h3>
                                <div className="flex items-center text-primary font-semibold">
                                    View Service <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 15. FINAL CTA SECTION */}
            <section className="py-24 bg-[#1B5E20] relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-poppins leading-tight">
                            Arriving in Madinah? Let Us Handle Your Journey.
                        </h2>
                        <p className="text-xl text-white/90 mb-12 font-inter max-w-2xl mx-auto">
                            Enjoy a stress-free airport transfer with luxury vehicles, professional chauffeurs, and trusted service.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/booking" className="bg-white text-primary hover:bg-slate-100 px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl hover:scale-105">
                                Book Now
                            </Link>
                            <Link href={whatsappLink} className="bg-[#25D366] text-white hover:bg-[#128C7E] px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl flex items-center gap-3">
                                <PhoneCall size={24} /> WhatsApp Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
