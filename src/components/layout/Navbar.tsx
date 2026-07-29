'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useMobileMenu } from '@/context/MobileMenuContext';
import GlassButton from '@/components/ui/GlassButton';
import { getWhatsAppLink } from '@/lib/whatsapp';

const WhatsappIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function Navbar() {
    const pathname = usePathname();
    const { isMenuOpen, setIsMenuOpen, toggleMenu } = useMobileMenu();
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Auto-close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname, setIsMenuOpen]);

    const links = [
        { href: '/', label: 'Home' },
        { 
            href: '/services', 
            label: 'Services',
            dropdown: [
                { href: '/services/jeddah-airport-transfer', label: 'Jeddah Airport Transfer' },
                { href: '/services/madinah-airport-transfer', label: 'Madinah Airport Transfer' },
                { href: '/services/makkah-madinah-taxi', label: 'Makkah to Madinah Taxi' },
                { href: '/services/hotel-transfers', label: 'Hotel Transfers' },
                { href: '/services/intercity-transfer', label: 'Intercity Transfers' },
            ]
        },
        { 
            href: '/fleet', 
            label: 'Fleet',
            dropdown: [
                { href: '/fleet/gmc-yukon', label: 'GMC Yukon (VIP)' },
                { href: '/fleet/toyota-hiace', label: 'Toyota Hiace' },
                { href: '/fleet/hyundai-staria', label: 'Hyundai Staria' },
                { href: '/fleet/hyundai-h1', label: 'Hyundai H1 / Starex' },
                { href: '/fleet/toyota-coaster', label: 'Toyota Coaster' },
                { href: '/fleet/toyota-camry', label: 'Toyota Camry' }
            ]
        },
        { href: '/pricing', label: 'Pricing' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    const isHomePage = pathname === '/';
    const isBookingPage = pathname?.startsWith('/booking');
    const showDarkNav = scrolled || isMenuOpen || isBookingPage;
    // Use dark text when the navbar has a solid white background (scrolled or menu open or booking page)
    const useDarkText = showDarkNav;

    const whatsappUrl = getWhatsAppLink("Hello! I would like to inquire about Umrah Cabs.");

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${mounted && showDarkNav
                ? 'bg-white/90 backdrop-blur-md border-b border-white/20 shadow-sm py-3'
                : 'bg-transparent py-5'
                } ${isMenuOpen ? 'bg-white' : ''}`}
        >
            <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between relative z-10">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="flex flex-col">
                        <span className={`text-xl lg:text-3xl font-bold font-poppins leading-none tracking-tight transition-colors duration-300 flex items-center gap-2 ${useDarkText ? 'text-slate-900' : 'text-white'}`}>
                            <span>Umrah <span className="text-primary">Cabs</span></span>
                        </span>
                        <span className={`text-[0.65rem] lg:text-xs font-bold tracking-[0.2em] uppercase leading-none mt-1 transition-colors duration-300 ${useDarkText ? 'text-slate-500' : 'text-white/80'}`}>
                            Premium Services
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-8">
                    {links.map((link) => (
                        link.dropdown ? (
                            <div key={link.href} className="relative group">
                                <Link
                                    href={link.href}
                                    className={`relative text-sm font-medium transition-all duration-300 py-2 flex items-center gap-1 ${mounted && (pathname === link.href || pathname.startsWith(link.href + '/'))
                                        ? 'text-primary font-bold'
                                        : (useDarkText ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white')
                                        }`}
                                >
                                    {link.label}
                                    <ChevronDown size={14} className="ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${mounted && (pathname === link.href || pathname.startsWith(link.href + '/')) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                                </Link>
                                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2">
                                        {link.dropdown.map(sublink => (
                                            <Link
                                                key={sublink.href}
                                                href={sublink.href}
                                                className="block px-5 py-3 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 font-medium transition-colors"
                                            >
                                                {sublink.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-medium transition-all duration-300 py-2 flex items-center gap-1 ${mounted && pathname === link.href
                                    ? 'text-primary font-bold'
                                    : (useDarkText ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white')
                                    }`}
                            >
                                {link.label}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${mounted && pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                            </Link>
                        )
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="hidden xl:flex items-center gap-4">
                    <a 
                        href={whatsappUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn-secondary"
                    >
                        <WhatsappIcon size={18} className="mr-2" />
                        WhatsApp
                    </a>
                    <Link
                        href="/booking"
                        className="btn-primary"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`xl:hidden p-2 transition-colors relative z-50 ${useDarkText ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary'}`}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 xl:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Sidebar Drawer */}
            <div
                className={`fixed top-0 right-0 h-[100dvh] w-[85%] max-w-sm bg-white shadow-2xl z-40 transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) xl:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
            >
                <div className="relative flex items-center justify-between p-6 border-b border-border/50">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-slate-900 font-poppins flex items-center gap-1.5">Umrah <span className="text-primary">Cabs</span></span>
                            <span className="text-[0.6rem] font-bold text-slate-500 tracking-widest uppercase">Premium Services</span>
                        </div>
                    </Link>
                </div>

                <div className="relative flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
                    {links.map((link) => (
                        link.dropdown ? (
                            <div key={link.href} className="flex flex-col gap-1">
                                <Link
                                    href={link.href}
                                    className={`px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200 ${mounted && (pathname === link.href || pathname.startsWith(link.href + '/'))
                                        ? 'bg-primary/10 text-primary font-bold'
                                        : 'text-foreground/80 hover:text-foreground hover:bg-muted/50'
                                        }`}
                                    onClick={() => setTimeout(() => setIsMenuOpen(false), 150)}
                                >
                                    {link.label}
                                </Link>
                                <div className="pl-4 flex flex-col gap-1 border-l-2 border-slate-100 ml-6 my-1">
                                    {link.dropdown.map(sublink => (
                                        <Link
                                            key={sublink.href}
                                            href={sublink.href}
                                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${mounted && pathname === sublink.href
                                                ? 'text-primary font-bold bg-primary/5'
                                                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                                                }`}
                                            onClick={() => setTimeout(() => setIsMenuOpen(false), 150)}
                                        >
                                            {sublink.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200 ${mounted && pathname === link.href
                                    ? 'bg-primary/10 text-primary font-bold'
                                    : 'text-foreground/80 hover:text-foreground hover:bg-muted/50'
                                    }`}
                                onClick={() => setTimeout(() => setIsMenuOpen(false), 150)}
                            >
                                {link.label}
                            </Link>
                        )
                    ))}
                </div>

                <div className="relative p-6 border-t border-border/50 bg-muted/20 flex flex-col gap-3">
                    <a 
                        href={whatsappUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn-secondary w-full"
                        onClick={() => setTimeout(() => setIsMenuOpen(false), 150)}
                    >
                        <WhatsappIcon size={20} className="mr-2" />
                        WhatsApp Us
                    </a>
                    <Link
                        href="/booking"
                        className="btn-primary w-full"
                        onClick={() => setTimeout(() => setIsMenuOpen(false), 150)}
                    >
                        Book Your Ride
                    </Link>
                </div>
            </div>
        </nav>
    );
}
