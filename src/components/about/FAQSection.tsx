'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './About.module.css';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are your drivers licensed and experienced?",
      a: "Yes, all our chauffeurs undergo rigorous background checks, hold valid commercial licenses, and have extensive experience driving in Saudi Arabia, particularly around the holy cities."
    },
    {
      q: "Can I book a ride from Jeddah Airport directly to Makkah?",
      a: "Absolutely. Airport transfers are one of our core services. Our driver will wait for you at the arrivals terminal with a name sign, monitor your flight for delays, and drive you directly to your hotel in Makkah."
    },
    {
      q: "Do your vehicles have child seats?",
      a: "Yes, we provide child seats upon request to ensure the safety of your little ones. Please specify this requirement during the booking process."
    },
    {
      q: "Are there any hidden fees in your pricing?",
      a: "No. We believe in complete transparency. The price you are quoted at the time of booking is the final price, inclusive of all taxes and standard tolls."
    }
  ];

  return (
    <section className={`${styles.section} ${styles.sectionLight}`}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className={styles.sectionTitle}>Frequently Asked <span>Questions</span></h2>
          <p className={styles.sectionSubtitle} style={{ margin: '0 auto' }}>
            Everything you need to know about our premium transportation services.
          </p>
        </div>

        <div className={styles.fadeInUp} style={{ animationDelay: '0.1s' }}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div 
                className={styles.faqQuestion} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.q}
                {openIndex === index ? <ChevronUp size={20} color="#2E8B57" /> : <ChevronDown size={20} color="#475569" />}
              </div>
              {openIndex === index && (
                <div className={styles.faqAnswer}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
