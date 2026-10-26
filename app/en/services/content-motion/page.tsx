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
const PATH = ['services', 'content-motion'];
const CANONICAL = pathFor(LOCALE, PATH);
const SERVICE = getService('content-motion');

export const metadata: Metadata = {
  title: 'Social content and video production — Somos Kosmos',
  description:
    'Social templates, motion, photography and video for brands and travel destinations. In-house drone production through SkyShot.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'Social content and video production · Somos Kosmos',
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
    a: 'Both. We can build the templates and hand them over so you handle the cadence, or produce the monthly pieces as a pack. We discuss it based on budget and who runs the social accounts.',
  },
  {
    q: 'What do the templates include?',
    a: 'A set of 15–25 reusable templates (posts, stories, reel intros, carousels) based on your identity, with usage guidelines so anyone can edit them without breaking the brand.',
  },
  {
    q: 'Do you produce video?',
    a: 'Yes, photo and video. Reels, campaign pieces, event aftermovies and product material. We work in Argentina and wherever needed.',
  },
  {
    q: 'And the drone part?',
    a: 'Aerial production is handled through SkyShot (skyshot.space), the sister project of Kosmos. Ideal for tourism, real estate and destinations.',
  },
  {
    q: 'How much does it cost?',
    a: "It depends on scope. A template set isn't the same as a video shoot with drone at a hotel. We share the starting price after a short call.",
  },
  {
    q: 'Can you audit our socials first?',
    a: "Yes. We offer a social audit and improvement proposal as a first step if you don't know where to invest. It's a short deliverable that's discounted if you go ahead with content afterwards.",
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
          primaryLabel="Ask for your content proposal"
          primaryText={WHATSAPP_TEXTS.contentEN}
          note="If you don't know where to start, we run a short social audit."
        />
        <Includes
          locale={LOCALE}
          h2="What we can produce."
          items={[
            'Set of reusable Canva/Figma templates with usage tutorial.',
            'Social audit with findings and improvement proposal.',
            'Monthly design of pieces for social and campaigns.',
            'Motion graphics for reels, intros and digital campaigns.',
            'Photography and video for brand, product or destination.',
            'Drone production (via SkyShot) for tourism and real estate.',
            'Refresh of decks and sales materials.',
            'Milestone campaign materials (launch, season, event).',
          ]}
        />
        <FeaturedWork
          locale={LOCALE}
          h2="Content and video work."
          intro="Drone, photo and motion for brands and destinations. More projects in production."
          slugs={['skyshot', 'calmo', 'nude', 'the-red-guild']}
        />
        <Process
          locale={LOCALE}
          h2="How we work."
          intro="First we define what you want to happen (more followers, more inquiries, more sales). Then we design the pieces."
          steps={[
            { title: '01 · Audit', text: "What you have today, what works and what's worth changing." },
            { title: '02 · Direction', text: 'Art direction, tone and monthly content plan.' },
            { title: '03 · Production', text: 'Design, motion, photo and video according to the plan.' },
            { title: '04 · Delivery', text: 'Pieces ready to publish with a suggested calendar.' },
          ]}
          closing="We design universes."
        />
        <Pricing
          locale={LOCALE}
          h2="How much it costs."
          priceFrom="[CONFIRMAR]"
          detail="The starting price covers a scoped monthly pack or a template set. Audiovisual production (video, drone, on-location photo) is quoted per shoot."
          payment="Monthly or per project. Bank transfer: 50% at kickoff, 50% at delivery."
          primaryLabel="Ask for your starting price"
          primaryText={WHATSAPP_TEXTS.contentEN}
        />
        <Faq locale={LOCALE} h2="FAQ about content." items={FAQ} />
        <ClosingCta
          locale={LOCALE}
          h2="What content are you missing?"
          lead="Tell us what you need it for: launch, campaign, season or monthly routine. We'll put together the proposal."
          primaryLabel="Ask for your content proposal"
          primaryText={WHATSAPP_TEXTS.contentEN}
        />
      </main>
      <Footer locale={LOCALE} />
      <StickyCta locale={LOCALE} text={WHATSAPP_TEXTS.contentEN} />
    </>
  );
}
