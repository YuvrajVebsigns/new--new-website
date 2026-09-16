import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/videos'];

export default function VideosLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
