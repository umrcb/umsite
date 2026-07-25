import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Star } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';
import { VehicleData } from '@/data/vehicles';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function PremiumHero({ vehicle }: { vehicle: VehicleData }) {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center bg-[#F8FAFC] overflow-hidden pt-24 pb-12">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="container max-w-[1320px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center max-w-2xl">
            <FadeIn>
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-sm text-[#475569] mb-8 font-inter">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight size={16} />
                <span className="text-[#0F172A] font-medium">{vehicle.name}</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/20 text-[#C9A227] text-sm font-semibold mb-6">
                <Star size={16} className="fill-[#C9A227] text-[#C9A227]" />
                {vehicle.badge}
              </div>

              {/* Title & Description */}
              <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold font-poppins text-[#0F172A] leading-tight mb-4">
                {vehicle.name}
              </h1>
              <p className="text-xl md:text-2xl text-[#475569] font-inter mb-10">
                {vehicle.shortDescription}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 mb-12">
                <div className="flex items-center gap-2 text-[#0F172A] font-medium">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShieldCheck size={18} className="text-primary" />
                  </div>
                  Fully Insured
                </div>
                <div className="flex items-center gap-2 text-[#0F172A] font-medium">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star size={18} className="text-primary" />
                  </div>
                  Professional Chauffeur
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/booking" 
                  className="bg-primary hover:bg-[#1B5E20] text-white px-8 py-4 rounded-[14px] font-semibold text-lg transition-colors flex items-center justify-center text-center shadow-[0_10px_30px_rgba(46,139,87,0.2)]"
                >
                  Book This Vehicle
                </Link>
                <a 
                  href={getWhatsAppLink(`Salam, I would like to book the ${vehicle.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-[14px] font-semibold text-lg transition-colors flex items-center justify-center text-center gap-2"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  WhatsApp
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Content (Image) */}
          <div className="order-1 lg:order-2 relative h-[350px] sm:h-[450px] lg:h-[600px] w-full rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <FadeIn direction="right" className="w-full h-full">
              <Image 
                src={vehicle.heroImage}
                alt={`${vehicle.name} Luxury Chauffeur`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
