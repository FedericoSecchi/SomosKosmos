import type { Locale } from '@/lib/site';
import { projects } from '@/content/projects';

export function Clients({ locale, h2 }: { locale: Locale; h2: string }) {
  return (
    <section className="section" aria-label={locale === 'es' ? 'Marcas con las que trabajamos' : 'Brands we work with'}>
      <div className="container">
        <div className="mb-8">
          <span className="eyebrow block">{locale === 'es' ? 'Marcas' : 'Brands'}</span>
          <h2 className="text-2xl md:text-3xl mt-2">{h2}</h2>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-5 items-center">
          {projects.map((p) => (
            <li key={p.slug} className="text-fg-muted hover:text-fg transition-colors text-sm font-display uppercase tracking-wide">
              {p.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
