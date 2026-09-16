import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/research-2020'];

export default function Research2020Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
