import type { Metadata } from 'next';
import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/noto-sans-sc';
import '@fontsource-variable/jetbrains-mono';
import '@/styles/tokens.css';
import '@/styles/base.css';
import '@/styles/layout.css';
import '@/styles/sections.css';
import '@/styles/responsive.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://metaqiang.github.io'),
  title: 'Yuanqiang Yu — Homepage',
  description: 'Applied research scientist working on LLM agents, reinforcement learning, memory systems, and skill routing.',
  applicationName: 'Yuanqiang Yu',
  authors: [{ name: 'Yuanqiang Yu', url: 'https://metaqiang.github.io' }],
  creator: 'Yuanqiang Yu',
  keywords: ['Yuanqiang Yu', 'LLM Agents', 'Reinforcement Learning', 'Machine Learning', 'Alibaba', 'Tianjin University'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Yuanqiang Yu — Homepage',
    description: 'Applied research scientist building agents that remember, reason, and improve.',
    url: 'https://metaqiang.github.io',
    siteName: 'Yuanqiang Yu',
    type: 'profile',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Yuanqiang Yu — Applied Research Scientist' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuanqiang Yu — Homepage',
    description: 'Applied research scientist building agents that remember, reason, and improve.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
