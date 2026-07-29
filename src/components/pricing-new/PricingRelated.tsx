import React from 'react';
import Link from 'next/link';
import { Plane, Building, Map, Briefcase, HeartHandshake, Crown } from 'lucide-react';

export default function PricingRelated() {
    const services = [
        { name: "Airport Transfer", icon: <Plane size={24} />, link: "/services/jeddah-airport-taxi" },
        { name: "Hotel Transfer", icon: <Building size={24} />, link: "/services/makkah-madinah-taxi" },
        { name: "Intercity Transfer", icon: <Map size={24} />, link: "/services/makkah-madinah-taxi" },
        { name: "Umrah Transport", icon: <HeartHandshake size={24} />, link: "/services/umrah-taxi" },
        { name: "VIP Chauffeur", icon: <Crown size={24} />, link: "/services" },
        { name: "Corporate Travel", icon: <Briefcase size={24} />, link: "/contact" }
    ];

    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1500px]">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-4 font-poppins">Explore Related Services</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {services.map((service, idx) => (
                        <Link 
                            key={idx} 
                            href={service.link}
                            className="flex items-center gap-3 px-6 py-4 bg-slate-50 border border-slate-200 rounded-full hover:border-[#2E8B57] hover:bg-emerald-50 transition-colors text-slate-700 font-medium group"
                        >
                            <span className="text-slate-400 group-hover:text-[#2E8B57] transition-colors">{service.icon}</span>
                            {service.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
