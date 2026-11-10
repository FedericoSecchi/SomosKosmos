export type Locale = 'es' | 'en';

export const SITE = {
  url: 'https://somoskosmos.com',
  name: 'Somos Kosmos',
  tagline: 'Kosmos Creative Studio',
  logo: '/branding/logo-light.png',
  ogImage: '/branding/og-image.jpg',
  email: 'hello@somoskosmos.com',

  // CTA principal: llamada de 20 min (Calendly). Secundario: email. Sin WhatsApp (Fede, 10/11/2026).
  calendlyUrl: 'https://calendly.com/federico-secchimarino/llamada-de-proyecto-somos-kosmos',

  defaultLocale: 'es' as const,
  locales: ['es', 'en'] as const,
  ogLocale: { es: 'es_AR', en: 'en_US' } as const,
  trailingSlash: true,

  // Hasta confirmar ciudad: áreas de servicio en texto.
  areaServed: ['Argentina', 'Remote'],

  // [CONFIRMAR: Instagram, LinkedIn, Behance reales].
  sameAs: [] as string[],
} as const;

export type SiteConfig = typeof SITE;
