import type { ReactNode } from 'react';

export type SiteLink = {
  label: string;
  href: string;
};

export type ProfileFact = {
  label: string;
  value: string;
};

export type EventPaper = {
  title: string;
  authors: string;
  links: SiteLink[];
};

export type EventLogo = {
  src: string;
  alt: string;
  square?: boolean;
};

export type Milestone = {
  date: {
    iso: string;
    label: string;
  };
  title: string;
  titleLink?: SiteLink;
  logo?: EventLogo;
  tags?: string[];
  description?: ReactNode;
  papers?: EventPaper[];
};
