import type { Metadata, Viewport } from 'next';
import { Syne, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { JsonLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { organizationSchema, professionalServiceSchema, websiteSchema } from '@/lib/schema';

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#222222',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Somos Kosmos — Branding y diseño web para pymes',
    template: '%s · Somos Kosmos',
  },
  description:
    'Estudio creativo que convierte tu marca en un sistema que funciona: branding, sitios en código, contenido y automatizaciones. Del caos al Kosmos.',
  applicationName: 'Somos Kosmos',
  authors: [{ name: 'Somos Kosmos' }],
  creator: 'Somos Kosmos',
  publisher: 'Somos Kosmos',
  icons: {
    icon: [
      { url: '/branding/favicon.ico', sizes: 'any' },
      { url: '/branding/favicon.png', type: 'image/png' },
    ],
    apple: '/branding/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    siteName: 'Somos Kosmos',
    locale: 'es_AR',
    alternateLocale: ['en_US'],
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: 'Somos Kosmos — Branding, diseño web, contenido y automatizaciones.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [SITE.ogImage],
  },
  robots: { index: true, follow: true },
  formatDetection: { email: false, telephone: false, address: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" translate="no" className={`${syne.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="google" content="notranslate" />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={professionalServiceSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
