import { VehicleData } from '@/data/vehicles';
import { 
  Shield, Star, Sofa, ShieldCheck, DoorOpen, Eye, 
  Crown, Fuel, Briefcase, Wallet, Users, Maximize, Waves 
} from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';

const getFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case 'Shield': return Shield;
    case 'Star': return Star;
    case 'Sofa': return Sofa;
    case 'ShieldCheck': return ShieldCheck;
    case 'DoorOpen': return DoorOpen;
    case 'Eye': return Eye;
    case 'Crown': return Crown;
    case 'Fuel': return Fuel;
    case 'Briefcase': return Briefcase;
    case 'Wallet': return Wallet;
    case 'Users': return Users;
    case 'Maximize': return Maximize;
    case 'Waves': return Waves;
    default: return Star;
  }
};

export default function WhyChoose({ vehicle }: { vehicle: VehicleData }) {
  if (!vehicle.whyChoose || vehicle.whyChoose.length === 0) return null;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container max-w-[1320px] mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-poppins text-[#0F172A] mb-4">
              Why Choose the {vehicle.name}?
            </h2>
            <p className="text-[#475569] font-inter text-lg max-w-2xl mx-auto">
              Experience the difference with our meticulously maintained {vehicle.name} fleet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {vehicle.whyChoose.map((feature, index) => {
              const Icon = getFeatureIcon(feature.icon);
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-[20px] p-8 border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-primary transition-colors text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                    <Icon size={28} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-[#0F172A] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#475569] font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
