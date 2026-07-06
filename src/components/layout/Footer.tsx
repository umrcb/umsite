'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, Heart } from 'lucide-react';
import { useSettings } from '@/context/SettingsContext';

export default function Footer() {
    const { settings } = useSettings();

    if (!settings) return null;

    const { contact, general } = settings;

    // Split Quick Links into two columns for the exact design look
    const quickLinksCol1 = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Fleet", href: "/fleet" },
    ];

    const quickLinksCol2 = [
        { label: "Pricing", href: "/pricing" },
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
    ];

    const servicesCol1 = [
        { label: "Airport Transfers", href: "/services/jeddah-airport-transfer" },
        { label: "Umrah Transportation", href: "/services/makkah-madinah-taxi" },
        { label: "Ziyarat Tours", href: "/services/ziyarat-tours" },
        { label: "City Transfers", href: "/services" },
    ];

    const servicesCol2 = [
        { label: "Long Distance", href: "/services" },
        { label: "Corporate Travel", href: "/services" },
        { label: "Group Bookings", href: "/fleet/toyota-coaster" },
    ];

    return (
        <footer className="relative bg-[#F9FAFB] font-sans">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 xl:gap-6">
                    
                    {/* Column 1: Brand & Socials (3 cols) */}
                    <div className="xl:col-span-3 space-y-4">
                        <Link href="/" className="inline-block transition-transform duration-300 hover:opacity-90">
                            <Image
                                src="/umrah-cabs-logo-v2.svg" // Replace with exact logo if needed
                                alt={general.siteName}
                                width={240}
                                height={80}
                                className="object-contain mix-blend-multiply"
                            />
                        </Link>
                        <p className="text-[#64748B] text-sm leading-relaxed max-w-[280px]">
                            Premium Umrah taxi services in Makkah, Madinah, Jeddah & across Saudi Arabia.
                        </p>
                        
                        <div className="flex gap-3">
                            <a href={contact.social?.facebook || "#"} className="w-9 h-9 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#115E39] hover:border-[#115E39] transition-colors shadow-sm">
                                <Facebook size={16} />
                            </a>
                            <a href={contact.social?.instagram || "#"} className="w-9 h-9 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#115E39] hover:border-[#115E39] transition-colors shadow-sm">
                                <Instagram size={16} />
                            </a>
                            <a href={`https://wa.me/${(contact.phone || '').replace(/\D/g, '')}`} className="w-9 h-9 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#115E39] hover:border-[#115E39] transition-colors shadow-sm">
                                <Phone size={16} /> {/* WhatsApp alternative icon */}
                            </a>
                            <a href={contact.social?.youtube || "#"} className="w-9 h-9 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#115E39] hover:border-[#115E39] transition-colors shadow-sm">
                                <Youtube size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links (3 cols) */}
                    <div className="xl:col-span-3">
                        <h4 className="text-base font-bold text-[#0F172A] mb-4 tracking-wide">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            <div className="space-y-2">
                                {quickLinksCol1.map((link) => (
                                    <Link key={link.label} href={link.href} className="block text-sm text-[#475569] hover:text-[#115E39] transition-colors font-medium">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <div className="space-y-2">
                                {quickLinksCol2.map((link) => (
                                    <Link key={link.label} href={link.href} className="block text-sm text-[#475569] hover:text-[#115E39] transition-colors font-medium">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Our Services (3 cols) */}
                    <div className="xl:col-span-3">
                        <h4 className="text-base font-bold text-[#0F172A] mb-4 tracking-wide">Our Services</h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            <div className="space-y-2">
                                {servicesCol1.map((link) => (
                                    <Link key={link.label} href={link.href} className="block text-sm text-[#475569] hover:text-[#115E39] transition-colors font-medium">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <div className="space-y-2">
                                {servicesCol2.map((link) => (
                                    <Link key={link.label} href={link.href} className="block text-sm text-[#475569] hover:text-[#115E39] transition-colors font-medium">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Contact Info (3 cols) */}
                    <div className="xl:col-span-3 space-y-4">
                        <h4 className="text-base font-bold text-[#0F172A] mb-4 tracking-wide">Contact Info</h4>
                        
                        <div className="flex items-center gap-3">
                            <div className="text-[#115E39]">
                                <Phone size={20} className="fill-[#115E39]" />
                            </div>
                            <span className="text-sm text-[#475569] font-medium">+966 50 123 4567</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="text-[#115E39]">
                                <Mail size={20} className="fill-[#115E39]" />
                            </div>
                            <span className="text-sm text-[#475569] font-medium">info@umrahtaxi.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="text-[#115E39]">
                                <MapPin size={20} className="fill-[#115E39]" />
                            </div>
                            <span className="text-sm text-[#475569] font-medium">Makkah, Saudi Arabia</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#115E39] py-3">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
                    <p className="text-white/90">
                        © 2026 Umrah Cabs. All Rights Reserved.
                    </p>
                    
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-white/90 hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="text-white/30">|</span>
                        <Link href="/terms" className="text-white/90 hover:text-white transition-colors">Terms & Conditions</Link>
                    </div>

                    <p className="flex items-center gap-1.5 text-white/90">
                        Designed with <Heart size={12} className="fill-red-500 text-red-500" /> for Pilgrims
                    </p>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a 
                href={`https://wa.me/${(contact.phone || '').replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
                aria-label="Chat on WhatsApp"
            >
                <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            </a>
        </footer>
    );
}
