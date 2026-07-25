import { VehicleData } from '@/data/vehicles';
import Link from 'next/link';
import { getWhatsAppLink } from '@/lib/whatsapp';
import FadeIn from '@/components/common/FadeIn';

export default function FinalCTA({ vehicle }: { vehicle: VehicleData }) {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      
      <div className="container max-w-[960px] mx-auto px-4 md:px-8 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-[40px] md:text-[56px] font-bold font-poppins text-white mb-6 leading-tight">
            Ready to Book the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#C9A227]">
              {vehicle.name}?
            </span>
          </h2>
          <p className="text-xl text-slate-300 font-inter mb-12 max-w-2xl mx-auto leading-relaxed">
            Book your journey today with a professional chauffeur, luxury comfort, and transparent pricing. 
            Experience the finest {vehicle.luxuryLevel.toLowerCase()} transport in Saudi Arabia.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <Link 
              href="/booking" 
              className="w-full sm:w-auto bg-primary hover:bg-[#1B5E20] text-white px-10 py-5 rounded-[14px] font-semibold text-lg transition-all shadow-[0_0_40px_rgba(46,139,87,0.3)] hover:shadow-[0_0_60px_rgba(46,139,87,0.5)]"
            >
              Book Now Online
            </Link>
            <a 
              href={getWhatsAppLink(`Salam, I am ready to book the ${vehicle.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-[14px] font-semibold text-lg transition-all backdrop-blur-md group"
            >
              <i className="fab fa-whatsapp text-2xl text-[#22c55e] group-hover:scale-110 transition-transform"></i>
              Book via WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
