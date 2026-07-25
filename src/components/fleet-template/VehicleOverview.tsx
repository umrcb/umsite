import { VehicleData } from '@/data/vehicles';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';

export default function VehicleOverview({ vehicle }: { vehicle: VehicleData }) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold font-poppins text-[#0F172A] leading-tight mb-6">
                Experience the <span className="text-primary">{vehicle.name}</span>
              </h2>
              
              <div className="space-y-6 text-lg text-[#475569] font-inter mb-10">
                <p>
                  The {vehicle.name} is the perfect choice for your journey in Saudi Arabia. 
                  Designed to offer exceptional comfort and reliability, it sets the standard for premium transportation whether you are traveling for Umrah, Hajj, or corporate needs.
                </p>
                <p>
                  With ample space for up to {vehicle.passengers} passengers and {vehicle.luggage} pieces of luggage, 
                  you can relax knowing that both you and your belongings are well taken care of by our professional chauffeurs.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold font-poppins text-[#0F172A] mb-4">Ideal For:</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {vehicle.idealFor.map((useCase, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={16} className="text-primary" />
                      </div>
                      <span className="text-[#0F172A] font-medium font-inter">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <FadeIn direction="right">
              <div className="relative h-[400px] md:h-[500px] rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <Image 
                  src={vehicle.gallery[1] || vehicle.heroImage}
                  alt={`${vehicle.name} Interior or Side View`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gold/10 rounded-full blur-[60px] -z-10" />
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
