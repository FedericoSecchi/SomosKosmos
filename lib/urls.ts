import { SITE, type Locale } from './site';

// Secciones que solo existen en ES (PLAN §2: casos en EN enlazan a los de ES).
// Un link EN hacia ellas apunta a la URL en ES en lugar de a una /en/… inexistente.
const ES_ONLY_SECTIONS = new Set(['project', 'brief', 'privacidad']);

export function pathFor(locale: Locale, segments: string[] = []): string {
  const parts: string[] = [];
  const first = segments[0];
  const esOnly = first !== undefined && ES_ONLY_SECTIONS.has(first);
  if (locale !== SITE.defaultLocale && !esOnly) parts.push(locale);
  for (const s of segments) if (s) parts.push(s);
  if (parts.length === 0) return '/';
  return `/${parts.join('/')}${SITE.trailingSlash ? '/' : ''}`;
}

export function absoluteUrl(path: string): string {
  const base = SITE.url.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

export function hreflangFor(segments: string[], hasEN: boolean): Record<string, string> {
  const map: Record<string, string> = {
    'es-AR': pathFor('es', segments),
  };
  if (hasEN) {
    map['en'] = pathFor('en', segments);
  }
  map['x-default'] = pathFor('es', segments);
  return map;
}
