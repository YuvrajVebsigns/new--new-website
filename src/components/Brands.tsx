'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Brands() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const [activePage, setActivePage] = useState(0);

  const cardsPerPage = 3;
  const previewWordLimit = 28;

  const headerRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-left',
    initialTransform: 'translateX(-30px)',
    threshold: 0.1,
  });

  const sliderWrapRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in',
    initialTransform: 'translateY(24px)',
    threshold: 0.1,
  });

  const testimonials = [
    {
      heading: 'Vishwasai',
      text: 'Working with Vishwasai gave us a clear roadmap for cooperative growth and financial compliance. Their practical guidance helped us align our structure, funding decisions, and operational planning with long-term sustainability.',
      name: 'Vishwasai Advisory',
      writerName: 'Founder | Cooperative Finance Client',
      role: 'Vishwasai',
      image: '/favicon.ico',
    },
    {
      heading: 'Vishwasai',
      text: 'Our partnership with Vishwasai helped sharpen our cooperative strategy and gave us confidence in every funding and compliance decision. Their sector expertise made complex processes feel practical, structured, and growth-focused.',
      name: 'Vishwasai Advisory',
      writerName: 'Operations Lead | Cooperative Client',
      role: 'Vishwasai',
      image: '/favicon.ico',
    },
    {
      heading: 'Vishwasai',
      text: 'Vishwasai brings clarity to cooperative finance and rural business growth. Their guidance helped us navigate planning, governance, and long-term sustainability with greater confidence and precision.',
      name: 'Vishwasai Advisory',
      writerName: 'Growth Manager | Rural Enterprise',
      role: 'Vishwasai',
      image: '/favicon.ico',
    },
    {
      heading: 'Vishwasai',
      text: 'The Vishwasai team combines domain knowledge with practical execution. We valued their ability to translate sector challenges into actionable solutions that improve operational strength and financial direction.',
      name: 'Vishwasai Advisory',
      writerName: 'Finance Director | Agri Business',
      role: 'Vishwasai',
      image: '/favicon.ico',
    },
    {
      heading: 'Vishwasai',
      text: 'Their advisory approach was thoughtful, transparent, and highly relevant to our goals. Vishwasai helped us build a stronger foundation for cooperative decision-making and sustainable business development.',
      name: 'Vishwasai Advisory',
      writerName: 'Strategic Consultant | Cooperative Network',
      role: 'Vishwasai',
      image: '/favicon.ico',
    },
    {
      heading: 'Vishwasai',
      text: 'Working with Vishwasai gave our team a clearer framework for growth, compliance, and institutional planning. Their insight was not only strategic but also highly practical for day-to-day execution.',
      name: 'Vishwasai Advisory',
      writerName: 'Business Head | Finance & Growth',
      role: 'Vishwasai',
      image: '/favicon.ico',
    },
    {
      heading: 'Vishwasai',
      text: 'Vishwasai helped us align stakeholder priorities with realistic, scalable solutions. Their understanding of cooperative structures and funding ecosystems made a clear difference in how we moved forward.',
      name: 'Vishwasai Advisory',
      writerName: 'Project Lead | Development Programs',
      role: 'Vishwasai',
      image: '/favicon.ico',
    },
    {
      heading: 'Vishwasai',
      text: 'From planning to execution, Vishwasai offered dependable insight and a strong understanding of what sustainable growth looks like in our sector. The experience was collaborative, precise, and outcome-driven.',
      name: 'Vishwasai Advisory',
      writerName: 'Executive Partner | Agribusiness',
      role: 'Vishwasai',
      image: '/favicon.ico',
    },
    {
      heading: 'Vishwasai',
      text: 'Their work helped us build a more resilient and well-structured model for growth. Vishwasai’s guidance was grounded in real sector understanding and helped us move forward with confidence.',
      name: 'Vishwasai Advisory',
      writerName: 'Managing Partner | Rural Finance',
      role: 'Vishwasai',
      image: '/favicon.ico',
    },
    {
      heading: 'Vishwasai',
      text: 'The Vishwasai team delivered strategic clarity and practical support at every step. Their expertise helped us address our challenges with a stronger, more sustainable direction for growth.',
      name: 'Vishwasai Advisory',
      writerName: 'Senior Consultant | Institutional Growth',
      role: 'Vishwasai',
      image: '/favicon.ico',
    },
    {
      heading: 'Vishwasai',
      text: 'We reached a more confident business position because of Vishwasai’s advisory support. Their guidance helped us focus on the right decisions, stronger governance, and long-term value creation.',
      name: 'Vishwasai Advisory',
      writerName: 'Director | Sector Development',
      role: 'Vishwasai',
      image: '/favicon.ico',
    },
    {
      heading: 'Vishwasai',
      text: 'Vishwasai understood both the business challenge and the institutional context behind it. That balance of strategic thinking and practical support made a significant impact on our progress.',
      name: 'Vishwasai Advisory',
      writerName: 'Leadership Team | Social Enterprise',
      role: 'Vishwasai',
      image: '/favicon.ico',
    },
    {
      heading: 'Vishwasai',
      text: 'The support we received from Vishwasai was deeply relevant to our mission and business priorities. Their ability to simplify complex processes while strengthening execution gave us real momentum.',
      name: 'Vishwasai Advisory',
      writerName: 'Founder | Agri & Finance Advisory',
      role: 'Vishwasai',
      image: '/favicon.ico',
    },
  ];

  function DialogueCard({ item }: { item: (typeof testimonials)[number] }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const words = item.text.split(' ');
    const isLongText = words.length > previewWordLimit;

    const previewText = isLongText ? words.slice(0, previewWordLimit).join(' ') : item.text;

    return (
      <div className="dialogue-card">
        <div className="dialogue-card-content">
          <p className="dialogue-text">
            {isExpanded || !isLongText ? item.text : previewText}

            {isLongText && (
              <>
                {!isExpanded && ' '}
                <button
                  type="button"
                  className="dialogue-readmore-inline"
                  onClick={() => setIsExpanded((value) => !value)}
                >
                  {isExpanded ? 'Show less' : 'Read more...'}
                </button>
              </>
            )}
          </p>
        </div>

        <div className="dialogue-divider" />

        <div className="dialogue-user">
          <div className="dialogue-user-meta">
            <p>{item.writerName}</p>
          </div>

          <div className="dialogue-brand">
            <Image
              src={item.image}
              alt={item.name}
              width={70}
              height={70}
              className="dialogue-user-image"
            />

            <div className="dialogue-brand-info">
              <h4>{item.name}</h4>
              {/* <span>{item.role}</span> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getPageCount = useCallback(
    () => Math.ceil(testimonials.length / cardsPerPage),
    [testimonials.length],
  );

  const scrollToPage = useCallback(
    (pageIndex: number) => {
      const slider = sliderRef.current;

      if (!slider) return;

      const maxPage = getPageCount() - 1;
      const nextPage = Math.max(0, Math.min(pageIndex, maxPage));
      const targetIndex = nextPage * cardsPerPage;
      const child = slider.children[targetIndex] as HTMLElement;

      if (!child) return;

      slider.scrollTo({
        left: child.offsetLeft,
        behavior: 'smooth',
      });

      setActivePage(nextPage);
    },
    [getPageCount],
  );

  const scrollLeft = () => {
    scrollToPage(activePage - 1);
  };

  const scrollRight = () => {
    scrollToPage(activePage + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current) return;
      if (!sliderRef.current) return;

      const maxPage = getPageCount() - 1;

      if (activePage >= maxPage) {
        scrollToPage(0);
      } else {
        scrollToPage(activePage + 1);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [activePage, getPageCount, scrollToPage]);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const onScroll = () => {
      const children = Array.from(slider.children) as HTMLElement[];

      if (!children.length) return;

      const scrollLeftPosition = slider.scrollLeft;
      let nearestPage = 0;
      let nearestDistance = Infinity;

      for (let page = 0; page < getPageCount(); page += 1) {
        const targetIndex = page * cardsPerPage;
        const child = children[targetIndex];

        if (!child) continue;

        const distance = Math.abs(child.offsetLeft - scrollLeftPosition);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestPage = page;
        }
      }

      setActivePage(nearestPage);
    };

    slider.addEventListener('scroll', onScroll);
    onScroll();

    return () => slider.removeEventListener('scroll', onScroll);
  }, [getPageCount]);

  const scrollToIndex = (index: number) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const child = slider.children[index * cardsPerPage] as HTMLElement;

    if (!child) return;

    slider.scrollTo({
      left: child.offsetLeft,
      behavior: 'smooth',
    });

    setActivePage(index);
  };

  return (
    <section className="dialogue-section brands-testimonials">
      <div className="dialogue-container">
        <div className="dialogue-header" ref={headerRef}>
          <div>
            <span className="dialogue-subtitle">
              <Image
                src="/assets/icon.png"
                alt="Testimonials"
                width={20}
                height={20}
                className="expertise-label-icon"
              />

              <span className="dialogue-subtitle-text">TESTIMONIALS</span>
            </span>
          </div>

          <div className="dialogue-arrows">
            <button type="button" className="dialogue-arrow-btn" onClick={scrollLeft}>
              <ChevronLeft size={22} />
            </button>

            <button type="button" className="dialogue-arrow-btn" onClick={scrollRight}>
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div ref={sliderWrapRef}>
          <div
            className="dialogue-slider"
            ref={sliderRef}
            onMouseEnter={() => {
              isPausedRef.current = true;
            }}
            onMouseLeave={() => {
              isPausedRef.current = false;
            }}
          >
            {testimonials.map((item, index) => (
              <DialogueCard item={item} key={`${item.name}-${index}`} />
            ))}
          </div>

          <div className="dialogue-dots">
            {Array.from({ length: getPageCount() }).map((_, index) => (
              <button
                type="button"
                key={index}
                className={index === activePage ? 'dialogue-dot active' : 'dialogue-dot'}
                onClick={() => scrollToIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
