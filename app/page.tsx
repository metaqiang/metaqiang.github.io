import { AmbientBackground } from '@/components/ambient-background';
import { AboutSection } from '@/components/about-section';
import { ProfileSidebar } from '@/components/profile-sidebar';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { TimelineSection } from '@/components/timeline-section';

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <SiteHeader />
      <main className="site" id="top">
        <div className="site-shell">
          <ProfileSidebar />
          <div className="site-content">
            <AboutSection />
            <TimelineSection />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
