import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/bespoke-events'];

export default function BespokeEventsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
