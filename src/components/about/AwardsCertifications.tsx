import React from 'react';
import { Award, ShieldCheck, Star } from 'lucide-react';
import styles from './About.module.css';

export default function AwardsCertifications() {
  const awards = [
    { title: "Licensed Transport Company", icon: <Award size={32} /> },
    { title: "Professional Driver Certification", icon: <ShieldCheck size={32} /> },
    { title: "5-Star Google Reviews", icon: <Star size={32} /> }
  ];

  return (
    <section className={styles.section}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className={styles.sectionTitle}>Awards & <span>Certifications</span></h2>
        <p className={styles.sectionSubtitle} style={{ margin: '0 auto' }}>
          Recognized for excellence in hospitality and safety compliance.
        </p>
      </div>

      <div className={styles.grid3} style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        {awards.map((award, index) => (
          <div 
            key={index} 
            className={styles.fadeInUp}
            style={{ 
              animationDelay: `${0.1 * (index + 1)}s`, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '1rem',
              textAlign: 'center'
            }}
          >
            <div className={styles.cardIcon} style={{ margin: 0, width: '80px', height: '80px', borderRadius: '50%' }}>
              {award.icon}
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0F172A', maxWidth: '200px' }}>{award.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
