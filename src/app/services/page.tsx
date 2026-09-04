'use client';

import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  ChartNoAxesCombined,
  Coins,
  Globe2,
  Handshake,
  Landmark,
  LineChart,
  Tractor,
  Users,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    number: '01',
    title: 'Multistate Credit Cooperative Societies',
    heading: 'Professional Consultancy for Multistate Credit Cooperatives',
    description:
      'Vishwasai provides consultancy support for organizations operating in the multistate credit cooperative sector.',
    details:
      'Our expertise helps clients understand the challenges, requirements and opportunities associated with establishing, managing and developing multistate credit cooperative organizations.',
    icon: Landmark,
  },
  {
    number: '02',
    title: 'NBFC Consultancy',
    heading: 'From RBI Norms to Establishment',
    description:
      'Vishwasai provides consultancy covering the NBFC journey from understanding applicable RBI requirements through the establishment and development process.',
    details:
      'Our consultants combine financial-sector knowledge with an understanding of the cooperative ecosystem to help clients navigate the challenges and opportunities associated with NBFCs.',
    icon: Building2,
  },
  {
    number: '03',
    title: 'Farmer Producer Organisations',
    heading: 'Supporting Farmer-Centric Organizations',
    description:
      'Farmer Producer Organisations play an important role in bringing farmers together and creating stronger agricultural business structures.',
    details:
      'Vishwasai provides consultancy support to FPO-related organizations and helps them address business, financial and organizational requirements.',
    icon: Tractor,
  },
  {
    number: '04',
    title: 'Acquisition Facility',
    heading: 'Supporting Strategic Acquisition Opportunities',
    description:
      'Vishwasai provides consultancy relating to acquisition opportunities and the associated financial and business requirements.',
    details:
      'Our approach focuses on helping clients evaluate opportunities and structure solutions according to their objectives.',
    icon: Handshake,
  },
  {
    number: '05',
    title: 'Project Funding',
    heading: 'Funding Solutions for Projects',
    description: 'Vishwasai assists organizations with project funding requirements.',
    details:
      'We help clients understand their funding needs and work toward suitable financial solutions for their projects and business objectives.',
    icon: Coins,
  },
  {
    number: '06',
    title: 'Loan Funding',
    heading: 'Financial Support for Business Requirements',
    description: 'Vishwasai provides consultancy for loan-related funding requirements.',
    details:
      'Our team assists clients in understanding their requirements and identifying appropriate financing solutions.',
    icon: LineChart,
  },
  {
    number: '07',
    title: 'Management Consulting',
    heading: 'Strategic Guidance for Better Business Decisions',
    description:
      'Our management consulting services provide organizations with professional guidance designed around their specific challenges and objectives.',
    details:
      'We focus on practical, actionable solutions that can support organizational development and sustainable growth.',
    icon: ChartNoAxesCombined,
  },
  {
    number: '08',
    title: 'Real Estate Consulting',
    heading: 'Professional Real Estate Advisory',
    description:
      'Vishwasai also provides real estate consultancy as part of its broader business advisory portfolio.',
    details:
      'Our services are designed to assist clients with their real-estate-related business and advisory requirements.',
    icon: Building2,
  },
  {
    number: '09',
    title: 'Business Development Consultancy',
    heading: 'Building Businesses for Sustainable Growth',
    description: 'Vishwasai supports organizations looking to develop and expand their businesses.',
    details:
      'Our business development consultancy focuses on identifying opportunities, improving business strategies and supporting long-term growth.',
    icon: Users,
  },
  {
    number: '10',
    title: 'Export Import Consulting Software',
    heading: 'Technology & Consultancy for Export-Import Activities',
    description:
      'Vishwasai provides consultancy and software-related support associated with export-import activities.',
    details:
      'The service is intended to help businesses manage and navigate requirements associated with international trade.',
    icon: Globe2,
  },
];

const approach = [
  {
    number: '01',
    title: 'Understand',
    text: 'We begin by understanding your organization, requirements, objectives and challenges.',
  },
  {
    number: '02',
    title: 'Analyze',
    text: 'We examine the business, financial and organizational requirements to identify the right direction.',
  },
  {
    number: '03',
    title: 'Strategize',
    text: 'We develop a focused strategy designed around your goals and long-term objectives.',
  },
  {
    number: '04',
    title: 'Support',
    text: 'We provide practical guidance and continued professional support throughout the journey.',
  },
];

export default function ServicesPage() {
  const pageRef = useRef<HTMLElement>(null);

  const [activeService, setActiveService] = useState(0);
  const [progress, setProgress] = useState(0);
  const [cursor, setCursor] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const revealItems = page.querySelectorAll<HTMLElement>('[data-reveal]');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    revealItems.forEach((item) => {
      revealObserver.observe(item);
    });

    const serviceItems = page.querySelectorAll<HTMLElement>('[data-service]');

    const serviceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-service'));

            setActiveService(index);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: '-15% 0px -45% 0px',
      },
    );

    serviceItems.forEach((item) => {
      serviceObserver.observe(item);
    });

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;

      setProgress(height > 0 ? Math.min((scrollTop / height) * 100, 100) : 0);
    };

    window.addEventListener('scroll', updateProgress, {
      passive: true,
    });

    return () => {
      revealObserver.disconnect();
      serviceObserver.disconnect();

      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      setCursor({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const goToService = (index: number) => {
    const element = document.getElementById(`service-${index}`);

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <>
      <main
        ref={pageRef}
        className="v-services"
        style={
          {
            '--cursor-x': `${cursor.x}%`,
            '--cursor-y': `${cursor.y}%`,
          } as React.CSSProperties
        }
      >
        {/* =========================================
            PROGRESS BAR
        ========================================= */}

        <div className="v-progress">
          <span style={{ width: `${progress}%` }} />
        </div>

        {/* =========================================
            CURSOR GLOW
        ========================================= */}

        <div className="v-cursor-glow" />

        {/* =========================================
            HERO
        ========================================= */}

        <section className="v-hero">
          <div className="v-noise" />

          <div className="v-hero-grid" />

          <div className="v-container">
            <div className="v-hero-layout">
              <div className="v-hero-main" data-reveal>
                <div className="v-label">
                  <span className="v-label-line" />
                  OUR SERVICES
                </div>

                <h1>
                  Supporting
                  <br />
                  Your
                  <em> Cooperative</em>
                  <br />
                  Journey.
                </h1>

                <p>
                  Professional consultancy and business solutions designed around your organizations
                  requirements.
                </p>

                <button className="v-scroll-button" onClick={() => goToService(0)}>
                  <span>Explore services</span>

                  <span className="v-scroll-circle">
                    <ArrowDown size={17} />
                  </span>
                </button>
              </div>

              <div className="v-hero-side" data-reveal>
                <div className="v-big-number">10</div>

                <div className="v-big-number-text">
                  SPECIALIZED
                  <br />
                  SERVICES
                </div>

                <div className="v-hero-side-line" />

                <p>
                  Consultancy
                  <br />
                  Strategy
                  <br />
                  Financial Solutions
                  <br />
                  Business Growth
                </p>
              </div>
            </div>
          </div>

          <div className="v-hero-bottom">
            <span>VISHWASAI</span>
            <span>CONSULTANCY • FINANCE • BUSINESS</span>
          </div>
        </section>

        {/* =========================================
            INTRO
        ========================================= */}

        <section className="v-intro">
          <div className="v-container">
            <div className="v-intro-grid">
              <div data-reveal>
                <div className="v-section-number">01 / WHAT WE DO</div>

                <h2>
                  Expertise built
                  <br />
                  around <span>your goals.</span>
                </h2>
              </div>

              <div className="v-intro-copy" data-reveal>
                <p>
                  Vishwasai provides professional consultancy and business solutions across
                  cooperative finance, agriculture, funding, management, real estate and
                  international trade.
                </p>

                <div className="v-intro-line">
                  <span />
                </div>

                <small>Practical thinking. Professional guidance. Long-term perspective.</small>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SERVICE DIRECTORY
        ========================================= */}

        <section className="v-services-section">
          <div className="v-container">
            <div className="v-service-layout">
              {/* LEFT STICKY INDEX */}

              <aside className="v-service-index">
                <div className="v-index-title">SERVICES</div>

                <div className="v-index-items">
                  {services.map((service, index) => (
                    <button
                      key={service.number}
                      onClick={() => goToService(index)}
                      className={activeService === index ? 'active' : ''}
                    >
                      <span>{service.number}</span>

                      <i />

                      <strong>{service.title}</strong>
                    </button>
                  ))}
                </div>

                <div className="v-index-progress">
                  <span
                    style={{
                      height: `${((activeService + 1) / services.length) * 100}%`,
                    }}
                  />
                </div>
              </aside>

              {/* SERVICE CONTENT */}

              <div className="v-service-content">
                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <article
                      id={`service-${index}`}
                      data-service={index}
                      data-reveal
                      className={activeService === index ? 'v-service active-service' : 'v-service'}
                      key={service.number}
                    >
                      <div className="v-service-top">
                        <span className="v-service-number">{service.number}</span>

                        <div className="v-service-icon">
                          <Icon size={25} />
                        </div>
                      </div>

                      <div className="v-service-body">
                        <div className="v-service-title">
                          <h2>{service.title}</h2>

                          <span>
                            <ArrowUpRight size={24} />
                          </span>
                        </div>

                        <h3>{service.heading}</h3>

                        <p className="v-service-description">{service.description}</p>

                        <p className="v-service-details">{service.details}</p>

                        <Link href="/contact" className="v-service-link">
                          Discuss Your Requirements
                          <ArrowUpRight size={16} />
                        </Link>
                      </div>

                      <div className="v-service-bottom">
                        <span>VISHWASAI CONSULTANCY</span>

                        <span>{service.number} / 10</span>
                      </div>

                      <div className="v-service-bg-number">{service.number}</div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            APPROACH
        ========================================= */}

        <section className="v-approach">
          <div className="v-approach-grid" />

          <div className="v-container">
            <div className="v-approach-heading" data-reveal>
              <div className="v-label">
                <span className="v-label-line" />
                OUR APPROACH
              </div>

              <h2>
                From requirement
                <br />
                to <span>solution.</span>
              </h2>

              <p>
                A structured approach helps us understand your requirements and provide practical,
                professional guidance.
              </p>
            </div>

            <div className="v-steps">
              {approach.map((step, index) => (
                <div
                  className="v-step"
                  data-reveal
                  key={step.number}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="v-step-number">{step.number}</div>

                  <div className="v-step-line" />

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>

                  {index !== approach.length - 1 && (
                    <div className="v-step-arrow">
                      <ArrowUpRight size={18} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            CTA
        ========================================= */}

        <section className="v-cta">
          <div className="v-cta-circle v-circle-one" />
          <div className="v-cta-circle v-circle-two" />

          <div className="v-container">
            <div className="v-cta-inner" data-reveal>
              <div className="v-label">
                <span className="v-label-line" />
                LETS WORK TOGETHER
              </div>

              <h2>
                Have a requirement
                <br />
                <span>in mind?</span>
              </h2>

              <p>
                Tell us about your organization and requirements. Lets explore the right consultancy
                and business solution together.
              </p>

              <Link href="/contact" className="v-cta-button">
                <span>Discuss Your Requirements</span>

                <i>
                  <ArrowUpRight size={20} />
                </i>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ===========================================
          CSS
      =========================================== */}

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .v-services {
          --navy: #061426;
          --navy-light: #0d2742;
          --blue: #1683ff;
          --cyan: #6ee7f9;
          --white: #ffffff;
          --black: #07111f;
          --text: #263b50;
          --muted: #6c7e91;
          --border: rgba(9, 38, 67, 0.12);

          position: relative;
          overflow: hidden;

          color: var(--text);
          background: #f8fafc;
        }

        /* =====================================
           CONTAINER
        ===================================== */

        .v-container {
          width: min(1200px, calc(100% - 50px));

          margin: 0 auto;
        }

        /* =====================================
           PROGRESS
        ===================================== */

        .v-progress {
          position: fixed;

          left: 0;
          top: 0;

          width: 100%;
          height: 3px;

          z-index: 9999;

          background: rgba(0, 0, 0, 0.05);
        }

        .v-progress span {
          display: block;

          height: 100%;

          background: var(--blue);

          transition: width 0.1s linear;
        }

        /* =====================================
           CURSOR
        ===================================== */

        .v-cursor-glow {
          position: fixed;

          left: var(--cursor-x);
          top: var(--cursor-y);

          width: 420px;
          height: 420px;

          transform: translate(-50%, -50%);

          pointer-events: none;

          z-index: 0;

          border-radius: 50%;

          background: radial-gradient(circle, rgba(22, 131, 255, 0.08), transparent 68%);

          transition:
            left 0.2s ease-out,
            top 0.2s ease-out;
        }

        /* =====================================
           REVEAL
        ===================================== */

        [data-reveal] {
          opacity: 0;

          transform: translateY(45px);

          transition:
            opacity 0.85s ease,
            transform 0.85s ease;
        }

        [data-reveal].is-visible {
          opacity: 1;

          transform: translateY(0);
        }

        /* =====================================
           HERO
        ===================================== */

        .v-hero {
          position: relative;

          min-height: 760px;

          display: flex;

          align-items: center;

          overflow: hidden;

          color: white;

          background:
            radial-gradient(circle at 75% 25%, rgba(22, 131, 255, 0.2), transparent 30%),
            linear-gradient(120deg, #04101e, #0a1e34);
        }

        .v-noise {
          position: absolute;

          inset: 0;

          opacity: 0.05;

          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");
        }

        .v-hero-grid {
          position: absolute;

          inset: 0;

          opacity: 0.3;

          background-image:
            linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);

          background-size: 70px 70px;

          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .v-hero-layout {
          position: relative;

          z-index: 2;

          display: grid;

          grid-template-columns: 1fr 260px;

          align-items: center;

          gap: 80px;
        }

        .v-hero-main {
          padding: 120px 0;
        }

        .v-label {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-bottom: 25px;

          color: var(--cyan);

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.22em;
        }

        .v-label-line {
          width: 38px;
          height: 1px;

          background: currentColor;
        }

        .v-hero h1 {
          margin: 0;

          font-size: clamp(55px, 7vw, 92px);

          line-height: 0.98;

          letter-spacing: -0.065em;

          font-weight: 700;
        }

        .v-hero h1 em {
          color: var(--cyan);

          font-style: normal;
        }

        .v-hero-main p {
          max-width: 600px;

          margin: 35px 0 30px;

          color: #aebfd0;

          font-size: 17px;

          line-height: 1.8;
        }

        /* HERO BUTTON */

        .v-scroll-button {
          display: inline-flex;

          align-items: center;

          gap: 15px;

          padding: 6px 7px 6px 19px;

          border: 1px solid rgba(255, 255, 255, 0.15);

          border-radius: 100px;

          color: white;

          background: rgba(255, 255, 255, 0.05);

          cursor: pointer;

          font-size: 13px;

          font-weight: 700;

          transition: 0.3s ease;
        }

        .v-scroll-button:hover {
          transform: translateY(-4px);

          border-color: rgba(110, 231, 249, 0.5);

          background: rgba(255, 255, 255, 0.1);
        }

        .v-scroll-circle {
          width: 37px;
          height: 37px;

          display: grid;

          place-items: center;

          border-radius: 50%;

          background: var(--blue);

          transition: transform 0.3s ease;
        }

        .v-scroll-button:hover .v-scroll-circle {
          transform: translateY(3px);
        }

        /* HERO SIDE */

        .v-hero-side {
          padding-left: 40px;

          border-left: 1px solid rgba(255, 255, 255, 0.15);
        }

        .v-big-number {
          color: white;

          font-size: 110px;

          line-height: 0.8;

          font-weight: 800;

          letter-spacing: -0.08em;
        }

        .v-big-number-text {
          margin-top: 18px;

          color: var(--cyan);

          font-size: 10px;

          line-height: 1.6;

          font-weight: 800;

          letter-spacing: 0.2em;
        }

        .v-hero-side-line {
          width: 50px;
          height: 1px;

          margin: 30px 0;

          background: rgba(255, 255, 255, 0.25);
        }

        .v-hero-side p {
          margin: 0;

          color: #8197ac;

          font-size: 10px;

          line-height: 2.1;

          letter-spacing: 0.1em;
        }

        .v-hero-bottom {
          position: absolute;

          left: 0;
          bottom: 25px;

          width: 100%;

          display: flex;

          justify-content: space-between;

          padding: 0 30px;

          color: #60758a;

          font-size: 9px;

          letter-spacing: 0.16em;
        }

        /* =====================================
           INTRO
        ===================================== */

        .v-intro {
          padding: 150px 0 120px;
        }

        .v-intro-grid {
          display: grid;

          grid-template-columns: 1fr 0.75fr;

          gap: 100px;
        }

        .v-section-number {
          margin-bottom: 22px;

          color: var(--blue);

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.2em;
        }

        .v-intro h2 {
          margin: 0;

          font-size: clamp(44px, 5vw, 68px);

          line-height: 1.04;

          letter-spacing: -0.055em;

          color: #081a2d;
        }

        .v-intro h2 span {
          color: var(--blue);
        }

        .v-intro-copy {
          padding-top: 45px;
        }

        .v-intro-copy p {
          margin: 0;

          color: var(--muted);

          font-size: 17px;

          line-height: 1.9;
        }

        .v-intro-line {
          width: 100%;

          height: 1px;

          margin: 35px 0 20px;

          background: var(--border);
        }

        .v-intro-line span {
          display: block;

          width: 80px;
          height: 2px;

          background: var(--blue);
        }

        .v-intro-copy small {
          color: #8a9aac;

          font-size: 11px;

          letter-spacing: 0.08em;
        }

        /* =====================================
           SERVICES
        ===================================== */

        .v-services-section {
          padding: 70px 0 150px;

          background: #f1f5f9;
        }

        .v-service-layout {
          display: grid;

          grid-template-columns: 260px 1fr;

          gap: 80px;

          align-items: start;
        }

        /* STICKY INDEX */

        .v-service-index {
          position: sticky;

          top: 100px;

          display: flex;

          min-height: 650px;

          padding: 10px 0 20px;

          flex-direction: column;
        }

        .v-index-title {
          margin-bottom: 30px;

          color: #8b9aab;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.2em;
        }

        .v-index-items {
          display: flex;

          flex-direction: column;
        }

        .v-index-items button {
          position: relative;

          display: grid;

          grid-template-columns: 32px 10px 1fr;

          align-items: center;

          gap: 13px;

          padding: 10px 0;

          border: 0;

          color: #91a0af;

          background: transparent;

          cursor: pointer;

          text-align: left;

          transition: 0.3s ease;
        }

        .v-index-items button > span {
          font-size: 9px;

          font-weight: 800;
        }

        .v-index-items button i {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #aebac5;

          transition: 0.3s ease;
        }

        .v-index-items button strong {
          overflow: hidden;

          font-size: 11px;

          font-weight: 600;

          white-space: nowrap;

          text-overflow: ellipsis;
        }

        .v-index-items button:hover,
        .v-index-items button.active {
          color: var(--blue);
        }

        .v-index-items button.active i {
          width: 8px;
          height: 8px;

          background: var(--blue);

          box-shadow: 0 0 0 5px rgba(22, 131, 255, 0.1);
        }

        .v-index-progress {
          position: absolute;

          top: 70px;

          right: 0;

          width: 2px;
          height: 340px;

          background: rgba(9, 38, 67, 0.1);
        }

        .v-index-progress span {
          display: block;

          width: 100%;

          background: var(--blue);

          transition: height 0.5s ease;
        }

        /* =====================================
           SERVICE PANEL
        ===================================== */

        .v-service-content {
          display: flex;

          flex-direction: column;

          gap: 22px;
        }

        .v-service {
          position: relative;

          opacity: 1;

          transform: translateY(0);

          min-height: 500px;

          padding: 55px 60px;

          overflow: hidden;

          border: 1px solid rgba(9, 38, 67, 0.1);

          background: white;

          transition:
            border-color 0.4s ease,
            box-shadow 0.4s ease,
            transform 0.4s ease;
        }

        .v-service:hover,
        .v-service.active-service {
          border-color: rgba(22, 131, 255, 0.35);

          box-shadow: 0 30px 80px rgba(10, 45, 75, 0.08);

          transform: translateX(5px);
        }

        .v-service-top {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 70px;
        }

        .v-service-number {
          color: var(--blue);

          font-size: 13px;

          font-weight: 800;

          letter-spacing: 0.15em;
        }

        .v-service-icon {
          width: 55px;
          height: 55px;

          display: grid;

          place-items: center;

          border: 1px solid rgba(22, 131, 255, 0.15);

          border-radius: 50%;

          color: var(--blue);

          background: rgba(22, 131, 255, 0.04);

          transition: 0.4s ease;
        }

        .v-service:hover .v-service-icon {
          color: white;

          background: var(--blue);

          transform: rotate(8deg);
        }

        .v-service-body {
          position: relative;

          z-index: 2;
        }

        .v-service-title {
          display: flex;

          align-items: flex-start;

          justify-content: space-between;

          gap: 30px;
        }

        .v-service-title h2 {
          max-width: 700px;

          margin: 0;

          color: #081a2d;

          font-size: clamp(32px, 4vw, 48px);

          line-height: 1.05;

          letter-spacing: -0.045em;
        }

        .v-service-title > span {
          width: 45px;
          height: 45px;

          flex-shrink: 0;

          display: grid;

          place-items: center;

          border-radius: 50%;

          color: var(--blue);

          background: #eef6ff;

          opacity: 0;

          transform: translate(-10px, 10px);

          transition: 0.35s ease;
        }

        .v-service:hover .v-service-title > span {
          opacity: 1;

          transform: translate(0, 0);
        }

        .v-service h3 {
          max-width: 700px;

          margin: 22px 0;

          color: var(--blue);

          font-size: 20px;

          line-height: 1.4;
        }

        .v-service-description {
          max-width: 730px;

          margin: 0 0 16px;

          color: #43586d;

          font-size: 16px;

          line-height: 1.85;
        }

        .v-service-details {
          max-width: 730px;

          margin: 0 0 30px;

          color: #7a8b9b;

          font-size: 14px;

          line-height: 1.8;
        }

        .v-service-link {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          color: var(--blue);

          font-size: 12px;

          font-weight: 800;

          text-decoration: none;

          transition: gap 0.3s ease;
        }

        .v-service-link:hover {
          gap: 16px;
        }

        .v-service-bottom {
          position: absolute;

          left: 60px;
          right: 60px;
          bottom: 22px;

          display: flex;

          justify-content: space-between;

          color: #b0bcc8;

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 0.18em;
        }

        .v-service-bg-number {
          position: absolute;

          right: -30px;
          bottom: -75px;

          color: rgba(22, 131, 255, 0.035);

          font-size: 260px;

          line-height: 1;

          font-weight: 900;

          letter-spacing: -0.1em;

          pointer-events: none;

          transition:
            color 0.4s ease,
            transform 0.5s ease;
        }

        .v-service:hover .v-service-bg-number {
          color: rgba(22, 131, 255, 0.07);

          transform: translateY(-15px);
        }

        /* =====================================
           APPROACH
        ===================================== */

        .v-approach {
          position: relative;

          padding: 150px 0;

          overflow: hidden;

          color: white;

          background: linear-gradient(125deg, #051221, #0b2742);
        }

        .v-approach-grid {
          position: absolute;

          inset: 0;

          opacity: 0.25;

          background-image:
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);

          background-size: 70px 70px;
        }

        .v-approach-heading {
          position: relative;

          z-index: 2;

          max-width: 800px;

          margin-bottom: 80px;
        }

        .v-approach-heading h2 {
          margin: 0 0 25px;

          font-size: clamp(45px, 6vw, 75px);

          line-height: 1;

          letter-spacing: -0.06em;
        }

        .v-approach-heading h2 span {
          color: var(--cyan);
        }

        .v-approach-heading p {
          max-width: 600px;

          margin: 0;

          color: #9db3c8;

          font-size: 16px;

          line-height: 1.8;
        }

        .v-steps {
          position: relative;

          display: grid;

          grid-template-columns: repeat(4, 1fr);

          gap: 20px;
        }

        .v-step {
          position: relative;

          min-height: 300px;

          padding: 30px 25px;

          border-top: 1px solid rgba(255, 255, 255, 0.2);

          transition: 0.4s ease;
        }

        .v-step:hover {
          border-color: var(--cyan);

          transform: translateY(-8px);
        }

        .v-step-number {
          margin-bottom: 50px;

          color: var(--cyan);

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.15em;
        }

        .v-step-line {
          width: 35px;
          height: 2px;

          margin-bottom: 20px;

          background: var(--cyan);
        }

        .v-step h3 {
          margin: 0 0 15px;

          font-size: 24px;
        }

        .v-step p {
          margin: 0;

          color: #91a8bd;

          font-size: 14px;

          line-height: 1.8;
        }

        .v-step-arrow {
          position: absolute;

          top: 25px;
          right: 20px;

          color: rgba(110, 231, 249, 0.5);
        }

        /* =====================================
           CTA
        ===================================== */

        .v-cta {
          position: relative;

          min-height: 620px;

          display: flex;

          align-items: center;

          overflow: hidden;

          color: white;

          background: #061426;
        }

        .v-cta::before {
          content: '';

          position: absolute;

          width: 700px;
          height: 700px;

          left: -250px;
          top: -250px;

          border-radius: 50%;

          border: 1px solid rgba(110, 231, 249, 0.12);

          box-shadow:
            0 0 0 80px rgba(110, 231, 249, 0.02),
            0 0 0 160px rgba(110, 231, 249, 0.015);
        }

        .v-cta-circle {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;
        }

        .v-circle-one {
          width: 500px;
          height: 500px;

          right: -250px;
          top: 100px;

          background: radial-gradient(circle, rgba(22, 131, 255, 0.15), transparent);
        }

        .v-circle-two {
          width: 250px;
          height: 250px;

          right: 80px;
          top: 170px;

          border: 1px solid rgba(110, 231, 249, 0.15);
        }

        .v-cta-inner {
          position: relative;

          z-index: 2;

          max-width: 850px;
        }

        .v-cta h2 {
          margin: 0 0 25px;

          font-size: clamp(48px, 7vw, 82px);

          line-height: 0.98;

          letter-spacing: -0.06em;
        }

        .v-cta h2 span {
          color: var(--cyan);
        }

        .v-cta p {
          max-width: 650px;

          margin: 0 0 35px;

          color: #9db3c8;

          font-size: 16px;

          line-height: 1.8;
        }

        .v-cta-button {
          display: inline-flex;

          align-items: center;

          gap: 18px;

          padding: 6px 7px 6px 22px;

          border: 1px solid rgba(255, 255, 255, 0.15);

          border-radius: 100px;

          color: white;

          background: rgba(255, 255, 255, 0.05);

          text-decoration: none;

          font-size: 13px;

          font-weight: 700;

          transition: 0.3s ease;
        }

        .v-cta-button i {
          width: 40px;
          height: 40px;

          display: grid;

          place-items: center;

          border-radius: 50%;

          color: white;

          background: var(--blue);

          font-style: normal;

          transition: 0.3s ease;
        }

        .v-cta-button:hover {
          transform: translateY(-4px);

          background: rgba(255, 255, 255, 0.1);

          border-color: rgba(110, 231, 249, 0.4);
        }

        .v-cta-button:hover i {
          transform: translate(3px, -3px);
        }

        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 1000px) {
          .v-hero-layout {
            grid-template-columns: 1fr 190px;

            gap: 40px;
          }

          .v-service-layout {
            grid-template-columns: 190px 1fr;

            gap: 40px;
          }

          .v-service {
            padding: 45px 40px;
          }

          .v-service-bottom {
            left: 40px;
            right: 40px;
          }

          .v-steps {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 720px) {
          .v-container {
            width: calc(100% - 30px);
          }

          .v-cursor-glow {
            display: none;
          }

          .v-hero {
            min-height: 720px;
          }

          .v-hero-layout {
            grid-template-columns: 1fr;

            gap: 50px;
          }

          .v-hero-main {
            padding: 100px 0 0;
          }

          .v-hero h1 {
            font-size: 53px;
          }

          .v-hero-main p {
            font-size: 15px;
          }

          .v-hero-side {
            display: flex;

            align-items: center;

            gap: 15px;

            padding: 25px 0 0;

            border-left: 0;

            border-top: 1px solid rgba(255, 255, 255, 0.15);
          }

          .v-big-number {
            font-size: 70px;
          }

          .v-hero-side-line,
          .v-hero-side p {
            display: none;
          }

          .v-hero-bottom {
            padding: 0 15px;

            font-size: 7px;
          }

          .v-intro {
            padding: 90px 0;
          }

          .v-intro-grid {
            grid-template-columns: 1fr;

            gap: 35px;
          }

          .v-intro-copy {
            padding: 0;
          }

          .v-intro h2 {
            font-size: 43px;
          }

          .v-services-section {
            padding: 50px 0 90px;
          }

          .v-service-layout {
            grid-template-columns: 1fr;

            gap: 35px;
          }

          .v-service-index {
            position: relative;

            top: auto;

            min-height: auto;

            overflow-x: auto;

            padding-bottom: 15px;
          }

          .v-index-items {
            display: flex;

            flex-direction: row;

            gap: 8px;

            overflow-x: auto;
          }

          .v-index-items button {
            flex-shrink: 0;

            width: auto;

            display: flex;

            gap: 7px;

            padding: 9px 12px;

            border: 1px solid rgba(9, 38, 67, 0.1);

            border-radius: 50px;

            background: white;
          }

          .v-index-items button strong {
            max-width: 120px;

            white-space: nowrap;
          }

          .v-index-progress {
            display: none;
          }

          .v-service {
            min-height: 560px;

            padding: 35px 25px;
          }

          .v-service-top {
            margin-bottom: 50px;
          }

          .v-service-title h2 {
            font-size: 32px;
          }

          .v-service-title > span {
            display: none;
          }

          .v-service h3 {
            font-size: 18px;
          }

          .v-service-description {
            font-size: 14px;
          }

          .v-service-details {
            font-size: 13px;
          }

          .v-service-bottom {
            left: 25px;
            right: 25px;
          }

          .v-service-bg-number {
            font-size: 170px;

            right: -20px;
          }

          .v-approach {
            padding: 90px 0;
          }

          .v-approach-heading {
            margin-bottom: 50px;
          }

          .v-approach-heading h2 {
            font-size: 44px;
          }

          .v-steps {
            grid-template-columns: 1fr;
          }

          .v-step {
            min-height: 230px;
          }

          .v-step-arrow {
            display: none;
          }

          .v-cta {
            min-height: 560px;
          }

          .v-cta h2 {
            font-size: 48px;
          }

          .v-cta p {
            font-size: 14px;
          }
        }

        /* =====================================
           REDUCED MOTION
        ===================================== */

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;

            animation-duration: 0.01ms !important;

            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
