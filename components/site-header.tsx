import { profile } from '@/data/profile';

export function SiteHeader() {
  return (
    <header className="topbar">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top">{profile.name}</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#key-events">Key Events</a>
        </div>
      </nav>
    </header>
  );
}
