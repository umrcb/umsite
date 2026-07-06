'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface VehicleSelection {
    vehicleId: string;
    vehicleName?: string;
    quantity: number;
}

export interface BookingState {
    service: string;
    routeId: string;
    route: any; // Full route object fetched from API
    calculatedPrice: number;
    pickup: string;
    dropoff: string;
    journeyType: 'One Way' | 'Round Trip' | 'Hourly Hire';
    date: Date | null;
    time: string;
    flightNumber: string;
    hotelName: string;
    specialInstructions: string;
    selectedVehicles: VehicleSelection[];
    passengerInfo: {
        firstName: string;
        lastName: string;
        country: string;
        phone: string;
        whatsapp: string;
        email: string;
        adults: number;
        children: number;
        specialAssistance: boolean;
        childSeat: boolean;
        notes: string;
    };
    paymentMethod: string;
}

interface BookingContextType {
    state: BookingState;
    updateState: (updates: Partial<BookingState>) => void;
    updatePassengerInfo: (updates: Partial<BookingState['passengerInfo']>) => void;
    currentStep: number;
    setCurrentStep: (step: number) => void;
    nextStep: () => void;
    prevStep: () => void;
}

const initialState: BookingState = {
    service: '',
    routeId: '',
    route: null,
    calculatedPrice: 0,
    pickup: '',
    dropoff: '',
    journeyType: 'One Way',
    date: null,
    time: '',
    flightNumber: '',
    hotelName: '',
    specialInstructions: '',
    selectedVehicles: [],
    passengerInfo: {
        firstName: '',
        lastName: '',
        country: '',
        phone: '',
        whatsapp: '',
        email: '',
        adults: 1,
        children: 0,
        specialAssistance: false,
        childSeat: false,
        notes: '',
    },
    paymentMethod: 'Cash',
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<BookingState>(initialState);
    const [currentStep, setCurrentStep] = useState(1);

    const updateState = (updates: Partial<BookingState>) => {
        setState((prev) => ({ ...prev, ...updates }));
    };

    const updatePassengerInfo = (updates: Partial<BookingState['passengerInfo']>) => {
        setState((prev) => ({
            ...prev,
            passengerInfo: { ...prev.passengerInfo, ...updates },
        }));
    };

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 8));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    return (
        <BookingContext.Provider
            value={{
                state,
                updateState,
                updatePassengerInfo,
                currentStep,
                setCurrentStep,
                nextStep,
                prevStep,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};

export const usePremiumBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('usePremiumBooking must be used within a BookingProvider');
    }
    return context;
};
