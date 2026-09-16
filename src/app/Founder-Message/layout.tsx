import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/Founder-Message'];

export default function FounderMessageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
