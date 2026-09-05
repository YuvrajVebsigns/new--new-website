export type BotLink = {
  title: string;
  description: string;
  href: string;
};

export type CoreMediaPage = BotLink & {
  keywords: string[];
};

/*
 * Update only the href values below when your website routes are different.
 *
 * Example:
 * If your blog URL is /blog instead of /blogs,
 * change href: '/blogs' to href: '/blog'.
 */
export const CORE_MEDIA_PAGES: CoreMediaPage[] = [
  {
    title: 'Home',
    description: 'Visit the Vishwasai Consultancy homepage.',
    href: '/',
    keywords: ['home', 'homepage', 'main page'],
  },
  {
    title: 'About Us',
    description: 'Learn about Vishwasai Consultancy and its leadership.',
    href: '/about-us',
    keywords: [
      'about',
      'about us',
      'company',
      'vishwasai',
      'vishwasai',
      'vishwasai consultancy',
      'founder',
      'leadership',
      'team',
      'anoop mathur',
      'sudhir kamath',
      'sadanand manda',
    ],
  },
  {
    title: 'Services',
    description: 'Explore Vishwasai Consultancy services and business solutions.',
    href: '/services',
    keywords: [
      'service',
      'services',
      'marketing',
      'digital marketing',
      'abm',
      'campaign',
      'business solution',
    ],
  },
  {
    title: 'Survey / Study',
    description: 'Explore surveys, studies, research and reports.',
    href: '/survey-study',
    keywords: ['survey', 'study', 'research', 'report', 'reports', 'cio outlook'],
  },
  {
    title: 'Videos',
    description: 'Watch Vishwasai Consultancy videos and showcases.',
    href: '/videos',
    keywords: ['video', 'videos', 'watch', 'showcase'],
  },
  {
    title: 'Bespoke Events',
    description: 'Explore custom events, workshops and roundtables.',
    href: '/bespoke-events',
    keywords: [
      'event',
      'events',
      'bespoke event',
      'custom event',
      'workshop',
      'roundtable',
      'conference',
      'dccai',
      'cloud security',
    ],
  },
  {
    title: 'Social Media',
    description: 'Explore Vishwasai Consultancy social media solutions.',
    href: '/social-media',
    keywords: ['social', 'social media', 'social media campaign', 'social campaign'],
  },
  {
    title: 'Resources',
    description: 'View reports, resources and industry insights.',
    href: '/resources',
    keywords: ['resource', 'resources', 'report', 'research', 'download', 'insight'],
  },
  {
    title: 'Blogs',
    description: 'Read Vishwasai Consultancy blogs and articles.',
    href: '/blogs',
    keywords: [
      'blog',
      'blogs',
      'article',
      'articles',
      'news',
      'read',
      'mental health',
      'digital transformation',
      'artificial intelligence',
      'ai',
    ],
  },
  {
    title: 'Registration',
    description: 'Register for Vishwasai Consultancy events and initiatives.',
    href: '/registration',
    keywords: ['register', 'registration', 'participate', 'join', 'apply', 'entry'],
  },
  {
    title: 'Contact Us',
    description: 'Contact the Vishwasai Consultancy team.',
    href: '/#contact-section',
    keywords: [
      'contact',
      'contact us',
      'email',
      'phone',
      'number',
      'address',
      'location',
      'office',
      'help',
      'support',
      'assistance',
      'partner',
      'partnership',
    ],
  },
];

export const CORE_MEDIA_KNOWLEDGE = `
COMPANY

Name:
Vishwasai Consultancy LLP

Tagline:
Powering Partnerships That Matter.
The Catalyst for Business Conversations.

ABOUT VISHWASAI CONSULTANCY

Vishwasai Consultancy creates meaningful platforms that bring together technology
leaders, enterprises and innovators to exchange ideas, celebrate excellence
and drive business growth.

VISHWASAI CONSULTANCY SPECIALIZATIONS

Vishwasai Consultancy specializes in:

- B2B technology events
- Executive engagement platforms
- Marketing and digital solutions
- Account-based marketing campaigns
- Digital roundtables
- Bespoke and custom events
- Surveys and industry studies
- Social media solutions
- Custom content solutions
- Research and reports

COMMUNITY REACH

Vishwasai Consultancy engages more than 36,000 ICT decision-makers and influencers
across key industries through its trusted platforms and events.

LEADERSHIP TEAM

- Anoop Mathur — Founder
- Sudhir Kamath — Country Director
- Sadanand Manda — Head of Sales and Event Operations

FOUNDER'S MESSAGE

Vishwasai Consultancy was built with a clear purpose: to create meaningful platforms
that bring together technology leaders, enterprises and innovators to
exchange ideas, celebrate excellence and drive business growth.

VISHWASAI CONSULTANCY PLATFORMS AND INITIATIVES

CIO Choice:

A pan-India online voting platform where CIOs vote for their preferred and
trusted ICT brands. The selected ICT brands receive CIO Choice recognition
at the annual Red Carpet Night.

CIO Power List:

An algorithm-based annual selection and shortlist of influential technology
leaders.

CFO Power List:

An initiative that recognizes influential CFO leaders committed to addressing
major opportunities in the digital world as part of their business strategies.

CIO Crown:

A curated gathering of CIOs and CTOs who explore emerging technologies and
leadership topics through interactive sessions.

IT Genius Awards:

Recognition for ICT leaders who have implemented transformational, critical
and disruptive technology projects with significant business impact.

Hospitality and Healthcare Honours:

Recognition for ICT leaders from the hospitality and healthcare industries
who have driven innovation through strategic technology leadership.

CIO Dialogues:

Informal and interactive sessions for a selected group of CIOs to participate
in candid conversations and build professional connections.

LeaderNext:

A Vishwasai Consultancy leadership and technology initiative.

ASSOCIATE BRANDS

- CIO Power List
- CXO Capital
- CIO Choice
- CIO Power List MEA

EVENT EXAMPLES

Examples currently displayed on the website include:

- Innovation in Action: Lessons from DCCAI 2026
- Cloud Security Workshop — Edition 1

RESEARCH AND REPORT EXAMPLES

Examples currently displayed on the website include:

- CIO Outlook 2021, COVID-19 Business Impact Pulse Report
- CIO Outlook 2020, COVID-19 Business Impact Pulse Report

BLOG EXAMPLES

Examples currently displayed on the website include:

- The Importance of Mental Health in High-Stakes Roles
- DCCAI 2026: Shaping the Future of Digital Transformation
- AI Is About to Completely Change How You Use Computers

CONTACT DETAILS

Phone:
+91 7506035537

Email:
info@vishwasaiconsultancy.com

Office address:

Units Nos. 3037 – A1 Wing,
3rd Floor, Oberoi Garden Estate,
Near Chandivali Studio,
Andheri East,
Mumbai – 400072,
India.

PARTNERSHIP INFORMATION

Organizations interested in partnering with Vishwasai Consultancy can:

- Use the Get in Touch form
- Call +91 7506035537
- Email info@vishwasaiconsultancy.com
`.trim();
