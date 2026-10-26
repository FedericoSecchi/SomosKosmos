import Link from 'next/link';
import type { Locale } from '@/lib/site';
import { pathFor } from '@/lib/urls';
import { projects } from '@/content/projects';
import { ProjectThumb } from '../ProjectThumb';

export function FeaturedWork({
  locale,
  h2,
  intro,
  slugs,
}: {
  locale: Locale;
  h2: string;
  intro?: string;
  slugs?: string[];
}) {
  const picks = slugs
    ? slugs.map((s) => projects.find((p) => p.slug === s)).filter(Boolean)
    : projects.filter((p) => p.featured);
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow mb-3 block">{locale === 'es' ? 'Trabajo' : 'Work'}</span>
          <h2 className="text-3xl md:text-5xl mb-3">{h2}</h2>
          {intro ? <p className="text-fg-muted">{intro}</p> : null}
        </div>
        <ul className="grid gap-6 md:grid-cols-2">
          {picks.map((p) => {
            if (!p) return null;
            return (
              <li key={p.slug}>
                <Link
                  href={pathFor(locale, ['project', p.slug])}
                  className="group block overflow-hidden rounded-lg border border-line bg-surface"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <ProjectThumb project={p} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3 className="text-lg">{locale === 'es' ? p.name : (p.nameEN ?? p.name)}</h3>
                      <span className="text-xs font-display uppercase tracking-wide text-fg-muted">
                        {p.services.join(' · ')}
                      </span>
                    </div>
                    <p className="text-sm text-fg-muted">
                      {locale === 'es' ? p.oneLine : (p.oneLineEN ?? p.oneLine)}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
