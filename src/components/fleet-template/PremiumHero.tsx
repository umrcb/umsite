import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Hero from '@/components/common/Hero';
import { VehicleData } from '@/data/vehicles';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function PremiumHero({ vehicle }: { vehicle: VehicleData }) {
  return (
    <Hero
        title={vehicle.name}
        subtitle={vehicle.shortDescription}
        bgImage="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=2500" // Standard premium background
        alt={vehicle.name}
        badge={vehicle.badge}
        ctaText="Book This Vehicle"
        ctaLink="/booking"
        secondaryCtaText="WhatsApp"
        secondaryCtaLink={getWhatsAppLink(`Salam, I would like to book the ${vehicle.name}.`)}
        breadcrumbs={
            <nav className="flex items-center gap-2 text-sm font-medium">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight size={16} />
                <span className="text-primary font-semibold">{vehicle.name}</span>
            </nav>
        }
    />
  );
}

