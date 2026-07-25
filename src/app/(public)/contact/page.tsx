import { getBaseUrl } from '@/lib/url-utils';
import React from 'react';
import ContactForm from '@/components/contact/ContactForm';
import Hero from '@/components/common/Hero';
import Link from 'next/link';
import { constructMetadata } from '@/lib/metadata';
import { getSettings } from '@/lib/settings-storage';

export async function generateMetadata() {
    return constructMetadata({
        title: "Contact Umrah Cabs | Book Your Ride Today",
        description: "Constant support for your Umrah journey. Contact us via WhatsApp or phone for immediate booking assistance.",
        keywords: [
            // Contact & Inquiries (25)
            "Contact Umrah Cabs Umrah Cab", "Umrah taxi support", "Saudi Arabia transport inquiries", "book pilgrim taxi", "Umrah cab customer service", "Makkah taxi booking number", "Jeddah airport transfer contact", "Madinah transport reservation", "Umrah transport whatsapp number", "Umrah Cabs email address", "Umrah taxi phone number", "24/7 Umrah transport support", "pilgrim travel assistance", "Umrah fleet booking inquiry", "Umrah taxi fare estimate", "GMC Yukon booking contact", "Hyundai Staria rental phone", "Toyota Hiace Makkah booking", "Umrah group transport booking", "VIP Umrah car reservation", "cheap Umrah taxi contact", "Umrah cab online support", "Makkah Ziyarat booking", "Madinah Ziyarat contact", "Saudi transport agency number",
            // Services (25)
            "book Makkah to Madinah taxi", "Jeddah to Makkah cab reservation", "Madinah airport taxi booking", "Taif Ziyarat transport contact", "wheelchair Umrah cab booking", "family Umrah van reservation", "corporate Umrah travel contact", "luxury Umrah transport booking", "Umrah driver hire Saudi Arabia", "rent car with driver Makkah", "book VIP SUV Umrah", "Umrah bus rental contact", "Hajj transport booking", "Ramadan Umrah taxi reservation", "last minute Umrah cab", "pre book Umrah taxi", "Umrah transport cancellation", "Umrah taxi modifications", "Umrah Cabs booking status", "Umrah journey planner contact", "custom Umrah travel route", "multi city Umrah transport", "Haramain train station taxi", "Jeddah Islamic port transfer", "hotel to Haram taxi Makkah",
            // Trust / Locations (50)
            "safe Umrah taxi Saudi Arabia", "reliable Makkah transport company", "trusted Madinah cab service", "official Umrah transport provider", "licensed Saudi taxi for pilgrims", "English speaking Umrah driver contact", "Urdu speaker taxi Makkah", "Arabic speaking driver Madinah", "Jeddah airport meet and greet", "Makkah hotel pickup", "Madinah hotel drop off", "Umrah transport UK pilgrims", "USA pilgrim taxi Saudi Arabia", "Pakistan Umrah transport", "India Umrah cab booking", "Malaysia pilgrim transport", "Indonesia Umrah journey cab", "South Africa Umrah agency partner", "UAE to Makkah transport", "Dubai Umrah taxi booking", "global Umrah travel transport", "international pilgrim cab", "Umrah taxi reviews contact", "best Umrah car rental", "top rated Makkah cab", "affordable Jeddah to Makkah taxi", "premium Madinah transport", "VIP Jeddah airport transfer", "luxury Makkah Ziyarat", "comfortable Madinah Ziyarat", "cheap Umrah cab fare", "Umrah taxi discount", "Umrah transport promotional code", "Umrah Cabs head office", "Makkah taxi branch", "Jeddah transport office", "Madinah cab company address", "book taxi for Cave Hira", "Jabal Thawr transport booking", "Arafat taxi reservation", "Mina transport contact", "Muzdalifah cab booking", "Quba Mosque taxi contact", "Mount Uhud transport reservation", "Masjid Qiblatayn cab", "Taif city tour booking", "Jeddah city tour agency", "Al Ula transport contact", "Yanbu taxi agency", "Badar transport booking"
        ],
        canonicalUrl: '/contact',
    });
}

export default async function ContactPage() {
    const settings = await getSettings();

    // Fallback values
    const phone1 = settings?.contact.phone || '+966 53 481 6935';
    const email = settings?.contact.email || 'info@UmrahCabs.com';
    const address = settings?.contact.address || 'Al Aziziyah, Makkah, Saudi Arabia';

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TransportationService",
        "name": "Umrah Cabs",
        "alternateName": "Umrah Cabs",
        "image": `${getBaseUrl()}/images/logo.png`,
        "@id": `${getBaseUrl()}`,
        "url": `${getBaseUrl()}`,
        "telephone": phone1,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Aziziyah",
            "addressLocality": "Makkah",
            "addressRegion": "Makkah Region",
            "postalCode": "24243",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.4478336,
            "longitude": 39.8126588
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": phone1,
            "contactType": "customer service",
            "areaServed": "SA",
            "availableLanguage": ["en", "ar", "ur"]
        }
    };

    const whatsappLink = `https://wa.me/${phone1.replace(/[^0-9]/g, '')}`;

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero
                title="Get in Touch"
                subtitle="Reliable Booking & 24/7 Support for Your Umrah Journey. Premium Transport Services from Makkah to Madinah."
                bgImage="https://images.unsplash.com/photo-1542314831-c6a4d14b8fc4?auto=format&fit=crop&q=80&w=2500"
                alt="Contact Umrah Cabs"
                breadcrumbs={
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>›</span>
                        <span className="text-primary font-semibold">Contact</span>
                    </div>
                }
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info Column */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-poppins">Contact Information</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                                Whether you have a question about our fleet, need a custom quote for a large group, or require immediate assistance during your Umrah journey, our team is ready to help 24/7.
                            </p>
                            
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 text-lg mb-1">Phone Number</h3>
                                        <a href={`tel:${phone1}`} className="text-slate-600 hover:text-primary transition-colors text-lg">{phone1}</a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25D366]"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 text-lg mb-1">WhatsApp</h3>
                                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#25D366] transition-colors text-lg">Message us on WhatsApp</a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="m16 19 2 2 4-4"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 text-lg mb-1">Email Address</h3>
                                        <a href={`mailto:${email}`} className="text-slate-600 hover:text-primary transition-colors text-lg">{email}</a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 text-lg mb-1">Office Address</h3>
                                        <p className="text-slate-600 text-lg leading-relaxed">{address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.526883410923!2d39.8126588!3d21.447833599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21d9da1e4d599%3A0xb8a485c3949902cc!2sAl%20Aqsa%20Umrah%20Transport!5e0!3m2!1sen!2s"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                className="border-0 grayscale hover:grayscale-0 transition-all duration-700"
                                title="Umrah Cabs Map"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2 font-poppins">Send a Message</h2>
                        <p className="text-slate-600 mb-8 text-lg">We typically reply within a few minutes.</p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div >
    );
}

