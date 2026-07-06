import React from 'react';
import styles from './About.module.css';

export default function OurStory() {
  return (
    <section className={styles.section}>
      <div className={styles.grid2}>
        <div className={`${styles.fadeInUp}`} style={{ animationDelay: '0.1s' }}>
          <h2 className={styles.sectionTitle}>Our <span>Story</span></h2>
          <p className={styles.bodyText} style={{ marginBottom: '1.5rem' }}>
            Founded with a deep understanding of the challenges pilgrims face upon arriving in Saudi Arabia, Umrah Taxi Services was created to eliminate transportation stress from the spiritual journey.
          </p>
          <p className={styles.bodyText}>
            We recognized that finding reliable, safe, and transparent transportation was often a point of anxiety for guests of Allah. Our mission is to transform that experience by offering a seamless, luxurious, and deeply respectful service that allows pilgrims to focus entirely on their faith.
          </p>
        </div>
        
        <div className={`${styles.storyTimeline} ${styles.fadeInUp}`} style={{ animationDelay: '0.2s' }}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.cardTitle} style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>The Beginning</h3>
            <p className={styles.bodyText} style={{ fontSize: '1rem' }}>Started with a small fleet of vehicles dedicated to serving families arriving at Jeddah Airport.</p>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.cardTitle} style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Expanding Horizons</h3>
            <p className={styles.bodyText} style={{ fontSize: '1rem' }}>Expanded our reach to Madinah and Taif, incorporating VIP vehicles to meet the growing demand for premium travel.</p>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.cardTitle} style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Today</h3>
            <p className={styles.bodyText} style={{ fontSize: '1rem' }}>Recognized as a leading Umrah transportation provider with thousands of successful journeys and a modern luxury fleet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
