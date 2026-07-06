'use client';

import React, { useState } from 'react';
import { usePremiumBooking } from '../BookingContext';
import { CheckCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function Step8Confirmation({ hideButtons = false }: { hideButtons?: boolean }) {
    const { state, prevStep } = usePremiumBooking();
    const [agreed, setAgreed] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [bookingRef, setBookingRef] = useState('');

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            // Replicate the exact payload expected by /api/bookings to ensure admin panel compatibility
            const payload = {
                name: `${state.passengerInfo.firstName} ${state.passengerInfo.lastName}`,
                email: state.passengerInfo.email,
                phone: state.passengerInfo.phone,
                pickup: state.pickup,
                dropoff: state.dropoff,
                passengers: state.passengerInfo.adults + state.passengerInfo.children,
                luggage: 0, // Using default or can be added to context
                date: state.date ? `${state.date.getFullYear()}-${String(state.date.getMonth() + 1).padStart(2, '0')}-${String(state.date.getDate()).padStart(2, '0')}` : undefined,
                time: state.time || undefined,
                country: state.passengerInfo.country,
                flightNumber: state.flightNumber,
                selectedVehicles: state.selectedVehicles,
                status: 'pending',
                routeId: state.routeId || 'custom'
            };

            const res = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error('Failed to submit booking');
            }

            const data = await res.json();
            setBookingRef(data.id || 'REF-' + Math.floor(Math.random() * 1000000));
            setIsSuccess(true);
        } catch (error) {
            console.error('Booking submission error:', error);
            alert('Failed to submit booking. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-12">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={48} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">Booking Confirmed!</h2>
                <p className="text-slate-500 mb-2">Your booking reference is <strong className="text-slate-900">{bookingRef}</strong></p>
                <p className="text-slate-500 mb-8 max-w-md mx-auto">We have received your booking and will send a confirmation email with driver details shortly.</p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="https://wa.me/966500000000" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20">
                        Chat on WhatsApp
                    </a>
                    <Link href="/" className="px-8 py-4 rounded-full font-bold border-2 border-slate-200 text-slate-600 hover:border-slate-300 transition-colors">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Final Review</h2>
            <p className="text-slate-500 mb-8">Please confirm your details and agree to our terms.</p>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8 text-sm">
                <p className="text-slate-500 mb-2">By clicking &quot;Complete Booking&quot;, you are placing a reservation for a <strong>{state.selectedVehicles[0]?.vehicleName || state.selectedVehicles[0]?.vehicleId}</strong> from <strong>{state.pickup}</strong> to <strong>{state.dropoff}</strong> on <strong>{state.date?.toLocaleDateString()}</strong> at <strong>{state.time}</strong>.</p>
                <p className="text-slate-500">Your chosen payment method is <strong>{state.paymentMethod}</strong>.</p>
            </div>

            <div className="space-y-4 mb-10">
                <label className="flex items-start gap-3 cursor-pointer group">
                    <div className={`w-6 h-6 rounded flex-shrink-0 flex items-center justify-center border transition-colors mt-0.5 ${confirmed ? 'bg-emerald-600 border-emerald-600' : 'border-slate-300 bg-white group-hover:border-emerald-600'}`}>
                        {confirmed && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className="text-slate-700 font-medium">I confirm that all booking information provided is accurate and correct.</span>
                    <input type="checkbox" className="hidden" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} />
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer group">
                    <div className={`w-6 h-6 rounded flex-shrink-0 flex items-center justify-center border transition-colors mt-0.5 ${agreed ? 'bg-emerald-600 border-emerald-600' : 'border-slate-300 bg-white group-hover:border-emerald-600'}`}>
                        {agreed && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className="text-slate-700 font-medium">I agree to the <a href="/terms" target="_blank" className="text-emerald-600 hover:underline">Terms & Conditions</a> and <a href="/privacy" target="_blank" className="text-emerald-600 hover:underline">Privacy Policy</a>.</span>
                    <input type="checkbox" className="hidden" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                </label>
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                {!hideButtons && (
                    <button
                        onClick={prevStep}
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-6 py-3 rounded-full text-slate-600 font-bold hover:bg-slate-100 transition-colors disabled:opacity-50"
                    >
                        Back
                    </button>
                )}
                <div className={`flex flex-col sm:flex-row gap-4 w-full ${hideButtons ? 'sm:w-full justify-end' : 'sm:w-auto'}`}>
                    <button
                        className="w-full sm:w-auto px-6 py-3 rounded-full font-bold border-2 border-slate-200 text-slate-600 hover:border-slate-300 transition-colors"
                    >
                        Save for Later
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={!confirmed || !agreed || isSubmitting}
                        className={`w-full sm:w-auto px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all ${
                            (confirmed && agreed && !isSubmitting) ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/20' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                    >
                        {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : 'Complete Booking'}
                    </button>
                </div>
            </div>
        </div>
    );
}
