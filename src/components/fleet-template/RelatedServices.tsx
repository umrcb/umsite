import Link from 'next/link';
import { ArrowRight, Plane, Building2, MapPin } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';

export default function RelatedServices() {
  const services = [
    { title: 'Airport Transfers', icon: Plane, href: '/services/airport-transfers' },
    { title: 'Hotel Transfers', icon: Building2, href: '/services/hotel-transfers' },
    { title: 'Ziyarat Tours', icon: MapPin, href: '/services/ziyarat-tour' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-[1320px] mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-poppins text-[#0F172A] mb-4">
              Premium Services
            </h2>
            <p className="text-[#475569] font-inter text-lg max-w-2xl mx-auto">
              We provide tailored transportation services for every aspect of your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} href={service.href} className="group">
                  <div className="bg-[#F8FAFC] rounded-[20px] p-8 border border-[#E2E8F0] transition-all duration-300 hover:border-primary hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary transition-colors">
                      <Icon size={24} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold font-poppins text-[#0F172A] mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex items-center text-sm font-medium text-[#475569] mt-4 group-hover:text-[#1B5E20] transition-colors">
                      Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
