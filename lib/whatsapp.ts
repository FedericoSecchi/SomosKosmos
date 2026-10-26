import { SITE } from './site';

export function whatsappUrl(text: string): string {
  const encoded = encodeURIComponent(text);
  const phone = SITE.whatsappPhone.replace(/\D/g, '');
  return phone
    ? `https://wa.me/${phone}?text=${encoded}`
    : `https://wa.me/?text=${encoded}`;
}

export const WHATSAPP_TEXTS = {
  home: 'Hola Kosmos! Vengo de la web. Tengo un proyecto de [marca/web/contenido/automatización] para [mi negocio].',
  websites: 'Hola Kosmos! Necesito una web para [negocio].',
  branding: 'Hola Kosmos! Quiero trabajar la marca de [negocio].',
  systems: 'Hola Kosmos! Quiero automatizar [proceso].',
  content: 'Hola Kosmos! Quiero contenido para [marca].',
  brief: 'Hola Kosmos! Vengo de la web. Quiero contarles un proyecto.',
  homeEN: "Hi Kosmos! I'm coming from your website. I'd like to talk about a [branding/web/content/automation] project for my business.",
  websitesEN: 'Hi Kosmos! I need a website for [business].',
  brandingEN: 'Hi Kosmos! I want to work on the brand for [business].',
  systemsEN: 'Hi Kosmos! I want to automate [process].',
  contentEN: 'Hi Kosmos! I want social and video content for [brand].',
} as const;
