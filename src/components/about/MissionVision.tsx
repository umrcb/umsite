import React from 'react';
import { Target, Eye } from 'lucide-react';
import styles from './About.module.css';

export default function MissionVision() {
  return (
    <section className={`${styles.section} ${styles.sectionLight}`}>
      <div className={styles.grid2}>
        <div className={`${styles.card} ${styles.fadeInUp}`} style={{ animationDelay: '0.1s' }}>
          <div className={styles.cardIcon}>
            <Target size={32} />
          </div>
          <h3 className={styles.cardTitle}>Our Mission</h3>
          <p className={styles.cardText}>
            To deliver reliable, safe, and comfortable transportation while ensuring every pilgrim enjoys a peaceful journey. We are dedicated to removing all logistical burdens so our guests can focus on their spiritual goals with absolute peace of mind.
          </p>
        </div>
        
        <div className={`${styles.card} ${styles.fadeInUp}`} style={{ animationDelay: '0.2s' }}>
          <div className={styles.cardIcon}>
            <Eye size={32} />
          </div>
          <h3 className={styles.cardTitle}>Our Vision</h3>
          <p className={styles.cardText}>
            To become the most trusted and globally recognized premium Umrah transportation company in Saudi Arabia, setting the gold standard for hospitality, safety, and luxury in religious tourism transport.
          </p>
        </div>
      </div>
    </section>
  );
}
