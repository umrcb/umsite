import React from 'react';
import { ShieldCheck, HeartHandshake, Briefcase, Award, Star, CheckCircle } from 'lucide-react';
import styles from './About.module.css';

export default function CoreValues() {
  const values = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Trust",
      description: "We build lasting relationships through transparency, reliability, and delivering on our promises every single time."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Safety",
      description: "Your well-being is our top priority. We maintain rigorous vehicle standards and employ only certified, experienced chauffeurs."
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "Hospitality",
      description: "Rooted in Saudi traditions, we treat every pilgrim as an honored guest, providing warm, respectful, and attentive service."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Professionalism",
      description: "From our uniforms to our communication, we maintain the highest standards of corporate excellence in every interaction."
    },
    {
      icon: <Award size={32} />,
      title: "Integrity",
      description: "Honest pricing with zero hidden fees. We believe in doing the right thing, even when no one is looking."
    },
    {
      icon: <Star size={32} />,
      title: "Excellence",
      description: "We continuously strive to exceed expectations, refining our premium service to provide the ultimate luxury travel experience."
    }
  ];

  return (
    <section className={styles.section}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className={styles.sectionTitle}>Our Core <span>Values</span></h2>
        <p className={styles.sectionSubtitle} style={{ margin: '0 auto' }}>
          The principles that guide our every decision and interaction, ensuring your journey is nothing short of exceptional.
        </p>
      </div>

      <div className={styles.grid3}>
        {values.map((value, index) => (
          <div 
            key={index} 
            className={`${styles.card} ${styles.fadeInUp}`} 
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <div className={styles.cardIcon}>
              {value.icon}
            </div>
            <h3 className={styles.cardTitle}>{value.title}</h3>
            <p className={styles.cardText}>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
