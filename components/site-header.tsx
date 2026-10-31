import { ArrowUpRight } from 'lucide-react';
import { profile, siteLinks } from '@/data/profile';

export function SiteHeader() {
  return (
    <header className="topbar">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">YY.</span>
          <span>{profile.name}</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a className="nav-contact" href={siteLinks.email}>Contact <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </nav>
    </header>
  );
}
