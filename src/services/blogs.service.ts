import { API_ENDPOINTS } from '@/constants/api';
import {
  buildWebsiteAuthHeaders,
  clearWebsiteAuth,
  ensureWebsiteAuth as ensureWebsiteAuthHelper,
  getApiErrorStatus as getApiErrorStatusHelper,
  getWebsiteDomain,
  readStoredWebsiteAuth as readStoredWebsiteAuthHelper,
} from '@/lib/website-auth';

export interface WebsiteBlogWebsite {
  name: string;
  domain: string;
  logo: string;
  id: string;
}

export interface WebsiteBlogAuthor {
  email: string;
  fullName: string;
  id: string;
}

export interface Image {
  large: string;
  medium: string;
  small: string;
  thumbnail: string;
  original: string;
}

export interface WebsiteBlogItem {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  featureImage?: Image;
  featureImageId?: string | null;
  websites?: WebsiteBlogWebsite[];
  author?: WebsiteBlogAuthor;
  isActive?: boolean;
  tags?: string[];
  status?: string;
  publishedAt?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: Image;
    ogImageId?: string | null;
  };
  engagement?: {
    likes?: number;
    views?: number;
    commentsCount?: number;
  };
}

export interface WebsiteBlogsResponse {
  success: boolean;
  message: string;
  data: {
    data: WebsiteBlogItem[];
    meta?: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
}

export interface WebsiteBlogContentBlock {
  id?: string;
  type?: string;
  data?: {
    text?: string;
    level?: number;
    style?: string;
    items?: string[];
    file?: { url?: string };
    caption?: string;
    [key: string]: unknown;
  };
}

export interface WebsiteBlogDetailItem extends WebsiteBlogItem {
  content?: {
    time?: number;
    blocks?: WebsiteBlogContentBlock[];
  } | null;
}

export interface WebsiteBlogDetailResponse {
  success: boolean;
  message: string;
  data: WebsiteBlogDetailItem;
}

export interface WebsiteBlogComment {
  id?: string;
  authorName?: string;
  authorEmail?: string;
  content?: string;
  name?: string;
  email?: string;
  message?: string;
  isApproved?: boolean;
  createdAt?: string;
}

export type SubmitBlogCommentInput = {
  authorName: string;
  authorEmail: string;
  content: string;
};

export interface WebsiteBlogCommentsResponse {
  success: boolean;
  message: string;
  data: WebsiteBlogComment[];
}

function extractCommentItems(response: unknown): WebsiteBlogComment[] {
  const tryArray = (value: unknown): WebsiteBlogComment[] | null =>
    Array.isArray(value) ? (value as WebsiteBlogComment[]) : null;

  if (tryArray(response)) return response as WebsiteBlogComment[];

  if (typeof response !== 'object' || response === null) return [];

  const payload = response as Record<string, unknown>;
  const directData = tryArray(payload.data);
  if (directData) return directData;

  if (payload.data && typeof payload.data === 'object') {
    const nested = payload.data as Record<string, unknown>;
    const nestedArray =
      tryArray(nested.data) ||
      tryArray(nested.items) ||
      tryArray(nested.comments) ||
      tryArray(nested.results);
    if (nestedArray) return nestedArray;
  }

  return tryArray(payload.items) || tryArray(payload.comments) || tryArray(payload.results) || [];
}

type WebsiteAuth = {
  token: string;
  websiteId: string;
};

function readStoredWebsiteAuth(): WebsiteAuth | null {
  if (typeof window === 'undefined') return null;

  const raw = window.localStorage.getItem('websiteAuth');

  if (!raw) return null;

  try {
    const parsed: unknown = JSON.parse(raw);

    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      'token' in parsed &&
      'websiteId' in parsed &&
      typeof (parsed as { token?: unknown }).token === 'string' &&
      typeof (parsed as { websiteId?: unknown }).websiteId === 'string'
    ) {
      return {
        token: (parsed as { token: string }).token,
        websiteId: (parsed as { websiteId: string }).websiteId,
      };
    }
  } catch {
    return null;
  }

  return null;
}

function extractWebsiteToken(response: {
  token?: string;
  data?: {
    token?: string;
    data?: {
      token?: string;
      website?: {
        token?: string;
      };
      websiteId?: string;
      id?: string;
    };
    website?: {
      token?: string;
      id?: string;
    };
    websiteId?: string;
    id?: string;
  };
  website?: {
    token?: string;
    id?: string;
  };
  websiteId?: string;
}) {
  return (
    response.token ??
    response.data?.token ??
    response.data?.data?.token ??
    response.data?.website?.token ??
    response.data?.data?.website?.token ??
    null
  );
}

function extractWebsiteId(response: {
  data?: {
    data?: {
      website?: {
        id?: string;
      };
      websiteId?: string;
      id?: string;
    };
    website?: {
      id?: string;
    };
    websiteId?: string;
    id?: string;
  };
  website?: {
    id?: string;
  };
  websiteId?: string;
  id?: string;
}) {
  return (
    response.websiteId ??
    response.website?.id ??
    response.data?.website?.id ??
    response.data?.data?.website?.id ??
    response.data?.websiteId ??
    response.data?.data?.websiteId ??
    response.data?.id ??
    response.id ??
    null
  );
}

async function ensureWebsiteAuth(domain: string) {
  if (typeof window === 'undefined') return null;

  const stored = readStoredWebsiteAuth();
  if (stored) return stored;

  const { apiFetch } = await import('@/services/apiFetch');

  const tokenRes = await apiFetch<{
    token?: string;
    websiteId?: string;
    website?: { id?: string };
    data?: {
      token?: string;
      websiteId?: string;
      id?: string;
      website?: { token?: string; id?: string };
      data?: {
        token?: string;
        websiteId?: string;
        id?: string;
        website?: { token?: string; id?: string };
      };
    };
  }>(`/api/v1/website/token?domain=${encodeURIComponent(domain)}`, {
    method: 'POST',
    requireAuth: false,
    headers: {
      'Content-Type': 'application/json',
      'x-website-domain': domain,
    },
    body: JSON.stringify({}),
  });

  const token = extractWebsiteToken(tokenRes);
  const websiteId = extractWebsiteId(tokenRes);

  if (token && websiteId) {
    const value: WebsiteAuth = { token, websiteId };
    window.localStorage.setItem('websiteAuth', JSON.stringify(value));
    return value;
  }

  return null;
}

function getApiErrorStatus(error: unknown) {
  if (typeof error === 'object' && error !== null && 'statusCode' in error) {
    const statusCode = (error as { statusCode?: unknown }).statusCode;
    return typeof statusCode === 'number' ? statusCode : Number(statusCode);
  }

  if (typeof error === 'object' && error !== null && 'status' in error) {
    const status = (error as { status?: unknown }).status;
    return typeof status === 'number' ? status : Number(status);
  }

  return undefined;
}

function makeImageFromUrl(url: string): Image {
  return { large: url, medium: url, small: url, thumbnail: url, original: url };
}

const FALLBACK_WEBSITE_BLOGS: WebsiteBlogItem[] = [
  {
    id: '6a0e1fb5957cec506662dd91',
    slug: 'building-a-global-brand-from-the-ground-up',
    title: 'Building a Global Brand from the Ground Up',
    excerpt:
      'Learn more about Building a Global Brand from the Ground Up and its impact on the industry in this insightful article.',
    featureImage: makeImageFromUrl('https://picsum.photos/seed/19/1200/630'),
    websites: [
      {
        name: 'MEA CIO Choice',
        domain: 'https://meachoice.com',
        logo: 'https://mea.cio-choice.com/wp-content/uploads/2025/10/logo2.png',
        id: '6a0e1fb4957cec506662dd69',
      },
      {
        name: 'vishwasai.in',
        domain: 'https://vishwasai.in',
        logo: '',
        id: '6a0e1fb4957cec506662dd71',
      },
    ],
    author: {
      email: 'superadmin@gmail.com',
      fullName: 'Super Admin',
      id: '6a0e1fb3957cec506662dd64',
    },
    isActive: true,
    tags: ['Tech', 'Business', 'Innovation', 'MEA'],
    status: 'Publish',
    publishedAt: '2026-05-27T18:37:52.156Z',
    seo: {
      metaTitle: 'Building a Global Brand from the Ground Up',
      metaDescription:
        'Read about Building a Global Brand from the Ground Up on the official blog of MEA CIO Choice.',
      keywords: ['media', 'tech', 'future', 'mea cio choice'],
      ogImage: makeImageFromUrl('https://picsum.photos/seed/19/1200/630'),
      ogImageId: null,
    },
    engagement: { likes: 0, views: 0, commentsCount: 0 },
    featureImageId: null,
  },
  {
    id: '6a0e1fb5957cec506662dd90',
    slug: 'the-importance-of-mental-health-in-high-stakes-roles',
    title: 'The Importance of Mental Health in High-Stakes Roles',
    excerpt:
      'Learn more about The Importance of Mental Health in High-Stakes Roles and its impact on the industry in this insightful article.',
    featureImage: makeImageFromUrl('https://picsum.photos/seed/18/1200/630'),
    websites: [
      {
        name: 'MEA CIO Powerlist',
        domain: 'https://meacio.com',
        logo: 'https://cxo-capital.com/wp-content/uploads/2026/02/CPL-Powerlist-LOGO-Final-B.png',
        id: '6a0e1fb4957cec506662dd6a',
      },
      {
        name: 'vishwasai.in',
        domain: 'https://vishwasai.in',
        logo: '',
        id: '6a0e1fb4957cec506662dd71',
      },
    ],
    author: {
      email: 'superadmin@gmail.com',
      fullName: 'Super Admin',
      id: '6a0e1fb3957cec506662dd64',
    },
    isActive: true,
    tags: ['Tech', 'Business', 'Innovation', 'MEA'],
    status: 'Publish',
    publishedAt: '2026-05-27T18:38:15.131Z',
    seo: {
      metaTitle: 'The Importance of Mental Health in High-Stakes Roles',
      metaDescription:
        'Read about The Importance of Mental Health in High-Stakes Roles on the official blog of MEA CIO Powerlist.',
      keywords: ['media', 'tech', 'future', 'mea cio powerlist'],
      ogImage: makeImageFromUrl('https://picsum.photos/seed/18/1200/630'),
      ogImageId: null,
    },
    engagement: { likes: 0, views: 0, commentsCount: 0 },
    featureImageId: null,
  },
  {
    id: '6a0e1fb5957cec506662dd8f',
    slug: 'blockchain-beyond-cryptocurrency',
    title: 'Blockchain Beyond Cryptocurrency',
    excerpt:
      'Learn more about Blockchain Beyond Cryptocurrency and its impact on the industry in this insightful article.',
    featureImage: makeImageFromUrl('https://picsum.photos/seed/17/1200/630'),
    websites: [
      {
        name: 'CXO Capital',
        domain: 'https://cxocapital.com',
        logo: 'https://cxo-capital.com/wp-content/uploads/2023/10/CXO-Capital-Final-Logo.png',
        id: '6a0e1fb4957cec506662dd6b',
      },
      {
        name: 'vishwasai.in',
        domain: 'https://vishwasai.in',
        logo: '',
        id: '6a0e1fb4957cec506662dd71',
      },
    ],
    author: {
      email: 'superadmin@gmail.com',
      fullName: 'Super Admin',
      id: '6a0e1fb3957cec506662dd64',
    },
    isActive: true,
    tags: ['Tech', 'Business', 'Innovation', 'CXO'],
    status: 'Publish',
    publishedAt: '2026-05-27T18:36:55.513Z',
    seo: {
      metaTitle: 'Blockchain Beyond Cryptocurrency',
      metaDescription:
        'Read about Blockchain Beyond Cryptocurrency on the official blog of CXO Capital.',
      keywords: ['media', 'tech', 'future', 'cxo capital'],
      ogImage: makeImageFromUrl('https://picsum.photos/seed/17/1200/630'),
      ogImageId: null,
    },
    engagement: { likes: 0, views: 0, commentsCount: 0 },
    featureImageId: null,
  },
  {
    id: '6a0e1fb5957cec506662dd8e',
    slug: 'remote-work-best-practices-for-global-teams',
    title: 'Remote Work: Best Practices for Global Teams',
    excerpt:
      'Learn more about Remote Work: Best Practices for Global Teams and its impact on the industry in this insightful article.',
    featureImage: makeImageFromUrl('https://picsum.photos/seed/16/1200/630'),
    websites: [
      {
        name: 'CIO Crown',
        domain: 'https://ciocrown.com',
        logo: 'https://ciocrown.com/images/logo.png',
        id: '6a0e1fb4957cec506662dd6c',
      },
      {
        name: 'vishwasai.in',
        domain: 'https://vishwasai.in',
        logo: '',
        id: '6a0e1fb4957cec506662dd71',
      },
    ],
    author: {
      email: 'superadmin@gmail.com',
      fullName: 'Super Admin',
      id: '6a0e1fb3957cec506662dd64',
    },
    isActive: true,
    tags: ['Tech', 'Business', 'Innovation', 'CIO'],
    status: 'Publish',
    publishedAt: '2026-05-27T18:37:32.074Z',
    seo: {
      metaTitle: 'Remote Work: Best Practices for Global Teams',
      metaDescription:
        'Read about Remote Work: Best Practices for Global Teams on the official blog of CIO Crown.',
      keywords: ['media', 'tech', 'future', 'cio crown'],
      ogImage: makeImageFromUrl('https://picsum.photos/seed/16/1200/630'),
      ogImageId: null,
    },
    engagement: { likes: 0, views: 0, commentsCount: 0 },
    featureImageId: null,
  },
  {
    id: '6a0e1fb5957cec506662dd8d',
    slug: 'harnessing-big-data-for-marketing-excellence',
    title: 'Harnessing Big Data for Marketing Excellence',
    excerpt:
      'Learn more about Harnessing Big Data for Marketing Excellence and its impact on the industry in this insightful article.',
    featureImage: makeImageFromUrl('https://picsum.photos/seed/15/1200/630'),
    websites: [
      {
        name: 'CIO Choice',
        domain: 'https://ciochoice.com',
        logo: 'http://www.cio-choice.in/wp-content/uploads/2016/04/CIO_logo.png',
        id: '6a0e1fb4957cec506662dd6d',
      },
      {
        name: 'vishwasai.in',
        domain: 'https://vishwasai.in',
        logo: '',
        id: '6a0e1fb4957cec506662dd71',
      },
    ],
    author: {
      email: 'superadmin@gmail.com',
      fullName: 'Super Admin',
      id: '6a0e1fb3957cec506662dd64',
    },
    isActive: true,
    tags: ['Tech', 'Business', 'Innovation', 'CIO'],
    status: 'Publish',
    publishedAt: '2026-05-27T18:39:14.000Z',
    seo: {
      metaTitle: 'Harnessing Big Data for Marketing Excellence',
      metaDescription:
        'Read about Harnessing Big Data for Marketing Excellence on the official blog of CIO Choice.',
      keywords: ['media', 'tech', 'future', 'cio choice'],
      ogImage: makeImageFromUrl('https://picsum.photos/seed/15/1200/630'),
      ogImageId: null,
    },
    engagement: { likes: 0, views: 0, commentsCount: 0 },
    featureImageId: null,
  },
  {
    id: '6a0e1fb5957cec506662dd8a',
    slug: 'the-evolution-of-social-media-for-brands',
    title: 'The Evolution of Social Media for Brands',
    excerpt:
      'Learn more about The Evolution of Social Media for Brands and its impact on the industry in this insightful article.',
    featureImage: makeImageFromUrl('https://picsum.photos/seed/12/1200/630'),
    websites: [
      {
        name: 'CIO Powerlist',
        domain: 'https://ciopowerlist.com',
        logo: 'https://www.ciopowerlist.com/wp-content/uploads/2023/04/cio-powerlist_logo.png',
        id: '6a0e1fb4957cec506662dd70',
      },
      {
        name: 'vishwasai.in',
        domain: 'https://vishwasai.in',
        logo: '',
        id: '6a0e1fb4957cec506662dd71',
      },
    ],
    author: {
      email: 'superadmin@gmail.com',
      fullName: 'Super Admin',
      id: '6a0e1fb3957cec506662dd64',
    },
    isActive: true,
    tags: ['Tech', 'Business', 'Innovation', 'CIO'],
    status: 'Publish',
    publishedAt: '2026-05-27T18:41:00.408Z',
    seo: {
      metaTitle: 'The Evolution of Social Media for Brands',
      metaDescription:
        'Read about The Evolution of Social Media for Brands on the official blog of CIO Powerlist.',
      keywords: ['media', 'tech', 'future', 'cio powerlist'],
      ogImage: makeImageFromUrl('https://picsum.photos/seed/12/1200/630'),
      ogImageId: null,
    },
    engagement: { likes: 0, views: 0, commentsCount: 0 },
    featureImageId: null,
  },
  {
    id: '6a0e1fb5957cec506662dd89',
    slug: 'developing-the-next-generation-of-leadership',
    title: 'Developing the Next Generation of Leadership',
    excerpt:
      'Learn more about Developing the Next Generation of Leadership and its impact on the industry in this insightful article.',
    featureImage: makeImageFromUrl('https://picsum.photos/seed/11/1200/630'),
    websites: [
      {
        name: 'vishwasai.in',
        domain: 'https://vishwasai.in',
        logo: '',
        id: '6a0e1fb4957cec506662dd71',
      },
    ],
    author: {
      email: 'superadmin@gmail.com',
      fullName: 'Super Admin',
      id: '6a0e1fb3957cec506662dd64',
    },
    isActive: true,
    tags: ['Tech', 'Business', 'Innovation', 'CORE'],
    status: 'Publish',
    publishedAt: '2026-05-27T18:25:46.541Z',
    seo: {
      metaTitle: 'Developing the Next Generation of Leadership',
      metaDescription:
        'Read about Developing the Next Generation of Leadership on the official blog of vishwasai.in.',
      keywords: ['media', 'tech', 'future', 'vishwasai'],
      ogImage: makeImageFromUrl('https://picsum.photos/seed/11/1200/630'),
      ogImageId: null,
    },
    engagement: { likes: 0, views: 0, commentsCount: 0 },
    featureImageId: null,
  },
  {
    id: '6a0e1fb5957cec506662dd88',
    slug: 'strategic-planning-in-a-volatile-economy',
    title: 'Strategic Planning in a Volatile Economy',
    excerpt:
      'Learn more about Strategic Planning in a Volatile Economy and its impact on the industry in this insightful article.',
    featureImage: makeImageFromUrl('https://picsum.photos/seed/10/1200/630'),
    websites: [
      {
        name: 'CIO Angel Network',
        domain: 'https://cioangel.com',
        logo: 'https://cioangelnetwork.com/images/cio-angel-network-logo.jpg',
        id: '6a0e1fb4957cec506662dd67',
      },
      {
        name: 'vishwasai.in',
        domain: 'https://vishwasai.in',
        logo: '',
        id: '6a0e1fb4957cec506662dd71',
      },
    ],
    author: {
      email: 'superadmin@gmail.com',
      fullName: 'Super Admin',
      id: '6a0e1fb3957cec506662dd64',
    },
    isActive: true,
    tags: ['Tech', 'Business', 'Innovation', 'CIO'],
    status: 'Publish',
    publishedAt: '2026-05-27T18:41:28.024Z',
    seo: {
      metaTitle: 'Strategic Planning in a Volatile Economy',
      metaDescription:
        'Read about Strategic Planning in a Volatile Economy on the official blog of CIO Angel Network.',
      keywords: ['media', 'tech', 'future', 'cio angel network'],
      ogImage: makeImageFromUrl('https://picsum.photos/seed/10/1200/630'),
      ogImageId: null,
    },
    engagement: { likes: 0, views: 0, commentsCount: 0 },
    featureImageId: null,
  },
];

function buildFallbackResponse(page = 1, limit = 10) {
  const start = Math.max(0, (page - 1) * limit);
  const data = FALLBACK_WEBSITE_BLOGS.slice(start, start + limit);

  return {
    success: true,
    message: 'Fallback website blogs loaded',
    data: {
      data,
      meta: {
        total: FALLBACK_WEBSITE_BLOGS.length,
        page,
        limit,
        totalPages: Math.max(1, Math.ceil(FALLBACK_WEBSITE_BLOGS.length / limit)),
        hasNextPage: start + limit < FALLBACK_WEBSITE_BLOGS.length,
        hasPreviousPage: page > 1,
      },
    },
  } satisfies WebsiteBlogsResponse;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function extractBlogItems(response: unknown): WebsiteBlogItem[] {
  if (Array.isArray(response)) {
    return response as WebsiteBlogItem[];
  }

  if (!isRecord(response)) return [];

  const directData = response.data;
  if (Array.isArray(directData)) return directData as WebsiteBlogItem[];

  if (isRecord(directData)) {
    const nested = directData.data ?? directData.items ?? directData.results ?? directData.blogs;
    if (Array.isArray(nested)) return nested as WebsiteBlogItem[];
  }

  return ((Array.isArray(response.items) ? response.items : []) ||
    (Array.isArray(response.results) ? response.results : []) ||
    (Array.isArray(response.blogs) ? response.blogs : []) ||
    []) as WebsiteBlogItem[];
}

function extractBlogMeta(response: unknown) {
  if (!isRecord(response)) return undefined;

  const meta =
    isRecord(response.data) && isRecord(response.data.meta)
      ? response.data.meta
      : isRecord(response.meta)
        ? response.meta
        : undefined;

  if (!meta) return undefined;

  return {
    total: Number(meta.total ?? 0),
    page: Number(meta.page ?? 1),
    limit: Number(meta.limit ?? 10),
    totalPages: Number(meta.totalPages ?? 1),
    hasNextPage: Boolean(meta.hasNextPage),
    hasPreviousPage: Boolean(meta.hasPreviousPage),
  };
}

function mapBlogItem(data: Record<string, unknown>): WebsiteBlogItem {
  const featureImage = isRecord(data.featureImage)
    ? (data.featureImage as Record<string, unknown>)
    : undefined;

  const seo = isRecord(data.seo) ? (data.seo as Record<string, unknown>) : undefined;

  return {
    id: String(data.id ?? data._id ?? data.slug ?? ''),
    slug: String(data.slug ?? data.id ?? ''),
    title: String(data.title ?? data.name ?? ''),
    excerpt: typeof data.excerpt === 'string' ? data.excerpt : undefined,
    featureImage: featureImage
      ? {
          large: String(featureImage.large ?? featureImage.original ?? ''),
          medium: String(featureImage.medium ?? featureImage.large ?? ''),
          small: String(featureImage.small ?? featureImage.medium ?? ''),
          thumbnail: String(featureImage.thumbnail ?? featureImage.small ?? ''),
          original: String(featureImage.original ?? featureImage.large ?? ''),
        }
      : undefined,
    featureImageId: typeof data.featureImageId === 'string' ? data.featureImageId : null,
    websites: Array.isArray(data.websites) ? (data.websites as WebsiteBlogWebsite[]) : [],
    author: isRecord(data.author) ? (data.author as unknown as WebsiteBlogAuthor) : undefined,
    isActive: typeof data.isActive === 'boolean' ? data.isActive : undefined,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : undefined,
    status: typeof data.status === 'string' ? data.status : undefined,
    publishedAt: typeof data.publishedAt === 'string' ? data.publishedAt : undefined,
    seo: seo
      ? {
          metaTitle: typeof seo.metaTitle === 'string' ? seo.metaTitle : undefined,
          metaDescription:
            typeof seo.metaDescription === 'string' ? seo.metaDescription : undefined,
          keywords: Array.isArray(seo.keywords) ? (seo.keywords as string[]) : undefined,
          ogImage: isRecord(seo.ogImage)
            ? {
                large: String(seo.ogImage.large ?? seo.ogImage.original ?? ''),
                medium: String(seo.ogImage.medium ?? seo.ogImage.large ?? ''),
                small: String(seo.ogImage.small ?? seo.ogImage.medium ?? ''),
                thumbnail: String(seo.ogImage.thumbnail ?? seo.ogImage.small ?? ''),
                original: String(seo.ogImage.original ?? seo.ogImage.large ?? ''),
              }
            : undefined,
          ogImageId: typeof seo.ogImageId === 'string' ? seo.ogImageId : null,
        }
      : undefined,
    engagement: isRecord(data.engagement)
      ? {
          likes: typeof data.engagement.likes === 'number' ? data.engagement.likes : undefined,
          views: typeof data.engagement.views === 'number' ? data.engagement.views : undefined,
          commentsCount:
            typeof data.engagement.commentsCount === 'number'
              ? data.engagement.commentsCount
              : undefined,
        }
      : undefined,
  };
}

export async function fetchWebsiteBlogs(page = 1, limit = 10, search = '') {
  const searchParams = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (search.trim()) {
    searchParams.set('search', search.trim());
  }

  const fallback = buildFallbackResponse(page, limit);

  if (search.trim()) {
    const searchValue = search.trim().toLowerCase();
    fallback.data.data = fallback.data.data.filter((item) =>
      [item.title, item.excerpt, item.seo?.metaDescription, item.tags?.join(' ')]
        .join(' ')
        .toLowerCase()
        .includes(searchValue),
    );
  }

  try {
    const { apiFetch } = await import('@/services/apiFetch');
    const domain = getWebsiteDomain();
    let auth = readStoredWebsiteAuthHelper();

    if (!auth) {
      auth = await ensureWebsiteAuthHelper(domain);
    }

    const url = `${API_ENDPOINTS.WEBSITE.BLOGS.BASE}?${searchParams.toString()}`;
    const headers = buildWebsiteAuthHeaders(auth);

    const response = await apiFetch<unknown>(url, {
      method: 'GET',
      requireAuth: false,
      headers,
    });

    const items = extractBlogItems(response);
    if (items.length > 0 || isRecord(response)) {
      const normalizedItems = items.map((item) =>
        isRecord(item) ? mapBlogItem(item as Record<string, unknown>) : item,
      );

      return {
        success: true,
        message: 'Blogs fetched',
        data: {
          data: normalizedItems,
          meta: extractBlogMeta(response) ?? {
            total: normalizedItems.length,
            page,
            limit,
            totalPages: 1,
            hasNextPage: false,
            hasPreviousPage: page > 1,
          },
        },
      } satisfies WebsiteBlogsResponse;
    }
  } catch (err: unknown) {
    const statusCode = getApiErrorStatusHelper(err);

    if (statusCode === 401 && typeof window !== 'undefined') {
      try {
        clearWebsiteAuth();
        const freshAuth = await ensureWebsiteAuthHelper(getWebsiteDomain());
        if (!freshAuth) {
          throw new Error('Could not obtain website authentication for blogs.');
        }

        const { apiFetch } = await import('@/services/apiFetch');
        const retryHeaders = buildWebsiteAuthHeaders(freshAuth);
        const retryResponse = await apiFetch<unknown>(
          `${API_ENDPOINTS.WEBSITE.BLOGS.BASE}?${searchParams.toString()}`,
          {
            method: 'GET',
            requireAuth: false,
            headers: retryHeaders,
          },
        );

        const retryItems = extractBlogItems(retryResponse);
        if (retryItems.length > 0 || isRecord(retryResponse)) {
          const normalized = retryItems.map((item) =>
            isRecord(item) ? mapBlogItem(item as Record<string, unknown>) : item,
          );

          return {
            success: true,
            message: 'Blogs fetched',
            data: {
              data: normalized,
              meta: extractBlogMeta(retryResponse) ?? {
                total: normalized.length,
                page,
                limit,
                totalPages: 1,
                hasNextPage: false,
                hasPreviousPage: page > 1,
              },
            },
          } satisfies WebsiteBlogsResponse;
        }
      } catch {
        return fallback;
      }
    }
  }

  return fallback;
}

export async function fetchWebsiteBlogBySlug(idOrSlug: string) {
  const slug = idOrSlug.trim();

  if (!slug) return null;

  const { apiFetch } = await import('@/services/apiFetch');
  const domain = getWebsiteDomain();
  let auth = readStoredWebsiteAuthHelper();

  if (!auth) {
    try {
      auth = await ensureWebsiteAuthHelper(domain);
    } catch {
      auth = null;
    }
  }

  const headers = auth ? buildWebsiteAuthHeaders(auth) : {};
  const endpoint = API_ENDPOINTS.WEBSITE.BLOGS.BY_ID(slug);

  try {
    const response = await apiFetch<unknown>(endpoint, {
      requireAuth: false,
      headers,
    });

    const data = isRecord(response)
      ? isRecord(response.data) && response.data.data
        ? response.data.data
        : (response.data ?? response)
      : null;

    if (data && isRecord(data)) {
      return mapBlogItem(data as Record<string, unknown>);
    }
  } catch (error: unknown) {
    const statusCode = getApiErrorStatusHelper(error);

    if (statusCode === 401 && typeof window !== 'undefined') {
      try {
        clearWebsiteAuth();
        const freshAuth = await ensureWebsiteAuthHelper(domain);
        if (!freshAuth) return null;

        const retryHeaders = buildWebsiteAuthHeaders(freshAuth);
        const retryResponse = await apiFetch<unknown>(endpoint, {
          requireAuth: false,
          headers: retryHeaders,
        });

        const retryData = isRecord(retryResponse)
          ? isRecord(retryResponse.data) && retryResponse.data.data
            ? retryResponse.data.data
            : (retryResponse.data ?? retryResponse)
          : null;

        if (retryData && isRecord(retryData)) {
          return mapBlogItem(retryData as Record<string, unknown>);
        }
      } catch {
        // fallback below
      }
    }
  }

  return null;
}

function buildSubmitCommentBody(payload: SubmitBlogCommentInput) {
  return {
    authorName: payload.authorName,
    authorEmail: payload.authorEmail,
    content: payload.content,
  };
}

async function fetchBlogCommentsWithAuth(blogId: string) {
  const { apiFetch } = await import('@/services/apiFetch');
  const { buildWebsiteAuthHeaders, clearWebsiteAuth, ensureWebsiteAuth, getApiErrorStatus } =
    await import('@/lib/website-auth');

  const endpoint = API_ENDPOINTS.WEBSITE.BLOG_COMMENTS.BASE(blogId);
  const auth = await ensureWebsiteAuth();

  const request = () =>
    apiFetch<WebsiteBlogCommentsResponse>(endpoint, {
      requireAuth: false,
      headers: buildWebsiteAuthHeaders(auth),
    });

  try {
    return await request();
  } catch (error: unknown) {
    if (getApiErrorStatus(error) === 401) {
      clearWebsiteAuth();
      const freshAuth = await ensureWebsiteAuth();
      return apiFetch<WebsiteBlogCommentsResponse>(endpoint, {
        requireAuth: false,
        headers: buildWebsiteAuthHeaders(freshAuth),
      });
    }
    throw error;
  }
}

async function postBlogCommentWithAuth(blogId: string, payload: SubmitBlogCommentInput) {
  const { apiFetch } = await import('@/services/apiFetch');
  const { buildWebsiteAuthHeaders, clearWebsiteAuth, ensureWebsiteAuth, getApiErrorStatus } =
    await import('@/lib/website-auth');

  const endpoint = API_ENDPOINTS.WEBSITE.BLOG_COMMENTS.BASE(blogId);
  const body = buildSubmitCommentBody(payload);
  const auth = await ensureWebsiteAuth();

  const request = () =>
    apiFetch<WebsiteBlogComment>(endpoint, {
      method: 'POST',
      requireAuth: false,
      headers: buildWebsiteAuthHeaders(auth),
      body: JSON.stringify(body),
    });

  try {
    return await request();
  } catch (error: unknown) {
    if (getApiErrorStatus(error) === 401) {
      clearWebsiteAuth();
      const freshAuth = await ensureWebsiteAuth();
      return apiFetch<WebsiteBlogComment>(endpoint, {
        method: 'POST',
        requireAuth: false,
        headers: buildWebsiteAuthHeaders(freshAuth),
        body: JSON.stringify(body),
      });
    }
    throw error;
  }
}

export async function fetchWebsiteBlogComments(blogId: string) {
  if (!blogId) {
    return { success: true, message: 'No blog id', data: [] } as WebsiteBlogCommentsResponse;
  }

  try {
    const response = await fetchBlogCommentsWithAuth(blogId);
    const comments = extractCommentItems(response);

    return {
      success: true,
      message: 'Comments fetched',
      data: comments,
    } as WebsiteBlogCommentsResponse;
  } catch {
    return { success: true, message: 'No comments', data: [] } as WebsiteBlogCommentsResponse;
  }
}

export async function submitWebsiteBlogComment(blogId: string, payload: SubmitBlogCommentInput) {
  if (!blogId) {
    return {
      success: false,
      message: 'Missing blog id',
      data: null,
    };
  }

  try {
    const response = await postBlogCommentWithAuth(blogId, payload);

    return {
      success: true,
      message: 'Comment submitted successfully. It will be visible after admin approval.',
      data: response,
    };
  } catch (error: unknown) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to submit comment',
      data: null,
    };
  }
}

export async function submitWebsiteBlogLike(blogId: string) {
  if (!blogId) throw new Error('Missing blog id');

  const domain = 'vishwasai.in';
  const auth = await ensureWebsiteAuth(domain);

  const headers: Record<string, string> = {};
  if (auth?.token) headers.Authorization = `Bearer ${auth.token}`;
  if (auth?.websiteId) headers['x-website-id'] = auth.websiteId;

  const endpoint = `/api/v1/website/blogs/${encodeURIComponent(blogId)}/like`;

  const { apiFetch } = await import('@/services/apiFetch');

  try {
    return await apiFetch<{ success: boolean; message?: string }>(endpoint, {
      method: 'POST',
      requireAuth: false,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify({}),
    });
  } catch (error: unknown) {
    const statusCode = getApiErrorStatus(error);

    if (statusCode === 401 && typeof window !== 'undefined') {
      window.localStorage.removeItem('websiteAuth');

      const freshAuth = await ensureWebsiteAuth(domain);

      if (freshAuth?.token) {
        const retryHeaders: Record<string, string> = {
          Authorization: `Bearer ${freshAuth.token}`,
          'x-website-id': freshAuth.websiteId,
          'Content-Type': 'application/json',
        };

        return apiFetch<{ success: boolean; message?: string }>(endpoint, {
          method: 'POST',
          requireAuth: false,
          headers: retryHeaders,
          body: JSON.stringify({}),
        });
      }
    }

    throw error;
  }
}
