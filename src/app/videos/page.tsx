// // // 'use client';

// // // import Link from 'next/link';
// // // import { useEffect, useState } from 'react';
// // // import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// // // interface VideoItem {
// // //   id: number;
// // //   slug: string;
// // //   title: string;
// // //   category: string;
// // //   author: string;
// // //   date: string;
// // //   image: string;
// // //   videoUrl?: string;
// // // }

// // // export default function VideosPage() {
// // //   const [videos, setVideos] = useState<VideoItem[]>([]);
// // //   const [activeVideo, setActiveVideo] = useState<number | null>(null);

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

// // //   useEffect(() => {
// // //     fetch('/api/videos')
// // //       .then((res) => res.json())
// // //       .then((data) => setVideos(data))
// // //       .catch(() => setVideos([]));
// // //   }, []);

// // //   return (
// // //     <>
// // //       {/* HERO */}
// // //       <section className="blog-hero">
// // //         <div className="blog-hero-media" ref={heroMediaRef}>
// // //           <img
// // //             src="/assets/blogs/blog-1.webp"
// // //             alt="Read Videos"
// // //             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
// // //           />
// // //         </div>

// // //         <div className="blog-hero-overlay"></div>

// // //         <div className="blog-hero-content" ref={heroContentRef}>
// // //           <h1>Play Videos</h1>

// // //           <div className="blog-breadcrumb">
// // //             <Link href="/" className="blog-breadcrumb-home">
// // //               🏦 Home
// // //             </Link>
// // //             <span>&gt;</span>
// // //             <p>Videos</p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* VIDEO GRID */}
// // //       <section className="videopage-section" style={{ margin: '40px 24px 0' }}>
// // //         <div className="videopage-container">
// // //           <div className="videopage-grid">

// // //             {videos.slice(0, 6).map((v) => (
// // //               <article key={v.id} className="videopage-card">
// // //                 <div className="videopage-video-wrap">

// // //                   {/* IFRAME ALWAYS LOADED (NO BLACK SCREEN) */}
// // //                   <iframe
// // //                     src={`${v.videoUrl}?rel=0&enablejsapi=1`}
// // //                     title={v.title}
// // //                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// // //                     allowFullScreen
// // //                     style={{
// // //                       position: 'absolute',
// // //                       inset: 0,
// // //                       width: '100%',
// // //                       height: '100%',
// // //                       border: 0,
// // //                       pointerEvents: activeVideo === v.id ? 'auto' : 'none',
// // //                     }}
// // //                   />

// // //                   {/* TRANSPARENT PAUSE OVERLAY */}
// // //                   {activeVideo !== v.id && (
// // //                     <div
// // //                       onClick={() => setActiveVideo(v.id)}
// // //                       style={{
// // //                         position: 'absolute',
// // //                         inset: 0,
// // //                         background: 'rgba(0,0,0,0.35)',
// // //                         display: 'flex',
// // //                         alignItems: 'center',
// // //                         justifyContent: 'center',
// // //                         cursor: 'pointer',
// // //                         zIndex: 2,
// // //                       }}
// // //                     >
// // //                       <div
// // //                         style={{
// // //                           width: '72px',
// // //                           height: '72px',
// // //                           borderRadius: '50%',
// // //                           background: 'rgba(180,0,0,0.85)',
// // //                           display: 'flex',
// // //                           alignItems: 'center',
// // //                           justifyContent: 'center',
// // //                           color: '#fff',
// // //                           fontSize: '18px',
// // //                           fontWeight: 700,
// // //                         }}
// // //                       >
// // //                         ▶
// // //                       </div>
// // //                     </div>
// // //                   )}

// // //                 </div>
// // //               </article>
// // //             ))}

// // //           </div>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // }

// // 'use client';

// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { useEffect, useState } from 'react';
// // import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// // interface VideoItem {
// //   id: number;
// //   slug: string;
// //   title: string;
// //   category: string;
// //   author: string;
// //   date: string;
// //   image: string;
// //   videoUrl?: string;
// // }

// // export default function VideosPage() {
// //   const [videos, setVideos] = useState<VideoItem[]>([]);
// //   const [activeVideo, setActiveVideo] = useState<number | null>(null);

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

// //   useEffect(() => {
// //     // Replace API fetch with fixed list of provided YouTube videos
// //     const list: VideoItem[] = [
// //       {
// //         id: 1,
// //         slug: 'v1',
// //         title: 'Video 1',
// //         category: '',
// //         author: '',
// //         date: '',
// //         image: '',
// //         // videoUrl: 'https://www.youtube.com/embed/KEpYlaux9rc',
// //         videoUrl: 'https://www.youtube.com/embed/JBdGQoGFJqU',
// //       },
// //       {
// //         id: 2,
// //         slug: 'v2',
// //         title: 'Video 2',
// //         category: '',
// //         author: '',
// //         date: '',
// //         image: '',
// //         videoUrl: 'https://www.youtube.com/embed/xiJs0XmPJyE',
// //       },
// //       {
// //         id: 3,
// //         slug: 'v3',
// //         title: 'Video 3',
// //         category: '',
// //         author: '',
// //         date: '',
// //         image: '',
// //         // videoUrl: 'https://www.youtube.com/embed/JBdGQoGFJqU',
// //         videoUrl: 'https://www.youtube.com/embed/KEpYlaux9rc',
// //       },
// //       {
// //         id: 4,
// //         slug: 'v4',
// //         title: 'Video 4',
// //         category: '',
// //         author: '',
// //         date: '',
// //         image: '',
// //         videoUrl: 'https://www.youtube.com/embed/jiJYiesC42s',
// //       },
// //       {
// //         id: 5,
// //         slug: 'v5',
// //         title: 'Video 5',
// //         category: '',
// //         author: '',
// //         date: '',
// //         image: '',
// //         videoUrl: 'https://www.youtube.com/embed/H_2UBj6k5oE',
// //       },
// //       {
// //         id: 6,
// //         slug: 'v6',
// //         title: 'Video 6',
// //         category: '',
// //         author: '',
// //         date: '',
// //         image: '',
// //         videoUrl: 'https://www.youtube.com/embed/vq01USo0Rno',
// //       },
// //       {
// //         id: 7,
// //         slug: 'v7',
// //         title: 'Video 7',
// //         category: '',
// //         author: '',
// //         date: '',
// //         image: '',
// //         videoUrl: 'https://www.youtube.com/embed/czlsVK63gkk',
// //       },
// //     ];

// //     setVideos(list);
// //   }, []);

// //   return (
// //     <>
// //       {/* HERO */}
// //       <section className="blog-hero page-hero-left">
// //         <div className="blog-hero-media" ref={heroMediaRef}>
// //           <Image
// //             src="/assets/blogs/vishwasai.png"
// //             alt="Read Videos"
// //             fill
// //             className="blog-hero-image"
// //             style={{
// //               objectFit: 'cover',
// //             }}
// //           />
// //         </div>

// //         <div className="blog-hero-overlay"></div>

// //         <div className="blog-hero-content" ref={heroContentRef}>
// //           <h1>Video Library</h1>

// //           <div className="blog-breadcrumb">
// //             <Link href="/" className="blog-breadcrumb-home">
// //               <Image
// //                 src="/assets/home/home.png" // Replace with your image path
// //                 alt="Home"
// //                 width={38}
// //                 height={48}
// //                 className="blog-home-icon"
// //               />
// //               <span>Home</span>
// //             </Link>

// //             <span>&gt;</span>

// //             <p>Videos</p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* VIDEO GRID */}
// //       <section className="videopage-section" style={{ margin: '40px 24px 0' }}>
// //         <div className="videopage-container">
// //           <div className="videopage-grid">
// //             {videos.map((v) => (
// //               <article key={v.id} className="videopage-card">
// //                 <div className="videopage-video-wrap">
// //                   {/* VIDEO */}
// //                   <iframe
// //                     src={
// //                       activeVideo === v.id
// //                         ? `${v.videoUrl}?autoplay=1&rel=0`
// //                         : `${v.videoUrl}?rel=0`
// //                     }
// //                     title={v.title}
// //                     loading="lazy"
// //                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //                     allowFullScreen
// //                     style={{
// //                       position: 'absolute',
// //                       inset: 0,
// //                       width: '100%',
// //                       height: '100%',
// //                       border: 0,
// //                     }}
// //                   />

// //                   {/* OVERLAY */}
// //                   {activeVideo !== v.id && (
// //                     <div
// //                       onClick={() => setActiveVideo(v.id)}
// //                       style={{
// //                         position: 'absolute',
// //                         inset: 0,
// //                         background: 'rgba(0,0,0,0.35)',
// //                         display: 'flex',
// //                         alignItems: 'center',
// //                         justifyContent: 'center',
// //                         cursor: 'pointer',
// //                         zIndex: 2,
// //                         transition: '0.3s ease',
// //                       }}
// //                     >
// //                       <div
// //                         style={{
// //                           width: '72px',
// //                           height: '72px',
// //                           borderRadius: '50%',
// //                           background: 'rgba(180,0,0,0.85)',
// //                           display: 'flex',
// //                           alignItems: 'center',
// //                           justifyContent: 'center',
// //                           color: '#fff',
// //                           fontSize: '24px',
// //                           fontWeight: 700,
// //                           boxShadow: '0 8px 30px rgba(164,0,0,0.25)',
// //                         }}
// //                       >
// //                         ▶
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>
// //               </article>
// //             ))}
// //           </div>
// //         </div>
// //         <br />
// //       </section>
// //     </>
// //   );
// // }

// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import {
//   ArrowUpRight,
//   Play,
//   X,
//   Video,
//   Sparkles,
//   ChevronDown,
// } from 'lucide-react';
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// interface VideoItem {
//   id: number;
//   slug: string;
//   title: string;
//   category: string;
//   author: string;
//   date: string;
//   image: string;
//   videoUrl?: string;
// }

// const VIDEOS: VideoItem[] = [
//   {
//     id: 1,
//     slug: 'v1',
//     title: 'Vishwasai Insights',
//     category: 'Industry Insights',
//     author: 'Vishwasai',
//     date: '',
//     image: '',
//     videoUrl: 'https://www.youtube.com/embed/JBdGQoGFJqU',
//   },
//   {
//     id: 2,
//     slug: 'v2',
//     title: 'Ideas That Create Impact',
//     category: 'Presentation',
//     author: 'Vishwasai',
//     date: '',
//     image: '',
//     videoUrl: 'https://www.youtube.com/embed/xiJs0XmPJyE',
//   },
//   {
//     id: 3,
//     slug: 'v3',
//     title: 'Cooperative Finance Insights',
//     category: 'Finance',
//     author: 'Vishwasai',
//     date: '',
//     image: '',
//     videoUrl: 'https://www.youtube.com/embed/KEpYlaux9rc',
//   },
//   {
//     id: 4,
//     slug: 'v4',
//     title: 'Building Better Cooperatives',
//     category: 'Interview',
//     author: 'Vishwasai',
//     date: '',
//     image: '',
//     videoUrl: 'https://www.youtube.com/embed/jiJYiesC42s',
//   },
//   {
//     id: 5,
//     slug: 'v5',
//     title: 'Leadership & Transformation',
//     category: 'Leadership',
//     author: 'Vishwasai',
//     date: '',
//     image: '',
//     videoUrl: 'https://www.youtube.com/embed/H_2UBj6k5oE',
//   },
//   {
//     id: 6,
//     slug: 'v6',
//     title: 'Future of Cooperative Business',
//     category: 'Business',
//     author: 'Vishwasai',
//     date: '',
//     image: '',
//     videoUrl: 'https://www.youtube.com/embed/vq01USo0Rno',
//   },
//   {
//     id: 7,
//     slug: 'v7',
//     title: 'Knowledge & Collaboration',
//     category: 'Industry Insights',
//     author: 'Vishwasai',
//     date: '',
//     image: '',
//     videoUrl: 'https://www.youtube.com/embed/czlsVK63gkk',
//   },
// ];

// const VIDEO_CATEGORIES = [
//   'All',
//   'Industry Insights',
//   'Interview',
//   'Presentation',
//   'Finance',
//   'Leadership',
//   'Business',
// ];

// function getYoutubeThumbnail(url?: string) {
//   if (!url) return '/assets/blogs/p1.jpg';

//   const match = url.match(
//     /(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([^?&/]+)/,
//   );

//   if (!match?.[1]) return '/assets/blogs/p1.jpg';

//   return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`;
// }

// function VideoCard({
//   video,
//   index,
//   onPlay,
// }: {
//   video: VideoItem;
//   index: number;
//   onPlay: (video: VideoItem) => void;
// }) {
//   const animationClass =
//     index % 3 === 0
//       ? 'animate-fade-in-left'
//       : index % 3 === 1
//         ? 'animate-fade-in'
//         : 'animate-fade-in-right';

//   const initialTransform =
//     index % 3 === 0
//       ? 'translateX(-40px)'
//       : index % 3 === 1
//         ? 'translateY(40px)'
//         : 'translateX(40px)';

//   const ref = useScrollAnimation<HTMLDivElement>({
//     animationClass,
//     initialTransform,
//     threshold: 0.12,
//     once: false,
//   });

//   return (
//     <article
//       ref={ref}
//       className="vishwasai-video-card"
//       style={{
//         transitionDelay: `${index * 70}ms`,
//       }}
//     >
//       <div className="vishwasai-video-thumbnail">
//         <Image
//           src={getYoutubeThumbnail(video.videoUrl)}
//           alt={video.title}
//           fill
//           unoptimized
//           className="vishwasai-video-image"
//           onError={(event) => {
//             const img = event.currentTarget as HTMLImageElement;

//             if (!img.src.includes('/assets/blogs/p1.jpg')) {
//               img.src = '/assets/blogs/p1.jpg';
//             }
//           }}
//         />

//         <div className="vishwasai-video-gradient" />

//         <button
//           type="button"
//           className="vishwasai-play-button"
//           onClick={() => onPlay(video)}
//           aria-label={`Play ${video.title}`}
//         >
//           <span>
//             <Play size={22} fill="currentColor" />
//           </span>
//         </button>

//         <div className="vishwasai-video-number">
//           {String(index + 1).padStart(2, '0')}
//         </div>

//         <div className="vishwasai-video-category">
//           {video.category}
//         </div>
//       </div>

//       <div className="vishwasai-video-content">
//         <div className="vishwasai-video-small-label">
//           <Video size={14} />
//           <span>Vishwasai Video</span>
//         </div>

//         <h3>{video.title}</h3>

//         <div className="vishwasai-video-bottom">
//           <span>Explore video</span>

//           <button
//             type="button"
//             onClick={() => onPlay(video)}
//             aria-label={`Open ${video.title}`}
//             className="vishwasai-video-arrow"
//           >
//             <ArrowUpRight size={17} />
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function VideosPage() {
//   const [videos, setVideos] = useState<VideoItem[]>([]);
//   const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [showCategories, setShowCategories] = useState(false);

//   const heroMediaRef = useScrollAnimation<HTMLDivElement>({
//     animationClass: 'animate-fade-in-right',
//     initialTransform: 'translateX(50px)',
//     threshold: 0.12,
//     once: false,
//   });

//   const heroContentRef = useScrollAnimation<HTMLDivElement>({
//     animationClass: 'animate-fade-in-left',
//     initialTransform: 'translateX(-50px)',
//     threshold: 0.12,
//     once: false,
//   });

//   const introRef = useScrollAnimation<HTMLDivElement>({
//     animationClass: 'animate-fade-in',
//     initialTransform: 'translateY(35px)',
//     threshold: 0.12,
//     once: false,
//   });

//   useEffect(() => {
//     setVideos(VIDEOS);
//   }, []);

//   useEffect(() => {
//     if (!activeVideo) return;

//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         setActiveVideo(null);
//       }
//     };

//     document.addEventListener('keydown', handleEscape);
//     document.body.style.overflow = 'hidden';

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = '';
//     };
//   }, [activeVideo]);

//   const filteredVideos =
//     activeCategory === 'All'
//       ? videos
//       : videos.filter((video) => video.category === activeCategory);

//   return (
//     <>
//       {/* =========================================================
//           HERO
//       ========================================================= */}

//       <section className="vishwasai-video-hero">
//         <div
//           className="vishwasai-video-hero-media"
//           ref={heroMediaRef}
//         >
//           <Image
//             src="/assets/blogs/vishwasai.png"
//             alt="Vishwasai Videos"
//             fill
//             priority
//             className="vishwasai-video-hero-image"
//           />
//         </div>

//         <div className="vishwasai-video-hero-overlay" />

//         <div
//           className="vishwasai-video-hero-content"
//           ref={heroContentRef}
//         >
//           <div className="vishwasai-hero-eyebrow">
//             <span />
//             VISHWASAI MEDIA
//           </div>

//           <h1>Videos</h1>

//           <p>
//             Explore Vishwasai through interviews, presentations,
//             events and industry insights.
//           </p>

//           <div className="vishwasai-video-breadcrumb">
//             <Link href="/" className="vishwasai-video-home">
//               <Image
//                 src="/assets/home/home.png"
//                 alt="Home"
//                 width={30}
//                 height={30}
//               />
//               <span>Home</span>
//             </Link>

//             <span className="breadcrumb-divider">/</span>

//             <span>Videos</span>
//           </div>
//         </div>

//         <div className="vishwasai-hero-scroll">
//           <span>SCROLL TO EXPLORE</span>
//           <ChevronDown size={18} />
//         </div>
//       </section>

//       {/* =========================================================
//           INTRO
//       ========================================================= */}

//       <section className="vishwasai-video-intro">
//         <div
//           ref={introRef}
//           className="vishwasai-video-intro-inner"
//         >
//           <div className="vishwasai-intro-left">
//             <span className="section-mini-label">
//               <Sparkles size={15} />
//               INSIGHTS & KNOWLEDGE
//             </span>

//             <h2>
//               Watch ideas.
//               <br />
//               <span>Discover impact.</span>
//             </h2>
//           </div>

//           <div className="vishwasai-intro-right">
//             <p>
//               Discover conversations, presentations, events and
//               industry perspectives that bring the Vishwasai
//               ecosystem to life.
//             </p>

//             <div className="vishwasai-intro-line">
//               <span />
//               <small>07+ VIDEOS</small>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           VIDEO SECTION
//       ========================================================= */}

//       <section className="vishwasai-video-section">
//         <div className="vishwasai-video-container">

//           <div className="vishwasai-video-heading-row">
//             <div>
//               <span className="section-mini-label">
//                 <Video size={15} />
//                 VIDEO LIBRARY
//               </span>

//               <h2>
//                 Explore our
//                 <span> latest stories.</span>
//               </h2>
//             </div>

//             <div className="vishwasai-video-count">
//               <strong>{String(filteredVideos.length).padStart(2, '0')}</strong>
//               <span>VIDEOS</span>
//             </div>
//           </div>

//           {/* CATEGORY FILTER */}

//           <div className="vishwasai-filter-mobile">
//             <button
//               type="button"
//               onClick={() => setShowCategories((value) => !value)}
//             >
//               {activeCategory}
//               <ChevronDown
//                 size={17}
//                 className={showCategories ? 'rotate-icon' : ''}
//               />
//             </button>

//             {showCategories && (
//               <div className="mobile-category-menu">
//                 {VIDEO_CATEGORIES.map((category) => (
//                   <button
//                     key={category}
//                     type="button"
//                     onClick={() => {
//                       setActiveCategory(category);
//                       setShowCategories(false);
//                     }}
//                     className={
//                       activeCategory === category
//                         ? 'active-category'
//                         : ''
//                     }
//                   >
//                     {category}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* <div className="vishwasai-video-filters">
//             {VIDEO_CATEGORIES.map((category) => (
//               <button
//                 key={category}
//                 type="button"
//                 className={
//                   activeCategory === category
//                     ? 'active'
//                     : ''
//                 }
//                 onClick={() => setActiveCategory(category)}
//               >
//                 {category}
//               </button>
//             ))}
//           </div> */}

//           <div className="vishwasai-video-grid">
//             {filteredVideos.map((video, index) => (
//               <VideoCard
//                 key={video.id}
//                 video={video}
//                 index={index}
//                 onPlay={setActiveVideo}
//               />
//             ))}
//           </div>

//           {filteredVideos.length === 0 && (
//             <div className="vishwasai-video-empty">
//               <Video size={30} />
//               <h3>No videos found</h3>
//               <p>Try another category.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* =========================================================
//           CTA
//       ========================================================= */}

//       <section className="vishwasai-video-cta">
//         <div className="vishwasai-video-cta-pattern" />

//         <div className="vishwasai-video-cta-content">
//           <span className="section-mini-label">
//             KEEP EXPLORING
//           </span>

//           <h2>
//             More ideas.
//             <br />
//             <span>More possibilities.</span>
//           </h2>

//           <p>
//             Explore our blogs and discover more perspectives,
//             knowledge and insights from Vishwasai.
//           </p>

//           <Link href="/blog" className="vishwasai-cta-button">
//             <span>Explore Blogs</span>
//             <span className="cta-icon">
//               <ArrowUpRight size={18} />
//             </span>
//           </Link>
//         </div>
//       </section>

//       {/* =========================================================
//           VIDEO MODAL
//       ========================================================= */}

//       {activeVideo && (
//         <div
//           className="vishwasai-video-modal"
//           onClick={() => setActiveVideo(null)}
//         >
//           <div
//             className="vishwasai-video-modal-inner"
//             onClick={(event) => event.stopPropagation()}
//           >
//             <button
//               type="button"
//               className="vishwasai-video-modal-close"
//               onClick={() => setActiveVideo(null)}
//               aria-label="Close video"
//             >
//               <X size={22} />
//             </button>

//             <div className="vishwasai-video-player">
//               <iframe
//                 src={`${activeVideo.videoUrl}?autoplay=1&rel=0`}
//                 title={activeVideo.title}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//               />
//             </div>

//             <div className="vishwasai-modal-info">
//               <span>{activeVideo.category}</span>
//               <h3>{activeVideo.title}</h3>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* =========================================================
//           PAGE CSS
//       ========================================================= */}

//       <style jsx global>{`

//         /* =====================================================
//            BASE
//         ===================================================== */

//         .vishwasai-video-hero,
//         .vishwasai-video-section,
//         .vishwasai-video-intro,
//         .vishwasai-video-cta {
//           font-family: inherit;
//         }

//         /* =====================================================
//            HERO
//         ===================================================== */

//         .vishwasai-video-hero {
//           position: relative;
//           min-height: 560px;
//           overflow: hidden;
//           background: #ffffff;
//           display: flex;
//           align-items: center;
//         }

//         .vishwasai-video-hero-media {
//           position: absolute;
//           inset: 0;
//           overflow: hidden;
//         }

//         .vishwasai-video-hero-image {
//           object-fit: cover;
//           transform: scale(1.02);
//           transition: transform 1.2s ease;
//         }

//         .vishwasai-video-hero:hover
//           .vishwasai-video-hero-image {
//           transform: scale(1.06);
//         }

//         .vishwasai-video-hero-overlay {
//           position: absolute;
//           inset: 0;
//           background:
//             linear-gradient(
//               90deg,
//               rgba(18, 20, 50, 0.94) 0%,
//               rgba(24, 28, 65, 0.84) 42%,
//               rgba(25, 29, 64, 0.38) 75%,
//               rgba(255, 255, 255, 0.04) 100%
//             );
//         }

//         .vishwasai-video-hero-content {
//           position: relative;
//           z-index: 2;
//           width: min(1180px, calc(100% - 48px));
//           margin: 0 auto;
//           padding: 90px 0;
//           color: #ffffff;
//         }

//         .vishwasai-hero-eyebrow {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           margin-bottom: 18px;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 2.5px;
//           color: #b9c9ff;
//         }

//         .vishwasai-hero-eyebrow span {
//           width: 34px;
//           height: 1px;
//           background: #b9c9ff;
//         }

//         .vishwasai-video-hero-content h1 {
//           margin: 0;
//           font-size: clamp(52px, 7vw, 92px);
//           line-height: 0.95;
//           font-weight: 700;
//           letter-spacing: -3px;
//         }

//         .vishwasai-video-hero-content p {
//           max-width: 620px;
//           margin: 25px 0 30px;
//           font-size: 17px;
//           line-height: 1.75;
//           color: rgba(255, 255, 255, 0.84);
//         }

//         .vishwasai-video-breadcrumb {
//           display: flex;
//           align-items: center;
//           gap: 13px;
//           font-size: 13px;
//           color: rgba(255, 255, 255, 0.72);
//         }

//         .vishwasai-video-home {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           color: #ffffff;
//           text-decoration: none;
//           transition: opacity 0.25s ease;
//         }

//         .vishwasai-video-home:hover {
//           opacity: 0.72;
//         }

//         .vishwasai-video-home img {
//           object-fit: contain;
//           filter: brightness(0) invert(1);
//         }

//         .breadcrumb-divider {
//           opacity: 0.45;
//         }

//         .vishwasai-hero-scroll {
//           position: absolute;
//           right: 35px;
//           bottom: 28px;
//           z-index: 3;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 8px;
//           color: rgba(255, 255, 255, 0.7);
//           font-size: 9px;
//           letter-spacing: 2px;
//           writing-mode: vertical-rl;
//         }

//         /* =====================================================
//            INTRO
//         ===================================================== */

//         .vishwasai-video-intro {
//           background: #ffffff;
//           padding: 100px 24px 85px;
//         }

//         .vishwasai-video-intro-inner {
//           width: min(1180px, 100%);
//           margin: auto;
//           display: grid;
//           grid-template-columns: 1fr 0.8fr;
//           gap: 80px;
//           align-items: end;
//         }

//         .section-mini-label {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           color: #6874a8;
//           font-size: 10px;
//           font-weight: 800;
//           letter-spacing: 2px;
//         }

//         .vishwasai-intro-left h2 {
//           margin: 18px 0 0;
//           color: #191b3a;
//           font-size: clamp(42px, 5vw, 66px);
//           line-height: 1.02;
//           letter-spacing: -2.5px;
//         }

//         .vishwasai-intro-left h2 span,
//         .vishwasai-video-heading-row h2 span,
//         .vishwasai-video-cta h2 span {
//           color: #6474c7;
//         }

//         .vishwasai-intro-right p {
//           margin: 0;
//           color: #676b7e;
//           font-size: 16px;
//           line-height: 1.8;
//           max-width: 500px;
//         }

//         .vishwasai-intro-line {
//           margin-top: 30px;
//           display: flex;
//           align-items: center;
//           gap: 14px;
//         }

//         .vishwasai-intro-line span {
//           width: 65px;
//           height: 2px;
//           background: #6474c7;
//         }

//         .vishwasai-intro-line small {
//           font-size: 10px;
//           letter-spacing: 2px;
//           color: #85899b;
//         }

//         /* =====================================================
//            VIDEO SECTION
//         ===================================================== */

//         .vishwasai-video-section {
//           background:
//             linear-gradient(
//               180deg,
//               #f7f8fc 0%,
//               #ffffff 100%
//             );
//           padding: 90px 24px 110px;
//           border-top: 1px solid #eef0f6;
//         }

//         .vishwasai-video-container {
//           width: min(1180px, 100%);
//           margin: auto;
//         }

//         .vishwasai-video-heading-row {
//           display: flex;
//           justify-content: space-between;
//           align-items: end;
//           margin-bottom: 40px;
//         }

//         .vishwasai-video-heading-row h2 {
//           margin: 13px 0 0;
//           color: #1b1d3c;
//           font-size: clamp(36px, 4.5vw, 55px);
//           line-height: 1;
//           letter-spacing: -2px;
//         }

//         .vishwasai-video-count {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-end;
//           gap: 3px;
//         }

//         .vishwasai-video-count strong {
//           color: #202344;
//           font-size: 40px;
//           line-height: 1;
//         }

//         .vishwasai-video-count span {
//           color: #9094a4;
//           font-size: 9px;
//           letter-spacing: 2px;
//         }

//         /* FILTERS */

//         .vishwasai-video-filters {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 9px;
//           margin-bottom: 34px;
//         }

//         .vishwasai-video-filters button {
//           border: 1px solid #e2e5ef;
//           background: #ffffff;
//           color: #6f7385;
//           padding: 10px 17px;
//           border-radius: 30px;
//           cursor: pointer;
//           font-size: 12px;
//           font-weight: 600;
//           transition:
//             color 0.25s ease,
//             background 0.25s ease,
//             border-color 0.25s ease,
//             transform 0.25s ease;
//         }

//         .vishwasai-video-filters button:hover {
//           color: #5263bb;
//           border-color: #aeb8e5;
//           transform: translateY(-2px);
//         }

//         .vishwasai-video-filters button.active {
//           color: #ffffff;
//           background: #202344;
//           border-color: #202344;
//           box-shadow: 0 8px 22px rgba(32, 35, 68, 0.14);
//         }

//         .vishwasai-filter-mobile {
//           display: none;
//         }

//         /* GRID */

//         .vishwasai-video-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 25px;
//         }

//         /* CARD */

//         .vishwasai-video-card {
//           overflow: hidden;
//           background: #ffffff;
//           border: 1px solid #e9ebf2;
//           border-radius: 20px;
//           box-shadow: 0 10px 35px rgba(31, 37, 68, 0.055);
//           transition:
//             transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1),
//             box-shadow 0.4s ease,
//             border-color 0.4s ease;
//         }

//         .vishwasai-video-card:hover {
//           transform: translateY(-9px);
//           border-color: #cfd5ec;
//           box-shadow:
//             0 25px 60px rgba(31, 37, 68, 0.13);
//         }

//         .vishwasai-video-thumbnail {
//           position: relative;
//           aspect-ratio: 16 / 9;
//           overflow: hidden;
//           background: #e9ebf2;
//         }

//         .vishwasai-video-image {
//           object-fit: cover;
//           transition:
//             transform 0.65s cubic-bezier(0.2, 0.7, 0.2, 1);
//         }

//         .vishwasai-video-card:hover .vishwasai-video-image {
//           transform: scale(1.08);
//         }

//         .vishwasai-video-gradient {
//           position: absolute;
//           inset: 0;
//           background:
//             linear-gradient(
//               180deg,
//               rgba(15, 18, 40, 0.04) 30%,
//               rgba(15, 18, 40, 0.58) 100%
//             );
//           pointer-events: none;
//         }

//         .vishwasai-play-button {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           z-index: 3;
//           transform: translate(-50%, -50%);
//           width: 66px;
//           height: 66px;
//           border: 1px solid rgba(255, 255, 255, 0.65);
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.94);
//           color: #252951;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           box-shadow: 0 12px 30px rgba(12, 17, 44, 0.2);
//           transition:
//             transform 0.3s ease,
//             background 0.3s ease,
//             box-shadow 0.3s ease;
//         }

//         .vishwasai-play-button span {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-left: 3px;
//         }

//         .vishwasai-video-card:hover .vishwasai-play-button {
//           transform: translate(-50%, -50%) scale(1.12);
//           background: #6474c7;
//           color: #ffffff;
//           box-shadow: 0 15px 35px rgba(100, 116, 199, 0.38);
//         }

//         .vishwasai-video-number {
//           position: absolute;
//           top: 16px;
//           left: 16px;
//           z-index: 2;
//           width: 38px;
//           height: 38px;
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.93);
//           color: #242744;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 10px;
//           font-weight: 800;
//           letter-spacing: 1px;
//         }

//         .vishwasai-video-category {
//           position: absolute;
//           bottom: 14px;
//           left: 16px;
//           z-index: 2;
//           color: #ffffff;
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//         }

//         .vishwasai-video-content {
//           padding: 22px 22px 20px;
//         }

//         .vishwasai-video-small-label {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           color: #8b8fa1;
//           font-size: 9px;
//           letter-spacing: 1.3px;
//           text-transform: uppercase;
//           font-weight: 700;
//         }

//         .vishwasai-video-content h3 {
//           min-height: 50px;
//           margin: 12px 0 18px;
//           color: #20223f;
//           font-size: 19px;
//           line-height: 1.35;
//           letter-spacing: -0.3px;
//         }

//         .vishwasai-video-bottom {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding-top: 15px;
//           border-top: 1px solid #eef0f5;
//         }

//         .vishwasai-video-bottom > span {
//           color: #858999;
//           font-size: 11px;
//         }

//         .vishwasai-video-arrow {
//           width: 34px;
//           height: 34px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border: 1px solid #e2e5ee;
//           background: #ffffff;
//           border-radius: 50%;
//           color: #252951;
//           cursor: pointer;
//           transition:
//             background 0.25s ease,
//             color 0.25s ease,
//             transform 0.25s ease;
//         }

//         .vishwasai-video-arrow:hover {
//           background: #252951;
//           color: #ffffff;
//           transform: rotate(8deg);
//         }

//         /* EMPTY */

//         .vishwasai-video-empty {
//           padding: 80px 20px;
//           text-align: center;
//           color: #85899b;
//         }

//         .vishwasai-video-empty h3 {
//           margin: 15px 0 5px;
//           color: #242744;
//         }

//         .vishwasai-video-empty p {
//           margin: 0;
//         }

//         /* =====================================================
//            CTA
//         ===================================================== */

//         .vishwasai-video-cta {
//           position: relative;
//           overflow: hidden;
//           padding: 110px 24px;
//           background: #202344;
//           color: #ffffff;
//         }

//         .vishwasai-video-cta-pattern {
//           position: absolute;
//           width: 500px;
//           height: 500px;
//           right: -180px;
//           top: -220px;
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 50%;
//         }

//         .vishwasai-video-cta-pattern::before,
//         .vishwasai-video-cta-pattern::after {
//           content: '';
//           position: absolute;
//           border: 1px solid rgba(255, 255, 255, 0.06);
//           border-radius: 50%;
//         }

//         .vishwasai-video-cta-pattern::before {
//           inset: 50px;
//         }

//         .vishwasai-video-cta-pattern::after {
//           inset: 110px;
//         }

//         .vishwasai-video-cta-content {
//           position: relative;
//           z-index: 2;
//           width: min(760px, 100%);
//           margin: auto;
//           text-align: center;
//         }

//         .vishwasai-video-cta-content
//           .section-mini-label {
//           color: #b9c4f0;
//         }

//         .vishwasai-video-cta h2 {
//           margin: 17px 0;
//           font-size: clamp(42px, 6vw, 70px);
//           line-height: 1;
//           letter-spacing: -3px;
//         }

//         .vishwasai-video-cta h2 span {
//           color: #aebcff;
//         }

//         .vishwasai-video-cta p {
//           max-width: 570px;
//           margin: 0 auto 30px;
//           color: rgba(255, 255, 255, 0.7);
//           line-height: 1.8;
//           font-size: 15px;
//         }

//         .vishwasai-cta-button {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           padding: 7px 7px 7px 21px;
//           border-radius: 40px;
//           background: #ffffff;
//           color: #202344;
//           text-decoration: none;
//           font-size: 12px;
//           font-weight: 800;
//           transition:
//             transform 0.3s ease,
//             box-shadow 0.3s ease;
//         }

//         .vishwasai-cta-button:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
//         }

//         .cta-icon {
//           width: 38px;
//           height: 38px;
//           border-radius: 50%;
//           background: #6474c7;
//           color: #ffffff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         /* =====================================================
//            MODAL
//         ===================================================== */

//         .vishwasai-video-modal {
//           position: fixed;
//           inset: 0;
//           z-index: 9999;
//           padding: 30px;
//           background: rgba(11, 13, 31, 0.88);
//           backdrop-filter: blur(12px);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           animation: vishwasaiModalFade 0.25s ease;
//         }

//         .vishwasai-video-modal-inner {
//           position: relative;
//           width: min(1000px, 100%);
//           animation: vishwasaiModalUp 0.35s ease;
//         }

//         .vishwasai-video-modal-close {
//           position: absolute;
//           right: -12px;
//           top: -52px;
//           width: 40px;
//           height: 40px;
//           border: 1px solid rgba(255, 255, 255, 0.25);
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.1);
//           color: #ffffff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: 0.25s ease;
//         }

//         .vishwasai-video-modal-close:hover {
//           background: #ffffff;
//           color: #202344;
//           transform: rotate(90deg);
//         }

//         .vishwasai-video-player {
//           position: relative;
//           overflow: hidden;
//           aspect-ratio: 16 / 9;
//           border-radius: 16px;
//           background: #000000;
//           box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
//         }

//         .vishwasai-video-player iframe {
//           position: absolute;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//           border: 0;
//         }

//         .vishwasai-modal-info {
//           padding-top: 18px;
//           color: #ffffff;
//         }

//         .vishwasai-modal-info span {
//           color: #b7c2f2;
//           font-size: 10px;
//           text-transform: uppercase;
//           letter-spacing: 1.5px;
//         }

//         .vishwasai-modal-info h3 {
//           margin: 7px 0 0;
//           font-size: 23px;
//         }

//         /* =====================================================
//            ANIMATIONS
//         ===================================================== */

//         @keyframes vishwasaiModalFade {
//           from {
//             opacity: 0;
//           }

//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes vishwasaiModalUp {
//           from {
//             opacity: 0;
//             transform: translateY(25px) scale(0.97);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         /* =====================================================
//            RESPONSIVE
//         ===================================================== */

//         @media (max-width: 1000px) {
//           .vishwasai-video-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }

//           .vishwasai-video-intro-inner {
//             gap: 45px;
//           }
//         }

//         @media (max-width: 760px) {
//           .vishwasai-video-hero {
//             min-height: 520px;
//           }

//           .vishwasai-video-hero-content {
//             width: calc(100% - 40px);
//           }

//           .vishwasai-video-hero-content h1 {
//             font-size: 57px;
//             letter-spacing: -2px;
//           }

//           .vishwasai-video-hero-content p {
//             font-size: 15px;
//           }

//           .vishwasai-hero-scroll {
//             display: none;
//           }

//           .vishwasai-video-intro {
//             padding: 70px 20px;
//           }

//           .vishwasai-video-intro-inner {
//             grid-template-columns: 1fr;
//             gap: 30px;
//           }

//           .vishwasai-intro-left h2 {
//             font-size: 45px;
//           }

//           .vishwasai-video-section {
//             padding: 70px 20px 80px;
//           }

//           .vishwasai-video-heading-row {
//             align-items: flex-start;
//           }

//           .vishwasai-video-heading-row h2 {
//             font-size: 40px;
//           }

//           .vishwasai-video-count {
//             display: none;
//           }

//           .vishwasai-video-filters {
//             display: none;
//           }

//           .vishwasai-filter-mobile {
//             position: relative;
//             display: block;
//             margin-bottom: 25px;
//           }

//           .vishwasai-filter-mobile > button {
//             width: 100%;
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             padding: 14px 17px;
//             border: 1px solid #e1e4ed;
//             border-radius: 12px;
//             background: #ffffff;
//             color: #282b4d;
//             font-weight: 700;
//           }

//           .rotate-icon {
//             transform: rotate(180deg);
//           }

//           .mobile-category-menu {
//             position: absolute;
//             top: calc(100% + 6px);
//             left: 0;
//             right: 0;
//             z-index: 20;
//             padding: 7px;
//             border: 1px solid #e1e4ed;
//             border-radius: 13px;
//             background: #ffffff;
//             box-shadow: 0 20px 45px rgba(25, 30, 60, 0.12);
//           }

//           .mobile-category-menu button {
//             width: 100%;
//             border: 0;
//             background: transparent;
//             padding: 12px;
//             text-align: left;
//             border-radius: 8px;
//             color: #686d80;
//           }

//           .mobile-category-menu button.active-category {
//             background: #f0f2fb;
//             color: #5263bb;
//             font-weight: 700;
//           }

//           .vishwasai-video-grid {
//             grid-template-columns: 1fr;
//             gap: 20px;
//           }

//           .vishwasai-video-content h3 {
//             min-height: auto;
//           }

//           .vishwasai-video-cta {
//             padding: 80px 20px;
//           }

//           .vishwasai-video-cta h2 {
//             font-size: 47px;
//             letter-spacing: -2px;
//           }

//           .vishwasai-video-modal {
//             padding: 20px;
//           }

//           .vishwasai-video-modal-close {
//             right: 0;
//             top: -50px;
//           }
//         }

//         @media (max-width: 420px) {
//           .vishwasai-video-hero-content h1 {
//             font-size: 48px;
//           }

//           .vishwasai-intro-left h2 {
//             font-size: 39px;
//           }

//           .vishwasai-video-heading-row h2 {
//             font-size: 34px;
//           }

//           .vishwasai-play-button {
//             width: 58px;
//             height: 58px;
//           }
//         }

//       `}</style>
//     </>
//   );
// }

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Play, X, Video, Sparkles, ChevronDown, Home } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface VideoItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  videoUrl?: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 1,
    slug: 'v1',
    title: 'Vishwasai Insights',
    category: 'Industry Insights',
    author: 'Vishwasai',
    date: '',
    image: '',
    videoUrl: 'https://www.youtube.com/embed/JBdGQoGFJqU',
  },
  {
    id: 2,
    slug: 'v2',
    title: 'Ideas That Create Impact',
    category: 'Presentation',
    author: 'Vishwasai',
    date: '',
    image: '',
    videoUrl: 'https://www.youtube.com/embed/xiJs0XmPJyE',
  },
  {
    id: 3,
    slug: 'v3',
    title: 'Cooperative Finance Insights',
    category: 'Finance',
    author: 'Vishwasai',
    date: '',
    image: '',
    videoUrl: 'https://www.youtube.com/embed/KEpYlaux9rc',
  },
  {
    id: 4,
    slug: 'v4',
    title: 'Building Better Cooperatives',
    category: 'Interview',
    author: 'Vishwasai',
    date: '',
    image: '',
    videoUrl: 'https://www.youtube.com/embed/jiJYiesC42s',
  },
  {
    id: 5,
    slug: 'v5',
    title: 'Leadership & Transformation',
    category: 'Leadership',
    author: 'Vishwasai',
    date: '',
    image: '',
    videoUrl: 'https://www.youtube.com/embed/H_2UBj6k5oE',
  },
  {
    id: 6,
    slug: 'v6',
    title: 'Future of Cooperative Business',
    category: 'Business',
    author: 'Vishwasai',
    date: '',
    image: '',
    videoUrl: 'https://www.youtube.com/embed/vq01USo0Rno',
  },
  {
    id: 7,
    slug: 'v7',
    title: 'Knowledge & Collaboration',
    category: 'Industry Insights',
    author: 'Vishwasai',
    date: '',
    image: '',
    videoUrl: 'https://www.youtube.com/embed/czlsVK63gkk',
  },
];

const VIDEO_CATEGORIES = [
  'All',
  'Industry Insights',
  'Interview',
  'Presentation',
  'Finance',
  'Leadership',
  'Business',
];

function getYoutubeThumbnail(url?: string) {
  if (!url) {
    return '/assets/blogs/p1.jpg';
  }

  const match = url.match(/(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([^?&/]+)/);

  if (!match?.[1]) {
    return '/assets/blogs/p1.jpg';
  }

  return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`;
}

function VideoCard({
  video,
  index,
  onPlay,
}: {
  video: VideoItem;
  index: number;
  onPlay: (video: VideoItem) => void;
}) {
  const animationClass =
    index % 3 === 0
      ? 'animate-fade-in-left'
      : index % 3 === 1
        ? 'animate-fade-in'
        : 'animate-fade-in-right';

  const initialTransform =
    index % 3 === 0
      ? 'translateX(-40px)'
      : index % 3 === 1
        ? 'translateY(40px)'
        : 'translateX(40px)';

  const ref = useScrollAnimation<HTMLDivElement>({
    animationClass,
    initialTransform,
    threshold: 0.12,
    once: false,
  });

  return (
    <article
      ref={ref}
      className="vishwasai-video-card"
      style={{
        transitionDelay: `${index * 70}ms`,
      }}
    >
      <div className="vishwasai-video-thumbnail">
        <img
          src={getYoutubeThumbnail(video.videoUrl)}
          alt={video.title}
          className="vishwasai-video-image"
          loading="lazy"
          onError={(event) => {
            const img = event.currentTarget;

            if (!img.src.includes('/assets/blogs/p1.jpg')) {
              img.src = '/assets/blogs/p1.jpg';
            }
          }}
        />

        <div className="vishwasai-video-gradient" />

        <div className="vishwasai-video-top-line">
          <span>{String(index + 1).padStart(2, '0')}</span>

          <small>{video.category}</small>
        </div>

        <button
          type="button"
          className="vishwasai-play-button"
          onClick={() => onPlay(video)}
          aria-label={`Play ${video.title}`}
        >
          <span>
            <Play size={22} fill="currentColor" />
          </span>
        </button>

        <div className="vishwasai-video-duration">
          <Video size={12} />
          WATCH
        </div>
      </div>

      <div className="vishwasai-video-content">
        <div className="vishwasai-video-small-label">
          <Sparkles size={13} />
          <span>VISHWASAI VIDEO</span>
        </div>

        <h3>{video.title}</h3>

        <div className="vishwasai-video-bottom">
          <span>Explore video</span>

          <button
            type="button"
            onClick={() => onPlay(video)}
            aria-label={`Open ${video.title}`}
            className="vishwasai-video-arrow"
          >
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function VideosPage() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const [activeCategory, setActiveCategory] = useState('All');
  const [showCategories, setShowCategories] = useState(false);

  const heroContentRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-left',
    initialTransform: 'translateX(-50px)',
    threshold: 0.12,
    once: false,
  });

  const heroVisualRef = useScrollAnimation<HTMLDivElement>({
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

  useEffect(() => {
    setVideos(VIDEOS);
  }, []);

  useEffect(() => {
    if (!activeVideo) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveVideo(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [activeVideo]);

  const filteredVideos =
    activeCategory === 'All' ? videos : videos.filter((video) => video.category === activeCategory);

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="vishwasai-video-hero">
        <div className="vishwasai-video-hero-decoration" ref={heroVisualRef}>
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-orbit hero-orbit-three" />

          <div className="hero-video-icon">
            <Video size={82} strokeWidth={1} />
          </div>

          <div className="hero-floating-dot hero-dot-one" />
          <div className="hero-floating-dot hero-dot-two" />
          <div className="hero-floating-dot hero-dot-three" />
        </div>

        <div className="vishwasai-video-hero-grid" />

        <div className="vishwasai-video-hero-content" ref={heroContentRef}>
          <div className="vishwasai-hero-eyebrow">
            <span />
            VISHWASAI MEDIA
          </div>

          <h1>
            Videos
            <span>.</span>
          </h1>

          <p>Explore Vishwasai through interviews, presentations, events and industry insights.</p>

          <div className="vishwasai-video-breadcrumb">
            <Link href="/" className="vishwasai-video-home">
              <Home size={15} />
              <span>Home</span>
            </Link>

            <span className="breadcrumb-divider">/</span>

            <span>Videos</span>
          </div>
        </div>

        <div className="vishwasai-hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown size={17} />
        </div>

        <div className="hero-bottom-fade" />
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="vishwasai-video-intro">
        <div ref={introRef} className="vishwasai-video-intro-inner">
          <div className="vishwasai-intro-left">
            <span className="section-mini-label">
              <Sparkles size={15} />
              INSIGHTS & KNOWLEDGE
            </span>

            <h2>
              Watch ideas.
              <br />
              <span>Discover impact.</span>
            </h2>
          </div>

          <div className="vishwasai-intro-right">
            <p>
              Discover conversations, presentations, events and industry perspectives that bring the
              Vishwasai ecosystem to life.
            </p>

            <div className="vishwasai-intro-line">
              <span />
              <small>{String(videos.length).padStart(2, '0')}+ VIDEOS</small>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO LIBRARY
      ===================================================== */}

      <section className="vishwasai-video-section">
        <div className="vishwasai-video-container">
          <div className="vishwasai-video-heading-row">
            <div>
              <span className="section-mini-label">
                <Video size={15} />
                VIDEO LIBRARY
              </span>

              <h2>
                Explore our
                <span> latest stories.</span>
              </h2>
            </div>

            <div className="vishwasai-video-count">
              <strong>{String(filteredVideos.length).padStart(2, '0')}</strong>

              <span>VIDEOS</span>
            </div>
          </div>

          {/* DESKTOP FILTERS */}

          {/* <div className="vishwasai-video-filters">
            {VIDEO_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? 'active'
                    : ''
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>
            ))}
          </div> */}

          {/* MOBILE FILTER */}

          <div className="vishwasai-filter-mobile">
            <button type="button" onClick={() => setShowCategories((value) => !value)}>
              <span>{activeCategory}</span>

              <ChevronDown size={17} className={showCategories ? 'rotate-icon' : ''} />
            </button>

            {showCategories && (
              <div className="mobile-category-menu">
                {VIDEO_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);
                      setShowCategories(false);
                    }}
                    className={activeCategory === category ? 'active-category' : ''}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* GRID */}

          <div className="vishwasai-video-grid">
            {filteredVideos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} onPlay={setActiveVideo} />
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="vishwasai-video-empty">
              <Video size={30} />

              <h3>No videos found</h3>

              <p>Try another category.</p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="vishwasai-video-cta">
        <div className="vishwasai-video-cta-pattern">
          <span />
          <span />
          <span />
        </div>

        <div className="vishwasai-video-cta-content">
          <span className="section-mini-label">KEEP EXPLORING</span>

          <h2>
            More ideas.
            <br />
            <span>More possibilities.</span>
          </h2>

          <p>
            Explore our blogs and discover more perspectives, knowledge and insights from Vishwasai.
          </p>

          <Link href="/blog" className="vishwasai-cta-button">
            <span>Explore Blogs</span>

            <span className="cta-icon">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>
      </section>

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {activeVideo && (
        <div className="vishwasai-video-modal" onClick={() => setActiveVideo(null)}>
          <div className="vishwasai-video-modal-inner" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="vishwasai-video-modal-close"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <X size={22} />
            </button>

            <div className="vishwasai-video-player">
              <iframe
                src={`${activeVideo.videoUrl}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="vishwasai-modal-info">
              <span>{activeVideo.category}</span>

              <h3>{activeVideo.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          CSS
      ===================================================== */}

      <style jsx global>{`
        /* =====================================================
           BASE
        ===================================================== */

        .vishwasai-video-hero,
        .vishwasai-video-intro,
        .vishwasai-video-section,
        .vishwasai-video-cta {
          font-family: inherit;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .vishwasai-video-hero {
          position: relative;
          min-height: 570px;
          overflow: hidden;
          display: flex;
          align-items: center;
          background:
            radial-gradient(circle at 78% 45%, rgba(100, 116, 199, 0.25), transparent 25%),
            linear-gradient(120deg, #11142f 0%, #191c42 48%, #242858 100%);
          color: #ffffff;
        }

        .vishwasai-video-hero-grid {
          position: absolute;
          inset: 0;
          opacity: 0.18;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
          background-size: 70px 70px;
          mask-image: linear-gradient(90deg, transparent, black 40%, black 100%);
          pointer-events: none;
        }

        .vishwasai-video-hero-content {
          position: relative;
          z-index: 5;
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          padding: 105px 0 95px;
        }

        .vishwasai-hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 20px;
          color: #aebbf4;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.8px;
        }

        .vishwasai-hero-eyebrow span {
          width: 38px;
          height: 1px;
          background: #aebbf4;
        }

        .vishwasai-video-hero-content h1 {
          margin: 0;
          max-width: 650px;
          font-size: clamp(60px, 8vw, 105px);
          line-height: 0.9;
          font-weight: 750;
          letter-spacing: -5px;
        }

        .vishwasai-video-hero-content h1 span {
          color: #8796e5;
        }

        .vishwasai-video-hero-content p {
          max-width: 600px;
          margin: 30px 0 32px;
          color: rgba(255, 255, 255, 0.76);
          font-size: 17px;
          line-height: 1.75;
        }

        .vishwasai-video-breadcrumb {
          display: flex;
          align-items: center;
          gap: 13px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 12px;
        }

        .vishwasai-video-home {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #ffffff;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .vishwasai-video-home:hover {
          color: #aebbf4;
          transform: translateX(3px);
        }

        .breadcrumb-divider {
          opacity: 0.35;
        }

        /* HERO DECORATION */

        .vishwasai-video-hero-decoration {
          position: absolute;
          z-index: 2;
          width: 550px;
          height: 550px;
          right: 4%;
          top: 50%;
          transform: translateY(-50%);
        }

        .hero-orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(174, 187, 244, 0.16);
          border-radius: 50%;
        }

        .hero-orbit-one {
          width: 230px;
          height: 230px;
        }

        .hero-orbit-two {
          width: 370px;
          height: 370px;
        }

        .hero-orbit-three {
          width: 520px;
          height: 520px;
        }

        .hero-video-icon {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 155px;
          height: 155px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.055);
          color: #b7c3fa;
          box-shadow:
            0 0 80px rgba(100, 116, 199, 0.18),
            inset 0 0 35px rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(5px);
          animation: heroPulse 4s ease-in-out infinite;
        }

        .hero-floating-dot {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #9aa9f1;
          box-shadow: 0 0 18px rgba(154, 169, 241, 0.8);
        }

        .hero-dot-one {
          left: 12%;
          top: 28%;
        }

        .hero-dot-two {
          right: 13%;
          top: 18%;
        }

        .hero-dot-three {
          right: 19%;
          bottom: 22%;
        }

        @keyframes heroPulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
          }

          50% {
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        .vishwasai-hero-scroll {
          position: absolute;
          right: 30px;
          bottom: 30px;
          z-index: 6;
          display: flex;
          align-items: center;
          gap: 9px;
          color: rgba(255, 255, 255, 0.55);
          font-size: 8px;
          letter-spacing: 2px;
          writing-mode: vertical-rl;
        }

        .vishwasai-hero-scroll svg {
          animation: scrollDown 1.6s ease-in-out infinite;
        }

        @keyframes scrollDown {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(7px);
          }
        }

        .hero-bottom-fade {
          position: absolute;
          z-index: 4;
          bottom: 0;
          left: 0;
          right: 0;
          height: 90px;
          background: linear-gradient(transparent, rgba(17, 20, 47, 0.55));
          pointer-events: none;
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .vishwasai-video-intro {
          background: #ffffff;
          padding: 105px 24px 90px;
        }

        .vishwasai-video-intro-inner {
          width: min(1180px, 100%);
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 90px;
          align-items: end;
        }

        .section-mini-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #6875b4;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .vishwasai-intro-left h2 {
          margin: 18px 0 0;
          color: #191c3d;
          font-size: clamp(43px, 5vw, 68px);
          line-height: 1.02;
          letter-spacing: -3px;
        }

        .vishwasai-intro-left h2 span {
          color: #6878ce;
        }

        .vishwasai-intro-right p {
          margin: 0;
          max-width: 500px;
          color: #6b7083;
          font-size: 16px;
          line-height: 1.85;
        }

        .vishwasai-intro-line {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 30px;
        }

        .vishwasai-intro-line span {
          width: 65px;
          height: 2px;
          background: #6878ce;
        }

        .vishwasai-intro-line small {
          color: #85899b;
          font-size: 9px;
          letter-spacing: 2px;
        }

        /* =====================================================
           VIDEO SECTION
        ===================================================== */

        .vishwasai-video-section {
          padding: 95px 24px 115px;
          border-top: 1px solid #eceef5;
          background: linear-gradient(180deg, #f7f8fc 0%, #ffffff 100%);
        }

        .vishwasai-video-container {
          width: min(1180px, 100%);
          margin: auto;
        }

        .vishwasai-video-heading-row {
          display: flex;
          align-items: end;
          justify-content: space-between;
          margin-bottom: 40px;
        }

        .vishwasai-video-heading-row h2 {
          margin: 13px 0 0;
          color: #1b1e40;
          font-size: clamp(37px, 4.5vw, 56px);
          line-height: 1;
          letter-spacing: -2.5px;
        }

        .vishwasai-video-heading-row h2 span {
          color: #6878ce;
        }

        .vishwasai-video-count {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .vishwasai-video-count strong {
          color: #22264a;
          font-size: 43px;
          line-height: 1;
        }

        .vishwasai-video-count span {
          color: #9094a4;
          margin-top: 5px;
          font-size: 9px;
          letter-spacing: 2px;
        }

        /* FILTER */

        .vishwasai-video-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 36px;
        }

        .vishwasai-video-filters button {
          border: 1px solid #e0e3ec;
          background: #ffffff;
          color: #6f7385;
          padding: 10px 17px;
          border-radius: 30px;
          cursor: pointer;
          font-size: 11px;
          font-weight: 650;
          transition: 0.25s ease;
        }

        .vishwasai-video-filters button:hover {
          color: #5969bf;
          border-color: #aeb7df;
          transform: translateY(-2px);
        }

        .vishwasai-video-filters button.active {
          color: #ffffff;
          background: #22264a;
          border-color: #22264a;
          box-shadow: 0 10px 25px rgba(34, 38, 74, 0.15);
        }

        .vishwasai-filter-mobile {
          display: none;
        }

        /* =====================================================
           GRID
        ===================================================== */

        .vishwasai-video-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .vishwasai-video-card {
          overflow: hidden;
          border: 1px solid #e7e9f0;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 10px 35px rgba(31, 37, 68, 0.055);
          transition:
            transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1),
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .vishwasai-video-card:hover {
          transform: translateY(-9px);
          border-color: #cdd3e9;
          box-shadow: 0 25px 60px rgba(31, 37, 68, 0.13);
        }

        .vishwasai-video-thumbnail {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #1c2044;
        }

        .vishwasai-video-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .vishwasai-video-card:hover .vishwasai-video-image {
          transform: scale(1.08);
        }

        .vishwasai-video-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15, 18, 40, 0.08), rgba(15, 18, 40, 0.68));
          pointer-events: none;
        }

        .vishwasai-video-top-line {
          position: absolute;
          z-index: 2;
          top: 15px;
          left: 15px;
          right: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .vishwasai-video-top-line > span {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.94);
          color: #242744;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .vishwasai-video-top-line small {
          padding: 7px 10px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          background: rgba(25, 29, 65, 0.55);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        /* PLAY */

        .vishwasai-play-button {
          position: absolute;
          z-index: 4;
          left: 50%;
          top: 50%;
          width: 66px;
          height: 66px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.94);
          color: #282d58;
          cursor: pointer;
          box-shadow: 0 12px 35px rgba(10, 15, 45, 0.25);
          transition: 0.3s ease;
        }

        .vishwasai-play-button span {
          display: flex;
          margin-left: 3px;
        }

        .vishwasai-video-card:hover .vishwasai-play-button {
          transform: translate(-50%, -50%) scale(1.13);
          background: #6878ce;
          color: #ffffff;
          box-shadow: 0 15px 38px rgba(104, 120, 206, 0.4);
        }

        .vishwasai-video-duration {
          position: absolute;
          z-index: 3;
          left: 15px;
          bottom: 13px;
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.3px;
        }

        /* CONTENT */

        .vishwasai-video-content {
          padding: 22px 22px 20px;
        }

        .vishwasai-video-small-label {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #8b8fa1;
          font-size: 8px;
          letter-spacing: 1.4px;
          font-weight: 750;
        }

        .vishwasai-video-content h3 {
          min-height: 52px;
          margin: 12px 0 18px;
          color: #20233f;
          font-size: 19px;
          line-height: 1.35;
          letter-spacing: -0.3px;
        }

        .vishwasai-video-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 15px;
          border-top: 1px solid #eef0f5;
        }

        .vishwasai-video-bottom > span {
          color: #858999;
          font-size: 11px;
        }

        .vishwasai-video-arrow {
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #e2e5ee;
          border-radius: 50%;
          background: #ffffff;
          color: #252951;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .vishwasai-video-arrow:hover {
          transform: rotate(8deg);
          background: #252951;
          color: #ffffff;
        }

        /* EMPTY */

        .vishwasai-video-empty {
          padding: 80px 20px;
          text-align: center;
          color: #85899b;
        }

        .vishwasai-video-empty h3 {
          margin: 15px 0 5px;
          color: #242744;
        }

        .vishwasai-video-empty p {
          margin: 0;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .vishwasai-video-cta {
          position: relative;
          overflow: hidden;
          padding: 115px 24px;
          background: linear-gradient(125deg, #171a3a, #252a57);
          color: #ffffff;
        }

        .vishwasai-video-cta-pattern {
          position: absolute;
          right: -180px;
          top: -220px;
          width: 600px;
          height: 600px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
        }

        .vishwasai-video-cta-pattern span {
          position: absolute;
          inset: 55px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 50%;
        }

        .vishwasai-video-cta-pattern span:nth-child(2) {
          inset: 120px;
        }

        .vishwasai-video-cta-pattern span:nth-child(3) {
          inset: 185px;
        }

        .vishwasai-video-cta-content {
          position: relative;
          z-index: 2;
          width: min(760px, 100%);
          margin: auto;
          text-align: center;
        }

        .vishwasai-video-cta-content .section-mini-label {
          color: #b9c4f0;
        }

        .vishwasai-video-cta h2 {
          margin: 17px 0;
          font-size: clamp(43px, 6vw, 72px);
          line-height: 1;
          letter-spacing: -3px;
        }

        .vishwasai-video-cta h2 span {
          color: #aebcff;
        }

        .vishwasai-video-cta p {
          max-width: 570px;
          margin: 0 auto 31px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 15px;
          line-height: 1.8;
        }

        .vishwasai-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 7px 7px 7px 21px;
          border-radius: 40px;
          background: #ffffff;
          color: #202344;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          transition: 0.3s ease;
        }

        .vishwasai-cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .cta-icon {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #6878ce;
          color: #ffffff;
        }

        /* =====================================================
           MODAL
        ===================================================== */

        .vishwasai-video-modal {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          background: rgba(9, 11, 28, 0.9);
          backdrop-filter: blur(12px);
          animation: modalFade 0.25s ease;
        }

        .vishwasai-video-modal-inner {
          position: relative;
          width: min(1000px, 100%);
          animation: modalUp 0.35s ease;
        }

        .vishwasai-video-modal-close {
          position: absolute;
          z-index: 4;
          right: -12px;
          top: -52px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .vishwasai-video-modal-close:hover {
          background: #ffffff;
          color: #202344;
          transform: rotate(90deg);
        }

        .vishwasai-video-player {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 9;
          border-radius: 16px;
          background: #000000;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
        }

        .vishwasai-video-player iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .vishwasai-modal-info {
          padding-top: 18px;
          color: #ffffff;
        }

        .vishwasai-modal-info span {
          color: #b7c2f2;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .vishwasai-modal-info h3 {
          margin: 7px 0 0;
          font-size: 23px;
        }

        @keyframes modalFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes modalUp {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 1000px) {
          .vishwasai-video-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .vishwasai-video-intro-inner {
            gap: 45px;
          }

          .vishwasai-video-hero-decoration {
            right: -100px;
            opacity: 0.55;
          }
        }

        @media (max-width: 760px) {
          .vishwasai-video-hero {
            min-height: 540px;
          }

          .vishwasai-video-hero-content {
            width: calc(100% - 40px);
            padding: 90px 0 80px;
          }

          .vishwasai-video-hero-content h1 {
            font-size: 61px;
            letter-spacing: -3px;
          }

          .vishwasai-video-hero-content p {
            max-width: 470px;
            font-size: 15px;
          }

          .vishwasai-video-hero-decoration {
            right: -230px;
            opacity: 0.4;
          }

          .vishwasai-hero-scroll {
            display: none;
          }

          .vishwasai-video-intro {
            padding: 72px 20px;
          }

          .vishwasai-video-intro-inner {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .vishwasai-intro-left h2 {
            font-size: 45px;
          }

          .vishwasai-video-section {
            padding: 72px 20px 82px;
          }

          .vishwasai-video-heading-row {
            align-items: flex-start;
          }

          .vishwasai-video-heading-row h2 {
            font-size: 40px;
          }

          .vishwasai-video-count {
            display: none;
          }

          .vishwasai-video-filters {
            display: none;
          }

          .vishwasai-filter-mobile {
            position: relative;
            display: block;
            margin-bottom: 25px;
          }

          .vishwasai-filter-mobile > button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 17px;
            border: 1px solid #e1e4ed;
            border-radius: 12px;
            background: #ffffff;
            color: #282b4d;
            font-weight: 700;
          }

          .rotate-icon {
            transform: rotate(180deg);
          }

          .mobile-category-menu {
            position: absolute;
            z-index: 20;
            top: calc(100% + 6px);
            left: 0;
            right: 0;
            padding: 7px;
            border: 1px solid #e1e4ed;
            border-radius: 13px;
            background: #ffffff;
            box-shadow: 0 20px 45px rgba(25, 30, 60, 0.12);
          }

          .mobile-category-menu button {
            width: 100%;
            border: 0;
            background: transparent;
            padding: 12px;
            text-align: left;
            border-radius: 8px;
            color: #686d80;
          }

          .mobile-category-menu button.active-category {
            background: #f0f2fb;
            color: #5263bb;
            font-weight: 700;
          }

          .vishwasai-video-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .vishwasai-video-content h3 {
            min-height: auto;
          }

          .vishwasai-video-cta {
            padding: 82px 20px;
          }

          .vishwasai-video-cta h2 {
            font-size: 48px;
            letter-spacing: -2px;
          }

          .vishwasai-video-modal {
            padding: 20px;
          }

          .vishwasai-video-modal-close {
            right: 0;
            top: -50px;
          }
        }

        @media (max-width: 420px) {
          .vishwasai-video-hero-content h1 {
            font-size: 51px;
          }

          .vishwasai-intro-left h2 {
            font-size: 39px;
          }

          .vishwasai-video-heading-row h2 {
            font-size: 34px;
          }

          .vishwasai-play-button {
            width: 58px;
            height: 58px;
          }

          .hero-video-icon {
            width: 125px;
            height: 125px;
          }
        }
      `}</style>
    </>
  );
}
