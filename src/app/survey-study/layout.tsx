import { routeMetadata } from '@/lib/route-metadata';

export const metadata = routeMetadata['/survey-study'];

export default function SurveyStudyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
