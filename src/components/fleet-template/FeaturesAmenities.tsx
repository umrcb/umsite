import { VehicleData } from '@/data/vehicles';
import { 
  Snowflake, Check, Wifi, Plug, MonitorSmartphone, BatteryCharging, 
  Wind, Navigation, Droplet, ShieldCheck, UserCheck 
} from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';

const getAmenityIcon = (amenity: string) => {
  const name = amenity.toLowerCase();
  if (name.includes('air conditioning')) return Snowflake;
  if (name.includes('wifi')) return Wifi;
  if (name.includes('usb') || name.includes('charging')) return BatteryCharging;
  if (name.includes('entertainment')) return MonitorSmartphone;
  if (name.includes('tinted') || name.includes('panoramic')) return Wind;
  if (name.includes('gps')) return Navigation;
  if (name.includes('water')) return Droplet;
  if (name.includes('sanitized')) return ShieldCheck;
  if (name.includes('driver')) return UserCheck;
  return Check;
};

export default function FeaturesAmenities({ vehicle }: { vehicle: VehicleData }) {
  if (!vehicle.amenities || vehicle.amenities.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-[1320px] mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-poppins text-[#0F172A] mb-4">
              Premium Features & Amenities
            </h2>
            <p className="text-[#475569] font-inter text-lg max-w-2xl mx-auto">
              Every {vehicle.name} comes fully equipped to ensure your journey is safe, comfortable, and luxurious.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {vehicle.amenities.map((amenity, index) => {
              const Icon = getAmenityIcon(amenity);
              return (
                <div 
                  key={index} 
                  className="bg-[#F8FAFC] p-6 rounded-[20px] flex flex-col items-center text-center group hover:bg-primary transition-colors duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#1B5E20] transition-colors">
                    <Icon size={28} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[#0F172A] font-bold font-poppins group-hover:text-white transition-colors">
                    {amenity}
                  </h3>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
