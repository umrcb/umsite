import React from 'react';
import { MapPin } from 'lucide-react';
import styles from './About.module.css';

export default function ServiceAreas() {
  const areas = [
    { name: "Makkah", desc: "Holy City & Haramain Transport" },
    { name: "Madinah", desc: "Prophet's City & Ziyarat" },
    { name: "Jeddah", desc: "City & Business Transfers" },
    { name: "Taif", desc: "Scenic & Historical Tours" },
    { name: "King Abdulaziz Airport", desc: "Jeddah Airport Transfers" },
    { name: "Prince Mohammad Airport", desc: "Madinah Airport Transfers" }
  ];

  return (
    <section className={styles.section}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className={styles.sectionTitle}>Our Service <span>Areas</span></h2>
        <p className={styles.sectionSubtitle} style={{ margin: '0 auto' }}>
          Comprehensive transportation coverage across all major religious and historical sites in Saudi Arabia.
        </p>
      </div>

      <div className={styles.grid3}>
        {areas.map((area, index) => (
          <div 
            key={index} 
            className={`${styles.card} ${styles.fadeInUp}`}
            style={{ animationDelay: `${0.1 * (index + 1)}s`, display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}
          >
            <div className={styles.cardIcon} style={{ width: '48px', height: '48px', marginBottom: 0 }}>
              <MapPin size={24} />
            </div>
            <div>
              <h3 className={styles.cardTitle} style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{area.name}</h3>
              <p className={styles.cardText} style={{ fontSize: '0.875rem' }}>{area.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
