import React from 'react';

export default function TrustSection() {
    return (
        <section className="py-20 px-4 bg-slate-50 text-navy relative overflow-hidden">
            <div className="absolute inset-0 pattern-grid-fade opacity-5 pointer-events-none"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="mb-8">
                    <p className="text-xl md:text-2xl font-playfair italic text-navy/80">
                        &quot;And cooperate in righteousness and piety&quot;
                    </p>
                    <p className="text-sm text-secondary mt-2">— Surah Al-Ma&apos;idah (5:2)</p>
                </div>

                <div className="h-px w-24 bg-primary/20 mx-auto my-8"></div>

                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                    We believe that serving pilgrims is a form of worship. Our commitment goes beyond transportation; it is a covenant of trust to ensure your journey is blessed and burden-free.
                </p>
            </div>
        </section>
}
