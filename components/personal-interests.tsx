'use client';

import { useState, type ReactNode } from 'react';

export function PersonalInterests({ children }: { children: ReactNode }) {
  const [showTravel, setShowTravel] = useState(false);

  return (
    <>
      <div className="sidebar-note">
        <span>PERSONAL INTERESTS</span>
        <p>Photography, swimming, guitar,<br />Rubik’s cubes, reading &amp; <button className="travel-toggle" type="button" aria-expanded={showTravel} aria-controls="travel-panel" onClick={() => setShowTravel((open) => !open)}>travel</button>.</p>
      </div>
      <div id="travel-panel" hidden={!showTravel}>{children}</div>
    </>
  );
}
