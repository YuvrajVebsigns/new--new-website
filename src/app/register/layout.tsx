import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/register'];

export default function RegisterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
