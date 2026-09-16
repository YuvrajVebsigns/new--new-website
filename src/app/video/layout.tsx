import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/video'];

export default function VideoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
