import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import styles from './About.module.css';

export default function CustomerTestimonials() {
  const testimonials = [
    {
      name: "Tariq Ali",
      country: "United Kingdom",
      vehicle: "GMC Yukon",
      text: "The service was impeccable. Our driver met us at Jeddah airport with a name sign, the SUV was pristine, and the journey to Makkah was smooth. Truly provided peace of mind for our family.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Aisha Rahman",
      country: "Malaysia",
      vehicle: "Hyundai Staria",
      text: "Booking was incredibly easy online. The driver was courteous, punctual, and drove very safely. Highly recommend for any sisters traveling for Umrah.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Omar Farooq",
      country: "United States",
      vehicle: "Toyota Hiace",
      text: "We had a group of 10 people and luggage. The Hiace accommodated us perfectly. The transparent pricing meant no haggling upon arrival. A seamless 5-star experience.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className={`${styles.section} ${styles.sectionLight}`}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className={styles.sectionTitle}>Customer <span>Testimonials</span></h2>
        <p className={styles.sectionSubtitle} style={{ margin: '0 auto' }}>
          Don't just take our word for it. Hear from pilgrims who have experienced our premium service.
        </p>
      </div>

      <div className={styles.grid3}>
        {testimonials.map((review, index) => (
          <div 
            key={index} 
            className={`${styles.card} ${styles.testimonialCard} ${styles.fadeInUp}`}
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <div className={styles.testimonialRating}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#C9A227" />)}
            </div>
            <p className={styles.testimonialText}>"{review.text}"</p>
            
            <div className={styles.testimonialAuthor}>
              <img src={review.image} alt={review.name} className={styles.authorImage} />
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#0F172A' }}>{review.name}</h4>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#475569' }}>
                  {review.country} • {review.vehicle}
                </p>
              </div>
              <div style={{ marginLeft: 'auto', color: '#2E8B57', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', fontWeight: 600 }}>
                <CheckCircle size={14} /> Verified
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
