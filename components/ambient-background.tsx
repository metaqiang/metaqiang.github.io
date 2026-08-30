export function AmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      {Array.from({ length: 12 }, (_, index) => <span key={index} />)}
    </div>
  );
}
