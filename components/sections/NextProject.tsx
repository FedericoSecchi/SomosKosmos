import Link from 'next/link';
import type { Locale } from '@/lib/site';
import type { ProjectCase } from '@/content/projects';
import { pathFor } from '@/lib/urls';

export function NextProject({ locale, next }: { locale: Locale; next: ProjectCase }) {
  const name = locale === 'es' ? next.name : (next.nameEN ?? next.name);
  const label = locale === 'es' ? 'Siguiente proyecto' : 'Next project';
  return (
    <section className="section">
      <div className="container">
        <Link
          href={pathFor(locale, ['project', next.slug])}
          className="flex flex-col gap-3 border border-line rounded-lg p-8 bg-surface hover:border-accent transition-colors"
        >
          <span className="eyebrow">{label}</span>
          <h2 className="text-3xl md:text-5xl group-hover:text-accent">{name} →</h2>
        </Link>
      </div>
    </section>
  );
}
