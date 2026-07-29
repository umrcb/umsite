import React from 'react';
import Link from 'next/link';
import { Users, Briefcase, ChevronRight } from 'lucide-react';
import { vehiclesData } from '@/data/pricingRoutes';

export default function VehicleComparison() {
    return (
        <section className="py-20 bg-white border-b border-[#E2E8F0]">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1500px]">
                
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-slate-900 mb-4 font-poppins">Compare Our Fleet</h2>
                    <p className="text-lg text-slate-500 font-inter">
                        Choose the perfect vehicle for your journey. From comfortable sedans to spacious buses, we have a premium option for every group size.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vehiclesData.map((vehicle) => (
                        <div key={vehicle.id} className="bg-slate-50 rounded-2xl border border-[#E2E8F0] overflow-hidden flex flex-col group hover:border-[#2E8B57] transition-all">
                            <div className="aspect-[4/3] bg-white p-4 flex items-center justify-center relative">
                                <img 
                                    src={vehicle.image} 
                                    alt={vehicle.name} 
                                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-grow border-t border-slate-100">
                                <h3 className="font-bold text-slate-900 text-lg mb-4">{vehicle.name}</h3>
                                
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[#2E8B57]">
                                            <Users size={16} />
                                        </div>
                                        <span>Up to {vehicle.passengers} Passengers</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[#2E8B57]">
                                            <Briefcase size={16} />
                                        </div>
                                        <span>Up to {vehicle.luggage} Bags</span>
                                    </div>
                                </div>
                                
                                <div className="mt-auto">
                                    <p className="text-xs text-slate-500 mb-4 h-10 line-clamp-2">{vehicle.idealFor}</p>
                                    <Link href="/booking" className="w-full flex items-center justify-center gap-2 py-2.5 border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-[#2E8B57] hover:border-[#2E8B57] hover:text-white transition-colors">
                                        Book {vehicle.name.split(' ')[1] || 'Vehicle'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
