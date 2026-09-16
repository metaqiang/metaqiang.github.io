import Image from 'next/image';
import {
  Building2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react';

import { profile } from '@/data/profile';

const actionIcons: Record<string, LucideIcon> = {
  Email: Mail,
  GitHub: Github,
  'Google Scholar': GraduationCap,
  LinkedIn: Linkedin,
  Zhihu: MessageCircle,
};

function isExternalLink(href: string) {
  return href.startsWith('http');
}

export function ProfileSidebar() {
  const sidebarFacts = profile.facts.filter((fact) => ['COMPANY', 'LOCATION'].includes(fact.label));

  return (
    <aside className="profile-sidebar frame" aria-label="Profile and contact information">
      <div className="sidebar-portrait">
        <Image
          src={profile.portrait.src}
          alt={profile.portrait.alt}
          width={1254}
          height={1254}
          priority
        />
      </div>

      <div className="sidebar-profile-copy">
        <h1>
          <span className="sidebar-name-en">{profile.name}</span>
        </h1>
        <p className="sidebar-role">{profile.role}</p>
      </div>

      <div className="profile-details">
        <dl className="profile-facts">
          {sidebarFacts.map((fact) => {
            const Icon = fact.label === 'COMPANY' ? Building2 : MapPin;

            return (
              <div key={fact.label}>
                <dt>
                  <Icon aria-hidden="true" size={18} strokeWidth={1.9} />
                  <span className="visually-hidden">{fact.label}</span>
                </dt>
                <dd>{fact.value}</dd>
              </div>
            );
          })}
        </dl>

        <nav className="profile-links" aria-label="Profile links">
          {profile.actions.map((action) => {
            const Icon = actionIcons[action.label];

            return (
              <a
                href={action.href}
                key={action.href}
                rel={isExternalLink(action.href) ? 'noreferrer' : undefined}
                target={isExternalLink(action.href) ? '_blank' : undefined}
              >
                <Icon aria-hidden="true" size={18} strokeWidth={1.9} />
                <span>{action.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
