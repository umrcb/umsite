'use client';

import React, { useEffect, useState } from 'react';
import { usePremiumBooking } from '../BookingContext';
import { MapPin, ArrowRight, Loader2, Search } from 'lucide-react';

export default function Step2Route({ hideButtons = false }: { hideButtons?: boolean }) {
    const { state, updateState, nextStep, prevStep } = usePremiumBooking();
    const [routes, setRoutes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('/api/pricing')
            .then(res => res.json())
            .then(data => {
                if (data.routes) {
                    setRoutes(data.routes);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch routes', err);
                setLoading(false);
            });
    }, []);

    const handleNext = () => {
        if (state.routeId) {
            nextStep();
        }
    };

    const selectRoute = (route: any) => {
        updateState({ 
            routeId: route.id, 
            route: route,
            pickup: route.origin || route.name.split(' to ')[0],
            dropoff: route.destination || route.name.split(' to ')[1] || ''
        });
    };

    const filteredRoutes = routes.filter(r => 
        r.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Select Your Route</h2>
            <p className="text-slate-500 mb-8">Choose from our professional travel routes.</p>

            {loading ? (
                <div className="flex justify-center items-center py-12">
                    <Loader2 className="animate-spin text-emerald-600" size={32} />
                </div>
            ) : (
                <div className="max-w-2xl">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1 block">
                        Select a Route
                    </label>
                    <div className="relative mb-6">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <select
                            value={state.routeId || ''}
                            onChange={(e) => {
                                const route = routes.find(r => r.id === e.target.value);
                                if (route) selectRoute(route);
                            }}
                            className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-12 text-slate-900 font-semibold focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition-all cursor-pointer"
                        >
                            <option value="" disabled>Choose your pickup and destination...</option>
                            {routes.map((route, idx) => (
                                <option key={idx} value={route.id}>
                                    {route.name}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>

                    {state.routeId && state.route && (
                        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 flex items-start gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-emerald-900 text-lg">{state.route.name}</h3>
                                <div className="text-sm mt-1 text-emerald-700 flex gap-4">
                                    <span className="font-medium">Distance: {state.route.distance || 'N/A km'}</span>
                                    <span className="font-medium">Est. Time: {state.route.time || 'N/A time'}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {!hideButtons && (
                <div className="flex justify-between items-center mt-10">
                    <button
                        onClick={prevStep}
                        className="px-6 py-3 rounded-full text-slate-600 font-bold hover:bg-slate-100 transition-colors"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={!state.routeId}
                        className={`px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${
                            state.routeId ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                    >
                        Continue <ArrowRight size={18} />
                    </button>
                </div>
            )}
        </div>
    );
}
