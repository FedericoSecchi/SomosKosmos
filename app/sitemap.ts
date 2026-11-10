import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { absoluteUrl, pathFor } from '@/lib/urls';
import { projects } from '@/content/projects';

export const dynamic = 'force-static';

const LAST = '2026-10-26';

export default function sitemap(): MetadataRoute.Sitemap {
  const esRoutes: { path: string[]; priority?: number }[] = [
    { path: [], priority: 1 },
    { path: ['services', 'websites'], priority: 0.9 },
    { path: ['services', 'branding'], priority: 0.9 },
    { path: ['services', 'systems-automation'], priority: 0.9 },
    { path: ['services', 'content-motion'], priority: 0.9 },
    { path: ['brief'], priority: 0.7 },
    { path: ['privacidad'], priority: 0.3 },
  ];
  const enRoutes: { path: string[]; priority?: number }[] = [
    { path: [], priority: 0.9 },
    { path: ['services', 'websites'], priority: 0.8 },
    { path: ['services', 'branding'], priority: 0.8 },
    { path: ['services', 'systems-automation'], priority: 0.8 },
    { path: ['services', 'content-motion'], priority: 0.8 },
  ];

  const es = esRoutes.map(({ path, priority }) => ({
    url: absoluteUrl(pathFor('es', path)),
    lastModified: LAST,
    changeFrequency: 'monthly' as const,
    priority,
  }));
  const en = enRoutes.map(({ path, priority }) => ({
    url: absoluteUrl(pathFor('en', path)),
    lastModified: LAST,
    changeFrequency: 'monthly' as const,
    priority,
  }));
  const casos = projects
    .filter((p) => !p.hiddenFromSitemap)
    .map((p) => ({
      url: absoluteUrl(pathFor('es', ['project', p.slug])),
      lastModified: LAST,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    }));

  // Mantiene referencia a SITE.url para evitar imports huérfanos
  void SITE;

  return [...es, ...en, ...casos];
}
