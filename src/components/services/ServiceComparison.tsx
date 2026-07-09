'use client';

import React from 'react';
import Link from 'next/link';

const comparisonData = [
    {
        service: 'Airport Transfers',
        vehicle: 'Sedan, SUV, Van',
        passengers: '1 - 6',
        duration: '1 - 2 Hours',
        coverage: 'Jeddah Airport, Makkah',
        idealFor: 'Individuals, Families',
        price: 'SAR 150',
        link: '/services/jeddah-airport-transfer'
    },
    {
        service: 'Makkah Hotel Transfers',
        vehicle: 'Sedan, SUV',
        passengers: '1 - 6',
        duration: '30 Mins',
        coverage: 'Makkah City Limits',
        idealFor: 'Pilgrims, Families',
        price: 'SAR 100',
        link: '/booking?service=makkah-hotel'
    },
    {
        service: 'Madinah Transfers',
        vehicle: 'Sedan, SUV',
        passengers: '1 - 6',
        duration: '30 - 45 Mins',
        coverage: 'Madinah Airport, Hotels',
        idealFor: 'Individuals, Families',
        price: 'SAR 150',
        link: '/booking?service=madinah-transfer'
    },
    {
        service: 'Intercity Transfers',
        vehicle: 'SUV, Van',
        passengers: '1 - 7',
        duration: '4.5 Hours',
        coverage: 'Makkah, Madinah, Jeddah',
        idealFor: 'Long Distance Travel',
        price: 'SAR 450',
        link: '/services/makkah-madinah-taxi'
    },
    {
        service: 'Ziyarat Tours',
        vehicle: 'SUV, Van',
        passengers: '1 - 6',
        duration: '3 - 6 Hours',
        coverage: 'Makkah or Madinah',
        idealFor: 'Families, Groups',
        price: 'SAR 300',
        link: '/services/ziyarat-tours'
    },
    {
        service: 'Group Transportation',
        vehicle: 'Hiace, Coaster',
        passengers: '7 - 20',
        duration: 'Flexible',
        coverage: 'All Major Cities',
        idealFor: 'Groups, Organizations',
        price: 'SAR 600',
        link: '/booking?service=group'
    },
    {
        service: 'VIP Luxury Transport',
        vehicle: 'Luxury SUV, GMC',
        passengers: '1 - 6',
        duration: 'Flexible',
        coverage: 'All Major Cities',
        idealFor: 'VIPs, Business',
        price: 'SAR 500',
        link: '/booking?service=vip'
    },
    {
        service: 'Umrah Transportation',
        vehicle: 'Sedan, SUV, Van',
        passengers: '1 - 7',
        duration: 'Flexible',
        coverage: 'Jeddah to Makkah',
        idealFor: 'Umrah Pilgrims',
        price: 'SAR 200',
        link: '/booking?service=umrah'
    }
];

export default function ServiceComparison() {
    return (
        <section className="py-24 bg-slate-50 relative border-t border-slate-100">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
                        Service Comparison
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-navy mb-6">
                        Compare Our Services
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                        <div className="h-[1px] w-12 bg-primary/50" />
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div className="h-[1px] w-12 bg-primary/50" />
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[900px] text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider">Service</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider">Vehicle Type</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider">Passengers</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider">Duration</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider">Coverage</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider">Ideal For</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider">Starting From</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider text-center">Book</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {comparisonData.map((row, index) => (
                                    <tr key={index} className="hover:bg-primary/5 transition-colors duration-200">
                                        <td className="py-4 px-6 font-semibold text-navy whitespace-nowrap">{row.service}</td>
                                        <td className="py-4 px-6 text-slate-600 whitespace-nowrap">{row.vehicle}</td>
                                        <td className="py-4 px-6 text-slate-600 whitespace-nowrap">{row.passengers}</td>
                                        <td className="py-4 px-6 text-slate-600 whitespace-nowrap">{row.duration}</td>
                                        <td className="py-4 px-6 text-slate-600 whitespace-nowrap">{row.coverage}</td>
                                        <td className="py-4 px-6 text-slate-600 whitespace-nowrap">{row.idealFor}</td>
                                        <td className="py-4 px-6 font-medium text-navy whitespace-nowrap">{row.price}</td>
                                        <td className="py-4 px-6 text-center whitespace-nowrap">
                                            <Link 
                                                href={row.link}
                                                className="text-primary font-semibold hover:text-primary transition-colors underline underline-offset-4"
                                            >
                                                Book Now
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
