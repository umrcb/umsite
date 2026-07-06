import React from 'react';
import styles from './About.module.css';

export default function MeetOurTeam() {
  const team = [
    {
      name: "Ahmed Al-Farsi",
      role: "Founder & CEO",
      bio: "With over 15 years in luxury transport, Ahmed founded the company to redefine the pilgrimage travel experience.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Tariq Mahmoud",
      role: "Operations Manager",
      bio: "Ensures seamless coordination across all cities, maintaining our 99% on-time arrival record.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Sarah Othman",
      role: "Customer Support Head",
      bio: "Leads our multilingual 24/7 support team, ensuring every passenger's needs are met instantly.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Khalid Ibrahim",
      role: "Fleet Maintenance Director",
      bio: "Oversees daily inspections and sanitization protocols, guaranteeing vehicle safety and luxury.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className={`${styles.section} ${styles.sectionLight}`}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className={styles.sectionTitle}>Meet Our <span>Professional Team</span></h2>
        <p className={styles.sectionSubtitle} style={{ margin: '0 auto' }}>
          The dedicated experts working behind the scenes to ensure your spiritual journey is flawless.
        </p>
      </div>

      <div className={styles.grid4}>
        {team.map((member, index) => (
          <div 
            key={index} 
            className={`${styles.card} ${styles.fadeInUp}`}
            style={{ animationDelay: `${0.1 * (index + 1)}s`, padding: '1.5rem' }}
          >
            <img src={member.image} alt={member.name} className={styles.teamImage} />
            <h3 className={styles.teamName}>{member.name}</h3>
            <p className={styles.teamRole}>{member.role}</p>
            <p className={styles.cardText} style={{ fontSize: '0.875rem' }}>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
