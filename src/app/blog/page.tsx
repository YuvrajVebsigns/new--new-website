// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import {
//   ArrowUpRight,
//   ChevronRight,
//   ChevronLeft,
//   Heart,
//   MessageCircle,
//   Search,
//   Sparkles,
// } from 'lucide-react';
// import { useEffect, useMemo, useState } from 'react';
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import {
//   fetchWebsiteBlogs,
//   submitWebsiteBlogLike,
//   type WebsiteBlogItem,
// } from '@/services/blogs.service';

// const BLOG_FALLBACK_IMAGE = '/assets/blogs/p1.jpg';
// const LIKED_KEY = 'likedBlogs';

// const categories = [
//   'All',
//   'Cooperative Finance',
//   'NBFC',
//   'Agriculture & FPO',
//   'Funding',
//   'Business',
// ];

// function getBlogCategory(blog: WebsiteBlogItem) {
//   return blog.websites?.[0]?.name || blog.tags?.[0] || 'Insights';
// }

// function getBlogAuthor(blog: WebsiteBlogItem) {
//   return blog.author?.fullName || 'Vishwasai Team';
// }

// function getBlogImage(blog: WebsiteBlogItem) {
//   return (
//     blog.featureImage?.large ||
//     blog.featureImage?.small ||
//     blog.seo?.ogImage?.large ||
//     blog.seo?.ogImage?.small ||
//     BLOG_FALLBACK_IMAGE
//   );
// }

// function getBlogDescription(blog: WebsiteBlogItem) {
//   return blog.excerpt || blog.seo?.metaDescription || '';
// }

// function formatDate(value?: string) {
//   if (!value) return '';

//   const date = new Date(value);

//   if (Number.isNaN(date.getTime())) return '';

//   return date.toLocaleDateString('en-US', {
//     month: 'short',
//     day: 'numeric',
//     year: 'numeric',
//   });
// }

// function readLikedSet(): Set<string> {
//   try {
//     const raw =
//       typeof window !== 'undefined'
//         ? window.localStorage.getItem(LIKED_KEY)
//         : null;

//     if (!raw) return new Set();

//     const parsed = JSON.parse(raw);

//     if (!Array.isArray(parsed)) return new Set();

//     return new Set(parsed.map(String));
//   } catch {
//     return new Set();
//   }
// }

// function markBlogLiked(id: string | number) {
//   try {
//     const liked = readLikedSet();

//     liked.add(String(id));

//     window.localStorage.setItem(
//       LIKED_KEY,
//       JSON.stringify(Array.from(liked)),
//     );
//   } catch {
//     // Ignore storage errors
//   }
// }

// function removeBlogLiked(id: string | number) {
//   try {
//     const liked = readLikedSet();

//     liked.delete(String(id));

//     window.localStorage.setItem(
//       LIKED_KEY,
//       JSON.stringify(Array.from(liked)),
//     );
//   } catch {
//     // Ignore storage errors
//   }
// }

// function isBlogLiked(id?: string | number) {
//   if (!id) return false;

//   return readLikedSet().has(String(id));
// }

// function BlogCard({
//   blog,
//   index,
// }: {
//   blog: WebsiteBlogItem;
//   index: number;
// }) {
//   const initialLikes =
//     typeof blog.engagement?.likes === 'number'
//       ? blog.engagement.likes
//       : 0;

//   const comments =
//     typeof blog.engagement?.commentsCount === 'number'
//       ? blog.engagement.commentsCount
//       : 0;

//   const [likes, setLikes] = useState(initialLikes);
//   const [liked, setLiked] = useState(false);
//   const [isLikeAnimating, setIsLikeAnimating] = useState(false);

//   const animationClass =
//     index % 3 === 0
//       ? 'blog-reveal-left'
//       : index % 3 === 1
//         ? 'blog-reveal-up'
//         : 'blog-reveal-right';

//   const ref = useScrollAnimation<HTMLElement>({
//     animationClass,
//     initialTransform:
//       index % 3 === 0
//         ? 'translateX(-45px)'
//         : index % 3 === 1
//           ? 'translateY(45px)'
//           : 'translateX(45px)',
//     threshold: 0.1,
//     once: false,
//   });

//   useEffect(() => {
//     setLiked(isBlogLiked(blog.id));
//     setLikes(initialLikes);
//   }, [blog.id, initialLikes]);

//   async function handleLike(
//     event: React.MouseEvent<HTMLButtonElement>,
//   ) {
//     event.preventDefault();
//     event.stopPropagation();

//     if (liked) {
//       setLiked(false);
//       setLikes((value) => Math.max(0, value - 1));
//       removeBlogLiked(blog.id);
//       return;
//     }

//     setLiked(true);
//     setLikes((value) => value + 1);
//     setIsLikeAnimating(true);

//     setTimeout(() => {
//       setIsLikeAnimating(false);
//     }, 500);

//     try {
//       await submitWebsiteBlogLike(blog.id);

//       markBlogLiked(blog.id);
//     } catch {
//       setLiked(false);
//       setLikes((value) => Math.max(0, value - 1));
//       removeBlogLiked(blog.id);
//     }
//   }

//   return (
//     <article
//       ref={ref}
//       className={`blog-card ${
//         index === 0 ? 'blog-card-featured' : ''
//       }`}
//       style={{
//         transitionDelay: `${(index % 6) * 70}ms`,
//       }}
//     >
//       <div className="blog-card-image-wrap">
//         <Link
//           href={`/blog/${blog.slug}`}
//           aria-label={`Read ${blog.title}`}
//         >
//           <Image
//             src={getBlogImage(blog)}
//             alt={blog.title}
//             fill
//             className="blog-card-image"
//             unoptimized
//             onError={(event) => {
//               const image = event.currentTarget;

//               if (
//                 image.src.indexOf(BLOG_FALLBACK_IMAGE) === -1
//               ) {
//                 image.src = BLOG_FALLBACK_IMAGE;
//               }
//             }}
//           />

//           <div className="blog-card-image-overlay" />

//           <div className="blog-card-open">
//             <ArrowUpRight size={20} />
//           </div>
//         </Link>

//         <span className="blog-category-badge">
//           {getBlogCategory(blog)}
//         </span>

//         {index === 0 && (
//           <span className="featured-badge">
//             <Sparkles size={13} />
//             Featured Insight
//           </span>
//         )}
//       </div>

//       <div className="blog-card-body">
//         <div className="blog-card-meta">
//           <span>{formatDate(blog.publishedAt)}</span>

//           <span className="meta-dot" />

//           <span>{getBlogAuthor(blog)}</span>
//         </div>

//         <Link href={`/blog/${blog.slug}`}>
//           <h2>{blog.title}</h2>
//         </Link>

//         {getBlogDescription(blog) && (
//           <p>{getBlogDescription(blog)}</p>
//         )}

//         <div className="blog-card-bottom">
//           <Link
//             href={`/blog/${blog.slug}`}
//             className="blog-read-button"
//           >
//             <span>Read Insight</span>

//             <span className="read-arrow">
//               <ArrowUpRight size={16} />
//             </span>
//           </Link>

//           <div className="blog-engagement">
//             <button
//               type="button"
//               className={`blog-engagement-button ${
//                 liked ? 'liked' : ''
//               } ${isLikeAnimating ? 'like-pop' : ''}`}
//               onClick={handleLike}
//               aria-label={`${likes} likes`}
//             >
//               <Heart
//                 size={16}
//                 fill={liked ? 'currentColor' : 'none'}
//               />

//               <span>{likes}</span>
//             </button>

//             <span className="blog-comment-count">
//               <MessageCircle size={16} />
//               <span>{comments}</span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function BlogPage() {
//   const [blogs, setBlogs] = useState<WebsiteBlogItem[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const limit = 10;

//   const heroRef = useScrollAnimation<HTMLDivElement>({
//     animationClass: 'blog-hero-content-visible',
//     initialTransform: 'translateY(35px)',
//     threshold: 0.05,
//     once: false,
//   });

//   const heroImageRef = useScrollAnimation<HTMLDivElement>({
//     animationClass: 'blog-hero-image-visible',
//     initialTransform: 'translateX(45px)',
//     threshold: 0.05,
//     once: false,
//   });

//   useEffect(() => {
//     let mounted = true;

//     async function loadBlogs() {
//       setIsLoading(true);
//       setError(null);

//       try {
//         const response = await fetchWebsiteBlogs(
//           page,
//           limit,
//           searchTerm,
//         );

//         if (!mounted) return;

//         const items = response.data?.data ?? [];
//         const meta = response.data?.meta;

//         setBlogs(items);

//         setTotalPages(
//           meta?.totalPages ??
//             Math.max(
//               1,
//               Math.ceil(
//                 (meta?.total ?? items.length) / limit,
//               ),
//             ),
//         );
//       } catch (fetchError) {
//         if (!mounted) return;

//         setBlogs([]);

//         setError(
//           fetchError instanceof Error
//             ? fetchError.message
//             : 'Failed to load blogs',
//         );
//       } finally {
//         if (mounted) {
//           setIsLoading(false);
//         }
//       }
//     }

//     loadBlogs();

//     return () => {
//       mounted = false;
//     };
//   }, [page, searchTerm]);

//   const filteredBlogs = useMemo(() => {
//     if (activeCategory === 'All') return blogs;

//     return blogs.filter((blog) => {
//       const category = getBlogCategory(blog).toLowerCase();

//       return category.includes(
//         activeCategory.toLowerCase(),
//       );
//     });
//   }, [blogs, activeCategory]);

//   function handleCategoryChange(category: string) {
//     setActiveCategory(category);
//   }

//   return (
//     <>
//       <style jsx global>{`
//         /* =====================================================
//            BLOG PAGE
//         ===================================================== */

//         .blog-page {
//           --blog-dark: #17152f;
//           --blog-dark-2: #211d3b;
//           --blog-blue: #9edcff;
//           --blog-blue-strong: #69c9ff;
//           --blog-white: #ffffff;
//           --blog-muted: #72758b;
//           --blog-border: rgba(33, 29, 59, 0.11);
//           --blog-soft: #f6f9fc;

//           position: relative;
//           overflow: hidden;
//           background: #ffffff;
//           color: var(--blog-dark);
//         }

//         /* =====================================================
//            BACKGROUND
//         ===================================================== */

//         .blog-background-orb {
//           position: absolute;
//           width: 420px;
//           height: 420px;
//           border-radius: 50%;
//           background: radial-gradient(
//             circle,
//             rgba(105, 201, 255, 0.16),
//             transparent 68%
//           );
//           pointer-events: none;
//           filter: blur(8px);
//         }

//         .blog-orb-one {
//           top: 380px;
//           right: -180px;
//         }

//         .blog-orb-two {
//           top: 1450px;
//           left: -220px;
//         }

//         /* =====================================================
//            HERO
//         ===================================================== */

//         .blog-new-hero {
//           position: relative;
//           min-height: 590px;
//           display: flex;
//           align-items: center;
//           overflow: hidden;
//           background:
//             radial-gradient(
//               circle at 78% 30%,
//               rgba(105, 201, 255, 0.24),
//               transparent 25%
//             ),
//             linear-gradient(
//               135deg,
//               #17152f 0%,
//               #211d3b 55%,
//               #28234a 100%
//             );
//           color: #fff;
//         }

//         .blog-new-hero::before {
//           content: '';
//           position: absolute;
//           width: 500px;
//           height: 500px;
//           border: 1px solid rgba(158, 220, 255, 0.16);
//           border-radius: 50%;
//           right: -160px;
//           top: -130px;
//         }

//         .blog-new-hero::after {
//           content: '';
//           position: absolute;
//           width: 280px;
//           height: 280px;
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 50%;
//           right: 70px;
//           bottom: -180px;
//         }

//         .blog-hero-container {
//           position: relative;
//           z-index: 3;
//           width: min(1180px, calc(100% - 40px));
//           margin: auto;
//           display: grid;
//           grid-template-columns: 1.05fr 0.95fr;
//           gap: 70px;
//           align-items: center;
//         }

//         .blog-hero-content-new {
//           max-width: 700px;
//         }

//         .blog-hero-eyebrow {
//           display: inline-flex;
//           align-items: center;
//           gap: 9px;
//           padding: 8px 14px;
//           border: 1px solid rgba(158, 220, 255, 0.3);
//           border-radius: 999px;
//           color: var(--blog-blue);
//           font-size: 12px;
//           font-weight: 700;
//           letter-spacing: 0.15em;
//           text-transform: uppercase;
//           margin-bottom: 26px;
//           background: rgba(158, 220, 255, 0.06);
//         }

//         .blog-hero-content-new h1 {
//           margin: 0;
//           font-size: clamp(48px, 6vw, 82px);
//           line-height: 0.98;
//           letter-spacing: -0.055em;
//           font-weight: 700;
//         }

//         .blog-hero-content-new h1 span {
//           display: block;
//           color: var(--blog-blue);
//         }

//         .blog-hero-content-new p {
//           max-width: 590px;
//           margin: 28px 0 0;
//           color: rgba(255, 255, 255, 0.72);
//           font-size: 18px;
//           line-height: 1.8;
//         }

//         .blog-hero-line {
//           width: 80px;
//           height: 3px;
//           display: block;
//           margin-top: 34px;
//           border-radius: 20px;
//           background: var(--blog-blue);
//         }

//         .blog-hero-visual {
//           position: relative;
//           min-height: 390px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .blog-hero-ring {
//           position: absolute;
//           width: 330px;
//           height: 330px;
//           border-radius: 50%;
//           border: 1px solid rgba(158, 220, 255, 0.3);
//           animation: blogRotate 16s linear infinite;
//         }

//         .blog-hero-ring::before {
//           content: '';
//           position: absolute;
//           width: 13px;
//           height: 13px;
//           background: var(--blog-blue);
//           border-radius: 50%;
//           top: 15px;
//           left: 50%;
//           box-shadow: 0 0 25px rgba(158, 220, 255, 0.9);
//         }

//         .blog-hero-card {
//           position: relative;
//           width: 280px;
//           height: 330px;
//           border-radius: 24px;
//           overflow: hidden;
//           transform: rotate(4deg);
//           border: 1px solid rgba(255, 255, 255, 0.18);
//           box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
//           animation: blogFloat 5s ease-in-out infinite;
//         }

//         .blog-hero-card img {
//           object-fit: cover;
//         }

//         .blog-hero-card-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to top,
//             rgba(23, 21, 47, 0.85),
//             transparent 55%
//           );
//         }

//         .blog-hero-card-label {
//           position: absolute;
//           bottom: 25px;
//           left: 24px;
//           right: 24px;
//           z-index: 2;
//         }

//         .blog-hero-card-label small {
//           display: block;
//           color: var(--blog-blue);
//           font-size: 11px;
//           text-transform: uppercase;
//           letter-spacing: 0.15em;
//           margin-bottom: 7px;
//         }

//         .blog-hero-card-label strong {
//           font-size: 20px;
//           line-height: 1.25;
//         }

//         @keyframes blogFloat {
//           0%,
//           100% {
//             transform: rotate(4deg) translateY(0);
//           }

//           50% {
//             transform: rotate(2deg) translateY(-14px);
//           }
//         }

//         @keyframes blogRotate {
//           from {
//             transform: rotate(0);
//           }

//           to {
//             transform: rotate(360deg);
//           }
//         }

//         /* =====================================================
//            CATEGORY BAR
//         ===================================================== */

//         .blog-category-section {
//           position: sticky;
//           top: 0;
//           z-index: 20;
//           padding: 18px 0;
//           background: rgba(255, 255, 255, 0.92);
//           backdrop-filter: blur(18px);
//           border-bottom: 1px solid var(--blog-border);
//         }

//         .blog-container {
//           width: min(1180px, calc(100% - 40px));
//           margin: auto;
//         }

//         .blog-category-inner {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 20px;
//         }

//         .blog-category-label {
//           font-size: 11px;
//           font-weight: 800;
//           text-transform: uppercase;
//           letter-spacing: 0.14em;
//           color: var(--blog-muted);
//           white-space: nowrap;
//         }

//         .blog-category-list {
//           display: flex;
//           gap: 8px;
//           overflow-x: auto;
//           scrollbar-width: none;
//         }

//         .blog-category-list::-webkit-scrollbar {
//           display: none;
//         }

//         .blog-category-btn {
//           position: relative;
//           flex: 0 0 auto;
//           border: 1px solid var(--blog-border);
//           background: #fff;
//           color: var(--blog-dark);
//           padding: 10px 17px;
//           border-radius: 999px;
//           font-size: 12px;
//           font-weight: 600;
//           cursor: pointer;
//           transition:
//             transform 0.25s ease,
//             background 0.25s ease,
//             color 0.25s ease,
//             border-color 0.25s ease;
//         }

//         .blog-category-btn:hover {
//           transform: translateY(-2px);
//           border-color: var(--blog-blue-strong);
//         }

//         .blog-category-btn.active {
//           background: var(--blog-dark);
//           color: #fff;
//           border-color: var(--blog-dark);
//         }

//         /* =====================================================
//            CONTENT HEADER
//         ===================================================== */

//         .blog-content-section {
//           position: relative;
//           padding: 100px 0 120px;
//         }

//         .blog-section-heading {
//           display: flex;
//           align-items: end;
//           justify-content: space-between;
//           gap: 50px;
//           margin-bottom: 45px;
//         }

//         .blog-heading-left {
//           max-width: 690px;
//         }

//         .blog-small-title {
//           display: inline-block;
//           color: #69bce8;
//           font-size: 12px;
//           font-weight: 800;
//           text-transform: uppercase;
//           letter-spacing: 0.18em;
//           margin-bottom: 15px;
//         }

//         .blog-section-heading h2 {
//           margin: 0;
//           font-size: clamp(38px, 5vw, 62px);
//           line-height: 1;
//           letter-spacing: -0.05em;
//         }

//         .blog-section-heading h2 span {
//           color: #69bce8;
//         }

//         .blog-heading-description {
//           margin: 20px 0 0;
//           max-width: 650px;
//           color: var(--blog-muted);
//           font-size: 16px;
//           line-height: 1.8;
//         }

//         /* =====================================================
//            SEARCH
//         ===================================================== */

//         .blog-search {
//           position: relative;
//           width: min(330px, 100%);
//           flex-shrink: 0;
//         }

//         .blog-search input {
//           width: 100%;
//           height: 50px;
//           border: 1px solid var(--blog-border);
//           border-radius: 12px;
//           outline: none;
//           padding: 0 50px 0 17px;
//           color: var(--blog-dark);
//           background: #fff;
//           transition:
//             border-color 0.25s ease,
//             box-shadow 0.25s ease;
//         }

//         .blog-search input:focus {
//           border-color: var(--blog-blue-strong);
//           box-shadow: 0 0 0 4px rgba(105, 201, 255, 0.1);
//         }

//         .blog-search svg {
//           position: absolute;
//           right: 17px;
//           top: 50%;
//           transform: translateY(-50%);
//           color: var(--blog-muted);
//           pointer-events: none;
//         }

//         /* =====================================================
//            RESULTS
//         ===================================================== */

//         .blog-results-bar {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-bottom: 22px;
//           color: var(--blog-muted);
//           font-size: 13px;
//         }

//         .blog-results-bar strong {
//           color: var(--blog-dark);
//         }

//         .blog-active-category {
//           padding: 7px 12px;
//           border-radius: 999px;
//           background: #edf8ff;
//           color: #318dc0;
//           font-weight: 700;
//         }

//         /* =====================================================
//            GRID
//         ===================================================== */

//         .blog-grid {
//           display: grid;
//           grid-template-columns: repeat(3, minmax(0, 1fr));
//           gap: 24px;
//         }

//         /* =====================================================
//            CARD
//         ===================================================== */

//         .blog-card {
//           position: relative;
//           overflow: hidden;
//           border: 1px solid var(--blog-border);
//           border-radius: 20px;
//           background: #fff;
//           box-shadow: 0 12px 40px rgba(23, 21, 47, 0.045);
//           opacity: 0;
//           transform: translateY(45px);
//           transition:
//             opacity 0.8s ease,
//             transform 0.8s ease,
//             box-shadow 0.35s ease,
//             border-color 0.35s ease;
//         }

//         .blog-reveal-left,
//         .blog-reveal-up,
//         .blog-reveal-right {
//           opacity: 0;
//         }

//         .blog-reveal-left {
//           transform: translateX(-45px);
//         }

//         .blog-reveal-up {
//           transform: translateY(45px);
//         }

//         .blog-reveal-right {
//           transform: translateX(45px);
//         }

//         .blog-reveal-left.is-visible,
//         .blog-reveal-up.is-visible,
//         .blog-reveal-right.is-visible {
//           opacity: 1;
//           transform: translate(0);
//         }

//         .blog-card:hover {
//           transform: translateY(-9px) !important;
//           border-color: rgba(105, 201, 255, 0.45);
//           box-shadow: 0 28px 65px rgba(23, 21, 47, 0.12);
//         }

//         .blog-card-featured {
//           grid-column: span 2;
//         }

//         .blog-card-featured .blog-card-image-wrap {
//           height: 330px;
//         }

//         .blog-card-featured .blog-card-body h2 {
//           font-size: 30px;
//         }

//         .blog-card-image-wrap {
//           position: relative;
//           height: 230px;
//           overflow: hidden;
//           background: #edf1f5;
//         }

//         .blog-card-image {
//           object-fit: cover;
//           transition: transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
//         }

//         .blog-card:hover .blog-card-image {
//           transform: scale(1.07);
//         }

//         .blog-card-image-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to top,
//             rgba(23, 21, 47, 0.5),
//             transparent 55%
//           );
//           opacity: 0;
//           transition: opacity 0.35s ease;
//         }

//         .blog-card:hover .blog-card-image-overlay {
//           opacity: 1;
//         }

//         .blog-category-badge {
//           position: absolute;
//           top: 17px;
//           left: 17px;
//           z-index: 3;
//           padding: 8px 12px;
//           border-radius: 999px;
//           background: rgba(255, 255, 255, 0.94);
//           color: var(--blog-dark);
//           font-size: 10px;
//           font-weight: 800;
//           letter-spacing: 0.04em;
//           box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
//         }

//         .featured-badge {
//           position: absolute;
//           right: 17px;
//           top: 17px;
//           z-index: 3;
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           padding: 8px 11px;
//           border-radius: 999px;
//           background: var(--blog-dark);
//           color: var(--blog-blue);
//           font-size: 10px;
//           font-weight: 800;
//         }

//         .blog-card-open {
//           position: absolute;
//           right: 18px;
//           bottom: 18px;
//           z-index: 3;
//           width: 44px;
//           height: 44px;
//           display: grid;
//           place-items: center;
//           border-radius: 50%;
//           background: var(--blog-blue);
//           color: var(--blog-dark);
//           transform: translateY(15px);
//           opacity: 0;
//           transition:
//             opacity 0.3s ease,
//             transform 0.3s ease;
//         }

//         .blog-card:hover .blog-card-open {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .blog-card-body {
//           padding: 25px;
//         }

//         .blog-card-meta {
//           display: flex;
//           align-items: center;
//           gap: 9px;
//           margin-bottom: 12px;
//           color: var(--blog-muted);
//           font-size: 11px;
//         }

//         .meta-dot {
//           width: 4px;
//           height: 4px;
//           border-radius: 50%;
//           background: var(--blog-blue-strong);
//         }

//         .blog-card-body h2 {
//           margin: 0;
//           color: var(--blog-dark);
//           font-size: 22px;
//           line-height: 1.25;
//           letter-spacing: -0.025em;
//           transition: color 0.25s ease;
//         }

//         .blog-card-body h2:hover {
//           color: #318dc0;
//         }

//         .blog-card-body p {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//           margin: 14px 0 0;
//           color: var(--blog-muted);
//           font-size: 14px;
//           line-height: 1.7;
//         }

//         .blog-card-bottom {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 15px;
//           margin-top: 24px;
//           padding-top: 17px;
//           border-top: 1px solid var(--blog-border);
//         }

//         .blog-read-button {
//           display: inline-flex;
//           align-items: center;
//           gap: 9px;
//           color: var(--blog-dark);
//           font-size: 12px;
//           font-weight: 800;
//           text-decoration: none;
//         }

//         .read-arrow {
//           width: 29px;
//           height: 29px;
//           display: grid;
//           place-items: center;
//           border-radius: 50%;
//           background: #edf8ff;
//           color: #318dc0;
//           transition:
//             transform 0.25s ease,
//             background 0.25s ease;
//         }

//         .blog-read-button:hover .read-arrow {
//           transform: translate(3px, -3px);
//           background: var(--blog-blue);
//         }

//         .blog-engagement {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//         }

//         .blog-engagement-button,
//         .blog-comment-count {
//           display: inline-flex;
//           align-items: center;
//           gap: 5px;
//           border: 0;
//           background: transparent;
//           color: var(--blog-muted);
//           font-size: 11px;
//         }

//         .blog-engagement-button {
//           cursor: pointer;
//           padding: 4px;
//           transition:
//             color 0.25s ease,
//             transform 0.25s ease;
//         }

//         .blog-engagement-button:hover,
//         .blog-engagement-button.liked {
//           color: #318dc0;
//         }

//         .like-pop {
//           animation: likePop 0.5s ease;
//         }

//         @keyframes likePop {
//           0% {
//             transform: scale(1);
//           }

//           35% {
//             transform: scale(1.35);
//           }

//           65% {
//             transform: scale(0.88);
//           }

//           100% {
//             transform: scale(1);
//           }
//         }

//         /* =====================================================
//            EMPTY / LOADING
//         ===================================================== */

//         .blog-state {
//           grid-column: 1 / -1;
//           min-height: 260px;
//           display: grid;
//           place-items: center;
//           border: 1px dashed var(--blog-border);
//           border-radius: 20px;
//           color: var(--blog-muted);
//           background: var(--blog-soft);
//         }

//         .blog-loader {
//           width: 35px;
//           height: 35px;
//           border: 3px solid #e5edf2;
//           border-top-color: var(--blog-blue-strong);
//           border-radius: 50%;
//           animation: blogSpin 0.8s linear infinite;
//         }

//         @keyframes blogSpin {
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         /* =====================================================
//            KNOWLEDGE SECTION
//         ===================================================== */

//         .blog-knowledge-section {
//           position: relative;
//           padding: 110px 0;
//           overflow: hidden;
//           background: var(--blog-dark);
//           color: #fff;
//         }

//         .blog-knowledge-grid {
//           display: grid;
//           grid-template-columns: 0.9fr 1.1fr;
//           gap: 80px;
//           align-items: center;
//         }

//         .blog-knowledge-heading h2 {
//           margin: 0;
//           font-size: clamp(38px, 5vw, 64px);
//           line-height: 1;
//           letter-spacing: -0.05em;
//         }

//         .blog-knowledge-heading h2 span {
//           color: var(--blog-blue);
//         }

//         .blog-knowledge-heading p {
//           margin: 25px 0 0;
//           color: rgba(255, 255, 255, 0.65);
//           line-height: 1.8;
//         }

//         .knowledge-cards {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 14px;
//         }

//         .knowledge-card {
//           position: relative;
//           min-height: 180px;
//           padding: 25px;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 18px;
//           background: rgba(255, 255, 255, 0.035);
//           transition:
//             transform 0.3s ease,
//             background 0.3s ease,
//             border-color 0.3s ease;
//         }

//         .knowledge-card:hover {
//           transform: translateY(-7px);
//           background: rgba(158, 220, 255, 0.07);
//           border-color: rgba(158, 220, 255, 0.28);
//         }

//         .knowledge-card-number {
//           display: block;
//           color: var(--blog-blue);
//           font-size: 11px;
//           font-weight: 800;
//           letter-spacing: 0.15em;
//           margin-bottom: 30px;
//         }

//         .knowledge-card h3 {
//           margin: 0;
//           font-size: 19px;
//         }

//         .knowledge-card p {
//           margin: 10px 0 0;
//           color: rgba(255, 255, 255, 0.52);
//           font-size: 13px;
//           line-height: 1.6;
//         }

//         /* =====================================================
//            PAGINATION
//         ===================================================== */

//         .blog-pagination {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           gap: 8px;
//           margin-top: 55px;
//         }

//         .blog-page-button {
//           width: 44px;
//           height: 44px;
//           display: grid;
//           place-items: center;
//           border: 1px solid var(--blog-border);
//           border-radius: 50%;
//           background: #fff;
//           color: var(--blog-dark);
//           cursor: pointer;
//           transition:
//             transform 0.25s ease,
//             background 0.25s ease,
//             color 0.25s ease;
//         }

//         .blog-page-button:hover:not(:disabled) {
//           transform: translateY(-3px);
//           background: var(--blog-dark);
//           color: #fff;
//         }

//         .blog-page-button.active {
//           background: var(--blog-blue);
//           border-color: var(--blog-blue);
//         }

//         .blog-page-button:disabled {
//           opacity: 0.35;
//           cursor: not-allowed;
//         }

//         /* =====================================================
//            RESPONSIVE
//         ===================================================== */

//         @media (max-width: 980px) {
//           .blog-hero-container {
//             grid-template-columns: 1fr;
//             gap: 30px;
//           }

//           .blog-new-hero {
//             min-height: auto;
//             padding: 100px 0 80px;
//           }

//           .blog-hero-visual {
//             min-height: 330px;
//           }

//           .blog-section-heading {
//             align-items: flex-start;
//             flex-direction: column;
//           }

//           .blog-search {
//             width: 100%;
//           }

//           .blog-grid {
//             grid-template-columns: repeat(2, minmax(0, 1fr));
//           }

//           .blog-card-featured {
//             grid-column: span 2;
//           }

//           .blog-knowledge-grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         @media (max-width: 680px) {
//           .blog-container,
//           .blog-hero-container {
//             width: min(100% - 28px, 1180px);
//           }

//           .blog-new-hero {
//             padding: 75px 0 60px;
//           }

//           .blog-hero-content-new h1 {
//             font-size: 49px;
//           }

//           .blog-hero-content-new p {
//             font-size: 15px;
//           }

//           .blog-hero-visual {
//             min-height: 280px;
//           }

//           .blog-hero-ring {
//             width: 250px;
//             height: 250px;
//           }

//           .blog-hero-card {
//             width: 220px;
//             height: 270px;
//           }

//           .blog-category-section {
//             position: relative;
//           }

//           .blog-category-inner {
//             display: block;
//           }

//           .blog-category-label {
//             display: block;
//             margin-bottom: 12px;
//           }

//           .blog-content-section {
//             padding: 70px 0 80px;
//           }

//           .blog-section-heading h2 {
//             font-size: 43px;
//           }

//           .blog-grid {
//             grid-template-columns: 1fr;
//           }

//           .blog-card-featured {
//             grid-column: span 1;
//           }

//           .blog-card-featured .blog-card-image-wrap {
//             height: 250px;
//           }

//           .blog-card-featured .blog-card-body h2 {
//             font-size: 25px;
//           }

//           .blog-card-image-wrap {
//             height: 220px;
//           }

//           .knowledge-cards {
//             grid-template-columns: 1fr;
//           }

//           .blog-knowledge-section {
//             padding: 75px 0;
//           }
//         }
//       `}</style>

//       <main className="blog-page">
//         <div
//           className="blog-background-orb blog-orb-one"
//           aria-hidden="true"
//         />

//         <div
//           className="blog-background-orb blog-orb-two"
//           aria-hidden="true"
//         />

//         {/* =================================================
//             HERO
//         ================================================= */}

//         <section className="blog-new-hero">
//           <div className="blog-hero-container">
//             <div
//               className="blog-hero-content-new"
//               ref={heroRef}
//             >
//               <span className="blog-hero-eyebrow">
//                 <Sparkles size={14} />
//                 Insights & Knowledge
//               </span>

//               <h1>
//                 Ideas that
//                 <span>move forward.</span>
//               </h1>

//               <p>
//                 Ideas, insights and practical knowledge from the
//                 world of cooperative agriculture, finance and
//                 business.
//               </p>

//               <span
//                 className="blog-hero-line"
//                 aria-hidden="true"
//               />
//             </div>

//             <div
//               className="blog-hero-visual"
//               ref={heroImageRef}
//             >
//               <div
//                 className="blog-hero-ring"
//                 aria-hidden="true"
//               />

//               <div className="blog-hero-card">
//                 <Image
//                   src="/assets/blogs/vishwasai.png"
//                   alt="Vishwasai Insights"
//                   fill
//                   priority
//                   className="blog-hero-card-image"
//                   style={{ objectFit: 'cover' }}
//                   onError={(event) => {
//                     const image = event.currentTarget;

//                     if (
//                       image.src.indexOf(
//                         BLOG_FALLBACK_IMAGE,
//                       ) === -1
//                     ) {
//                       image.src = BLOG_FALLBACK_IMAGE;
//                     }
//                   }}
//                 />

//                 <div className="blog-hero-card-overlay" />

//                 <div className="blog-hero-card-label">
//                   <small>Vishwasai</small>

//                   <strong>
//                     Knowledge for better business decisions.
//                   </strong>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =================================================
//             CATEGORY NAVIGATION
//         ================================================= */}

//         {/* <section className="blog-category-section">
//           <div className="blog-container blog-category-inner">
//             <span className="blog-category-label">
//               Explore Topics
//             </span>

//             <div className="blog-category-list">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   type="button"
//                   className={`blog-category-btn ${
//                     activeCategory === category
//                       ? 'active'
//                       : ''
//                   }`}
//                   onClick={() =>
//                     handleCategoryChange(category)
//                   }
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </section> */}

//         {/* =================================================
//             BLOG CONTENT
//         ================================================= */}

//         <section className="blog-content-section">
//           <div className="blog-container">
//             <div className="blog-section-heading">
//               <div className="blog-heading-left">
//                 <span className="blog-small-title">
//                   Latest Knowledge
//                 </span>

//                 <h2>
//                   Explore our
//                   <span> insights.</span>
//                 </h2>

//                 <p className="blog-heading-description">
//                   Discover practical perspectives and ideas
//                   covering cooperative finance, agriculture,
//                   NBFCs, funding and business development.
//                 </p>
//               </div>

//               <form
//                 className="blog-search"
//                 onSubmit={(event) =>
//                   event.preventDefault()
//                 }
//               >
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   placeholder="Search insights..."
//                   onChange={(event) => {
//                     setSearchTerm(event.target.value);
//                     setPage(1);
//                   }}
//                   aria-label="Search blogs"
//                 />

//                 <Search size={18} />
//               </form>
//             </div>

//             <div className="blog-results-bar">
//               <span>
//                 Showing{' '}
//                 <strong>{filteredBlogs.length}</strong>{' '}
//                 insights
//               </span>

//               <span className="blog-active-category">
//                 {activeCategory}
//               </span>
//             </div>

//             {isLoading ? (
//               <div className="blog-grid">
//                 <div className="blog-state">
//                   <div className="blog-loader" />
//                 </div>
//               </div>
//             ) : error ? (
//               <div className="blog-grid">
//                 <div className="blog-state">
//                   <p>{error}</p>
//                 </div>
//               </div>
//             ) : (
//               <div className="blog-grid">
//                 {filteredBlogs.length === 0 ? (
//                   <div className="blog-state">
//                     <p>
//                       No insights found for your search.
//                     </p>
//                   </div>
//                 ) : (
//                   filteredBlogs.map((blog, index) => (
//                     <BlogCard
//                       key={blog.id}
//                       blog={blog}
//                       index={index}
//                     />
//                   ))
//                 )}
//               </div>
//             )}

//             {/* =================================================
//                 PAGINATION
//             ================================================= */}

//             <div
//               className="blog-pagination"
//               aria-label="Blog pagination"
//             >
//               <button
//                 type="button"
//                 className="blog-page-button"
//                 aria-label="Previous page"
//                 disabled={isLoading || page <= 1}
//                 onClick={() =>
//                   setPage((value) =>
//                     Math.max(1, value - 1),
//                   )
//                 }
//               >
//                 <ChevronLeft size={17} />
//               </button>

//               <button
//                 type="button"
//                 className="blog-page-button active"
//                 disabled
//               >
//                 {String(page).padStart(2, '0')}
//               </button>

//               <button
//                 type="button"
//                 className="blog-page-button"
//                 aria-label="Next page"
//                 disabled={
//                   isLoading || page >= totalPages
//                 }
//                 onClick={() =>
//                   setPage((value) =>
//                     Math.min(totalPages, value + 1),
//                   )
//                 }
//               >
//                 <ChevronRight size={17} />
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* =================================================
//             BLOG CATEGORIES / KNOWLEDGE
//         ================================================= */}

//         <section className="blog-knowledge-section">
//           <div className="blog-container">
//             <div className="blog-knowledge-grid">
//               <div className="blog-knowledge-heading">
//                 <span className="blog-small-title">
//                   Knowledge Areas
//                 </span>

//                 <h2>
//                   Insights across
//                   <span> industries.</span>
//                 </h2>

//                 <p>
//                   Explore perspectives relevant to the
//                   organizations, institutions and businesses
//                   we support.
//                 </p>
//               </div>

//               <div className="knowledge-cards">
//                 <article className="knowledge-card">
//                   <span className="knowledge-card-number">
//                     01
//                   </span>

//                   <h3>Cooperative Finance</h3>

//                   <p>
//                     Cooperative societies, credit societies,
//                     multistate cooperatives and financial
//                     developments.
//                   </p>
//                 </article>

//                 <article className="knowledge-card">
//                   <span className="knowledge-card-number">
//                     02
//                   </span>

//                   <h3>NBFC Consultancy</h3>

//                   <p>
//                     Regulatory developments, establishment,
//                     financial structuring and strategic
//                     advisory.
//                   </p>
//                 </article>

//                 <article className="knowledge-card">
//                   <span className="knowledge-card-number">
//                     03
//                   </span>

//                   <h3>Agriculture & FPO</h3>

//                   <p>
//                     Farmer Producer Organisations,
//                     agricultural businesses and cooperative
//                     agriculture.
//                   </p>
//                 </article>

//                 <article className="knowledge-card">
//                   <span className="knowledge-card-number">
//                     04
//                   </span>

//                   <h3>Business & Funding</h3>

//                   <p>
//                     Funding, management, business development
//                     and strategic growth perspectives.
//                   </p>
//                 </article>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

'use client';

import Link from 'next/link';
import {
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
  Heart,
  MessageCircle,
  Search,
  Sparkles,
  BookOpen,
  TrendingUp,
  Lightbulb,
  BarChart3,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  fetchWebsiteBlogs,
  submitWebsiteBlogLike,
  type WebsiteBlogItem,
} from '@/services/blogs.service';

const BLOG_FALLBACK_IMAGE = '/assets/blogs/p1.jpg';
const LIKED_KEY = 'likedBlogs';

const categories = [
  'All',
  'Cooperative Finance',
  'NBFC',
  'Agriculture & FPO',
  'Funding',
  'Business',
];

function getBlogCategory(blog: WebsiteBlogItem) {
  return blog.websites?.[0]?.name || blog.tags?.[0] || 'Insights';
}

function getBlogAuthor(blog: WebsiteBlogItem) {
  return blog.author?.fullName || 'Vishwasai Team';
}

function getBlogImage(blog: WebsiteBlogItem) {
  return (
    blog.featureImage?.large ||
    blog.featureImage?.small ||
    blog.seo?.ogImage?.large ||
    blog.seo?.ogImage?.small ||
    BLOG_FALLBACK_IMAGE
  );
}

function getBlogDescription(blog: WebsiteBlogItem) {
  return blog.excerpt || blog.seo?.metaDescription || '';
}

function formatDate(value?: string) {
  if (!value) return '';

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return '';

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/* =========================================================
   LOCAL LIKE STORAGE
========================================================= */

function readLikedSet(): Set<string> {
  try {
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem(LIKED_KEY) : null;

    if (!raw) return new Set();

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) return new Set();

    return new Set(parsed.map(String));
  } catch {
    return new Set();
  }
}

function markBlogLiked(id: string | number) {
  try {
    const liked = readLikedSet();

    liked.add(String(id));

    window.localStorage.setItem(LIKED_KEY, JSON.stringify(Array.from(liked)));
  } catch {
    // Ignore storage errors
  }
}

function removeBlogLiked(id: string | number) {
  try {
    const liked = readLikedSet();

    liked.delete(String(id));

    window.localStorage.setItem(LIKED_KEY, JSON.stringify(Array.from(liked)));
  } catch {
    // Ignore storage errors
  }
}

function isBlogLiked(id?: string | number) {
  if (!id) return false;

  return readLikedSet().has(String(id));
}

/* =========================================================
   BLOG CARD
========================================================= */

function BlogCard({ blog, index }: { blog: WebsiteBlogItem; index: number }) {
  const initialLikes = typeof blog.engagement?.likes === 'number' ? blog.engagement.likes : 0;

  const comments =
    typeof blog.engagement?.commentsCount === 'number' ? blog.engagement.commentsCount : 0;

  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [isLikeAnimating, setIsLikeAnimating] = useState(false);

  const animationClass =
    index % 3 === 0 ? 'blog-reveal-left' : index % 3 === 1 ? 'blog-reveal-up' : 'blog-reveal-right';

  const ref = useScrollAnimation<HTMLElement>({
    animationClass,
    initialTransform:
      index % 3 === 0
        ? 'translateX(-45px)'
        : index % 3 === 1
          ? 'translateY(45px)'
          : 'translateX(45px)',
    threshold: 0.1,
    once: false,
  });

  useEffect(() => {
    setLiked(isBlogLiked(blog.id));
    setLikes(initialLikes);
  }, [blog.id, initialLikes]);

  async function handleLike(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (liked) {
      setLiked(false);
      setLikes((value) => Math.max(0, value - 1));
      removeBlogLiked(blog.id);
      return;
    }

    setLiked(true);
    setLikes((value) => value + 1);
    setIsLikeAnimating(true);

    setTimeout(() => {
      setIsLikeAnimating(false);
    }, 500);

    try {
      await submitWebsiteBlogLike(blog.id);

      markBlogLiked(blog.id);
    } catch {
      setLiked(false);
      setLikes((value) => Math.max(0, value - 1));
      removeBlogLiked(blog.id);
    }
  }

  return (
    <article
      ref={ref}
      className={`blog-card ${index === 0 ? 'blog-card-featured' : ''}`}
      style={{
        transitionDelay: `${(index % 6) * 70}ms`,
      }}
    >
      <div className="blog-card-image-wrap">
        <Link href={`/blog/${blog.slug}`} aria-label={`Read ${blog.title}`}>
          <img
            src={getBlogImage(blog)}
            alt={blog.title}
            className="blog-card-image"
            onError={(event) => {
              const image = event.currentTarget;

              if (image.src.indexOf(BLOG_FALLBACK_IMAGE) === -1) {
                image.src = BLOG_FALLBACK_IMAGE;
              }
            }}
          />

          <div className="blog-card-image-overlay" />

          <div className="blog-card-open">
            <ArrowUpRight size={20} />
          </div>
        </Link>

        <span className="blog-category-badge">{getBlogCategory(blog)}</span>

        {index === 0 && (
          <span className="featured-badge">
            <Sparkles size={13} />
            Featured Insight
          </span>
        )}
      </div>

      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span>{formatDate(blog.publishedAt)}</span>

          <span className="meta-dot" />

          <span>{getBlogAuthor(blog)}</span>
        </div>

        <Link href={`/blog/${blog.slug}`}>
          <h2>{blog.title}</h2>
        </Link>

        {getBlogDescription(blog) && <p>{getBlogDescription(blog)}</p>}

        <div className="blog-card-bottom">
          <Link href={`/blog/${blog.slug}`} className="blog-read-button">
            <span>Read Insight</span>

            <span className="read-arrow">
              <ArrowUpRight size={16} />
            </span>
          </Link>

          <div className="blog-engagement">
            <button
              type="button"
              className={`blog-engagement-button ${
                liked ? 'liked' : ''
              } ${isLikeAnimating ? 'like-pop' : ''}`}
              onClick={handleLike}
              aria-label={`${likes} likes`}
            >
              <Heart size={16} fill={liked ? 'currentColor' : 'none'} />

              <span>{likes}</span>
            </button>

            <span className="blog-comment-count">
              <MessageCircle size={16} />
              <span>{comments}</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   BLOG PAGE
========================================================= */

export default function BlogPage() {
  const [blogs, setBlogs] = useState<WebsiteBlogItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 10;

  /* =======================================================
     HERO ANIMATION
  ======================================================= */

  const heroRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'blog-hero-content-visible',
    initialTransform: 'translateY(35px)',
    threshold: 0.05,
    once: false,
  });

  const heroVisualRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'blog-hero-visual-visible',
    initialTransform: 'translateX(45px)',
    threshold: 0.05,
    once: false,
  });

  /* =======================================================
     API
  ======================================================= */

  useEffect(() => {
    let mounted = true;

    async function loadBlogs() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchWebsiteBlogs(page, limit, searchTerm);

        if (!mounted) return;

        const items = response.data?.data ?? [];
        const meta = response.data?.meta;

        setBlogs(items);

        setTotalPages(
          meta?.totalPages ?? Math.max(1, Math.ceil((meta?.total ?? items.length) / limit)),
        );
      } catch (fetchError) {
        if (!mounted) return;

        setBlogs([]);

        setError(fetchError instanceof Error ? fetchError.message : 'Failed to load blogs');
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    loadBlogs();

    return () => {
      mounted = false;
    };
  }, [page, searchTerm]);

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredBlogs = useMemo(() => {
    if (activeCategory === 'All') {
      return blogs;
    }

    return blogs.filter((blog) => {
      const category = getBlogCategory(blog).toLowerCase();

      return category.includes(activeCategory.toLowerCase());
    });
  }, [blogs, activeCategory]);

  function handleCategoryChange(category: string) {
    setActiveCategory(category);
    setPage(1);
  }

  return (
    <>
      <style jsx global>{`
        /* =====================================================
           ROOT
        ===================================================== */

        .blog-page {
          --blog-dark: #17152f;
          --blog-dark-2: #211d3b;
          --blog-dark-3: #28234a;

          --blog-blue: #9edcff;
          --blog-blue-strong: #69c9ff;
          --blog-blue-soft: #edf8ff;

          --blog-white: #ffffff;
          --blog-muted: #72758b;
          --blog-border: rgba(33, 29, 59, 0.11);
          --blog-soft: #f6f9fc;

          position: relative;
          overflow: hidden;

          background: #ffffff;

          color: var(--blog-dark);
        }

        /* =====================================================
           BACKGROUND ORBS
        ===================================================== */

        .blog-background-orb {
          position: absolute;

          width: 420px;
          height: 420px;

          border-radius: 50%;

          background: radial-gradient(circle, rgba(105, 201, 255, 0.16), transparent 68%);

          pointer-events: none;

          filter: blur(8px);
        }

        .blog-orb-one {
          top: 500px;
          right: -180px;
        }

        .blog-orb-two {
          top: 1500px;
          left: -220px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .blog-new-hero {
          position: relative;

          min-height: 620px;

          display: flex;
          align-items: center;

          overflow: hidden;

          background:
            radial-gradient(circle at 75% 35%, rgba(105, 201, 255, 0.18), transparent 25%),
            radial-gradient(circle at 15% 90%, rgba(105, 201, 255, 0.07), transparent 25%),
            linear-gradient(135deg, #17152f 0%, #211d3b 52%, #28234a 100%);

          color: #ffffff;
        }

        .blog-new-hero::before {
          content: '';

          position: absolute;

          width: 700px;
          height: 700px;

          right: -320px;
          top: -350px;

          border-radius: 50%;

          border: 1px solid rgba(158, 220, 255, 0.08);

          box-shadow:
            0 0 0 80px rgba(158, 220, 255, 0.025),
            0 0 0 160px rgba(158, 220, 255, 0.018);

          pointer-events: none;
        }

        .blog-new-hero::after {
          content: '';

          position: absolute;

          width: 500px;
          height: 500px;

          left: -300px;
          bottom: -350px;

          border-radius: 50%;

          border: 1px solid rgba(255, 255, 255, 0.06);

          pointer-events: none;
        }

        /* =====================================================
           HERO CONTAINER
        ===================================================== */

        .blog-hero-container {
          position: relative;

          z-index: 5;

          width: min(1180px, calc(100% - 40px));

          margin: auto;

          display: grid;

          grid-template-columns:
            1.05fr
            0.95fr;

          gap: 70px;

          align-items: center;
        }

        /* =====================================================
           HERO CONTENT
        ===================================================== */

        .blog-hero-content-new {
          max-width: 700px;

          opacity: 0;

          transform: translateY(35px);

          transition:
            opacity 0.9s ease,
            transform 0.9s ease;
        }

        .blog-hero-content-visible {
          opacity: 1;

          transform: translateY(0);
        }

        .blog-hero-eyebrow {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          padding: 9px 15px;

          border: 1px solid rgba(158, 220, 255, 0.3);

          border-radius: 999px;

          color: var(--blog-blue);

          font-size: 12px;

          font-weight: 700;

          letter-spacing: 0.15em;

          text-transform: uppercase;

          margin-bottom: 27px;

          background: rgba(158, 220, 255, 0.06);

          backdrop-filter: blur(10px);

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .blog-hero-eyebrow:hover {
          background: rgba(158, 220, 255, 0.12);

          transform: translateY(-2px);
        }

        .blog-hero-content-new h1 {
          margin: 0;

          font-size: clamp(50px, 6vw, 84px);

          line-height: 0.97;

          letter-spacing: -0.055em;

          font-weight: 700;
        }

        .blog-hero-content-new h1 span {
          display: block;

          color: var(--blog-blue);

          text-shadow: 0 0 40px rgba(105, 201, 255, 0.16);
        }

        .blog-hero-content-new p {
          max-width: 590px;

          margin: 29px 0 0;

          color: rgba(255, 255, 255, 0.72);

          font-size: 18px;

          line-height: 1.8;
        }

        .blog-hero-line {
          width: 82px;

          height: 3px;

          display: block;

          margin-top: 34px;

          border-radius: 20px;

          background: var(--blog-blue);

          box-shadow: 0 0 22px rgba(105, 201, 255, 0.5);

          animation: heroLinePulse 3s ease-in-out infinite;
        }

        @keyframes heroLinePulse {
          0%,
          100% {
            width: 82px;
            opacity: 0.7;
          }

          50% {
            width: 125px;
            opacity: 1;
          }
        }

        /* =====================================================
           INTERACTIVE HERO VISUAL
        ===================================================== */

        .blog-hero-visual {
          position: relative;

          min-height: 450px;

          display: flex;

          align-items: center;

          justify-content: center;

          opacity: 0;

          transform: translateX(45px);

          transition:
            opacity 1s ease,
            transform 1s ease;
        }

        .blog-hero-visual-visible {
          opacity: 1;

          transform: translateX(0);
        }

        /* =====================================================
           MAIN CIRCLE
        ===================================================== */

        .hero-orbit-system {
          position: relative;

          width: 410px;
          height: 410px;

          display: flex;

          align-items: center;

          justify-content: center;
        }

        .hero-glow {
          position: absolute;

          width: 280px;
          height: 280px;

          border-radius: 50%;

          background: radial-gradient(
            circle,
            rgba(105, 201, 255, 0.2),
            rgba(105, 201, 255, 0.05) 45%,
            transparent 70%
          );

          filter: blur(10px);

          animation: heroGlow 4s ease-in-out infinite;
        }

        @keyframes heroGlow {
          0%,
          100% {
            transform: scale(0.92);

            opacity: 0.65;
          }

          50% {
            transform: scale(1.1);

            opacity: 1;
          }
        }

        /* =====================================================
           ORBIT RINGS
        ===================================================== */

        .hero-orbit {
          position: absolute;

          border-radius: 50%;

          border: 1px solid rgba(158, 220, 255, 0.2);
        }

        .hero-orbit-one {
          width: 405px;
          height: 405px;

          animation: orbitRotate 18s linear infinite;
        }

        .hero-orbit-two {
          width: 320px;
          height: 320px;

          border-color: rgba(255, 255, 255, 0.1);

          animation: orbitRotateReverse 13s linear infinite;
        }

        .hero-orbit-three {
          width: 230px;
          height: 230px;

          border-color: rgba(158, 220, 255, 0.22);

          animation: orbitRotate 9s linear infinite;
        }

        @keyframes orbitRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbitRotateReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        /* =====================================================
           ORBIT DOTS
        ===================================================== */

        .hero-orbit-dot {
          position: absolute;

          width: 11px;
          height: 11px;

          border-radius: 50%;

          background: var(--blog-blue);

          box-shadow: 0 0 20px rgba(158, 220, 255, 0.9);
        }

        .hero-dot-one {
          top: 3px;
          left: 50%;

          transform: translateX(-50%);
        }

        .hero-dot-two {
          right: 18px;
          bottom: 74px;

          width: 8px;
          height: 8px;
        }

        .hero-dot-three {
          left: 32px;
          bottom: 105px;

          width: 7px;
          height: 7px;
        }

        /* =====================================================
           CENTER CIRCLE
        ===================================================== */

        .hero-center {
          position: relative;

          z-index: 5;

          width: 175px;
          height: 175px;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          flex-direction: column;

          text-align: center;

          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.12),
            rgba(255, 255, 255, 0.035)
          );

          border: 1px solid rgba(158, 220, 255, 0.35);

          box-shadow:
            inset 0 0 40px rgba(158, 220, 255, 0.06),
            0 0 60px rgba(105, 201, 255, 0.15);

          backdrop-filter: blur(16px);

          animation: centerFloat 4s ease-in-out infinite;
        }

        @keyframes centerFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-9px);
          }
        }

        .hero-center-icon {
          width: 50px;
          height: 50px;

          display: grid;

          place-items: center;

          border-radius: 50%;

          color: var(--blog-dark);

          background: var(--blog-blue);

          box-shadow: 0 0 30px rgba(105, 201, 255, 0.45);

          margin-bottom: 13px;
        }

        .hero-center strong {
          font-size: 17px;

          letter-spacing: -0.02em;
        }

        .hero-center span {
          margin-top: 5px;

          color: rgba(255, 255, 255, 0.55);

          font-size: 10px;

          letter-spacing: 0.13em;

          text-transform: uppercase;
        }

        /* =====================================================
           FLOATING INSIGHT CARDS
        ===================================================== */

        .hero-floating-card {
          position: absolute;

          z-index: 10;

          display: flex;

          align-items: center;

          gap: 10px;

          min-width: 145px;

          padding: 11px 14px;

          border: 1px solid rgba(255, 255, 255, 0.12);

          border-radius: 14px;

          background: rgba(23, 21, 47, 0.72);

          backdrop-filter: blur(15px);

          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.25);

          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease;
        }

        .hero-floating-card:hover {
          transform: translateY(-7px) scale(1.03);

          border-color: rgba(158, 220, 255, 0.4);

          background: rgba(33, 29, 59, 0.9);
        }

        .hero-floating-icon {
          width: 33px;
          height: 33px;

          flex-shrink: 0;

          display: grid;

          place-items: center;

          border-radius: 10px;

          background: rgba(158, 220, 255, 0.12);

          color: var(--blog-blue);
        }

        .hero-floating-card strong {
          display: block;

          font-size: 11px;

          color: #ffffff;
        }

        .hero-floating-card small {
          display: block;

          margin-top: 3px;

          font-size: 9px;

          color: rgba(255, 255, 255, 0.45);
        }

        .hero-card-one {
          top: 42px;
          left: 10px;

          animation: floatingOne 5s ease-in-out infinite;
        }

        .hero-card-two {
          right: -2px;
          top: 155px;

          animation: floatingTwo 6s ease-in-out infinite;
        }

        .hero-card-three {
          left: 0;
          bottom: 48px;

          animation: floatingThree 5.5s ease-in-out infinite;
        }

        @keyframes floatingOne {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes floatingTwo {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(12px);
          }
        }

        @keyframes floatingThree {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        /* =====================================================
           CATEGORY
        ===================================================== */

        .blog-category-section {
          position: sticky;

          top: 0;

          z-index: 20;

          padding: 18px 0;

          background: rgba(255, 255, 255, 0.92);

          backdrop-filter: blur(18px);

          border-bottom: 1px solid var(--blog-border);
        }

        .blog-container {
          width: min(1180px, calc(100% - 40px));

          margin: auto;
        }

        .blog-category-inner {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;
        }

        .blog-category-label {
          font-size: 11px;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing: 0.14em;

          color: var(--blog-muted);

          white-space: nowrap;
        }

        .blog-category-list {
          display: flex;

          gap: 8px;

          overflow-x: auto;

          scrollbar-width: none;
        }

        .blog-category-list::-webkit-scrollbar {
          display: none;
        }

        .blog-category-btn {
          position: relative;

          flex: 0 0 auto;

          border: 1px solid var(--blog-border);

          background: #fff;

          color: var(--blog-dark);

          padding: 10px 17px;

          border-radius: 999px;

          font-size: 12px;

          font-weight: 600;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            color 0.25s ease,
            border-color 0.25s ease;
        }

        .blog-category-btn:hover {
          transform: translateY(-2px);

          border-color: var(--blog-blue-strong);
        }

        .blog-category-btn.active {
          background: var(--blog-dark);

          color: #fff;

          border-color: var(--blog-dark);
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .blog-content-section {
          position: relative;

          padding: 100px 0 120px;
        }

        .blog-section-heading {
          display: flex;

          align-items: end;

          justify-content: space-between;

          gap: 50px;

          margin-bottom: 45px;
        }

        .blog-heading-left {
          max-width: 690px;
        }

        .blog-small-title {
          display: inline-block;

          color: #69bce8;

          font-size: 12px;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing: 0.18em;

          margin-bottom: 15px;
        }

        .blog-section-heading h2 {
          margin: 0;

          font-size: clamp(38px, 5vw, 62px);

          line-height: 1;

          letter-spacing: -0.05em;
        }

        .blog-section-heading h2 span {
          color: #69bce8;
        }

        .blog-heading-description {
          margin: 20px 0 0;

          max-width: 650px;

          color: var(--blog-muted);

          font-size: 16px;

          line-height: 1.8;
        }

        /* =====================================================
           SEARCH
        ===================================================== */

        .blog-search {
          position: relative;

          width: min(330px, 100%);

          flex-shrink: 0;
        }

        .blog-search input {
          width: 100%;

          height: 50px;

          border: 1px solid var(--blog-border);

          border-radius: 12px;

          outline: none;

          padding: 0 50px 0 17px;

          color: var(--blog-dark);

          background: #fff;

          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .blog-search input:focus {
          border-color: var(--blog-blue-strong);

          box-shadow: 0 0 0 4px rgba(105, 201, 255, 0.1);
        }

        .blog-search svg {
          position: absolute;

          right: 17px;

          top: 50%;

          transform: translateY(-50%);

          color: var(--blog-muted);

          pointer-events: none;
        }

        /* =====================================================
           RESULTS
        ===================================================== */

        .blog-results-bar {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 22px;

          color: var(--blog-muted);

          font-size: 13px;
        }

        .blog-results-bar strong {
          color: var(--blog-dark);
        }

        .blog-active-category {
          padding: 7px 12px;

          border-radius: 999px;

          background: #edf8ff;

          color: #318dc0;

          font-weight: 700;
        }

        /* =====================================================
           GRID
        ===================================================== */

        .blog-grid {
          display: grid;

          grid-template-columns: repeat(3, minmax(0, 1fr));

          gap: 24px;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .blog-card {
          position: relative;

          overflow: hidden;

          border: 1px solid var(--blog-border);

          border-radius: 20px;

          background: #fff;

          box-shadow: 0 12px 40px rgba(23, 21, 47, 0.045);

          opacity: 0;

          transform: translateY(45px);

          transition:
            opacity 0.8s ease,
            transform 0.8s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .blog-reveal-left,
        .blog-reveal-up,
        .blog-reveal-right {
          opacity: 0;
        }

        .blog-reveal-left {
          transform: translateX(-45px);
        }

        .blog-reveal-up {
          transform: translateY(45px);
        }

        .blog-reveal-right {
          transform: translateX(45px);
        }

        .blog-reveal-left.is-visible,
        .blog-reveal-up.is-visible,
        .blog-reveal-right.is-visible {
          opacity: 1;

          transform: translate(0);
        }

        .blog-card:hover {
          transform: translateY(-9px) !important;

          border-color: rgba(105, 201, 255, 0.45);

          box-shadow: 0 28px 65px rgba(23, 21, 47, 0.12);
        }

        .blog-card-featured {
          grid-column: span 2;
        }

        .blog-card-featured .blog-card-image-wrap {
          height: 330px;
        }

        .blog-card-featured .blog-card-body h2 {
          font-size: 30px;
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .blog-card-image-wrap {
          position: relative;

          height: 230px;

          overflow: hidden;

          background: #edf1f5;
        }

        .blog-card-image {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          transition: transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .blog-card:hover .blog-card-image {
          transform: scale(1.07);
        }

        .blog-card-image-overlay {
          position: absolute;

          inset: 0;

          background: linear-gradient(to top, rgba(23, 21, 47, 0.5), transparent 55%);

          opacity: 0;

          transition: opacity 0.35s ease;
        }

        .blog-card:hover .blog-card-image-overlay {
          opacity: 1;
        }

        .blog-category-badge {
          position: absolute;

          top: 17px;

          left: 17px;

          z-index: 3;

          padding: 8px 12px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.94);

          color: var(--blog-dark);

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.04em;

          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .featured-badge {
          position: absolute;

          right: 17px;

          top: 17px;

          z-index: 3;

          display: inline-flex;

          align-items: center;

          gap: 6px;

          padding: 8px 11px;

          border-radius: 999px;

          background: var(--blog-dark);

          color: var(--blog-blue);

          font-size: 10px;

          font-weight: 800;
        }

        .blog-card-open {
          position: absolute;

          right: 18px;

          bottom: 18px;

          z-index: 3;

          width: 44px;

          height: 44px;

          display: grid;

          place-items: center;

          border-radius: 50%;

          background: var(--blog-blue);

          color: var(--blog-dark);

          transform: translateY(15px);

          opacity: 0;

          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        }

        .blog-card:hover .blog-card-open {
          opacity: 1;

          transform: translateY(0);
        }

        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .blog-card-body {
          padding: 25px;
        }

        .blog-card-meta {
          display: flex;

          align-items: center;

          gap: 9px;

          margin-bottom: 12px;

          color: var(--blog-muted);

          font-size: 11px;
        }

        .meta-dot {
          width: 4px;

          height: 4px;

          border-radius: 50%;

          background: var(--blog-blue-strong);
        }

        .blog-card-body h2 {
          margin: 0;

          color: var(--blog-dark);

          font-size: 22px;

          line-height: 1.25;

          letter-spacing: -0.025em;

          transition: color 0.25s ease;
        }

        .blog-card-body h2:hover {
          color: #318dc0;
        }

        .blog-card-body p {
          display: -webkit-box;

          -webkit-line-clamp: 3;

          -webkit-box-orient: vertical;

          overflow: hidden;

          margin: 14px 0 0;

          color: var(--blog-muted);

          font-size: 14px;

          line-height: 1.7;
        }

        /* =====================================================
           CARD FOOTER
        ===================================================== */

        .blog-card-bottom {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 15px;

          margin-top: 24px;

          padding-top: 17px;

          border-top: 1px solid var(--blog-border);
        }

        .blog-read-button {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          color: var(--blog-dark);

          font-size: 12px;

          font-weight: 800;

          text-decoration: none;
        }

        .read-arrow {
          width: 29px;

          height: 29px;

          display: grid;

          place-items: center;

          border-radius: 50%;

          background: #edf8ff;

          color: #318dc0;

          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .blog-read-button:hover .read-arrow {
          transform: translate(3px, -3px);

          background: var(--blog-blue);
        }

        .blog-engagement {
          display: flex;

          align-items: center;

          gap: 12px;
        }

        .blog-engagement-button,
        .blog-comment-count {
          display: inline-flex;

          align-items: center;

          gap: 5px;

          border: 0;

          background: transparent;

          color: var(--blog-muted);

          font-size: 11px;
        }

        .blog-engagement-button {
          cursor: pointer;

          padding: 4px;

          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }

        .blog-engagement-button:hover,
        .blog-engagement-button.liked {
          color: #318dc0;
        }

        .like-pop {
          animation: likePop 0.5s ease;
        }

        @keyframes likePop {
          0% {
            transform: scale(1);
          }

          35% {
            transform: scale(1.35);
          }

          65% {
            transform: scale(0.88);
          }

          100% {
            transform: scale(1);
          }
        }

        /* =====================================================
           LOADING / EMPTY
        ===================================================== */

        .blog-state {
          grid-column: 1 / -1;

          min-height: 260px;

          display: grid;

          place-items: center;

          border: 1px dashed var(--blog-border);

          border-radius: 20px;

          color: var(--blog-muted);

          background: var(--blog-soft);
        }

        .blog-loader {
          width: 35px;

          height: 35px;

          border: 3px solid #e5edf2;

          border-top-color: var(--blog-blue-strong);

          border-radius: 50%;

          animation: blogSpin 0.8s linear infinite;
        }

        @keyframes blogSpin {
          to {
            transform: rotate(360deg);
          }
        }

        /* =====================================================
           KNOWLEDGE SECTION
        ===================================================== */

        .blog-knowledge-section {
          position: relative;

          padding: 110px 0;

          overflow: hidden;

          background: var(--blog-dark);

          color: #fff;
        }

        .blog-knowledge-grid {
          display: grid;

          grid-template-columns:
            0.9fr
            1.1fr;

          gap: 80px;

          align-items: center;
        }

        .blog-knowledge-heading h2 {
          margin: 0;

          font-size: clamp(38px, 5vw, 64px);

          line-height: 1;

          letter-spacing: -0.05em;
        }

        .blog-knowledge-heading h2 span {
          color: var(--blog-blue);
        }

        .blog-knowledge-heading p {
          margin: 25px 0 0;

          color: rgba(255, 255, 255, 0.65);

          line-height: 1.8;
        }

        .knowledge-cards {
          display: grid;

          grid-template-columns: repeat(2, 1fr);

          gap: 14px;
        }

        .knowledge-card {
          position: relative;

          min-height: 180px;

          padding: 25px;

          border: 1px solid rgba(255, 255, 255, 0.1);

          border-radius: 18px;

          background: rgba(255, 255, 255, 0.035);

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .knowledge-card:hover {
          transform: translateY(-7px);

          background: rgba(158, 220, 255, 0.07);

          border-color: rgba(158, 220, 255, 0.28);
        }

        .knowledge-card-number {
          display: block;

          color: var(--blog-blue);

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.15em;

          margin-bottom: 30px;
        }

        .knowledge-card h3 {
          margin: 0;

          font-size: 19px;
        }

        .knowledge-card p {
          margin: 10px 0 0;

          color: rgba(255, 255, 255, 0.52);

          font-size: 13px;

          line-height: 1.6;
        }

        /* =====================================================
           PAGINATION
        ===================================================== */

        .blog-pagination {
          display: flex;

          justify-content: center;

          align-items: center;

          gap: 8px;

          margin-top: 55px;
        }

        .blog-page-button {
          width: 44px;

          height: 44px;

          display: grid;

          place-items: center;

          border: 1px solid var(--blog-border);

          border-radius: 50%;

          background: #fff;

          color: var(--blog-dark);

          cursor: pointer;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            color 0.25s ease;
        }

        .blog-page-button:hover:not(:disabled) {
          transform: translateY(-3px);

          background: var(--blog-dark);

          color: #fff;
        }

        .blog-page-button.active {
          background: var(--blog-blue);

          border-color: var(--blog-blue);
        }

        .blog-page-button:disabled {
          opacity: 0.35;

          cursor: not-allowed;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 980px) {
          .blog-hero-container {
            grid-template-columns: 1fr;

            gap: 20px;
          }

          .blog-new-hero {
            min-height: auto;

            padding: 100px 0 70px;
          }

          .blog-hero-visual {
            min-height: 420px;
          }

          .blog-section-heading {
            align-items: flex-start;

            flex-direction: column;
          }

          .blog-search {
            width: 100%;
          }

          .blog-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .blog-card-featured {
            grid-column: span 2;
          }

          .blog-knowledge-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 680px) {
          .blog-container,
          .blog-hero-container {
            width: min(calc(100% - 28px), 1180px);
          }

          .blog-new-hero {
            padding: 75px 0 55px;
          }

          .blog-hero-content-new h1 {
            font-size: 50px;
          }

          .blog-hero-content-new p {
            font-size: 15px;
          }

          .blog-hero-visual {
            min-height: 350px;

            transform: translateY(30px);
          }

          .blog-hero-visual-visible {
            transform: translateY(0);
          }

          .hero-orbit-system {
            width: 330px;
            height: 330px;
          }

          .hero-orbit-one {
            width: 330px;
            height: 330px;
          }

          .hero-orbit-two {
            width: 260px;
            height: 260px;
          }

          .hero-orbit-three {
            width: 190px;
            height: 190px;
          }

          .hero-center {
            width: 145px;
            height: 145px;
          }

          .hero-center-icon {
            width: 43px;
            height: 43px;
          }

          .hero-floating-card {
            min-width: 125px;

            padding: 9px 10px;
          }

          .hero-card-one {
            left: -5px;

            top: 30px;
          }

          .hero-card-two {
            right: -10px;

            top: 120px;
          }

          .hero-card-three {
            left: -5px;

            bottom: 35px;
          }

          .blog-category-section {
            position: relative;
          }

          .blog-category-inner {
            display: block;
          }

          .blog-category-label {
            display: block;

            margin-bottom: 12px;
          }

          .blog-content-section {
            padding: 70px 0 80px;
          }

          .blog-section-heading h2 {
            font-size: 43px;
          }

          .blog-grid {
            grid-template-columns: 1fr;
          }

          .blog-card-featured {
            grid-column: span 1;
          }

          .blog-card-featured .blog-card-image-wrap {
            height: 250px;
          }

          .blog-card-featured .blog-card-body h2 {
            font-size: 25px;
          }

          .blog-card-image-wrap {
            height: 220px;
          }

          .knowledge-cards {
            grid-template-columns: 1fr;
          }

          .blog-knowledge-section {
            padding: 75px 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .blog-page *,
          .blog-page *::before,
          .blog-page *::after {
            animation-duration: 0.01ms !important;

            animation-iteration-count: 1 !important;

            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <main className="blog-page">
        {/* =================================================
            BACKGROUND
        ================================================= */}

        <div className="blog-background-orb blog-orb-one" aria-hidden="true" />

        <div className="blog-background-orb blog-orb-two" aria-hidden="true" />

        {/* =================================================
            HERO
        ================================================= */}

        <section className="blog-new-hero">
          <div className="blog-hero-container">
            {/* HERO CONTENT */}

            <div className="blog-hero-content-new" ref={heroRef}>
              <span className="blog-hero-eyebrow">
                <Sparkles size={14} />
                Insights & Knowledge
              </span>

              <h1>
                Ideas that
                <span>move forward.</span>
              </h1>

              <p>
                Ideas, insights and practical knowledge from the world of cooperative agriculture,
                finance and business.
              </p>

              <span className="blog-hero-line" aria-hidden="true" />
            </div>

            {/* =================================================
                INTERACTIVE CIRCLE
            ================================================= */}

            <div className="blog-hero-visual" ref={heroVisualRef}>
              <div className="hero-orbit-system">
                <div className="hero-glow" />

                {/* OUTER ORBIT */}

                <div className="hero-orbit hero-orbit-one">
                  <span className="hero-orbit-dot hero-dot-one" />
                  <span className="hero-orbit-dot hero-dot-two" />
                </div>

                {/* MIDDLE ORBIT */}

                <div className="hero-orbit hero-orbit-two">
                  <span className="hero-orbit-dot hero-dot-three" />
                </div>

                {/* INNER ORBIT */}

                <div className="hero-orbit hero-orbit-three" />

                {/* CENTER */}

                <div className="hero-center">
                  <div className="hero-center-icon">
                    <BookOpen size={24} />
                  </div>

                  <strong>Vishwasai</strong>

                  <span>Insights</span>
                </div>

                {/* FLOATING CARD 1 */}

                <div className="hero-floating-card hero-card-one">
                  <div className="hero-floating-icon">
                    <TrendingUp size={16} />
                  </div>

                  <div>
                    <strong>Growth</strong>

                    <small>Business Insights</small>
                  </div>
                </div>

                {/* FLOATING CARD 2 */}

                <div className="hero-floating-card hero-card-two">
                  <div className="hero-floating-icon">
                    <BarChart3 size={16} />
                  </div>

                  <div>
                    <strong>Finance</strong>

                    <small>Smart Decisions</small>
                  </div>
                </div>

                {/* FLOATING CARD 3 */}

                <div className="hero-floating-card hero-card-three">
                  <div className="hero-floating-icon">
                    <Lightbulb size={16} />
                  </div>

                  <div>
                    <strong>Ideas</strong>

                    <small>Practical Knowledge</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            CATEGORY NAVIGATION
        ================================================= */}

        <section className="blog-category-section">
          <div className="blog-container blog-category-inner">
            <span className="blog-category-label">Explore Topics</span>

            <div className="blog-category-list">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`blog-category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================
            BLOG CONTENT
        ================================================= */}

        <section className="blog-content-section">
          <div className="blog-container">
            <div className="blog-section-heading">
              <div className="blog-heading-left">
                <span className="blog-small-title">Latest Knowledge</span>

                <h2>
                  Explore our
                  <span> insights.</span>
                </h2>

                <p className="blog-heading-description">
                  Discover practical perspectives and ideas covering cooperative finance,
                  agriculture, NBFCs, funding and business development.
                </p>
              </div>

              <form className="blog-search" onSubmit={(event) => event.preventDefault()}>
                <input
                  type="text"
                  value={searchTerm}
                  placeholder="Search insights..."
                  onChange={(event) => {
                    setSearchTerm(event.target.value);

                    setPage(1);
                  }}
                  aria-label="Search blogs"
                />

                <Search size={18} />
              </form>
            </div>

            {/* RESULTS */}

            <div className="blog-results-bar">
              <span>
                Showing <strong>{filteredBlogs.length}</strong> insights
              </span>

              <span className="blog-active-category">{activeCategory}</span>
            </div>

            {/* LOADING */}

            {isLoading ? (
              <div className="blog-grid">
                <div className="blog-state">
                  <div className="blog-loader" />
                </div>
              </div>
            ) : error ? (
              <div className="blog-grid">
                <div className="blog-state">
                  <p>{error}</p>
                </div>
              </div>
            ) : (
              <div className="blog-grid">
                {filteredBlogs.length === 0 ? (
                  <div className="blog-state">
                    <p>No insights found for your search.</p>
                  </div>
                ) : (
                  filteredBlogs.map((blog, index) => (
                    <BlogCard key={blog.id} blog={blog} index={index} />
                  ))
                )}
              </div>
            )}

            {/* =================================================
                PAGINATION
            ================================================= */}

            <div className="blog-pagination" aria-label="Blog pagination">
              <button
                type="button"
                className="blog-page-button"
                aria-label="Previous page"
                disabled={isLoading || page <= 1}
                onClick={() => setPage((value) => Math.max(1, value - 1))}
              >
                <ChevronLeft size={17} />
              </button>

              <button type="button" className="blog-page-button active" disabled>
                {String(page).padStart(2, '0')}
              </button>

              <button
                type="button"
                className="blog-page-button"
                aria-label="Next page"
                disabled={isLoading || page >= totalPages}
                onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </section>

        {/* =================================================
            KNOWLEDGE SECTION
        ================================================= */}

        <section className="blog-knowledge-section">
          <div className="blog-container">
            <div className="blog-knowledge-grid">
              <div className="blog-knowledge-heading">
                <span className="blog-small-title">Knowledge Areas</span>

                <h2>
                  Insights across
                  <span> industries.</span>
                </h2>

                <p>
                  Explore perspectives relevant to the organizations, institutions and businesses we
                  support.
                </p>
              </div>

              <div className="knowledge-cards">
                <article className="knowledge-card">
                  <span className="knowledge-card-number">01</span>

                  <h3>Cooperative Finance</h3>

                  <p>
                    Cooperative societies, credit societies, multistate cooperatives and financial
                    developments.
                  </p>
                </article>

                <article className="knowledge-card">
                  <span className="knowledge-card-number">02</span>

                  <h3>NBFC Consultancy</h3>

                  <p>
                    Regulatory developments, establishment, financial structuring and strategic
                    advisory.
                  </p>
                </article>

                <article className="knowledge-card">
                  <span className="knowledge-card-number">03</span>

                  <h3>Agriculture & FPO</h3>

                  <p>
                    Farmer Producer Organisations, agricultural businesses and cooperative
                    agriculture.
                  </p>
                </article>

                <article className="knowledge-card">
                  <span className="knowledge-card-number">04</span>

                  <h3>Business & Funding</h3>

                  <p>
                    Funding, management, business development and strategic growth perspectives.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
