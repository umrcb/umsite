import { VehicleData } from '@/data/vehicles';
import { Star } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';

export default function CustomerReviews({ vehicle }: { vehicle: VehicleData }) {
  if (!vehicle.testimonials || vehicle.testimonials.length === 0) return null;

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container max-w-[1320px] mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-poppins text-[#0F172A] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[#475569] font-inter text-lg max-w-2xl mx-auto">
              Real reviews from pilgrims and travelers who experienced the {vehicle.name}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
            {vehicle.testimonials.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-[20px] shadow-sm border border-[#E2E8F0] flex flex-col">
                <div className="flex text-[#C9A227] mb-4 gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#C9A227]" />
                  ))}
                </div>
                <p className="text-[#0F172A] font-medium font-inter mb-6 italic flex-grow">
                  "{review.text}"
                </p>
                <div className="mt-auto border-t border-[#E2E8F0] pt-4">
                  <div className="font-bold font-poppins text-[#0F172A]">{review.name}</div>
                  <div className="text-sm text-[#475569] font-inter">{review.country} • {review.route}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
