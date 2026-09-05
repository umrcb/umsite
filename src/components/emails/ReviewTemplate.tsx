import * as React from 'react';

interface ReviewTemplateProps {
    customerName: string;
    bookingId: string;
    reviewLink: string;
}

export const ReviewTemplate: React.FC<ReviewTemplateProps> = ({
    customerName,
    bookingId,
    reviewLink,
}) => (
    <div style={{ fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#0F172A', padding: '30px', maxWidth: '600px', margin: '0 auto', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px rgba(15, 23, 42, 0.05)' }}>
        <div style={{ textAlign: 'center', borderBottom: '3px solid #D4AF37', paddingBottom: '20px', marginBottom: '30px' }}>
            <h1 style={{ color: '#0F172A', fontSize: '24px', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 10px 0' }}>How Was Your Trip?</h1>
            <p style={{ color: '#64748B', fontSize: '14px', margin: '0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Booking ID: <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>#{bookingId.slice(0, 8)}</span></p>
        </div>

        <div style={{ color: '#334155', fontSize: '16px', lineHeight: '1.6' }}>
            <p style={{ marginBottom: '15px' }}>Dear <strong>{customerName}</strong>,</p>
            <p style={{ marginBottom: '15px' }}>
                Thank you for choosing Umrah Cabs for your recent journey.
                We hope you had a comfortable and spiritual experience.
            </p>

            <p style={{ marginBottom: '35px' }}>
                Your feedback helps us provide the best service to pilgrims and travelers.
                Please take a moment to rate your driver and vehicle.
            </p>

            <div style={{ textAlign: 'center', marginBottom: '35px' }}>
                <a
                    href={reviewLink}
                    style={{
                        display: 'inline-block',
                        backgroundColor: '#D4AF37', // Gold
                        color: '#FFFFFF',
                        padding: '14px 28px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        letterSpacing: '0.5px'
                    }}
                >
                    Rate Your Trip
                </a>
            </div>
            
            <p style={{ fontSize: '14px', color: '#64748B', textAlign: 'center', fontStyle: 'italic', marginBottom: '20px' }}>
                It only takes 1 minute!
            </p>

            <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '20px', textAlign: 'center' }}>
                <p style={{ fontSize: '13px', color: '#94A3B8', margin: '0' }}>&copy; {new Date().getFullYear()} Umrah Cabs. All rights reserved.</p>
            </div>
        </div>
    </div>
);
