import dynamic from 'next/dynamic';
import HomeHero from '@/components/home/HomeHero';
import TransportServices from '@/components/home/TransportServices';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FadeIn from '@/components/common/FadeIn';
import { constructMetadata } from '@/lib/metadata';
import { getBaseUrl } from '@/lib/url-utils';
import { ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { CheckCircle2 } from 'lucide-react';

// Consolidated Components
import UnifiedBookingWidget from '@/components/home/UnifiedBookingWidget';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FleetShowcase from '@/components/home/FleetShowcase';
import PilgrimExperiences from '@/components/home/PilgrimExperiences';



export async function generateMetadata() {
  return constructMetadata({
    title: 'Trusted Umrah Taxi Service | Jeddah to Makkah & Madinah',
    description: 'Umrah Cabs offers trusted, affordable, and safe Umrah travel services worldwide. Serving pilgrims with comfort and care with our luxury fleet.',
    canonicalUrl: '/',
  });
}

export default async function Home() {
  const baseUrl = getBaseUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Umrah Cabs",
        "url": baseUrl,
        "logo": `${baseUrl}/umrah-cabs-logo-v2.svg`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+966-54-549-4921",
          "contactType": "customer service",
          "areaServed": "SA",
          "availableLanguage": ["en", "ar"]
        },
        "sameAs": [
          "https://www.facebook.com/UmrahCabs",
          "https://www.instagram.com/UmrahCabs"
        ]
      }
    ]
  };

  return (
    <main className="overflow-x-hidden bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. Unified Booking Widget (Replaces Horizontal Form & Calculator) */}
      <UnifiedBookingWidget />

      {/* 3. Transport Services */}
      <ScrollReveal width="100%">
        <TransportServices />
      </ScrollReveal>

      {/* 4. Why Choose Us (Replaces Features, SafetyPromise, PassengerCare) */}
      <ScrollReveal width="100%">
        <WhyChooseUs />
      </ScrollReveal>



      {/* 6. Fleet Showcase (Replaces Gallery & Carousel) */}
      <ScrollReveal width="100%">
        <FleetShowcase />
      </ScrollReveal>

      {/* 7. Pilgrim Experiences (Replaces Testimonials, Reviews, CustomerGallery) */}
      <ScrollReveal width="100%">
        <PilgrimExperiences />
      </ScrollReveal>

      {/* 9. Final CTA */}
      <section className="relative py-24 bg-[#0F172A] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pattern-grid-fade opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available 24/7
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold font-poppins text-white mb-6 leading-tight">
              Ready for Your <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Spiritual Journey?</span>
            </h2>
            
            <p className="text-xl text-slate-300 font-inter mb-10 max-w-2xl mx-auto leading-relaxed">
              Book your reliable, comfortable, and safe Umrah taxi today. Experience the premium standard of travel with zero prepayment required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a 
                href="/booking" 
                className="btn-primary px-10 py-4 text-lg w-full sm:w-auto shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] transition-shadow"
              >
                Book Your Ride Now
              </a>
              <a 
                href={getWhatsAppLink("Salam, I would like to make an inquiry.")}
                target="_blank"
                rel="noopener noreferrer" 
                className="group flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-md w-full sm:w-auto"
              >
                <i className="fab fa-whatsapp text-2xl text-green-400 group-hover:scale-110 transition-transform"></i>
                Contact via WhatsApp
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-sm font-medium text-slate-400">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-primary" />
                    </div>
                    No Hidden Fees
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-primary" />
                    </div>
                    Pay Upon Arrival
                </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
