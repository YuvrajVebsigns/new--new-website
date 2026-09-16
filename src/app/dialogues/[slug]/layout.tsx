import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/dialogues/[slug]'];

export default function DialogueDetailsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
