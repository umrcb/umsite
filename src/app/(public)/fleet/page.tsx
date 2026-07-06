import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// SEO & Metadata
import { constructMetadata } from '@/lib/metadata';

// Reusable Components
import FAQSection from '@/components/services/FAQSection';

// New Fleet Components
import FleetHero from '@/components/fleet/FleetHero';
import FleetOverviewStats from '@/components/fleet/FleetOverviewStats';
import FleetCategories from '@/components/fleet/FleetCategories';
import FleetShowcaseGrid from '@/components/fleet/FleetShowcaseGrid';
import FleetComparisonTable from '@/components/fleet/FleetComparisonTable';
import FleetRecommendation from '@/components/fleet/FleetRecommendation';
import FleetFeatures from '@/components/fleet/FleetFeatures';
import FleetGallery from '@/components/fleet/FleetGallery';
import FleetCTABanner from '@/components/fleet/FleetCTABanner';

// Dynamic import for testimonials
const PilgrimExperiences = dynamic(() => import('@/components/home/PilgrimExperiences'), {
    loading: () => <div className="h-[400px] w-full bg-slate-50 animate-pulse" />
});

export async function generateMetadata() {
    return constructMetadata({
        title: "Premium Umrah Taxi Fleet | Luxury SUVs, Vans & Buses",
        description: "Explore our premium fleet of luxury vehicles including GMC Yukon, Hyundai Staria, and Toyota Hiace. Perfect for VIP travel, families, and group Umrah transport.",
        keywords: [
            "Umrah Taxi Fleet", "Luxury Umrah Transport", "Toyota Hiace Rental Makkah",
            "GMC Yukon Airport Transfer", "Hyundai Staria Saudi Arabia", "Toyota Coaster Umrah Group Transport",
            "Premium Airport Transfer Makkah", "Family Umrah Transportation", "Saudi Arabia Chauffeur Service"
        ],
        canonicalUrl: '/fleet',
    });
}

export default function FleetPage() {
    const fleetFAQs = [
        {
            question: "Which vehicle is best for Umrah?",
            answer: <span>For families up to 7 people, the <strong>Hyundai Staria</strong> or <strong>GMC Yukon</strong> are excellent choices offering comfort and ample luggage space. For groups, the <strong>Toyota Hiace</strong> is the standard for reliable Umrah transport.</span>
        },
        {
            question: "Is luggage included in the vehicle capacity?",
            answer: "Yes, we clearly outline the luggage capacity for each vehicle. If you are traveling with excessive luggage (e.g., Zamzam water boxes plus large suitcases), we recommend sizing up your vehicle to ensure a comfortable ride."
        },
        {
            question: "Are child seats available?",
            answer: "Yes, child seats are available upon request at no extra charge. Please ensure you mention this requirement during the booking process."
        },
        {
            question: "Can I book multiple vehicles for a large group?",
            answer: <span>Absolutely. You can book multiple vehicles or opt for our group transport options like the <strong>Toyota Coaster</strong> which accommodates up to 30 passengers. Contact our support team for large group coordination.</span>
        },
        {
            question: "Do all vehicles have air conditioning?",
            answer: "Yes, every vehicle in our premium fleet is equipped with powerful, modern air conditioning to ensure your comfort in the Saudi Arabian climate."
        },
        {
            question: "Can I request a specific luxury vehicle?",
            answer: "Yes, you can specifically request a luxury vehicle like the GMC Yukon during booking. All luxury vehicles come with premium interiors, privacy glass, and VIP chauffeur service."
        }
    ];

    return (
        <main className="bg-background min-h-screen flex flex-col">
            <FleetHero />
            <FleetOverviewStats />
            <FleetCategories />
            <FleetShowcaseGrid />
            <FleetComparisonTable />
            <FleetRecommendation />
            <FleetFeatures />
            <FleetGallery />
            
            {/* Testimonials */}
            <div className="bg-slate-50 py-16">
                <PilgrimExperiences />
            </div>

            {/* FAQs */}
            <div className="bg-white">
                <FAQSection items={fleetFAQs} title="Frequently Asked Questions about our Fleet" />
            </div>

            <FleetCTABanner />

            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Umrah Taxi Premium Fleet",
                        "description": "Luxury and standard vehicles for Umrah transportation, airport transfers, and intercity travel.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Umrah Cabs"
                        },
                        "offers": {
                            "@type": "AggregateOffer",
                            "priceCurrency": "SAR",
                            "lowPrice": "150",
                            "highPrice": "700",
                            "offerCount": "5"
                        }
                    })
                }}
            />
        </main>
    );
}
