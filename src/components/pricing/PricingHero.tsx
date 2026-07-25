'use client';

import React from 'react';
import Link from 'next/link';
import Hero from '@/components/common/Hero';

export default function PricingHero() {
    return (
        <Hero
            title="Premium Pricing for Every Journey"
            subtitle="Fixed fares, professional chauffeurs, luxury vehicles, and transparent pricing for airport transfers, Umrah, Ziyarat, and intercity travel throughout Saudi Arabia."
            bgImage="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=2500"
            alt="Makkah / Madinah Premium Taxi"
            badge="Transparent Pricing • No Hidden Charges"
            ctaText="Get Instant Quote"
            ctaLink="#price-estimator"
            secondaryCtaText="Book Your Ride"
            secondaryCtaLink="/booking"
            breadcrumbs={
                <div className="flex items-center gap-2 text-sm font-medium">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>›</span>
                    <span className="text-primary font-semibold">Pricing</span>
                </div>
            }
        />
    );
}

