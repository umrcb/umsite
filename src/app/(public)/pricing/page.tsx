import React from 'react';
import { Metadata } from 'next';

// SEO & Metadata
import { constructMetadata } from '@/lib/metadata';

// New Pricing Components
import PricingHero from '@/components/pricing/PricingHero';
import PricingTrustBar from '@/components/pricing-new/PricingTrustBar';
import PricingMainSection from '@/components/pricing-new/PricingMainSection';
import VehicleComparison from '@/components/pricing-new/VehicleComparison';
import PricingWhatsIncluded from '@/components/pricing-new/PricingWhatsIncluded';
import PricingWhyUs from '@/components/pricing-new/PricingWhyUs';
import PricingFAQ from '@/components/pricing-new/PricingFAQ';
import PricingRelated from '@/components/pricing-new/PricingRelated';
import PricingCTA from '@/components/pricing-new/PricingCTA';

export async function generateMetadata(): Promise<Metadata> {
    return constructMetadata({
        title: "Umrah Taxi Pricing | Airport Transfers & Intercity Taxi Fares",
        description: "Compare fixed prices for airport transfers, hotel transfers, Umrah transportation, Ziyarat tours, and intercity taxi services across Makkah, Madinah, Jeddah, Taif, and other Saudi destinations. No hidden charges.",
        keywords: [
            "Umrah Taxi Prices", "Makkah Taxi Fare", "Madinah Taxi Fare", 
            "Jeddah Airport Transfer Price", "Makkah to Madinah Taxi Cost", 
            "Saudi Arabia Taxi Rates", "Airport Taxi Pricing", 
            "Intercity Taxi Price", "Luxury Taxi Saudi Arabia", 
            "Private Transfer Price"
        ],
        canonicalUrl: '/pricing',
    });
}

export default function PricingPage() {
    return (
        <main className="bg-white min-h-screen flex flex-col font-inter">
            <PricingHero />
            <PricingTrustBar />
            
            {/* Main Interactive Search and Route Cards Section */}
            <PricingMainSection />
            
            <VehicleComparison />
            <PricingWhatsIncluded />
            <PricingWhyUs />
            <PricingFAQ />
            <PricingRelated />
            <PricingCTA />

            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Service",
                                "name": "Umrah Taxi Transportation Services",
                                "provider": {
                                    "@type": "LocalBusiness",
                                    "name": "Umrah Taxi Services"
                                },
                                "offers": {
                                    "@type": "AggregateOffer",
                                    "priceCurrency": "SAR",
                                    "lowPrice": "70",
                                    "highPrice": "1200"
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Are prices fixed?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, all our prices are 100% fixed. The quote you receive includes all taxes, tolls, parking, and driver fees. You won't pay a Riyal more."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Are tolls included?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Absolutely. All road tolls and parking fees are already included in the final price of your journey."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How do I pay?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "You can pay securely online using Visa, Mastercard, Apple Pay, Mada, or choose to pay cash to the driver upon arrival."
                                        }
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
