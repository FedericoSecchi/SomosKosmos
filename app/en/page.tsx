import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { Process } from '@/components/sections/Process';
import { Clients } from '@/components/sections/Clients';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { absoluteUrl, pathFor, hreflangFor } from '@/lib/urls';
import { SITE } from '@/lib/site';

const LOCALE = 'en' as const;
const PATH: string[] = [];
const CANONICAL = pathFor(LOCALE, PATH);

export const metadata: Metadata = {
  title: 'Branding and web design studio for small businesses',
  description:
    'Creative studio that turns your brand into a system that works: branding, hand-coded websites, content and automation. From chaos to Kosmos.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Branding and web design studio — Somos Kosmos',
    description:
      'One team solves brand, website, content and automation. No endless rounds. No disappearing mid-project.',
    url: absoluteUrl(CANONICAL),
    locale: SITE.ogLocale.en,
    type: 'website',
  },
};

export default function HomeEN() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Somos Kosmos', path: pathFor('en', []) },
        ])}
      />
      <Header locale={LOCALE} />
      <main>
        <Hero
          locale={LOCALE}
          eyebrow="Branding · Web · Content · Automation"
          h1="Branding and web design for businesses that want to be picked."
          lead="We turn your brand into a system that works. One team handles identity, website, content and automation, with clear timelines and defined rounds. From chaos to Kosmos."
          note="Google Meet call, Monday to Thursday, 9am–6pm Argentina time."
        />
        <Clients locale={LOCALE} h2="Brands we work with." />
        <ServicesGrid
          locale={LOCALE}
          h2="What we're actually good at."
          intro="Four services, one team. Hire a single service or combine them to solve brand, web, content and automation without jumping between agencies."
        />
        <FeaturedWork
          locale={LOCALE}
          h2="Selected work."
          intro="Different industries. Same focus: ordering what's complex and making it readable."
          slugs={['security-alliance', 'calmo', 'the-red-guild', 'orbita']}
        />
        <Process
          locale={LOCALE}
          h2="How we work."
          intro="Clear brief, honest feedback, realistic deadlines. No endless rounds. No disappearing mid-project."
          steps={[
            { title: '01 · Brief', text: 'A short questionnaire to understand business, goals and what you tried.' },
            { title: '02 · Moodboard', text: 'References and direction before opening Figma. Alignment in writing.' },
            { title: '03 · Design and dev', text: 'Brand and site in parallel. 2–3 rounds of feedback per deliverable.' },
            { title: '04 · QA and launch', text: 'QA, domain and launch.' },
          ]}
          closing="Less drama. More progress."
        />
        <ClosingCta
          locale={LOCALE}
          h2="From chaos to Kosmos."
          lead="Tell us what you need. On the first call we go over the scope and give you the number."
        />
      </main>
      <Footer locale={LOCALE} />
    </>
  );
}
