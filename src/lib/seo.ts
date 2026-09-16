import type { Metadata } from 'next';

const siteName = 'VishwaSai';

export function createPageMetadata(title: string, description: string, pathname = '/'): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `https://www.vishwasai.in${pathname}`,
    },
    openGraph: {
      title,
      description,
      siteName,
      type: 'website',
      url: `https://www.vishwasai.in${pathname}`,
    },
  };
}
