'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Clock, Car, User, ArrowRight, ArrowLeftRight, ShieldCheck, Calculator, CalendarCheck } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { usePricing } from '@/context/PricingContext';
import RouteSelector from './RouteSelector';
import VehicleSelector from './VehicleSelector';

export default function UnifiedBookingWidget() {
    const [activeTab, setActiveTab] = useState<'booking' | 'calculator'>('booking');

    // Booking State
    const [formData, setFormData] = useState({
        pickup: '',
        dropoff: '',
        journeyType: 'One Way',
        date: '',
        time: '',
        vehicle: '',
        passengers: '1'
    });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.pickup || !formData.dropoff || !formData.date) {
            alert('Please fill in at least Pickup, Destination, and Date.');
            return;
        }

        const message = `*New Booking Inquiry*
- *Journey Type*: ${formData.journeyType}
- *Pickup*: ${formData.pickup}
- *Dropoff*: ${formData.dropoff}
- *Date*: ${formData.date}
- *Time*: ${formData.time || 'Not specified'}
- *Vehicle*: ${formData.vehicle || 'Any'}
- *Passengers*: ${formData.passengers}`;

        const url = getWhatsAppLink(message);
        window.open(url, '_blank');
    };

    // Calculator State
    const { routes, vehicles, calculatePrice, isLoading } = usePricing();
    const [selectedRoute, setSelectedRoute] = useState('');
    const [selectedVehicle, setSelectedVehicle] = useState('');
    const [priceDetails, setPriceDetails] = useState<{ price: number; originalPrice: number; discountApplied: number; discountType?: 'percentage' | 'fixed' } | null>(null);

    useEffect(() => {
        if (!isLoading && routes.length > 0 && vehicles.length > 0) {
            if (!selectedRoute) setSelectedRoute(routes[0].id);
            if (!selectedVehicle) setSelectedVehicle(vehicles[0].id);
        }
    }, [isLoading, routes, vehicles, selectedRoute, selectedVehicle]);

    useEffect(() => {
        if (selectedRoute && selectedVehicle) {
            const details = calculatePrice(selectedRoute, selectedVehicle);
            setPriceDetails(details);
        }
    }, [selectedRoute, selectedVehicle, calculatePrice]);

    const currentRoute = routes.find(r => r.id === selectedRoute);
    const currentVehicle = vehicles.find(v => v.id === selectedVehicle);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 relative z-30 -mt-16 md:-mt-24">
            <div className="premium-card p-2 md:p-4 rounded-[20px] bg-white">
                
                {/* Tabs */}
                <div className="flex justify-center mb-6 border-b border-[#E2E8F0]">
                    <button 
                        onClick={() => setActiveTab('booking')}
                        className={`flex items-center gap-2 px-6 py-4 font-bold text-sm md:text-base transition-colors relative ${activeTab === 'booking' ? 'text-primary' : 'text-[#475569] hover:text-[#0F172A]'}`}
                    >
                        <CalendarCheck size={18} />
                        Quick Booking
                        {activeTab === 'booking' && (
                            <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                        )}
                    </button>
                    <button 
                        onClick={() => setActiveTab('calculator')}
                        className={`flex items-center gap-2 px-6 py-4 font-bold text-sm md:text-base transition-colors relative ${activeTab === 'calculator' ? 'text-primary' : 'text-[#475569] hover:text-[#0F172A]'}`}
                    >
                        <Calculator size={18} />
                        Fare Estimate
                        {activeTab === 'calculator' && (
                            <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                        )}
                    </button>
                </div>

                {/* Tab Content */}
                <div className="p-2 md:p-4">
                    <AnimatePresence mode="wait">
                        {activeTab === 'booking' ? (
                            <motion.form 
                                key="booking"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                onSubmit={handleBookingSubmit} 
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                            >
                                {/* Form Fields */}
                                <div className="relative">
                                    <label className="block text-[10px] font-bold text-[#475569] uppercase tracking-wider mb-1">Pickup Location</label>
                                    <div className="relative">
                                        <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                                        <input type="text" name="pickup" value={formData.pickup} onChange={handleFormChange} placeholder="Jeddah Airport, Makkah..." className="w-full pl-10 pr-3 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="relative">
                                    <label className="block text-[10px] font-bold text-[#475569] uppercase tracking-wider mb-1">Destination</label>
                                    <div className="relative">
                                        <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                                        <input type="text" name="dropoff" value={formData.dropoff} onChange={handleFormChange} placeholder="Makkah Hotel, Madinah..." className="w-full pl-10 pr-3 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="relative">
                                    <label className="block text-[10px] font-bold text-[#475569] uppercase tracking-wider mb-1">Journey Type</label>
                                    <div className="relative">
                                        <ArrowLeftRight size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                                        <select name="journeyType" value={formData.journeyType} onChange={handleFormChange} className="w-full pl-10 pr-3 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                                            <option>One Way</option>
                                            <option>Round Trip</option>
                                            <option>By Hours</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="relative">
                                    <label className="block text-[10px] font-bold text-[#475569] uppercase tracking-wider mb-1">Travel Date</label>
                                    <div className="relative">
                                        <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
                                        <input type="date" name="date" value={formData.date} onChange={handleFormChange} className="w-full pl-10 pr-3 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="relative">
                                    <label className="block text-[10px] font-bold text-[#475569] uppercase tracking-wider mb-1">Pickup Time</label>
                                    <div className="relative">
                                        <Clock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
                                        <input type="time" name="time" value={formData.time} onChange={handleFormChange} className="w-full pl-10 pr-3 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="relative">
                                    <label className="block text-[10px] font-bold text-[#475569] uppercase tracking-wider mb-1">Vehicle Type</label>
                                    <div className="relative">
                                        <Car size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                                        <select name="vehicle" value={formData.vehicle} onChange={handleFormChange} className="w-full pl-10 pr-3 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                                            <option value="">Any Vehicle</option>
                                            <option value="GMC Yukon">GMC Yukon XL (VIP)</option>
                                            <option value="Hyundai Staria">Hyundai Staria</option>
                                            <option value="Toyota Hiace">Toyota Hiace</option>
                                            <option value="Toyota Camry">Toyota Camry</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="relative">
                                    <label className="block text-[10px] font-bold text-[#475569] uppercase tracking-wider mb-1">Passengers</label>
                                    <div className="relative">
                                        <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                                        <input type="number" name="passengers" min="1" max="50" value={formData.passengers} onChange={handleFormChange} className="w-full pl-10 pr-3 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="relative flex items-end">
                                    <button type="submit" className="btn-primary w-full py-3 h-[46px]">
                                        Book Now <ArrowRight size={18} className="ml-2" />
                                    </button>
                                </div>
                            </motion.form>
                        ) : (
                            <motion.div 
                                key="calculator"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
                            >
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[#0F172A] mb-2">Select Route</label>
                                        <RouteSelector routes={routes} selectedRouteId={selectedRoute} onSelect={setSelectedRoute} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[#0F172A] mb-2">Select Vehicle</label>
                                        <VehicleSelector vehicles={vehicles} selectedVehicleId={selectedVehicle} onSelect={setSelectedVehicle} />
                                    </div>
                                </div>

                                <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-[#E2E8F0] text-center flex flex-col justify-center h-full">
                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <ShieldCheck size={20} className="text-primary" />
                                        <span className="font-bold text-[#0F172A] uppercase tracking-wider text-sm">Best Rate Guaranteed</span>
                                    </div>
                                    
                                    <div className="my-6">
                                        {priceDetails && priceDetails.discountApplied > 0 && (
                                            <span className="text-[#94A3B8] line-through text-lg block mb-1">
                                                SAR {priceDetails.originalPrice.toLocaleString()}
                                            </span>
                                        )}
                                        <div className="text-5xl font-poppins font-[800] text-[#0F172A] flex items-center justify-center gap-2">
                                            <span className="text-2xl text-[#475569] font-normal">SAR</span>
                                            {priceDetails ? priceDetails.price.toLocaleString() : 0}
                                        </div>
                                        {priceDetails && priceDetails.discountApplied > 0 && (
                                            <span className="inline-block mt-3 text-primary font-bold bg-primary/10 px-3 py-1 rounded-full text-sm">
                                                {priceDetails.discountType === 'percentage'
                                                    ? `${Math.round((priceDetails.discountApplied / priceDetails.originalPrice) * 100)}% OFF`
                                                    : `${priceDetails.discountApplied} SAR OFF`}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-[#E2E8F0] mb-6">
                                        <div>
                                            <span className="block text-xs text-[#475569] uppercase font-bold tracking-wider mb-1">Distance</span>
                                            <span className="text-[#0F172A] font-medium">{currentRoute?.distance || '-'}</span>
                                        </div>
                                        <div className="w-px h-8 bg-[#E2E8F0]"></div>
                                        <div>
                                            <span className="block text-xs text-[#475569] uppercase font-bold tracking-wider mb-1">Duration</span>
                                            <span className="text-[#0F172A] font-medium">{currentRoute?.time || '-'}</span>
                                        </div>
                                    </div>

                                    <a
                                        href={getWhatsAppLink(`Salam Umrah Cabs, I am interested in the route: ${currentRoute?.name} with ${currentVehicle?.name}. Estimated Price: ${priceDetails?.price} SAR.`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary w-full py-4 text-lg"
                                    >
                                        Reserve via WhatsApp <ArrowRight size={20} className="ml-2" />
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
