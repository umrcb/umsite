import React from 'react';
import { Metadata } from 'next';
import { BookingProvider } from '@/components/premium-booking/BookingContext';
import PremiumBookingWizard from '@/components/premium-booking/PremiumBookingWizard';

export const metadata: Metadata = {
    title: 'Book Umrah Taxi & Premium Transport | Umrah Cabs',
    description: 'Book your premium Umrah transport, airport transfer, or intercity journey in Makkah and Madinah in just a few simple steps. Instant confirmation and secure payment.',
    openGraph: {
        title: 'Book Your Premium Umrah Transport',
        description: 'Reserve your luxury Umrah taxi and airport transfer with ease.',
        url: 'https://umrahtaxiservices.com/booking',
        type: 'website',
    },
};

export default function BookingPage() {
    return (
        <main className="w-full">
            <BookingProvider>
                <PremiumBookingWizard />
            </BookingProvider>
            
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Book Umrah Taxi",
                        "description": "Book your premium Umrah transport, airport transfer, or intercity journey in Makkah and Madinah.",
                        "url": "https://umrahtaxiservices.com/booking"
                    })
                }}
            />
        </main>
    );
}
