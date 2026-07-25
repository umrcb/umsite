'use client';
import { useState } from 'react';
import { VehicleData } from '@/data/vehicles';
import { ChevronDown } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';

export default function VehicleFAQ({ vehicle }: { vehicle: VehicleData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!vehicle.faqs || vehicle.faqs.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-[800px] mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-poppins text-[#0F172A] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#475569] font-inter text-lg">
              Everything you need to know about booking the {vehicle.name}.
            </p>
          </div>

          <div className="space-y-4">
            {vehicle.faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-[#E2E8F0] rounded-[16px] overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-[#F8FAFC] transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold font-poppins text-[#0F172A] text-lg pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-primary transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div 
                  className={`px-6 text-[#475569] font-inter leading-relaxed overflow-hidden transition-all duration-300 ${openIndex === index ? 'py-5 border-t border-[#E2E8F0]' : 'max-h-0'}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
