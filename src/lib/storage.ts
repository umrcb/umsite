export interface Booking {
    id: string;
    customer: string;
    service: string;
    date: string;
    time: string;
    status: 'Pending' | 'Confirmed' | 'Cancelled';
    amount: string;
    email: string;
    phone: string;
    timestamp: number;
}

const STORAGE_KEY = 'transport_bookings';

export const getBookings = (): Booking[] => {
    if (typeof window === 'undefined') return [];
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return [];
        return JSON.parse(stored).sort((a: Booking, b: Booking) => b.timestamp - a.timestamp);
    } catch (e) {
        console.warn('localStorage access denied or failed to parse', e);
        return [];
    }
};

export const saveBooking = (booking: Omit<Booking, 'id' | 'timestamp' | 'status'>): Booking => {
    const bookings = getBookings();
    const newBooking: Booking = {
        ...booking,
        id: `#AQ-${Math.floor(10000 + Math.random() * 90000)}`,
        status: 'Pending',
        timestamp: Date.now(),
    };

    bookings.unshift(newBooking);
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    } catch (e) {
        console.warn('localStorage access denied', e);
    }
    return newBooking;
};

export const updateBookingStatus = (id: string, status: Booking['status']) => {
    const bookings = getBookings();
    const updated = bookings.map(b => b.id === id ? { ...b, status } : b);
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
        console.warn('localStorage access denied', e);
    }
    return updated;
};
