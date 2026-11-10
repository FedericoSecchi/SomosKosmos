import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Includes } from '@/components/sections/Includes';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { Process } from '@/components/sections/Process';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { absoluteUrl, pathFor, hreflangFor } from '@/lib/urls';
import { SITE } from '@/lib/site';
import { getService } from '@/content/services';

const LOCALE = 'en' as const;
const PATH = ['services', 'branding'];
const CANONICAL = pathFor(LOCALE, PATH);
const SERVICE = getService('branding');

export const metadata: Metadata = {
  title: 'Brand identity design',
  description:
    "We design your brand's visual identity: logo, typography, color, pieces and real-use guidelines. For small businesses, startups and personal brands.",
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Brand identity design — Somos Kosmos',
    description:
      'A brand identity so people recognize and trust you. Logo, typography, color and the full system.',
    url: absoluteUrl(CANONICAL),
    locale: SITE.ogLocale.en,
    type: 'website',
  },
};

const FAQ = [
  {
    q: 'What do I get at the end of a branding project?',
    a: 'An identity system: logo, typography, color palette and a brand guide with real-use rules, so anyone on your team (or a vendor) uses the brand the same way. [CONFIRMAR: additional pieces included]',
  },
  {
    q: 'How long does a branding process take?',
    a: '[CONFIRMAR: typical timing]. It depends on the number of touchpoints and feedback speed. We work in 2–3 rounds per deliverable to avoid dragging it on forever.',
  },
  {
    q: 'Do you do rebranding if I already have a brand?',
    a: "Yes. It's different from starting from scratch: part of the value is deciding what to keep and what to change without losing recognition. Nude is an example: brand and web redesign for a natural skincare brand.",
  },
  {
    q: 'Can I hire branding and website together?',
    a: 'Yes, and it is the most efficient option. We work brand and site in parallel with the same team. You can see it in Calmo, The Red Guild and Nude.',
  },
  {
    q: 'How much does it cost?',
    a: "We quote every project by scope. We'll give you the number on the first call.",
  },
  {
    q: 'Do you deliver editable files?',
    a: '[CONFIRMAR: whether editable files are delivered and in which formats]',
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
          h1="Brand identity design so people recognize and trust you."
          lead="Branding for small businesses, startups and personal brands: we design the visual identity with logo, typography and color. We finish with a real-use brand guide so the brand lives the same across every touchpoint."
          note="Designing without strategy is not an option."
        />
        <Includes
          locale={LOCALE}
          h2="What's included in your brand identity."
          items={[
            'Brief with a questionnaire to understand your business.',
            'Moodboard with references before designing.',
            'Logo, typography and color palette design.',
            'Brand guide with real-use rules.',
            '[CONFIRMAR: additional pieces and files delivered]',
          ]}
          note="If you also want us to build the website, we work brand and site in parallel with the same team."
        />
        <FeaturedWork
          locale={LOCALE}
          h2="Brands we designed."
          intro="Crypto security, skincare, wellness and artisanal food. Different industries, same care."
          slugs={['security-alliance', 'nude', 'orbita', 'pancito', 'calmo', 'the-red-guild']}
        />
        <Process
          locale={LOCALE}
          h2="How we work your brand."
          intro="Each deliverable has 2–3 feedback rounds."
          steps={[
            { title: '01 · Brief', text: 'Questionnaire to understand the business, the customer and the competition.' },
            { title: '02 · Moodboard', text: 'Visual direction and references before designing.' },
            { title: '03 · System design', text: 'Logo, typography and color.' },
            { title: '04 · Guide and delivery', text: 'Brand guide with real-use rules.' },
          ]}
          closing="Being one more is not an option."
        />
        <Pricing
          locale={LOCALE}
          h2="How much your identity costs."
        />
        <Faq locale={LOCALE} h2="FAQ about branding." items={FAQ} />
        <ClosingCta
          locale={LOCALE}
          h2="Shall we talk about your brand?"
          lead="Tell us what you have today (if anything) and where you want to go. We'll come back with a concrete proposal."
        />
      </main>
      <Footer locale={LOCALE} />
    </>
  );
}
