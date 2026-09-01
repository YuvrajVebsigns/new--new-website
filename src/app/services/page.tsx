// // 'use client';

// // import Link from 'next/link';
// // import { ArrowUpRight } from 'lucide-react';

// // const services = [
// //   {
// //     number: '01',
// //     title: 'Survey / Study',
// //     description:
// //       'Research-driven surveys and studies that transform market data, opinions, and business trends into meaningful insights.',
// //   },
// //   {
// //     number: '02',
// //     title: 'Video Production',
// //     description:
// //       'Creative video content that communicates your brand story, showcases your expertise, and engages your target audience.',
// //   },
// //   {
// //     number: '03',
// //     title: 'Bespoke Events',
// //     description:
// //       'Curated executive events, conferences, roundtables, and experiences designed to connect businesses and decision-makers.',
// //   },
// //   {
// //     number: '04',
// //     title: 'Digital Marketing',
// //     description:
// //       'Strategic digital marketing solutions that strengthen your online presence, generate engagement, and support business growth.',
// //   },
// // ];

// // export default function ServicesPage() {
// //   return (
// //     <main className="services-page">
// //       {/* Hero Section */}
// //       <section className="services-hero page-hero-left">
// //         <div className="services-container">
// //           <span className="services-eyebrow">Our Services</span>

// //           <h1>
// //             We create
// //             <span> meaningful connections.</span>
// //           </h1>

// //           <p>
// //             From research and media to events and digital marketing, we help brands communicate,
// //             connect, and create lasting impact.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Services Section */}
// //       <section className="services-list-section">
// //         <div className="services-container">
// //           <div className="services-intro">
// //             <div>
// //               <span className="services-small-title">What We Do</span>

// //               <h2>
// //                 Our
// //                 <span> expertise</span>
// //               </h2>
// //             </div>

// //             <p>
// //               We combine creativity, research, technology, and industry knowledge to deliver
// //               solutions that help organizations reach the right people and achieve meaningful
// //               results.
// //             </p>
// //           </div>

// //           <div className="services-grid">
// //             {services.map((service) => (
// //               <article className="service-card" key={service.number}>
// //                 <div className="service-number">{service.number}</div>

// //                 <div className="service-content">
// //                   <h3>{service.title}</h3>

// //                   <p>{service.description}</p>

// //                   <Link href="/contact" className="service-link">
// //                     Discuss Your Project
// //                     <ArrowUpRight size={18} />
// //                   </Link>
// //                 </div>
// //               </article>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Process Section */}
// //       <section className="services-process">
// //         <div className="services-container">
// //           <div className="services-process-heading">
// //             <span className="services-small-title">Our Approach</span>

// //             <h2>
// //               From idea
// //               <span> to impact.</span>
// //             </h2>
// //           </div>

// //           <div className="process-grid">
// //             <div className="process-item">
// //               <span>01</span>
// //               <h3>Understand</h3>
// //               <p>We begin by understanding your business, audience, objectives, and challenges.</p>
// //             </div>

// //             <div className="process-item">
// //               <span>02</span>
// //               <h3>Strategize</h3>
// //               <p>
// //                 We develop a focused strategy that connects your goals with the right audience and
// //                 channels.
// //               </p>
// //             </div>

// //             <div className="process-item">
// //               <span>03</span>
// //               <h3>Create</h3>
// //               <p>
// //                 Our team transforms the strategy into engaging content, experiences, campaigns, and
// //                 events.
// //               </p>
// //             </div>

// //             <div className="process-item">
// //               <span>04</span>
// //               <h3>Deliver</h3>
// //               <p>
// //                 We execute, measure, and continuously improve to create meaningful and measurable
// //                 results.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="services-cta">
// //         <div className="services-container">
// //           <div className="services-cta-content">
// //             <span className="services-eyebrow">Let&apos;s Work Together</span>

// //             <h2>
// //               Have a project
// //               <span> in mind?</span>
// //             </h2>

// //             <p>
// //               Tell us what you are looking to achieve and let&apos;s build something impactful
// //               together.
// //             </p>

// //             <Link href="/contact" className="services-cta-button">
// //               Let&apos;s Talk
// //               <ArrowUpRight size={20} />
// //             </Link>
// //           </div>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }

// 'use client';

// import Link from 'next/link';
// import {
//   ArrowDown,
//   ArrowRight,
//   ArrowUpRight,
//   Building2,
//   ChartNoAxesCombined,
//   Coins,
//   FileSpreadsheet,
//   Globe2,
//   Handshake,
//   Landmark,
//   LineChart,
//   Tractor,
//   Users,
// } from 'lucide-react';
// import {
//   useEffect,
//   useRef,
//   useState,
// } from 'react';

// const services = [
//   {
//     number: '01',
//     title: 'Multistate Credit Cooperative Societies',
//     heading:
//       'Professional Consultancy for Multistate Credit Cooperatives',
//     description:
//       'Vishwasai provides consultancy support for organizations operating in the multistate credit cooperative sector.',
//     details:
//       'Our expertise helps clients understand the challenges, requirements and opportunities associated with establishing, managing and developing multistate credit cooperative organizations.',
//     icon: Landmark,
//   },
//   {
//     number: '02',
//     title: 'NBFC Consultancy',
//     heading: 'From RBI Norms to Establishment',
//     description:
//       'Vishwasai provides consultancy covering the NBFC journey from understanding applicable RBI requirements through the establishment and development process.',
//     details:
//       'Our consultants combine financial-sector knowledge with an understanding of the cooperative ecosystem to help clients navigate the challenges and opportunities associated with NBFCs.',
//     icon: Building2,
//   },
//   {
//     number: '03',
//     title: 'Farmer Producer Organisations',
//     heading: 'Supporting Farmer-Centric Organizations',
//     description:
//       'Farmer Producer Organisations play an important role in bringing farmers together and creating stronger agricultural business structures.',
//     details:
//       'Vishwasai provides consultancy support to FPO-related organizations and helps them address business, financial and organizational requirements.',
//     icon: Tractor,
//   },
//   {
//     number: '04',
//     title: 'Acquisition Facility',
//     heading: 'Supporting Strategic Acquisition Opportunities',
//     description:
//       'Vishwasai provides consultancy relating to acquisition opportunities and the associated financial and business requirements.',
//     details:
//       'Our approach focuses on helping clients evaluate opportunities and structure solutions according to their objectives.',
//     icon: Handshake,
//   },
//   {
//     number: '05',
//     title: 'Project Funding',
//     heading: 'Funding Solutions for Projects',
//     description:
//       'Vishwasai assists organizations with project funding requirements.',
//     details:
//       'We help clients understand their funding needs and work toward suitable financial solutions for their projects and business objectives.',
//     icon: Coins,
//   },
//   {
//     number: '06',
//     title: 'Loan Funding',
//     heading: 'Financial Support for Business Requirements',
//     description:
//       'Vishwasai provides consultancy for loan-related funding requirements.',
//     details:
//       'Our team assists clients in understanding their requirements and identifying appropriate financing solutions.',
//     icon: LineChart,
//   },
//   {
//     number: '07',
//     title: 'Management Consulting',
//     heading: 'Strategic Guidance for Better Business Decisions',
//     description:
//       'Our management consulting services provide organizations with professional guidance designed around their specific challenges and objectives.',
//     details:
//       'We focus on practical, actionable solutions that can support organizational development and sustainable growth.',
//     icon: ChartNoAxesCombined,
//   },
//   {
//     number: '08',
//     title: 'Real Estate Consulting',
//     heading: 'Professional Real Estate Advisory',
//     description:
//       'Vishwasai also provides real estate consultancy as part of its broader business advisory portfolio.',
//     details:
//       'Our services are designed to assist clients with their real-estate-related business and advisory requirements.',
//     icon: Building2,
//   },
//   {
//     number: '09',
//     title: 'Business Development Consultancy',
//     heading: 'Building Businesses for Sustainable Growth',
//     description:
//       'Vishwasai supports organizations looking to develop and expand their businesses.',
//     details:
//       'Our business development consultancy focuses on identifying opportunities, improving business strategies and supporting long-term growth.',
//     icon: Users,
//   },
//   {
//     number: '10',
//     title: 'Export Import Consulting Software',
//     heading: 'Technology & Consultancy for Export-Import Activities',
//     description:
//       'Vishwasai provides consultancy and software-related support associated with export-import activities.',
//     details:
//       'The service is intended to help businesses manage and navigate requirements associated with international trade.',
//     icon: Globe2,
//   },
// ];

// const processSteps = [
//   {
//     number: '01',
//     title: 'Understand',
//     description:
//       'We begin by understanding your organization, requirements, objectives, opportunities and challenges.',
//   },
//   {
//     number: '02',
//     title: 'Analyze',
//     description:
//       'We examine the business, financial and organizational requirements to identify the right direction.',
//   },
//   {
//     number: '03',
//     title: 'Strategize',
//     description:
//       'We develop a focused strategy designed around your goals, requirements and long-term objectives.',
//   },
//   {
//     number: '04',
//     title: 'Support',
//     description:
//       'We provide practical guidance and continued professional support throughout the journey.',
//   },
// ];

// export default function ServicesPage() {
//   const pageRef = useRef<HTMLElement | null>(null);

//   const [scrollProgress, setScrollProgress] =
//     useState(0);

//   const [activeService, setActiveService] =
//     useState(0);

//   const [mousePosition, setMousePosition] =
//     useState({
//       x: 50,
//       y: 50,
//     });

//   /* =========================================
//      SCROLL + REVEAL
//   ========================================= */

//   useEffect(() => {
//     const page = pageRef.current;

//     if (!page) return;

//     const revealElements =
//       page.querySelectorAll<HTMLElement>(
//         '[data-reveal]',
//       );

//     const revealObserver =
//       new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               entry.target.classList.add(
//                 'services-visible',
//               );
//             }
//           });
//         },
//         {
//           threshold: 0.12,
//           rootMargin:
//             '0px 0px -70px 0px',
//         },
//       );

//     revealElements.forEach((element) => {
//       revealObserver.observe(element);
//     });

//     /* Active service observer */

//     const serviceElements =
//       page.querySelectorAll<HTMLElement>(
//         '[data-service-index]',
//       );

//     const serviceObserver =
//       new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               const index = Number(
//                 entry.target.getAttribute(
//                   'data-service-index',
//                 ),
//               );

//               setActiveService(index);
//             }
//           });
//         },
//         {
//           threshold: 0.2,
//           rootMargin:
//             '-25% 0px -50% 0px',
//         },
//       );

//     serviceElements.forEach((element) => {
//       serviceObserver.observe(element);
//     });

//     /* Scroll progress */

//     const updateProgress = () => {
//       const pageTop = page.offsetTop;
//       const pageHeight = page.offsetHeight;
//       const viewportHeight =
//         window.innerHeight;

//       const scrollPosition =
//         window.scrollY - pageTop;

//       const availableScroll =
//         pageHeight - viewportHeight;

//       if (availableScroll <= 0) {
//         setScrollProgress(100);
//         return;
//       }

//       const progress = Math.min(
//         Math.max(
//           (scrollPosition /
//             availableScroll) *
//             100,
//           0,
//         ),
//         100,
//       );

//       setScrollProgress(progress);
//     };

//     updateProgress();

//     window.addEventListener(
//       'scroll',
//       updateProgress,
//       {
//         passive: true,
//       },
//     );

//     window.addEventListener(
//       'resize',
//       updateProgress,
//     );

//     return () => {
//       revealObserver.disconnect();
//       serviceObserver.disconnect();

//       window.removeEventListener(
//         'scroll',
//         updateProgress,
//       );

//       window.removeEventListener(
//         'resize',
//         updateProgress,
//       );
//     };
//   }, []);

//   /* =========================================
//      MOUSE FOLLOW
//   ========================================= */

//   useEffect(() => {
//     const handleMouseMove = (
//       event: MouseEvent,
//     ) => {
//       setMousePosition({
//         x:
//           (event.clientX /
//             window.innerWidth) *
//           100,
//         y:
//           (event.clientY /
//             window.innerHeight) *
//           100,
//       });
//     };

//     window.addEventListener(
//       'mousemove',
//       handleMouseMove,
//     );

//     return () => {
//       window.removeEventListener(
//         'mousemove',
//         handleMouseMove,
//       );
//     };
//   }, []);

//   /* =========================================
//      SCROLL TO SERVICE
//   ========================================= */

//   const scrollToService = (
//     index: number,
//   ) => {
//     const element =
//       document.getElementById(
//         `service-${index}`,
//       );

//     if (!element) return;

//     element.scrollIntoView({
//       behavior: 'smooth',
//       block: 'center',
//     });
//   };

//   /* =========================================
//      CARD TILT
//   ========================================= */

//   const handleCardMove = (
//     event: React.MouseEvent<HTMLElement>,
//   ) => {
//     const card = event.currentTarget;

//     const rect =
//       card.getBoundingClientRect();

//     const x =
//       event.clientX - rect.left;

//     const y =
//       event.clientY - rect.top;

//     const rotateX =
//       ((y / rect.height) - 0.5) * -4;

//     const rotateY =
//       ((x / rect.width) - 0.5) * 4;

//     card.style.transform = `
//       perspective(1200px)
//       rotateX(${rotateX}deg)
//       rotateY(${rotateY}deg)
//       translateY(-8px)
//     `;
//   };

//   const handleCardLeave = (
//     event: React.MouseEvent<HTMLElement>,
//   ) => {
//     event.currentTarget.style.transform =
//       'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)';
//   };

//   return (
//     <>
//       <main
//         ref={pageRef}
//         className="services-page"
//         style={
//           {
//             '--mouse-x': `${mousePosition.x}%`,
//             '--mouse-y': `${mousePosition.y}%`,
//           } as React.CSSProperties
//         }
//       >
//         {/* =====================================
//             SCROLL PROGRESS
//         ===================================== */}

//         <div
//           className="services-progress"
//           aria-hidden="true"
//         >
//           <span
//             style={{
//               width: `${scrollProgress}%`,
//             }}
//           />
//         </div>

//         {/* MOUSE GLOW */}

//         <div
//           className="services-mouse-glow"
//           aria-hidden="true"
//         />

//         {/* BACKGROUND */}

//         <div
//           className="services-grid-bg"
//           aria-hidden="true"
//         />

//         <div
//           className="services-orb services-orb-one"
//           aria-hidden="true"
//         />

//         <div
//           className="services-orb services-orb-two"
//           aria-hidden="true"
//         />

//         {/* =====================================
//             HERO
//         ===================================== */}

//         <section className="services-hero">
//           <div className="services-container">
//             <div
//               className="services-hero-content"
//               data-reveal
//             >
//               <div className="services-eyebrow">
//                 <span />
//                 OUR SERVICES
//               </div>

//               <h1>
//                 Supporting Your
//                 <span>
//                   {' '}
//                   Cooperative Journey
//                 </span>
//               </h1>

//               <div className="services-hero-line" />

//               <p>
//                 Professional consultancy and
//                 business solutions designed
//                 around your organization's
//                 requirements.
//               </p>

//               <button
//                 className="services-explore"
//                 onClick={() =>
//                   scrollToService(0)
//                 }
//               >
//                 <span>
//                   Explore Our Services
//                 </span>

//                 <span className="services-explore-icon">
//                   <ArrowDown size={17} />
//                 </span>
//               </button>
//             </div>

//             {/* HERO SERVICE COUNTER */}

//             <div
//               className="services-hero-counter"
//               data-reveal
//             >
//               <span className="counter-number">
//                 10
//               </span>

//               <span className="counter-label">
//                 Specialized
//                 <br />
//                 Services
//               </span>

//               <div className="counter-ring" />
//             </div>
//           </div>
//         </section>

//         {/* =====================================
//             SERVICES INTRO
//         ===================================== */}

//         <section className="services-intro-section">
//           <div className="services-container">
//             <div
//               className="services-intro"
//               data-reveal
//             >
//               <div>
//                 <span className="services-small-title">
//                   WHAT WE DO
//                 </span>

//                 <h2>
//                   Professional
//                   <span>
//                     {' '}
//                     solutions.
//                   </span>
//                 </h2>
//               </div>

//               <p>
//                 Vishwasai provides consultancy
//                 and business solutions across
//                 cooperative finance,
//                 agriculture, funding,
//                 management, real estate and
//                 international trade.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* =====================================
//             SIDE SERVICE NAV
//         ===================================== */}

//         <aside className="services-side-nav">
//           <div className="side-nav-line" />

//           {services.map(
//             (service, index) => (
//               <button
//                 key={service.number}
//                 className={
//                   activeService === index
//                     ? 'side-nav-item active'
//                     : 'side-nav-item'
//                 }
//                 onClick={() =>
//                   scrollToService(index)
//                 }
//                 aria-label={`Go to ${service.title}`}
//               >
//                 <span className="side-nav-number">
//                   {service.number}
//                 </span>

//                 <span className="side-nav-dot" />

//                 <span className="side-nav-tooltip">
//                   {service.title}
//                 </span>
//               </button>
//             ),
//           )}
//         </aside>

//         {/* =====================================
//             SERVICES
//         ===================================== */}

//         <section className="services-list-section">
//           <div className="services-container">
//             <div className="services-list">
//               {services.map(
//                 (service, index) => {
//                   const Icon =
//                     service.icon;

//                   return (
//                     <article
//                       id={`service-${index}`}
//                       key={service.number}
//                       data-service-index={
//                         index
//                       }
//                       data-reveal
//                       className={[
//                         'service-card',
//                         activeService === index
//                           ? 'service-card-active'
//                           : '',
//                       ]
//                         .filter(Boolean)
//                         .join(' ')}
//                       style={{
//                         transitionDelay: `${
//                           index * 70
//                         }ms`,
//                       }}
//                       onMouseMove={
//                         handleCardMove
//                       }
//                       onMouseLeave={
//                         handleCardLeave
//                       }
//                     >
//                       {/* NUMBER */}

//                       <div className="service-card-number">
//                         {service.number}
//                       </div>

//                       {/* ICON */}

//                       <div className="service-icon">
//                         <Icon
//                           size={28}
//                           strokeWidth={1.6}
//                         />
//                       </div>

//                       {/* CONTENT */}

//                       <div className="service-content">
//                         <div className="service-title-row">
//                           <h2>
//                             {service.title}
//                           </h2>

//                           <span className="service-hover-arrow">
//                             <ArrowUpRight
//                               size={22}
//                             />
//                           </span>
//                         </div>

//                         <h3>
//                           {service.heading}
//                         </h3>

//                         <p>
//                           {
//                             service.description
//                           }
//                         </p>

//                         <p className="service-details">
//                           {service.details}
//                         </p>

//                         <Link
//                           href="/contact"
//                           className="service-link"
//                         >
//                           Discuss Your
//                           Requirements

//                           <ArrowRight
//                             size={17}
//                           />
//                         </Link>
//                       </div>

//                       {/* DECORATION */}

//                       <div
//                         className="service-card-glow"
//                         aria-hidden="true"
//                       />

//                       <div
//                         className="service-card-corner"
//                         aria-hidden="true"
//                       />
//                     </article>
//                   );
//                 },
//               )}
//             </div>
//           </div>
//         </section>

//         {/* =====================================
//             APPROACH
//         ===================================== */}

//         <section className="services-process">
//           <div className="services-process-orb" />

//           <div className="services-container">
//             <div
//               className="services-process-heading"
//               data-reveal
//             >
//               <span className="services-small-title">
//                 OUR APPROACH
//               </span>

//               <h2>
//                 From requirement
//                 <span>
//                   {' '}
//                   to solution.
//                 </span>
//               </h2>

//               <p>
//                 A structured approach helps us
//                 understand your requirements
//                 and provide practical
//                 professional guidance.
//               </p>
//             </div>

//             <div className="process-grid">
//               {processSteps.map(
//                 (step, index) => (
//                   <div
//                     className="process-item"
//                     key={step.number}
//                     data-reveal
//                     style={{
//                       transitionDelay: `${
//                         index * 100
//                       }ms`,
//                     }}
//                   >
//                     <div className="process-top">
//                       <span>
//                         {step.number}
//                       </span>

//                       {index <
//                         processSteps.length -
//                           1 && (
//                         <div className="process-connector">
//                           <ArrowRight
//                             size={17}
//                           />
//                         </div>
//                       )}
//                     </div>

//                     <div className="process-icon">
//                       <span />
//                     </div>

//                     <h3>
//                       {step.title}
//                     </h3>

//                     <p>
//                       {step.description}
//                     </p>
//                   </div>
//                 ),
//               )}
//             </div>
//           </div>
//         </section>

//         {/* =====================================
//             CTA
//         ===================================== */}

//         <section className="services-cta">
//           <div className="services-cta-grid" />

//           <div className="services-container">
//             <div
//               className="services-cta-content"
//               data-reveal
//             >
//               <div className="services-eyebrow">
//                 <span />
//                 LET'S WORK TOGETHER
//               </div>

//               <h2>
//                 Have a requirement
//                 <span>
//                   {' '}
//                   in mind?
//                 </span>
//               </h2>

//               <p>
//                 Tell us about your organization
//                 and requirements. Our team can
//                 help you explore the right
//                 consultancy and business
//                 solution.
//               </p>

//               <Link
//                 href="/contact"
//                 className="services-cta-button"
//               >
//                 Discuss Your Requirements

//                 <span>
//                   <ArrowUpRight
//                     size={19}
//                   />
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* =====================================
//           ALL CSS INSIDE TSX
//       ===================================== */}

//       <style jsx>{`
//         /* =====================================
//            VARIABLES
//         ===================================== */

//         .services-page {
//           --service-dark: #061426;
//           --service-dark-two: #0b2038;
//           --service-blue: #1683ff;
//           --service-blue-light: #54b8ff;
//           --service-cyan: #6ee7f9;
//           --service-text: #172b42;
//           --service-muted: #617286;
//           --service-border: rgba(
//             15,
//             43,
//             72,
//             0.12
//           );

//           position: relative;

//           overflow: hidden;

//           background: #f7faff;

//           color: var(--service-text);
//         }

//         /* =====================================
//            CONTAINER
//         ===================================== */

//         .services-container {
//           position: relative;

//           z-index: 2;

//           width: min(
//             1180px,
//             calc(100% - 40px)
//           );

//           margin: 0 auto;
//         }

//         /* =====================================
//            PROGRESS
//         ===================================== */

//         .services-progress {
//           position: fixed;

//           top: 0;
//           left: 0;

//           width: 100%;
//           height: 4px;

//           z-index: 9999;

//           background: rgba(
//             7,
//             20,
//             38,
//             0.08
//           );
//         }

//         .services-progress span {
//           display: block;

//           height: 100%;

//           background: linear-gradient(
//             90deg,
//             #1683ff,
//             #54b8ff,
//             #6ee7f9
//           );

//           transition: width 0.1s linear;
//         }

//         /* =====================================
//            MOUSE GLOW
//         ===================================== */

//         .services-mouse-glow {
//           position: fixed;

//           left: var(--mouse-x);
//           top: var(--mouse-y);

//           width: 520px;
//           height: 520px;

//           transform: translate(
//             -50%,
//             -50%
//           );

//           pointer-events: none;

//           z-index: 0;

//           border-radius: 50%;

//           background: radial-gradient(
//             circle,
//             rgba(
//                 84,
//                 184,
//                 255,
//                 0.13
//               )
//               0%,
//             rgba(
//                 84,
//                 184,
//                 255,
//                 0.04
//               )
//               35%,
//             transparent 70%
//           );

//           transition:
//             left 0.18s ease-out,
//             top 0.18s ease-out;
//         }

//         /* =====================================
//            BACKGROUND
//         ===================================== */

//         .services-grid-bg {
//           position: absolute;

//           inset: 0;

//           pointer-events: none;

//           opacity: 0.4;

//           background-image:
//             linear-gradient(
//               rgba(
//                   22,
//                   131,
//                   255,
//                   0.04
//                 )
//                 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(
//                   22,
//                   131,
//                   255,
//                   0.04
//                 )
//                 1px,
//               transparent 1px
//             );

//           background-size: 55px 55px;

//           mask-image: linear-gradient(
//             to bottom,
//             black,
//             transparent 75%
//           );
//         }

//         .services-orb {
//           position: absolute;

//           border-radius: 50%;

//           pointer-events: none;

//           filter: blur(2px);
//         }

//         .services-orb-one {
//           width: 500px;
//           height: 500px;

//           top: 400px;
//           right: -250px;

//           background: radial-gradient(
//             circle,
//             rgba(
//                 22,
//                 131,
//                 255,
//                 0.12
//               ),
//             transparent 70%
//           );

//           animation:
//             servicesFloatOne 9s
//             ease-in-out infinite;
//         }

//         .services-orb-two {
//           width: 400px;
//           height: 400px;

//           top: 1500px;
//           left: -220px;

//           background: radial-gradient(
//             circle,
//             rgba(
//                 110,
//                 231,
//                 249,
//                 0.1
//               ),
//             transparent 70%
//           );

//           animation:
//             servicesFloatTwo 11s
//             ease-in-out infinite;
//         }

//         @keyframes servicesFloatOne {
//           0%,
//           100% {
//             transform: translate(
//                 0,
//                 0
//               )
//               scale(1);
//           }

//           50% {
//             transform: translate(
//                 -35px,
//                 35px
//               )
//               scale(1.08);
//           }
//         }

//         @keyframes servicesFloatTwo {
//           0%,
//           100% {
//             transform: translate(
//               0,
//               0
//             );
//           }

//           50% {
//             transform: translate(
//               40px,
//               -30px
//             );
//           }
//         }

//         /* =====================================
//            REVEAL
//         ===================================== */

//         [data-reveal] {
//           opacity: 0;

//           transform: translateY(
//             45px
//           );

//           transition:
//             opacity 0.8s ease,
//             transform 0.8s ease;
//         }

//         .services-visible {
//           opacity: 1;

//           transform: translateY(0);
//         }

//         /* =====================================
//            HERO
//         ===================================== */

//         .services-hero {
//           position: relative;

//           min-height: 680px;

//           display: flex;

//           align-items: center;

//           overflow: hidden;

//           color: white;

//           background:
//             radial-gradient(
//               circle at 80% 20%,
//               rgba(
//                 84,
//                 184,
//                 255,
//                 0.2
//               ),
//               transparent 35%
//             ),
//             linear-gradient(
//               135deg,
//               #061224 0%,
//               #0b1d34 55%,
//               #102f50 100%
//             );
//         }

//         .services-hero::before {
//           content: '';

//           position: absolute;

//           inset: 0;

//           background-image:
//             linear-gradient(
//               rgba(
//                   255,
//                   255,
//                   255,
//                   0.035
//                 )
//                 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(
//                   255,
//                   255,
//                   255,
//                   0.035
//                 )
//                 1px,
//               transparent 1px
//             );

//           background-size: 60px 60px;

//           mask-image: linear-gradient(
//             to bottom,
//             black,
//             transparent
//           );
//         }

//         .services-hero-content {
//           max-width: 850px;

//           padding: 110px 0;
//         }

//         .services-eyebrow {
//           display: flex;

//           align-items: center;

//           gap: 12px;

//           margin-bottom: 22px;

//           color: var(
//             --service-cyan
//           );

//           font-size: 12px;

//           font-weight: 800;

//           letter-spacing: 0.2em;
//         }

//         .services-eyebrow span {
//           width: 35px;
//           height: 1px;

//           background: currentColor;
//         }

//         .services-hero h1 {
//           margin: 0;

//           max-width: 900px;

//           font-size: clamp(
//             45px,
//             6vw,
//             78px
//           );

//           line-height: 1.04;

//           letter-spacing: -0.05em;

//           font-weight: 750;
//         }

//         .services-hero h1 span {
//           color: var(
//             --service-cyan
//           );
//         }

//         .services-hero-line {
//           width: 100px;
//           height: 3px;

//           margin: 30px 0;

//           border-radius: 20px;

//           background: linear-gradient(
//             90deg,
//             #1683ff,
//             #6ee7f9
//           );
//         }

//         .services-hero p {
//           max-width: 680px;

//           margin: 0 0 30px;

//           color: #b5c8da;

//           font-size: 17px;

//           line-height: 1.8;
//         }

//         /* =====================================
//            HERO BUTTON
//         ===================================== */

//         .services-explore {
//           display: inline-flex;

//           align-items: center;

//           gap: 15px;

//           padding: 7px 8px 7px 20px;

//           border: 1px solid
//             rgba(
//               255,
//               255,
//               255,
//               0.16
//             );

//           border-radius: 50px;

//           color: white;

//           background: rgba(
//             255,
//             255,
//             255,
//             0.06
//           );

//           cursor: pointer;

//           backdrop-filter: blur(15px);

//           font-size: 14px;

//           font-weight: 600;

//           transition:
//             transform 0.3s ease,
//             background 0.3s ease,
//             border-color 0.3s ease;
//         }

//         .services-explore:hover {
//           transform: translateY(-4px);

//           background: rgba(
//             255,
//             255,
//             255,
//             0.12
//           );

//           border-color: rgba(
//             110,
//             231,
//             249,
//             0.5
//           );
//         }

//         .services-explore-icon {
//           width: 35px;
//           height: 35px;

//           display: grid;

//           place-items: center;

//           border-radius: 50%;

//           background: #1683ff;

//           transition:
//             transform 0.3s ease;
//         }

//         .services-explore:hover
//           .services-explore-icon {
//           transform: translateY(3px);
//         }

//         /* =====================================
//            HERO COUNTER
//         ===================================== */

//         .services-hero-counter {
//           position: absolute;

//           right: 0;
//           bottom: 110px;

//           width: 190px;
//           height: 190px;

//           display: flex;

//           flex-direction: column;

//           align-items: center;

//           justify-content: center;

//           border-radius: 50%;

//           border: 1px solid
//             rgba(
//               255,
//               255,
//               255,
//               0.15
//             );

//           background: rgba(
//             255,
//             255,
//             255,
//             0.06
//           );

//           backdrop-filter: blur(18px);

//           animation:
//             serviceCounterFloat 5s
//             ease-in-out infinite;
//         }

//         .counter-number {
//           font-size: 48px;

//           line-height: 1;

//           font-weight: 800;

//           color: white;
//         }

//         .counter-label {
//           margin-top: 8px;

//           color: #a9bfd5;

//           font-size: 12px;

//           line-height: 1.4;

//           text-align: center;
//         }

//         .counter-ring {
//           position: absolute;

//           inset: -10px;

//           border-radius: 50%;

//           border: 1px dashed
//             rgba(
//               110,
//               231,
//               249,
//               0.35
//             );

//           animation:
//             counterRotate 16s
//             linear infinite;
//         }

//         @keyframes serviceCounterFloat {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(
//               -12px
//             );
//           }
//         }

//         @keyframes counterRotate {
//           to {
//             transform: rotate(
//               360deg
//             );
//           }
//         }

//         /* =====================================
//            INTRO
//         ===================================== */

//         .services-intro-section {
//           padding: 115px 0 55px;
//         }

//         .services-intro {
//           display: grid;

//           grid-template-columns:
//             1fr 0.8fr;

//           gap: 80px;

//           align-items: end;
//         }

//         .services-small-title {
//           display: block;

//           margin-bottom: 17px;

//           color: #1683ff;

//           font-size: 12px;

//           font-weight: 800;

//           letter-spacing: 0.2em;
//         }

//         .services-intro h2 {
//           margin: 0;

//           font-size: clamp(
//             40px,
//             5vw,
//             60px
//           );

//           line-height: 1;

//           letter-spacing: -0.045em;
//         }

//         .services-intro h2 span {
//           color: #1683ff;
//         }

//         .services-intro p {
//           margin: 0;

//           color: var(
//             --service-muted
//           );

//           font-size: 16px;

//           line-height: 1.85;
//         }

//         /* =====================================
//            SIDE NAV
//         ===================================== */

//         .services-side-nav {
//           position: fixed;

//           right: 22px;
//           top: 50%;

//           transform: translateY(
//             -50%
//           );

//           z-index: 50;

//           display: flex;

//           flex-direction: column;

//           align-items: center;

//           gap: 8px;
//         }

//         .side-nav-line {
//           position: absolute;

//           top: 12px;
//           bottom: 12px;

//           width: 1px;

//           background: rgba(
//             7,
//             20,
//             38,
//             0.15
//           );
//         }

//         .side-nav-item {
//           position: relative;

//           width: 25px;
//           height: 25px;

//           display: grid;

//           place-items: center;

//           border: 0;

//           background: transparent;

//           cursor: pointer;

//           z-index: 2;
//         }

//         .side-nav-dot {
//           width: 6px;
//           height: 6px;

//           border-radius: 50%;

//           background: #9eafc0;

//           transition:
//             width 0.3s ease,
//             height 0.3s ease,
//             background 0.3s ease,
//             box-shadow 0.3s ease;
//         }

//         .side-nav-item.active
//           .side-nav-dot {
//           width: 11px;
//           height: 11px;

//           background: #1683ff;

//           box-shadow:
//             0 0 0 5px
//               rgba(
//                 22,
//                 131,
//                 255,
//                 0.12
//               ),
//             0 0 18px
//               rgba(
//                 22,
//                 131,
//                 255,
//                 0.45
//               );
//         }

//         .side-nav-number {
//           position: absolute;

//           right: 32px;

//           color: #1683ff;

//           font-size: 9px;

//           font-weight: 800;

//           opacity: 0;

//           transform: translateX(
//             5px
//           );

//           transition:
//             opacity 0.25s ease,
//             transform 0.25s ease;
//         }

//         .side-nav-item.active
//           .side-nav-number {
//           opacity: 1;

//           transform: translateX(
//             0
//           );
//         }

//         .side-nav-tooltip {
//           position: absolute;

//           right: 38px;

//           width: max-content;

//           max-width: 200px;

//           padding: 7px 10px;

//           border-radius: 6px;

//           background: #071426;

//           color: white;

//           font-size: 10px;

//           opacity: 0;

//           pointer-events: none;

//           transform: translateX(
//             8px
//           );

//           transition:
//             opacity 0.25s ease,
//             transform 0.25s ease;
//         }

//         .side-nav-item:hover
//           .side-nav-tooltip {
//           opacity: 1;

//           transform: translateX(
//             0
//           );
//         }

//         /* =====================================
//            SERVICES LIST
//         ===================================== */

//         .services-list-section {
//           padding: 60px 0 140px;
//         }

//         .services-list {
//           display: flex;

//           flex-direction: column;

//           gap: 28px;
//         }

//         /* =====================================
//            SERVICE CARD
//         ===================================== */

//         .service-card {
//           position: relative;

//           display: grid;

//           grid-template-columns:
//             75px 70px 1fr;

//           gap: 25px;

//           min-height: 310px;

//           padding: 45px 50px;

//           overflow: hidden;

//           border: 1px solid
//             var(--service-border);

//           border-radius: 24px;

//           background: rgba(
//             255,
//             255,
//             255,
//             0.82
//           );

//           box-shadow:
//             0 20px 60px
//               rgba(
//                 10,
//                 42,
//                 72,
//                 0.055
//               );

//           opacity: 0;

//           transform: translateY(
//             50px
//           );

//           transition:
//             opacity 0.8s ease,
//             transform 0.8s ease,
//             box-shadow 0.35s ease,
//             border-color 0.35s ease;
//         }

//         .service-card.services-visible {
//           opacity: 1;

//           transform: translateY(
//             0
//           );
//         }

//         .service-card:hover,
//         .service-card-active {
//           border-color:
//             rgba(
//               22,
//               131,
//               255,
//               0.28
//             );

//           box-shadow:
//             0 30px 85px
//               rgba(
//                 15,
//                 58,
//                 95,
//                 0.11
//               );
//         }

//         .service-card-number {
//           position: relative;

//           z-index: 2;

//           color: #1683ff;

//           font-size: 15px;

//           font-weight: 800;

//           letter-spacing: 0.08em;
//         }

//         /* =====================================
//            ICON
//         ===================================== */

//         .service-icon {
//           position: relative;

//           width: 58px;
//           height: 58px;

//           display: grid;

//           place-items: center;

//           border-radius: 16px;

//           color: #1683ff;

//           background:
//             rgba(
//               22,
//               131,
//               255,
//               0.07
//             );

//           transition:
//             transform 0.4s ease,
//             background 0.4s ease,
//             color 0.4s ease;
//         }

//         .service-card:hover
//           .service-icon {
//           transform:
//             rotate(-5deg)
//             scale(1.08);

//           color: white;

//           background: #1683ff;
//         }

//         /* =====================================
//            SERVICE CONTENT
//         ===================================== */

//         .service-content {
//           position: relative;

//           z-index: 2;

//           max-width: 850px;
//         }

//         .service-title-row {
//           display: flex;

//           align-items: center;

//           justify-content: space-between;

//           gap: 20px;
//         }

//         .service-content h2 {
//           margin: 0;

//           color: #0a1c31;

//           font-size: 27px;

//           line-height: 1.2;

//           letter-spacing: -0.025em;
//         }

//         .service-hover-arrow {
//           width: 43px;
//           height: 43px;

//           flex-shrink: 0;

//           display: grid;

//           place-items: center;

//           border-radius: 50%;

//           color: #1683ff;

//           border: 1px solid
//             rgba(
//               22,
//               131,
//               255,
//               0.18
//             );

//           opacity: 0;

//           transform:
//             translate(
//               -8px,
//               8px
//             );

//           transition:
//             opacity 0.3s ease,
//             transform 0.3s ease;
//         }

//         .service-card:hover
//           .service-hover-arrow {
//           opacity: 1;

//           transform:
//             translate(
//               0,
//               0
//             );
//         }

//         .service-content h3 {
//           margin: 15px 0 20px;

//           color: #1683ff;

//           font-size: 20px;

//           line-height: 1.4;
//         }

//         .service-content p {
//           max-width: 800px;

//           margin: 0 0 14px;

//           color: #566a7e;

//           font-size: 15.5px;

//           line-height: 1.8;
//         }

//         .service-content
//           .service-details {
//           color: #718398;

//           margin-bottom: 25px;
//         }

//         /* =====================================
//            SERVICE LINK
//         ===================================== */

//         .service-link {
//           display: inline-flex;

//           align-items: center;

//           gap: 10px;

//           color: #1683ff;

//           font-size: 13px;

//           font-weight: 700;

//           text-decoration: none;

//           transition:
//             gap 0.3s ease;
//         }

//         .service-link:hover {
//           gap: 15px;
//         }

//         /* =====================================
//            CARD DECORATION
//         ===================================== */

//         .service-card-glow {
//           position: absolute;

//           width: 250px;
//           height: 250px;

//           right: -100px;
//           bottom: -130px;

//           border-radius: 50%;

//           background: radial-gradient(
//             circle,
//             rgba(
//               22,
//               131,
//               255,
//               0.09
//             ),
//             transparent 70%
//           );

//           transition:
//             transform 0.6s ease;
//         }

//         .service-card:hover
//           .service-card-glow {
//           transform: scale(
//             1.5
//           );
//         }

//         .service-card-corner {
//           position: absolute;

//           right: 22px;
//           top: 22px;

//           width: 35px;
//           height: 35px;

//           border-top: 1px solid
//             rgba(
//               22,
//               131,
//               255,
//               0.15
//             );

//           border-right: 1px solid
//             rgba(
//               22,
//               131,
//               255,
//               0.15
//             );

//           transition:
//             width 0.4s ease,
//             height 0.4s ease;
//         }

//         .service-card:hover
//           .service-card-corner {
//           width: 55px;
//           height: 55px;
//         }

//         /* =====================================
//            PROCESS
//         ===================================== */

//         .services-process {
//           position: relative;

//           padding: 130px 0;

//           overflow: hidden;

//           color: white;

//           background:
//             radial-gradient(
//               circle at 75% 30%,
//               rgba(
//                 84,
//                 184,
//                 255,
//                 0.16
//               ),
//               transparent 35%
//             ),
//             linear-gradient(
//               135deg,
//               #061224,
//               #0b2038
//             );
//         }

//         .services-process-orb {
//           position: absolute;

//           width: 450px;
//           height: 450px;

//           right: -200px;
//           bottom: -200px;

//           border-radius: 50%;

//           background:
//             rgba(
//               22,
//               131,
//               255,
//               0.1
//             );

//           filter: blur(30px);
//         }

//         .services-process-heading {
//           max-width: 720px;

//           margin-bottom: 75px;
//         }

//         .services-process-heading
//           .services-small-title {
//           color: #6ee7f9;
//         }

//         .services-process-heading h2 {
//           margin: 0 0 20px;

//           font-size: clamp(
//             40px,
//             5vw,
//             62px
//           );

//           line-height: 1.05;

//           letter-spacing: -0.045em;
//         }

//         .services-process-heading
//           h2 span {
//           color: #6ee7f9;
//         }

//         .services-process-heading p {
//           max-width: 620px;

//           margin: 0;

//           color: #a9bfd4;

//           font-size: 16px;

//           line-height: 1.8;
//         }

//         .process-grid {
//           display: grid;

//           grid-template-columns:
//             repeat(4, 1fr);

//           gap: 25px;
//         }

//         .process-item {
//           position: relative;

//           padding: 30px 25px;

//           border: 1px solid
//             rgba(
//               255,
//               255,
//               255,
//               0.1
//             );

//           border-radius: 18px;

//           background: rgba(
//             255,
//             255,
//             255,
//             0.04
//           );

//           backdrop-filter: blur(
//             10px
//           );

//           transition:
//             transform 0.35s ease,
//             background 0.35s ease,
//             border-color 0.35s ease;
//         }

//         .process-item:hover {
//           transform: translateY(
//             -8px
//           );

//           background: rgba(
//             255,
//             255,
//             255,
//             0.075
//           );

//           border-color: rgba(
//             110,
//             231,
//             249,
//             0.3
//           );
//         }

//         .process-top {
//           display: flex;

//           align-items: center;

//           justify-content: space-between;

//           margin-bottom: 35px;
//         }

//         .process-top > span {
//           color: #6ee7f9;

//           font-size: 12px;

//           font-weight: 800;

//           letter-spacing: 0.1em;
//         }

//         .process-connector {
//           display: flex;

//           align-items: center;

//           color: rgba(
//             110,
//             231,
//             249,
//             0.5
//           );
//         }

//         .process-icon {
//           width: 45px;
//           height: 45px;

//           display: grid;

//           place-items: center;

//           margin-bottom: 20px;

//           border-radius: 50%;

//           border: 1px solid
//             rgba(
//               110,
//               231,
//               249,
//               0.25
//             );
//         }

//         .process-icon span {
//           width: 11px;
//           height: 11px;

//           border-radius: 50%;

//           background: #6ee7f9;

//           box-shadow:
//             0 0 15px
//               rgba(
//                 110,
//                 231,
//                 249,
//                 0.7
//               );
//         }

//         .process-item h3 {
//           margin: 0 0 12px;

//           font-size: 22px;
//         }

//         .process-item p {
//           margin: 0;

//           color: #9eb4c9;

//           font-size: 14px;

//           line-height: 1.75;
//         }

//         /* =====================================
//            CTA
//         ===================================== */

//         .services-cta {
//           position: relative;

//           min-height: 560px;

//           display: flex;

//           align-items: center;

//           overflow: hidden;

//           color: white;

//           background:
//             radial-gradient(
//               circle at 25% 40%,
//               rgba(
//                 22,
//                 131,
//                 255,
//                 0.16
//               ),
//               transparent 30%
//             ),
//             linear-gradient(
//               135deg,
//               #071426,
//               #0d2945
//             );
//         }

//         .services-cta-grid {
//           position: absolute;

//           inset: 0;

//           opacity: 0.3;

//           background-image:
//             linear-gradient(
//               rgba(
//                   255,
//                   255,
//                   255,
//                   0.04
//                 )
//                 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(
//                   255,
//                   255,
//                   255,
//                   0.04
//                 )
//                 1px,
//               transparent 1px
//             );

//           background-size: 60px 60px;
//         }

//         .services-cta-content {
//           max-width: 800px;

//           padding: 100px 0;
//         }

//         .services-cta-content h2 {
//           margin: 0 0 25px;

//           font-size: clamp(
//             45px,
//             6vw,
//             75px
//           );

//           line-height: 1.05;

//           letter-spacing: -0.05em;
//         }

//         .services-cta-content
//           h2 span {
//           color: #6ee7f9;
//         }

//         .services-cta-content p {
//           max-width: 650px;

//           margin: 0 0 32px;

//           color: #a8bfd5;

//           font-size: 16px;

//           line-height: 1.8;
//         }

//         .services-cta-button {
//           display: inline-flex;

//           align-items: center;

//           gap: 18px;

//           padding: 7px 8px 7px 22px;

//           border: 1px solid
//             rgba(
//               255,
//               255,
//               255,
//               0.15
//             );

//           border-radius: 50px;

//           color: white;

//           text-decoration: none;

//           background: rgba(
//             255,
//             255,
//             255,
//             0.06
//           );

//           backdrop-filter: blur(
//             12px
//           );

//           font-size: 14px;

//           font-weight: 700;

//           transition:
//             transform 0.3s ease,
//             background 0.3s ease,
//             border-color 0.3s ease;
//         }

//         .services-cta-button span {
//           width: 38px;
//           height: 38px;

//           display: grid;

//           place-items: center;

//           border-radius: 50%;

//           background: #1683ff;

//           transition:
//             transform 0.3s ease;
//         }

//         .services-cta-button:hover {
//           transform: translateY(
//             -4px
//           );

//           background: rgba(
//             255,
//             255,
//             255,
//             0.1
//           );

//           border-color: rgba(
//             110,
//             231,
//             249,
//             0.4
//           );
//         }

//         .services-cta-button:hover
//           span {
//           transform: translate(
//             3px,
//             -3px
//           );
//         }

//         /* =====================================
//            TABLET
//         ===================================== */

//         @media (max-width: 1000px) {
//           .services-side-nav {
//             display: none;
//           }

//           .services-hero-counter {
//             right: 30px;
//           }

//           .services-intro {
//             grid-template-columns: 1fr;

//             gap: 30px;
//           }

//           .process-grid {
//             grid-template-columns:
//               repeat(2, 1fr);
//           }

//           .service-card {
//             grid-template-columns:
//               55px 65px 1fr;

//             padding: 40px;
//           }
//         }

//         /* =====================================
//            MOBILE
//         ===================================== */

//         @media (max-width: 700px) {
//           .services-container {
//             width: min(
//               calc(100% - 28px),
//               1180px
//             );
//           }

//           .services-hero {
//             min-height: 680px;
//           }

//           .services-hero-content {
//             padding: 85px 0
//               160px;
//           }

//           .services-hero h1 {
//             font-size: 45px;
//           }

//           .services-hero p {
//             font-size: 15px;
//           }

//           .services-hero-counter {
//             width: 125px;
//             height: 125px;

//             right: 15px;
//             bottom: 35px;
//           }

//           .counter-number {
//             font-size: 30px;
//           }

//           .counter-label {
//             font-size: 9px;
//           }

//           .services-intro-section {
//             padding: 80px 0 35px;
//           }

//           .services-intro h2 {
//             font-size: 42px;
//           }

//           .services-list-section {
//             padding: 40px 0 90px;
//           }

//           .service-card {
//             grid-template-columns: 1fr;

//             gap: 15px;

//             min-height: auto;

//             padding: 32px 23px;

//             border-radius: 18px;
//           }

//           .service-card-number {
//             margin-bottom: 5px;
//           }

//           .service-icon {
//             width: 52px;
//             height: 52px;
//           }

//           .service-content h2 {
//             font-size: 23px;
//           }

//           .service-content h3 {
//             font-size: 18px;
//           }

//           .service-content p {
//             font-size: 14.5px;
//           }

//           .service-hover-arrow {
//             display: none;
//           }

//           .services-process {
//             padding: 90px 0;
//           }

//           .services-process-heading {
//             margin-bottom: 50px;
//           }

//           .services-process-heading
//             h2 {
//             font-size: 42px;
//           }

//           .process-grid {
//             grid-template-columns: 1fr;

//             gap: 16px;
//           }

//           .process-connector {
//             display: none;
//           }

//           .services-cta {
//             min-height: 500px;
//           }

//           .services-cta-content {
//             padding: 80px 0;
//           }

//           .services-cta-content
//             h2 {
//             font-size: 44px;
//           }

//           .services-cta-content p {
//             font-size: 15px;
//           }

//           .services-mouse-glow {
//             display: none;
//           }
//         }

//         /* =====================================
//            REDUCED MOTION
//         ===================================== */

//         @media (prefers-reduced-motion: reduce) {
//           .services-orb,
//           .services-hero-counter,
//           .counter-ring {
//             animation: none;
//           }

//           [data-reveal],
//           .service-card {
//             transition: none;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

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
