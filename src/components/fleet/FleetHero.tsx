'use client';

import React from 'react';
import Link from 'next/link';
import Hero from '@/components/common/Hero';

export default function FleetHero() {
    return (
        <Hero
            title="Travel in Comfort With Our Premium Fleet"
            subtitle="Choose from our carefully maintained fleet of luxury SUVs, spacious vans, and comfortable buses designed for airport transfers, Umrah, Ziyarat, and intercity travel across Saudi Arabia."
            bgImage="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=2500"
            alt="Umrah Cabs Premium Fleet Lineup"
            badge="Premium Fleet For Your Comfort"
            ctaText="View Vehicles"
            ctaLink="#fleet-showcase"
            secondaryCtaText="Book Now"
            secondaryCtaLink="/booking"
            breadcrumbs={
                <div className="flex items-center gap-2 text-sm font-medium">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>›</span>
                    <span className="text-primary font-semibold">Fleet</span>
                </div>
            }
        />
    );
}

