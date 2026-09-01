import type { Metadata } from 'next';
import './globals.css';
// import QueryProvider from '@/providers/QueryProvider';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollAnimator from '@/components/ScrollAnimator';
import Footer from '@/components/Footer';
import TrackingAndConsent from '@/components/TrackingAndConsent';

export const metadata: Metadata = {
  title: 'VishwaSai Consultancy',
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
        <TrackingAndConsent />
        <Footer />
      </body>
    </html>
  );
}
