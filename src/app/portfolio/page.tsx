// // 'use client';

// // import Link from 'next/link';
// // import { useEffect, useRef, useState } from 'react';

// // /* ============ DATA ============ */

// // const stats = [
// //   { number: 'Since 2009', label: 'Cooperative Agriculture & Finance' },
// //   { number: 'NBFCs', label: 'Advised on Establishment' },
// //   { number: 'Credit Societies', label: 'Served Across Maharashtra' },
// //   { number: 'End-to-End', label: 'Commitment to Every Client' },
// // ];

// // const filters = [
// //   'All Projects',
// //   'Cooperative Finance',
// //   'NBFC',
// //   'Agriculture & FPO',
// //   'Funding',
// //   'Business & Management',
// // ];

// // const engagements = [
// //   {
// //     category: 'Cooperative Finance',
// //     slug: 'cooperative-finance',
// //     title: 'Multistate Credit Cooperative Societies',
// //     description:
// //       'Consultancy and strategic support for organizations operating within the multistate credit cooperative sector, addressing their specific financial, regulatory and operational requirements.',
// //     tags: ['Registration', 'Compliance', 'Structuring'],
// //   },
// //   {
// //     category: 'NBFC',
// //     slug: 'nbfc',
// //     title: 'NBFC Establishment & Consultancy',
// //     description:
// //       'Supporting organizations through the NBFC journey, from understanding RBI requirements and applicable norms to establishment-related consultancy.',
// //     tags: ['RBI', 'Incorporation', 'Advisory'],
// //   },
// //   {
// //     category: 'Agriculture & FPO',
// //     slug: 'agriculture-fpo',
// //     title: 'Farmer Producer Organisations',
// //     description:
// //       'Supporting Farmer Producer Organisations with consultancy aligned with agricultural business development, cooperative structures and financial requirements.',
// //     tags: ['FPO', 'PACS', 'Market Linkage'],
// //   },
// //   {
// //     category: 'Funding',
// //     slug: 'funding',
// //     title: 'Project Funding',
// //     description:
// //       'Helping businesses and organizations evaluate funding requirements and identify suitable financial solutions for their projects.',
// //     tags: ['Evaluation', 'Financial Planning'],
// //   },
// //   {
// //     category: 'Funding',
// //     slug: 'funding',
// //     title: 'Loan Funding',
// //     description:
// //       'Consultancy support for organizations seeking loan-based financial solutions to meet business and project requirements.',
// //     tags: ['Loans', 'Documentation'],
// //   },
// //   {
// //     category: 'Business & Management',
// //     slug: 'business-management',
// //     title: 'Management Consulting',
// //     description:
// //       'Tailored consulting solutions designed around the individual requirements, objectives and growth opportunities of each organization.',
// //     tags: ['Strategy', 'Operations'],
// //   },
// //   {
// //     category: 'Business & Management',
// //     slug: 'business-management',
// //     title: 'Real Estate Consulting',
// //     description:
// //       'Professional consultancy support for real-estate-related business and advisory requirements.',
// //     tags: ['Advisory', 'Real Estate'],
// //   },
// //   {
// //     category: 'Business & Management',
// //     slug: 'business-management',
// //     title: 'Business Development',
// //     description:
// //       'Strategic support focused on helping organizations develop, strengthen and grow their businesses.',
// //     tags: ['Growth', 'Development'],
// //   },
// // ];

// // const testimonials = [
// //   {
// //     quote:
// //       'Placeholder quote — replace with a real client testimonial once available. Keep it specific to what Vishwasai helped with.',
// //     name: 'Client Name',
// //     role: 'Organization, Role',
// //   },
// //   {
// //     quote:
// //       'Placeholder quote — replace with a real client testimonial once available. Keep it specific to what Vishwasai helped with.',
// //     name: 'Client Name',
// //     role: 'Organization, Role',
// //   },
// //   {
// //     quote:
// //       'Placeholder quote — replace with a real client testimonial once available. Keep it specific to what Vishwasai helped with.',
// //     name: 'Client Name',
// //     role: 'Organization, Role',
// //   },
// // ];

// // /* ============ SCROLL REVEAL HOOK ============ */

// // function useReveal() {
// //   const rootRef = useRef<HTMLElement | null>(null);

// //   useEffect(() => {
// //     const root = rootRef.current;
// //     if (!root) return;

// //     const els = root.querySelectorAll<HTMLElement>('.reveal');

// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             entry.target.classList.add('reveal-visible');
// //             observer.unobserve(entry.target);
// //           }
// //         });
// //       },
// //       { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
// //     );

// //     els.forEach((el) => observer.observe(el));

// //     return () => observer.disconnect();
// //   }, []);

// //   return rootRef;
// // }

// // /* ============ PAGE ============ */

// // export default function PortfolioPage() {
// //   const [activeFilter, setActiveFilter] = useState('All Projects');
// //   const rootRef = useReveal();

// //   const visibleEngagements =
// //     activeFilter === 'All Projects'
// //       ? engagements
// //       : engagements.filter((item) => item.category === activeFilter);

// //   return (
// //     <main className="portfolio-page" ref={rootRef as React.RefObject<HTMLElement>}>
// //       {/* Hero */}
// //       <section className="portfolio-hero">
// //         <div className="portfolio-container">
// //           <h1 className="hero-in">Our Portfolio</h1>
// //           <p className="hero-in hero-in-delay-1">
// //             Building stronger cooperatives, financial institutions and agricultural businesses —
// //             explore the sectors and engagements we support.
// //           </p>

// //           <div className="portfolio-stats hero-in hero-in-delay-2">
// //             {stats.map((stat) => (
// //               <div className="portfolio-stat" key={stat.label}>
// //                 <div className="portfolio-stat-number">{stat.number}</div>
// //                 <div className="portfolio-stat-label">{stat.label}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Filters */}
// //       <nav className="portfolio-filters">
// //         <div className="portfolio-container portfolio-filters-inner">
// //           {filters.map((filter) => (
// //             <button
// //               key={filter}
// //               type="button"
// //               className={`portfolio-filter-btn${activeFilter === filter ? ' is-active' : ''}`}
// //               onClick={() => setActiveFilter(filter)}
// //             >
// //               {filter}
// //             </button>
// //           ))}
// //         </div>
// //       </nav>

// //       {/* Areas of Engagement */}
// //       <section className="portfolio-section">
// //         <div className="portfolio-container">
// //           <div className="portfolio-heading reveal">
// //             <span className="portfolio-small-title">Our Expertise</span>
// //             <h2>
// //               Areas of
// //               <span> Engagement</span>
// //             </h2>
// //             <p className="portfolio-heading-note">
// //               These reflect the sectors and business needs we consult on. Detailed case studies
// //               with specific client outcomes will be added as engagements are completed.
// //             </p>
// //           </div>

// //           <div className="portfolio-grid" key={activeFilter}>
// //             {visibleEngagements.map((item, i) => (
// //               <article
// //                 className="portfolio-card portfolio-card-anim"
// //                 style={{ animationDelay: `${(i % 3) * 80}ms` }}
// //                 key={item.title}
// //               >
// //                 <span className="portfolio-badge" data-category={item.slug}>
// //                   {item.category}
// //                 </span>

// //                 <div className="portfolio-card-content">
// //                   <div className="portfolio-card-avatar" />

// //                   <h3>{item.title}</h3>
// //                   <p>{item.description}</p>

// //                   <div className="portfolio-tags">
// //                     {item.tags.map((tag) => (
// //                       <span className="portfolio-tag" key={tag}>
// //                         {tag}
// //                       </span>
// //                     ))}
// //                   </div>

// //                   <Link href="/contact" className="portfolio-link">
// //                     View Details
// //                     <span>→</span>
// //                   </Link>
// //                 </div>
// //               </article>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials */}
// //       <section className="portfolio-testimonials">
// //         <div className="portfolio-container">
// //           <h2 className="reveal">Client Testimonials</h2>
// //           <p className="portfolio-testimonials-note reveal">
// //             Placeholder testimonials — swap these for real client quotes once available.
// //           </p>

// //           <div className="portfolio-testimonial-grid">
// //             {testimonials.map((testimonial, i) => (
// //               <div
// //                 className="portfolio-testimonial-card reveal"
// //                 style={{ transitionDelay: `${i * 90}ms` }}
// //                 key={i}
// //               >
// //                 <div className="portfolio-quote-mark">&ldquo;</div>
// //                 <p>{testimonial.quote}</p>
// //                 <div className="portfolio-testimonial-author">
// //                   <div className="portfolio-author-avatar" />
// //                   <div>
// //                     <div className="portfolio-author-name">{testimonial.name}</div>
// //                     <div className="portfolio-author-role">{testimonial.role}</div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="portfolio-cta">
// //         <div className="portfolio-container">
// //           <div className="portfolio-cta-content reveal">
// //             <span className="portfolio-eyebrow">Have a Project in Mind?</span>

// //             <h2>
// //               Let&apos;s discuss
// //               <span> your next step.</span>
// //             </h2>

// //             <p>
// //               Whether you are establishing a cooperative society, exploring NBFC opportunities,
// //               seeking funding or looking to grow your organization, our team can help you
// //               navigate the next step.
// //             </p>

// //             <Link href="/contact" className="portfolio-cta-button">
// //               Let&apos;s Discuss Your Project
// //               <span>→</span>
// //             </Link>
// //           </div>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }

// 'use client';

// import Link from 'next/link';
// import { useEffect, useRef, useState } from 'react';

// /* =========================================================
//    DATA
// ========================================================= */

// const filters = [
//   'All Projects',
//   'Cooperative Finance',
//   'NBFC',
//   'Agriculture & FPO',
//   'Funding',
//   'Business & Management',
// ];

// const engagements = [
//   {
//     category: 'Cooperative Finance',
//     slug: 'cooperative-finance',
//     title: 'Multistate Credit Cooperative Societies',
//     description:
//       'Consultancy and strategic support for organizations operating within the multistate credit cooperative sector, addressing their specific financial, regulatory and operational requirements.',
//     tags: ['Registration', 'Compliance', 'Structuring'],
//     number: '01',
//   },
//   {
//     category: 'NBFC',
//     slug: 'nbfc',
//     title: 'NBFC Establishment & Consultancy',
//     description:
//       'Supporting organizations through the NBFC journey, from understanding RBI requirements and applicable norms to establishment-related consultancy.',
//     tags: ['RBI', 'Incorporation', 'Advisory'],
//     number: '02',
//   },
//   {
//     category: 'Agriculture & FPO',
//     slug: 'agriculture-fpo',
//     title: 'Farmer Producer Organisations',
//     description:
//       'Supporting Farmer Producer Organisations with consultancy aligned with agricultural business development, cooperative structures and financial requirements.',
//     tags: ['FPO', 'PACS', 'Market Linkage'],
//     number: '03',
//   },
//   {
//     category: 'Funding',
//     slug: 'funding',
//     title: 'Project Funding',
//     description:
//       'Helping businesses and organizations evaluate funding requirements and identify suitable financial solutions for their projects.',
//     tags: ['Evaluation', 'Financial Planning'],
//     number: '04',
//   },
//   {
//     category: 'Funding',
//     slug: 'funding',
//     title: 'Loan Funding',
//     description:
//       'Consultancy support for organizations seeking loan-based financial solutions to meet business and project requirements.',
//     tags: ['Loans', 'Documentation'],
//     number: '05',
//   },
//   {
//     category: 'Business & Management',
//     slug: 'business-management',
//     title: 'Management Consulting',
//     description:
//       'Tailored consulting solutions designed around the individual requirements, objectives and growth opportunities of each organization.',
//     tags: ['Strategy', 'Operations'],
//     number: '06',
//   },
//   {
//     category: 'Business & Management',
//     slug: 'business-management',
//     title: 'Real Estate Consulting',
//     description:
//       'Professional consultancy support for real-estate-related business and advisory requirements.',
//     tags: ['Advisory', 'Real Estate'],
//     number: '07',
//   },
//   {
//     category: 'Business & Management',
//     slug: 'business-management',
//     title: 'Business Development',
//     description:
//       'Strategic support focused on helping organizations develop, strengthen and grow their businesses.',
//     tags: ['Growth', 'Development'],
//     number: '08',
//   },
// ];

// const testimonials = [
//   {
//     quote: 'Client testimonials will be added here as verified client feedback becomes available.',
//     name: 'Client Testimonial',
//     role: 'Verified client feedback',
//   },
//   {
//     quote:
//       'This section can showcase specific experiences and outcomes from Vishwasai engagements.',
//     name: 'Client Testimonial',
//     role: 'Verified client feedback',
//   },
//   {
//     quote: 'Real client stories can be added here to highlight Vishwasai expertise and commitment.',
//     name: 'Client Testimonial',
//     role: 'Verified client feedback',
//   },
// ];

// function useReveal() {
//   const rootRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const root = rootRef.current;
//     if (!root) return;

//     const elements = root.querySelectorAll<HTMLElement>('.reveal');
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('reveal-visible');
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
//     );

//     elements.forEach((element) => observer.observe(element));
//     return () => observer.disconnect();
//   }, []);

//   return rootRef;
// }

// export default function PortfolioPage() {
//   const [activeFilter, setActiveFilter] = useState('All Projects');
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   const rootRef = useReveal();

//   const visibleEngagements =
//     activeFilter === 'All Projects'
//       ? engagements
//       : engagements.filter((item) => item.category === activeFilter);

//   const handleFilterChange = (filter: string) => {
//     setActiveFilter(filter);
//   };

//   return (
//     <main className="portfolio-page" ref={rootRef as React.RefObject<HTMLElement>}>
//       {/* Portfolio hero banner intentionally hidden. */}
//       {/* <section className="blog-hero page-hero-left">
//         <div className="blog-hero-media">
//           <Image
//             src="/assets/blogs/vishwasai.png"
//             alt="Portfolio"
//             fill
//             priority
//             className="blog-hero-image"
//           />
//         </div>

//         <div className="blog-hero-overlay" />

//         <div className="blog-hero-content">
//           <h1>Our Portfolio</h1>

//           <div className="blog-breadcrumb">
//             <Link href="/" className="blog-breadcrumb-home">
//               <Image
//                 src="/assets/home/home.png"
//                 alt="Home"
//                 width={38}
//                 height={48}
//                 className="blog-home-icon"
//               />
//               <span>Home</span>
//             </Link>

//             <span>&gt;</span>

//             <p>Portfolio</p>
//           </div>
//         </div>
//       </section> */}

//       {/* =====================================================
//           FILTER BAR
//       ===================================================== */}

//       <nav className="portfolio-filters">
//         <div className="portfolio-container portfolio-filters-inner">
//           <div className="filter-label"></div>

//           <div className="filter-buttons">
//             {filters.map((filter) => (
//               <button
//                 key={filter}
//                 type="button"
//                 className={`portfolio-filter-btn ${activeFilter === filter ? 'is-active' : ''}`}
//                 onClick={() => handleFilterChange(filter)}
//               >
//                 <span>{filter}</span>

//                 {activeFilter === filter && <i className="filter-active-dot" />}
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* =====================================================
//           AREAS OF ENGAGEMENT
//       ===================================================== */}

//       <section className="portfolio-section" id="engagements">
//         <div className="portfolio-container">
//           <div className="portfolio-heading reveal">
//             <span className="portfolio-small-title">Our Expertise</span>

//             <h2>
//               Areas of <span>Engagement</span>
//             </h2>

//             <p className="portfolio-heading-note">
//               Our portfolio reflects the sectors and business requirements where Vishwasai provides
//               consultancy, strategic guidance and financial support.
//             </p>
//           </div>

//           <div className="results-info reveal">
//             <span>
//               Showing <strong>{visibleEngagements.length}</strong> engagements
//             </span>

//             <span className="active-category">{activeFilter}</span>
//           </div>

//           <div className="portfolio-grid" key={activeFilter}>
//             {visibleEngagements.map((item, index) => (
//               <article
//                 className={`portfolio-card portfolio-card-anim ${
//                   hoveredCard === index ? 'card-hovered' : ''
//                 }`}
//                 style={{
//                   animationDelay: `${(index % 3) * 90}ms`,
//                 }}
//                 key={item.title}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 {/* Animated card glow */}
//                 <div className="card-glow" />

//                 <div className="portfolio-card-top">
//                   <span className="portfolio-badge" data-category={item.slug}>
//                     {item.category}
//                   </span>

//                   <span className="portfolio-card-number">{item.number}</span>
//                 </div>

//                 <div className="portfolio-card-content">
//                   <div className="portfolio-card-icon">
//                     <span />
//                     <span />
//                     <span />
//                   </div>

//                   <h3>{item.title}</h3>

//                   <p>{item.description}</p>

//                   <div className="portfolio-tags">
//                     {item.tags.map((tag) => (
//                       <span className="portfolio-tag" key={tag}>
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <Link href="/contact" className="portfolio-link">
//                     <span>Discuss This Area</span>

//                     <span className="portfolio-link-arrow">→</span>
//                   </Link>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           INDUSTRIES
//       ===================================================== */}

//       <section className="industries-section">
//         <div className="portfolio-container">
//           <div className="industries-heading reveal">
//             <span className="portfolio-small-title">Sectors We Serve</span>

//             <h2>
//               Expertise Across <span>Industries</span>
//             </h2>
//           </div>

//           <div className="industries-grid">
//             <div className="industry-card reveal">
//               <span className="industry-number">01</span>

//               <h3>Cooperative</h3>

//               <p>Credit societies, multistate cooperatives and cooperative organizations.</p>

//               <span className="industry-arrow">↗</span>
//             </div>

//             <div className="industry-card reveal" style={{ transitionDelay: '80ms' }}>
//               <span className="industry-number">02</span>

//               <h3>Agriculture</h3>

//               <p>PACS, FPOs and agricultural organizations.</p>

//               <span className="industry-arrow">↗</span>
//             </div>

//             <div className="industry-card reveal" style={{ transitionDelay: '160ms' }}>
//               <span className="industry-number">03</span>

//               <h3>Finance</h3>

//               <p>NBFCs, funding requirements and financial institutions.</p>

//               <span className="industry-arrow">↗</span>
//             </div>

//             <div className="industry-card reveal" style={{ transitionDelay: '240ms' }}>
//               <span className="industry-number">04</span>

//               <h3>Business</h3>

//               <p>Business development, management and strategic consultancy.</p>

//               <span className="industry-arrow">↗</span>
//             </div>

//             <div className="industry-card reveal" style={{ transitionDelay: '320ms' }}>
//               <span className="industry-number">05</span>

//               <h3>Real Estate</h3>

//               <p>Real-estate-related consultancy and advisory.</p>

//               <span className="industry-arrow">↗</span>
//             </div>

//             <div className="industry-card reveal" style={{ transitionDelay: '400ms' }}>
//               <span className="industry-number">06</span>

//               <h3>Export & Import</h3>

//               <p>Export-import consultancy and software-related support.</p>

//               <span className="industry-arrow">↗</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           TESTIMONIALS
//       ===================================================== */}

//       <section className="portfolio-testimonials">
//         <div className="testimonial-background" aria-hidden="true" />

//         <div className="portfolio-container">
//           <div className="testimonial-heading reveal">
//             <span className="portfolio-small-title">Client Experience</span>

//             <h2>
//               Trusted Through <span>Every Engagement</span>
//             </h2>

//             <p>Verified client testimonials can be added here as they become available.</p>
//           </div>

//           <div className="portfolio-testimonial-grid">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 className="portfolio-testimonial-card reveal"
//                 style={{
//                   transitionDelay: `${index * 100}ms`,
//                 }}
//                 key={index}
//               >
//                 <div className="testimonial-card-top">
//                   <div className="portfolio-quote-mark">“</div>

//                   <span className="testimonial-index">0{index + 1}</span>
//                 </div>

//                 <p>{testimonial.quote}</p>

//                 <div className="portfolio-testimonial-author">
//                   <div className="portfolio-author-avatar">
//                     <span />
//                   </div>

//                   <div>
//                     <div className="portfolio-author-name">{testimonial.name}</div>

//                     <div className="portfolio-author-role">{testimonial.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  Landmark,
  Sprout,
  WalletCards,
  BriefcaseBusiness,
  Globe2,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

/* =========================================================
   DATA
========================================================= */

const filters = ['All', 'Cooperative Finance', 'NBFC', 'Agriculture & FPO', 'Funding', 'Business'];

const portfolioCategories = [
  {
    number: '01',
    category: 'Cooperative Finance',
    title: 'Building Stronger Cooperative Structures',
    description:
      'Portfolio engagements supporting credit cooperative societies, multistate cooperatives, federations and cooperative financial organizations.',
    points: [
      'Credit Cooperative Societies',
      'Multistate Credit Cooperatives',
      'Cooperative Federations',
      'Cooperative Financial Organizations',
    ],
    icon: Landmark,
  },
  {
    number: '02',
    category: 'NBFC',
    title: 'Navigating the NBFC Journey',
    description:
      'Consultancy engagements covering establishment planning, regulatory understanding, financial structuring and strategic advisory.',
    points: [
      'NBFC Establishment',
      'Regulatory Guidance',
      'Business Planning',
      'Financial Structuring',
    ],
    icon: Building2,
  },
  {
    number: '03',
    category: 'Agriculture & FPO',
    title: 'Supporting Agricultural Ecosystems',
    description:
      'Engagements focused on farmer-centric organizations and agricultural structures that aim to create stronger and more sustainable businesses.',
    points: ['Farmer Producer Organisations', 'PACS', 'FPO Federations', 'Agricultural Businesses'],
    icon: Sprout,
  },
  {
    number: '04',
    category: 'Funding',
    title: 'Connecting Projects With Capital',
    description:
      'Financial consultancy engagements supporting project funding, loan requirements, acquisition opportunities and financial structuring.',
    points: ['Project Funding', 'Loan Funding', 'Acquisition Facilities', 'Financial Structuring'],
    icon: WalletCards,
  },
  {
    number: '05',
    category: 'Business',
    title: 'Developing Better Businesses',
    description:
      'Strategic consulting engagements designed around organizational challenges, growth opportunities and long-term business objectives.',
    points: [
      'Management Consulting',
      'Business Development',
      'Strategic Advisory',
      'Organizational Development',
    ],
    icon: BriefcaseBusiness,
  },
  {
    number: '06',
    category: 'Business',
    title: 'Expanding Business Horizons',
    description:
      'Advisory work extending across real estate, export-import activities and technology-supported business requirements.',
    points: [
      'Real Estate Consulting',
      'Export-Import Consulting',
      'Business Advisory',
      'Software Support',
    ],
    icon: Globe2,
  },
];

const caseStudies = [
  {
    number: '01',
    category: 'Cooperative',
    title: 'Cooperative Finance Advisory',
    industry: 'Cooperative / Finance',
    requirement:
      'An organization required professional guidance to understand its cooperative financial structure, operational requirements and development opportunities.',
    approach:
      'Vishwasai assessed the organization’s requirements and provided structured consultancy focused on financial, operational and business considerations.',
    solution:
      'A practical consultancy framework aligned with the organization’s objectives and cooperative-sector requirements.',
    outcome:
      'Greater clarity around the organization’s next steps and a structured path for further development.',
  },
  {
    number: '02',
    category: 'NBFC',
    title: 'NBFC Establishment Planning',
    industry: 'Finance / NBFC',
    requirement:
      'The client required guidance on the NBFC establishment journey and an understanding of the applicable financial and regulatory considerations.',
    approach:
      'Vishwasai provided strategic guidance covering the establishment process, applicable requirements and business planning considerations.',
    solution:
      'A structured roadmap connecting regulatory understanding with business and financial planning.',
    outcome:
      'A clearer framework for evaluating the NBFC opportunity and planning subsequent activities.',
  },
  {
    number: '03',
    category: 'Agriculture',
    title: 'Agriculture & FPO Advisory',
    industry: 'Agriculture / FPO',
    requirement:
      'An agricultural organization needed support in understanding its business structure, financial requirements and growth opportunities.',
    approach:
      'Vishwasai reviewed the organization’s objectives and developed practical recommendations around business and organizational requirements.',
    solution:
      'Customized consultancy focused on strengthening the organization’s business direction.',
    outcome:
      'Improved clarity around growth priorities and the organization’s future development strategy.',
  },
];

/* =========================================================
   REVEAL HOOK
========================================================= */

function useReveal() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const elements = root.querySelectorAll<HTMLElement>('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -70px 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return rootRef;
}

/* =========================================================
   PAGE
========================================================= */

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeCase, setActiveCase] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const rootRef = useReveal();

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      setScrollProgress((scrollTop / documentHeight) * 100);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });

    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  const visibleCategories =
    activeFilter === 'All'
      ? portfolioCategories
      : portfolioCategories.filter((item) => item.category === activeFilter);

  return (
    <main className="portfolio-page" ref={rootRef}>
      {/* =====================================================
          SCROLL PROGRESS
      ===================================================== */}

      <div className="portfolio-progress">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="portfolio-hero">
        <div className="portfolio-orb portfolio-orb-one" />
        <div className="portfolio-orb portfolio-orb-two" />
        <div className="portfolio-grid-lines" />

        <div className="portfolio-container portfolio-hero-inner">
          <div className="portfolio-hero-copy reveal">
            <div className="portfolio-eyebrow">
              <span className="eyebrow-dot" />
              Our Portfolio
            </div>

            <h1>
              Experience.
              <br />
              <span>Expertise.</span>
              <br />
              Results.
            </h1>

            <p>
              Explore the sectors, organizations and business challenges where Vishwasai brings
              consultancy, financial knowledge and strategic guidance together.
            </p>

            <div className="hero-actions">
              <Link href="#portfolio-work" className="portfolio-primary-btn">
                Explore Our Work
                <ArrowDownIcon />
              </Link>

              <Link href="/contact" className="portfolio-secondary-btn">
                Start a Conversation
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="portfolio-hero-visual reveal">
            <div className="hero-visual-card">
              <div className="hero-visual-top">
                <span>VISHWASAI</span>
                <span>EST. 2009</span>
              </div>

              <div className="hero-circle">
                <div className="hero-circle-inner">
                  <Sparkles size={28} />
                  <span>Professional</span>
                  <strong>Consultancy</strong>
                </div>
              </div>

              <div className="hero-visual-bottom">
                <span>COOPERATIVE</span>
                <span>FINANCE</span>
                <span>AGRICULTURE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="portfolio-intro">
        <div className="portfolio-container">
          <div className="intro-grid">
            <div className="reveal">
              <span className="portfolio-section-label">Our Experience</span>

              <h2>
                Work built around
                <span> real requirements.</span>
              </h2>
            </div>

            <div className="intro-text reveal">
              <p>
                Our portfolio is not simply a list of services. It represents the types of
                organizations, sectors and business requirements where Vishwasai provides
                professional support.
              </p>

              <p>
                From cooperative finance and agriculture to NBFCs, funding and business development,
                every engagement begins with understanding the client’s situation and building a
                practical path forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FILTER
      ===================================================== */}

      <section className="portfolio-work" id="portfolio-work">
        <div className="portfolio-container">
          <div className="work-heading reveal">
            <div>
              <span className="portfolio-section-label">Portfolio Categories</span>

              <h2>
                Where we create
                <span> value.</span>
              </h2>
            </div>

            <p>Explore our key areas of experience and the types of engagements we undertake.</p>
          </div>

          <div className="portfolio-filter-wrap reveal">
            <div className="portfolio-filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={
                    activeFilter === filter ? 'portfolio-filter active' : 'portfolio-filter'
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}

                  {activeFilter === filter && <span className="filter-dot" />}
                </button>
              ))}
            </div>
          </div>

          <div className="portfolio-category-grid" key={activeFilter}>
            {visibleCategories.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="portfolio-category-card reveal"
                  style={{
                    animationDelay: `${index * 90}ms`,
                  }}
                >
                  <div className="category-card-glow" />

                  <div className="category-top">
                    <span className="category-number">{item.number}</span>

                    <div className="category-icon">
                      <Icon size={23} />
                    </div>
                  </div>

                  <div className="category-content">
                    <span className="category-label">{item.category}</span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <div className="category-points">
                      {item.points.map((point) => (
                        <div key={point}>
                          <CheckCircle2 size={15} />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="category-bottom">
                    <span>Explore area</span>

                    <span className="category-arrow">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CASE STUDIES
      ===================================================== */}

      <section className="case-study-section">
        <div className="case-study-background" />

        <div className="portfolio-container">
          <div className="case-heading reveal">
            <span className="portfolio-section-label">Portfolio Case Studies</span>

            <h2>
              From requirement
              <span> to outcome.</span>
            </h2>

            <p>
              Each engagement begins with a business requirement and develops into a practical
              solution designed around the organization.
            </p>
          </div>

          <div className="case-studies">
            {caseStudies.map((study, index) => {
              const isActive = activeCase === index;

              return (
                <article
                  className={`case-study reveal ${isActive ? 'case-active' : ''}`}
                  key={study.number}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                  onMouseEnter={() => setActiveCase(index)}
                  onMouseLeave={() => setActiveCase(null)}
                >
                  <div className="case-number">{study.number}</div>

                  <div className="case-main">
                    <div className="case-meta">
                      <span>{study.category}</span>
                      <span>{study.industry}</span>
                    </div>

                    <h3>{study.title}</h3>
                  </div>

                  <div className="case-arrow">
                    <ArrowUpRight size={21} />
                  </div>

                  <div className="case-details">
                    <div>
                      <span>Client Requirement</span>
                      <p>{study.requirement}</p>
                    </div>

                    <div>
                      <span>Our Approach</span>
                      <p>{study.approach}</p>
                    </div>

                    <div>
                      <span>Solution</span>
                      <p>{study.solution}</p>
                    </div>

                    <div>
                      <span>Outcome</span>
                      <p>{study.outcome}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="case-note reveal">
            <span>Note</span>
            <p>
              Specific client names and project outcomes should only be published after receiving
              appropriate client approval.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE MODEL
      ===================================================== */}

      <section className="experience-section">
        <div className="portfolio-container">
          <div className="experience-heading reveal">
            <span className="portfolio-section-label">How We Work</span>

            <h2>
              Every engagement.
              <br />
              <span>A clear direction.</span>
            </h2>
          </div>

          <div className="experience-line">
            <div className="experience-step reveal">
              <span>01</span>
              <div className="step-icon">
                <span />
              </div>
              <h3>Understand</h3>
              <p>We understand the organization, requirement, objectives and challenges.</p>
            </div>

            <div className="experience-step reveal">
              <span>02</span>
              <div className="step-icon">
                <span />
              </div>
              <h3>Evaluate</h3>
              <p>We examine the financial, business and organizational considerations involved.</p>
            </div>

            <div className="experience-step reveal">
              <span>03</span>
              <div className="step-icon">
                <span />
              </div>
              <h3>Structure</h3>
              <p>We develop practical recommendations aligned with the client’s objectives.</p>
            </div>

            <div className="experience-step reveal">
              <span>04</span>
              <div className="step-icon">
                <span />
              </div>
              <h3>Support</h3>
              <p>We remain available to provide guidance as the organization moves forward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="portfolio-cta">
        <div className="cta-pattern" />

        <div className="portfolio-container">
          <div className="portfolio-cta-inner reveal">
            <div className="cta-small">
              <span />
              Have a requirement?
            </div>

            <h2>
              Let&apos;s build the
              <br />
              <span>next chapter.</span>
            </h2>

            <p>
              Whether you are exploring cooperative finance, an NBFC opportunity, agricultural
              development, funding or business growth, Vishwasai can help you understand the next
              step.
            </p>

            <Link href="/contact" className="cta-button">
              Discuss Your Requirement
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          CSS
      ===================================================== */}

      <style jsx global>{`
        /* =====================================================
           VARIABLES
        ===================================================== */

        .portfolio-page {
          --navy: #071426;
          --navy-light: #0d2038;
          --navy-soft: #102943;
          --blue: #76b9ff;
          --blue-light: #a9d7ff;
          --white: #ffffff;
          --text: #172337;
          --muted: #687487;
          --border: rgba(10, 35, 60, 0.11);
          --light: #f5f8fc;
          background: #ffffff;
          color: var(--text);
          overflow: hidden;
        }

        .portfolio-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* =====================================================
           PROGRESS
        ===================================================== */

        .portfolio-progress {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: transparent;
          z-index: 9999;
        }

        .portfolio-progress span {
          display: block;
          height: 100%;
          background: #76b9ff;
          transition: width 0.1s linear;
        }

        /* =====================================================
           REVEAL
        ===================================================== */

        .reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.8s ease,
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* =====================================================
           HERO
        ===================================================== */

        .portfolio-hero {
          min-height: 760px;
          background: var(--navy);
          color: white;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .portfolio-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 75% 30%, rgba(91, 164, 235, 0.2), transparent 30%),
            radial-gradient(circle at 20% 90%, rgba(48, 111, 178, 0.18), transparent 32%);
        }

        .portfolio-grid-lines {
          position: absolute;
          inset: 0;
          opacity: 0.13;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.14) 1px, transparent 1px);
          background-size: 90px 90px;
          mask-image: linear-gradient(to bottom, black, transparent 90%);
        }

        .portfolio-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
          animation: floatingOrb 7s ease-in-out infinite;
        }

        .portfolio-orb-one {
          width: 280px;
          height: 280px;
          right: -100px;
          top: 90px;
          background: rgba(97, 173, 241, 0.12);
        }

        .portfolio-orb-two {
          width: 180px;
          height: 180px;
          left: -80px;
          bottom: 40px;
          background: rgba(129, 196, 255, 0.08);
          animation-delay: -3s;
        }

        @keyframes floatingOrb {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(20px, -25px, 0);
          }
        }

        .portfolio-hero-inner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 70px;
          padding: 120px 0 100px;
        }

        .portfolio-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #c8d8e9;
          margin-bottom: 28px;
          backdrop-filter: blur(10px);
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--blue);
          box-shadow: 0 0 15px rgba(118, 185, 255, 0.8);
        }

        .portfolio-hero h1 {
          margin: 0;
          font-size: clamp(58px, 7vw, 94px);
          line-height: 0.96;
          letter-spacing: -0.055em;
          font-weight: 700;
        }

        .portfolio-hero h1 span {
          color: var(--blue-light);
        }

        .portfolio-hero-copy > p {
          max-width: 610px;
          margin: 35px 0 0;
          font-size: 17px;
          line-height: 1.8;
          color: #b8c8da;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 36px;
        }

        .portfolio-primary-btn,
        .portfolio-secondary-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .portfolio-primary-btn {
          background: white;
          color: var(--navy);
          padding: 14px 20px;
          border-radius: 5px;
          font-weight: 600;
        }

        .portfolio-primary-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.22);
        }

        .portfolio-secondary-btn {
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.22);
          padding: 14px 20px;
          border-radius: 5px;
        }

        .portfolio-secondary-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.45);
        }

        .hero-scroll {
          position: absolute;
          bottom: 35px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          color: #8ea5bd;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .hero-scroll-line {
          width: 50px;
          height: 1px;
          background: #6e89a3;
        }

        .portfolio-hero-visual {
          display: flex;
          justify-content: center;
        }

        .hero-visual-card {
          width: min(390px, 100%);
          min-height: 460px;
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 25px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.025));
          backdrop-filter: blur(20px);
          box-shadow:
            0 40px 100px rgba(0, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transform: rotate(2deg);
          transition: 0.5s ease;
        }

        .hero-visual-card:hover {
          transform: rotate(0deg) translateY(-8px);
        }

        .hero-visual-top,
        .hero-visual-bottom {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          letter-spacing: 0.16em;
          color: #9fb5ca;
        }

        .hero-circle {
          width: 245px;
          height: 245px;
          margin: 70px auto;
          border-radius: 50%;
          display: grid;
          place-items: center;
          border: 1px solid rgba(169, 215, 255, 0.45);
          background: radial-gradient(
            circle,
            rgba(112, 182, 245, 0.22),
            rgba(112, 182, 245, 0.03) 65%
          );
          animation: circlePulse 4s ease-in-out infinite;
        }

        @keyframes circlePulse {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(118, 185, 255, 0);
          }

          50% {
            box-shadow: 0 0 50px rgba(118, 185, 255, 0.16);
          }
        }

        .hero-circle-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: #cde6ff;
        }

        .hero-circle-inner strong {
          font-size: 24px;
          color: white;
        }

        .hero-circle-inner span {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .portfolio-intro {
          padding: 130px 0;
          background: white;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 100px;
          align-items: start;
        }

        .portfolio-section-label {
          display: block;
          color: #6b86a0;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .intro-grid h2,
        .work-heading h2,
        .case-heading h2,
        .experience-heading h2 {
          margin: 0;
          font-size: clamp(42px, 5vw, 66px);
          line-height: 1.04;
          letter-spacing: -0.045em;
          color: var(--navy);
        }

        .intro-grid h2 span,
        .work-heading h2 span,
        .case-heading h2 span,
        .experience-heading h2 span {
          color: #6eaee8;
        }

        .intro-text {
          padding-top: 35px;
        }

        .intro-text p {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.85;
          margin: 0 0 20px;
        }

        /* =====================================================
           WORK
        ===================================================== */

        .portfolio-work {
          background: #f5f8fc;
          padding: 125px 0;
          position: relative;
        }

        .work-heading {
          display: grid;
          grid-template-columns: 1fr 0.7fr;
          gap: 80px;
          align-items: end;
          margin-bottom: 60px;
        }

        .work-heading > p {
          margin: 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
        }

        .portfolio-filter-wrap {
          margin-bottom: 45px;
        }

        .portfolio-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .portfolio-filter {
          border: 1px solid rgba(7, 20, 38, 0.12);
          background: white;
          color: #5e6b7b;
          padding: 11px 16px;
          border-radius: 999px;
          cursor: pointer;
          font-size: 12px;
          transition: 0.3s ease;
        }

        .portfolio-filter:hover {
          border-color: #80b8e8;
          color: var(--navy);
          transform: translateY(-2px);
        }

        .portfolio-filter.active {
          background: var(--navy);
          color: white;
          border-color: var(--navy);
        }

        .filter-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          margin-left: 8px;
          vertical-align: middle;
          border-radius: 50%;
          background: #86c4ff;
        }

        .portfolio-category-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .portfolio-category-card {
          min-height: 470px;
          position: relative;
          overflow: hidden;
          background: white;
          border: 1px solid rgba(7, 20, 38, 0.08);
          border-radius: 18px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.45s ease,
            border-color 0.45s ease;
          animation: cardAppear 0.65s both;
        }

        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .portfolio-category-card:hover {
          transform: translateY(-8px);
          border-color: rgba(103, 166, 219, 0.35);
          box-shadow: 0 28px 65px rgba(8, 35, 65, 0.1);
        }

        .category-card-glow {
          position: absolute;
          width: 220px;
          height: 220px;
          right: -110px;
          top: -110px;
          border-radius: 50%;
          background: rgba(104, 177, 239, 0.11);
          transition: 0.5s ease;
        }

        .portfolio-category-card:hover .category-card-glow {
          transform: scale(1.5);
        }

        .category-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .category-number {
          color: #a2adba;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .category-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #edf6ff;
          color: #5599d1;
          transition: 0.4s ease;
        }

        .portfolio-category-card:hover .category-icon {
          background: var(--navy);
          color: white;
          transform: rotate(-6deg) scale(1.05);
        }

        .category-content {
          margin-top: 55px;
          position: relative;
          z-index: 2;
        }

        .category-label {
          color: #629ed0;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-weight: 700;
        }

        .category-content h3 {
          margin: 13px 0 14px;
          color: var(--navy);
          font-size: 28px;
          line-height: 1.12;
          letter-spacing: -0.025em;
        }

        .category-content > p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.75;
        }

        .category-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 25px;
        }

        .category-points div {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #5e6b7b;
          font-size: 11px;
        }

        .category-points svg {
          color: #6da9da;
          flex-shrink: 0;
        }

        .category-bottom {
          margin-top: auto;
          padding-top: 30px;
          border-top: 1px solid rgba(7, 20, 38, 0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #84909d;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .category-arrow {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #f1f5f9;
          color: var(--navy);
          transition: 0.35s ease;
        }

        .portfolio-category-card:hover .category-arrow {
          background: var(--navy);
          color: white;
          transform: rotate(45deg);
        }

        /* =====================================================
           CASE STUDIES
        ===================================================== */

        .case-study-section {
          padding: 135px 0;
          position: relative;
          overflow: hidden;
          background: var(--navy);
          color: white;
        }

        .case-study-background {
          position: absolute;
          width: 700px;
          height: 700px;
          right: -350px;
          top: 50px;
          border-radius: 50%;
          background: rgba(91, 165, 232, 0.08);
          filter: blur(20px);
        }

        .case-heading {
          max-width: 760px;
          margin-bottom: 65px;
        }

        .case-heading h2 {
          color: white;
        }

        .case-heading p {
          max-width: 650px;
          margin-top: 25px;
          color: #9eb1c6;
          font-size: 15px;
          line-height: 1.8;
        }

        .case-studies {
          border-top: 1px solid rgba(255, 255, 255, 0.14);
        }

        .case-study {
          position: relative;
          display: grid;
          grid-template-columns: 80px 1fr 55px;
          gap: 30px;
          padding: 32px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          cursor: pointer;
          transition: 0.4s ease;
        }

        .case-study::before {
          content: '';
          position: absolute;
          left: -30px;
          right: -30px;
          top: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.025);
          opacity: 0;
          transition: 0.4s ease;
        }

        .case-study:hover::before,
        .case-study.case-active::before {
          opacity: 1;
        }

        .case-number {
          color: #63809c;
          font-size: 12px;
          letter-spacing: 0.1em;
          position: relative;
          z-index: 1;
        }

        .case-main {
          position: relative;
          z-index: 1;
        }

        .case-meta {
          display: flex;
          gap: 18px;
          margin-bottom: 10px;
        }

        .case-meta span {
          color: #7caed6;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }

        .case-main h3 {
          margin: 0;
          font-size: 28px;
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        .case-arrow {
          position: relative;
          z-index: 1;
          width: 43px;
          height: 43px;
          border: 1px solid rgba(255, 255, 255, 0.17);
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #9bb0c5;
          transition: 0.35s ease;
        }

        .case-study:hover .case-arrow {
          background: white;
          color: var(--navy);
          transform: rotate(45deg);
        }

        .case-details {
          grid-column: 2 / 4;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition:
            max-height 0.5s ease,
            opacity 0.4s ease,
            padding 0.4s ease;
        }

        .case-study:hover .case-details,
        .case-study.case-active .case-details {
          max-height: 500px;
          opacity: 1;
          padding-top: 25px;
        }

        .case-details span {
          color: #77b5e8;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }

        .case-details p {
          margin: 8px 0 0;
          color: #9eb1c6;
          font-size: 13px;
          line-height: 1.7;
        }

        .case-note {
          margin-top: 35px;
          padding: 20px 22px;
          display: flex;
          gap: 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.035);
          border-radius: 8px;
        }

        .case-note span {
          color: #7db9eb;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.13em;
        }

        .case-note p {
          margin: 0;
          color: #8499ae;
          font-size: 12px;
          line-height: 1.6;
        }

        /* =====================================================
           EXPERIENCE
        ===================================================== */

        .experience-section {
          padding: 135px 0;
          background: #ffffff;
        }

        .experience-heading {
          max-width: 700px;
          margin-bottom: 80px;
        }

        .experience-line {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 35px;
        }

        .experience-line::before {
          content: '';
          position: absolute;
          left: 8%;
          right: 8%;
          top: 25px;
          height: 1px;
          background: #dbe5ef;
        }

        .experience-step {
          position: relative;
          z-index: 2;
        }

        .experience-step > span {
          display: grid;
          place-items: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--navy);
          color: white;
          font-size: 11px;
          font-weight: 700;
          box-shadow: 0 0 0 7px white;
        }

        .step-icon {
          display: none;
        }

        .experience-step h3 {
          margin: 30px 0 10px;
          color: var(--navy);
          font-size: 21px;
        }

        .experience-step p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.75;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .portfolio-cta {
          position: relative;
          padding: 130px 0;
          overflow: hidden;
          background: #edf5fc;
        }

        .cta-pattern {
          position: absolute;
          width: 600px;
          height: 600px;
          right: -260px;
          top: -200px;
          border-radius: 50%;
          border: 1px solid rgba(73, 139, 195, 0.14);
          box-shadow:
            0 0 0 60px rgba(73, 139, 195, 0.035),
            0 0 0 120px rgba(73, 139, 195, 0.025);
        }

        .portfolio-cta-inner {
          max-width: 760px;
        }

        .cta-small {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #5f89ad;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-weight: 700;
          margin-bottom: 22px;
        }

        .cta-small span {
          width: 25px;
          height: 1px;
          background: #6ba8d8;
        }

        .portfolio-cta h2 {
          margin: 0;
          color: var(--navy);
          font-size: clamp(48px, 6vw, 78px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .portfolio-cta h2 span {
          color: #619fd2;
        }

        .portfolio-cta p {
          max-width: 620px;
          margin: 28px 0;
          color: #68788a;
          font-size: 15px;
          line-height: 1.8;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 15px 21px;
          background: var(--navy);
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 600;
          transition: 0.35s ease;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 35px rgba(7, 20, 38, 0.2);
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 900px) {
          .portfolio-hero {
            min-height: auto;
          }

          .portfolio-hero-inner {
            grid-template-columns: 1fr;
            gap: 70px;
            padding: 110px 0 90px;
          }

          .portfolio-hero-visual {
            justify-content: flex-start;
          }

          .intro-grid,
          .work-heading {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .portfolio-category-grid {
            grid-template-columns: 1fr;
          }

          .experience-line {
            grid-template-columns: repeat(2, 1fr);
            gap: 50px 30px;
          }

          .experience-line::before {
            display: none;
          }

          .case-details {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 650px) {
          .portfolio-container {
            width: min(100% - 28px, 1180px);
          }

          .portfolio-hero h1 {
            font-size: 58px;
          }

          .portfolio-hero-copy > p {
            font-size: 15px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .portfolio-primary-btn,
          .portfolio-secondary-btn {
            justify-content: center;
          }

          .hero-visual-card {
            min-height: 400px;
          }

          .hero-circle {
            width: 200px;
            height: 200px;
            margin: 55px auto;
          }

          .portfolio-intro,
          .portfolio-work,
          .case-study-section,
          .experience-section,
          .portfolio-cta {
            padding: 90px 0;
          }

          .intro-grid h2,
          .work-heading h2,
          .case-heading h2,
          .experience-heading h2 {
            font-size: 43px;
          }

          .portfolio-filters {
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 8px;
            scrollbar-width: none;
          }

          .portfolio-filter {
            flex-shrink: 0;
          }

          .portfolio-category-card {
            min-height: 430px;
            padding: 23px;
          }

          .category-content {
            margin-top: 40px;
          }

          .category-content h3 {
            font-size: 25px;
          }

          .category-points {
            grid-template-columns: 1fr;
          }

          .case-study {
            grid-template-columns: 45px 1fr 40px;
            gap: 15px;
          }

          .case-main h3 {
            font-size: 21px;
          }

          .case-details {
            grid-column: 2 / 4;
          }

          .case-note {
            flex-direction: column;
            gap: 8px;
          }

          .experience-line {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .experience-step {
            padding-left: 65px;
          }

          .experience-step > span {
            position: absolute;
            left: 0;
            top: 0;
          }

          .experience-step h3 {
            margin-top: 0;
          }

          .portfolio-cta h2 {
            font-size: 48px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .portfolio-category-card,
          .portfolio-orb,
          .hero-circle,
          .hero-visual-card {
            animation: none !important;
            transition: none !important;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}

/* =========================================================
   SMALL INLINE ARROW COMPONENT
========================================================= */

function ArrowDownIcon() {
  return (
    <span
      style={{
        display: 'inline-flex',
        transform: 'rotate(90deg)',
      }}
    >
      <ArrowRight size={17} />
    </span>
  );
}
