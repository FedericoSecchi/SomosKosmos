import Link from 'next/link';
import { KStar } from './KStar';
import { SITE, type Locale } from '@/lib/site';
import { pathFor } from '@/lib/urls';

const COPY = {
  es: {
    services: 'Servicios',
    websites: 'Websites',
    branding: 'Branding',
    content: 'Contenido & Motion',
    systems: 'Sistemas & Automatizaciones',
    links: 'Enlaces',
    brief: 'Iniciar un proyecto',
    privacy: 'Privacidad',
    legal: 'Hecho con cuidado desde Argentina.',
    contact: 'Contacto',
    rights: '© 2026 Somos Kosmos.',
  },
  en: {
    services: 'Services',
    websites: 'Websites',
    branding: 'Branding',
    content: 'Content & Motion',
    systems: 'Systems & Automation',
    links: 'Links',
    brief: 'Start a project',
    privacy: 'Privacy',
    legal: 'Made with care from Argentina.',
    contact: 'Contact',
    rights: '© 2026 Somos Kosmos.',
  },
} as const;

export function Footer({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const prefix = locale === 'es' ? [] : [locale];
  const svcPath = (slug: string) => pathFor(locale, [...prefix.slice(0, 0), 'services', slug]);
  return (
    <footer className="border-t border-line mt-16">
      <div className="container py-12 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <KStar className="w-5 h-5 text-accent" />
            <span className="font-display font-bold uppercase tracking-wide">Somos Kosmos</span>
          </div>
          <p className="text-fg-muted text-sm max-w-xs">{c.legal}</p>
          <p className="text-fg-muted text-sm mt-4">
            <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors">
              {SITE.email}
            </a>
          </p>
        </div>
        <div>
          <h3 className="eyebrow mb-3">{c.services}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href={pathFor(locale, ['services', 'websites'])} className="hover:text-accent">{c.websites}</Link></li>
            <li><Link href={pathFor(locale, ['services', 'branding'])} className="hover:text-accent">{c.branding}</Link></li>
            <li><Link href={pathFor(locale, ['services', 'content-motion'])} className="hover:text-accent">{c.content}</Link></li>
            <li><Link href={pathFor(locale, ['services', 'systems-automation'])} className="hover:text-accent">{c.systems}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-3">{c.links}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href={pathFor(locale, ['brief'])} className="hover:text-accent">{c.brief}</Link></li>
            <li><Link href={pathFor('es', ['privacidad'])} className="hover:text-accent">{c.privacy}</Link></li>
            <li><a href={SITE.calendlyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Calendly</a></li>
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-3">{c.contact}</h3>
          <p className="text-fg-muted text-sm">
            Argentina
            <br />
            {locale === 'es' ? 'Lun–Jue · 9–18 ART' : 'Mon–Thu · 9am–6pm ART'}
          </p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container py-4 text-xs text-fg-muted flex flex-wrap items-center justify-between gap-2">
          <span>{c.rights}</span>
          <span>Del caos al Kosmos.</span>
        </div>
      </div>
    </footer>
  );
}
