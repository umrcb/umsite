'use client';

import React, { useEffect, useState } from 'react';
import styles from './About.module.css';

const Counter = ({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
};

export default function CompanyStatistics() {
  const stats = [
    { number: 25000, suffix: '+', label: "Happy Pilgrims" },
    { number: 10, suffix: '+', label: "Years of Experience" },
    { number: 50, suffix: '+', label: "Professional Drivers" },
    { number: 15, suffix: '+', label: "Premium Vehicles" },
    { number: 99, suffix: '%', label: "Customer Satisfaction" },
    { number: 100000, suffix: '+', label: "Successful Trips" }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.grid3}>
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`${styles.statCard} ${styles.fadeInUp}`}
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <div className={styles.statNumber}>
              <Counter end={stat.number} suffix={stat.suffix} />
            </div>
            <p className={styles.cardTitle} style={{ fontSize: '1.25rem', margin: 0 }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
