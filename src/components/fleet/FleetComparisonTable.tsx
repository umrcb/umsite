'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Minus } from 'lucide-react';

const comparisonData = [
    {
        vehicle: 'GMC Yukon',
        passengers: '6 - 7',
        luggage: '5 - 6',
        luxury: 'VIP Premium',
        bestFor: 'Executives, VIPs',
        ac: true,
        wifi: true,
        airport: true,
        intercity: true,
        ziyarat: true,
        link: '/booking?service=vip&vehicle=yukon'
    },
    {
        vehicle: 'Hyundai Staria',
        passengers: '7 - 9',
        luggage: '6 - 7',
        luxury: 'Premium',
        bestFor: 'Families',
        ac: true,
        wifi: true,
        airport: true,
        intercity: true,
        ziyarat: true,
        link: '/booking?service=family&vehicle=staria'
    },
    {
        vehicle: 'Hyundai Starex',
        passengers: '8 - 10',
        luggage: '7 - 8',
        luxury: 'Standard Plus',
        bestFor: 'Small Groups',
        ac: true,
        wifi: false,
        airport: true,
        intercity: true,
        ziyarat: true,
        link: '/booking?service=group&vehicle=starex'
    },
    {
        vehicle: 'Toyota Hiace',
        passengers: '10 - 13',
        luggage: '10+',
        luxury: 'Standard',
        bestFor: 'Large Families',
        ac: true,
        wifi: false,
        airport: true,
        intercity: true,
        ziyarat: true,
        link: '/booking?service=group&vehicle=hiace'
    },
    {
        vehicle: 'Toyota Coaster',
        passengers: '20 - 30',
        luggage: '20+',
        luxury: 'Standard',
        bestFor: 'Tour Groups',
        ac: true,
        wifi: false,
        airport: true,
        intercity: true,
        ziyarat: true,
        link: '/booking?service=group&vehicle=coaster'
    }
];

export default function FleetComparisonTable() {
    return (
        <section className="py-24 bg-slate-50 relative border-t border-slate-100">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
                        Detailed Specifications
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair text-navy mb-6">
                        Vehicle Comparison
                    </h2>
                    <p className="text-lg text-slate-600">
                        Compare our fleet options side-by-side to find the perfect match for your travel requirements and group size.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1100px] text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider">Vehicle</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider">Passengers</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider">Luggage</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider">Luxury Level</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider">Best For</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider text-center">A/C</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider text-center">Wi-Fi</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider text-center">Airport</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider text-center">Intercity</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider text-center">Ziyarat</th>
                                    <th className="py-5 px-6 font-semibold text-navy text-sm uppercase tracking-wider text-center">Book</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {comparisonData.map((row, index) => (
                                    <tr key={index} className="hover:bg-primary/5 transition-colors duration-200">
                                        <td className="py-4 px-6 font-bold text-navy whitespace-nowrap">{row.vehicle}</td>
                                        <td className="py-4 px-6 text-slate-600 whitespace-nowrap">{row.passengers}</td>
                                        <td className="py-4 px-6 text-slate-600 whitespace-nowrap">{row.luggage}</td>
                                        <td className="py-4 px-6 text-slate-600 whitespace-nowrap">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${row.luxury.includes('VIP') ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-600'}`}>
                                                {row.luxury}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-slate-600 whitespace-nowrap">{row.bestFor}</td>
                                        <td className="py-4 px-6 text-center">
                                            {row.ac ? <CheckCircle2 size={20} className="text-primary mx-auto" /> : <Minus size={20} className="text-slate-300 mx-auto" />}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {row.wifi ? <CheckCircle2 size={20} className="text-primary mx-auto" /> : <Minus size={20} className="text-slate-300 mx-auto" />}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {row.airport ? <CheckCircle2 size={20} className="text-primary mx-auto" /> : <Minus size={20} className="text-slate-300 mx-auto" />}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {row.intercity ? <CheckCircle2 size={20} className="text-primary mx-auto" /> : <Minus size={20} className="text-slate-300 mx-auto" />}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {row.ziyarat ? <CheckCircle2 size={20} className="text-primary mx-auto" /> : <Minus size={20} className="text-slate-300 mx-auto" />}
                                        </td>
                                        <td className="py-4 px-6 text-center whitespace-nowrap">
                                            <Link 
                                                href={row.link}
                                                className="text-primary font-semibold hover:text-primary transition-colors underline underline-offset-4"
                                            >
                                                Book
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
