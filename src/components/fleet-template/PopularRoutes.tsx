import { VehicleData } from '@/data/vehicles';
import Link from 'next/link';
import { Clock, Route as RouteIcon, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';

export default function PopularRoutes({ vehicle }: { vehicle: VehicleData }) {
  if (!vehicle.routes || vehicle.routes.length === 0) return null;

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container max-w-[1320px] mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-poppins text-[#0F172A] mb-4">
              Popular Routes
            </h2>
            <p className="text-[#475569] font-inter text-lg max-w-2xl mx-auto">
              Top requested journeys for the {vehicle.name}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {vehicle.routes.map((route, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[20px] p-8 border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all relative overflow-hidden group flex flex-col"
              >
                {route.recommended && (
                  <div className="absolute top-0 right-0 bg-[#C9A227] text-white text-xs font-bold px-4 py-1 rounded-bl-[14px]">
                    Recommended
                  </div>
                )}
                
                <h3 className="text-xl font-bold font-poppins text-[#0F172A] mb-6 pr-6">
                  {route.name}
                </h3>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-3 text-[#475569] font-inter">
                    <Clock size={20} className="text-primary" />
                    <span>Est. Time: {route.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#475569] font-inter">
                    <RouteIcon size={20} className="text-primary" />
                    <span>Distance: {route.distance}</span>
                  </div>
                </div>

                <Link 
                  href="/booking" 
                  className="inline-flex items-center text-primary font-semibold font-inter group-hover:text-[#1B5E20] transition-colors mt-auto"
                >
                  Book this route <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
