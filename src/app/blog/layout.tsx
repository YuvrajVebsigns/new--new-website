import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/blog'];

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
