'use client';

import { useState } from 'react';
import { User, Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [emailError, setEmailError] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setEmailError('');

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;

        // Strict Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address (e.g., user@example.com)');
            return;
        }

        setStatus('submitting');
        const data = {
            name: formData.get('name'),
            email: email,
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center justify-between uppercase tracking-wider" htmlFor="name">
                    <span>Full Name</span>
                </label>
                <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors h-5 w-5" />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium"
                        placeholder="e.g. Abdullah Ahmed"
                        required
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center justify-between uppercase tracking-wider" htmlFor="email">
                    <span>Email Address</span>
                </label>
                <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors h-5 w-5" />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-4 outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium ${emailError ? 'border-red-500 focus:ring-red-500/50' : 'border-slate-200 focus:ring-4 focus:ring-primary/10 focus:border-primary'}`}
                        placeholder="your@email.com"
                        required
                        onChange={() => setEmailError('')}
                    />
                </div>
                {emailError && <p className="text-red-500 text-xs mt-1 bg-red-50 p-2 rounded-lg border border-red-100">{emailError}</p>}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center justify-between uppercase tracking-wider" htmlFor="message">
                    <span>Message</span>
                </label>
                <div className="relative group">
                    <MessageSquare className="absolute left-4 top-5 text-slate-400 group-focus-within:text-primary transition-colors h-5 w-5" />
                    <textarea
                        id="message"
                        name="message"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 h-32 resize-none focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium"
                        placeholder="How can we help you?"
                        required
                    ></textarea>
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-primary hover:bg-[#1B5E20] text-white py-4 px-8 rounded-xl font-bold transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm group"
                disabled={status === 'submitting'}
            >
                {status === 'submitting' ? (
                    <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Sending...</span>
                    </>
                ) : (
                    <>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        <span>Send Message</span>
                    </>
                )}
            </button>

            {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl text-center text-sm">
                    Message sent successfully! We will contact you soon.
                </div>
            )}

            {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl text-center text-sm">
                    Failed to send message. Please try again.
                </div>
            )}
        </form>
    );
}
