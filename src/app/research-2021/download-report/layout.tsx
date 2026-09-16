import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/research-2021/download-report'];

export default function DownloadResearch2021Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
