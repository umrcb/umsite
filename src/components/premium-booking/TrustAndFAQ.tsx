'use client';

import React, { useState } from 'react';
import { Shield, Clock, CreditCard, Star, ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';

const trustFeatures = [
    { icon: Shield, title: 'Licensed Drivers', desc: 'Professional and vetted' },
    { icon: Clock, title: '24/7 Support', desc: 'Always here to help' },
    { icon: CreditCard, title: 'Secure Payments', desc: 'Encrypted transactions' },
    { icon: Star, title: 'Luxury Fleet', desc: 'Premium vehicles' },
];

const faqs = [
    { q: 'Can I modify my booking?', a: 'Yes, you can modify your booking up to 24 hours before the scheduled pickup time by contacting our support team.' },
    { q: 'Can I cancel?', a: 'Free cancellation is available up to 48 hours before the trip. Please check our cancellation policy for more details.' },
    { q: 'How do I pay?', a: 'We accept Cash to Driver, Visa, Mastercard, Apple Pay, Google Pay, and Bank Transfers.' },
    { q: 'Are child seats available?', a: 'Yes, child seats can be requested during the passenger information step at no extra cost.' },
    { q: 'Do you monitor flights?', a: 'Yes, we monitor all flight arrivals. If your flight is delayed, your driver will adjust the pickup time accordingly.' },
    { q: 'Will I receive confirmation?', a: 'You will receive an instant confirmation email with your booking reference, followed by driver details via WhatsApp.' },
];

export default function TrustAndFAQ() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="bg-white">
            
            {/* Trust Section */}
            <div className="border-t border-b border-slate-100 bg-slate-50 py-16">
                <div className="container mx-auto px-4 max-w-[1320px]">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {trustFeatures.map((tf, i) => {
                            const Icon = tf.icon;
                            return (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                                        <Icon size={28} />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">{tf.title}</h4>
                                    <p className="text-sm text-slate-500">{tf.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-black text-slate-900 mb-2 text-center">Frequently Asked Questions</h2>
                    <p className="text-slate-500 mb-12 text-center">Find answers to common questions about our premium transport service.</p>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors text-left"
                                >
                                    <span className="font-bold text-slate-900">{faq.q}</span>
                                    {openFaq === i ? <ChevronUp className="text-emerald-600" size={20} /> : <ChevronDown className="text-slate-400" size={20} />}
                                </button>
                                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-slate-500 leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="bg-slate-900 py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                </div>
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Need Help Completing Your Booking?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://wa.me/966500000000" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-lg">
                            <MessageCircle size={20} /> Chat on WhatsApp
                        </a>
                        <a href="tel:+966500000000" className="px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 border border-slate-700 text-white hover:bg-slate-800 transition-colors">
                            <Phone size={20} /> Call Now
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}
