import FadeIn from '@/components/common/FadeIn';

export default function BookingProcess() {
  const steps = [
    { title: 'Choose Vehicle', desc: 'Select your preferred luxury vehicle.' },
    { title: 'Choose Route', desc: 'Select your pickup and drop-off locations.' },
    { title: 'Choose Date', desc: 'Pick your travel date and time.' },
    { title: 'Confirm Booking', desc: 'Review your details and confirm.' },
    { title: 'Driver Assigned', desc: 'Receive your chauffeur details.' },
    { title: 'Journey Begins', desc: 'Enjoy a premium, safe ride.' }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container max-w-[1320px] mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-poppins text-[#0F172A] mb-4">
              Simple Booking Process
            </h2>
            <p className="text-[#475569] font-inter text-lg max-w-2xl mx-auto">
              Book your ride in just a few clicks. No prepayment required.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-primary/20 z-0"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4 shadow-[0_0_15px_rgba(46,139,87,0.3)]">
                  {index + 1}
                </div>
                <h3 className="text-[#0F172A] font-bold font-poppins mb-2">{step.title}</h3>
                <p className="text-[#475569] text-sm font-inter">{step.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
