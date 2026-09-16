import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/portfolio'];

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
