import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/research-2020/download-report'];

export default function DownloadResearch2020Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
