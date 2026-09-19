import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/about_hero_bg.jpg"
          alt="Premium Umrah journey to Makkah"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20 pt-24 pb-16 lg:pt-32 lg:pb-32">
        <div className="flex flex-col items-start gap-8 max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm max-md:sr-only text-white">
            <Star size={16} fill="#C9A227" color="#C9A227" />
            <span className="text-sm font-medium">Trusted by Thousands of Pilgrims Since Our Journey Began</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-[800] text-white leading-[1.1]">
            More Than Transportation — We Deliver <span className="text-primary">Peace of Mind</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-xl font-normal leading-relaxed max-md:sr-only">
            Umrah Cabs is committed to providing safe, reliable, and premium transportation for pilgrims across Makkah, Madinah, Jeddah, Taif, and surrounding cities. Your spiritual journey deserves the highest standard of comfort.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/booking" className="btn-primary inline-flex items-center gap-2 py-4 px-8 text-lg hover:scale-105 transition-transform duration-300 rounded-lg text-white font-semibold">
              Book Your Ride <ArrowRight size={20} />
            </Link>
            <Link href="/fleet" className="inline-flex items-center gap-2 py-4 px-8 text-lg hover:scale-105 transition-transform duration-300 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md border border-white/20">
              View Our Fleet
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
