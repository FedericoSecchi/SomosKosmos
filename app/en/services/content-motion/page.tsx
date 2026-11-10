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
const PATH = ['services', 'content-motion'];
const CANONICAL = pathFor(LOCALE, PATH);
const SERVICE = getService('content-motion');

export const metadata: Metadata = {
  title: 'Social content and video production',
  description:
    'Social templates, motion, photography and video for brands and travel destinations. In-house drone production through SkyShot.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Social content and video production — Somos Kosmos',
    description:
      'Social and campaign pieces designed to attract attention and move the needle. Reusable templates, motion, photo and video. In-house drone with SkyShot.',
    url: absoluteUrl(CANONICAL),
    locale: SITE.ogLocale.en,
    type: 'website',
  },
};

const FAQ = [
  {
    q: 'Do you work monthly or one-off?',
    a: 'We can build Canva templates with a tutorial so you handle the cadence. [CONFIRMAR: whether you also produce monthly pieces and how they are hired]',
  },
  {
    q: 'What do the templates include?',
    a: 'A set of 20+ reusable templates based on your identity, with a tutorial so anyone can edit them without breaking the brand.',
  },
  {
    q: 'Do you produce video?',
    a: 'Yes, photo and video for brands and tourism, with aerial footage via SkyShot. [CONFIRMAR: usual formats and where you shoot]',
  },
  {
    q: 'And the drone part?',
    a: 'Aerial production is handled through SkyShot (skyshot.space), our drone media project focused on tourism, nature and brand storytelling.',
  },
  {
    q: 'How much does it cost?',
    a: "We quote every project by scope. We'll give you the number on the first call.",
  },
  {
    q: 'Can you audit our socials first?',
    a: "Yes. We offer a social audit and improvement proposal as a first step if you don't know where to invest.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Somos Kosmos', path: pathFor('en', []) },
          { name: 'Services', path: pathFor('en', ['services', 'websites']) },
          { name: 'Content & Motion', path: pathFor('en', ['services', 'content-motion']) },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          slug: 'content-motion',
          name: SERVICE.titleEN,
          description:
            'Social content design, reusable templates, motion graphics, photography and video with in-house drone production.',
          url: CANONICAL,
        })}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Header locale={LOCALE} />
      <main>
        <Hero
          locale={LOCALE}
          eyebrow="Service · Content & Motion"
          h1="Social and campaign pieces designed to attract attention and move the needle."
          lead="Reusable templates, motion, photography and video. In-house drone production through SkyShot. For brands that want to keep presence without depending on a different freelance designer every month."
          note="If you don't know where to start, we begin with a social audit."
        />
        <Includes
          locale={LOCALE}
          h2="What we can produce."
          items={[
            'Canva templates with your brand, reusable and with a usage tutorial.',
            'Social audit and improvement proposal.',
            'Design of pieces for social and campaigns.',
            'Motion graphics for brands.',
            'Photography and video for tourism and brands.',
            'Drone video for tourism businesses (via SkyShot).',
            'Deck refresh.',
          ]}
        />
        <FeaturedWork
          locale={LOCALE}
          h2="Content and video work."
          intro="Drone, photo and motion for brands and destinations."
          slugs={['skyshot', 'calmo', 'nude', 'the-red-guild']}
        />
        <Process
          locale={LOCALE}
          h2="How we work."
          intro="First we define what you want to happen (more followers, more inquiries, more sales). Then we design the pieces."
          steps={[
            { title: '01 · Audit', text: "What you have today, what works and what's worth changing." },
            { title: '02 · Direction', text: 'Art direction, tone and content plan.' },
            { title: '03 · Production', text: 'Design, motion, photo and video according to the plan.' },
            { title: '04 · Delivery', text: 'Pieces ready to publish.' },
          ]}
          closing="We design universes."
        />
        <Pricing
          locale={LOCALE}
          h2="How much it costs."
        />
        <Faq locale={LOCALE} h2="FAQ about content." items={FAQ} />
        <ClosingCta
          locale={LOCALE}
          h2="What content are you missing?"
          lead="Tell us what you need it for: launch, campaign, season or monthly routine. We'll put together the proposal."
        />
      </main>
      <Footer locale={LOCALE} />
    </>
  );
}
