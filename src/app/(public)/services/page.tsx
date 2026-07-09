import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// SEO & Metadata
import { constructMetadata } from '@/lib/metadata';
import ExpandedServicesSEO from '@/components/services/ExpandedServicesSEO';

// Reusable Components
import FAQSection from '@/components/services/FAQSection';

// New Premium Components
import ServicesHero from '@/components/services/ServicesHero';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServiceComparison from '@/components/services/ServiceComparison';
import VehicleRecommendation from '@/components/services/VehicleRecommendation';
import BookingProcessTimeline from '@/components/services/BookingProcessTimeline';
import WhatsIncluded from '@/components/services/WhatsIncluded';
import PopularRoutes from '@/components/services/PopularRoutes';
import ServicesTrustSection from '@/components/services/ServicesTrustSection';
import ServicesCTABanner from '@/components/services/ServicesCTABanner';
import ServicesContactSection from '@/components/services/ServicesContactSection';

// Dynamic import for testimonials
const PilgrimExperiences = dynamic(() => import('@/components/home/PilgrimExperiences'), {
    loading: () => <div className="h-[400px] w-full bg-slate-50 animate-pulse" />
});

export async function generateMetadata() {
    return constructMetadata({
        title: "Umrah Cabs & Ziyarat Tours | Premium Transport",
        description: "Professional A-Z Umrah transport services: Jeddah Airport pickups, Makkah to Madinah transfers, VIP luxury fleet, and historic Ziyarat tours. Reliable 24/7.",
        keywords: [
            "Umrah Cabs", "Ziyarat Tours Makkah", "Intercity Transfers Saudi",
            "Jeddah Airport Pickup", "Madinah Ziyarat", "Makkah to Madinah Taxi",
            "VIP Umrah Transport", "Family Umrah Taxi"
        ],
        canonicalUrl: '/services',
    });
}

export default function ServicesPage() {
    const serviceFAQs = [
        {
            question: "How do I book a taxi from Jeddah Airport to Makkah?",
            answer: <span>Booking is simple. You can reserve your <Link href="/services/jeddah-airport-transfer" className="text-primary hover:underline">Jeddah Airport to Makkah taxi</Link> online in advance. We monitor your flight arrival and our driver meets you at the terminal with a name sign.</span>
        },
        {
            question: "What is the best transport for Umrah families?",
            answer: <span>For families, we highly recommend our GMC Yukon XL or Hyundai Staria. These spacious vehicles offer ample luggage space and AC comfort for the journey to Makkah.</span>
        },
        {
            question: "Do you offer direct Makkah to Madinah taxi services?",
            answer: <span>Yes, our <Link href="/services/makkah-madinah-taxi" className="text-primary hover:underline">Makkah to Madinah private taxi</Link> service is the most convenient option. Unlike the train or bus, we offer door-to-door service from your Makkah hotel lobby directly to your Madinah hotel.</span>
        },
        {
            question: "Can I stop at Miqat on the way to Makkah?",
            answer: "Absolutely. If you are travelling from Madinah or Jeddah, our drivers are happy to stop at the designated Miqat (e.g., Bir Ali or Juhfah) for you to assume Ihram and pray."
        },
        {
            question: "Is the taxi fare fixed or metered?",
            answer: <span>Our prices are fixed and transparent. You will know the exact cost of your <Link href="/booking" className="text-primary hover:underline">Umrah transport booking</Link> upfront, with no hidden fees, parking, or toll charges.</span>
        },
        {
            question: "Do you provide Ziyarat tours in Makkah and Madinah?",
            answer: <span>Yes, we offer comprehensive <Link href="/services/ziyarat-tours" className="text-primary hover:underline">Ziyarat packages</Link>. Visit historical sites like Jabal Al-Nour, Masjid Quba, and Mount Uhud in the comfort of a private vehicle with a knowledgeable driver.</span>
        }
    ];

    return (
        <main className="bg-background min-h-screen flex flex-col">
            <ServicesHero />
            <WhyChooseUs />
            <ServicesGrid />
            <ServiceComparison />
            <VehicleRecommendation />
            <BookingProcessTimeline />
            <WhatsIncluded />
            <PopularRoutes />
            <ServicesTrustSection />
            
            {/* Testimonials */}
            <div className="bg-slate-50 pb-16">
                <PilgrimExperiences />
            </div>

            {/* FAQs */}
            <div className="bg-white">
                <FAQSection items={serviceFAQs} title="Frequently Asked Questions" />
            </div>

            <ServicesContactSection />
            
            {/* Expanded SEO Content */}
            <div className="bg-slate-50 py-12">
                <ExpandedServicesSEO />
            </div>

            <ServicesCTABanner />

            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Umrah Transport",
                        "provider": {
                            "@type": "TransportationService",
                            "name": "Umrah Cabs"
                        },
                        "areaServed": {
                            "@type": "Place",
                            "name": "Saudi Arabia"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Transport Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Pilgrim Transport Makkah and Madinah"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Jeddah Airport to Makkah Transport"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
        </main>
    );
}
