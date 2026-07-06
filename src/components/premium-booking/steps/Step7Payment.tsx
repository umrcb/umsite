'use client';

import React, { useEffect } from 'react';
import { usePremiumBooking } from '../BookingContext';
import { ArrowRight, Banknote, ShieldCheck } from 'lucide-react';

export default function Step7Payment({ hideButtons = false }: { hideButtons?: boolean }) {
    const { state, updateState, nextStep, prevStep } = usePremiumBooking();

    // Ensure payment method is strictly set to Cash if they reach this step
    useEffect(() => {
        if (state.paymentMethod !== 'Cash') {
            updateState({ paymentMethod: 'Cash' });
        }
    }, [state.paymentMethod, updateState]);

    return (
        <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Payment Details</h2>
            <p className="text-slate-500 mb-8">Secure your booking now and pay later.</p>

            <div className="bg-emerald-50 border-2 border-emerald-600 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 mb-8 text-center sm:text-left shadow-md">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Banknote size={32} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-1">Cash on Arrival</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        For your convenience and peace of mind, we only collect payment upon completion of your journey. You can pay your driver directly in cash when you reach your destination.
                    </p>
                </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-start gap-4 mb-8">
                <ShieldCheck size={28} className="text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                    <h4 className="font-bold text-slate-900">Zero Upfront Fees</h4>
                    <p className="text-sm text-slate-500 mt-1">
                        Your reservation is 100% secure with no credit card required. There are no hidden fees or cancellation charges.
                    </p>
                </div>
            </div>

            {!hideButtons && (
                <div className="flex justify-between items-center mt-10">
                    <button
                        onClick={prevStep}
                        className="px-6 py-3 rounded-full text-slate-600 font-bold hover:bg-slate-100 transition-colors"
                    >
                        Back
                    </button>
                    <button
                        onClick={nextStep}
                        className="px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg"
                    >
                        Continue to Confirm <ArrowRight size={18} />
                    </button>
                </div>
            )}
        </div>
    );
}
