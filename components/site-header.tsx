import { profile } from '@/data/profile';

export function SiteHeader() {
  return (
    <header className="topbar">
      <nav className="nav" aria-label="Primary navigation">
        <div className="header-brand">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true" />
            {profile.name}
          </a>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#key-events">Key Events</a>
        </div>
      </nav>
    </header>
  );
}
