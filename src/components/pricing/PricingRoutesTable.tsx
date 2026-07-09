'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const routes = [
    { route: 'Jeddah Airport → Makkah', distance: '95 KM', time: '1h 15m', price: '150', link: '/booking?pickup=Jeddah+Airport&dropoff=Makkah' },
    { route: 'Makkah → Madinah', distance: '450 KM', time: '4h 30m', price: '350', link: '/booking?pickup=Makkah&dropoff=Madinah' },
    { route: 'Madinah Airport → Hotel', distance: '20 KM', time: '25m', price: '100', link: '/booking?pickup=Madinah+Airport&dropoff=Madinah+Hotel' },
    { route: 'Makkah → Taif', distance: '95 KM', time: '1h 30m', price: '200', link: '/booking?pickup=Makkah&dropoff=Taif' },
    { route: 'Jeddah → Madinah', distance: '450 KM', time: '4h 30m', price: '400', link: '/booking?pickup=Jeddah&dropoff=Madinah' },
    { route: 'Makkah Ziyarat Tour', distance: '-', time: '4h', price: '250', link: '/booking?service=ziyarat&city=Makkah' },
    { route: 'Madinah Ziyarat Tour', distance: '-', time: '4h', price: '200', link: '/booking?service=ziyarat&city=Madinah' },
];

export default function PricingRoutesTable() {
    return (
        <div className="w-full flex flex-col h-full">
            <div className="mb-6">
                <h2 className="text-2xl font-bold font-poppins text-navy mb-2">Popular Route Pricing</h2>
                <p className="text-sm text-slate-500">All prices are starting from and depend on vehicle selection.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex-grow">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100">
                                <th className="py-4 px-5 text-xs font-bold text-navy uppercase tracking-wider">Route</th>
                                <th className="py-4 px-5 text-xs font-bold text-navy uppercase tracking-wider whitespace-nowrap">Distance</th>
                                <th className="py-4 px-5 text-xs font-bold text-navy uppercase tracking-wider whitespace-nowrap">Est. Time</th>
                                <th className="py-4 px-5 text-xs font-bold text-navy uppercase tracking-wider whitespace-nowrap">From (SAR)</th>
                                <th className="py-4 px-5 text-xs font-bold text-navy uppercase tracking-wider text-right">Book</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {routes.map((row, index) => (
                                <tr key={index} className="hover:bg-primary/5 transition-colors duration-200 group">
                                    <td className="py-3 px-5 text-sm font-medium text-navy whitespace-nowrap">{row.route}</td>
                                    <td className="py-3 px-5 text-sm text-slate-600 whitespace-nowrap">{row.distance}</td>
                                    <td className="py-3 px-5 text-sm text-slate-600 whitespace-nowrap">{row.time}</td>
                                    <td className="py-3 px-5 text-sm font-bold text-primary whitespace-nowrap">{row.price}</td>
                                    <td className="py-3 px-5 text-right">
                                        <Link 
                                            href={row.link}
                                            className="inline-flex items-center justify-center px-4 py-1.5 bg-[#1B5E20] hover:bg-primary text-white text-xs font-bold rounded-md transition-colors"
                                        >
                                            Book Now
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm text-slate-600">Need a custom route? Get a personalized quote.</span>
                    <button 
                        onClick={() => document.getElementById('price-estimator')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-sm font-bold text-primary flex items-center hover:text-primary transition-colors"
                    >
                        Get Instant Quote <ArrowRight size={14} className="ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
}
