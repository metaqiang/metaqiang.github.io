'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AlignLeft, ArrowUpRight, Award, Bookmark, Check, ChevronDown, Code2, Copy, Download, FileText, Globe, Maximize2, X } from 'lucide-react';
import { publications, type Publication } from '@/data/publications';
import { SectionHeader } from './section-header';

function Authors({ names }: { names: string }) {
  return names.split('Yuanqiang Yu').map((part, index) => <span key={index}>{index > 0 && <strong>Yuanqiang Yu</strong>}{part}</span>);
}

function PaperFigure({ paper }: { paper: Publication }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!open || !dialogRef.current) return;
    dialogRef.current.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  if (!paper.figure) return null;
  return (
    <div className="paper-figure">
      <button type="button" className="figure-preview" onClick={() => setOpen(true)} aria-label={`Enlarge figure for ${paper.title}`}>
        <Image src={paper.figure.src} alt={paper.figure.alt} width={paper.figure.width} height={paper.figure.height} sizes="(max-width: 680px) 90vw, 210px" />
        <span className="figure-preview-label">View figure <Maximize2 size={12} aria-hidden="true" /></span>
      </button>
      {open && <dialog className="figure-dialog" ref={dialogRef} onClose={() => setOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }} aria-label={`Research figure: ${paper.title}`}>
        <div className="figure-dialog-inner">
          <div className="figure-dialog-header"><span>{paper.title}</span><button type="button" autoFocus onClick={() => dialogRef.current?.close()} aria-label="Close figure"><X size={21} aria-hidden="true" /></button></div>
          <Image src={paper.figure.src} alt={paper.figure.alt} width={paper.figure.width} height={paper.figure.height} sizes="90vw" />
          <div className="figure-dialog-caption"><p>{paper.figure.caption}</p><div className="figure-dialog-links"><a href={paper.figure.src} target="_blank" rel="noreferrer">Full-size image <ArrowUpRight size={14} aria-hidden="true" /></a><a href={paper.figure.source} target="_blank" rel="noreferrer">Source <ArrowUpRight size={14} aria-hidden="true" /></a></div></div>
        </div>
      </dialog>}
    </div>
  );
}

function PublicationCard({ paper }: { paper: Publication }) {
  const [panel, setPanel] = useState<'abstract' | 'bibtex' | null>(null);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');

  function togglePanel(nextPanel: 'abstract' | 'bibtex') {
    setPanel(panel === nextPanel ? null : nextPanel);
    setCopyState('idle');
  }

  async function copyCitation() {
    try {
      await navigator.clipboard.writeText(paper.bibtex);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
  }

  return (
    <article className="publication-card" id={paper.id}>
      <PaperFigure paper={paper} />
      <div className="paper-body">
        <div className="paper-meta">
          <span className={`venue-badge ${paper.year === 2026 ? 'venue-lilac' : 'venue-mint'}`}>{paper.venue}</span>
          {paper.award && <span className="paper-award"><Award size={13} aria-hidden="true" />{paper.award}</span>}
          <span className="paper-topic">{paper.topic}</span>
        </div>
        <h3><a href={paper.links.find((link) => link.kind === 'paper')?.href} target="_blank" rel="noreferrer">{paper.title}<ArrowUpRight size={18} aria-hidden="true" /></a></h3>
        <p className="paper-authors"><Authors names={paper.authors} /></p>
        <div className="paper-resources">
          {paper.links.map((link) => {
            const Icon = link.kind === 'code' ? Code2 : link.kind === 'project' ? Globe : FileText;
            return <a key={link.href} className={`resource-link resource-${link.kind}${link.label === 'arXiv' ? ' resource-arxiv' : ''}`} href={link.href} target="_blank" rel="noreferrer"><span className="resource-label"><Icon size={15} aria-hidden="true" />{link.label}</span><span className="resource-detail">{link.detail}</span></a>;
          })}
          <div className="paper-disclosures" role="group" aria-label="Paper details">
            {([
              { value: 'abstract', label: 'Abstract', Icon: AlignLeft },
              { value: 'bibtex', label: 'BibTeX', Icon: Bookmark },
            ] as const).map(({ value, label, Icon }) => (
              <button key={value} className={`paper-toggle${panel === value ? ' is-open' : ''}`} type="button" aria-expanded={panel === value} aria-controls={`details-${paper.id}`} onClick={() => togglePanel(value)}>
                <Icon size={15} aria-hidden="true" /><span>{label}</span><ChevronDown className="disclosure-chevron" size={13} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
        {panel && <section className="paper-panel" id={`details-${paper.id}`} aria-labelledby={`details-title-${paper.id}`}>
          <div className="paper-panel-toolbar">
            <h4 id={`details-title-${paper.id}`}>{panel === 'abstract' ? 'Abstract' : 'BibTeX'}<span className="visually-hidden"> for {paper.title}</span></h4>
            {panel === 'bibtex' && <div className="paper-panel-actions">
                <button type="button" onClick={copyCitation} aria-label={`Copy BibTeX for ${paper.title}`}>{copyState === 'copied' ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}{copyState === 'copied' ? 'Copied!' : 'Copy'}</button>
                <a href={`/bib/${paper.id}.bib`} download={`${paper.id}.bib`} aria-label={`Download BibTeX for ${paper.title}`}><Download size={14} aria-hidden="true" />.bib</a>
            </div>}
          </div>
          <div className="paper-panel-content">
            {panel === 'abstract' ? <p>{paper.abstract}</p> : <>
              <pre tabIndex={0} aria-label={`BibTeX citation for ${paper.title}`}><code>{paper.bibtex}</code></pre>
              <span className={copyState === 'error' ? 'copy-error' : 'visually-hidden'} role="status">{copyState === 'copied' ? 'Citation copied to clipboard.' : copyState === 'error' ? 'Copy is unavailable. Select the citation above or download the .bib file.' : ''}</span>
            </>}
          </div>
        </section>}
      </div>
    </article>
  );
}

export function PublicationsSection() {
  return (
    <section className="content-section publications" id="publications" aria-labelledby="publications-title">
      <SectionHeader title="Publications" index="02" id="publications-title" />
      <div className="publication-list">{publications.map((paper) => <PublicationCard key={paper.id} paper={paper} />)}</div>
    </section>
  );
}
