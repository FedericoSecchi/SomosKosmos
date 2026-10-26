import { SITE } from './site';
import { absoluteUrl } from './urls';

const ORG_ID = `${SITE.url}/#org`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    alternateName: SITE.tagline,
    url: SITE.url,
    logo: absoluteUrl(SITE.logo),
    image: absoluteUrl(SITE.ogImage),
    email: SITE.email,
    sameAs: SITE.sameAs,
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
  };
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#service`,
    name: SITE.name,
    url: SITE.url,
    image: absoluteUrl(SITE.ogImage),
    description:
      'Estudio creativo de branding, diseño y desarrollo web, contenido audiovisual y automatizaciones para pymes y equipos digitales.',
    provider: { '@id': ORG_ID },
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: ['es-AR', 'en'],
    publisher: { '@id': ORG_ID },
  };
}

export function serviceSchema(opts: {
  slug: string;
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(opts.url)}#service`,
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.url),
    serviceType: opts.name,
    provider: { '@id': ORG_ID },
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function creativeWorkSchema(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.url),
    image: opts.image ? absoluteUrl(opts.image) : undefined,
    creator: { '@id': ORG_ID },
  };
}
