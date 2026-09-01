'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus, Phone } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const leftRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-left',
    initialTransform: 'translateX(-32px)',
    threshold: 0.1,
  });
  const rightRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-right',
    initialTransform: 'translateX(32px)',
    threshold: 0.1,
  });

  const faqs = [
    {
      question: 'What does Vishwasai specialize in?',
      answer:
        'Vishwasai specializes in cooperative finance, agriculture support, funding advisory, business structuring, and sustainable growth planning for institutions and organizations.',
    },
    {
      question: 'Which sectors does Vishwasai support?',
      answer:
        'We support cooperative institutions, agricultural ecosystems, financial societies, rural enterprises, and organizations seeking structured business and funding solutions.',
    },
    {
      question: 'How can an organization work with Vishwasai?',
      answer:
        'Organizations can collaborate with Vishwasai for strategic guidance, compliance support, cooperative structuring, business planning, and customized advisory solutions based on their objectives.',
    },
    {
      question: 'Why is Vishwasai relevant for cooperative and agricultural growth?',
      answer:
        'Vishwasai brings practical, sector-focused expertise to help organizations navigate funding, governance, compliance, and long-term sustainability in cooperative and rural development landscapes.',
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-wrapper">
          {/* LEFT SIDE */}
          <div className="faq-left" ref={leftRef}>
            <div className="faq-image-wrap">
              <Image src="/assets/service-1.png" alt="FAQ" fill className="faq-image" />

              <div className="faq-overlay"></div>

              <h2 className="faq-heading">
                {/* Need */} FAQs
                <br />
                <br />
                {/* Start */}
                <br />
                {/* Here... */}
              </h2>

              {/* CALL CARD */}
              <div className="faq-call-card">
                <h3>
                  Need
                  <br />
                  Assistance?
                </h3>

                <div className="faq-call-row">
                  <div className="faq-call-icon">
                    <Phone size={18} />
                  </div>

                  <a href="tel:18884521505">+91 22 4608 0974</a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="faq-right" ref={rightRef}>
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                >
                  <span>{faq.question}</span>

                  <div className="faq-icon">
                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
