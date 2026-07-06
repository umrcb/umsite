'use client';

import React, { useRef } from 'react';
import { usePremiumBooking } from './BookingContext';
import { CheckCircle } from 'lucide-react';

import Step2Route from './steps/Step2Route';
import Step3TripDetails from './steps/Step3TripDetails';
import Step4Vehicle from './steps/Step4Vehicle';
import Step5Passenger from './steps/Step5Passenger';
import Step7Payment from './steps/Step7Payment';
import Step8Confirmation from './steps/Step8Confirmation';
import BookingSummarySidebar from './BookingSummarySidebar';
import TrustAndFAQ from './TrustAndFAQ';

export default function PremiumBookingWizard() {
    const { state } = usePremiumBooking();

    // Check if sections are complete to unlock next ones
    const isRouteComplete = state.pickup.trim() !== '' && state.dropoff.trim() !== '' && state.date !== null && state.time.trim() !== '';
    const isVehicleComplete = state.selectedVehicles.length > 0;
    
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-[1320px] pt-32 pb-12">
                
                {/* Desktop Layout: Wizard + Sticky Sidebar */}
                <div className="flex flex-col lg:flex-row gap-8 items-start relative">
                    
                    {/* Left Column: Vertical Scrolling Forms */}
                    <div className="w-full lg:flex-1 max-w-[900px] flex flex-col gap-8">
                        
                        {/* SECTION 1: ROUTE & TRIP DETAILS */}
                        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative">
                            <div className="absolute -left-4 md:-left-6 top-10 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold border-4 border-slate-50 shadow-sm z-10 hidden lg:flex">1</div>
                            
                            <div className="mb-10">
                                <Step2Route hideButtons={true} />
                            </div>
                            <div className="border-t border-slate-100 pt-10">
                                <Step3TripDetails hideButtons={true} />
                            </div>
                        </div>

                        {/* SECTION 2: VEHICLE SELECTION */}
                        <div className={`bg-white rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative transition-opacity duration-500 ${isRouteComplete ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                            <div className={`absolute -left-4 md:-left-6 top-10 w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-slate-50 shadow-sm z-10 hidden lg:flex transition-colors ${isRouteComplete ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'}`}>2</div>
                            
                            <Step4Vehicle hideButtons={true} />
                        </div>

                        {/* SECTION 3: PASSENGER & CONFIRMATION */}
                        <div className={`bg-white rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative transition-opacity duration-500 ${isVehicleComplete ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                            <div className={`absolute -left-4 md:-left-6 top-10 w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-slate-50 shadow-sm z-10 hidden lg:flex transition-colors ${isVehicleComplete ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'}`}>3</div>
                            
                            <div className="mb-10">
                                <Step5Passenger hideButtons={true} />
                            </div>
                            <div className="border-t border-slate-100 pt-10 mb-10">
                                <Step7Payment hideButtons={true} />
                            </div>
                            <div className="border-t border-slate-100 pt-10">
                                <Step8Confirmation hideButtons={true} />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Summary Sidebar */}
                    <div className="w-full lg:w-[400px] lg:sticky lg:top-24 hidden lg:block">
                        <BookingSummarySidebar />
                    </div>

                </div>
            </div>

            <TrustAndFAQ />
        </div>
    );
}
