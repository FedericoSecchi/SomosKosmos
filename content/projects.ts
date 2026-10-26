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
  needsThumbnail?: boolean;
  nameEN?: string;
  oneLineEN?: string;
  summaryEN?: string;
}

export const projects: ProjectCase[] = [
  {
    slug: 'security-alliance',
    name: 'Security Alliance',
    services: ['branding'],
    oneLine: 'Identidad modular y sistema de marca para una alianza global de seguridad cripto.',
    summary:
      'Diseñamos la identidad de Security Alliance y un sistema modular que ordena una red de equipos de seguridad web3. Logo, tipografía, color, plantillas y guías para que la marca escale sin perder foco.',
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
    oneLineEN: 'Modular identity and brand system for a global crypto security alliance.',
    summaryEN:
      'We designed the identity of Security Alliance and a modular system that organizes a network of web3 security teams. Logo, typography, color, templates and guidelines so the brand can scale without losing focus.',
  },
  {
    slug: 'the-red-guild',
    name: 'The Red Guild',
    services: ['branding', 'websites'],
    oneLine: 'Identidad y sitio para una guild de seguridad: foco, oficio y comunidad.',
    summary:
      'Trabajamos la identidad y el sitio de The Red Guild, un colectivo de seguridad web3. Imagen con carácter, bloques claros para explicar su trabajo y una web rápida que se lee en todos los dispositivos.',
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
    oneLineEN: 'Identity and website for a security guild: focus, craft and community.',
    summaryEN:
      'We worked the identity and the website of The Red Guild, a web3 security collective. A bold visual system, clear blocks to explain their work and a fast website that reads on every device.',
  },
  {
    slug: 'orbita',
    name: 'Orbita',
    services: ['branding'],
    oneLine: 'Identidad y lenguaje visual para una propuesta digital en órbita.',
    summary:
      'Creamos la marca de Orbita con un sistema de piezas listo para redes, decks y producto. Tipografía con personalidad, paleta sobria y recursos gráficos que se reutilizan sin perder consistencia.',
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
    oneLineEN: 'Identity and visual language for a digital brand in orbit.',
    summaryEN:
      'We built the Orbita brand with a system ready for social, decks and product. Typography with personality, a quiet palette and graphic resources that reuse without losing consistency.',
  },
  {
    slug: 'nude',
    name: 'Nude',
    services: ['branding', 'websites'],
    oneLine: 'Rebranding y web para una marca de cosmética natural.',
    summary:
      'Rediseñamos la identidad de Nude y rehicimos su web con foco en el producto, textura y claridad. Imagen de marca más cuidada, ficha de producto que vende y un sistema simple para sumar lanzamientos.',
    image: '/projects/nude/hero.png',
    gallery: [
      '/projects/nude/grid-01.png',
      '/projects/nude/grid-02.png',
    ],
    externalUrl: 'https://nudecosmetica.com/',
    nameEN: 'Nude',
    oneLineEN: 'Rebranding and website for a natural cosmetics brand.',
    summaryEN:
      'We redesigned the Nude identity and rebuilt the website around the product, texture and clarity. A more considered brand image, a product page that sells and a simple system to add launches.',
  },
  {
    slug: 'calmo',
    name: 'Calmo',
    services: ['branding', 'websites'],
    oneLine: 'Marca y sitio para una propuesta de bienestar y descanso.',
    summary:
      'Diseñamos la identidad de Calmo y su web: dirección fotográfica, tipografía amable y un flujo claro para que la gente entienda el servicio y reserve. Menos ruido, más calma.',
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
    oneLineEN: 'Brand and website for a wellness and rest proposal.',
    summaryEN:
      'We designed the Calmo identity and its website: photo direction, friendly typography and a clear flow so people understand the service and book. Less noise, more calm.',
  },
  {
    slug: 'ethperience',
    name: 'ETHperience',
    services: ['websites'],
    oneLine: 'Sitio para una plataforma de experiencias y eventos tech.',
    summary:
      'Hicimos la web de ETHperience con foco en programa, speakers y venue. Estructura rápida, legible y fácil de actualizar para cada edición.',
    externalUrl: 'https://ethperience.com/',
    needsThumbnail: true,
    nameEN: 'ETHperience',
    oneLineEN: 'Website for a tech experiences and events platform.',
    summaryEN:
      "We built the ETHperience website around program, speakers and venue. A fast, readable structure that's easy to update for each edition.",
  },
  {
    slug: 'deltarowling',
    name: 'DeltaRowing',
    services: ['branding', 'websites'],
    oneLine: 'Marca y web para una experiencia de remo y aventura.',
    summary:
      'Trabajamos la identidad y la web de DeltaRowing (dominio deltarowingadventure.com). Imagen que transmite deporte y naturaleza, y un sitio que explica la experiencia y permite reservar.',
    externalUrl: 'https://deltarowingadventure.com/',
    needsThumbnail: true,
    nameEN: 'DeltaRowing',
    oneLineEN: 'Brand and website for a rowing and adventure experience.',
    summaryEN:
      'We worked the identity and the website for DeltaRowing (deltarowingadventure.com). A brand that reads as sport and nature, and a site that explains the experience and lets people book.',
  },
  {
    slug: 'fede-garcia',
    name: 'Fede García',
    services: ['websites'],
    oneLine: 'Sitio personal para un artista: foco en obra y recorrido.',
    summary:
      'Diseñamos y desarrollamos la web personal de Fede García. Un lugar propio para mostrar la obra, el recorrido y los contactos profesionales, con un ritmo que respeta el trabajo.',
    externalUrl: 'https://www.fedegarcia.com/',
    needsThumbnail: true,
    nameEN: 'Fede García',
    oneLineEN: 'Personal site for an artist: focus on work and career.',
    summaryEN:
      "We designed and developed Fede García's personal website. A space of his own to showcase the work, the trajectory and the professional contacts, with a rhythm that respects the art.",
  },
  {
    slug: 'mareboats',
    name: 'MareBoats',
    services: ['websites'],
    oneLine: 'Web para una experiencia náutica en Hvar.',
    summary:
      'Hicimos la web de MareBoats, una empresa náutica en Croacia. Catálogo de embarcaciones, precios y reserva en un sitio liviano que vende en varios idiomas.',
    externalUrl: 'https://mareboatshvar.com/',
    needsThumbnail: true,
    nameEN: 'MareBoats',
    oneLineEN: 'Website for a nautical experience in Hvar.',
    summaryEN:
      'We built the MareBoats website, a nautical company in Croatia. Fleet, pricing and booking in a lightweight site that sells across languages.',
  },
  {
    slug: 'skyshot',
    name: 'SkyShot',
    services: ['content-motion'],
    oneLine: 'Producción audiovisual con dron para marcas y destinos.',
    summary:
      'SkyShot es el proyecto hermano de Kosmos para producción con dron. Cuando una marca necesita footage aéreo, fotos de altura o cobertura outdoor, lo resolvemos ahí.',
    externalUrl: 'https://skyshot.space/',
    needsThumbnail: true,
    nameEN: 'SkyShot',
    oneLineEN: 'Drone media production for brands and destinations.',
    summaryEN:
      'SkyShot is the sister project of Kosmos for drone production. When a brand needs aerial footage, altitude photography or outdoor coverage, we solve it there.',
  },
  {
    slug: 'pancito',
    name: 'Pancito',
    services: ['branding'],
    oneLine: 'Identidad para un proyecto gastronómico artesanal.',
    summary:
      'Diseñamos la marca de Pancito, un proyecto gastronómico artesanal. Logo con personalidad, paleta cálida y piezas listas para carta, redes y packaging.',
    externalUrl: 'https://pancito.shop/',
    needsThumbnail: true,
    nameEN: 'Pancito',
    oneLineEN: 'Identity for an artisanal food project.',
    summaryEN:
      'We designed the Pancito brand, an artisanal food project. A logo with personality, a warm palette and ready-to-use pieces for menu, social and packaging.',
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
