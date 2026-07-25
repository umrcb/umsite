import { VehicleData } from '@/data/vehicles';
import { Users, Briefcase, Snowflake, Wifi, Shield, Settings, Droplet } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';

export default function QuickSpecifications({ vehicle }: { vehicle: VehicleData }) {
  const specs = [
    { icon: Users, label: 'Passengers', value: `Up to ${vehicle.passengers}` },
    { icon: Briefcase, label: 'Luggage', value: `${vehicle.luggage} Bags` },
    { icon: Snowflake, label: 'Climate', value: vehicle.airConditioning },
    { icon: Settings, label: 'Transmission', value: vehicle.transmission },
    { icon: Droplet, label: 'Fuel', value: vehicle.fuel },
    { icon: Shield, label: 'Driver', value: 'Included' },
  ];

  return (
    <section className="py-12 bg-white border-y border-[#E2E8F0]">
      <div className="container max-w-[1320px] mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {specs.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-[20px] hover:bg-[#F8FAFC] transition-colors border border-transparent hover:border-[#E2E8F0]">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <Icon size={24} />
                  </div>
                  <span className="text-sm font-medium text-[#475569] mb-1 font-inter">{spec.label}</span>
                  <span className="text-base font-bold text-[#0F172A] font-poppins">{spec.value}</span>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
