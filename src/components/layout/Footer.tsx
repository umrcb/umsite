'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSettings } from '@/context/SettingsContext';
import { 
    Facebook, Instagram, Youtube, Twitter, Linkedin, 
    MapPin, Phone, Mail, Clock, ChevronDown, 
    ShieldCheck, CheckCircle2, CreditCard, Lock
} from 'lucide-react';

const MobileAccordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-[#E2E8F0] lg:border-none lg:pb-0 pb-4">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="flex justify-between items-center w-full lg:hidden py-4 text-left font-bold text-[#0F172A]"
            >
                {title}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <h4 className="hidden lg:block text-lg font-bold text-[#0F172A] mb-6 tracking-wide">{title}</h4>
            <div className={`${isOpen ? 'block' : 'hidden'} lg:block space-y-3`}>
                {children}
            </div>
        </div>
    );
};

export default function Footer() {
    const { settings } = useSettings();
    if (!settings) return null;
    const { contact, general } = settings;

    const whatsappNumber = contact.phone || '+966545494921';
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;

    return (
        <footer className="relative font-sans bg-white pt-10">
            {/* SECTION 1 — Premium CTA (Above Footer) */}
            <section className="bg-[#115E39] text-white py-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-islamic.png')] bg-repeat" />
                <div className="container mx-auto max-w-[1320px] relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="max-w-2xl text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-4">Ready for a Comfortable Journey Across Saudi Arabia?</h2>
                        <p className="text-white/90 text-lg leading-relaxed">Book your airport transfer, intercity taxi, hotel transfer, or Umrah transportation with professional chauffeurs and luxury vehicles.</p>
                        
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#C9A227] w-5 h-5"/> <span>Licensed Drivers</span></div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#C9A227] w-5 h-5"/> <span>Fixed Pricing</span></div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#C9A227] w-5 h-5"/> <span>24/7 Support</span></div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#C9A227] w-5 h-5"/> <span>Luxury Fleet</span></div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                        <Link href="/book" className="px-8 py-4 bg-[#C9A227] text-white font-bold rounded-lg hover:bg-[#b08d22] transition-colors text-center shadow-lg whitespace-nowrap">
                            Book Now
                        </Link>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-[#115E39] font-bold rounded-lg hover:bg-gray-50 transition-colors text-center shadow-lg whitespace-nowrap">
                            WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* MAIN FOOTER */}
            <div className="bg-[#F9FAFB] pt-12 pb-8 px-6 lg:px-8">
                <div className="container mx-auto max-w-[1320px]">
                    
                    {/* SECTION 2 — Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12">
                        
                        {/* Column 1 — Company Information */}
                        <div className="lg:col-span-3 space-y-6">
                            <Link href="/" className="inline-block">
                                <Image
                                    src="/images/logo.png"
                                    alt={general.siteName}
                                    width={240}
                                    height={100}
                                    className="object-contain w-auto h-auto max-w-[200px]"
                                />
                            </Link>
                            <p className="text-[#475569] text-sm leading-relaxed">
                                Umrah Taxi Services provides premium airport transfers, hotel transfers, intercity transportation, and Umrah & Hajj travel across Saudi Arabia with professional chauffeurs and luxury vehicles.
                            </p>
                            
                            <ul className="text-sm text-[#475569] space-y-2 font-medium">
                                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#115E39]" /> Licensed Company</li>
                                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#115E39]" /> Professional Drivers</li>
                                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#115E39]" /> Fixed Pricing</li>
                                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#115E39]" /> 24/7 Customer Support</li>
                            </ul>

                            <div className="flex gap-3 pt-4">
                                <a href={contact.social?.facebook || "#"} aria-label="Facebook" className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#115E39] hover:border-[#115E39] transition-colors shadow-sm"><Facebook size={18} /></a>
                                <a href={contact.social?.instagram || "#"} aria-label="Instagram" className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#115E39] hover:border-[#115E39] transition-colors shadow-sm"><Instagram size={18} /></a>
                                <a href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#115E39] hover:border-[#115E39] transition-colors shadow-sm"><Twitter size={18} /></a>
                                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#115E39] hover:border-[#115E39] transition-colors shadow-sm"><Linkedin size={18} /></a>
                                <a href={contact.social?.youtube || "#"} aria-label="YouTube" className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#115E39] hover:border-[#115E39] transition-colors shadow-sm"><Youtube size={18} /></a>
                            </div>
                        </div>

                        {/* Column 2 — Services */}
                        <div className="lg:col-span-2">
                            <MobileAccordion title="Services">
                                {[
                                    { label: "Airport Transfers", href: "/services/airport-transfers" },
                                    { label: "Jeddah Airport Transfer", href: "/services/jeddah-airport-transfer" },
                                    { label: "Madinah Airport Transfer", href: "/services/madinah-airport-transfer" },
                                    { label: "Hotel Transfers", href: "/services/hotel-transfers" },
                                    { label: "Intercity Transfers", href: "/services/intercity-transfer" },
                                    { label: "VIP Chauffeur", href: "/fleet/gmc-yukon" },
                                    { label: "Umrah Taxi", href: "/services/makkah-madinah-taxi" },
                                    { label: "Hajj Transport", href: "/services/makkah-madinah-taxi" },
                                    { label: "Group Transport", href: "/fleet/toyota-coaster" },
                                    { label: "Ziyarat Tours", href: "/services/intercity-transfer" }
                                ].map((item) => (
                                    <Link key={item.label} href={item.href} className="block text-sm text-[#475569] hover:text-[#115E39] transition-colors">
                                        {item.label}
                                    </Link>
                                ))}
                            </MobileAccordion>
                        </div>

                        {/* Column 3 — Popular Routes */}
                        <div className="lg:col-span-2">
                            <MobileAccordion title="Popular Routes">
                                {[
                                    { label: "Jeddah Airport to Makkah", href: "/services/jeddah-airport-transfer" },
                                    { label: "Jeddah Airport to Madinah", href: "/services/jeddah-airport-transfer" },
                                    { label: "Makkah to Madinah", href: "/services/makkah-madinah-taxi" },
                                    { label: "Madinah to Makkah", href: "/services/makkah-madinah-taxi" },
                                    { label: "Makkah to Taif", href: "/services/intercity-transfer" },
                                    { label: "Taif to Makkah", href: "/services/intercity-transfer" },
                                    { label: "Hotel to Airport", href: "/services/hotel-transfers" },
                                    { label: "Airport to Hotel", href: "/services/airport-transfers" },
                                    { label: "Makkah Ziyarat", href: "/services/intercity-transfer" },
                                    { label: "Madinah Ziyarat", href: "/services/intercity-transfer" }
                                ].map((item) => (
                                    <Link key={item.label} href={item.href} className="block text-sm text-[#475569] hover:text-[#115E39] transition-colors">
                                        {item.label}
                                    </Link>
                                ))}
                            </MobileAccordion>
                        </div>

                        {/* Column 4 — Fleet */}
                        <div className="lg:col-span-2">
                            <MobileAccordion title="Fleet">
                                {[
                                    { label: "Toyota Camry", href: "/fleet/toyota-camry" },
                                    { label: "Toyota Hiace", href: "/fleet/toyota-hiace" },
                                    { label: "Toyota Coaster", href: "/fleet/toyota-coaster" },
                                    { label: "Hyundai Staria", href: "/fleet/hyundai-staria" },
                                    { label: "Hyundai H1", href: "/fleet/hyundai-h1" },
                                    { label: "GMC Yukon", href: "/fleet/gmc-yukon" }
                                ].map((item) => (
                                    <Link key={item.label} href={item.href} className="block text-sm text-[#475569] hover:text-[#115E39] transition-colors">
                                        {item.label}
                                    </Link>
                                ))}
                            </MobileAccordion>
                        </div>

                        {/* Column 5 — Contact */}
                        <div className="lg:col-span-3 lg:pl-4">
                            <h4 className="text-lg font-bold text-[#0F172A] mb-6 tracking-wide hidden lg:block">Contact</h4>
                            <div className="space-y-6">
                                <div className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-[#115E39] shrink-0" />
                                    <div>
                                        <p className="text-sm font-bold text-[#0F172A]">Office</p>
                                        <p className="text-sm text-[#475569]">Makkah<br/>Saudi Arabia</p>
                                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#115E39] hover:underline mt-1 inline-block font-medium">Google Maps Link</a>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <Phone className="w-5 h-5 text-[#115E39] shrink-0" />
                                    <div>
                                        <p className="text-sm font-bold text-[#0F172A]">WhatsApp</p>
                                        <a href={whatsappLink} className="text-sm text-[#475569] hover:text-[#115E39] block">WhatsApp Chat</a>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <Mail className="w-5 h-5 text-[#115E39] shrink-0" />
                                    <div>
                                        <p className="text-sm font-bold text-[#0F172A]">Email</p>
                                        <a href={`mailto:${contact.email}`} className="text-sm text-[#475569] hover:text-[#115E39]">{contact.email}</a>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <Clock className="w-5 h-5 text-[#115E39] shrink-0" />
                                    <div>
                                        <p className="text-sm font-bold text-[#0F172A]">Business Hours</p>
                                        <p className="text-sm text-[#475569]">24/7 Emergency Contact</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* SECTION 8 & 9 — Copyright */}
                    <div className="flex flex-col items-center justify-center gap-6 mt-12 pt-6 border-t border-[#E2E8F0]">
                        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-[#64748B]">
                            <p>© {new Date().getFullYear()} Umrah Taxi Services. All Rights Reserved.</p>
                            <div className="hidden sm:block w-1 h-1 rounded-full bg-[#CBD5E1]" />
                            <div className="flex gap-4">
                                <Link href="/privacy-policy" className="hover:text-[#115E39] transition-colors">Privacy</Link>
                                <Link href="/terms" className="hover:text-[#115E39] transition-colors">Terms</Link>
                                <Link href="/cookies" className="hover:text-[#115E39] transition-colors">Cookies</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
