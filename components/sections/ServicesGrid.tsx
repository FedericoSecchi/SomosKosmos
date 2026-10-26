import Link from 'next/link';
import type { Locale } from '@/lib/site';
import { pathFor } from '@/lib/urls';
import { services } from '@/content/services';

export function ServicesGrid({
  locale,
  h2,
  intro,
}: {
  locale: Locale;
  h2: string;
  intro?: string;
}) {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow mb-3 block">{locale === 'es' ? 'Servicios' : 'Services'}</span>
          <h2 className="text-3xl md:text-5xl mb-3">{h2}</h2>
          {intro ? <p className="text-fg-muted">{intro}</p> : null}
        </div>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={pathFor(locale, ['services', s.slug])}
                className="card group"
              >
                <div>
                  <h3 className="text-xl mb-2 group-hover:text-accent transition-colors">
                    {locale === 'es' ? s.shortTitle : s.shortTitleEN}
                  </h3>
                  <p className="text-fg-muted text-sm">
                    {locale === 'es' ? s.teaser : s.teaserEN}
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between text-xs font-display uppercase tracking-wide">
                  <span className="text-fg-muted">
                    {locale === 'es' ? s.priceFrom : s.priceFromEN}
                  </span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">
                    {locale === 'es' ? 'Ver →' : 'View →'}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
