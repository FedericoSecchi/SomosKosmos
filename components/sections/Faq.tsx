import type { Locale } from '@/lib/site';

export function Faq({
  locale,
  h2,
  items,
}: {
  locale: Locale;
  h2: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow block mb-3">{locale === 'es' ? 'Preguntas frecuentes' : 'FAQ'}</span>
          <h2 className="text-3xl md:text-5xl">{h2}</h2>
        </div>
        <div className="divide-y divide-line border-t border-b border-line">
          {items.map((it) => (
            <details key={it.q} className="group">
              <summary className="flex cursor-pointer items-start justify-between gap-4 py-5 text-left font-display text-lg">
                {it.q}
                <span className="text-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="pb-5 text-fg-muted leading-relaxed">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
