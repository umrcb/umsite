'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function ServicesContactSection() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-navy mb-6">
                        We're Here to Help
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                        <div className="h-[1px] w-12 bg-gold/50" />
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        <div className="h-[1px] w-12 bg-gold/50" />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100">
                    
                    {/* Contact Info */}
                    <div className="w-full lg:w-5/12 p-10 lg:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-navy mb-8 font-playfair">Contact Information</h3>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy mb-1">Phone / WhatsApp</h4>
                                    <p className="text-slate-600 mb-2">24/7 Support for Bookings & Queries</p>
                                    <a 
                                        href={getWhatsAppLink("Hello! I need help with booking.")}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-primary font-bold text-lg hover:text-gold transition-colors inline-flex items-center gap-2"
                                    >
                                        <MessageCircle size={18} />
                                        +966 50 123 4567
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy mb-1">Email Address</h4>
                                    <p className="text-slate-600 mb-2">For Corporate & Group Inquiries</p>
                                    <a href="mailto:info@umrahtaxi.com" className="text-primary font-bold hover:text-gold transition-colors">
                                        info@umrahtaxi.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy mb-1">Office Location</h4>
                                    <p className="text-slate-600">
                                        Al Ibrahimiyyah District,<br />
                                        Makkah, Saudi Arabia 24231
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Box */}
                        <div className="mt-10 p-6 bg-red-50 border border-red-100 rounded-2xl flex gap-4 items-start">
                            <Clock size={24} className="text-red-500 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-red-700 mb-1">Emergency Support</h4>
                                <p className="text-sm text-red-600">
                                    If you have an immediate issue during your trip or a last-minute flight change, please call our 24/7 hotline directly.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Google Map Embed */}
                    <div className="w-full lg:w-7/12 min-h-[400px] bg-slate-200 relative">
                        {/* A generic Makkah map embed using an iframe */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118944.59599589332!2d39.734676646875!3d21.422501061730034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c9ce!2sMakkah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1714470318534!5m2!1sen!2sus" 
                            className="absolute inset-0 w-full h-full border-0" 
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Umrah Taxi Office Location Makkah"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}
