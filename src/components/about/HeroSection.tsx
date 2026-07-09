import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import styles from './About.module.css';

export default function HeroSection() {
  return (
    <section className={`${styles.section} ${styles.heroSection}`}>
      <div className={`${styles.fadeInUp}`} style={{ animationDelay: '0.1s' }}>
        <div className={styles.trustBadge}>
          <Star size={16} fill="#C9A227" color="#C9A227" />
          <span>Trusted by Thousands of Pilgrims Since Our Journey Began</span>
        </div>
        
        <h1 className={styles.heroTitle}>
          More Than Transportation — We Deliver <span>Peace of Mind</span>
        </h1>
        
        <p className={styles.sectionSubtitle} style={{ marginBottom: '2rem' }}>
          Umrah Cabs is committed to providing safe, reliable, and premium transportation for pilgrims across Makkah, Madinah, Jeddah, Taif, and surrounding cities. Your spiritual journey deserves the highest standard of comfort.
        </p>
        
        <div className={styles.btnGroup}>
          <Link href="/booking" className={`${styles.btn} ${styles.btnPrimary}`}>
            Book Your Ride <ArrowRight size={20} />
          </Link>
          <Link href="/fleet" className={`${styles.btn} ${styles.btnSecondary}`}>
            View Our Fleet
          </Link>
        </div>
      </div>
      
      <div className={`${styles.heroImageContainer} ${styles.fadeInUp}`} style={{ animationDelay: '0.3s' }}>
        <img 
          src="https://images.unsplash.com/photo-1598462725916-24eb2fbff99d?q=80&w=1200&auto=format&fit=crop" 
          alt="Professional chauffeur assisting pilgrims"
        />
      </div>
    </section>
  );
}
