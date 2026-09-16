import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/research-2021'];

export default function Research2021Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
