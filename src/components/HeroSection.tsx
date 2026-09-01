'use client';

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import type { PointerEvent } from 'react';

export default function HeroSection() {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handleHeroPointerMove = (event: PointerEvent<HTMLImageElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
    const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12;

    event.currentTarget.style.setProperty('--hero-shift-x', `${offsetX}px`);
    event.currentTarget.style.setProperty('--hero-shift-y', `${offsetY}px`);
  };

  const resetHeroPointer = (event: PointerEvent<HTMLImageElement>) => {
    event.currentTarget.style.setProperty('--hero-shift-x', '0px');
    event.currentTarget.style.setProperty('--hero-shift-y', '0px');
  };

  return (
    <section className="blog-hero home-hero page-hero-left">
      <div className="blog-hero-media">
        <Image
          src="/assets/blogs/vishwasai.png"
          alt="CORE Media"
          fill
          priority
          className="blog-hero-image home-hero-image"
          onPointerMove={handleHeroPointerMove}
          onPointerLeave={resetHeroPointer}
        />
      </div>

      <div className="blog-hero-overlay" />

      <div className="blog-hero-content">
        <div className="hero-badge">
          <span className="hero-badge-icon">❋</span>
          <span className="hero-badge-text">
            Navigating the Future of Agriculture & Cooperative Finance
          </span>
        </div>

        <h1 className="hero-title">
          Expert consultancy for co-operative agriculture and finance since 2009
        </h1>

        <div className="hero-cta-row">
          <button type="button" className="hero-primary-btn">
            Get In Touch
          </button>
          <button type="button" className="hero-secondary-btn">
            Explore Our Services
          </button>
        </div>

        <button onClick={handleScroll} className="hero-scroll" aria-label="Scroll down">
          <span className="font-semibold">Scroll Down</span>
          <div className="hero-scroll-icon">
            <ArrowDown size={18} />
          </div>
        </button>
      </div>

      <style jsx>{`
        .hero-cta-row {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 30px;
          margin-bottom: 20px;
        }

        .hero-primary-btn,
        .hero-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 180px;
          height: 52px;
          padding: 0 24px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.01em;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .hero-primary-btn {
          border: none;
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 10px 20px rgba(15, 23, 42, 0.12);
        }

        .hero-primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 24px rgba(15, 23, 42, 0.18);
        }

        .hero-secondary-btn {
          border: 1px solid rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.04);
          color: #ffffff;
          backdrop-filter: blur(4px);
        }

        .hero-secondary-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .hero-cta-row {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-primary-btn,
          .hero-secondary-btn {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>
    </section>
  );
}
