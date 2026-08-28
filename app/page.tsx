import { AboutSection } from '@/components/about-section';
import { HeroSection } from '@/components/hero-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { TimelineSection } from '@/components/timeline-section';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="site" id="top">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
      </main>
      <SiteFooter />
    </>
  );
}
