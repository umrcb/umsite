import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import styles from './About.module.css';

export default function FinalCTA() {
  return (
    <section className={`${styles.section} ${styles.sectionDark}`}>
      <div className={styles.patternBackground}></div>
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark} ${styles.fadeInUp}`} style={{ animationDelay: '0.1s' }}>
          Let Us Be Part of Your <span>Spiritual Journey</span>
        </h2>
        <p className={`${styles.sectionSubtitle} ${styles.sectionSubtitleDark} ${styles.fadeInUp}`} style={{ margin: '0 auto 3rem auto', animationDelay: '0.2s' }}>
          Experience premium transportation designed for comfort, safety, and peace of mind. Book your ride today and focus entirely on your Umrah.
        </p>
        
        <div className={`${styles.btnGroup} ${styles.fadeInUp}`} style={{ justifyContent: 'center', animationDelay: '0.3s' }}>
          <Link href="/booking" className={`${styles.btn} ${styles.btnPremium}`}>
            Book Your Ride <ArrowRight size={20} />
          </Link>
          <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSecondary}`} style={{ backgroundColor: 'transparent', color: '#ffffff', borderColor: '#ffffff' }}>
            <Phone size={20} /> Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
