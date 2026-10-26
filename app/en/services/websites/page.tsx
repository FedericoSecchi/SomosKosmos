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
const PATH = ['services', 'websites'];
const CANONICAL = pathFor(LOCALE, PATH);
const SERVICE = getService('websites');

export const metadata: Metadata = {
  title: 'Website design for small businesses — Somos Kosmos',
  description:
    'Hand-coded websites: landings, business sites and pages for tourism or retail. Design, baseline SEO and launch in 1–4 weeks.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Website design for small businesses · Somos Kosmos',
    description:
      'Hand-coded sites, no templates. Custom UX/UI, baseline SEO, forms, CMS and QA. Starting price shared on WhatsApp.',
    url: absoluteUrl(CANONICAL),
    locale: SITE.ogLocale.en,
    type: 'website',
  },
};

const FAQ = [
  {
    q: 'How long does a website take?',
    a: 'A well-made landing takes 1 to 4 weeks, a 5–7 page business site 2–3 weeks, and a site with a CMS 3–4 weeks. It depends on having copy and photos ready (if not, we coordinate it).',
  },
  {
    q: "What's included?",
    a: 'Content architecture, custom UX/UI design, responsive development, baseline on-page SEO, forms, CMS integration if needed, QA across devices, and launch with domain. We leave everything documented so you can edit what changes often.',
  },
  {
    q: 'Do you work with WordPress, Webflow or Wix?',
    a: 'No. We build everything in code (Next.js), without templates or builders. The result is faster, more readable for Google and easier to scale than a website on top of a builder.',
  },
  {
    q: 'How much does it cost?',
    a: "We quote every project by scope: a landing isn't the same as a site with bookings or a product catalog. We share the starting price on WhatsApp after a short call or a 5-question brief.",
  },
  {
    q: 'How does payment work?',
    a: 'Bank transfer: 50% at kickoff and 50% at delivery. For longer projects we agree on intermediate milestone payments.',
  },
  {
    q: 'Who handles changes after launch?',
    a: 'If you want to manage the site on your own, we leave a lightweight CMS and a short guide. If you prefer to delegate, we offer monthly maintenance.',
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Somos Kosmos', path: pathFor('en', []) },
          { name: 'Services', path: pathFor('en', ['services', 'websites']) },
          { name: 'Websites', path: pathFor('en', ['services', 'websites']) },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          slug: 'websites',
          name: SERVICE.titleEN,
          description:
            'Design and development of hand-coded websites for small businesses, brands and personal projects. Includes on-page SEO baseline, CMS, forms and QA.',
          url: CANONICAL,
        })}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Header locale={LOCALE} />
      <main>
        <Hero
          locale={LOCALE}
          eyebrow="Service · Websites"
          h1="We build websites that explain what you do, organize your info and help people choose you."
          lead="Hand-coded landings and custom websites, no templates or builders. UX/UI design, baseline SEO, forms and CMS if needed. We deliver in 1–4 weeks with 2–3 rounds of feedback."
          primaryLabel="Tell us about your website on WhatsApp"
          primaryText={WHATSAPP_TEXTS.websitesEN}
          note="You'll get the starting price in our first reply."
        />
        <Includes
          locale={LOCALE}
          h2="What's included in your website."
          items={[
            'Brief meeting and questionnaire to understand your business.',
            'Content architecture and wireframes before designing.',
            'Custom UX/UI design (no templates), with a reusable system.',
            'Responsive development in code (Next.js), fast and accessible.',
            'On-page SEO baseline: titles, descriptions, hreflang, schema and sitemap.',
            'Lightweight CMS to edit texts, images and entries without touching code.',
            'Contact forms and WhatsApp integration.',
            'QA across devices and browsers before publishing.',
            'Domain, hosting and guided launch.',
            'Short documentation on how to maintain the site.',
          ]}
          note="Not included by default: editorial strategy, bulk content loading and large ecommerce. Quoted separately if needed."
        />
        <FeaturedWork
          locale={LOCALE}
          h2="Websites we built."
          intro="Tourism, cosmetics, sports, web3 and personal brand. Same focus: fast reading, clear action."
          slugs={['calmo', 'the-red-guild', 'mareboats', 'ethperience', 'fede-garcia', 'deltarowling']}
        />
        <Process
          locale={LOCALE}
          h2="How we work."
          intro="No endless rounds. No disappearing mid-project. 2–3 feedback rounds per deliverable and milestone-based delivery."
          steps={[
            { title: '01 · Brief', text: 'Short questionnaire to understand business, goals and references.' },
            { title: '02 · Moodboard and architecture', text: 'Visual references and site map before opening Figma.' },
            { title: '03 · Design and development', text: 'UX/UI design and development in parallel. Clickable prototypes.' },
            { title: '04 · QA and launch', text: 'Device testing, content loading, domain and publishing.' },
          ]}
          closing="Less drama. More progress."
        />
        <Pricing
          locale={LOCALE}
          h2="How much it costs."
          priceFrom="[CONFIRMAR]"
          detail="We quote every project by scope. A landing starts below a corporate site with a CMS; a site with bookings or integrations sits above. We'll share the exact starting price in the first message."
          payment="Bank transfer: 50% at kickoff, 50% at delivery."
          primaryLabel="Ask for your starting price"
          primaryText={WHATSAPP_TEXTS.websitesEN}
        />
        <Faq locale={LOCALE} h2="FAQ about our websites." items={FAQ} />
        <ClosingCta
          locale={LOCALE}
          h2="Shall we talk about your website?"
          lead="Tell us what your business is and what you want the site to do. We'll come back with a clear proposal."
          primaryLabel="Tell us about your website on WhatsApp"
          primaryText={WHATSAPP_TEXTS.websitesEN}
        />
      </main>
      <Footer locale={LOCALE} />
      <StickyCta locale={LOCALE} text={WHATSAPP_TEXTS.websitesEN} />
    </>
  );
}
