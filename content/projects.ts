export type ProjectService = 'branding' | 'websites' | 'content-motion' | 'systems-automation';

export interface ProjectCase {
  slug: string;
  name: string;
  services: ProjectService[];
  oneLine: string;
  summary: string;
  externalUrl?: string;
  image?: string;
  gallery?: string[];
  featured?: boolean;
  hiddenFromSitemap?: boolean;
  nameEN?: string;
  oneLineEN?: string;
  summaryEN?: string;
}

export const projects: ProjectCase[] = [
  {
    slug: 'security-alliance',
    name: 'Security Alliance',
    services: ['branding'],
    oneLine: 'Identidad de marca y sistema de diseño modular para una alianza global de seguridad cripto.',
    summary:
      'Diseñamos la identidad de marca y un sistema de diseño modular para Security Alliance, una alianza global de seguridad cripto.',
    image: '/projects/security-alliance/hero.jpg',
    gallery: [
      '/projects/security-alliance/gallery-1.jpg',
      '/projects/security-alliance/gallery-2.jpg',
      '/projects/security-alliance/gallery-3.jpg',
      '/projects/security-alliance/gallery-4.jpg',
    ],
    externalUrl: 'https://securityalliance.org/',
    featured: true,
    nameEN: 'Security Alliance',
    oneLineEN: 'Brand identity and modular design system for a global crypto security alliance.',
    summaryEN:
      'We created the brand identity and a modular design system for Security Alliance, a global crypto security alliance.',
  },
  {
    slug: 'the-red-guild',
    name: 'The Red Guild',
    services: ['branding', 'websites'],
    oneLine: 'Identidad visual y experiencia web para The Red Guild.',
    summary:
      'Trabajamos la identidad visual y la experiencia web de The Red Guild.',
    image: '/projects/the-red-guild/hero.jpg',
    gallery: [
      '/projects/the-red-guild/gallery-1.jpg',
      '/projects/the-red-guild/gallery-2.jpg',
      '/projects/the-red-guild/gallery-3.jpg',
      '/projects/the-red-guild/gallery-4.jpg',
      '/projects/the-red-guild/gallery-5.jpg',
      '/projects/the-red-guild/gallery-6.jpg',
    ],
    externalUrl: 'https://theredguild.org/',
    featured: true,
    nameEN: 'The Red Guild',
    oneLineEN: 'Visual identity and web experience for The Red Guild.',
    summaryEN:
      'We worked on the visual identity and the web experience of The Red Guild.',
  },
  {
    slug: 'orbita',
    name: 'Orbita',
    services: ['branding'],
    oneLine: 'Marca y experiencia digital para Orbita.',
    summary:
      'Diseñamos la marca de Orbita y su experiencia digital.',
    image: '/projects/orbita/orbita-hero.png',
    gallery: [
      '/projects/orbita/orbita-01.png',
      '/projects/orbita/orbita-02.png',
      '/projects/orbita/orbita-03.png',
      '/projects/orbita/orbita-04.png',
      '/projects/orbita/orbita-05.png',
      '/projects/orbita/orbita-06.png',
    ],
    featured: true,
    nameEN: 'Orbita',
    oneLineEN: 'Brand and digital experience for Orbita.',
    summaryEN:
      'We designed the Orbita brand and its digital experience.',
  },
  {
    slug: 'nude',
    name: 'Nude',
    services: ['branding', 'websites'],
    oneLine: 'Rediseño de marca y web para una marca natural de cuidado de la piel.',
    summary:
      'Rediseñamos la marca y la web de Nude, una marca natural de cuidado de la piel.',
    image: '/projects/nude/hero.png',
    gallery: [
      '/projects/nude/grid-01.png',
      '/projects/nude/grid-02.png',
    ],
    externalUrl: 'https://nudecosmetica.com/',
    nameEN: 'Nude',
    oneLineEN: 'Brand and web redesign for a natural skincare brand.',
    summaryEN:
      'We redesigned the brand and the website of Nude, a natural skincare brand.',
  },
  {
    slug: 'calmo',
    name: 'Calmo',
    services: ['branding', 'websites'],
    oneLine: 'Identidad visual y sitio web para un proyecto de bienestar.',
    summary:
      'Diseñamos la identidad visual y el sitio web de Calmo, un proyecto enfocado en el bienestar y en experiencias de calma.',
    image: '/projects/calmo/hero.png',
    gallery: [
      '/projects/calmo/gallery-1.png',
      '/projects/calmo/gallery-2.png',
      '/projects/calmo/gallery-3.png',
      '/projects/calmo/gallery-4.png',
      '/projects/calmo/gallery-5.png',
      '/projects/calmo/gallery-6.png',
    ],
    externalUrl: 'https://calmo.fit/',
    featured: true,
    nameEN: 'Calmo',
    oneLineEN: 'Visual identity and website for a wellbeing project.',
    summaryEN:
      'We designed the visual identity and the website for Calmo, a project focused on wellbeing and calm experiences.',
  },
  {
    slug: 'ethperience',
    name: 'ETHperience',
    services: ['websites'],
    oneLine: 'Sitio web para una plataforma de experiencias y eventos tech.',
    summary:
      'Diseñamos y desarrollamos el sitio web de ETHperience, una plataforma enfocada en experiencias y eventos tech.',
    externalUrl: 'https://ethperience.com/',
    image: '/projects/ethperience/thumb.webp',
    nameEN: 'ETHperience',
    oneLineEN: 'Website for a tech experiences and events platform.',
    summaryEN:
      'We designed and developed the website for ETHperience, a platform focused on tech experiences and events.',
  },
  {
    slug: 'deltarowling',
    name: 'DeltaRowing',
    services: ['branding', 'websites'],
    oneLine: 'Identidad de marca y presencia digital para un proyecto de deporte y agua.',
    summary:
      'Trabajamos la identidad de marca y la presencia digital de DeltaRowing, un proyecto vinculado al deporte y a experiencias en el agua.',
    externalUrl: 'https://deltarowingadventure.com/',
    image: '/projects/deltarowling/thumb.webp',
    nameEN: 'DeltaRowing',
    oneLineEN: 'Brand identity and digital presence for a sport and water project.',
    summaryEN:
      'We worked on the brand identity and digital presence for DeltaRowing, a project connected to sport and water experiences.',
  },
  {
    slug: 'fede-garcia',
    name: 'Fede García',
    services: ['websites'],
    oneLine: 'Sitio web personal para mostrar trabajo y proyectos creativos.',
    summary:
      'Hicimos el sitio web personal de Fede García, donde muestra su trabajo y sus proyectos creativos.',
    externalUrl: 'https://www.fedegarcia.com/',
    image: '/projects/fede-garcia/thumb.webp',
    nameEN: 'Fede García',
    oneLineEN: 'Personal website showcasing work and creative projects.',
    summaryEN:
      'We built the personal website of Fede García, showcasing his work and creative projects.',
  },
  {
    slug: 'mareboats',
    name: 'MareBoats',
    services: ['websites'],
    oneLine: 'Sitio web para una empresa de experiencias náuticas.',
    summary:
      'Hicimos el sitio web de MareBoats, una empresa enfocada en paseos en barco y experiencias náuticas.',
    externalUrl: 'https://mareboatshvar.com/',
    image: '/projects/mareboats/thumb.webp',
    nameEN: 'MareBoats',
    oneLineEN: 'Website for a boating and nautical experiences company.',
    summaryEN:
      'We built the website for MareBoats, a company focused on boating and nautical experiences.',
  },
  {
    slug: 'skyshot',
    name: 'SkyShot',
    services: ['content-motion'],
    oneLine: 'Contenido aéreo con dron para turismo, naturaleza y marcas.',
    summary:
      'SkyShot es un proyecto de contenido aéreo con dron enfocado en turismo, naturaleza y relato de marca.',
    externalUrl: 'https://skyshot.space/',
    image: '/projects/skyshot/thumb.webp',
    nameEN: 'SkyShot',
    oneLineEN: 'Aerial drone media for tourism, nature and brand storytelling.',
    summaryEN:
      'SkyShot is an aerial drone media project focused on tourism, nature and brand storytelling.',
  },
  {
    slug: 'pancito',
    name: 'Pancito',
    services: ['branding'],
    oneLine: 'Identidad de marca y presencia digital para un proyecto de comida artesanal.',
    summary:
      'Diseñamos la identidad de marca y la presencia digital de Pancito, un proyecto de comida artesanal.',
    externalUrl: 'https://pancito.shop/',
    image: '/projects/pancito/thumb.webp',
    nameEN: 'Pancito',
    oneLineEN: 'Brand identity and digital presence for an artisanal food project.',
    summaryEN:
      'We designed the brand identity and digital presence for Pancito, an artisanal food project.',
  },
];

export function getProject(slug: string): ProjectCase | undefined {
  return projects.find((p) => p.slug === slug);
}

export function projectsByService(service: ProjectService): ProjectCase[] {
  return projects.filter((p) => p.services.includes(service));
}

export const PROGRAMMATIC_TOPICS = [
  'brand-architecture',
  'brand-design',
  'brand-experience',
  'brand-guidelines',
  'brand-identity-system',
  'brand-strategy',
  'brand-visual-language',
  'branding',
  'branding-for-tech',
  'branding-project',
  'case-study',
  'corporate-identity',
  'creative-branding',
  'design-system',
  'digital-branding',
  'identity-design',
  'logo-design',
  'modern-branding',
  'product-branding',
  'startup-branding',
  'typography',
  'visual-brand-system',
  'visual-identity',
  'visual-language',
] as const;

export const TOPIC_LANDINGS = [
  'branding-project-examples',
  'design-system-branding',
  'startup-branding-case-study',
  'visual-identity-design',
] as const;
