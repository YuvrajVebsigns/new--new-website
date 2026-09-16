import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/about-us'];

export default function AboutUsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
