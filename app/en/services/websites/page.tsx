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
const PATH = ['services', 'websites'];
const CANONICAL = pathFor(LOCALE, PATH);
const SERVICE = getService('websites');

export const metadata: Metadata = {
  title: 'Website design for small businesses',
  description:
    'Hand-coded websites: landings, business sites and pages for tourism or retail. Design, baseline SEO and launch in 1–4 weeks.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Website design for small businesses — Somos Kosmos',
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
    a: 'A landing takes 1 to 4 weeks, a 7-page site 2–3 weeks and an artist website 3–4 weeks. It depends on having copy and photos ready.',
  },
  {
    q: "What's included?",
    a: 'Content architecture, custom UX/UI design, responsive development, baseline on-page SEO, forms, CMS integration if needed, QA across devices, and launch with domain.',
  },
  {
    q: 'Do you work with Wix or other site builders?',
    a: 'No. We build everything in our own code, without templates or builders. The result is a fast site that Google can read and that can scale.',
  },
  {
    q: 'How much does it cost?',
    a: "We quote every project by scope: a landing isn't the same as a site with bookings or a product catalog. We share the starting price on WhatsApp.",
  },
  {
    q: 'How does payment work?',
    a: 'Bank transfer: 50% at kickoff and 50% at delivery.',
  },
  {
    q: 'Who handles changes after launch?',
    a: 'If you want to manage the site on your own, we build it with a CMS so you can edit text and images. [CONFIRMAR: whether you offer monthly maintenance and on what terms]',
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
          note="You'll get the starting price in our first reply."
        />
        <Includes
          locale={LOCALE}
          h2="What's included in your website."
          items={[
            'Brief with a questionnaire to understand your business.',
            'Content architecture before designing.',
            'Custom UX/UI design, no templates.',
            'Responsive development in our own code.',
            'On-page SEO baseline: titles, descriptions, hreflang, schema and sitemap.',
            'CMS to edit text and images without touching code.',
            'Contact forms.',
            'QA across devices before publishing.',
            'Domain and launch.',
          ]}
          note="Not included: content strategy and bulk content loading. A blog, newsletter, press kit or store can be added later."
        />
        <FeaturedWork
          locale={LOCALE}
          h2="Websites we built."
          intro="Tourism, wellness, web3, tech events and personal brand. Same focus: fast reading, clear action."
          slugs={['calmo', 'the-red-guild', 'mareboats', 'ethperience', 'fede-garcia', 'deltarowling']}
        />
        <Process
          locale={LOCALE}
          h2="How we work."
          intro="No endless rounds. No disappearing mid-project. 2–3 feedback rounds per deliverable."
          steps={[
            { title: '01 · Brief', text: 'Questionnaire to understand business, goals and references.' },
            { title: '02 · Moodboard', text: 'Visual references and site architecture before designing.' },
            { title: '03 · Design and development', text: 'UX/UI design and development in code, with 2–3 feedback rounds.' },
            { title: '04 · Adjustments and launch', text: 'Device QA, domain and publishing.' },
          ]}
          closing="Less drama. More progress."
        />
        <Pricing
          locale={LOCALE}
          h2="How much it costs."
          priceFrom="[CONFIRMAR]"
          detail="We quote every project by scope. A landing page for a single-service business starts below a corporate site with a CMS; a site with bookings or integrations sits above. We'll share the exact starting price in the first message."
          payment="Bank transfer: 50% at kickoff, 50% at delivery."
        />
        <Faq locale={LOCALE} h2="FAQ about our websites." items={FAQ} />
        <ClosingCta
          locale={LOCALE}
          h2="Shall we talk about your website?"
          lead="Tell us what your business is and what you want the site to do. We'll come back with a clear proposal."
        />
      </main>
      <Footer locale={LOCALE} />
    </>
  );
}
