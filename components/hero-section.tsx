import Image from 'next/image';

import { profile } from '@/data/profile';

function isExternalLink(href: string) {
  return href.startsWith('http');
}

export function HeroSection() {
  return (
    <section className="hero frame">
      <div className="hero-copy">
        <p className="eyebrow">PROFILE</p>
        <h1>
          <span className="hero-name-en">{profile.name}</span>
          <span className="hero-name-cn" lang="zh-CN">{profile.chineseName}</span>
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">{profile.introduction}</p>
        <div className="hero-actions">
          {profile.actions.map((action, index) => (
            <a
              className={`contact-link${index === 0 ? ' primary' : ''}`}
              href={action.href}
              key={action.href}
              rel={isExternalLink(action.href) ? 'noreferrer' : undefined}
              target={isExternalLink(action.href) || action.href.endsWith('.pdf') ? '_blank' : undefined}
            >
              {action.label} ↗
            </a>
          ))}
        </div>
      </div>

      <aside className="hero-profile" aria-label="Current profile">
        <div className="portrait-wrap">
          <Image
            src={profile.portrait.src}
            alt={profile.portrait.alt}
            width={680}
            height={720}
            priority
          />
        </div>
        <dl className="profile-facts">
          {profile.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}
