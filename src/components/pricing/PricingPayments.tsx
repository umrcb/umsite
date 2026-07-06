'use client';

import React from 'react';
import { CreditCard, Smartphone, Building2, Banknote } from 'lucide-react';

const paymentMethods = [
    { name: "Visa", icon: <CreditCard size={24} className="text-blue-600" /> },
    { name: "Mastercard", icon: <CreditCard size={24} className="text-red-500" /> },
    { name: "Mada", icon: <CreditCard size={24} className="text-green-600" /> },
    { name: "Apple Pay", icon: <Smartphone size={24} className="text-black" /> },
    { name: "Google Pay", icon: <Smartphone size={24} className="text-slate-600" /> },
    { name: "Bank Transfer", icon: <Building2 size={24} className="text-primary" /> },
    { name: "Cash Payment", icon: <Banknote size={24} className="text-emerald-600" /> }
];

export default function PricingPayments() {
    return (
        <section className="py-16 bg-white border-t border-b border-slate-100">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-xl md:text-2xl font-bold font-poppins text-navy">We Accept All Major Payment Methods</h2>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                    {paymentMethods.map((method, index) => (
                        <div 
                            key={index} 
                            className="flex items-center gap-2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-colors duration-300"
                        >
                            {method.icon}
                            <span className="font-semibold text-sm text-navy">{method.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
