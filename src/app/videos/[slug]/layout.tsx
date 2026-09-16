import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/videos/[slug]'];

export default function VideoDetailsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
