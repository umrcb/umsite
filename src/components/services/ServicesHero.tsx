'use client';

import React from 'react';
import Link from 'next/link';
import Hero from '@/components/common/Hero';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function ServicesHero() {
    return (
        <Hero
            title="Premium Transportation Services Across Saudi Arabia"
            subtitle="Reliable airport transfers, Umrah transport, Ziyarat tours, hotel pickups, and luxury intercity travel with professional drivers and transparent pricing."
            bgImage="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=2500"
            alt="Masjid Nabawi Madinah"
            badge="Trusted by Thousands of Pilgrims"
            ctaText="Book Your Ride"
            ctaLink="/booking"
            secondaryCtaText="WhatsApp"
            secondaryCtaLink={getWhatsAppLink("Hello! I would like to know more about your Umrah Taxi services.")}
            breadcrumbs={
                <div className="flex items-center gap-2 text-sm font-medium">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>›</span>
                    <span className="text-primary font-semibold">Services</span>
                </div>
            }
        />
    );
}

