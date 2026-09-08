'use client';

import { useEffect, useRef, useState } from 'react';

type AboutSection = {
  title?: string;
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

const aboutContent: AboutSection[] = [
  {
    title: 'About Vishwasai',
    heading: 'Navigating the Future of Cooperative Agriculture & Finance',
    paragraphs: [
      'Vishwasai is a consultancy organization specializing in cooperative agriculture and finance.',
      'Established in 2009, the organization works with businesses, cooperative institutions and agricultural organizations to provide professional guidance across financial, management and business-development requirements.',
      "Our objective is to simplify complex business and financial processes while providing practical and customized solutions based on each client's requirements.",
    ],
  },
  {
    title: 'Who We Are',
    paragraphs: [
      'Vishwasai is a consultancy organization specializing in cooperative agriculture and finance.',
      'Established in 2009, the organization works with businesses, cooperative institutions and agricultural organizations to provide professional guidance across financial, management and business-development requirements.',
      "Our objective is to simplify complex business and financial processes while providing practical and customized solutions based on each client's requirements.",
    ],
  },
  {
    title: 'Our Understanding of Cooperative Finance',
    paragraphs: [
      'A Cooperative Agriculture & Finance Society is a cooperative financial institution established under the applicable Cooperative Societies Act.',
      'These organizations play an important role in providing financial services and support to their members and the wider agricultural ecosystem.',
      'The cooperative ecosystem includes organizations such as:',
    ],
    list: [
      'Primary Agriculture Cooperative Societies (PACS)',
      'Cooperative Federations',
      'FPO Federations',
      'Credit Cooperative Societies',
      'Multistate Cooperative Societies',
    ],
  },
  {
    title: 'Our Mission',
    heading: 'Empowering Organizations Through Knowledge & Financial Solutions',
    paragraphs: [
      'Our mission is to provide reliable consultancy, strategic guidance and customized solutions that help organizations grow, comply with applicable requirements and achieve sustainable business objectives.',
    ],
  },
  {
    title: 'Our Vision',
    heading: 'Creating a Stronger Cooperative & Agricultural Ecosystem',
    paragraphs: [
      'We aim to contribute to the development of a stronger and more financially capable cooperative and agricultural ecosystem through professional consultancy, knowledge and business solutions.',
    ],
  },
  {
    title: 'Why Vishwasai?',
    paragraphs: [
      'Our consultants bring extensive experience in the cooperative sector and understand the unique challenges and opportunities associated with credit societies, multistate organizations and NBFCs.',
      'Every organization has different requirements. We focus on customized, relevant and actionable solutions rather than applying a one-size-fits-all approach.',
      'We remain committed to supporting our clients throughout their journey by providing continuous guidance and professional assistance.',
    ],
  },
  {
    title: 'Experience',
    heading: 'Since 2009',
    paragraphs: [
      'Vishwasai presents its journey as beginning in 2009, with a focus on consultancy for cooperative agriculture and finance.',
    ],
  },
];

export default function AboutUsPage() {
  const pageRef = useRef<HTMLElement | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [experience, setExperience] = useState(0);
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  /* =========================================
     SCROLL REVEAL + ACTIVE SECTION
  ========================================= */

  useEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const revealElements = page.querySelectorAll<HTMLElement>('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-text-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -80px 0px',
      },
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    const sections = page.querySelectorAll<HTMLElement>('[data-section-index]');

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-section-index'));

            setActiveSection(index);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '-20% 0px -55% 0px',
      },
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    const updateScrollProgress = () => {
      const pageTop = page.offsetTop;
      const pageHeight = page.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollPosition = window.scrollY - pageTop;
      const availableScroll = pageHeight - viewportHeight;

      if (availableScroll <= 0) {
        setScrollProgress(100);
        return;
      }

      const progress = Math.min(Math.max((scrollPosition / availableScroll) * 100, 0), 100);

      setScrollProgress(progress);
    };

    updateScrollProgress();

    window.addEventListener('scroll', updateScrollProgress, {
      passive: true,
    });

    window.addEventListener('resize', updateScrollProgress);

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();

      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  /* =========================================
     MOUSE FOLLOW GLOW
  ========================================= */

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  /* =========================================
     EXPERIENCE COUNTER
  ========================================= */

  useEffect(() => {
    const target = new Date().getFullYear() - 2009;

    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      setExperience(current);

      if (current >= target) {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  /* =========================================
     SMOOTH SCROLL
  ========================================= */

  const scrollToSection = (index: number) => {
    const element = document.getElementById(`about-section-${index}`);

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  /* =========================================
     CARD TILT
  ========================================= */

  const handleCardMove = (event: React.MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -5;
    const rotateY = (x / rect.width - 0.5) * 5;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;
  };

  const handleCardLeave = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <>
      <main
        ref={pageRef}
        className="about-page"
        style={
          {
            '--mouse-x': `${mousePosition.x}%`,
            '--mouse-y': `${mousePosition.y}%`,
          } as React.CSSProperties
        }
      >
        {/* SCROLL PROGRESS */}

        <div className="about-scroll-progress" aria-hidden="true">
          <span
            style={{
              width: `${scrollProgress}%`,
            }}
          />
        </div>

        {/* MOUSE GLOW */}

        <div className="about-mouse-glow" aria-hidden="true" />

        {/* BACKGROUND */}

        <div className="about-background-grid" aria-hidden="true" />

        <div className="about-background-shape about-shape-one" aria-hidden="true" />

        <div className="about-background-shape about-shape-two" aria-hidden="true" />

        {/* =========================================
            HERO
        ========================================= */}

        <section className="about-page-heading">
          <div className="about-container">
            <div className="about-hero-content">
              <span className="about-eyebrow">WHO WE ARE</span>

              <p className="about-page-heading-label">About Vishwasai</p>

              <h1>
                Navigating the Future of
                <span> Cooperative Agriculture & Finance</span>
              </h1>

              <span className="about-page-heading-line" aria-hidden="true" />

              <p className="about-hero-description">
                Professional consultancy, strategic guidance and practical financial solutions for a
                stronger cooperative ecosystem.
              </p>

              <button className="about-explore-button" onClick={() => scrollToSection(0)}>
                <span>Explore Our Story</span>

                <span className="about-button-arrow">↓</span>
              </button>
            </div>

            {/* EXPERIENCE */}

            <div className="about-experience-card">
              <div className="about-experience-number">{experience}+</div>

              <div className="about-experience-label">
                Years of
                <br />
                Experience
              </div>

              <div className="about-experience-ring" />
            </div>
          </div>
        </section>

        {/* =========================================
            SIDE NAVIGATION
        ========================================= */}

        <aside className="about-section-navigation">
          <div className="about-nav-line" />

          {aboutContent.map((section, index) => (
            <button
              key={section.title}
              className={activeSection === index ? 'about-nav-item active' : 'about-nav-item'}
              onClick={() => scrollToSection(index)}
              aria-label={`Go to ${section.title}`}
            >
              <span className="about-nav-number">{String(index + 1).padStart(2, '0')}</span>

              <span className="about-nav-dot" />

              <span className="about-nav-tooltip">{section.title}</span>
            </button>
          ))}
        </aside>

        {/* =========================================
            CONTENT
        ========================================= */}

        <section className="about-content-section">
          <div className="about-container">
            <div className="about-section-intro" data-reveal>
              <span>OUR STORY</span>

              <h2>
                Building trust through
                <strong> knowledge & experience.</strong>
              </h2>

              <p>Explore the principles, experience and vision behind Vishwasai.</p>
            </div>

            <div className="about-text-list">
              {aboutContent.map((section, index) => (
                <article
                  id={`about-section-${index}`}
                  key={`${section.title}-${index}`}
                  data-section-index={index}
                  data-reveal
                  className={['about-text-card', activeSection === index ? 'about-card-active' : '']
                    .filter(Boolean)
                    .join(' ')}
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                  onMouseMove={handleCardMove}
                  onMouseLeave={handleCardLeave}
                >
                  {/* NUMBER */}

                  <div className="about-card-number">{String(index + 1).padStart(2, '0')}</div>

                  <span className="about-card-line" aria-hidden="true" />

                  <div className="about-card-content">
                    {section.title && <h2>{section.title}</h2>}

                    {section.heading && <h3>{section.heading}</h3>}

                    {section.paragraphs?.map((paragraph, paragraphIndex) => (
                      <p key={`${paragraph}-${paragraphIndex}`}>{paragraph}</p>
                    ))}

                    {section.list && (
                      <ul className="about-list">
                        {section.list.map((item, itemIndex) => (
                          <li key={item}>
                            <span className="about-list-number">
                              {String(itemIndex + 1).padStart(2, '0')}
                            </span>

                            <span className="about-list-text">{item}</span>

                            <span className="about-list-arrow">→</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="about-card-corner" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            FINAL CTA
        ========================================= */}

        <section className="about-final-section">
          <div className="about-final-glow" />

          <div className="about-container">
            <div className="about-final-content" data-reveal>
              <span>THE JOURNEY CONTINUES</span>

              <h2>
                Growing together.
                <br />
                Building a stronger future.
              </h2>

              <p>
                Vishwasai continues to support organizations through professional consultancy,
                knowledge and practical business solutions.
              </p>

              <button
                className="about-final-button"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }
              >
                Back to Top
                <span>↑</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================
          ALL CSS INSIDE TSX
      ========================================= */}

      <style jsx>{`
        /* ==============================
           VARIABLES
        ============================== */

        .about-page {
          --about-dark: #071426;
          --about-dark-2: #0b1d34;
          --about-blue: #1683ff;
          --about-blue-light: #54b8ff;
          --about-cyan: #6ee7f9;
          --about-white: #ffffff;
          --about-text: #182b42;
          --about-muted: #64748b;
          --about-border: rgba(15, 43, 72, 0.12);

          position: relative;
          overflow: hidden;

          background: #f7faff;
          color: var(--about-text);
        }

        /* ==============================
           CONTAINER
        ============================== */

        .about-container {
          width: min(1180px, calc(100% - 40px));

          margin: 0 auto;

          position: relative;
          z-index: 2;
        }

        /* ==============================
           SCROLL PROGRESS
        ============================== */

        .about-scroll-progress {
          position: fixed;

          top: 0;
          left: 0;

          width: 100%;
          height: 4px;

          z-index: 9999;

          background: rgba(7, 20, 38, 0.08);
        }

        .about-scroll-progress span {
          display: block;

          height: 100%;

          background: linear-gradient(90deg, #1683ff, #54b8ff, #6ee7f9);

          transition: width 0.12s linear;
        }

        /* ==============================
           MOUSE GLOW
        ============================== */

        .about-mouse-glow {
          position: fixed;

          width: 500px;
          height: 500px;

          border-radius: 50%;

          pointer-events: none;

          z-index: 0;

          left: var(--mouse-x);
          top: var(--mouse-y);

          transform: translate(-50%, -50%);

          background: radial-gradient(
            circle,
            rgba(84, 184, 255, 0.12) 0%,
            rgba(84, 184, 255, 0.04) 35%,
            transparent 70%
          );

          transition:
            left 0.15s ease-out,
            top 0.15s ease-out;
        }

        /* ==============================
           BACKGROUND GRID
        ============================== */

        .about-background-grid {
          position: absolute;

          inset: 0;

          opacity: 0.35;

          pointer-events: none;

          background-image:
            linear-gradient(rgba(22, 131, 255, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22, 131, 255, 0.045) 1px, transparent 1px);

          background-size: 50px 50px;

          mask-image: linear-gradient(to bottom, black, transparent 75%);
        }

        /* ==============================
           FLOATING SHAPES
        ============================== */

        .about-background-shape {
          position: absolute;

          pointer-events: none;

          border-radius: 50%;
        }

        .about-shape-one {
          width: 480px;
          height: 480px;

          top: 250px;
          right: -220px;

          background: radial-gradient(circle, rgba(22, 131, 255, 0.12), transparent 70%);

          animation: aboutFloatOne 9s ease-in-out infinite;
        }

        .about-shape-two {
          width: 420px;
          height: 420px;

          top: 1000px;
          left: -220px;

          background: radial-gradient(circle, rgba(110, 231, 249, 0.11), transparent 70%);

          animation: aboutFloatTwo 11s ease-in-out infinite;
        }

        @keyframes aboutFloatOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-30px, 40px, 0) scale(1.08);
          }
        }

        @keyframes aboutFloatTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(40px, -30px, 0);
          }
        }

        /* ==============================
           HERO
        ============================== */

        .about-page-heading {
          position: relative;

          min-height: 540px;

          display: flex;
          align-items: center;

          color: white;

          background:
            radial-gradient(circle at 80% 20%, rgba(84, 184, 255, 0.2), transparent 35%),
            linear-gradient(135deg, #061224 0%, #0b1d34 55%, #102d4d 100%);

          overflow: hidden;
        }

        .about-page-heading::before {
          content: '';

          position: absolute;

          inset: 0;

          background-image:
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);

          background-size: 60px 60px;

          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .about-hero-content {
          max-width: 820px;

          padding: 60px 0 40px;

          animation: aboutHeroReveal 1s ease both;
        }

        @keyframes aboutHeroReveal {
          from {
            opacity: 0;

            transform: translateY(35px);
          }

          to {
            opacity: 1;

            transform: translateY(0);
          }
        }

        .about-eyebrow {
          display: inline-flex;

          align-items: center;

          gap: 12px;

          margin-bottom: 20px;

          color: #6ee7f9;

          font-size: 12px;

          font-weight: 700;

          letter-spacing: 0.22em;
        }

        .about-eyebrow::before {
          content: '';

          width: 35px;
          height: 1px;

          background: currentColor;
        }

        .about-page-heading-label {
          margin: 0 0 15px;

          color: #8eb9df;

          font-size: 15px;

          font-weight: 600;

          letter-spacing: 0.08em;

          text-transform: uppercase;
        }

        .about-page-heading h1 {
          max-width: 900px;

          margin: 0;

          color: #ffffff;

          font-size: clamp(42px, 6vw, 76px);

          line-height: 1.05;

          letter-spacing: -0.045em;

          font-weight: 700;
        }

        .about-page-heading h1 span {
          color: #bfeeff;
        }

        .about-page-heading-line {
          display: block;

          width: 110px;
          height: 3px;

          margin: 30px 0;

          background: linear-gradient(90deg, #1683ff, #6ee7f9);

          border-radius: 10px;
        }

        .about-hero-description {
          max-width: 650px;

          margin: 0 0 30px;

          color: #b8c9da;

          font-size: 17px;

          line-height: 1.8;
        }

        /* ==============================
           EXPLORE BUTTON
        ============================== */

        .about-explore-button {
          display: inline-flex;

          align-items: center;

          gap: 15px;

          border: 1px solid rgba(255, 255, 255, 0.2);

          border-radius: 50px;

          padding: 13px 18px 13px 22px;

          color: white;

          background: rgba(255, 255, 255, 0.06);

          cursor: pointer;

          font-size: 14px;

          font-weight: 600;

          backdrop-filter: blur(15px);

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .about-explore-button:hover {
          transform: translateY(-4px);

          background: rgba(255, 255, 255, 0.12);

          border-color: rgba(110, 231, 249, 0.5);
        }

        .about-button-arrow {
          width: 32px;
          height: 32px;

          display: grid;

          place-items: center;

          border-radius: 50%;

          background: #1683ff;

          transition: transform 0.3s ease;
        }

        .about-explore-button:hover .about-button-arrow {
          transform: translateY(3px);
        }

        /* ==============================
           EXPERIENCE
        ============================== */

        .about-experience-card {
          position: absolute;

          right: 0;
          bottom: 90px;

          width: 175px;
          height: 175px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          border: 1px solid rgba(255, 255, 255, 0.15);

          border-radius: 50%;

          background: rgba(255, 255, 255, 0.06);

          backdrop-filter: blur(18px);

          animation:
            aboutExperienceFloat 5s ease-in-out infinite,
            aboutHeroReveal 1s ease both;

          z-index: 3;
        }

        .about-experience-number {
          font-size: 38px;

          font-weight: 800;

          line-height: 1;

          color: #ffffff;
        }

        .about-experience-label {
          margin-top: 8px;

          color: #a8c4dd;

          font-size: 12px;

          line-height: 1.4;

          text-align: center;
        }

        .about-experience-ring {
          position: absolute;

          inset: -9px;

          border: 1px dashed rgba(110, 231, 249, 0.35);

          border-radius: 50%;

          animation: aboutRotate 15s linear infinite;
        }

        @keyframes aboutRotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes aboutExperienceFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        /* ==============================
           SIDE NAVIGATION
        ============================== */

        .about-section-navigation {
          position: fixed;

          right: 25px;
          top: 50%;

          transform: translateY(-50%);

          display: flex;

          flex-direction: column;

          align-items: center;

          gap: 12px;

          z-index: 50;
        }

        .about-nav-line {
          position: absolute;

          top: 10px;
          bottom: 10px;

          width: 1px;

          background: rgba(7, 20, 38, 0.15);
        }

        .about-nav-item {
          position: relative;

          width: 24px;
          height: 24px;

          border: 0;

          background: transparent;

          cursor: pointer;

          display: flex;

          align-items: center;

          justify-content: center;

          z-index: 2;
        }

        .about-nav-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #a8b7c8;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .about-nav-item.active .about-nav-dot {
          width: 11px;
          height: 11px;

          background: #1683ff;

          box-shadow:
            0 0 0 5px rgba(22, 131, 255, 0.12),
            0 0 20px rgba(22, 131, 255, 0.4);
        }

        .about-nav-number {
          position: absolute;

          right: 32px;

          font-size: 10px;

          font-weight: 700;

          color: #1683ff;

          opacity: 0;

          transform: translateX(5px);

          transition:
            opacity 0.25s ease,
            transform 0.25s ease;
        }

        .about-nav-item.active .about-nav-number {
          opacity: 1;

          transform: translateX(0);
        }

        .about-nav-tooltip {
          position: absolute;

          right: 38px;

          width: max-content;

          max-width: 180px;

          padding: 7px 10px;

          border-radius: 6px;

          background: #071426;

          color: white;

          font-size: 11px;

          opacity: 0;

          pointer-events: none;

          transform: translateX(8px);

          transition:
            opacity 0.25s ease,
            transform 0.25s ease;
        }

        .about-nav-item:hover .about-nav-tooltip {
          opacity: 1;

          transform: translateX(0);
        }

        /* ==============================
           CONTENT
        ============================== */

        .about-content-section {
          position: relative;

          padding: 60px 0 130px;
        }

        .about-section-intro {
          max-width: 700px;

          margin-bottom: 90px;
        }

        .about-section-intro span {
          display: block;

          margin-bottom: 18px;

          color: #1683ff;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 0.2em;
        }

        .about-section-intro h2 {
          margin: 0;

          font-size: clamp(34px, 4vw, 54px);

          line-height: 1.12;

          letter-spacing: -0.035em;
        }

        .about-section-intro h2 strong {
          display: block;

          color: #1683ff;
        }

        .about-section-intro p {
          margin-top: 25px;

          color: var(--about-muted);

          font-size: 17px;
        }

        /* ==============================
           CARDS
        ============================== */

        .about-text-list {
          position: relative;

          display: flex;

          flex-direction: column;

          gap: 30px;
        }

        .about-text-card {
          position: relative;

          display: grid;

          grid-template-columns: 80px 1fr;

          padding: 48px 50px;

          border: 1px solid var(--about-border);

          border-radius: 22px;

          background: rgba(255, 255, 255, 0.78);

          box-shadow: 0 20px 60px rgba(12, 43, 73, 0.06);

          overflow: hidden;

          opacity: 1;

          transform: translateY(0) perspective(1000px);

          transition:
            opacity 0.8s ease,
            transform 0.8s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .about-text-visible {
          opacity: 1;

          transform: translateY(0) perspective(1000px);
        }

        .about-text-card:hover {
          box-shadow: 0 30px 80px rgba(12, 43, 73, 0.12);

          border-color: rgba(22, 131, 255, 0.25);
        }

        .about-card-active {
          border-color: rgba(22, 131, 255, 0.35);

          box-shadow: 0 25px 75px rgba(22, 131, 255, 0.09);
        }

        .about-card-number {
          color: #1683ff;

          font-size: 15px;

          font-weight: 800;

          letter-spacing: 0.08em;
        }

        .about-card-line {
          position: absolute;

          top: 0;
          left: 0;

          width: 4px;

          height: 0;

          background: linear-gradient(to bottom, #1683ff, #6ee7f9);

          transition: height 0.5s ease;
        }

        .about-text-card:hover .about-card-line,
        .about-card-active .about-card-line {
          height: 100%;
        }

        .about-card-content {
          max-width: 850px;
        }

        .about-card-content h2 {
          margin: 0 0 15px;

          font-size: 27px;

          line-height: 1.2;

          color: #0b1d34;
        }

        .about-card-content h3 {
          margin: 0 0 25px;

          font-size: 23px;

          line-height: 1.35;

          color: #1683ff;
        }

        .about-card-content p {
          margin: 0 0 17px;

          color: #52657a;

          font-size: 16px;

          line-height: 1.85;
        }

        .about-card-content p:last-child {
          margin-bottom: 0;
        }

        /* ==============================
           LIST
        ============================== */

        .about-list {
          list-style: none;

          padding: 0;

          margin: 28px 0 0;

          border-top: 1px solid var(--about-border);
        }

        .about-list li {
          display: grid;

          grid-template-columns: 45px 1fr 30px;

          align-items: center;

          gap: 15px;

          padding: 18px 0;

          border-bottom: 1px solid var(--about-border);

          transition:
            padding 0.3s ease,
            background 0.3s ease;
        }

        .about-list li:hover {
          padding-left: 10px;

          padding-right: 10px;

          background: rgba(22, 131, 255, 0.035);
        }

        .about-list-number {
          font-size: 11px;

          font-weight: 800;

          color: #1683ff;
        }

        .about-list-text {
          font-size: 15px;

          font-weight: 600;

          color: #30445a;
        }

        .about-list-arrow {
          color: #1683ff;

          opacity: 0;

          transform: translateX(-8px);

          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        }

        .about-list li:hover .about-list-arrow {
          opacity: 1;

          transform: translateX(0);
        }

        /* ==============================
           CARD CORNER
        ============================== */

        .about-card-corner {
          position: absolute;

          right: -60px;
          bottom: -60px;

          width: 150px;
          height: 150px;

          border-radius: 50%;

          border: 1px solid rgba(22, 131, 255, 0.08);

          transition:
            transform 0.5s ease,
            border-color 0.5s ease;
        }

        .about-text-card:hover .about-card-corner {
          transform: scale(1.3);

          border-color: rgba(22, 131, 255, 0.18);
        }

        /* ==============================
           FINAL SECTION
        ============================== */

        .about-final-section {
          position: relative;

          min-height: 550px;

          display: flex;

          align-items: center;

          overflow: hidden;

          color: white;

          background:
            radial-gradient(circle at 70% 40%, rgba(84, 184, 255, 0.18), transparent 35%),
            linear-gradient(135deg, #061224, #0b1d34);
        }

        .about-final-glow {
          position: absolute;

          width: 500px;
          height: 500px;

          right: -200px;
          top: -100px;

          border-radius: 50%;

          background: rgba(22, 131, 255, 0.1);

          filter: blur(30px);

          animation: aboutFloatOne 8s infinite ease-in-out;
        }

        .about-final-content {
          max-width: 760px;

          padding: 100px 0;
        }

        .about-final-content span {
          color: #6ee7f9;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 0.2em;
        }

        .about-final-content h2 {
          margin: 20px 0;

          font-size: clamp(40px, 5vw, 68px);

          line-height: 1.08;

          letter-spacing: -0.04em;
        }

        .about-final-content p {
          max-width: 650px;

          color: #a9bfd5;

          font-size: 16px;

          line-height: 1.8;
        }

        .about-final-button {
          display: inline-flex;

          align-items: center;

          gap: 18px;

          margin-top: 30px;

          padding: 13px 18px 13px 22px;

          border: 1px solid rgba(255, 255, 255, 0.15);

          border-radius: 50px;

          color: white;

          background: rgba(255, 255, 255, 0.06);

          cursor: pointer;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .about-final-button span {
          width: 30px;
          height: 30px;

          display: grid;

          place-items: center;

          border-radius: 50%;

          background: #1683ff;

          color: white;

          transition: transform 0.3s ease;
        }

        .about-final-button:hover {
          transform: translateY(-4px);

          background: rgba(255, 255, 255, 0.11);
        }

        .about-final-button:hover span {
          transform: translateY(-3px);
        }

        /* ==============================
           MOBILE
        ============================== */

        @media (max-width: 900px) {
          .about-page-heading {
            min-height: 500px;
          }

          .about-experience-card {
            width: 130px;
            height: 130px;

            right: 20px;
            bottom: 45px;
          }

          .about-experience-number {
            font-size: 28px;
          }

          .about-experience-label {
            font-size: 10px;
          }

          .about-section-navigation {
            display: none;
          }

          .about-text-card {
            grid-template-columns: 45px 1fr;

            padding: 35px 25px;
          }

          .about-card-content h2 {
            font-size: 24px;
          }

          .about-card-content h3 {
            font-size: 20px;
          }
        }

        @media (max-width: 600px) {
          .about-container {
            width: min(100% - 28px, 1180px);
          }

          .about-page-heading {
            min-height: 650px;
          }

          .about-hero-content {
            padding: 50px 0 90px;
          }

          .about-page-heading h1 {
            font-size: 43px;
          }

          .about-hero-description {
            font-size: 15px;
          }

          .about-experience-card {
            display: none;
            right: 15px;
            bottom: -20px;
          }

          .about-content-section {
            padding: 45px 0 90px;
          }

          .about-section-intro {
            margin-bottom: 55px;
          }

          .about-section-intro h2 {
            font-size: 36px;
          }

          .about-text-list {
            gap: 20px;
          }

          .about-text-card {
            grid-template-columns: 1fr;

            padding: 32px 22px;
          }

          .about-card-number {
            margin-bottom: 18px;
          }

          .about-card-content h2 {
            font-size: 23px;
          }

          .about-card-content p {
            font-size: 15px;

            line-height: 1.75;
          }

          .about-list li {
            grid-template-columns: 32px 1fr 20px;

            gap: 10px;
          }

          .about-list-text {
            font-size: 14px;
          }

          .about-final-section {
            min-height: 500px;
          }

          .about-final-content {
            padding: 80px 0;
          }

          .about-final-content h2 {
            font-size: 42px;
          }
        }

        /* ==============================
           REDUCED MOTION
        ============================== */

        @media (prefers-reduced-motion: reduce) {
          .about-background-shape,
          .about-experience-card,
          .about-experience-ring {
            animation: none;
          }

          .about-text-card {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
