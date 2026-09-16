import type { Metadata } from 'next';
import './globals.css';
// import QueryProvider from '@/providers/QueryProvider';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollAnimator from '@/components/ScrollAnimator';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cooperative Society, NBFC & FPO Registration Consultants in Pune | VishwaSai',
  description:
    'VishwaSai Consultancy — Connecting ideas, creating possibilities through innovative and trusted consulting solutions.',
  keywords: [
    'VishwaSai Consultancy',
    'consulting',
    'business consultancy',
    'consulting services',
    'innovation',
    'business solutions',
    'strategy consulting',
  ],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Preloader />
        <ScrollProgress />
        <ScrollAnimator />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'VishwaSai Consultancy',
              image: 'https://www.vishwasai.in/assets/vishwasai/Vlogo-light.png',
              telephone: '+91-9588686363',
              address: {
                '@type': 'PostalAddress',
                streetAddress:
                  'Platinum 9, 4th Floor, A/20, No. 52/5, Sr.No. 1, Pashan - Sus Rd, Baner',
                addressLocality: 'Pune',
                addressRegion: 'Maharashtra',
                postalCode: '411045',
                addressCountry: 'IN',
              },
              url: 'https://www.vishwasai.in',
              foundingDate: '2009',
              areaServed: 'IN',
            }),
          }}
        />
      </body>
    </html>
  );
}
