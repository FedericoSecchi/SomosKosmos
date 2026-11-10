export type ServiceSlug = 'websites' | 'branding' | 'content-motion' | 'systems-automation';

export interface ServiceMeta {
  slug: ServiceSlug;
  title: string;
  titleEN: string;
  shortTitle: string;
  shortTitleEN: string;
  tagline: string;
  taglineEN: string;
  teaser: string;
  teaserEN: string;
}

export const services: ServiceMeta[] = [
  {
    slug: 'websites',
    title: 'Diseño de páginas web para pymes',
    titleEN: 'Website design for small businesses',
    shortTitle: 'Websites',
    shortTitleEN: 'Websites',
    tagline:
      'Creamos sitios que explican lo que hacés, ordenan la info y ayudan a que te elijan.',
    taglineEN:
      'We build websites that explain what you do, organize your info and help people choose you.',
    teaser:
      'Landings y sitios a medida, en código propio. Diseño, SEO base y publicación en 1–4 semanas.',
    teaserEN:
      'Landings and custom websites, hand-coded. Design, baseline SEO and publishing in 1–4 weeks.',
  },
  {
    slug: 'branding',
    title: 'Diseño de identidad de marca',
    titleEN: 'Brand identity design',
    shortTitle: 'Branding',
    shortTitleEN: 'Branding',
    tagline:
      'Creamos una imagen clara y profesional para que te reconozcan y confíen en vos.',
    taglineEN:
      'We create a clear, professional image so people recognize and trust you.',
    teaser:
      'Logo, tipografía, color y guías para que la marca viva igual en cada punto de contacto.',
    teaserEN:
      'Logo, typography, color and guidelines so the brand lives the same across every touchpoint.',
  },
  {
    slug: 'systems-automation',
    title: 'Automatización de WhatsApp y procesos para negocios',
    titleEN: 'WhatsApp and process automation for businesses',
    shortTitle: 'Sistemas & Automatizaciones',
    shortTitleEN: 'Systems & Automation',
    tagline: 'Tu negocio funcionando solo.',
    taglineEN: 'Your business, running on its own.',
    teaser:
      'Automatizamos mensajes, ventas y procesos: bots de WhatsApp, flujos en n8n e integraciones.',
    teaserEN:
      'We automate messages, sales and workflows: WhatsApp bots, n8n flows and integrations.',
  },
  {
    slug: 'content-motion',
    title: 'Contenido para redes y producción audiovisual',
    titleEN: 'Social content and video production',
    shortTitle: 'Contenido & Motion',
    shortTitleEN: 'Content & Motion',
    tagline:
      'Piezas para redes y campañas pensadas para atraer y generar resultados.',
    taglineEN:
      'Social and campaign pieces designed to attract attention and move the needle.',
    teaser:
      'Templates reutilizables, motion, fotografía y video. Dron propio con SkyShot.',
    teaserEN:
      'Reusable templates, motion, photography and video. In-house drone with SkyShot.',
  },
];

export function getService(slug: ServiceSlug): ServiceMeta {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Service not found: ${slug}`);
  return service;
}
