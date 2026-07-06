'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=1200',
        alt: 'VIP Airport Pickup',
        category: 'Service'
    },
    {
        src: 'https://images.unsplash.com/photo-1549687989-b003a27072cc?auto=format&fit=crop&q=80&w=1200',
        alt: 'Luxury Leather Interior',
        category: 'Interior'
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
    },
    {
        src: 'https://images.unsplash.com/photo-1621285814345-9854743ebdf4?auto=format&fit=crop&q=80&w=1200',
        alt: 'Comfortable Group Seating',
        category: 'Interior'
    },
    {
        src: 'https://images.unsplash.com/photo-1502877338535-346ce0d165f5?auto=format&fit=crop&q=80&w=1200',
        alt: 'Fleet on the Road',
        category: 'Exterior'
    }
];

export default function FleetGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative group cursor-pointer overflow-hidden rounded-3xl ${index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-square md:aspect-[4/3]'}`}
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
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
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 lg:p-12 cursor-zoom-out"
                    >
                        <button 
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                        >
                            <X size={36} />
                        </button>
                        
                        <motion.div 
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative w-full max-w-6xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Gallery Lightbox"
                                fill
                                className="object-contain bg-black"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
