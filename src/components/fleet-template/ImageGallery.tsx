'use client';

import { useState } from 'react';
import Image from 'next/image';
import { VehicleData } from '@/data/vehicles';
import FadeIn from '@/components/common/FadeIn';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function ImageGallery({ vehicle }: { vehicle: VehicleData }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = vehicle.gallery;

  if (!images || images.length === 0) return null;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container max-w-[1320px] mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[40px] font-bold font-poppins text-[#0F172A] mb-4">
              Vehicle Gallery
            </h2>
            <p className="text-[#475569] font-inter text-lg max-w-2xl mx-auto">
              Explore the premium interior and striking exterior of the {vehicle.name}.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {images.slice(0, 4).map((src, index) => (
              <div 
                key={index} 
                className={`relative cursor-pointer group rounded-[20px] overflow-hidden bg-white shadow-sm ${
                  index === 0 ? 'col-span-2 row-span-2 md:h-[500px] h-[300px]' : 'h-[142px] md:h-[238px]'
                }`}
                onClick={() => openLightbox(index)}
              >
                <Image 
                  src={src} 
                  alt={`${vehicle.name} Gallery Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Maximize2 size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm" onClick={closeLightbox}>
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-6 text-white/70 hover:text-white transition-colors p-2 bg-black/50 rounded-full"
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative w-full max-w-6xl aspect-video mx-12">
            <Image 
              src={images[currentIndex]} 
              alt={`${vehicle.name} Fullscreen Image`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <button 
            className="absolute right-6 text-white/70 hover:text-white transition-colors p-2 bg-black/50 rounded-full"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-inter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
