import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Briefcase, ArrowRight } from 'lucide-react';
import styles from './About.module.css';

export default function FleetPreview() {
  const fleet = [
    {
      name: "GMC Yukon",
      bestFor: "VIP Families",
      capacity: "7 Passengers",
      image: "/images/fleet/gmc-transparent.png"
    },
    {
      name: "Toyota Hiace",
      bestFor: "Large Groups",
      capacity: "12 Passengers",
      image: "/images/fleet/hiace-transparent.png"
    },
    {
      name: "Hyundai Staria",
      bestFor: "Comfort Seekers",
      capacity: "9 Passengers",
      image: "/images/fleet/staria-transparent.png"
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
            className={`group ${styles.card} ${styles.fleetCard} ${styles.fadeInUp} overflow-hidden`}
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <div className="relative h-[220px] w-full bg-gradient-to-br from-slate-200 to-slate-50 flex items-center justify-center overflow-hidden transition-colors duration-300">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/70 rounded-full blur-[30px] mix-blend-overlay"></div>
              <Image 
                src={vehicle.image} 
                alt={vehicle.name} 
                fill
                className="object-contain p-6 drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)] mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
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
