'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lock, Mail, Loader2, AlertCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Redirect to home page if the user refreshes the login page
        const navigationEntries = performance.getEntriesByType('navigation');
        if (navigationEntries.length > 0) {
            const navEntry = navigationEntries[0] as PerformanceNavigationTiming;
            if (navEntry.type === 'reload') {
                router.push('/');
            }
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: email, password }),
            });

            const data = await res.json();

            if (data.success) {
                router.push('/admin');
                router.refresh();
            } else {
                setError(data.error || 'Login failed');
            }
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    console.log('Rendering LoginPage');

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50">
            {/* Back to Home Button */}
            <Link
                href="/"
                className="absolute top-6 left-6 z-50 flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors group"
            >
                <div className="p-2 rounded-full bg-white shadow-sm border border-gray-200 group-hover:border-emerald-200 transition-colors">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </div>
                <span className="font-medium text-sm">Back to Home</span>
            </Link>
            
            {/* Background Image with Light Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/contact-hero.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-slate-50/95 backdrop-blur-[2px]"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>

            <div className="w-full max-w-md relative z-10 p-6">
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden ring-1 ring-black/5 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                    {/* Top Accent Line */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600"></div>

                    <div className="p-8">
                        <div className="text-center mb-10">
                            <div className="w-20 h-20 bg-emerald-50 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-sm border border-emerald-100 group">
                                <Lock className="text-emerald-600 group-hover:scale-110 transition-transform duration-300" size={32} />
                            </div>
                            <h1 className="text-3xl font-bold text-navy-900 mb-2 tracking-tight font-playfair">Welcome Back</h1>
                            <p className="text-gray-500 text-sm">Sign in to manage Umrah Cabs</p>
                        </div>

                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm animate-in fade-in slide-in-from-top-2">
                                <AlertCircle size={18} className="shrink-0" />
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-600 transition-colors" size={20} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                                        placeholder="admin@umrahcabs.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">
                                    Password
                                </label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-600 transition-colors" size={20} />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 hover:shadow-emerald-600/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-8 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                {loading ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin relative z-10" />
                                        <span className="relative z-10">Signing in...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="relative z-10">Sign In to Dashboard</span>
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                    <div className="bg-gray-50/80 p-4 text-center text-xs text-gray-500 border-t border-gray-100 backdrop-blur-sm">
                        <p>Protected by <span className="text-emerald-600 font-semibold">Secure RBAC System</span></p>
                    </div>
                </div>

                <div className="text-center mt-8 text-gray-500 text-xs font-medium">
                    &copy; {new Date().getFullYear()} Umrah Cabs. All rights reserved.
                </div>
            </div>
        </div>
    );
}
