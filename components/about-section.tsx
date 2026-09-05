import { aboutContent } from '@/data/profile';

import { AmbientBackground } from './ambient-background';
import { SectionHeader } from './section-header';

export function AboutSection() {
  return (
    <section className="frame about" id="about">
      <AmbientBackground />
      <SectionHeader title="About" />
      <div className="about-grid">
        <div>{aboutContent}</div>
      </div>
    </section>
  );
}
