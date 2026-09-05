import type { CSSProperties } from 'react';

const waves = [
  { className: 'ambient-wave-blue', base: 15, amplitude: 7, phase: 0 },
  { className: 'ambient-wave-green', base: 46, amplitude: 8, phase: 1.35 },
  { className: 'ambient-wave-gold', base: 77, amplitude: 6, phase: 2.7 },
] as const;

export function AmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      {waves.map((wave, waveIndex) => (
        <span className={`ambient-wave ${wave.className}`} key={wave.className}>
          {Array.from({ length: 26 }, (_, index) => {
            const progress = index / 25;
            const left = -4 + progress * 108;
            const top = wave.base + Math.sin(progress * Math.PI * 2 + wave.phase) * wave.amplitude;
            const style = {
              left: `${left.toFixed(2)}%`,
              top: `${top.toFixed(2)}%`,
              animationDelay: `-${((index * 1.4 + waveIndex * 4.3) % 12).toFixed(1)}s`,
            } satisfies CSSProperties;

            return <i key={index} style={style} />;
          })}
        </span>
      ))}
    </div>
  );
}
