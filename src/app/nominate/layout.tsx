import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/nominate'];

export default function NominateLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
