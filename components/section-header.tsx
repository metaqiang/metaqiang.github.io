type SectionHeaderProps = {
  title: string;
};

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <h2>{title}</h2>
    </header>
  );
}
