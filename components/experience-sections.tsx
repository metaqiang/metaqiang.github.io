import Image from 'next/image';
import { honors } from '@/data/honors';

import { siteLinks } from '@/data/profile';

import { SectionHeader } from './section-header';

export function ExperienceSection() {
  return (
    <section className="content-section experience-section" id="experience">
      <SectionHeader title="Experience" index="03" />
      <div className="institution-list">
        <article className="institution-row">
          <div className="institution-logo">
            <Image src="/institutions/alibaba.png" alt="Alibaba Group logo" width={160} height={80} />
          </div>
          <div className="institution-body">
            <div className="institution-meta">
              <h3><a href={siteLinks.alibaba} target="_blank" rel="noreferrer">Alibaba Group</a></h3>
              <span className="date-label"><time dateTime="2025-10">Oct 2025</time> — <span className="current-label">Present</span></span>
            </div>
            <p className="institution-role">Applied Research Scientist <span>· Hangzhou, China</span></p>
            <p className="institution-description">Building LLM agent systems, with a focus on post-training, agent memory, and reliable long-horizon task execution.</p>
          </div>
        </article>
        <article className="institution-row">
          <div className="institution-logo">
            <Image src="/institutions/huawei.png" alt="Huawei logo" width={160} height={80} />
          </div>
          <div className="institution-body">
            <div className="institution-meta">
              <h3><a href={siteLinks.huawei} target="_blank" rel="noreferrer">Huawei</a></h3>
              <span className="date-label"><time dateTime="2023-06">Jun 2023</time> — <time dateTime="2025-10">Oct 2025</time></span>
            </div>
            <p className="institution-role">Machine Learning Engineer <span>· Shenzhen, China</span></p>
            <p className="institution-description">Contributed to <a href={siteLinks.mindSpore} target="_blank" rel="noreferrer">MindSpore</a>, <a href={siteLinks.mindRlhf} target="_blank" rel="noreferrer">MindRLHF</a>, and the MetaERP agent for invoice reconciliation and validation.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="content-section education-section" id="education">
      <SectionHeader title="Education" index="04" />
      <div className="institution-list">
        <article className="institution-row">
          <div className="institution-logo institution-logo-square">
            <Image src="/institutions/tianjin-university-emblem.png" alt="Tianjin University emblem" width={96} height={96} />
          </div>
          <div className="institution-body">
            <div className="institution-meta">
              <h3>Tianjin University</h3>
              <span className="date-label"><time dateTime="2020">2020</time> — <time dateTime="2023">2023</time></span>
            </div>
            <p className="institution-role">M.Sc. in Computer Science &amp; Technology</p>
            <p className="institution-description">Advised by <a href={siteLinks.jianyeHaoScholar} target="_blank" rel="noreferrer">Prof. Jianye Hao</a>. Research in deep reinforcement learning, transfer learning, and multi-task reinforcement learning.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export function HonorsSection() {
  return (
    <section className="content-section honors-section" id="honors">
      <SectionHeader title="Selected honors & awards" index="05" />
      <div className="honors-list">
        {honors.map((honor) => (
          <article className="honor-row" key={honor.id}>
            <time className="honor-year" dateTime={String(honor.year)}>{honor.year}</time>
            <div className="honor-copy"><h3>{honor.title}</h3></div>
            <div className="honor-recognition">
              <span className={`honor-level honor-${honor.level.toLowerCase()}`}>{honor.level}</span>
              <span className="honor-distinction">{honor.distinction}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
