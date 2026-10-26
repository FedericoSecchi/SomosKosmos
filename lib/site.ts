export type Locale = 'es' | 'en';

export const SITE = {
  url: 'https://somoskosmos.com',
  name: 'Somos Kosmos',
  tagline: 'Kosmos Creative Studio',
  logo: '/branding/logo-light.png',
  ogImage: '/branding/og-image.jpg',
  email: 'hello@somoskosmos.com',

  // [CONFIRMAR: número E.164 de WhatsApp y quién responde]. Sin número: wa.me sin phone deja al
  // usuario elegir el chat; el prellenado funciona igual.
  whatsappPhone: '',
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
