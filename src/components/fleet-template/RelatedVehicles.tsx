import { VehicleData, vehicles } from '@/data/vehicles';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Briefcase, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';

export default function RelatedVehicles({ vehicle }: { vehicle: VehicleData }) {
  if (!vehicle.relatedVehicles || vehicle.relatedVehicles.length === 0) return null;

  const related = vehicle.relatedVehicles
    .map(slug => vehicles.find(v => v.slug === slug))
    .filter((v): v is VehicleData => v !== undefined)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="container max-w-[1320px] mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-[32px] md:text-[40px] font-bold font-poppins text-[#0F172A] mb-4">
                Other Vehicles
              </h2>
              <p className="text-[#475569] font-inter text-lg max-w-xl">
                Explore similar vehicles in our luxury fleet that might suit your needs.
              </p>
            </div>
            <Link 
              href="/fleet" 
              className="inline-flex items-center text-primary font-semibold font-inter hover:text-[#1B5E20] transition-colors"
            >
              View Full Fleet <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {related.map((v, index) => (
              <Link href={`/fleet/${v.slug}`} key={index} className="group block">
                <div className="bg-white rounded-[20px] overflow-hidden border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-hover:border-primary/50">
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={v.heroImage} 
                      alt={v.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0F172A]">
                      {v.luxuryLevel}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-poppins text-[#0F172A] mb-2 group-hover:text-primary transition-colors">
                      {v.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-[#475569] font-inter mb-6">
                      <span className="flex items-center gap-1.5"><Users size={16} className="text-primary"/> {v.passengers}</span>
                      <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-primary"/> {v.luggage}</span>
                    </div>
                    <div className="font-semibold text-primary font-inter flex items-center">
                      View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
