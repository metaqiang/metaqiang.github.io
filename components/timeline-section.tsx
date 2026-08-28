import Image from 'next/image';

import { milestones } from '@/data/milestones';
import type { EventPaper, Milestone, SiteLink } from '@/types/profile';

import { SectionHeader } from './section-header';

const CURRENT_AUTHOR = 'Yuanqiang Yu';

function AuthorList({ authors }: Pick<EventPaper, 'authors'>) {
  const parts = authors.split(CURRENT_AUTHOR);

  return (
    <>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {index > 0 && <strong>{CURRENT_AUTHOR}</strong>}
          {part}
        </span>
      ))}
    </>
  );
}

function MilestoneTitle({ title, link }: { title: string; link?: SiteLink }) {
  if (!link || !title.includes(link.label)) return <>{title}</>;

  const [before, after] = title.split(link.label);
  return (
    <>
      {before}
      <a href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>
      {after}
    </>
  );
}

function EventTags({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;

  return (
    <span className="event-tags" aria-label={tags.join(', ')}>
      {tags.map((tag) => (
        <span className="event-tag" aria-hidden="true" key={tag}>{tag}</span>
      ))}
    </span>
  );
}

function EventSummary({ item }: { item: Milestone }) {
  const logoClassName = [
    'event-summary',
    item.logo && 'has-logo',
    item.logo?.square && 'has-square-logo',
  ].filter(Boolean).join(' ');

  return (
    <div className={logoClassName}>
      {item.logo && (
        <span className={`event-logo${item.logo.square ? ' event-logo-square' : ''}`}>
          <Image src={item.logo.src} alt={item.logo.alt} width={256} height={112} />
        </span>
      )}
      <div className="event-copy">
        <h3>
          <MilestoneTitle title={item.title} link={item.titleLink} />
          <EventTags tags={item.tags} />
        </h3>
        {item.description && <span className="milestone-description">{item.description}</span>}
      </div>
    </div>
  );
}

function EventPapers({ papers }: { papers?: EventPaper[] }) {
  if (!papers?.length) return null;

  return (
    <div className="event-papers">
      {papers.map((paper) => (
        <article className="event-paper" key={paper.title}>
          <div>
            <h4>{paper.title}</h4>
            <p><AuthorList authors={paper.authors} /></p>
          </div>
          {paper.links.length > 0 && (
            <div className="event-links">
              {paper.links.map((link) => (
                <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

function TimelineItem({ item }: { item: Milestone }) {
  return (
    <article className="timeline-row">
      <time dateTime={item.date.iso}>{item.date.label}</time>
      <div className="timeline-rail" aria-hidden="true"><i /></div>
      <div className="timeline-content">
        <EventSummary item={item} />
        <EventPapers papers={item.papers} />
      </div>
    </article>
  );
}

export function TimelineSection() {
  const sortedMilestones = [...milestones].sort((a, b) => b.date.iso.localeCompare(a.date.iso));

  return (
    <section className="frame" id="key-events">
      <SectionHeader title="Key Events" />
      <div className="timeline">
        {sortedMilestones.map((item) => (
          <TimelineItem item={item} key={`${item.date.iso}-${item.title}`} />
        ))}
      </div>
    </section>
  );
}
