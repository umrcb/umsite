import React from 'react';
import { Car, UserCheck, MapPin, Baby, Shield, Droplets, CreditCard, PhoneCall } from 'lucide-react';
import styles from './About.module.css';

export default function SafetyCommitment() {
  const commitments = [
    { icon: <Car size={24} />, title: "Vehicle Inspection", desc: "Rigorous daily checks." },
    { icon: <UserCheck size={24} />, title: "Licensed Drivers", desc: "Vetted & certified." },
    { icon: <MapPin size={24} />, title: "GPS Tracking", desc: "Real-time monitoring." },
    { icon: <Baby size={24} />, title: "Child Seats", desc: "Available on request." },
    { icon: <Shield size={24} />, title: "Fully Insured", desc: "Comprehensive coverage." },
    { icon: <Droplets size={24} />, title: "Daily Sanitization", desc: "Strict hygiene protocols." },
    { icon: <CreditCard size={24} />, title: "Secure Payments", desc: "Encrypted transactions." },
    { icon: <PhoneCall size={24} />, title: "Emergency Support", desc: "24/7 assistance line." }
  ];

  return (
    <section className={`${styles.section} ${styles.sectionLight}`}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className={styles.sectionTitle}>Our Commitment to <span>Safety</span></h2>
        <p className={styles.sectionSubtitle} style={{ margin: '0 auto' }}>
          Your peace of mind is paramount. We implement strict safety standards across every touchpoint.
        </p>
      </div>

      <div className={styles.grid4}>
        {commitments.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.card} ${styles.fadeInUp}`}
            style={{ animationDelay: `${0.05 * (index + 1)}s`, padding: '1.5rem', textAlign: 'center' }}
          >
            <div className={styles.cardIcon} style={{ margin: '0 auto 1rem auto' }}>
              {item.icon}
            </div>
            <h3 className={styles.cardTitle} style={{ fontSize: '1.125rem' }}>{item.title}</h3>
            <p className={styles.cardText} style={{ fontSize: '0.875rem' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
