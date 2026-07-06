import React from 'react';
import dynamic from 'next/dynamic';

// SEO & Metadata
import { constructMetadata } from '@/lib/metadata';

// Reusable Components
import FAQSection from '@/components/services/FAQSection';

// Pricing Components
import PricingHero from '@/components/pricing/PricingHero';
import PricingValueProps from '@/components/pricing/PricingValueProps';
import PricingRoutesTable from '@/components/pricing/PricingRoutesTable';
import PricingFleetShowcase from '@/components/pricing/PricingFleetShowcase';
import PricingWhatsIncluded from '@/components/pricing/PricingWhatsIncluded';
import PricingEstimator from '@/components/pricing/PricingEstimator';
import PricingComparison from '@/components/pricing/PricingComparison';
import PricingCorporate from '@/components/pricing/PricingCorporate';
import PricingPayments from '@/components/pricing/PricingPayments';
import PricingCTABanner from '@/components/pricing/PricingCTABanner';

const PilgrimExperiences = dynamic(() => import('@/components/home/PilgrimExperiences'), {
    loading: () => <div className="h-[400px] w-full bg-slate-50 animate-pulse" />
});

export async function generateMetadata() {
    return constructMetadata({
        title: "Umrah Taxi Pricing & Fixed Fares | Get Instant Quote",
        description: "Transparent, fixed pricing for Umrah transportation, airport transfers, and intercity travel. No hidden fees. Check rates for Jeddah to Makkah, Madinah, and more.",
        keywords: [
            "Umrah Taxi Pricing", "Makkah Taxi Fare", "Jeddah Airport Transfer", 
            "Madinah Taxi", "Luxury Taxi Saudi Arabia", "Fixed Fare Taxi", 
            "Umrah Transportation", "Ziyarat Transport"
        ],
        canonicalUrl: '/pricing',
    });
}

export default function PricingPage() {
    const pricingFAQs = [
        {
            question: "Are there any hidden charges in your pricing?",
            answer: "No. Our pricing is 100% transparent and fixed. The quote you receive includes fuel, tolls, parking, and driver fees. What you see is exactly what you pay."
        },
        {
            question: "Can I pay online before the trip?",
            answer: "Yes, you can pay securely online using Visa, Mastercard, Apple Pay, Google Pay, or Mada during the booking process."
        },
        {
            question: "What is your cancellation policy?",
            answer: "We offer free cancellation up to 24 hours before your scheduled pickup time. For cancellations within 24 hours, a small fee may apply."
        },
        {
            question: "What happens if my flight is delayed?",
            answer: "We offer complimentary flight monitoring. Your driver will track your flight status and adjust the pickup time automatically, so you won't be charged for flight delays."
        },
        {
            question: "Is there a limit to the waiting time?",
            answer: "We provide 60 minutes of free waiting time at the airport after your flight lands, and 15 minutes of free waiting time for hotel or city pickups."
        },
        {
            question: "Do you charge extra for child seats?",
            answer: "No, child seats are available upon request at absolutely no extra charge. Please request them during booking so we can prepare them for you."
        }
    ];

    return (
        <main className="bg-white min-h-screen flex flex-col">
            <PricingHero />
            <PricingValueProps />

            {/* Layout Wrappers for Side-by-Side components */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8 max-w-[1500px]">
                    
                    {/* Row 1: Routes & Fleet */}
                    <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 mb-16 lg:mb-24">
                        <div className="w-full xl:w-[40%] flex-shrink-0">
                            <PricingRoutesTable />
                        </div>
                        <div className="w-full xl:w-[60%] overflow-hidden">
                            <PricingFleetShowcase />
                        </div>
                    </div>

                    {/* Row 2: Included & Estimator */}
                    <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 mb-16 lg:mb-24">
                        <div className="w-full xl:w-[60%]">
                            <PricingWhatsIncluded />
                        </div>
                        <div className="w-full xl:w-[40%]">
                            <PricingEstimator />
                        </div>
                    </div>

                    {/* Row 3: Comparison & Corporate */}
                    <div className="flex flex-col xl:flex-row gap-8 lg:gap-12">
                        <div className="w-full xl:w-[60%]">
                            <PricingComparison />
                        </div>
                        <div className="w-full xl:w-[40%]">
                            <PricingCorporate />
                        </div>
                    </div>

                </div>
            </section>

            <PricingPayments />
            
            {/* Testimonials */}
            <div className="bg-slate-50 py-16 border-b border-slate-100">
                <PilgrimExperiences />
            </div>

            {/* FAQs */}
            <div className="bg-white">
                <FAQSection items={pricingFAQs} title="Frequently Asked Questions about Pricing" />
            </div>

            <PricingCTABanner />

            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Umrah Taxi Transportation Services",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Umrah Cabs"
                        },
                        "offers": {
                            "@type": "AggregateOffer",
                            "priceCurrency": "SAR",
                            "lowPrice": "100",
                            "highPrice": "700"
                        }
                    })
                }}
            />
        </main>
    );
}
