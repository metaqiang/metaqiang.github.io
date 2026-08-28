import { aboutContent } from '@/data/profile';

import { SectionHeader } from './section-header';

export function AboutSection() {
  return (
    <section className="frame about" id="about">
      <SectionHeader title="About" />
      <div className="about-grid">
        <div>{aboutContent}</div>
      </div>
    </section>
  );
}
