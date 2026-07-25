import { VehicleData } from '@/data/vehicles';
import FadeIn from '@/components/common/FadeIn';

export default function PerfectFor({ vehicle }: { vehicle: VehicleData }) {
  if (!vehicle.idealFor || vehicle.idealFor.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-[1320px] mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-poppins text-[#0F172A] mb-4">
              Perfect For Every Occasion
            </h2>
            <p className="text-[#475569] font-inter text-lg max-w-2xl mx-auto">
              The {vehicle.name} is versatile and highly recommended for these travel needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {vehicle.idealFor.map((useCase, index) => (
              <div 
                key={index} 
                className="bg-white border border-[#E2E8F0] shadow-sm px-8 py-4 rounded-[16px] text-[#0F172A] font-medium font-poppins text-lg hover:border-primary hover:shadow-md hover:-translate-y-1 transition-all"
              >
                {useCase}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
