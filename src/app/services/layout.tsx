import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/services'];

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
