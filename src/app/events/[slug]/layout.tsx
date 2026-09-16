import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/events/[slug]'];

export default function EventDetailsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
