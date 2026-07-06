import React from 'react';
import { Check } from 'lucide-react';
import styles from './About.module.css';

export default function WhyChooseUs() {
  const reasons = [
    "Licensed & Certified Chauffeurs",
    "Luxury & Maintained Fleet",
    "Transparent, Upfront Pricing",
    "24/7 Dedicated Support",
    "Real-time Flight Monitoring",
    "Advanced GPS Tracking",
    "Family-Friendly Vehicles",
    "Daily Vehicle Sanitization",
    "Multilingual Support Team",
    "Secure Online Booking"
  ];

  return (
    <section className={`${styles.section} ${styles.sectionLight}`}>
      <div className={styles.grid2} style={{ alignItems: 'center' }}>
        <div className={`${styles.fadeInUp}`} style={{ animationDelay: '0.1s' }}>
          <h2 className={styles.sectionTitle}>Why Choose <span>Umrah Cabs</span></h2>
          <p className={styles.bodyText} style={{ marginBottom: '2rem' }}>
            We understand that embarking on Umrah is a profoundly personal and spiritual undertaking. That's why we've designed every aspect of our service to provide comfort, security, and absolute reliability.
          </p>
          
          <ul className={styles.comparisonList}>
            {reasons.map((reason, index) => (
              <li key={index} className={styles.fadeInUp} style={{ animationDelay: `${0.1 * index}s` }}>
                <Check className={styles.comparisonIcon} size={24} />
                {reason}
              </li>
            ))}
          </ul>
        </div>
        
        <div className={`${styles.heroImageContainer} ${styles.fadeInUp}`} style={{ animationDelay: '0.3s' }}>
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop" 
            alt="Luxury vehicle interior showing premium comfort"
          />
        </div>
      </div>
    </section>
  );
}
