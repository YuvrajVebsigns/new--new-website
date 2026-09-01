// // // 'use client';

// // // import Image from 'next/image';
// // // import Link from 'next/link';
// // // import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// // // import { useEffect, useState } from 'react';
// // // import { fetchWebsiteEvents, WebsiteEvent } from '@/services/events.service';

// // // function getStoredWebsiteId(): string | undefined {
// // //   if (typeof window === 'undefined') return undefined;

// // //   try {
// // //     const raw = window.localStorage.getItem('websiteAuth');
// // //     if (!raw) return undefined;

// // //     const parsed: unknown = JSON.parse(raw);
// // //     if (typeof parsed === 'object' && parsed !== null && 'websiteId' in parsed) {
// // //       const websiteId = (parsed as { websiteId?: unknown }).websiteId;
// // //       return typeof websiteId === 'string' ? websiteId : undefined;
// // //     }
// // //   } catch {
// // //     return undefined;
// // //   }

// // //   return undefined;
// // // }

// // // function getEventImage(event: WebsiteEvent): string {
// // //   const eventObj = event as Record<string, unknown>;

// // //   // Check direct string image fields
// // //   for (const field of ['image', 'heroImage', 'banner', 'poster'] as const) {
// // //     const val = eventObj[field];
// // //     if (typeof val === 'string' && val.trim()) return val;
// // //   }

// // //   // Handle featureImage which may be a string or an Image object with size variants
// // //   const featureImage = eventObj.featureImage;
// // //   if (typeof featureImage === 'string' && featureImage.trim()) return featureImage;
// // //   if (
// // //     typeof featureImage === 'object' &&
// // //     featureImage !== null &&
// // //     'small' in featureImage &&
// // //     typeof (featureImage as Record<string, unknown>).small === 'string'
// // //   ) {
// // //     return (featureImage as Record<string, unknown>).small as string;
// // //   }

// // //   return '/assets/blogs/blog-1.webp';
// // // }

// // // function getEventCategory(event: WebsiteEvent): string {
// // //   const eventObj = event as Record<string, unknown>;

// // //   const category =
// // //     typeof eventObj.category === 'string'
// // //       ? eventObj.category
// // //       : typeof eventObj.type === 'string'
// // //         ? eventObj.type
// // //         : null;

// // //   return category && category.trim() ? category : 'Events';
// // // }

// // // function getEventTitle(event: WebsiteEvent): string {
// // //   const eventObj = event as Record<string, unknown>;

// // //   const title =
// // //     typeof eventObj.title === 'string'
// // //       ? eventObj.title
// // //       : typeof eventObj.name === 'string'
// // //         ? eventObj.name
// // //         : typeof eventObj.eventName === 'string'
// // //           ? eventObj.eventName
// // //           : null;

// // //   return title && title.trim() ? title : 'Event';
// // // }

// // // export default function EventsPage() {
// // //   const [events, setEvents] = useState<WebsiteEvent[] | null>(null);

// // //   useEffect(() => {
// // //     fetchWebsiteEvents(getStoredWebsiteId())
// // //       .then((data) => {
// // //         if (Array.isArray(data) && data.length) {
// // //           setEvents(data);
// // //         } else {
// // //           setEvents([]);
// // //         }
// // //       })
// // //       .catch(() => setEvents([]));
// // //   }, []);

// // //   const heroMediaRef = useScrollAnimation<HTMLDivElement>({
// // //     animationClass: 'animate-fade-in-right',
// // //     initialTransform: 'translateX(40px)',
// // //     threshold: 0.12,
// // //     once: false,
// // //   });

// // //   const heroContentRef = useScrollAnimation<HTMLDivElement>({
// // //     animationClass: 'animate-fade-in-left',
// // //     initialTransform: 'translateX(-40px)',
// // //     threshold: 0.12,
// // //     once: false,
// // //   });

// // //   const leftRef = useScrollAnimation<HTMLDivElement>({
// // //     animationClass: 'animate-fade-in-left',
// // //     initialTransform: 'translateX(-40px)',
// // //     threshold: 0.12,
// // //     once: false,
// // //   });

// // //   const rightRef = useScrollAnimation<HTMLDivElement>({
// // //     animationClass: 'animate-fade-in-right',
// // //     initialTransform: 'translateX(40px)',
// // //     threshold: 0.12,
// // //     once: false,
// // //   });

// // //   return (
// // //     <>
// // //       <section className="blog-hero">
// // //         <div className="blog-hero-media" ref={heroMediaRef}>
// // //           <Image
// // //             src="/assets/blogs/blog-1.webp"
// // //             alt="Events"
// // //             fill
// // //             priority
// // //             className="blog-hero-image"
// // //           />
// // //         </div>

// // //         <div className="blog-hero-overlay"></div>

// // //         <div className="blog-hero-content" ref={heroContentRef}>
// // //           <h1>Event Calendar</h1>

// // //           <div className="blog-breadcrumb">
// // //             <Link href="/" className="blog-breadcrumb-home">
// // //               🏦 Home
// // //             </Link>

// // //             <span>&gt;</span>

// // //             <p>Events</p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <section className="project-section">
// // //         <div className="project-container">
// // //           <div className="project-grid">
// // //             {events === null ? (
// // //               <div className="events-loading">Loading events…</div>
// // //             ) : events.length === 0 ? (
// // //               <div className="events-empty">No events available at the moment.</div>
// // //             ) : (
// // //               events.map((item: WebsiteEvent, index: number) => {
// // //                 const title = getEventTitle(item);
// // //                 const slug =
// // //                   item.id && typeof item.id === 'string'
// // //                     ? String(item.id)
// // //                     : title
// // //                         .toLowerCase()
// // //                         .replace(/\s+/g, '-')
// // //                         .replace(/[^a-z0-9-]/g, '');

// // //                 const imageSrc = getEventImage(item);
// // //                 const category = getEventCategory(item);

// // //                 return (
// // //                   <Link key={slug} href={`/events/${slug}`}>
// // //                     <div className="project-card" ref={index === 0 ? leftRef : rightRef}>
// // //                       <div className="project-image-wrap">
// // //                         <Image src={imageSrc} alt={title} fill className="project-image" />
// // //                       </div>

// // //                       <div className="project-overlay">
// // //                         <span className="project-category">{category}</span>

// // //                         <div className="project-content">
// // //                           <h3>{title}</h3>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </Link>
// // //                 );
// // //               })
// // //             )}
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // }

// // 'use client';

// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// // import { useEffect, useState, type PointerEvent } from 'react';
// // import { fetchWebsiteEvents, WebsiteEvent } from '@/services/events.service';
// // import FallbackImage from '@/components/FallbackImage';

// // function getStoredWebsiteId(): string | undefined {
// //   if (typeof window === 'undefined') return undefined;

// //   try {
// //     const raw = window.localStorage.getItem('websiteAuth');
// //     if (!raw) return undefined;

// //     const parsed: unknown = JSON.parse(raw);
// //     if (typeof parsed === 'object' && parsed !== null && 'websiteId' in parsed) {
// //       const websiteId = (parsed as { websiteId?: unknown }).websiteId;
// //       return typeof websiteId === 'string' ? websiteId : undefined;
// //     }
// //   } catch {
// //     return undefined;
// //   }

// //   return undefined;
// // }

// // function getEventImage(event: WebsiteEvent): string {
// //   if (event.bannerImage?.medium) return event.bannerImage.medium;
// //   if (event.bannerImage?.small) return event.bannerImage.small;
// //   if (event.bannerImage?.original) return event.bannerImage.original;

// //   if (event.bannerImageId?.urlVariants?.medium) return event.bannerImageId.urlVariants.medium;
// //   if (event.bannerImageId?.urlVariants?.small) return event.bannerImageId.urlVariants.small;
// //   if (event.bannerImageId?.url) return event.bannerImageId.url;

// //   if (event.featureImage?.medium) return event.featureImage.medium;
// //   if (event.featureImage?.small) return event.featureImage.small;
// //   if (event.featureImage?.original) return event.featureImage.original;

// //   return '/assets/blogs/p1.jpg';
// // }

// // function getEventCategory(event: WebsiteEvent): string {
// //   return event.type || 'Events';
// // }

// // function getEventTitle(event: WebsiteEvent): string {
// //   return event.title || 'Event';
// // }

// // export default function EventsPage() {
// //   const [events, setEvents] = useState<WebsiteEvent[] | null>(null);

// //   const handleHeroPointerMove = (event: PointerEvent<HTMLImageElement>) => {
// //     const bounds = event.currentTarget.getBoundingClientRect();
// //     const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
// //     const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12;

// //     event.currentTarget.style.setProperty('--hero-shift-x', `${offsetX}px`);
// //     event.currentTarget.style.setProperty('--hero-shift-y', `${offsetY}px`);
// //   };

// //   const resetHeroPointer = (event: PointerEvent<HTMLImageElement>) => {
// //     event.currentTarget.style.setProperty('--hero-shift-x', '0px');
// //     event.currentTarget.style.setProperty('--hero-shift-y', '0px');
// //   };

// //   useEffect(() => {
// //     fetchWebsiteEvents(getStoredWebsiteId())
// //       .then((data) => setEvents(Array.isArray(data) ? data : []))
// //       .catch(() => setEvents([]));
// //   }, []);

// //   const heroMediaRef = useScrollAnimation<HTMLDivElement>({
// //     animationClass: 'animate-fade-in-right',
// //     initialTransform: 'translateX(40px)',
// //     threshold: 0.12,
// //     once: false,
// //   });

// //   const heroContentRef = useScrollAnimation<HTMLDivElement>({
// //     animationClass: 'animate-fade-in-left',
// //     initialTransform: 'translateX(-40px)',
// //     threshold: 0.12,
// //     once: false,
// //   });

// //   const leftRef = useScrollAnimation<HTMLDivElement>({
// //     animationClass: 'animate-fade-in-left',
// //     initialTransform: 'translateX(-40px)',
// //     threshold: 0.12,
// //     once: false,
// //   });

// //   const rightRef = useScrollAnimation<HTMLDivElement>({
// //     animationClass: 'animate-fade-in-right',
// //     initialTransform: 'translateX(40px)',
// //     threshold: 0.12,
// //     once: false,
// //   });

// //   return (
// //     <>
// //       <section className="blog-hero events-hero page-hero-left">
// //         <div className="blog-hero-media" ref={heroMediaRef}>
// //           <Image
// //             src="/assets/blogs/vishwasai.png"
// //             alt="Events"
// //             fill
// //             priority
// //             className="blog-hero-image"
// //             onPointerMove={handleHeroPointerMove}
// //             onPointerLeave={resetHeroPointer}
// //           />
// //         </div>

// //         <div className="blog-hero-overlay"></div>

// //         <div className="blog-hero-content" ref={heroContentRef}>
// //           <h1>Event Calendar</h1>

// //           <div className="blog-breadcrumb">
// //             <Link href="/" className="blog-breadcrumb-home">
// //               <Image
// //                 src="/assets/home/home.png"
// //                 alt="Home"
// //                 width={38}
// //                 height={48}
// //                 className="blog-home-icon"
// //               />
// //               <span>Home</span>
// //             </Link>

// //             <span>&gt;</span>

// //             <p>Event</p>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="project-section">
// //         <div className="project-container">
// //           <div className="project-grid">
// //             {events === null ? (
// //               <div className="events-loading">Loading events…</div>
// //             ) : events.length === 0 ? (
// //               <div className="events-empty">No events available at the moment.</div>
// //             ) : (
// //               events.map((item, index) => {
// //                 const title = getEventTitle(item);
// //                 const slug =
// //                   item.slug ||
// //                   item.id ||
// //                   title
// //                     .toLowerCase()
// //                     .replace(/\s+/g, '-')
// //                     .replace(/[^a-z0-9-]/g, '');

// //                 const imageSrc = getEventImage(item);
// //                 const category = getEventCategory(item);

// //                 return (
// //                   <Link key={item.id || slug} href={`/events/${slug}`}>
// //                     <div className="project-card" ref={index % 2 === 0 ? leftRef : rightRef}>
// //                       <div className="project-image-wrap">
// //                         <FallbackImage
// //                           src={imageSrc}
// //                           alt={title}
// //                           fill
// //                           className="project-image"
// //                           fallbackSrc="/assets/blogs/p1.jpg"
// //                           unoptimized={imageSrc.startsWith('http')}
// //                         />
// //                       </div>

// //                       <div className="project-overlay">
// //                         <span className="project-category">{category}</span>

// //                         <div className="project-content">
// //                           <h3>{title}</h3>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </Link>
// //                 );
// //               })
// //             )}
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowUpRight, CalendarDays, Sparkles } from 'lucide-react';
// import { useEffect, useState, type PointerEvent } from 'react';
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { fetchWebsiteEvents, WebsiteEvent } from '@/services/events.service';
// import FallbackImage from '@/components/FallbackImage';

// function getStoredWebsiteId(): string | undefined {
//   if (typeof window === 'undefined') return undefined;

//   try {
//     const raw = window.localStorage.getItem('websiteAuth');
//     if (!raw) return undefined;

//     const parsed: unknown = JSON.parse(raw);

//     if (
//       typeof parsed === 'object' &&
//       parsed !== null &&
//       'websiteId' in parsed
//     ) {
//       const websiteId = (parsed as { websiteId?: unknown }).websiteId;

//       return typeof websiteId === 'string' ? websiteId : undefined;
//     }
//   } catch {
//     return undefined;
//   }

//   return undefined;
// }

// function getEventImage(event: WebsiteEvent): string {
//   if (event.bannerImage?.medium) return event.bannerImage.medium;
//   if (event.bannerImage?.small) return event.bannerImage.small;
//   if (event.bannerImage?.original) return event.bannerImage.original;

//   if (event.bannerImageId?.urlVariants?.medium) {
//     return event.bannerImageId.urlVariants.medium;
//   }

//   if (event.bannerImageId?.urlVariants?.small) {
//     return event.bannerImageId.urlVariants.small;
//   }

//   if (event.bannerImageId?.url) {
//     return event.bannerImageId.url;
//   }

//   if (event.featureImage?.medium) return event.featureImage.medium;
//   if (event.featureImage?.small) return event.featureImage.small;
//   if (event.featureImage?.original) return event.featureImage.original;

//   return '/assets/blogs/p1.jpg';
// }

// function getEventCategory(event: WebsiteEvent): string {
//   return event.type || 'Events';
// }

// function getEventTitle(event: WebsiteEvent): string {
//   return event.title || 'Event';
// }

// function getEventDescription(event: WebsiteEvent): string {
//   const eventObject = event as WebsiteEvent & {
//     description?: string;
//     excerpt?: string;
//     shortDescription?: string;
//   };

//   return (
//     eventObject.shortDescription ||
//     eventObject.excerpt ||
//     eventObject.description ||
//     'Discover insights, conversations and opportunities from the Vishwasai community.'
//   );
// }

// function EventSkeleton({ index }: { index: number }) {
//   return (
//     <div
//       className="events-modern-skeleton"
//       style={{ animationDelay: `${index * 100}ms` }}
//     >
//       <div className="events-skeleton-image" />
//       <div className="events-skeleton-content">
//         <div className="events-skeleton-line small" />
//         <div className="events-skeleton-line" />
//         <div className="events-skeleton-line medium" />
//       </div>
//     </div>
//   );
// }

// export default function EventsPage() {
//   const [events, setEvents] = useState<WebsiteEvent[] | null>(null);

//   const heroMediaRef = useScrollAnimation<HTMLDivElement>({
//     animationClass: 'animate-fade-in-right',
//     initialTransform: 'translateX(40px)',
//     threshold: 0.12,
//     once: false,
//   });

//   const heroContentRef = useScrollAnimation<HTMLDivElement>({
//     animationClass: 'animate-fade-in-left',
//     initialTransform: 'translateX(-40px)',
//     threshold: 0.12,
//     once: false,
//   });

//   const sectionHeadingRef = useScrollAnimation<HTMLDivElement>({
//     animationClass: 'animate-fade-in',
//     initialTransform: 'translateY(35px)',
//     threshold: 0.12,
//     once: false,
//   });

//   const handleHeroPointerMove = (
//     event: PointerEvent<HTMLImageElement>,
//   ) => {
//     const bounds = event.currentTarget.getBoundingClientRect();

//     const offsetX =
//       ((event.clientX - bounds.left) / bounds.width - 0.5) * 16;

//     const offsetY =
//       ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;

//     event.currentTarget.style.setProperty(
//       '--hero-shift-x',
//       `${offsetX}px`,
//     );

//     event.currentTarget.style.setProperty(
//       '--hero-shift-y',
//       `${offsetY}px`,
//     );
//   };

//   const resetHeroPointer = (
//     event: PointerEvent<HTMLImageElement>,
//   ) => {
//     event.currentTarget.style.setProperty(
//       '--hero-shift-x',
//       '0px',
//     );

//     event.currentTarget.style.setProperty(
//       '--hero-shift-y',
//       '0px',
//     );
//   };

//   useEffect(() => {
//     let mounted = true;

//     fetchWebsiteEvents(getStoredWebsiteId())
//       .then((data) => {
//         if (!mounted) return;

//         setEvents(Array.isArray(data) ? data : []);
//       })
//       .catch(() => {
//         if (mounted) {
//           setEvents([]);
//         }
//       });

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   return (
//     <>
//       {/* =========================================================
//           HERO
//       ========================================================== */}

//       <section className="events-modern-hero">
//         <div
//           className="events-modern-hero-media"
//           ref={heroMediaRef}
//         >
//           <Image
//             src="/assets/blogs/vishwasai.png"
//             alt="Vishwasai Events"
//             fill
//             priority
//             className="events-modern-hero-image"
//             onPointerMove={handleHeroPointerMove}
//             onPointerLeave={resetHeroPointer}
//           />

//           <div className="events-modern-hero-grid" />
//           <div className="events-modern-hero-glow" />
//         </div>

//         <div className="events-modern-hero-overlay" />

//         <div
//           className="events-modern-hero-content"
//           ref={heroContentRef}
//         >
//           <div className="events-modern-eyebrow">
//             <span className="events-modern-eyebrow-dot" />
//             <span>VISHWASAI EVENTS</span>
//           </div>

//           <h1>
//             Events
//             <span>& Activities</span>
//           </h1>

//           <p>
//             Connecting People. Sharing Knowledge. Creating
//             Opportunities.
//           </p>

//           <div className="events-modern-hero-description">
//             Showcase Vishwasai&apos;s participation in conferences,
//             seminars, workshops, business meetings and
//             cooperative-sector events.
//           </div>

//           <div className="events-modern-breadcrumb">
//             <Link href="/" className="events-modern-home">
//               <Image
//                 src="/assets/home/home.png"
//                 alt="Home"
//                 width={30}
//                 height={38}
//                 className="events-modern-home-icon"
//               />

//               <span>Home</span>
//             </Link>

//             <span className="events-modern-breadcrumb-arrow">
//               /
//             </span>

//             <span>Events</span>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           EVENTS SECTION
//       ========================================================== */}

//       <section className="events-modern-section">
//         <div className="events-modern-container">

//           {/* SECTION INTRO */}

//           <div
//             className="events-modern-section-heading"
//             ref={sectionHeadingRef}
//           >
//             <div className="events-modern-heading-left">
//               <div className="events-modern-small-label">
//                 <Sparkles size={15} />
//                 <span>OUR ACTIVITIES</span>
//               </div>

//               <h2>
//                 Moments that
//                 <span> create impact.</span>
//               </h2>
//             </div>

//             <div className="events-modern-heading-right">
//               <p>
//                 Explore the conferences, workshops, meetings and
//                 industry gatherings where Vishwasai connects
//                 ideas with people and creates meaningful
//                 opportunities.
//               </p>
//             </div>
//           </div>

//           {/* TOP DIVIDER */}

//           <div className="events-modern-divider">
//             <span />
//             <span />
//           </div>

//           {/* =====================================================
//               LOADING
//           ====================================================== */}

//           {events === null && (
//             <div className="events-modern-grid">
//               {[0, 1, 2, 3, 4, 5].map((index) => (
//                 <EventSkeleton key={index} index={index} />
//               ))}
//             </div>
//           )}

//           {/* =====================================================
//               EMPTY
//           ====================================================== */}

//           {events !== null && events.length === 0 && (
//             <div className="events-modern-empty">
//               <div className="events-empty-icon">
//                 <CalendarDays size={34} />
//               </div>

//               <h3>No events available</h3>

//               <p>
//                 There are currently no events available. Please
//                 check back soon for upcoming activities.
//               </p>

//               <Link
//                 href="/"
//                 className="events-empty-button"
//               >
//                 Back to Home
//                 <ArrowUpRight size={17} />
//               </Link>
//             </div>
//           )}

//           {/* =====================================================
//               EVENTS GRID
//           ====================================================== */}

//           {events !== null && events.length > 0 && (
//             <div className="events-modern-grid">
//               {events.map((item, index) => {
//                 const title = getEventTitle(item);

//                 const slug =
//                   item.slug ||
//                   item.id ||
//                   title
//                     .toLowerCase()
//                     .replace(/\s+/g, '-')
//                     .replace(/[^a-z0-9-]/g, '');

//                 const imageSrc = getEventImage(item);
//                 const category = getEventCategory(item);
//                 const description = getEventDescription(item);

//                 return (
//                   <EventCard
//                     key={item.id || slug}
//                     item={item}
//                     index={index}
//                     title={title}
//                     slug={String(slug)}
//                     imageSrc={imageSrc}
//                     category={category}
//                     description={description}
//                   />
//                 );
//               })}
//             </div>
//           )}

//           {/* BOTTOM CTA */}

//           {events !== null && events.length > 0 && (
//             <div className="events-modern-bottom">
//               <div>
//                 <span className="events-modern-bottom-label">
//                   VISHWASAI
//                 </span>

//                 <h3>
//                   Stay connected with
//                   <span> what&apos;s happening.</span>
//                 </h3>
//               </div>

//               <Link
//                 href="/contact"
//                 className="events-modern-contact-button"
//               >
//                 <span>Connect With Us</span>

//                 <span className="events-modern-contact-icon">
//                   <ArrowUpRight size={18} />
//                 </span>
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* =========================================================
//           PAGE CSS
//       ========================================================== */}

//       <style jsx global>{`
//         /* =====================================================
//            EVENTS PAGE
//            VISUAL SYSTEM
//         ====================================================== */

//         .events-modern-hero {
//           position: relative;
//           min-height: 570px;
//           width: 100%;
//           overflow: hidden;
//           background: #07152b;
//           isolation: isolate;
//         }

//         .events-modern-hero-media {
//           position: absolute;
//           inset: 0;
//           overflow: hidden;
//         }

//         .events-modern-hero-image {
//           object-fit: cover;
//           transform:
//             translate3d(
//               var(--hero-shift-x, 0px),
//               var(--hero-shift-y, 0px),
//               0
//             )
//             scale(1.06);
//           transition:
//             transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
//             filter 0.45s ease;
//           filter: saturate(0.82) contrast(1.04);
//         }

//         .events-modern-hero-media:hover
//           .events-modern-hero-image {
//           filter: saturate(0.95) contrast(1.06);
//         }

//         .events-modern-hero-overlay {
//           position: absolute;
//           inset: 0;
//           z-index: 1;
//           background:
//             linear-gradient(
//               90deg,
//               rgba(4, 15, 34, 0.96) 0%,
//               rgba(4, 15, 34, 0.84) 36%,
//               rgba(4, 15, 34, 0.48) 68%,
//               rgba(4, 15, 34, 0.3) 100%
//             );
//         }

//         .events-modern-hero-grid {
//           position: absolute;
//           inset: 0;
//           z-index: 1;
//           opacity: 0.15;
//           background-image:
//             linear-gradient(
//               rgba(255,255,255,0.2) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(255,255,255,0.2) 1px,
//               transparent 1px
//             );
//           background-size: 70px 70px;
//           mask-image: linear-gradient(
//             90deg,
//             black,
//             transparent 80%
//           );
//         }

//         .events-modern-hero-glow {
//           position: absolute;
//           width: 420px;
//           height: 420px;
//           right: 8%;
//           top: 50%;
//           transform: translateY(-50%);
//           z-index: 1;
//           border-radius: 50%;
//           background: rgba(120, 190, 255, 0.12);
//           filter: blur(70px);
//           pointer-events: none;
//         }

//         .events-modern-hero-content {
//           position: relative;
//           z-index: 3;
//           width: min(1180px, calc(100% - 48px));
//           margin: 0 auto;
//           padding: 145px 0 80px;
//           color: #fff;
//         }

//         .events-modern-eyebrow {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           margin-bottom: 22px;
//           padding: 9px 14px;
//           border: 1px solid rgba(255,255,255,0.22);
//           border-radius: 999px;
//           background: rgba(255,255,255,0.08);
//           backdrop-filter: blur(12px);
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.18em;
//         }

//         .events-modern-eyebrow-dot {
//           width: 7px;
//           height: 7px;
//           border-radius: 50%;
//           background: #9bd7ff;
//           box-shadow: 0 0 14px rgba(155,215,255,0.9);
//         }

//         .events-modern-hero-content h1 {
//           max-width: 760px;
//           margin: 0;
//           font-size: clamp(48px, 7vw, 92px);
//           line-height: 0.95;
//           letter-spacing: -0.055em;
//           font-weight: 700;
//         }

//         .events-modern-hero-content h1 span {
//           display: block;
//           color: #b9dcf8;
//         }

//         .events-modern-hero-content > p {
//           max-width: 650px;
//           margin: 28px 0 0;
//           font-size: clamp(20px, 2.2vw, 28px);
//           line-height: 1.35;
//           font-weight: 500;
//           color: #fff;
//         }

//         .events-modern-hero-description {
//           max-width: 650px;
//           margin-top: 15px;
//           color: rgba(255,255,255,0.72);
//           font-size: 15px;
//           line-height: 1.8;
//         }

//         .events-modern-breadcrumb {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           margin-top: 34px;
//           color: rgba(255,255,255,0.62);
//           font-size: 13px;
//         }

//         .events-modern-home {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           color: #fff;
//           text-decoration: none;
//           transition: color 0.3s ease;
//         }

//         .events-modern-home:hover {
//           color: #b9dcf8;
//         }

//         .events-modern-home-icon {
//           width: 20px;
//           height: 25px;
//           object-fit: contain;
//           filter: brightness(0) invert(1);
//         }

//         .events-modern-breadcrumb-arrow {
//           opacity: 0.45;
//         }

//         /* =====================================================
//            MAIN SECTION
//         ====================================================== */

//         .events-modern-section {
//           position: relative;
//           padding: 105px 0 100px;
//           background:
//             radial-gradient(
//               circle at 90% 5%,
//               rgba(120,190,255,0.08),
//               transparent 25%
//             ),
//             #ffffff;
//           color: #08152b;
//         }

//         .events-modern-container {
//           width: min(1180px, calc(100% - 48px));
//           margin: 0 auto;
//         }

//         .events-modern-section-heading {
//           display: grid;
//           grid-template-columns: 1fr 0.75fr;
//           gap: 80px;
//           align-items: end;
//         }

//         .events-modern-small-label {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           margin-bottom: 18px;
//           color: #315c83;
//           font-size: 11px;
//           font-weight: 800;
//           letter-spacing: 0.17em;
//         }

//         .events-modern-small-label svg {
//           color: #6baed6;
//         }

//         .events-modern-heading-left h2 {
//           margin: 0;
//           max-width: 650px;
//           font-size: clamp(38px, 5vw, 64px);
//           line-height: 1;
//           letter-spacing: -0.05em;
//           font-weight: 700;
//         }

//         .events-modern-heading-left h2 span {
//           color: #7098b9;
//         }

//         .events-modern-heading-right p {
//           margin: 0;
//           color: #66758a;
//           font-size: 15px;
//           line-height: 1.85;
//         }

//         .events-modern-divider {
//           display: flex;
//           gap: 8px;
//           margin: 48px 0 42px;
//           height: 1px;
//           background: #e6edf4;
//         }

//         .events-modern-divider span:first-child {
//           width: 80px;
//           background: #315c83;
//         }

//         .events-modern-divider span:last-child {
//           flex: 1;
//         }

//         /* =====================================================
//            GRID
//         ====================================================== */

//         .events-modern-grid {
//           display: grid;
//           grid-template-columns: repeat(2, minmax(0, 1fr));
//           gap: 28px;
//         }

//         .events-modern-card {
//           position: relative;
//           overflow: hidden;
//           min-width: 0;
//           border: 1px solid #e3eaf1;
//           border-radius: 3px;
//           background: #fff;
//           box-shadow:
//             0 12px 35px rgba(10, 31, 55, 0.06);
//           text-decoration: none;
//           color: inherit;
//           transform: translateY(0);
//           transition:
//             transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
//             box-shadow 0.45s ease,
//             border-color 0.35s ease;
//         }

//         .events-modern-card:hover {
//           transform: translateY(-9px);
//           border-color: #c4d8e8;
//           box-shadow:
//             0 25px 60px rgba(10, 31, 55, 0.13);
//         }

//         .events-modern-card-image {
//           position: relative;
//           height: 310px;
//           overflow: hidden;
//           background: #e9eff5;
//         }

//         .events-modern-card-image img {
//           object-fit: cover;
//           transition:
//             transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
//             filter 0.5s ease;
//         }

//         .events-modern-card:hover
//           .events-modern-card-image img {
//           transform: scale(1.08);
//           filter: saturate(1.05);
//         }

//         .events-modern-card-image::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background:
//             linear-gradient(
//               180deg,
//               transparent 45%,
//               rgba(3, 17, 35, 0.72) 100%
//             );
//           pointer-events: none;
//         }

//         .events-modern-number {
//           position: absolute;
//           z-index: 2;
//           top: 18px;
//           left: 18px;
//           width: 43px;
//           height: 43px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border: 1px solid rgba(255,255,255,0.3);
//           background: rgba(255,255,255,0.14);
//           backdrop-filter: blur(10px);
//           color: #fff;
//           font-size: 11px;
//           font-weight: 800;
//         }

//         .events-modern-category {
//           position: absolute;
//           z-index: 2;
//           right: 18px;
//           top: 18px;
//           padding: 8px 12px;
//           border: 1px solid rgba(255,255,255,0.25);
//           border-radius: 999px;
//           background: rgba(7,21,43,0.55);
//           backdrop-filter: blur(10px);
//           color: #fff;
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//         }

//         .events-modern-image-bottom {
//           position: absolute;
//           z-index: 3;
//           left: 22px;
//           right: 22px;
//           bottom: 20px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           color: #fff;
//         }

//         .events-modern-image-bottom span {
//           font-size: 11px;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           opacity: 0.78;
//         }

//         .events-modern-round-arrow {
//           width: 42px;
//           height: 42px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 50%;
//           background: #fff;
//           color: #0a2038;
//           transform: translate(0, 0);
//           transition:
//             transform 0.35s ease,
//             background 0.35s ease,
//             color 0.35s ease;
//         }

//         .events-modern-card:hover
//           .events-modern-round-arrow {
//           transform: translate(4px, -4px);
//           background: #b9dcf8;
//         }

//         .events-modern-card-body {
//           padding: 25px 25px 28px;
//         }

//         .events-modern-card-body h3 {
//           margin: 0;
//           color: #091a31;
//           font-size: clamp(21px, 2vw, 28px);
//           line-height: 1.2;
//           letter-spacing: -0.025em;
//           font-weight: 700;
//           transition: color 0.3s ease;
//         }

//         .events-modern-card:hover
//           .events-modern-card-body h3 {
//           color: #315c83;
//         }

//         .events-modern-card-body p {
//           display: -webkit-box;
//           margin: 13px 0 0;
//           overflow: hidden;
//           color: #718094;
//           font-size: 14px;
//           line-height: 1.7;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//         }

//         .events-modern-readmore {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           margin-top: 20px;
//           color: #173a5b;
//           font-size: 12px;
//           font-weight: 800;
//           letter-spacing: 0.05em;
//           text-transform: uppercase;
//         }

//         .events-modern-readmore svg {
//           transition: transform 0.3s ease;
//         }

//         .events-modern-card:hover
//           .events-modern-readmore svg {
//           transform: translate(4px, -4px);
//         }

//         /* =====================================================
//            SKELETON
//         ====================================================== */

//         .events-modern-skeleton {
//           overflow: hidden;
//           border: 1px solid #e6edf4;
//           background: #fff;
//           animation: eventsSkeletonPulse 1.5s ease-in-out infinite;
//         }

//         .events-skeleton-image {
//           height: 310px;
//           background: #edf2f6;
//         }

//         .events-skeleton-content {
//           padding: 25px;
//         }

//         .events-skeleton-line {
//           width: 90%;
//           height: 17px;
//           margin-top: 14px;
//           border-radius: 3px;
//           background: #edf2f6;
//         }

//         .events-skeleton-line.small {
//           width: 25%;
//           margin-top: 0;
//           height: 11px;
//         }

//         .events-skeleton-line.medium {
//           width: 65%;
//         }

//         @keyframes eventsSkeletonPulse {
//           0%,
//           100% {
//             opacity: 0.65;
//           }

//           50% {
//             opacity: 1;
//           }
//         }

//         /* =====================================================
//            EMPTY STATE
//         ====================================================== */

//         .events-modern-empty {
//           padding: 90px 25px;
//           border: 1px solid #e3eaf1;
//           text-align: center;
//           background: #fff;
//         }

//         .events-empty-icon {
//           width: 74px;
//           height: 74px;
//           margin: 0 auto 22px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 50%;
//           background: #eef6fc;
//           color: #315c83;
//         }

//         .events-modern-empty h3 {
//           margin: 0;
//           font-size: 27px;
//           letter-spacing: -0.03em;
//         }

//         .events-modern-empty p {
//           max-width: 500px;
//           margin: 12px auto 25px;
//           color: #718094;
//           line-height: 1.7;
//         }

//         .events-empty-button {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 13px 20px;
//           background: #0a2038;
//           color: #fff;
//           text-decoration: none;
//           transition: transform 0.3s ease;
//         }

//         .events-empty-button:hover {
//           transform: translateY(-3px);
//         }

//         /* =====================================================
//            BOTTOM CTA
//         ====================================================== */

//         .events-modern-bottom {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 30px;
//           margin-top: 85px;
//           padding: 45px 50px;
//           background:
//             linear-gradient(
//               120deg,
//               #07182d 0%,
//               #102e4b 100%
//             );
//           color: #fff;
//           overflow: hidden;
//           position: relative;
//         }

//         .events-modern-bottom::after {
//           content: '';
//           position: absolute;
//           width: 280px;
//           height: 280px;
//           right: -100px;
//           top: -130px;
//           border-radius: 50%;
//           border: 1px solid rgba(255,255,255,0.12);
//           box-shadow:
//             0 0 0 40px rgba(255,255,255,0.03),
//             0 0 0 80px rgba(255,255,255,0.025);
//         }

//         .events-modern-bottom-label {
//           font-size: 10px;
//           letter-spacing: 0.2em;
//           opacity: 0.55;
//         }

//         .events-modern-bottom h3 {
//           margin: 10px 0 0;
//           font-size: clamp(26px, 3vw, 40px);
//           line-height: 1.05;
//           letter-spacing: -0.04em;
//         }

//         .events-modern-bottom h3 span {
//           color: #afd7f4;
//         }

//         .events-modern-contact-button {
//           position: relative;
//           z-index: 2;
//           display: inline-flex;
//           align-items: center;
//           gap: 15px;
//           padding: 7px 7px 7px 22px;
//           border: 1px solid rgba(255,255,255,0.25);
//           color: #fff;
//           text-decoration: none;
//           white-space: nowrap;
//           transition:
//             background 0.3s ease,
//             border-color 0.3s ease;
//         }

//         .events-modern-contact-button:hover {
//           background: rgba(255,255,255,0.1);
//           border-color: rgba(255,255,255,0.5);
//         }

//         .events-modern-contact-icon {
//           width: 40px;
//           height: 40px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: #fff;
//           color: #0a2038;
//           transition:
//             transform 0.3s ease,
//             background 0.3s ease;
//         }

//         .events-modern-contact-button:hover
//           .events-modern-contact-icon {
//           transform: translate(3px, -3px);
//           background: #b9dcf8;
//         }

//         /* =====================================================
//            RESPONSIVE
//         ====================================================== */

//         @media (max-width: 900px) {
//           .events-modern-hero {
//             min-height: 530px;
//           }

//           .events-modern-hero-content {
//             padding-top: 125px;
//           }

//           .events-modern-section-heading {
//             grid-template-columns: 1fr;
//             gap: 25px;
//           }

//           .events-modern-grid {
//             grid-template-columns: 1fr;
//           }

//           .events-modern-bottom {
//             align-items: flex-start;
//             flex-direction: column;
//             padding: 38px 30px;
//           }
//         }

//         @media (max-width: 600px) {
//           .events-modern-hero {
//             min-height: 610px;
//           }

//           .events-modern-hero-content {
//             width: min(100% - 34px, 1180px);
//             padding-top: 115px;
//           }

//           .events-modern-hero-overlay {
//             background:
//               linear-gradient(
//                 180deg,
//                 rgba(4,15,34,0.93),
//                 rgba(4,15,34,0.72)
//               );
//           }

//           .events-modern-hero-glow {
//             width: 260px;
//             height: 260px;
//             right: -100px;
//           }

//           .events-modern-hero-content h1 {
//             font-size: 52px;
//           }

//           .events-modern-hero-content > p {
//             font-size: 20px;
//           }

//           .events-modern-hero-description {
//             font-size: 14px;
//           }

//           .events-modern-section {
//             padding: 75px 0;
//           }

//           .events-modern-container {
//             width: min(100% - 34px, 1180px);
//           }

//           .events-modern-heading-left h2 {
//             font-size: 42px;
//           }

//           .events-modern-card-image {
//             height: 250px;
//           }

//           .events-modern-card-body {
//             padding: 21px;
//           }

//           .events-modern-bottom {
//             margin-top: 60px;
//             padding: 30px 24px;
//           }

//           .events-modern-contact-button {
//             width: 100%;
//             justify-content: space-between;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .events-modern-hero-image,
//           .events-modern-card,
//           .events-modern-card-image img,
//           .events-modern-round-arrow,
//           .events-modern-contact-icon {
//             transition: none !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// /* =========================================================
//    EVENT CARD
// ========================================================= */

// function EventCard({
//   item,
//   index,
//   title,
//   slug,
//   imageSrc,
//   category,
//   description,
// }: {
//   item: WebsiteEvent;
//   index: number;
//   title: string;
//   slug: string;
//   imageSrc: string;
//   category: string;
//   description: string;
// }) {
//   const animationClass =
//     index % 2 === 0
//       ? 'animate-fade-in-left'
//       : 'animate-fade-in-right';

//   const initialTransform =
//     index % 2 === 0
//       ? 'translateX(-45px)'
//       : 'translateX(45px)';

//   const ref = useScrollAnimation<HTMLAnchorElement>({
//     animationClass,
//     initialTransform,
//     threshold: 0.12,
//     once: false,
//   });

//   return (
//     <Link
//       ref={ref}
//       href={`/events/${slug}`}
//       className="events-modern-card"
//       style={{
//         transitionDelay: `${index * 70}ms`,
//       }}
//       aria-label={`View event: ${title}`}
//     >
//       <div className="events-modern-card-image">
//         <FallbackImage
//           src={imageSrc}
//           alt={title}
//           fill
//           className="project-image"
//           fallbackSrc="/assets/blogs/p1.jpg"
//           unoptimized={imageSrc.startsWith('http')}
//         />

//         <span className="events-modern-number">
//           {String(index + 1).padStart(2, '0')}
//         </span>

//         <span className="events-modern-category">
//           {category}
//         </span>

//         <div className="events-modern-image-bottom">
//           <span>Vishwasai Event</span>

//           <span className="events-modern-round-arrow">
//             <ArrowUpRight size={17} />
//           </span>
//         </div>
//       </div>

//       <div className="events-modern-card-body">
//         <h3>{title}</h3>

//         <p>{description}</p>

//         <div className="events-modern-readmore">
//           <span>Explore Event</span>
//           <ArrowUpRight size={15} />
//         </div>
//       </div>
//     </Link>
//   );
// }

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowUpRight, CalendarDays, ChevronRight, MapPin, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fetchWebsiteEvents, WebsiteEvent } from '@/services/events.service';
import FallbackImage from '@/components/FallbackImage';

function getStoredWebsiteId(): string | undefined {
  if (typeof window === 'undefined') return undefined;

  try {
    const raw = window.localStorage.getItem('websiteAuth');

    if (!raw) return undefined;

    const parsed: unknown = JSON.parse(raw);

    if (typeof parsed === 'object' && parsed !== null && 'websiteId' in parsed) {
      const websiteId = (parsed as { websiteId?: unknown }).websiteId;

      return typeof websiteId === 'string' ? websiteId : undefined;
    }
  } catch {
    return undefined;
  }

  return undefined;
}

function getEventImage(event: WebsiteEvent): string {
  if (event.bannerImage?.medium) return event.bannerImage.medium;
  if (event.bannerImage?.small) return event.bannerImage.small;
  if (event.bannerImage?.original) return event.bannerImage.original;

  if (event.bannerImageId?.urlVariants?.medium) {
    return event.bannerImageId.urlVariants.medium;
  }

  if (event.bannerImageId?.urlVariants?.small) {
    return event.bannerImageId.urlVariants.small;
  }

  if (event.bannerImageId?.url) {
    return event.bannerImageId.url;
  }

  if (event.featureImage?.medium) return event.featureImage.medium;
  if (event.featureImage?.small) return event.featureImage.small;
  if (event.featureImage?.original) return event.featureImage.original;

  return '/assets/blogs/p1.jpg';
}

function getEventCategory(event: WebsiteEvent): string {
  return event.type || 'Events';
}

function getEventTitle(event: WebsiteEvent): string {
  return event.title || 'Event';
}

function getEventDate(event: WebsiteEvent): string {
  const eventObj = event as Record<string, unknown>;

  const value =
    eventObj.date ||
    eventObj.eventDate ||
    eventObj.startDate ||
    eventObj.startAt ||
    eventObj.createdAt;

  if (typeof value !== 'string') return '';

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) return '';

  return parsed.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function getEventLocation(event: WebsiteEvent): string {
  const eventObj = event as Record<string, unknown>;

  const value = eventObj.location || eventObj.venue || eventObj.address || eventObj.city;

  return typeof value === 'string' ? value : '';
}

export default function EventsPage() {
  const [events, setEvents] = useState<WebsiteEvent[] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    let mounted = true;

    fetchWebsiteEvents(getStoredWebsiteId())
      .then((data) => {
        if (mounted) {
          setEvents(Array.isArray(data) ? data : []);
        }
      })
      .catch(() => {
        if (mounted) {
          setEvents([]);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  const heroContentRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-left',
    initialTransform: 'translateX(-50px)',
    threshold: 0.12,
    once: false,
  });

  const heroSideRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-right',
    initialTransform: 'translateX(50px)',
    threshold: 0.12,
    once: false,
  });

  const introRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in',
    initialTransform: 'translateY(35px)',
    threshold: 0.12,
    once: false,
  });

  const categories = [
    'All',
    ...Array.from(new Set((events || []).map((event) => getEventCategory(event)).filter(Boolean))),
  ];

  const filteredEvents = (events || []).filter((event) => {
    const search = searchTerm.trim().toLowerCase();

    const matchesCategory = activeCategory === 'All' || getEventCategory(event) === activeCategory;

    if (!search) return matchesCategory;

    const searchableText = [
      getEventTitle(event),
      getEventCategory(event),
      getEventLocation(event),
      getEventDate(event),
    ]
      .join(' ')
      .toLowerCase();

    return matchesCategory && searchableText.includes(search);
  });

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="events-modern-hero">
        <div className="events-hero-grid-pattern" />

        <div className="events-hero-glow events-glow-one" />
        <div className="events-hero-glow events-glow-two" />

        <div className="events-modern-hero-content" ref={heroContentRef}>
          <br />
          <div className="events-eyebrow">
            <span className="events-eyebrow-line" />
            <span>VISHWASAI EVENTS</span>
          </div>

          <h1>
            Events
            <br />
            <span>&amp; Activities</span>
          </h1>

          <p className="events-hero-description">
            Connecting People. Sharing Knowledge. Creating Opportunities.
          </p>

          <p className="events-hero-subtext">
            Showcase Vishwasai&apos;s participation in conferences, seminars, workshops, business
            meetings and cooperative-sector events.
          </p>

          <div className="events-breadcrumb">
            <Link href="/" className="events-breadcrumb-home">
              Home
            </Link>

            <ChevronRight size={15} />

            <span>Events</span>
          </div>
        </div>

        <div className="events-hero-side" ref={heroSideRef}>
          <div className="events-hero-orbit">
            <div className="events-orbit-ring events-orbit-ring-one" />
            <div className="events-orbit-ring events-orbit-ring-two" />

            <div className="events-orbit-center">
              <CalendarDays size={42} strokeWidth={1.4} />

              <span>EVENTS</span>

              <small>
                Connect
                <br />
                Collaborate
                <br />
                Grow
              </small>
            </div>

            <div className="events-floating-card events-floating-card-one">
              <Sparkles size={17} />
              <span>Knowledge</span>
            </div>

            <div className="events-floating-card events-floating-card-two">
              <MapPin size={17} />
              <span>Engagement</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="events-intro-section">
        <div className="events-intro-container" ref={introRef}>
          <div className="events-section-label">
            <span>01</span>
            <div />
            <span>EVENT CALENDAR</span>
          </div>

          <div className="events-intro-content">
            <div>
              <h2>
                Where ideas meet
                <span> opportunity.</span>
              </h2>
            </div>

            <div>
              <p>
                Explore Vishwasai&apos;s journey through industry events, cooperative-sector
                initiatives, professional gatherings and knowledge-sharing platforms.
              </p>

              <p>
                Every event represents an opportunity to connect with changemakers, exchange ideas
                and build meaningful relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EVENTS
      ========================================================= */}

      <section className="events-list-section">
        <div className="events-list-container">
          {/* HEADER */}

          <div className="events-list-header">
            <div>
              <span className="events-small-label">OUR ACTIVITIES</span>

              <h2>Upcoming &amp; Featured Events</h2>
            </div>

            <div className="events-header-count">
              <strong>{events?.length ?? 0}</strong>

              <span>
                Events
                <br />
                Available
              </span>
            </div>
          </div>

          {/* FILTER */}

          <div className="events-controls">
            <div className="events-categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category ? 'events-category active' : 'events-category'
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="events-search">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </div>

          {/* GRID */}

          {events === null ? (
            <div className="events-state">
              <div className="events-loader" />
              <p>Loading events...</p>
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="events-state events-empty-state">
              <CalendarDays size={42} />
              <h3>No events found</h3>
              <p>Try changing your search or category.</p>
            </div>
          ) : (
            <div className="events-modern-grid">
              {filteredEvents.map((item, index) => {
                const title = getEventTitle(item);

                const slug =
                  item.slug ||
                  item.id ||
                  title
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^a-z0-9-]/g, '');

                const imageSrc = getEventImage(item);
                const category = getEventCategory(item);
                const date = getEventDate(item);
                const location = getEventLocation(item);

                return (
                  <EventCard
                    key={item.id || slug}
                    item={item}
                    title={title}
                    slug={String(slug)}
                    imageSrc={imageSrc}
                    category={category}
                    date={date}
                    location={location}
                    index={index}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}

      <section className="events-bottom-cta">
        <div className="events-bottom-cta-inner">
          <div>
            <span>STAY CONNECTED</span>

            <h2>
              Be part of the
              <br />
              next conversation.
            </h2>
          </div>

          <Link href="/contact" className="events-cta-button">
            <span>Connect With Us</span>

            <div>
              <ArrowUpRight size={19} />
            </div>
          </Link>
        </div>
      </section>

      {/* =========================================================
          CSS
      ========================================================= */}

      <style jsx global>{`
        /* =====================================================
           VARIABLES
        ===================================================== */

        :root {
          --events-primary: #211d3b;
          --events-primary-light: #342d59;
          --events-accent: #6da8ff;
          --events-accent-light: #a9cfff;
          --events-text: #211d3b;
          --events-muted: #6c6a78;
          --events-white: #ffffff;
          --events-border: rgba(33, 29, 59, 0.12);
          --events-shadow: 0 20px 60px rgba(33, 29, 59, 0.1);
        }

        /* =====================================================
           HERO
        ===================================================== */

        .events-modern-hero {
          position: relative;
          min-height: 610px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          padding: 100px 8%;
          background:
            radial-gradient(circle at 78% 42%, rgba(109, 168, 255, 0.16), transparent 28%),
            linear-gradient(135deg, #211d3b 0%, #282343 52%, #17152d 100%);
          color: #fff;
        }

        .events-hero-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.1;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.35) 1px, transparent 1px);
          background-size: 55px 55px;
          mask-image: linear-gradient(to right, black, transparent 85%);
          pointer-events: none;
        }

        .events-modern-hero::before {
          content: '';
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.08);
          right: 13%;
          top: 14%;
          animation: eventsRotate 25s linear infinite;
        }

        .events-modern-hero::after {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.05);
          right: 4%;
          top: -5%;
          animation: eventsRotateReverse 35s linear infinite;
        }

        .events-hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          pointer-events: none;
        }

        .events-glow-one {
          width: 170px;
          height: 170px;
          background: rgba(109, 168, 255, 0.15);
          top: 18%;
          right: 38%;
        }

        .events-glow-two {
          width: 110px;
          height: 110px;
          background: rgba(169, 207, 255, 0.12);
          bottom: 15%;
          left: 25%;
        }

        .events-modern-hero-content {
          position: relative;
          z-index: 3;
          max-width: 720px;
        }

        .events-eyebrow {
          display: flex;
          align-items: center;
          gap: 13px;
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 700;
          margin-bottom: 25px;
          color: #a9cfff;
        }

        .events-eyebrow-line {
          width: 42px;
          height: 1px;
          background: #a9cfff;
        }

        .events-modern-hero h1 {
          margin: 0;
          font-size: clamp(55px, 7vw, 100px);
          line-height: 0.92;
          letter-spacing: -4px;
          font-weight: 700;
        }

        .events-modern-hero h1 span {
          color: #a9cfff;
        }

        .events-hero-description {
          margin: 32px 0 10px;
          font-size: clamp(18px, 2vw, 25px);
          line-height: 1.45;
          font-weight: 500;
          max-width: 650px;
        }

        .events-hero-subtext {
          margin: 0;
          max-width: 630px;
          font-size: 15px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.68);
        }

        .events-breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 38px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.58);
        }

        .events-breadcrumb-home {
          color: #fff;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .events-breadcrumb-home:hover {
          color: #a9cfff;
        }

        /* =====================================================
           HERO ORBIT
        ===================================================== */

        .events-hero-side {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .events-hero-orbit {
          position: relative;
          width: 410px;
          height: 410px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .events-orbit-ring {
          position: absolute;
          border: 1px solid rgba(169, 207, 255, 0.2);
          border-radius: 50%;
        }

        .events-orbit-ring-one {
          width: 310px;
          height: 310px;
          animation: eventsRotate 18s linear infinite;
        }

        .events-orbit-ring-two {
          width: 410px;
          height: 410px;
          border-style: dashed;
          animation: eventsRotateReverse 28s linear infinite;
        }

        .events-orbit-center {
          width: 175px;
          height: 175px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(15px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 20px 70px rgba(0, 0, 0, 0.22);
        }

        .events-orbit-center svg {
          color: #a9cfff;
          margin-bottom: 10px;
        }

        .events-orbit-center span {
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 700;
        }

        .events-orbit-center small {
          margin-top: 9px;
          line-height: 1.4;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.55);
        }

        .events-floating-card {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(14px);
          border-radius: 10px;
          font-size: 12px;
          font-weight: 600;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.18);
        }

        .events-floating-card svg {
          color: #a9cfff;
        }

        .events-floating-card-one {
          top: 45px;
          right: 20px;
          animation: eventsFloat 4s ease-in-out infinite;
        }

        .events-floating-card-two {
          bottom: 45px;
          left: 10px;
          animation: eventsFloat 4s ease-in-out infinite reverse;
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .events-intro-section {
          background: #fff;
          padding: 110px 8% 80px;
        }

        .events-intro-container {
          max-width: 1250px;
          margin: auto;
        }

        .events-section-label {
          display: flex;
          align-items: center;
          gap: 15px;
          color: #777;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 55px;
        }

        .events-section-label div {
          width: 60px;
          height: 1px;
          background: #d5d5d5;
        }

        .events-intro-content {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 90px;
        }

        .events-intro-content h2 {
          margin: 0;
          font-size: clamp(42px, 5vw, 68px);
          line-height: 1.05;
          letter-spacing: -3px;
          color: #211d3b;
        }

        .events-intro-content h2 span {
          color: #6da8ff;
        }

        .events-intro-content p {
          margin: 0 0 20px;
          font-size: 16px;
          line-height: 1.9;
          color: #6c6a78;
        }

        /* =====================================================
           EVENT LIST
        ===================================================== */

        .events-list-section {
          padding: 90px 8% 120px;
          background: linear-gradient(180deg, #f7f7f9 0%, #fff 100%);
        }

        .events-list-container {
          max-width: 1250px;
          margin: auto;
        }

        .events-list-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 45px;
        }

        .events-small-label {
          color: #6da8ff;
          font-size: 11px;
          letter-spacing: 2.5px;
          font-weight: 800;
        }

        .events-list-header h2 {
          margin: 12px 0 0;
          color: #211d3b;
          font-size: clamp(34px, 4vw, 52px);
          line-height: 1.1;
          letter-spacing: -2px;
        }

        .events-header-count {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 15px 20px;
          border: 1px solid rgba(33, 29, 59, 0.1);
          border-radius: 12px;
          background: #fff;
        }

        .events-header-count strong {
          font-size: 36px;
          color: #211d3b;
        }

        .events-header-count span {
          color: #777;
          font-size: 11px;
          line-height: 1.35;
        }

        /* =====================================================
           FILTER
        ===================================================== */

        .events-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 35px;
          padding-bottom: 25px;
          border-bottom: 1px solid rgba(33, 29, 59, 0.09);
        }

        .events-categories {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .events-category {
          border: 1px solid rgba(33, 29, 59, 0.13);
          background: #fff;
          color: #555;
          padding: 9px 15px;
          border-radius: 50px;
          font-size: 12px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .events-category:hover,
        .events-category.active {
          background: #211d3b;
          border-color: #211d3b;
          color: #fff;
          transform: translateY(-2px);
        }

        .events-search input {
          width: 230px;
          height: 42px;
          border-radius: 50px;
          border: 1px solid rgba(33, 29, 59, 0.13);
          padding: 0 18px;
          outline: none;
          background: #fff;
          color: #211d3b;
          transition: 0.3s ease;
        }

        .events-search input:focus {
          border-color: #6da8ff;
          box-shadow: 0 0 0 4px rgba(109, 168, 255, 0.1);
        }

        /* =====================================================
           GRID
        ===================================================== */

        .events-modern-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .events-modern-card {
          position: relative;
          min-width: 0;
        }

        .events-card-link {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .events-card {
          position: relative;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(33, 29, 59, 0.09);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(33, 29, 59, 0.06);
          transition:
            transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 0.45s ease;
        }

        .events-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 25px 55px rgba(33, 29, 59, 0.14);
        }

        .events-card-image {
          position: relative;
          height: 230px;
          overflow: hidden;
          background: #eee;
        }

        .events-card-image img {
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .events-card:hover .events-card-image img {
          transform: scale(1.07);
        }

        .events-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 45%, rgba(20, 18, 35, 0.7) 100%);
        }

        .events-card-category {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 2;
          padding: 7px 11px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.92);
          color: #211d3b;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .events-card-arrow {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 2;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.9);
          color: #211d3b;
          transition: 0.35s ease;
        }

        .events-card:hover .events-card-arrow {
          transform: rotate(45deg);
          background: #211d3b;
          color: #fff;
        }

        .events-card-body {
          padding: 23px;
        }

        .events-card-title {
          margin: 0 0 17px;
          color: #211d3b;
          font-size: 21px;
          line-height: 1.25;
          font-weight: 700;
          transition: color 0.3s ease;
        }

        .events-card:hover .events-card-title {
          color: #587fcb;
        }

        .events-card-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          color: #777;
          font-size: 11px;
        }

        .events-card-meta span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .events-card-meta svg {
          color: #6da8ff;
        }

        /* =====================================================
           STATES
        ===================================================== */

        .events-state {
          min-height: 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 1px dashed rgba(33, 29, 59, 0.15);
          border-radius: 16px;
          background: #fff;
          color: #777;
        }

        .events-state h3 {
          margin: 15px 0 5px;
          color: #211d3b;
        }

        .events-state p {
          margin: 0;
        }

        .events-loader {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 3px solid rgba(33, 29, 59, 0.12);
          border-top-color: #6da8ff;
          animation: eventsSpin 0.8s linear infinite;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .events-bottom-cta {
          padding: 95px 8%;
          background: #211d3b;
          color: #fff;
        }

        .events-bottom-cta-inner {
          max-width: 1250px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .events-bottom-cta span {
          font-size: 11px;
          letter-spacing: 2.5px;
          color: #a9cfff;
          font-weight: 700;
        }

        .events-bottom-cta h2 {
          margin: 13px 0 0;
          font-size: clamp(40px, 5vw, 65px);
          line-height: 1;
          letter-spacing: -3px;
        }

        .events-cta-button {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 8px 8px 8px 22px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 50px;
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: 0.35s ease;
        }

        .events-cta-button div {
          width: 43px;
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fff;
          color: #211d3b;
          transition: 0.35s ease;
        }

        .events-cta-button:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-3px);
        }

        .events-cta-button:hover div {
          transform: rotate(45deg);
          background: #a9cfff;
        }

        /* =====================================================
           ANIMATIONS
        ===================================================== */

        @keyframes eventsFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes eventsRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes eventsRotateReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes eventsSpin {
          to {
            transform: rotate(360deg);
          }
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1000px) {
          .events-modern-hero {
            grid-template-columns: 1fr;
            padding: 90px 7%;
          }

          .events-hero-side {
            display: none;
          }

          .events-intro-content {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .events-modern-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .events-modern-hero {
            min-height: auto;
            padding: 80px 22px;
          }

          .events-modern-hero h1 {
            font-size: 58px;
            letter-spacing: -3px;
          }

          .events-hero-description {
            font-size: 18px;
          }

          .events-intro-section {
            padding: 75px 22px 55px;
          }

          .events-intro-content h2 {
            font-size: 42px;
          }

          .events-list-section {
            padding: 70px 22px 85px;
          }

          .events-list-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .events-controls {
            align-items: stretch;
            flex-direction: column;
          }

          .events-search input {
            width: 100%;
          }

          .events-modern-grid {
            grid-template-columns: 1fr;
          }

          .events-bottom-cta {
            padding: 75px 22px;
          }

          .events-bottom-cta-inner {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}

/* =========================================================
   EVENT CARD
========================================================= */

function EventCard({
  index,
  title,
  slug,
  imageSrc,
  category,
  date,
  location,
}: {
  item: WebsiteEvent;
  index: number;
  title: string;
  slug: string;
  imageSrc: string;
  category: string;
  date: string;
  location: string;
}) {
  const cardRef = useScrollAnimation<HTMLDivElement>({
    animationClass:
      index % 3 === 0
        ? 'animate-fade-in-left'
        : index % 3 === 1
          ? 'animate-fade-in'
          : 'animate-fade-in-right',
    initialTransform:
      index % 3 === 0
        ? 'translateX(-35px)'
        : index % 3 === 1
          ? 'translateY(35px)'
          : 'translateX(35px)',
    threshold: 0.1,
    once: false,
  });

  return (
    <div
      ref={cardRef}
      className="events-modern-card"
      style={{
        transitionDelay: `${index * 70}ms`,
      }}
    >
      <Link href={`/events/${slug}`} className="events-card-link" aria-label={`View ${title}`}>
        <article className="events-card">
          <div className="events-card-image">
            <FallbackImage
              src={imageSrc}
              alt={title}
              fill
              className="project-image"
              fallbackSrc="/assets/blogs/p1.jpg"
              unoptimized={imageSrc.startsWith('http')}
            />

            <div className="events-card-overlay" />

            <span className="events-card-category">{category}</span>

            <div className="events-card-arrow">
              <ArrowUpRight size={17} />
            </div>
          </div>

          <div className="events-card-body">
            <h3 className="events-card-title">{title}</h3>

            <div className="events-card-meta">
              {date && (
                <span>
                  <CalendarDays size={13} />
                  {date}
                </span>
              )}

              {location && (
                <span>
                  <MapPin size={13} />
                  {location}
                </span>
              )}
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}
