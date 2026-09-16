import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/digital-marketing'];

export default function DigitalMarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
