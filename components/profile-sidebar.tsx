import Image from 'next/image';
import { ArrowUpRight, Building2, Github, GraduationCap, Linkedin, Mail, MapPin, type LucideIcon } from 'lucide-react';
import { profile } from '@/data/profile';
import { ResearchRobot } from './research-mascots';
import { TravelMap } from './travel-map';
import { PersonalInterests } from './personal-interests';

const actionIcons: Record<string, LucideIcon> = {
  Email: Mail, GitHub: Github, 'Google Scholar': GraduationCap, LinkedIn: Linkedin,
};

export function ProfileSidebar() {
  return (
    <aside className="profile-sidebar" aria-label="Profile and contact information">
      <div className="profile-card">
        <div className="portrait-robot"><ResearchRobot /></div>
        <div className="portrait-wrap">
          <div className="sidebar-portrait">
            <Image src={profile.portrait.src} alt={profile.portrait.alt} width={1254} height={1254} priority />
          </div>
          <span className="portrait-label">HELLO, WORLD.</span>
        </div>
        <div className="sidebar-profile-copy">
          <h1>{profile.name}<span className="sidebar-name-zh" lang="zh-Hans">{profile.nameZh}</span></h1>
          <p className="sidebar-role">{profile.role}</p>
        </div>
        <div className="profile-details">
          <dl className="profile-facts">
            {profile.facts.filter((fact) => ['COMPANY', 'LOCATION'].includes(fact.label)).map((fact) => {
              const Icon = fact.label === 'COMPANY' ? Building2 : MapPin;
              return <div key={fact.label}><dt><Icon size={16} aria-hidden="true" /><span className="visually-hidden">{fact.label}</span></dt><dd>{fact.value}</dd></div>;
            })}
          </dl>
          <nav className="profile-links" aria-label="Profile links">
            {profile.actions.map((action) => {
              const Icon = actionIcons[action.label];
              const external = action.href.startsWith('http');
              return <a href={action.href} key={action.label} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}><Icon size={16} aria-hidden="true" /><span>{action.label}</span><ArrowUpRight className="profile-link-arrow" size={14} aria-hidden="true" /></a>;
            })}
          </nav>
        </div>
      </div>
      <div className="sidebar-note">
        <span>RESEARCH INTERESTS</span>
        <p>AI agents and reinforcement learning, from learning algorithms to reliable deployment.</p>
      </div>
      <PersonalInterests><TravelMap /></PersonalInterests>
    </aside>
  );
}
