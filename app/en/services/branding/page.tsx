import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyCta } from '@/components/StickyCta';
import { Hero } from '@/components/sections/Hero';
import { Includes } from '@/components/sections/Includes';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { Process } from '@/components/sections/Process';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { WHATSAPP_TEXTS } from '@/lib/whatsapp';
import { absoluteUrl, pathFor, hreflangFor } from '@/lib/urls';
import { SITE } from '@/lib/site';
import { getService } from '@/content/services';

const LOCALE = 'en' as const;
const PATH = ['services', 'branding'];
const CANONICAL = pathFor(LOCALE, PATH);
const SERVICE = getService('branding');

export const metadata: Metadata = {
  title: 'Brand identity design — Somos Kosmos',
  description:
    "We design your brand's visual identity: logo, typography, color, pieces and real-use guidelines. For small businesses, startups and personal brands.",
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Brand identity design · Somos Kosmos',
    description:
      'We create a clear, professional image so people recognize and trust you. Logo, typography, color and the full system.',
    url: absoluteUrl(CANONICAL),
    locale: SITE.ogLocale.en,
    type: 'website',
  },
};

const FAQ = [
  {
    q: 'What do I get at the end of a branding project?',
    a: 'A full identity system: logo in all its versions, primary and secondary typography, color palette, custom icons or graphic resources, sample pieces for social and a brand guide with real-use rules so anyone on your team (or a vendor) uses the brand the same way.',
  },
  {
    q: 'How long does a branding process take?',
    a: '[CONFIRMAR: typical timing]. It depends on the number of touchpoints and feedback speed. We work in 2–3 rounds per deliverable to avoid dragging it on forever.',
  },
  {
    q: 'Do you do rebranding if I already have a brand?',
    a: "Yes. It's different from starting from scratch: part of the value is deciding what to keep and what to change without losing recognition. Nude is an example: we refreshed the identity without breaking what already worked.",
  },
  {
    q: 'Can I hire branding and website together?',
    a: 'Yes, and it is the most efficient option. We work brand and site in parallel with the same team. You can see it in Calmo, The Red Guild and Nude.',
  },
  {
    q: 'How much does it cost?',
    a: 'We quote every project by scope (touchpoints, languages, number of pieces). We share the starting price on WhatsApp after a short call or a 5-question brief.',
  },
  {
    q: 'Do you deliver editable files?',
    a: 'Yes. We leave Figma files, vectors (SVG/PDF) and the brand guide in PDF so you can keep working with any creative team afterwards.',
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Somos Kosmos', path: pathFor('en', []) },
          { name: 'Services', path: pathFor('en', ['services', 'websites']) },
          { name: 'Branding', path: pathFor('en', ['services', 'branding']) },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          slug: 'branding',
          name: SERVICE.titleEN,
          description:
            'Visual identity design, logotype, typography, color palette and real-use brand guidelines for small businesses, startups and personal brands.',
          url: CANONICAL,
        })}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Header locale={LOCALE} />
      <main>
        <Hero
          locale={LOCALE}
          eyebrow="Service · Branding"
          h1="We create a clear, professional image so people recognize and trust you."
          lead="We design your brand's visual identity: logo, typography, color and custom resources. We finish with a short, usable guide so the brand lives the same across every touchpoint."
          primaryLabel="Tell us about your brand on WhatsApp"
          primaryText={WHATSAPP_TEXTS.brandingEN}
          note="Designing without strategy is not an option."
        />
        <Includes
          locale={LOCALE}
          h2="What's included in your brand identity."
          items={[
            'Brief meeting and positioning questionnaire.',
            'Visual moodboard and validated references before designing.',
            'Logo and symbol design with usage variants.',
            'Primary and secondary typography with combination rules.',
            'Color palette with primary and secondary uses.',
            'Custom graphic resources: icons, patterns, stickers.',
            'Sample pieces for social, decks and basic stationery.',
            'Brand guide in PDF with real-use rules.',
            'Editable files (Figma, SVG, PDF, PNG) ready to use.',
          ]}
          note="If you also want us to build the website, we work brand and site in parallel with the same team."
        />
        <FeaturedWork
          locale={LOCALE}
          h2="Brands we designed."
          intro="Web3 security, natural cosmetics, wellness and artisanal food. Different industries, same care."
          slugs={['security-alliance', 'nude', 'orbita', 'pancito', 'calmo', 'the-red-guild']}
        />
        <Process
          locale={LOCALE}
          h2="How we work your brand."
          intro="We work by milestones. Each stage has 2–3 feedback rounds and an agreed closing date."
          steps={[
            { title: '01 · Brief and strategy', text: 'Understanding business, customer and competitive territory.' },
            { title: '02 · Moodboard', text: 'Visual direction, references and tone validated in writing.' },
            { title: '03 · System design', text: 'Logo, typography, color, resources and sample pieces.' },
            { title: '04 · Guide and delivery', text: 'Brand guide, editable files and launch meeting.' },
          ]}
          closing="Being one more is not an option."
        />
        <Pricing
          locale={LOCALE}
          h2="How much your identity costs."
          priceFrom="[CONFIRMAR]"
          detail="The starting price covers branding for a small business with up to 5 touchpoints. Rebranding, brands with multiple lines and larger systems are quoted separately."
          payment="Bank transfer: 50% at kickoff, 50% at delivery."
          primaryLabel="Ask for your starting price"
          primaryText={WHATSAPP_TEXTS.brandingEN}
        />
        <Faq locale={LOCALE} h2="FAQ about branding." items={FAQ} />
        <ClosingCta
          locale={LOCALE}
          h2="Shall we talk about your brand?"
          lead="Tell us what you have today (if anything) and where you want to go. We'll come back with a concrete proposal."
          primaryLabel="Tell us about your brand on WhatsApp"
          primaryText={WHATSAPP_TEXTS.brandingEN}
        />
      </main>
      <Footer locale={LOCALE} />
      <StickyCta locale={LOCALE} text={WHATSAPP_TEXTS.brandingEN} />
    </>
  );
}
