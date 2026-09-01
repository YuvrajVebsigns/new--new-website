'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import BlogCommentsPanel from '@/components/BlogCommentsPanel';
import { fetchWebsiteBlogs, type WebsiteBlogItem } from '@/services/blogs.service';

function getBlogCategory(blog: WebsiteBlogItem) {
  return blog.websites?.[0]?.name || blog.tags?.[0] || 'Blog';
}

function getBlogDescription(blog: WebsiteBlogItem) {
  return blog.excerpt || blog.seo?.metaDescription || 'Read the latest insights from our team.';
}

const BLOG_FALLBACK_IMAGE = '/assets/blogs/p1.jpg';

function getBlogDate(blog: WebsiteBlogItem) {
  if (!blog.publishedAt) return '';

  const date = new Date(blog.publishedAt);
  if (Number.isNaN(date.getTime())) return '';

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getBlogImage(blog: WebsiteBlogItem): string {
  if (blog.featureImage?.large) return blog.featureImage.large;
  if (blog.featureImage?.original) return blog.featureImage.original;
  if (blog.seo?.ogImage?.original) return blog.seo.ogImage.original;
  if (blog.seo?.ogImage?.large) return blog.seo.ogImage.large;
  return BLOG_FALLBACK_IMAGE;
}

export default function BlogsSection() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<WebsiteBlogItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const blogRefs = [
    useScrollAnimation<HTMLDivElement>({
      animationClass: 'animate-fade-in-left',
      initialTransform: 'translateX(-40px)',
      threshold: 0.12,
      once: false,
    }),
    useScrollAnimation<HTMLDivElement>({
      animationClass: 'animate-fade-in',
      initialTransform: 'translateY(40px)',
      threshold: 0.12,
      once: false,
    }),
    useScrollAnimation<HTMLDivElement>({
      animationClass: 'animate-fade-in-right',
      initialTransform: 'translateX(40px)',
      threshold: 0.12,
      once: false,
    }),
  ];

  useEffect(() => {
    let isMounted = true;

    async function loadBlogs() {
      try {
        const response = await fetchWebsiteBlogs(1, 3);

        if (isMounted) {
          setBlogs(response.data?.data?.slice(0, 3) ?? []);
          setIsLoading(false);
        }
      } catch {
        if (isMounted) {
          setBlogs([]);
          setIsLoading(false);
        }
      }
    }

    loadBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="blogs-section">
      <div className="blogs-container">
        <div className="blogs-heading">
          <h2 className="blogs-title">Latest from Our Blog</h2>

          <Link href="/blog" className="blogs-view-all">
            View All <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="blogs-grid">
          {!isLoading && blogs.length === 0 ? (
            <div className="blog-card" style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
              <p>No blogs found right now.</p>
            </div>
          ) : null}

          {blogs.map((blog, index) => {
            return (
              <div className="blog-card" key={String(blog.id)} ref={blogRefs[index]}>
                <div
                  className="blog-image-wrapper"
                  role="link"
                  tabIndex={0}
                  aria-label={`Open blog ${blog.title}`}
                  onClick={() => router.push(`/blog/${blog.slug}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') router.push(`/blog/${blog.slug}`);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <Image
                    src={getBlogImage(blog)}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="blog-image"
                    unoptimized
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement | null;
                      if (img && img.src.indexOf(BLOG_FALLBACK_IMAGE) === -1) {
                        img.src = BLOG_FALLBACK_IMAGE;
                      }
                    }}
                  />
                </div>

                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-category">{getBlogCategory(blog)}</span>
                    {getBlogDate(blog) ? <span>{getBlogDate(blog)}</span> : null}
                  </div>

                  <h4 className="blog-heading">{blog.title}</h4>

                  <p className="blog-description">{getBlogDescription(blog)}</p>

                  <div className="blogpage-footer">
                    <Link href={`/blog/${blog.slug}`} className="blog-readmore">
                      <span className="blog-readmore-text">Read More</span>
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
