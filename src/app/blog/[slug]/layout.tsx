import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/blog/[slug]'];

export default function BlogPostLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
