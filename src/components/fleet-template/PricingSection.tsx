import { VehicleData } from '@/data/vehicles';
import Link from 'next/link';
import { Check } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';

export default function PricingSection({ vehicle }: { vehicle: VehicleData }) {
  if (!vehicle.pricing) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-[960px] mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#E2E8F0] overflow-hidden flex flex-col md:flex-row">
            
            {/* Left/Top Content */}
            <div className="p-8 md:p-12 md:w-3/5 bg-white">
              <h2 className="text-[28px] md:text-[32px] font-bold font-poppins text-[#0F172A] mb-6">
                Transparent Pricing
              </h2>
              <p className="text-[#475569] font-inter text-lg mb-8">
                Enjoy premium service with zero hidden fees. You only pay what you are quoted.
              </p>
              
              <ul className="space-y-4">
                {vehicle.pricing.included.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check size={16} className="text-primary" />
                    </div>
                    <span className="text-[#0F172A] font-medium font-inter">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right/Bottom Content */}
            <div className="p-8 md:p-12 md:w-2/5 bg-[#F8FAFC] flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#E2E8F0]">
              <div className="text-sm font-medium text-[#475569] mb-2 uppercase tracking-wider text-center">Starting From</div>
              <div className="text-center mb-8">
                <span className="text-[48px] font-bold font-poppins text-[#0F172A]">{vehicle.pricing.currency} {vehicle.pricing.startingPrice}</span>
                <span className="text-[#475569] font-medium ml-1">/ route</span>
              </div>
              
              <Link 
                href="/booking" 
                className="bg-primary hover:bg-[#1B5E20] text-white py-4 rounded-[14px] font-semibold text-lg transition-colors flex items-center justify-center text-center shadow-[0_10px_30px_rgba(46,139,87,0.2)] mb-4"
              >
                Book Now
              </Link>
              <p className="text-center text-sm text-[#475569]">No prepayment required</p>
            </div>
            
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
