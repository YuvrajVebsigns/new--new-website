// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useParams } from 'next/navigation';
// import { ArrowUpLeft } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import useScrollAnimation from '../../../hooks/useScrollAnimation';
// import {
//   fetchWebsiteBlogBySlug,
//   type WebsiteBlogContentBlock,
//   type WebsiteBlogDetailItem,
// } from '@/services/blogs.service';

// function AnimatedBlock({
//   children,
//   className = '',
//   animationClass = 'animate-fade-in',
//   initialTransform = 'translateY(24px)',
// }: {
//   children: React.ReactNode;
//   className?: string;
//   animationClass?: string;
//   initialTransform?: string;
// }) {
//   const ref = useScrollAnimation<HTMLDivElement>({ animationClass, initialTransform });

//   return (
//     <div ref={ref} className={className}>
//       {children}
//     </div>
//   );
// }

// function formatPublishedDate(value?: string) {
//   if (!value) return '';

//   const parsed = new Date(value);
//   if (Number.isNaN(parsed.getTime())) return '';

//   return parsed.toLocaleDateString('en-US', {
//     month: 'long',
//     day: 'numeric',
//     year: 'numeric',
//   });
// }

// function getBlogImage(blog?: WebsiteBlogDetailItem | null): string {
//   if (blog?.featureImage?.large) return blog.featureImage.large;
//   if (blog?.seo?.ogImage?.original) return blog.seo.ogImage.original;
//   if (blog?.seo?.ogImage?.large) return blog.seo.ogImage.large;
//   return '/assets/blogs/p1.jpg';
// }

// const BLOG_FALLBACK_IMAGE = '/assets/blogs/p1.jpg';

// function getBlogCategory(blog?: WebsiteBlogDetailItem | null) {
//   return blog?.websites?.[0]?.name || blog?.tags?.[0] || 'Blog';
// }

// function getBlogContentBlocks(blog?: WebsiteBlogDetailItem | null) {
//   return Array.isArray(blog?.content?.blocks) ? blog.content.blocks : [];
// }

// function isObject(value: unknown): value is Record<string, unknown> {
//   return typeof value === 'object' && value !== null;
// }

// function renderBlock(block: WebsiteBlogContentBlock | null | undefined, index: number) {
//   if (!isObject(block)) return null;

//   const key = typeof block.id === 'string' ? block.id : `${String(block.type ?? 'block')}-${index}`;
//   const type = typeof block.type === 'string' ? block.type.toLowerCase() : '';
//   const data = isObject(block.data) ? block.data : undefined;

//   if (type === 'header') {
//     const level = typeof data?.level === 'number' ? data.level : 2;
//     const text = typeof data?.text === 'string' ? data.text.trim() : '';
//     if (!text) return null;

//     if (level <= 2) {
//       return (
//         <h2 key={key} className="blog-content-heading">
//           {text}
//         </h2>
//       );
//     }

//     return (
//       <h3 key={key} className="blog-content-subheading">
//         {text}
//       </h3>
//     );
//   }

//   if (type === 'paragraph') {
//     const text = typeof data?.text === 'string' ? data.text.trim() : '';
//     if (!text) return null;

//     return (
//       <p key={key} className="blog-content-paragraph" dangerouslySetInnerHTML={{ __html: text }} />
//     );
//   }

//   if (type === 'list') {
//     const items = Array.isArray(data?.items)
//       ? data.items.filter((item): item is string => typeof item === 'string')
//       : [];

//     if (!items.length) return null;

//     return (
//       <ul key={key} className="overview-list">
//         {items.map((item) => (
//           <li key={item}>
//             <strong>{item}</strong>
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   if (type === 'image') {
//     const file = isObject(data?.file) ? data.file : undefined;
//     const url = typeof file?.url === 'string' ? file.url : '';
//     if (!url) return null;

//     return (
//       <div key={key} className="blog-content-image-wrap">
//         <Image
//           src={url}
//           alt={typeof data?.caption === 'string' ? data.caption : 'Blog image'}
//           width={1200}
//           height={675}
//           className="blog-content-image"
//           unoptimized
//           onError={(e) => {
//             const img = e.currentTarget as HTMLImageElement | null;
//             if (img && img.src.indexOf(BLOG_FALLBACK_IMAGE) === -1) img.src = BLOG_FALLBACK_IMAGE;
//           }}
//         />
//       </div>
//     );
//   }

//   if (type === 'quote') {
//     const text = typeof data?.text === 'string' ? data.text.trim() : '';
//     if (!text) return null;

//     return (
//       <blockquote key={key} className="blog-content-quote">
//         {text}
//       </blockquote>
//     );
//   }

//   if (type === 'delimiter') {
//     return <hr key={key} style={{ margin: '24px 0' }} />;
//   }

//   return null;
// }

// export default function BlogDetailsPage() {
//   const params = useParams<{ slug?: string | string[] }>();
//   const slug = Array.isArray(params?.slug) ? params.slug[0] : (params?.slug ?? '');

//   const [blog, setBlog] = useState<WebsiteBlogDetailItem | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [showShareOptions, setShowShareOptions] = useState(false);

//   useEffect(() => {
//     let isMounted = true;

//     async function loadBlog() {
//       if (!slug) {
//         if (isMounted) {
//           setError('Blog slug is missing.');
//           setIsLoading(false);
//         }
//         return;
//       }

//       setIsLoading(true);
//       setError(null);

//       try {
//         const response = await fetchWebsiteBlogBySlug(slug);

//         if (isMounted) {
//           setBlog(response);
//           setError(response ? null : 'Blog not found.');
//         }
//       } catch (fetchError) {
//         if (isMounted) {
//           setBlog(null);
//           setError(fetchError instanceof Error ? fetchError.message : 'Failed to load blog');
//         }
//       } finally {
//         if (isMounted) {
//           setIsLoading(false);
//         }
//       }
//     }

//     loadBlog();

//     return () => {
//       isMounted = false;
//     };
//   }, [slug]);

//   if (isLoading) {
//     return (
//       <main className="blog-detail-page">
//         <p style={{ padding: '80px 20px', textAlign: 'center' }}>Loading blog...</p>
//       </main>
//     );
//   }

//   if (error || !blog) {
//     return (
//       <main className="not-found-page">
//         <Image src="/assets/404.png" alt="Blog Not Found" width={700} height={500} />

//         <h1>Blog Not Found</h1>

//         <p>
//           The article you&apos;re looking for may have been moved, removed, or is no longer
//           available. Discover our latest blogs and stay informed with fresh insights.
//         </p>

//         <Link href="/blog" className="backbutton">
//           <div className="backbutton-icon">
//             <ArrowUpLeft size={18} />
//           </div>

//           <span>Back to Blog</span>
//         </Link>
//       </main>
//     );
//   }

//   const displayTitle = blog.title;
//   const displayCategory = getBlogCategory(blog);
//   const displayDate = formatPublishedDate(blog.publishedAt);
//   const displayImage = getBlogImage(blog);
//   const contentBlocks = getBlogContentBlocks(blog);
//   const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/blog/${slug}` : '';

//   function openExternal(url: string) {
//     try {
//       window.open(url, '_blank', 'noopener');
//     } catch (_) {
//       // ignore
//     }
//   }
//   async function handleShareWhatsApp() {
//     const waUrl = `https://web.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`;
//     openExternal(waUrl);
//     setShowShareOptions(false);
//   }

//   async function handleShareFacebook() {
//     const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
//     openExternal(fbUrl);
//     setShowShareOptions(false);
//   }

//   async function handleShareTwitter() {
//     const twUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(displayTitle || '')}&url=${encodeURIComponent(shareUrl)}`;
//     openExternal(twUrl);
//     setShowShareOptions(false);
//   }

//   async function handleShareInstagram() {
//     const igWeb = `https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`;
//     openExternal(igWeb);
//     setShowShareOptions(false);
//   }

//   // minimal helpers kept; unused icon components removed to satisfy linter

//   async function copyLinkToClipboard() {
//     try {
//       await navigator.clipboard.writeText(shareUrl);
//       // Small UX feedback could be added here (toast), kept minimal per request
//     } catch (_) {
//       // ignore
//     }
//   }

//   return (
//     <main className="blog-detail-page">
//       <article className="blogpage-card blogpage-stacked">
//         <AnimatedBlock
//           className="blogpage-media"
//           animationClass="animate-fade-in"
//           initialTransform="translateY(28px)"
//         >
//           <Image
//             src={displayImage}
//             alt={displayTitle}
//             fill
//             priority
//             className="blogpage-media-image"
//             unoptimized
//             onError={(e) => {
//               const img = e.currentTarget as HTMLImageElement | null;
//               if (img && img.src.indexOf(BLOG_FALLBACK_IMAGE) === -1) img.src = BLOG_FALLBACK_IMAGE;
//             }}
//           />
//         </AnimatedBlock>

//         <div className="blogpage-body blog-detail-layout">
//           <AnimatedBlock
//             className="blogpage-content"
//             animationClass="animate-fade-in-left"
//             initialTransform="translateX(-24px)"
//           >
//             <div className="blogpage-meta">
//               <span className="blogpage-category">{displayCategory}</span>
//             </div>

//             <h1 className="blogpage-title">{displayTitle}</h1>

//             {displayDate ? (
//               <div className="blogpage-meta" style={{ marginBottom: '18px' }}>
//                 Published on {displayDate}
//               </div>
//             ) : null}

//             <div className="blog-content-blocks">
//               {contentBlocks.map((block, index) => renderBlock(block, index))}
//             </div>

//             <div className="blog-detail-actions">
//               <AnimatedBlock
//                 className="blog-back-link"
//                 animationClass="animate-fade-in"
//                 initialTransform="translateY(18px)"
//               >
//                 <div className="share-container">
//                   {/* <button
//                     type="button"
//                     className="talk-btn"
//                     onClick={() => setShowShareOptions((s) => !s)}
//                     aria-expanded={showShareOptions}
//                     aria-haspopup="menu"
//                     id="share-button"
//                   >
//                     <span>Share Blog</span>
//                     <div className="talk-btn-icon">
//                       <ArrowUpRight size={18} />
//                     </div>
//                   </button> */}

//                   <br />

//                   {showShareOptions ? (
//                     <div className="share-popup" role="menu" aria-labelledby="share-button">
//                       <button
//                         type="button"
//                         onClick={handleShareWhatsApp}
//                         className="share-option whatsapp"
//                       >
//                         {/* <span style={{ display: 'inline-flex', marginRight: 8 }}>
//                         <WhatsAppIcon />
//                       </span> */}
//                         <span>WhatsApp</span>
//                       </button>

//                       <button
//                         type="button"
//                         onClick={handleShareFacebook}
//                         className="share-option facebook"
//                       >
//                         {/* <span style={{ display: 'inline-flex', marginRight: 8 }}>
//                         <FacebookIcon />
//                       </span> */}
//                         <span>Facebook</span>
//                       </button>

//                       <button
//                         type="button"
//                         onClick={handleShareTwitter}
//                         className="share-option twitter"
//                       >
//                         {/* <span style={{ display: 'inline-flex', marginRight: 8 }}>
//                         <TwitterIcon />
//                       </span> */}
//                         <span>Twitter</span>
//                       </button>

//                       <button
//                         type="button"
//                         onClick={handleShareInstagram}
//                         className="share-option instagram"
//                       >
//                         {/* <span style={{ display: 'inline-flex', marginRight: 8 }}>
//                         <InstagramIcon />
//                       </span> */}
//                         <span>Instagram</span>
//                       </button>

//                       <button
//                         type="button"
//                         onClick={copyLinkToClipboard}
//                         className="share-option copy"
//                       >
//                         {/* <span style={{ display: 'inline-flex', marginRight: 8 }}>
//                         <LinkIcon />
//                       </span> */}
//                         <span>Copy Link</span>
//                       </button>
//                     </div>
//                   ) : null}
//                 </div>
//               </AnimatedBlock>
//             </div>
//           </AnimatedBlock>

//           {/* <aside className="blog-comments-side-card">
//             <h3 className="blog-comments-side-card-title">Comments</h3>

//             {blog.id ? (
//               <BlogCommentsPanel blogId={String(blog.id)} />
//             ) : (
//               <p>No comments available.</p>
//             )}
//           </aside> */}
//         </div>
//       </article>
//     </main>
//   );
// }

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowUp,
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock,
  Copy,
  Share2,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

import useScrollAnimation from '../../../hooks/useScrollAnimation';

import {
  fetchWebsiteBlogBySlug,
  type WebsiteBlogContentBlock,
  type WebsiteBlogDetailItem,
} from '@/services/blogs.service';

/* =========================================================
   TYPES
========================================================= */

type RenderedBlockInfo = {
  id: string;
  type: string;
  text: string;
};

/* =========================================================
   CONSTANTS
========================================================= */

const BLOG_FALLBACK_IMAGE = '/assets/blogs/p1.jpg';

/* =========================================================
   ANIMATED BLOCK
========================================================= */

function AnimatedBlock({
  children,
  className = '',
  animationClass = 'animate-fade-in',
  initialTransform = 'translateY(24px)',
}: {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  initialTransform?: string;
}) {
  const ref = useScrollAnimation<HTMLDivElement>({
    animationClass,
    initialTransform,
    threshold: 0.08,
    once: false,
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* =========================================================
   HELPERS
========================================================= */

function formatPublishedDate(value?: string) {
  if (!value) return '';

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) return '';

  return parsed.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function getBlogImage(blog?: WebsiteBlogDetailItem | null): string {
  if (blog?.featureImage?.large) return blog.featureImage.large;

  if (blog?.seo?.ogImage?.original) {
    return blog.seo.ogImage.original;
  }

  if (blog?.seo?.ogImage?.large) {
    return blog.seo.ogImage.large;
  }

  return BLOG_FALLBACK_IMAGE;
}

function getBlogCategory(blog?: WebsiteBlogDetailItem | null) {
  return blog?.websites?.[0]?.name || blog?.tags?.[0] || 'Blog';
}

function getBlogContentBlocks(blog?: WebsiteBlogDetailItem | null) {
  return Array.isArray(blog?.content?.blocks) ? blog.content.blocks : [];
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

/* =========================================================
   TEXT EXTRACTION
========================================================= */

function getBlockText(block: WebsiteBlogContentBlock | null | undefined): string {
  if (!isObject(block)) return '';

  const data = isObject(block.data) ? block.data : undefined;
  const type = typeof block.type === 'string' ? block.type.toLowerCase() : '';

  if (type === 'header' || type === 'paragraph' || type === 'quote') {
    return typeof data?.text === 'string' ? data.text.trim() : '';
  }

  if (type === 'list') {
    const items = Array.isArray(data?.items)
      ? data.items.filter((item): item is string => typeof item === 'string')
      : [];

    return items.join(' ');
  }

  return '';
}

/* =========================================================
   CONTENT RENDERER
========================================================= */

function renderBlock(block: WebsiteBlogContentBlock | null | undefined, index: number) {
  if (!isObject(block)) return null;

  const key = typeof block.id === 'string' ? block.id : `${String(block.type ?? 'block')}-${index}`;

  const type = typeof block.type === 'string' ? block.type.toLowerCase() : '';

  const data = isObject(block.data) ? block.data : undefined;

  /* HEADER */

  if (type === 'header') {
    const level = typeof data?.level === 'number' ? data.level : 2;

    const text = typeof data?.text === 'string' ? data.text.trim() : '';

    if (!text) return null;

    if (level <= 2) {
      return (
        <AnimatedBlock
          key={key}
          className="blog-detail-block blog-detail-heading-wrap"
          animationClass="animate-fade-in-left"
          initialTransform="translateX(-25px)"
        >
          <h2 className="blog-content-heading">
            <span className="heading-accent" />
            {text}
          </h2>
        </AnimatedBlock>
      );
    }

    return (
      <AnimatedBlock
        key={key}
        className="blog-detail-block"
        animationClass="animate-fade-in"
        initialTransform="translateY(20px)"
      >
        <h3 className="blog-content-subheading">{text}</h3>
      </AnimatedBlock>
    );
  }

  /* PARAGRAPH */

  if (type === 'paragraph') {
    const text = typeof data?.text === 'string' ? data.text.trim() : '';

    if (!text) return null;

    return (
      <AnimatedBlock
        key={key}
        className="blog-detail-block"
        animationClass="animate-fade-in"
        initialTransform="translateY(22px)"
      >
        <p
          className="blog-content-paragraph"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </AnimatedBlock>
    );
  }

  /* LIST */

  if (type === 'list') {
    const items = Array.isArray(data?.items)
      ? data.items.filter((item): item is string => typeof item === 'string')
      : [];

    if (!items.length) return null;

    return (
      <AnimatedBlock
        key={key}
        className="blog-detail-block"
        animationClass="animate-fade-in"
        initialTransform="translateY(24px)"
      >
        <ul className="overview-list">
          {items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>
              <span className="list-number">{String(itemIndex + 1).padStart(2, '0')}</span>

              <strong>{item}</strong>
            </li>
          ))}
        </ul>
      </AnimatedBlock>
    );
  }

  /* IMAGE */

  if (type === 'image') {
    const file = isObject(data?.file) ? data.file : undefined;

    const url = typeof file?.url === 'string' ? file.url : '';

    if (!url) return null;

    return (
      <AnimatedBlock
        key={key}
        className="blog-detail-block"
        animationClass="animate-scale-in"
        initialTransform="scale(0.96)"
      >
        <figure className="blog-content-image-wrap">
          <div className="blog-image-shine" />

          <Image
            src={url}
            alt={typeof data?.caption === 'string' ? data.caption : 'Blog image'}
            width={1200}
            height={675}
            className="blog-content-image"
            unoptimized
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement | null;

              if (img && img.src.indexOf(BLOG_FALLBACK_IMAGE) === -1) {
                img.src = BLOG_FALLBACK_IMAGE;
              }
            }}
          />

          {typeof data?.caption === 'string' && data.caption.trim() ? (
            <figcaption>{data.caption}</figcaption>
          ) : null}
        </figure>
      </AnimatedBlock>
    );
  }

  /* QUOTE */

  if (type === 'quote') {
    const text = typeof data?.text === 'string' ? data.text.trim() : '';

    if (!text) return null;

    return (
      <AnimatedBlock
        key={key}
        className="blog-detail-block"
        animationClass="animate-fade-in-right"
        initialTransform="translateX(30px)"
      >
        <blockquote className="blog-content-quote">
          <span className="quote-symbol">“</span>

          <span className="quote-text">{text}</span>

          <span className="quote-line" />
        </blockquote>
      </AnimatedBlock>
    );
  }

  /* DELIMITER */

  if (type === 'delimiter') {
    return (
      <AnimatedBlock
        key={key}
        className="blog-detail-block"
        animationClass="animate-fade-in"
        initialTransform="translateY(10px)"
      >
        <div className="blog-content-divider">
          <span />
          <span />
          <span />
        </div>
      </AnimatedBlock>
    );
  }

  return null;
}

/* =========================================================
   PAGE
========================================================= */

export default function BlogDetailsPage() {
  const params = useParams<{ slug?: string | string[] }>();

  const slug = Array.isArray(params?.slug) ? params.slug[0] : (params?.slug ?? '');

  const [blog, setBlog] = useState<WebsiteBlogDetailItem | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  const [showShareOptions, setShowShareOptions] = useState(false);

  const [copied, setCopied] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  const [showTopButton, setShowTopButton] = useState(false);

  const [activeHeading, setActiveHeading] = useState(0);

  const heroRef = useRef<HTMLDivElement | null>(null);

  /* =====================================================
     LOAD BLOG
  ===================================================== */

  useEffect(() => {
    let isMounted = true;

    async function loadBlog() {
      if (!slug) {
        if (isMounted) {
          setError('Blog slug is missing.');
          setIsLoading(false);
        }

        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchWebsiteBlogBySlug(slug);

        if (isMounted) {
          setBlog(response);

          setError(response ? null : 'Blog not found.');
        }
      } catch (fetchError) {
        if (isMounted) {
          setBlog(null);

          setError(fetchError instanceof Error ? fetchError.message : 'Failed to load blog');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadBlog();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  /* =====================================================
     SCROLL EFFECTS
  ===================================================== */

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

      const progress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));

      setShowTopButton(scrollTop > 600);

      if (heroRef.current) {
        const offset = Math.min(scrollTop * 0.12, 100);

        heroRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    updateScroll();

    window.addEventListener('scroll', updateScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  /* =====================================================
     BLOG DATA
  ===================================================== */

  const displayTitle = blog?.title || '';

  const displayCategory = getBlogCategory(blog);

  const displayDate = formatPublishedDate(blog?.publishedAt);

  const displayImage = getBlogImage(blog);

  const contentBlocks = getBlogContentBlocks(blog);

  /* =====================================================
     READING TIME
  ===================================================== */

  const readingTime = useMemo(() => {
    const text = contentBlocks.map(getBlockText).join(' ');

    const words = text.split(/\s+/).filter(Boolean).length;

    return Math.max(1, Math.ceil(words / 200));
  }, [contentBlocks]);

  /* =====================================================
     HEADINGS
  ===================================================== */

  const headings: RenderedBlockInfo[] = useMemo(() => {
    return contentBlocks
      .map((block, index) => {
        if (!isObject(block)) {
          return null;
        }

        const type = typeof block.type === 'string' ? block.type.toLowerCase() : '';

        const data = isObject(block.data) ? block.data : undefined;

        if (type !== 'header') {
          return null;
        }

        const text = typeof data?.text === 'string' ? data.text.trim() : '';

        if (!text) {
          return null;
        }

        return {
          id: typeof block.id === 'string' ? block.id : `heading-${index}`,
          type,
          text,
        };
      })
      .filter((item): item is RenderedBlockInfo => item !== null);
  }, [contentBlocks]);

  /* =====================================================
     SHARE URL
  ===================================================== */

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/blog/${slug}` : '';

  function openExternal(url: string) {
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      // Ignore
    }
  }

  function handleShareWhatsApp() {
    const url = `https://web.whatsapp.com/send?text=${encodeURIComponent(
      `${displayTitle} ${shareUrl}`,
    )}`;

    openExternal(url);
    setShowShareOptions(false);
  }

  function handleShareFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

    openExternal(url);
    setShowShareOptions(false);
  }

  function handleShareTwitter() {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      displayTitle,
    )}&url=${encodeURIComponent(shareUrl)}`;

    openExternal(url);
    setShowShareOptions(false);
  }

  function handleShareInstagram() {
    openExternal(`https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`);

    setShowShareOptions(false);
  }

  async function copyLinkToClipboard() {
    try {
      await navigator.clipboard.writeText(shareUrl);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch {
      // Ignore
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function scrollToHeading(index: number) {
    setActiveHeading(index);

    const headingsElements = document.querySelectorAll('.blog-content-heading');

    const target = headingsElements[index];

    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 130;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  }

  /* =====================================================
     LOADING
  ===================================================== */

  if (isLoading) {
    return (
      <>
        <style>{BLOG_DETAIL_CSS}</style>

        <main className="blog-detail-page">
          <div className="blog-detail-loader">
            <div className="loader-orbit">
              <span />
            </div>

            <p>Loading article</p>

            <span className="loader-dots">...</span>
          </div>
        </main>
      </>
    );
  }

  /* =====================================================
     NOT FOUND
  ===================================================== */

  if (error || !blog) {
    return (
      <>
        <style>{BLOG_DETAIL_CSS}</style>

        <main className="blog-detail-not-found">
          <div className="not-found-decoration">404</div>

          <Image src="/assets/404.png" alt="Blog Not Found" width={520} height={380} />

          <span className="blog-small-label">ARTICLE NOT FOUND</span>

          <h1>This story is no longer here.</h1>

          <p>
            The article you&apos;re looking for may have been moved, removed, or is no longer
            available.
          </p>

          <Link href="/blog" className="blog-back-button">
            <span className="blog-back-icon">
              <ArrowUpLeft size={18} />
            </span>

            <span>Back to Blog</span>

            <ArrowUpRight size={17} />
          </Link>
        </main>
      </>
    );
  }

  /* =====================================================
     MAIN PAGE
  ===================================================== */

  return (
    <>
      <style>{BLOG_DETAIL_CSS}</style>

      <main className="blog-detail-page">
        {/* ================================================
            SCROLL PROGRESS
        ================================================= */}

        <div className="blog-progress-track" aria-hidden="true">
          <span
            style={{
              width: `${scrollProgress}%`,
            }}
          />
        </div>

        {/* ================================================
            HERO
        ================================================= */}

        <section className="blog-detail-hero">
          <div ref={heroRef} className="blog-detail-hero-image">
            <Image
              src={displayImage}
              alt={displayTitle}
              fill
              priority
              className="blog-detail-cover"
              unoptimized
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement | null;

                if (img && img.src.indexOf(BLOG_FALLBACK_IMAGE) === -1) {
                  img.src = BLOG_FALLBACK_IMAGE;
                }
              }}
            />
          </div>

          <div className="blog-detail-hero-overlay" />

          <div className="blog-detail-hero-grid" />

          <div className="blog-detail-hero-content">
            <AnimatedBlock
              animationClass="animate-fade-in-left"
              initialTransform="translateX(-45px)"
            >
              <Link href="/blog" className="blog-detail-back">
                <ArrowUpLeft size={17} />

                <span>Back to Insights</span>
              </Link>
            </AnimatedBlock>

            <AnimatedBlock animationClass="animate-fade-in" initialTransform="translateY(30px)">
              <div className="blog-detail-category">
                <span />
                {displayCategory}
              </div>
            </AnimatedBlock>

            <AnimatedBlock animationClass="animate-fade-in" initialTransform="translateY(35px)">
              <h1>{displayTitle}</h1>
            </AnimatedBlock>

            <AnimatedBlock animationClass="animate-fade-in" initialTransform="translateY(25px)">
              <div className="blog-detail-hero-meta">
                {displayDate ? <span>{displayDate}</span> : null}

                <span className="meta-divider" />

                <span>
                  <Clock size={15} />
                  {readingTime} min read
                </span>
              </div>
            </AnimatedBlock>
          </div>

          <div className="hero-scroll-indicator">
            <span>Scroll to explore</span>

            <ChevronDown size={18} />
          </div>
        </section>

        {/* ================================================
            ARTICLE AREA
        ================================================= */}

        <section className="blog-detail-main">
          <div className="blog-detail-container">
            <div className="blog-detail-layout">
              {/* ==========================================
                  SIDEBAR
              ========================================== */}

              <aside className="blog-detail-sidebar">
                <div className="sidebar-sticky">
                  <div className="sidebar-label">ARTICLE</div>

                  <div className="sidebar-line" />

                  {headings.length > 0 ? (
                    <div className="blog-toc">
                      {headings.map((heading, index) => (
                        <button
                          key={heading.id}
                          type="button"
                          className={activeHeading === index ? 'toc-active' : ''}
                          onClick={() => scrollToHeading(index)}
                        >
                          <span>{String(index + 1).padStart(2, '0')}</span>

                          <strong>{heading.text}</strong>
                        </button>
                      ))}
                    </div>
                  ) : null}

                  <div className="sidebar-share">
                    <span>Share</span>

                    <button
                      type="button"
                      onClick={() => setShowShareOptions((value) => !value)}
                      aria-expanded={showShareOptions}
                      className="sidebar-share-button"
                    >
                      <Share2 size={17} />
                    </button>
                  </div>

                  {showShareOptions ? (
                    <div className="sidebar-share-menu">
                      <button type="button" onClick={handleShareWhatsApp}>
                        WhatsApp
                      </button>

                      <button type="button" onClick={handleShareFacebook}>
                        Facebook
                      </button>

                      <button type="button" onClick={handleShareTwitter}>
                        X / Twitter
                      </button>

                      <button type="button" onClick={handleShareInstagram}>
                        Instagram
                      </button>

                      <button type="button" onClick={copyLinkToClipboard}>
                        {copied ? (
                          <>
                            <Check size={15} />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy size={15} />
                            Copy Link
                          </>
                        )}
                      </button>
                    </div>
                  ) : null}
                </div>
              </aside>

              {/* ==========================================
                  ARTICLE
              ========================================== */}

              <article className="blog-detail-article">
                <AnimatedBlock
                  className="article-introduction"
                  animationClass="animate-fade-in"
                  initialTransform="translateY(25px)"
                >
                  <span className="article-kicker">INSIGHTS & KNOWLEDGE</span>

                  <div className="article-intro-line" />

                  <p>
                    Practical insights and knowledge for organizations navigating cooperative
                    agriculture, finance and business.
                  </p>
                </AnimatedBlock>

                <div className="blog-content-blocks">
                  {contentBlocks.map((block, index) => renderBlock(block, index))}
                </div>

                {/* ======================================
                    SHARE PANEL
                ====================================== */}

                <AnimatedBlock
                  className="article-share-card"
                  animationClass="animate-fade-in"
                  initialTransform="translateY(30px)"
                >
                  <div>
                    <span>Enjoyed this insight?</span>

                    <h3>Share the knowledge.</h3>
                  </div>

                  <div className="article-share-actions">
                    <button type="button" onClick={handleShareWhatsApp}>
                      WhatsApp
                    </button>

                    <button type="button" onClick={handleShareFacebook}>
                      Facebook
                    </button>

                    <button type="button" onClick={handleShareTwitter}>
                      X
                    </button>

                    <button
                      type="button"
                      onClick={copyLinkToClipboard}
                      className={copied ? 'copied' : ''}
                    >
                      {copied ? (
                        <>
                          <Check size={15} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={15} />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </AnimatedBlock>

                {/* ======================================
                    END CARD
                ====================================== */}

                <AnimatedBlock
                  className="article-end-card"
                  animationClass="animate-fade-in"
                  initialTransform="translateY(25px)"
                >
                  <div className="end-card-decoration">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span>VISHWASAI</span>

                  <h3>Knowledge that supports better decisions.</h3>

                  <p>
                    Explore more insights from Vishwasai across cooperative finance, agriculture and
                    business.
                  </p>

                  <Link href="/blog" className="explore-more-button">
                    <span>Explore More Insights</span>

                    <ArrowUpRight size={18} />
                  </Link>
                </AnimatedBlock>
              </article>
            </div>
          </div>
        </section>

        {/* ================================================
            FLOATING TOP BUTTON
        ================================================= */}

        <button
          type="button"
          className={`blog-top-button ${showTopButton ? 'blog-top-visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </main>
    </>
  );
}

/* =========================================================
   CSS
   Same Vishwasai theme as About / Services / Portfolio
========================================================= */

const BLOG_DETAIL_CSS = `
:root {
  --vishwasai-navy: #211d3b;
  --vishwasai-navy-deep: #151329;
  --vishwasai-blue: #8fd3ff;
  --vishwasai-blue-soft: #dff4ff;
  --vishwasai-white: #ffffff;
  --vishwasai-text: #252438;
  --vishwasai-muted: #747488;
  --vishwasai-border: rgba(33, 29, 59, 0.11);
  --vishwasai-bg: #f7f9fc;
}

.blog-detail-page {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: var(--vishwasai-bg);
  color: var(--vishwasai-text);
}

.blog-progress-track {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(33, 29, 59, 0.08);
}

.blog-progress-track span {
  display: block;
  width: 0;
  height: 100%;
  background: var(--vishwasai-blue);
  box-shadow: 0 0 18px rgba(143, 211, 255, 0.75);
  transition: width 0.08s linear;
}

/* =========================================================
   LOADER
========================================================= */

.blog-detail-loader {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--vishwasai-bg);
  color: var(--vishwasai-navy);
}

.blog-detail-loader p {
  margin: 20px 0 2px;
  font-size: 14px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
}

.loader-dots {
  letter-spacing: 5px;
  color: var(--vishwasai-blue);
}

.loader-orbit {
  width: 54px;
  height: 54px;
  border: 2px solid rgba(33, 29, 59, 0.1);
  border-top-color: var(--vishwasai-blue);
  border-radius: 50%;
  animation: blogSpin 0.9s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader-orbit span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--vishwasai-blue);
}

@keyframes blogSpin {
  to {
    transform: rotate(360deg);
  }
}

/* =========================================================
   HERO
========================================================= */

.blog-detail-hero {
  position: relative;
  min-height: 680px;
  height: 78vh;
  max-height: 850px;
  overflow: hidden;
  background: var(--vishwasai-navy);
  isolation: isolate;
}

.blog-detail-hero-image {
  position: absolute;
  z-index: -3;
  inset: -50px 0 -50px;
  will-change: transform;
}

.blog-detail-cover {
  object-fit: cover;
  object-position: center;
  filter: saturate(0.72) contrast(1.03);
}

.blog-detail-hero-overlay {
  position: absolute;
  z-index: -2;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(21, 19, 41, 0.96) 0%,
      rgba(21, 19, 41, 0.82) 38%,
      rgba(21, 19, 41, 0.48) 70%,
      rgba(21, 19, 41, 0.72) 100%
    );
}

.blog-detail-hero-grid {
  position: absolute;
  z-index: -1;
  inset: 0;
  opacity: 0.14;
  background-image:
    linear-gradient(
      rgba(255,255,255,0.2) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255,255,255,0.2) 1px,
      transparent 1px
    );
  background-size: 80px 80px;
  mask-image: linear-gradient(
    to right,
    black,
    transparent 85%
  );
}

.blog-detail-hero-content {
  width: min(1280px, calc(100% - 80px));
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;
  max-width: 1280px;
}

.blog-detail-back {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  width: fit-content;
  color: rgba(255,255,255,0.82);
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 46px;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.blog-detail-back:hover {
  color: var(--vishwasai-blue);
  transform: translateX(-5px);
}

.blog-detail-category {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding: 9px 15px;
  border: 1px solid rgba(143, 211, 255, 0.38);
  background: rgba(143, 211, 255, 0.08);
  backdrop-filter: blur(10px);
  color: var(--vishwasai-blue);
  border-radius: 999px;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.16em;
  font-weight: 800;
  margin-bottom: 24px;
}

.blog-detail-category span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--vishwasai-blue);
  box-shadow:
    0 0 0 5px rgba(143, 211, 255, 0.1),
    0 0 16px rgba(143, 211, 255, 0.9);
}

.blog-detail-hero h1 {
  width: min(900px, 100%);
  margin: 0;
  color: #fff;
  font-size: clamp(42px, 6vw, 82px);
  line-height: 0.99;
  letter-spacing: -0.045em;
  font-weight: 800;
  text-wrap: balance;
}

.blog-detail-hero-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 30px;
  color: rgba(255,255,255,0.72);
  font-size: 13px;
  font-weight: 600;
}

.blog-detail-hero-meta span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.meta-divider {
  width: 32px;
  height: 1px;
  background: rgba(255,255,255,0.3);
}

.hero-scroll-indicator {
  position: absolute;
  right: 50px;
  bottom: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: rgba(255,255,255,0.6);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.17em;
  writing-mode: vertical-rl;
}

.hero-scroll-indicator svg {
  animation: scrollBounce 1.6s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(7px);
  }
}

/* =========================================================
   MAIN
========================================================= */

.blog-detail-main {
  position: relative;
  padding: 110px 0 130px;
}

.blog-detail-container {
  width: min(1240px, calc(100% - 80px));
  margin: 0 auto;
}

.blog-detail-layout {
  display: grid;
  grid-template-columns: 230px minmax(0, 820px);
  gap: 85px;
  justify-content: center;
}

/* =========================================================
   SIDEBAR
========================================================= */

.blog-detail-sidebar {
  position: relative;
}

.sidebar-sticky {
  position: sticky;
  top: 110px;
}

.sidebar-label {
  color: var(--vishwasai-navy);
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.2em;
}

.sidebar-line {
  width: 38px;
  height: 2px;
  margin: 12px 0 25px;
  background: var(--vishwasai-blue);
}

.blog-toc {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.blog-toc button {
  appearance: none;
  border: 0;
  background: transparent;
  padding: 11px 8px;
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 8px;
  text-align: left;
  cursor: pointer;
  border-radius: 7px;
  color: #8b8b9b;
  transition:
    color 0.3s ease,
    background 0.3s ease,
    transform 0.3s ease;
}

.blog-toc button:hover {
  color: var(--vishwasai-navy);
  background: rgba(143, 211, 255, 0.08);
  transform: translateX(3px);
}

.blog-toc button span {
  font-size: 10px;
  font-weight: 800;
  padding-top: 2px;
  color: #b2b2be;
}

.blog-toc button strong {
  font-size: 12px;
  line-height: 1.45;
  font-weight: 700;
}

.blog-toc button.toc-active {
  color: var(--vishwasai-navy);
  background: rgba(143, 211, 255, 0.12);
}

.blog-toc button.toc-active span {
  color: var(--vishwasai-blue);
}

.sidebar-share {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--vishwasai-border);
  margin-top: 35px;
  padding-top: 20px;
}

.sidebar-share > span {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vishwasai-muted);
}

.sidebar-share-button {
  width: 38px;
  height: 38px;
  border: 1px solid var(--vishwasai-border);
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--vishwasai-navy);
  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;
}

.sidebar-share-button:hover {
  background: var(--vishwasai-navy);
  color: white;
  transform: rotate(12deg);
}

.sidebar-share-menu {
  margin-top: 12px;
  border: 1px solid var(--vishwasai-border);
  background: white;
  padding: 7px;
  border-radius: 10px;
  box-shadow:
    0 18px 45px rgba(33,29,59,0.12);
  animation: shareMenuIn 0.25s ease both;
}

.sidebar-share-menu button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 0;
  background: transparent;
  text-align: left;
  padding: 9px 10px;
  border-radius: 6px;
  cursor: pointer;
  color: var(--vishwasai-text);
  font-size: 12px;
  font-weight: 700;
}

.sidebar-share-menu button:hover {
  background: var(--vishwasai-blue-soft);
}

@keyframes shareMenuIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* =========================================================
   ARTICLE
========================================================= */

.blog-detail-article {
  min-width: 0;
}

.article-introduction {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: center;
  margin-bottom: 65px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--vishwasai-border);
}

.article-kicker {
  color: var(--vishwasai-blue);
  background: var(--vishwasai-navy);
  padding: 8px 12px;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.15em;
}

.article-intro-line {
  width: 100%;
  height: 1px;
  background: var(--vishwasai-border);
}

.article-introduction p {
  grid-column: 1 / -1;
  max-width: 690px;
  margin: 0;
  color: var(--vishwasai-muted);
  font-size: 18px;
  line-height: 1.7;
}

.blog-detail-block {
  margin-bottom: 38px;
}

.blog-content-heading {
  position: relative;
  margin: 65px 0 26px;
  padding-left: 24px;
  font-size: clamp(28px, 3.2vw, 43px);
  line-height: 1.12;
  letter-spacing: -0.035em;
  color: var(--vishwasai-navy);
}

.heading-accent {
  position: absolute;
  left: 0;
  top: 5px;
  width: 4px;
  height: calc(100% - 8px);
  background: var(--vishwasai-blue);
  border-radius: 10px;
}

.blog-content-subheading {
  margin: 45px 0 20px;
  color: var(--vishwasai-navy);
  font-size: 25px;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.blog-content-paragraph {
  margin: 0;
  color: #555568;
  font-size: 17px;
  line-height: 1.95;
  letter-spacing: -0.005em;
}

.blog-content-paragraph strong {
  color: var(--vishwasai-navy);
  font-weight: 800;
}

.blog-content-paragraph a {
  color: var(--vishwasai-navy);
  text-decoration-color: var(--vishwasai-blue);
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

/* =========================================================
   LIST
========================================================= */

.overview-list {
  list-style: none;
  margin: 35px 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.overview-list li {
  display: grid;
  grid-template-columns: 42px 1fr;
  align-items: center;
  gap: 15px;
  padding: 17px 18px;
  background: white;
  border: 1px solid var(--vishwasai-border);
  border-radius: 8px;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.overview-list li:hover {
  transform: translateX(7px);
  border-color: rgba(143, 211, 255, 0.6);
  box-shadow:
    0 14px 30px rgba(33,29,59,0.07);
}

.list-number {
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  background: var(--vishwasai-navy);
  color: var(--vishwasai-blue);
  border-radius: 50%;
  font-size: 10px;
  font-weight: 900;
}

.overview-list strong {
  color: var(--vishwasai-text);
  font-size: 14px;
  line-height: 1.45;
}

/* =========================================================
   IMAGE
========================================================= */

.blog-content-image-wrap {
  position: relative;
  overflow: hidden;
  margin: 50px 0;
  background: var(--vishwasai-navy);
  border-radius: 14px;
  box-shadow:
    0 25px 65px rgba(33,29,59,0.13);
}

.blog-content-image {
  display: block;
  width: 100%;
  height: auto;
  transition:
    transform 0.8s cubic-bezier(.2,.8,.2,1),
    filter 0.5s ease;
}

.blog-content-image-wrap:hover
.blog-content-image {
  transform: scale(1.045);
  filter: brightness(1.04);
}

.blog-image-shine {
  position: absolute;
  z-index: 2;
  top: 0;
  left: -100%;
  width: 45%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.2),
    transparent
  );
  transform: skewX(-20deg);
  pointer-events: none;
}

.blog-content-image-wrap:hover
.blog-image-shine {
  animation: imageShine 0.9s ease;
}

@keyframes imageShine {
  from {
    left: -100%;
  }

  to {
    left: 150%;
  }
}

.blog-content-image-wrap figcaption {
  padding: 13px 17px;
  background: var(--vishwasai-navy);
  color: rgba(255,255,255,0.7);
  font-size: 11px;
  line-height: 1.5;
}

/* =========================================================
   QUOTE
========================================================= */

.blog-content-quote {
  position: relative;
  margin: 55px 0;
  padding: 42px 45px 42px 75px;
  background: var(--vishwasai-navy);
  color: white;
  border-radius: 12px;
  overflow: hidden;
}

.blog-content-quote::before {
  content: '';
  position: absolute;
  width: 190px;
  height: 190px;
  right: -90px;
  top: -90px;
  border-radius: 50%;
  border: 1px solid rgba(143,211,255,0.25);
}

.blog-content-quote::after {
  content: '';
  position: absolute;
  width: 280px;
  height: 280px;
  right: -140px;
  top: -140px;
  border-radius: 50%;
  border: 1px solid rgba(143,211,255,0.12);
}

.quote-symbol {
  position: absolute;
  left: 26px;
  top: 27px;
  color: var(--vishwasai-blue);
  font-family: Georgia, serif;
  font-size: 72px;
  line-height: 1;
}

.quote-text {
  position: relative;
  z-index: 2;
  display: block;
  font-size: 21px;
  line-height: 1.65;
  font-weight: 600;
}

.quote-line {
  display: block;
  width: 55px;
  height: 3px;
  margin-top: 25px;
  background: var(--vishwasai-blue);
}

/* =========================================================
   DIVIDER
========================================================= */

.blog-content-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 50px 0;
}

.blog-content-divider span {
  width: 5px;
  height: 5px;
  background: var(--vishwasai-blue);
  border-radius: 50%;
}

.blog-content-divider span:nth-child(2) {
  width: 8px;
  height: 8px;
  background: var(--vishwasai-navy);
}

/* =========================================================
   SHARE CARD
========================================================= */

.article-share-card {
  margin-top: 80px;
  padding: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  background: white;
  border: 1px solid var(--vishwasai-border);
  border-radius: 13px;
  box-shadow:
    0 18px 50px rgba(33,29,59,0.06);
}

.article-share-card > div:first-child span {
  display: block;
  color: var(--vishwasai-blue);
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.article-share-card h3 {
  margin: 0;
  color: var(--vishwasai-navy);
  font-size: 23px;
  letter-spacing: -0.025em;
}

.article-share-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.article-share-actions button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 13px;
  border: 1px solid var(--vishwasai-border);
  border-radius: 7px;
  background: white;
  color: var(--vishwasai-navy);
  cursor: pointer;
  font-size: 11px;
  font-weight: 800;
  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;
}

.article-share-actions button:hover,
.article-share-actions button.copied {
  background: var(--vishwasai-navy);
  color: white;
  transform: translateY(-2px);
}

/* =========================================================
   END CARD
========================================================= */

.article-end-card {
  position: relative;
  margin-top: 35px;
  padding: 70px 50px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    var(--vishwasai-navy),
    var(--vishwasai-navy-deep)
  );
  color: white;
  border-radius: 15px;
}

.article-end-card::before {
  content: '';
  position: absolute;
  width: 360px;
  height: 360px;
  right: -160px;
  top: -160px;
  border: 1px solid rgba(143,211,255,0.16);
  border-radius: 50%;
}

.article-end-card::after {
  content: '';
  position: absolute;
  width: 250px;
  height: 250px;
  right: -100px;
  top: -100px;
  border: 1px solid rgba(143,211,255,0.11);
  border-radius: 50%;
}

.article-end-card > span {
  position: relative;
  z-index: 2;
  color: var(--vishwasai-blue);
  font-size: 10px;
  letter-spacing: 0.2em;
  font-weight: 900;
}

.article-end-card h3 {
  position: relative;
  z-index: 2;
  max-width: 650px;
  margin: 17px 0 14px;
  font-size: clamp(29px, 4vw, 47px);
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.article-end-card p {
  position: relative;
  z-index: 2;
  max-width: 580px;
  margin: 0 0 30px;
  color: rgba(255,255,255,0.67);
  line-height: 1.7;
  font-size: 14px;
}

.end-card-decoration {
  position: absolute;
  right: 70px;
  bottom: 45px;
  display: flex;
  gap: 8px;
}

.end-card-decoration span {
  width: 7px;
  height: 7px;
  background: var(--vishwasai-blue);
  border-radius: 50%;
  opacity: 0.8;
}

.end-card-decoration span:nth-child(2) {
  opacity: 0.45;
}

.end-card-decoration span:nth-child(3) {
  opacity: 0.2;
}

.explore-more-button {
  position: relative;
  z-index: 4;
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 13px 17px 13px 20px;
  color: var(--vishwasai-navy);
  background: var(--vishwasai-blue);
  text-decoration: none;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 900;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.explore-more-button:hover {
  transform: translateY(-3px);
  box-shadow:
    0 12px 30px rgba(143,211,255,0.24);
}

.explore-more-button svg {
  transition: transform 0.3s ease;
}

.explore-more-button:hover svg {
  transform: translate(3px, -3px);
}

/* =========================================================
   TOP BUTTON
========================================================= */

.blog-top-button {
  position: fixed;
  right: 28px;
  bottom: 28px;
  z-index: 900;
  width: 45px;
  height: 45px;
  border: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: var(--vishwasai-navy);
  color: var(--vishwasai-blue);
  box-shadow:
    0 12px 35px rgba(33,29,59,0.2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease,
    transform 0.3s ease;
}

.blog-top-button.blog-top-visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.blog-top-button:hover {
  background: var(--vishwasai-blue);
  color: var(--vishwasai-navy);
  transform: translateY(-4px);
}

/* =========================================================
   NOT FOUND
========================================================= */

.blog-detail-not-found {
  min-height: 80vh;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: var(--vishwasai-bg);
}

.blog-detail-not-found img {
  position: relative;
  z-index: 2;
  width: min(520px, 90%);
  height: auto;
  opacity: 0.95;
}

.not-found-decoration {
  position: absolute;
  z-index: 0;
  font-size: clamp(150px, 28vw, 370px);
  line-height: 1;
  font-weight: 900;
  color: rgba(33,29,59,0.025);
}

.blog-small-label {
  position: relative;
  z-index: 2;
  color: var(--vishwasai-blue);
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.2em;
}

.blog-detail-not-found h1 {
  position: relative;
  z-index: 2;
  margin: 12px 0;
  color: var(--vishwasai-navy);
  font-size: clamp(32px, 5vw, 55px);
  letter-spacing: -0.04em;
}

.blog-detail-not-found p {
  position: relative;
  z-index: 2;
  max-width: 570px;
  margin: 0 0 28px;
  color: var(--vishwasai-muted);
  line-height: 1.7;
}

.blog-back-button {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 11px 14px 11px 10px;
  color: white;
  background: var(--vishwasai-navy);
  text-decoration: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 800;
  transition:
    transform 0.3s ease,
    background 0.3s ease;
}

.blog-back-button:hover {
  transform: translateY(-3px);
  background: #2b274d;
}

.blog-back-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vishwasai-blue);
  color: var(--vishwasai-navy);
  border-radius: 6px;
}

/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1050px) {
  .blog-detail-layout {
    grid-template-columns: 185px minmax(0, 1fr);
    gap: 50px;
  }

  .blog-detail-container {
    width: min(100% - 50px, 1000px);
  }

  .blog-detail-hero-content {
    width: min(100% - 50px, 1100px);
  }

  .hero-scroll-indicator {
    right: 25px;
  }
}

@media (max-width: 800px) {
  .blog-detail-hero {
    min-height: 620px;
    height: 75vh;
  }

  .blog-detail-hero-content {
    width: calc(100% - 40px);
  }

  .blog-detail-hero h1 {
    font-size: clamp(39px, 10vw, 65px);
  }

  .blog-detail-layout {
    display: block;
  }

  .blog-detail-sidebar {
    display: none;
  }

  .blog-detail-container {
    width: calc(100% - 40px);
  }

  .blog-detail-main {
    padding: 70px 0 90px;
  }

  .article-introduction {
    margin-bottom: 45px;
  }

  .article-share-card {
    align-items: flex-start;
    flex-direction: column;
  }

  .article-share-actions {
    width: 100%;
  }

  .hero-scroll-indicator {
    display: none;
  }
}

@media (max-width: 560px) {
  .blog-detail-hero {
    min-height: 570px;
    height: 72vh;
  }

  .blog-detail-hero-overlay {
    background:
      linear-gradient(
        180deg,
        rgba(21,19,41,0.72),
        rgba(21,19,41,0.95)
      );
  }

  .blog-detail-hero-content {
    padding-top: 40px;
  }

  .blog-detail-back {
    margin-bottom: 34px;
  }

  .blog-detail-hero h1 {
    font-size: 39px;
    line-height: 1.03;
  }

  .blog-detail-hero-meta {
    flex-wrap: wrap;
    gap: 10px;
  }

  .meta-divider {
    display: none !important;
  }

  .article-introduction {
    display: block;
  }

  .article-intro-line {
    margin: 15px 0;
  }

  .article-introduction p {
    font-size: 16px;
  }

  .blog-content-paragraph {
    font-size: 16px;
    line-height: 1.85;
  }

  .blog-content-heading {
    font-size: 30px;
    padding-left: 18px;
  }

  .blog-content-subheading {
    font-size: 23px;
  }

  .overview-list li {
    grid-template-columns: 34px 1fr;
    gap: 10px;
    padding: 14px;
  }

  .list-number {
    width: 28px;
    height: 28px;
  }

  .blog-content-quote {
    padding: 35px 25px 35px 55px;
  }

  .quote-symbol {
    left: 18px;
    top: 22px;
  }

  .quote-text {
    font-size: 18px;
  }

  .article-share-card {
    padding: 25px;
  }

  .article-share-actions button {
    flex: 1 1 auto;
  }

  .article-end-card {
    padding: 50px 25px;
  }

  .article-end-card h3 {
    font-size: 31px;
  }

  .end-card-decoration {
    right: 25px;
    bottom: 25px;
  }

  .blog-top-button {
    width: 42px;
    height: 42px;
    right: 17px;
    bottom: 17px;
  }
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;
