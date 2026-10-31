type SectionHeaderProps = {
  title: string;
  index?: string;
  note?: string;
  id?: string;
};

export function SectionHeader({ title, index, note, id }: SectionHeaderProps) {
  return (
    <header className="section-header">
      {index && <span className="section-index" aria-hidden="true">{index}</span>}
      <h2 id={id}>{title}</h2>
      {note && <span className="section-note">{note}</span>}
    </header>
  );
}
