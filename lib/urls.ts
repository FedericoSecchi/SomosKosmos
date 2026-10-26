import { SITE, type Locale } from './site';

export function pathFor(locale: Locale, segments: string[] = []): string {
  const parts: string[] = [];
  if (locale !== SITE.defaultLocale) parts.push(locale);
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
