'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface HeroProps {
    title: string;
    subtitle: string | React.ReactNode;
    bgImage: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    showBookingForm?: boolean;
    children?: React.ReactNode;
    layout?: 'center' | 'two-column';
    badge?: string;
    backgroundChildren?: React.ReactNode;
    breadcrumbs?: React.ReactNode;
    alt?: string;
}

const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    bgImage,
    ctaText,
    ctaLink,
    secondaryCtaText,
    secondaryCtaLink,
    children,
    layout = 'center',
    badge,
    breadcrumbs,
    alt
}) => {
    // If children are provided, we force a layout that accommodates them (usually right-aligned).
    const hasChildren = Boolean(children);

    return (
        <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-black pt-24 pb-16 lg:pt-32 lg:pb-32">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src={bgImage}
                    alt={alt || title}
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-20">
                <div className={cn("flex flex-col lg:flex-row items-center gap-12 lg:gap-8", !hasChildren && "max-w-3xl")}>
                    
                    {/* Main Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={cn("w-full space-y-6 lg:space-y-8", hasChildren ? "lg:w-1/2" : "")}
                    >
                        {breadcrumbs && (
                            <div className="mb-4 text-gray-300">
                                {breadcrumbs}
                            </div>
                        )}

                        {/* Badge */}
                        {badge && (
                            <div className="max-md:sr-only inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-sm font-medium text-white">{badge}</span>
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-[800] text-white leading-[1.1]">
                            {title}
                        </h1>

                        {/* Subtitle */}
                        <div className="max-md:sr-only text-lg md:text-xl text-gray-200 max-w-xl font-normal leading-relaxed">
                            {subtitle}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-row gap-3 sm:gap-4 pt-4 w-full">
                            {ctaText && ctaLink && (
                                <Link href={ctaLink} className="btn-primary flex-1 py-3 px-2 sm:py-4 sm:px-8 text-sm sm:text-lg inline-flex items-center justify-center text-center hover:scale-105 transition-transform duration-300">
                                    <span className="truncate">{ctaText}</span>
                                    <ArrowRight className="ml-1.5 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                </Link>
                            )}
                            {secondaryCtaText && secondaryCtaLink && (
                                <Link href={secondaryCtaLink} className="bg-white/10 hover:bg-white/20 flex-1 text-white font-semibold rounded-lg border border-white/20 py-3 px-2 sm:py-4 sm:px-8 text-sm sm:text-lg inline-flex items-center justify-center transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                                    <span className="truncate">{secondaryCtaText}</span>
                                </Link>
                            )}
                        </div>
                    </motion.div>

                    {/* Optional Children Container (e.g. Booking Form) */}
                    {hasChildren && (
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="w-full lg:w-1/2 relative mt-10 lg:mt-0 max-w-md mx-auto lg:ml-auto"
                        >
                            {children}
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce pointer-events-none"
            >
                <ChevronDown className="w-8 h-8" />
            </motion.div>
        </section>
    );
};

export default Hero;
