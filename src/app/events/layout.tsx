import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/events'];

export default function EventsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
