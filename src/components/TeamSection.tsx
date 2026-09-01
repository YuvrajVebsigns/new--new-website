'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'John Die',
      role: 'Founder',
      image: '/favicon.ico',
      linkedin: 'https://www.linkedin.com/in/mathuranoop',
    },
    {
      name: 'John Die',
      role: 'Country Director',
      image: '/favicon.ico',
      linkedin: 'https://www.linkedin.com/in/sudhir-kamath-9a6baa4',
    },
    {
      name: 'John Die',
      role: 'Head Sales & Event Operations',
      image: '/favicon.ico',
      linkedin: 'https://www.linkedin.com/in/sadanandmanda',
    },
    {
      name: 'John Die',
      role: 'Founder, CORE Media',
      image: '/favicon.ico',
      linkedin: 'https://www.linkedin.com/in/mathuranoop',
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLDivElement>('.team-card'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLDivElement;

          if (entry.isIntersecting) {
            el.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach((card, i) => {
      card.style.setProperty('--delay', `${i * 120}ms`);
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="team-section">
      <div className="team-container">
        <header className="team-header">
          <h2 className="team-title">Meet Our Expert Team</h2>
          <p>Dedicated professionals committed to your success</p>
        </header>

        <div className="team-grid" ref={containerRef}>
          {teamMembers.map((member) => (
            <article className="team-card" key={`${member.name}-${member.role}`}>
              <div className="team-image-wrap">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="team-image"
                />
              </div>

              <div className="team-content">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <a
                  href={member.linkedin}
                  className="team-profile-link talk-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
