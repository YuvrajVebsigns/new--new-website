// // 'use client';

// // import { Award, Building2, Leaf, ShieldCheck, Sprout, UsersRound } from 'lucide-react';
// // import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// // export default function ExpertiseSection() {
// //   const sectionRef = useScrollAnimation<HTMLDivElement>({
// //     animationClass: 'animate-fade-in-up',
// //     initialTransform: 'translateY(40px)',
// //   });

// //   const services = [
// //     {
// //       title: 'Cooperative & Financial Societies',
// //       description: 'PACS & Credit Societies registration compliance.',
// //       icon: UsersRound,
// //     },
// //     {
// //       title: 'NBFC & Corporate Setup',
// //       description: 'Documentation & approval advisory.',
// //       icon: Building2,
// //     },
// //     {
// //       title: 'Agricultural Support',
// //       description: 'FPO formation & subsidies.',
// //       icon: Leaf,
// //     },
// //   ];

// //   const highlights = [
// //     { value: '15+', title: 'Years of Domain Expertise', icon: Award },
// //     {
// //       value: 'Specialized in Rural,',
// //       title: 'Semi-Urban & Cooperative Financial Structuring',
// //       icon: Sprout,
// //     },
// //     { value: 'Transparency,', title: 'Compliance & Long-term Growth', icon: ShieldCheck },
// //   ];

// //   return (
// //     <section ref={sectionRef} className="expertise-section">
// //       <div className="expertise-container">
// //         <div className="expertise-heading">
// //           <h2 className="expertise-title">Our Expertise</h2>
// //         </div>

// //         <div className="expertise-grid">
// //           {services.map(({ title, description, icon: Icon }) => (
// //             <article key={title} className="expertise-card">
// //               <div className="expertise-service-icon">
// //                 <Icon size={27} strokeWidth={1.8} />
// //               </div>

// //               <div>
// //                 <h3 className="expertise-card-title">{title}</h3>
// //                 <p className="expertise-card-description">{description}</p>
// //               </div>
// //             </article>
// //           ))}
// //         </div>

// //         <div className="expertise-highlights">
// //           {highlights.map(({ value, title, icon: Icon }) => (
// //             <article key={value} className="expertise-highlight">
// //               <div className="expertise-highlight-circle" aria-hidden="true">
// //                 <Icon size={27} strokeWidth={2} />
// //               </div>
// //               <div>
// //                 <strong>{value}</strong>
// //                 <p>{title}</p>
// //               </div>
// //             </article>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// 'use client';

// import { Award, ArrowRight, Building2, Leaf, ShieldCheck, Sprout, UsersRound } from 'lucide-react';
// import { useEffect, useRef } from 'react';

// export default function ExpertiseSection() {
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const elements = section.querySelectorAll<HTMLElement>(
//       '.about-vishwasai-content, .about-vishwasai-visual, .expertise-card, .expertise-highlight',
//     );

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('expertise-visible');
//           }
//         });
//       },
//       {
//         threshold: 0.15,
//       },
//     );

//     elements.forEach((element, index) => {
//       element.style.transitionDelay = `${index * 100}ms`;
//       observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const handleMouseMove = (event: React.MouseEvent<HTMLElement>, element: HTMLElement) => {
//     const rect = element.getBoundingClientRect();

//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;

//     const rotateX = (y / rect.height - 0.5) * -6;
//     const rotateY = (x / rect.width - 0.5) * 6;

//     element.style.setProperty('--mouse-x', `${x}px`);
//     element.style.setProperty('--mouse-y', `${y}px`);
//     element.style.setProperty('--rotate-x', `${rotateX}deg`);
//     element.style.setProperty('--rotate-y', `${rotateY}deg`);
//   };

//   const handleMouseLeave = (element: HTMLElement) => {
//     element.style.setProperty('--rotate-x', '0deg');
//     element.style.setProperty('--rotate-y', '0deg');
//   };

//   const services = [
//     {
//       title: 'Cooperative & Financial Societies',
//       description: 'PACS & Credit Societies registration compliance.',
//       icon: UsersRound,
//     },
//     {
//       title: 'NBFC & Corporate Setup',
//       description: 'Documentation & approval advisory.',
//       icon: Building2,
//     },
//     {
//       title: 'Agricultural Support',
//       description: 'FPO formation & subsidies.',
//       icon: Leaf,
//     },
//   ];

//   const highlights = [
//     {
//       value: '15+',
//       title: 'Years of Domain Expertise',
//       icon: Award,
//     },
//     {
//       value: 'Specialized in Rural,',
//       title: 'Semi-Urban & Cooperative Financial Structuring',
//       icon: Sprout,
//     },
//     {
//       value: 'Transparency,',
//       title: 'Compliance & Long-term Growth',
//       icon: ShieldCheck,
//     },
//   ];

//   return (
//     <section ref={sectionRef} className="expertise-section">
//       <div className="expertise-container">
//         {/* =====================================================
//             ABOUT VISHWASAI
//             ===================================================== */}

//         <div className="about-vishwasai">
//           <div className="about-vishwasai-content">
//             <span className="about-vishwasai-eyebrow">ABOUT VISHWASAI</span>

//             <h2 className="about-vishwasai-title">
//               Building Stronger Cooperatives.
//               <span> Enabling Sustainable Growth.</span>
//             </h2>

//             <div className="about-vishwasai-line" />

//             <p>
//               Vishwasai is a professional consultancy organization focused on{' '}
//               <strong>co-operative agriculture and finance</strong>.
//             </p>

//             <p>
//               Since 2009, we have been helping organizations, businesses and institutions navigate
//               the complexities of cooperative finance, agricultural development, funding and
//               business growth.
//             </p>

//             <p>
//               Our approach combines sector expertise, practical guidance and customized solutions to
//               help clients achieve their objectives.
//             </p>

//             <button
//               type="button"
//               className="about-vishwasai-button"
//               onClick={() => {
//                 window.location.href = '/about-us';
//               }}
//             >
//               <span>Learn More</span>

//               <span className="about-vishwasai-button-icon">
//                 <ArrowRight size={17} />
//               </span>
//             </button>
//           </div>

//           <div className="about-vishwasai-visual">
//             <div className="about-vishwasai-orbit orbit-one" />
//             <div className="about-vishwasai-orbit orbit-two" />

//             <div className="about-vishwasai-center">
//               <span>15+</span>
//               <small>Years</small>
//             </div>

//             <div className="about-floating-card about-floating-card-one">
//               <UsersRound size={20} />
//               <span>Cooperative</span>
//             </div>

//             <div className="about-floating-card about-floating-card-two">
//               <Leaf size={20} />
//               <span>Agriculture</span>
//             </div>

//             <div className="about-floating-card about-floating-card-three">
//               <Building2 size={20} />
//               <span>Finance</span>
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             EXPERTISE HEADING
//             ===================================================== */}

//         <div className="expertise-heading">
//           <span className="expertise-eyebrow">OUR EXPERTISE</span>

//           <h2 className="expertise-title">
//             Expertise That
//             <span> Creates Impact.</span>
//           </h2>

//           <div className="expertise-line" />
//         </div>

//         {/* =====================================================
//             SERVICE CARDS
//             ===================================================== */}

//         <div className="expertise-grid">
//           {services.map(({ title, description, icon: Icon }, index) => (
//             <article
//               key={title}
//               className="expertise-card"
//               onMouseMove={(event) => handleMouseMove(event, event.currentTarget)}
//               onMouseLeave={(event) => handleMouseLeave(event.currentTarget)}
//             >
//               <div className="expertise-card-glow" />

//               <div className="expertise-card-top">
//                 <span className="expertise-number">0{index + 1}</span>

//                 <div className="expertise-service-icon">
//                   <Icon size={27} strokeWidth={1.8} />
//                 </div>
//               </div>

//               <div className="expertise-card-content">
//                 <h3 className="expertise-card-title">{title}</h3>

//                 <p className="expertise-card-description">{description}</p>
//               </div>

//               <div className="expertise-card-arrow">→</div>
//             </article>
//           ))}
//         </div>

//         {/* =====================================================
//             HIGHLIGHTS
//             ===================================================== */}

//         <div className="expertise-highlights">
//           {highlights.map(({ value, title, icon: Icon }, index) => (
//             <article
//               key={value}
//               className="expertise-highlight"
//               onMouseMove={(event) => handleMouseMove(event, event.currentTarget)}
//               onMouseLeave={(event) => handleMouseLeave(event.currentTarget)}
//             >
//               <div className="highlight-glow" />

//               <div className="expertise-highlight-circle">
//                 <Icon size={26} strokeWidth={1.8} />
//               </div>

//               <div className="expertise-highlight-content">
//                 <strong>{value}</strong>

//                 <p>{title}</p>
//               </div>

//               <span className="highlight-index">0{index + 1}</span>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { Award, ArrowRight, Building2, Leaf, ShieldCheck, Sprout, UsersRound } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll<HTMLElement>(
      '.about-vishwasai-content, .about-vishwasai-visual, .expertise-heading, .expertise-card, .expertise-highlight',
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('expertise-visible');
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    elements.forEach((element) => {
      const isExpertiseCard = element.classList.contains('expertise-card');
      const cardIndex = isExpertiseCard
        ? Array.from(section.querySelectorAll('.expertise-card')).indexOf(element)
        : 0;

      element.style.transitionDelay = isExpertiseCard ? `${cardIndex * 90}ms` : '0ms';
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>, element: HTMLElement) => {
    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -7;
    const rotateY = (x / rect.width - 0.5) * 7;

    element.style.setProperty('--mouse-x', `${x}px`);
    element.style.setProperty('--mouse-y', `${y}px`);
    element.style.setProperty('--rotate-x', `${rotateX}deg`);
    element.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = (element: HTMLElement) => {
    element.style.setProperty('--rotate-x', '0deg');
    element.style.setProperty('--rotate-y', '0deg');
  };

  // const services = [
  //   {
  //     title: 'Cooperative & Financial Societies',
  //     description: 'PACS & Credit Societies registration compliance.',
  //     icon: UsersRound,
  //   },
  //   {
  //     title: 'NBFC & Corporate Setup',
  //     description: 'Documentation & approval advisory.',
  //     icon: Building2,
  //   },
  //   {
  //     title: 'Agricultural Support',
  //     description: 'FPO formation & subsidies.',
  //     icon: Leaf,
  //   },
  // ];

  // const highlights = [
  //   {
  //     value: '15+',
  //     title: 'Years of Domain Expertise',
  //     icon: Award,
  //   },
  //   {
  //     value: 'Specialized in Rural,',
  //     title: 'Semi-Urban & Cooperative Financial Structuring',
  //     icon: Sprout,
  //   },
  //   {
  //     value: 'Transparency,',
  //     title: 'Compliance & Long-term Growth',
  //     icon: ShieldCheck,
  //   },
  // ];

  return (
    <section ref={sectionRef} className="expertise-section">
      <div className="expertise-container">
        {/* =====================================================
            ABOUT VISHWASAI
        ===================================================== */}

        <div className="about-vishwasai">
          <div className="about-vishwasai-content">
            <span className="about-vishwasai-eyebrow">ABOUT VISHWASAI</span>

            <h2 className="about-vishwasai-title">
              Building Stronger Cooperatives.
              <span> Enabling Sustainable Growth.</span>
            </h2>

            <div className="about-vishwasai-line" />

            <p>
              Vishwasai is a professional consultancy organization focused on{' '}
              <strong>co-operative agriculture and finance</strong>.
            </p>

            <p>
              Since 2009, we have been helping organizations, businesses and institutions navigate
              the complexities of cooperative finance, agricultural development, funding and
              business growth.
            </p>

            <p>
              Our approach combines sector expertise, practical guidance and customized solutions to
              help clients achieve their objectives.
            </p>

            <button
              type="button"
              className="about-vishwasai-button"
              onClick={() => {
                window.location.href = '/about-us';
              }}
            >
              <span>Learn More</span>

              <span className="about-vishwasai-button-icon">
                <ArrowRight size={17} />
              </span>
            </button>
          </div>

          <div className="about-vishwasai-visual">
            <div className="about-vishwasai-orbit orbit-one" />
            <div className="about-vishwasai-orbit orbit-two" />

            <div className="about-vishwasai-center">
              <span>17</span>
              <small>Years</small>
            </div>

            <div className="about-floating-card about-floating-card-one">
              <UsersRound size={20} />
              <span>Cooperative</span>
            </div>

            <div className="about-floating-card about-floating-card-two">
              <Leaf size={20} />
              <span>Agriculture</span>
            </div>

            <div className="about-floating-card about-floating-card-three">
              <Building2 size={20} />
              <span>Finance</span>
            </div>
          </div>
        </div>

        {/* =====================================================
            EXPERTISE HEADING
        ===================================================== */}

        <div className="expertise-heading">
          <span className="expertise-eyebrow">OUR EXPERTISE</span>

          <h2 className="expertise-title">
            Expertise That
            <span> Creates Impact.</span>
          </h2>

          <div className="expertise-line" />
        </div>

        {/* =====================================================
            SIX EXPERTISE CARDS
        ===================================================== */}

        <div className="expertise-grid">
          {/* CARD 01 */}
          <article
            className="expertise-card expertise-card-light"
            onMouseMove={(event) => handleMouseMove(event, event.currentTarget)}
            onMouseLeave={(event) => handleMouseLeave(event.currentTarget)}
          >
            <div className="expertise-card-glow" />

            <div className="expertise-card-top">
              <span className="expertise-number">01</span>

              <div className="expertise-service-icon">
                <UsersRound size={27} strokeWidth={1.8} />
              </div>
            </div>

            <div className="expertise-card-content">
              <h3 className="expertise-card-title">Cooperative & Financial Societies</h3>

              <p className="expertise-card-description">
                PACS & Credit Societies registration compliance.
              </p>
            </div>

            <div className="expertise-card-arrow">
              <ArrowRight size={19} />
            </div>
          </article>

          {/* CARD 02 */}
          <article
            className="expertise-card expertise-card-light"
            onMouseMove={(event) => handleMouseMove(event, event.currentTarget)}
            onMouseLeave={(event) => handleMouseLeave(event.currentTarget)}
          >
            <div className="expertise-card-glow" />

            <div className="expertise-card-top">
              <span className="expertise-number">02</span>

              <div className="expertise-service-icon">
                <Building2 size={27} strokeWidth={1.8} />
              </div>
            </div>

            <div className="expertise-card-content">
              <h3 className="expertise-card-title">NBFC & Corporate Setup</h3>

              <p className="expertise-card-description">Documentation & approval advisory.</p>
            </div>

            <div className="expertise-card-arrow">
              <ArrowRight size={19} />
            </div>
          </article>

          {/* CARD 03 */}
          <article
            className="expertise-card expertise-card-light"
            onMouseMove={(event) => handleMouseMove(event, event.currentTarget)}
            onMouseLeave={(event) => handleMouseLeave(event.currentTarget)}
          >
            <div className="expertise-card-glow" />

            <div className="expertise-card-top">
              <span className="expertise-number">03</span>

              <div className="expertise-service-icon">
                <Leaf size={27} strokeWidth={1.8} />
              </div>
            </div>

            <div className="expertise-card-content">
              <h3 className="expertise-card-title">Agricultural Support</h3>

              <p className="expertise-card-description">FPO formation & subsidies.</p>
            </div>

            <div className="expertise-card-arrow">
              <ArrowRight size={19} />
            </div>
          </article>

          {/* CARD 04 */}
          <article
            className="expertise-card expertise-card-dark"
            onMouseMove={(event) => handleMouseMove(event, event.currentTarget)}
            onMouseLeave={(event) => handleMouseLeave(event.currentTarget)}
          >
            <div className="expertise-card-glow" />

            <div className="expertise-card-top">
              <span className="expertise-number">04</span>

              <div className="expertise-service-icon">
                <Award size={27} strokeWidth={1.8} />
              </div>
            </div>

            <div className="expertise-card-content">
              <h3 className="expertise-card-title">Domain Expertise</h3>

              <p className="expertise-card-description">
                17 years of specialized sector experience.
              </p>
            </div>

            <div className="expertise-card-arrow">
              <ArrowRight size={19} />
            </div>
          </article>

          {/* CARD 05 */}
          <article
            className="expertise-card expertise-card-dark"
            onMouseMove={(event) => handleMouseMove(event, event.currentTarget)}
            onMouseLeave={(event) => handleMouseLeave(event.currentTarget)}
          >
            <div className="expertise-card-glow" />

            <div className="expertise-card-top">
              <span className="expertise-number">05</span>

              <div className="expertise-service-icon">
                <Sprout size={27} strokeWidth={1.8} />
              </div>
            </div>

            <div className="expertise-card-content">
              <h3 className="expertise-card-title">Rural & Semi-Urban</h3>

              <p className="expertise-card-description">
                Specialized cooperative financial structuring.
              </p>
            </div>

            <div className="expertise-card-arrow">
              <ArrowRight size={19} />
            </div>
          </article>

          {/* CARD 06 */}
          <article
            className="expertise-card expertise-card-dark"
            onMouseMove={(event) => handleMouseMove(event, event.currentTarget)}
            onMouseLeave={(event) => handleMouseLeave(event.currentTarget)}
          >
            <div className="expertise-card-glow" />

            <div className="expertise-card-top">
              <span className="expertise-number">06</span>

              <div className="expertise-service-icon">
                <ShieldCheck size={27} strokeWidth={1.8} />
              </div>
            </div>

            <div className="expertise-card-content">
              <h3 className="expertise-card-title">Transparency & Compliance</h3>

              <p className="expertise-card-description">
                Compliance-focused solutions for long-term growth.
              </p>
            </div>

            <div className="expertise-card-arrow">
              <ArrowRight size={19} />
            </div>
          </article>
        </div>

        {/* =====================================================
            HIGHLIGHTS
        ===================================================== */}

        {/* <div className="expertise-highlights">
          {highlights.map(({ value, title, icon: Icon }, index) => (
            <article
              key={value}
              className="expertise-highlight"
              onMouseMove={(event) =>
                handleMouseMove(event, event.currentTarget)
              }
              onMouseLeave={(event) =>
                handleMouseLeave(event.currentTarget)
              }
            >
              <div className="highlight-glow" />

              <div className="expertise-highlight-circle">
                <Icon size={26} strokeWidth={1.8} />
              </div>

              <div className="expertise-highlight-content">
                <strong>{value}</strong>

                <p>{title}</p>
              </div>

              <span className="highlight-index">
                0{index + 1}
              </span>
            </article>
          ))}
        </div> */}
      </div>
    </section>
  );
}
