'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=1200',
        alt: 'VIP Airport Pickup',
        category: 'Service'
    },
    {
        src: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1200',
        alt: 'Spacious Luggage Compartment',
        category: 'Features'
    },
    {
        src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1200',
        alt: 'Premium Chauffeur Service',
        category: 'Service'
    }
];

export default function FleetGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

    const handleImageError = (src: string) => {
        setImageErrors(prev => ({ ...prev, [src]: true }));
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
                        Our Gallery
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-navy mb-6">
                        Experience the Luxury
                    </h2>
                    <p className="text-lg text-slate-600">
                        Take a closer look at our premium fleet's immaculate interiors, spacious seating, and professional chauffeur service.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className={`relative group cursor-pointer overflow-hidden rounded-3xl ${index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-square md:aspect-[4/3]'}`}
                            onClick={() => setSelectedImage(image.src)}
                        >
                            {imageErrors[image.src] ? (
                                <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
                                    <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center mb-4">
                                        <Image
                                            src="/fleet/cars/gmc-yukon.png"
                                            alt="Fallback"
                                            width={60}
                                            height={30}
                                            className="object-contain opacity-50"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                    onError={() => handleImageError(image.src)}
                                />
                            )}
                            <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors duration-300" />
                            
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white mb-3">
                                    <ZoomIn size={28} />
                                </div>
                                <span className="text-white font-bold font-playfair text-xl tracking-wide">{image.alt}</span>
                                <span className="text-white/80 text-sm uppercase tracking-wider mt-1">{image.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 lg:p-12 cursor-zoom-out"
                >
                    <button 
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                    >
                        <X size={36} />
                    </button>
                    
                    <div 
                        className="relative w-full max-w-6xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {imageErrors[selectedImage] ? (
                            <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
                                <div className="w-32 h-32 rounded-full bg-slate-200 flex items-center justify-center mb-6">
                                    <Image
                                        src="/fleet/cars/gmc-yukon.png"
                                        alt="Fallback"
                                        width={120}
                                        height={60}
                                        className="object-contain opacity-50"
                                    />
                                </div>
                                <p className="text-slate-500 font-medium font-playfair text-xl">Image temporarily unavailable</p>
                            </div>
                        ) : (
                            <Image
                                src={selectedImage}
                                alt="Gallery Lightbox"
                                fill
                                className="object-contain bg-black"
                                onError={() => handleImageError(selectedImage)}
                            />
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
