import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/contact'];

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
