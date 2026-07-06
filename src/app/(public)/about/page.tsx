import React from 'react';
import { Metadata } from 'next';
import Head from 'next/head';
import styles from '@/components/about/About.module.css';

// Components
import HeroSection from '@/components/about/HeroSection';
import OurStory from '@/components/about/OurStory';
import MissionVision from '@/components/about/MissionVision';
import CoreValues from '@/components/about/CoreValues';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import CompanyStatistics from '@/components/about/CompanyStatistics';
import MeetOurTeam from '@/components/about/MeetOurTeam';
import FleetPreview from '@/components/about/FleetPreview';
import SafetyCommitment from '@/components/about/SafetyCommitment';
import ServiceAreas from '@/components/about/ServiceAreas';
import CustomerTestimonials from '@/components/about/CustomerTestimonials';
import AwardsCertifications from '@/components/about/AwardsCertifications';
import FAQSection from '@/components/about/FAQSection';
import FinalCTA from '@/components/about/FinalCTA';

export const metadata: Metadata = {
  title: 'About Umrah Cabs | Premium Umrah Transportation',
  description: 'Learn about Umrah Cabs, the trusted choice for premium, safe, and reliable pilgrim transportation across Makkah, Madinah, and Saudi Arabia.',
  keywords: [
    'About Umrah Cabs',
    'Premium Umrah Transportation',
    'Trusted Taxi Makkah',
    'Saudi Arabia Chauffeur Service',
    'Luxury Airport Transfers',
    'Umrah Travel Company',
    'Pilgrim Transportation'
  ],
  openGraph: {
    title: 'About Umrah Cabs | Premium Umrah Transportation',
    description: 'Learn about Umrah Cabs, the trusted choice for premium, safe, and reliable pilgrim transportation across Makkah, Madinah, and Saudi Arabia.',
    type: 'website',
    url: 'https://umrahtaxiservices.com/about',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1598462725916-24eb2fbff99d?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Premium Umrah Transportation',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Umrah Cabs | Premium Umrah Transportation',
    description: 'The trusted choice for premium, safe, and reliable pilgrim transportation.',
    images: ['https://images.unsplash.com/photo-1598462725916-24eb2fbff99d?q=80&w=1200&auto=format&fit=crop'],
  }
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://umrahtaxiservices.com/#organization",
        "name": "Umrah Cabs",
        "url": "https://umrahtaxiservices.com",
        "logo": "https://umrahtaxiservices.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+966-500-000-000",
          "contactType": "customer service"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://umrahtaxiservices.com/#localbusiness",
        "name": "Umrah Cabs",
        "image": "https://images.unsplash.com/photo-1598462725916-24eb2fbff99d?q=80&w=1200&auto=format&fit=crop",
        "telephone": "+966-500-000-000",
        "url": "https://umrahtaxiservices.com/about",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Makkah",
          "addressRegion": "Makkah Province",
          "addressCountry": "SA"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://umrahtaxiservices.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://umrahtaxiservices.com/about"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Are your drivers licensed and experienced?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all our chauffeurs undergo rigorous background checks, hold valid commercial licenses, and have extensive experience driving in Saudi Arabia, particularly around the holy cities."
            }
          },
          {
            "@type": "Question",
            "name": "Can I book a ride from Jeddah Airport directly to Makkah?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Airport transfers are one of our core services. Our driver will wait for you at the arrivals terminal with a name sign, monitor your flight for delays, and drive you directly to your hotel in Makkah."
            }
          },
          {
            "@type": "Question",
            "name": "Do your vehicles have child seats?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide child seats upon request to ensure the safety of your little ones. Please specify this requirement during the booking process."
            }
          },
          {
            "@type": "Question",
            "name": "Are there any hidden fees in your pricing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. We believe in complete transparency. The price you are quoted at the time of booking is the final price, inclusive of all taxes and standard tolls."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className={styles.pageContainer}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <HeroSection />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <WhyChooseUs />
      <CompanyStatistics />
      <MeetOurTeam />
      <FleetPreview />
      <SafetyCommitment />
      <ServiceAreas />
      <CustomerTestimonials />
      <AwardsCertifications />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
