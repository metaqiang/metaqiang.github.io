import { ArrowUp } from 'lucide-react';

export function SiteFooter() {
  return <footer className="site-footer"><div><span>© {new Date().getFullYear()} Yuanqiang Yu</span><a href="#top">Back to top <ArrowUp size={16} aria-hidden="true" /></a></div></footer>;
}
