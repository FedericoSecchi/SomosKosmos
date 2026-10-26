import Link from 'next/link';
import { KStar } from './KStar';
import type { Locale } from '@/lib/site';
import { pathFor } from '@/lib/urls';

const COPY = {
  es: {
    work: 'Trabajo',
    services: 'Servicios',
    process: 'Proceso',
    brief: 'Iniciar proyecto',
    switchLang: 'EN',
    switchAria: 'Switch to English',
  },
  en: {
    work: 'Work',
    services: 'Services',
    process: 'Process',
    brief: 'Start a project',
    switchLang: 'ES',
    switchAria: 'Cambiar a español',
  },
} as const;

export function Header({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const home = pathFor(locale);
  const other = locale === 'es' ? 'en' : 'es';
  const otherHome = pathFor(other);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href={home} className="flex items-center gap-2 text-fg hover:text-accent transition-colors">
          <KStar className="w-6 h-6 text-accent" />
          <span className="font-display font-bold uppercase tracking-wide text-lg">{locale === 'es' ? 'Somos Kosmos' : 'Somos Kosmos'}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-display font-bold uppercase tracking-wide">
          <Link href={pathFor(locale, ['services', 'websites'])} className="hover:text-accent transition-colors">
            {c.services}
          </Link>
          <Link href={`${home}#work`} className="hover:text-accent transition-colors">
            {c.work}
          </Link>
          <Link href={`${home}#process`} className="hover:text-accent transition-colors">
            {c.process}
          </Link>
          <Link href={otherHome} aria-label={c.switchAria} className="hover:text-accent transition-colors">
            {c.switchLang}
          </Link>
          <Link href={pathFor(locale, ['brief'])} className="btn-primary text-xs py-2 min-h-[40px]">
            {c.brief}
          </Link>
        </nav>
        <Link
          href={pathFor(locale, ['brief'])}
          className="btn-primary text-xs py-2 min-h-[40px] md:hidden"
        >
          {c.brief}
        </Link>
      </div>
    </header>
  );
}
