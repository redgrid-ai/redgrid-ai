import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const head = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-head', display: 'swap' });
const body = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  title: 'Redgrid Software – Software consultancy',
  description: 'Redgrid Software is a software consultancy that designs, builds and rescues business-critical systems.',
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
