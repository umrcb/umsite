'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useMobileMenu } from '@/context/MobileMenuContext';
import GlassButton from '@/components/ui/GlassButton';
import { getWhatsAppLink } from '@/lib/whatsapp';

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
        { href: '/services', label: 'Services' },
        { href: '/fleet', label: 'Fleet' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    const showDarkNav = scrolled || isMenuOpen;
    const isHomePage = pathname === '/';
    const useDarkText = showDarkNav || isHomePage || pathname === '/booking';

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
                    <div className="relative flex items-center">
                        <div className={`transition-all duration-500 ease-out ${showDarkNav ? 'w-12 h-12 lg:w-16 lg:h-16' : 'w-16 h-16 lg:w-20 lg:h-20'} relative`}>
                            <Image
                                src="/umrah-cabs-logo-v2.svg"
                                alt="Umrah Cabs"
                                fill
                                className="object-contain drop-shadow-md mix-blend-multiply"
                                priority
                                sizes="(max-width: 768px) 48px, 64px"
                            />
                        </div>
                        <div className={`flex flex-col ml-3 transition-opacity duration-300 ${showDarkNav ? 'opacity-100' : 'opacity-100'}`}>
                            <span className={`text-xl lg:text-2xl font-bold font-poppins leading-none tracking-tight transition-colors duration-300 flex items-center gap-2 ${useDarkText ? 'text-slate-900' : 'text-white'}`}>
                                <span>Umrah <span className="text-primary">Cabs</span></span>
                            </span>
                            <span className={`text-[0.65rem] lg:text-xs font-bold tracking-[0.2em] uppercase leading-none mt-1 transition-colors duration-300 ${useDarkText ? 'text-slate-500' : 'text-white/80'}`}>
                                Premium Services
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-8">
                    {links.map((link) => (
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
                        <MessageCircle size={18} className="mr-2" />
                        WhatsApp
                    </a>
                    <Link
                        href="/booking"
                        className="btn-gold"
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
                        <div className="relative w-10 h-10">
                            <Image
                                src="/umrah-cabs-logo-v2.svg"
                                alt="Umrah Cabs"
                                fill
                                className="object-contain"
                                sizes="40px"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-slate-900 font-poppins flex items-center gap-1.5">Umrah <span className="text-primary">Cabs</span></span>
                            <span className="text-[0.6rem] font-bold text-slate-500 tracking-widest uppercase">Premium Services</span>
                        </div>
                    </Link>
                </div>

                <div className="relative flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
                    {links.map((link) => (
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
                        <MessageCircle size={20} className="mr-2" />
                        WhatsApp Us
                    </a>
                    <Link
                        href="/booking"
                        className="btn-gold w-full"
                        onClick={() => setTimeout(() => setIsMenuOpen(false), 150)}
                    >
                        Book Your Ride
                    </Link>
                </div>
            </div>
        </nav>
    );
}
