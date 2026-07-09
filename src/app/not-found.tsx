'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 bg-white text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 pattern-grid-fade opacity-5 pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-lg w-full">
                <h1 className="text-9xl font-bold text-primary opacity-30 font-poppins mb-4">404</h1>
                <h2 className="text-3xl font-bold text-[#0F172A] mb-4 font-poppins">Page Not Found</h2>
                <p className="text-[#475569] mb-8 max-w-md mx-auto font-inter text-lg">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/" className="btn-primary shadow-lg shadow-primary/20">
                        <Home className="mr-2" size={20} />
                        Go Home
                    </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#0F172A] border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all">
                        <ArrowLeft className="mr-2" size={20} />
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
}
