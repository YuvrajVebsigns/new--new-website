import HeroSection from '@/components/HeroSection';
// import FoundersMessage from '@/components/FoundersMessage';
import ExpertiseSection from '@/components/ExpertiseSection';
import TeamSection from '@/components/TeamSection';
// import KeyClient from '@/components/KeyClient';
import ProjectsSection from '@/components/ProjectsSection';
// import ResearchSection from '@/components/ResearchSection';
import Brands from '@/components/Brands';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import BlogsSection from '@/components/BlogsSection';
// import DialoguesSection from '@/components/DialoguesSection';
// import AssociateBrandsPage from '@/components/Associatebrands';
import BotIcon from '@/components/BotIcon';
import { faqs } from '@/constants/faq.constants';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Cooperative Society, NBFC & FPO Registration Consultants in Pune | VishwaSai',
  'VishwaSai provides cooperative society, NBFC, FPO registration, funding, compliance and agricultural consultancy services in Pune and across India.',
  '/',
);

export default function Home() {
  return (
    <main className="home-page">
      {/* <div className="max-w-[1480px] mx-auto"> */}
      <HeroSection />
      {/* <FoundersMessage /> */}
      <ExpertiseSection />
      <BlogsSection />
      <TeamSection />
      {/* <KeyClient /> */}
      <ProjectsSection />
      {/* <ResearchSection /> */}
      <Brands />
      <FAQSection />
      <ContactSection />

      {/* <DialoguesSection /> */}
      {/* <AssociateBrandsPage /> */}
      <BotIcon />
      {/* </div> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
