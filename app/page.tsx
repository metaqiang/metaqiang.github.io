import { AboutSection } from '@/components/about-section';
import { EducationSection, ExperienceSection, HonorsSection } from '@/components/experience-sections';
import { ProfileSidebar } from '@/components/profile-sidebar';
import { PublicationsSection } from '@/components/publications-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main className="site" id="main-content">
        <div className="site-shell">
          <ProfileSidebar />
          <div className="site-content">
            <AboutSection />
            <PublicationsSection />
            <ExperienceSection />
            <EducationSection />
            <HonorsSection />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
