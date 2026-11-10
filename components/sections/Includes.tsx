import type { Locale } from '@/lib/site';
import { KStar } from '../KStar';

export function Includes({
  locale,
  h2,
  intro,
  items,
  note,
}: {
  locale: Locale;
  h2: string;
  intro?: string;
  items: string[];
  note?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow block mb-3">{locale === 'es' ? 'Qué incluye' : "What's included"}</span>
          <h2 className="text-3xl md:text-5xl mb-3">{h2}</h2>
          {intro ? <p className="text-fg-muted">{intro}</p> : null}
        </div>
        <ul className="grid gap-x-8 gap-y-3 md:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 border-t border-line py-3 text-fg">
              <KStar className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {note ? <p className="mt-6 text-sm text-fg-muted">{note}</p> : null}
      </div>
    </section>
  );
}
