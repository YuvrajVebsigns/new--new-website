import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const routeMetadata: Record<string, Metadata> = {
  '/about-us': createPageMetadata(
    'About VishwaSai Consultancy | Cooperative & Agricultural Finance Experts',
    'Learn about VishwaSai Consultancy, its cooperative agriculture and finance expertise, and its work supporting institutions across India.',
    '/about-us',
  ),
  '/services': createPageMetadata(
    'PACS, NBFC, FPO & Business Consultancy Services | VishwaSai Pune',
    'Explore VishwaSai consultancy services for cooperative societies, NBFCs, FPOs, project funding, management and business development in Pune.',
    '/services',
  ),
  '/portfolio': createPageMetadata(
    'Cooperative, NBFC & FPO Consultancy Portfolio | VishwaSai',
    'View VishwaSai consultancy work across cooperative finance, NBFC setup, FPO support, funding and business advisory.',
    '/portfolio',
  ),
  '/blog': createPageMetadata(
    'Cooperative Finance, NBFC & FPO Insights | VishwaSai Blog',
    'Read VishwaSai insights on cooperative finance, NBFC registration, agriculture and FPO development, funding and business strategy.',
    '/blog',
  ),
  '/contact': createPageMetadata(
    'Contact Cooperative & NBFC Consultants in Pune | VishwaSai',
    'Contact VishwaSai Consultancy in Pune for cooperative society, NBFC, FPO, funding and compliance advisory support.',
    '/contact',
  ),
  '/Founder-Message': createPageMetadata(
    'Founder Message | VishwaSai Consultancy Pune',
    'Read the founder message from VishwaSai Consultancy and learn about its mission in cooperative agriculture and finance.',
    '/Founder-Message',
  ),
  '/digital-marketing': createPageMetadata(
    'Digital Marketing Consultancy for Growth | VishwaSai',
    'Discover digital marketing consultancy and growth support from VishwaSai for organizations and businesses.',
    '/digital-marketing',
  ),
  '/bespoke-events': createPageMetadata(
    'Bespoke Business Events & Consultancy Programs | VishwaSai',
    'Explore bespoke events and tailored consultancy programs by VishwaSai for institutions, businesses and sector professionals.',
    '/bespoke-events',
  ),
  '/events': createPageMetadata(
    'Cooperative Finance & Business Events in Pune | VishwaSai',
    'Find upcoming VishwaSai events, workshops and professional programs for cooperative, agricultural and business sectors.',
    '/events',
  ),
  '/dialogues': createPageMetadata(
    'Business & Cooperative Leadership Dialogues | VishwaSai',
    'Explore VishwaSai dialogues and conversations on cooperative finance, agriculture, business and sustainable growth.',
    '/dialogues',
  ),
  '/nominate': createPageMetadata(
    'Nominate a Cooperative or Business Leader | VishwaSai',
    'Nominate an individual or organization for recognition through VishwaSai programs and initiatives.',
    '/nominate',
  ),
  '/register': createPageMetadata(
    'Register for VishwaSai Events & Programs',
    'Register for upcoming VishwaSai events, workshops and professional programs.',
    '/register',
  ),
  '/research-2020': createPageMetadata(
    'Cooperative & Agricultural Research 2020 | VishwaSai',
    'Access VishwaSai research and studies on cooperative finance, agriculture and related development topics from 2020.',
    '/research-2020',
  ),
  '/research-2021': createPageMetadata(
    'Cooperative & Agricultural Research 2021 | VishwaSai',
    'Access VishwaSai research and studies on cooperative finance, agriculture and related development topics from 2021.',
    '/research-2021',
  ),
  '/research-2020/download-report': createPageMetadata(
    'Download Cooperative Research Report 2020 | VishwaSai',
    'Download the VishwaSai cooperative and agricultural research report for 2020.',
    '/research-2020/download-report',
  ),
  '/research-2021/download-report': createPageMetadata(
    'Download Cooperative Research Report 2021 | VishwaSai',
    'Download the VishwaSai cooperative and agricultural research report for 2021.',
    '/research-2021/download-report',
  ),
  '/survey-study': createPageMetadata(
    'Cooperative & Agricultural Survey Study | VishwaSai',
    'Participate in or explore VishwaSai survey studies focused on cooperative and agricultural development.',
    '/survey-study',
  ),
  '/video': createPageMetadata(
    'VishwaSai Consultancy Videos | Cooperative & Business Advisory',
    'Watch VishwaSai videos about cooperative finance, business consultancy, agriculture and organizational growth.',
    '/video',
  ),
  '/videos': createPageMetadata(
    'Cooperative Finance & Business Advisory Videos | VishwaSai',
    'Browse VishwaSai videos covering cooperative societies, NBFCs, FPOs, funding and business advisory.',
    '/videos',
  ),
  '/blog/[slug]': createPageMetadata(
    'Cooperative Finance & Business Insight | VishwaSai Blog',
    'Read this VishwaSai insight on cooperative finance, NBFCs, agriculture, funding or business development.',
    '/blog',
  ),
  '/events/[slug]': createPageMetadata(
    'VishwaSai Event Details | Cooperative & Business Programs',
    'View details for this VishwaSai cooperative, agricultural or business event.',
    '/events',
  ),
  '/dialogues/[slug]': createPageMetadata(
    'VishwaSai Dialogue | Cooperative & Business Leadership',
    'Read this VishwaSai dialogue on cooperative finance, agriculture, business and sustainable growth.',
    '/dialogues',
  ),
  '/videos/[slug]': createPageMetadata(
    'VishwaSai Video | Cooperative Finance & Business Advisory',
    'Watch this VishwaSai video on cooperative finance, agriculture, business or organizational growth.',
    '/videos',
  ),
};
