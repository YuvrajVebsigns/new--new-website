import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/dialogues'];

export default function DialoguesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
