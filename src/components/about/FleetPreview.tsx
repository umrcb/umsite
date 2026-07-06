import React from 'react';
import Link from 'next/link';
import { Users, Briefcase, ArrowRight } from 'lucide-react';
import styles from './About.module.css';

export default function FleetPreview() {
  const fleet = [
    {
      name: "GMC Yukon",
      bestFor: "VIP Families",
      capacity: "7 Passengers",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Toyota Hiace",
      bestFor: "Large Groups",
      capacity: "12 Passengers",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Hyundai Staria",
      bestFor: "Comfort Seekers",
      capacity: "9 Passengers",
      image: "https://images.unsplash.com/photo-1633519842426-1fcb9e782d49?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className={styles.section}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
        <div>
          <h2 className={styles.sectionTitle}>Our Premium <span>Fleet</span></h2>
          <p className={styles.sectionSubtitle}>Meticulously maintained vehicles designed for ultimate comfort.</p>
        </div>
        <Link href="/fleet" className={`${styles.btn} ${styles.btnSecondary}`}>
          Explore Full Fleet <ArrowRight size={20} />
        </Link>
      </div>

      <div className={styles.grid3}>
        {fleet.map((vehicle, index) => (
          <div 
            key={index} 
            className={`${styles.card} ${styles.fleetCard} ${styles.fadeInUp}`}
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <img src={vehicle.image} alt={vehicle.name} />
            <div className={styles.fleetContent}>
              <h3 className={styles.cardTitle}>{vehicle.name}</h3>
              <div className={styles.fleetDetails}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Users size={16} /> {vehicle.capacity}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Briefcase size={16} /> {vehicle.bestFor}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
