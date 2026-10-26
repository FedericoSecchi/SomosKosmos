import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyCta } from '@/components/StickyCta';
import { Hero } from '@/components/sections/Hero';
import { Includes } from '@/components/sections/Includes';
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
const PATH = ['services', 'systems-automation'];
const CANONICAL = pathFor(LOCALE, PATH);
const SERVICE = getService('systems-automation');

export const metadata: Metadata = {
  title: 'WhatsApp and process automation for businesses — Somos Kosmos',
  description:
    'We automate messaging, sales and support flows: WhatsApp bots, n8n workflows and integrations. For small businesses that want to stop answering and typing everything by hand.',
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor(PATH, true),
  },
  openGraph: {
    title: 'WhatsApp and process automation · Somos Kosmos',
    description:
      'Your business, running on its own. WhatsApp bots, n8n flows, integrations and automatic sales follow-up.',
    url: absoluteUrl(CANONICAL),
    locale: SITE.ogLocale.en,
    type: 'website',
  },
};

const FAQ = [
  {
    q: 'What can you automate?',
    a: 'Customer replies and follow-up on WhatsApp, data syncing across systems (CRM, spreadsheets, invoicing), bookings and confirmations, newsletter sending, report generation and any flow you do manually that repeats. We handle anything that can be connected via API or WhatsApp Business.',
  },
  {
    q: 'Do I need to have anything ready?',
    a: "Useful: a WhatsApp Business account (or the possibility to open one), access to the tools you already use (spreadsheets, CRM, calendars, email) and a short list of what eats your time. If you don't know where to start, we map it together in the first call.",
  },
  {
    q: 'Do you use n8n or something else?',
    a: 'We use n8n when it makes sense (open source, self-hosted, portable). For specific integrations we also use the WhatsApp API, OpenAI/Claude if an AI step is needed, and whatever the project requires. We work on your infrastructure, not ours.',
  },
  {
    q: 'Can it be changed later?',
    a: "Yes. We leave the flow documented and, if you want, a simple dashboard so you can edit replies and messages without touching code. If you prefer, we stay on monthly maintenance.",
  },
  {
    q: 'How much does it cost?',
    a: "We quote by scope. A WhatsApp bot with 3 simple flows isn't the same as a system connected to your CRM that automates bookings and invoicing. We share the starting price after a short call.",
  },
  {
    q: 'What is a design system and why do you offer it together?',
    a: "A design system is a set of components, styles and rules so your brand stays the same across every piece (web, social, email, decks). It's the flip side of the bot: it automates how the brand communicates, not just what it answers.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Somos Kosmos', path: pathFor('en', []) },
          { name: 'Services', path: pathFor('en', ['services', 'websites']) },
          { name: 'Systems & Automation', path: pathFor('en', ['services', 'systems-automation']) },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          slug: 'systems-automation',
          name: SERVICE.titleEN,
          description:
            'WhatsApp automation, sales process flows, integrations between tools and design systems for small teams.',
          url: CANONICAL,
        })}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Header locale={LOCALE} />
      <main>
        <Hero
          locale={LOCALE}
          eyebrow="Service · Systems & Automation"
          h1="Your business, running on its own."
          lead="We automate messages, sales and processes so you save time. WhatsApp bots, n8n flows, integrations between tools and design systems that keep the brand in order."
          primaryLabel="Tell us what you want to automate"
          primaryText={WHATSAPP_TEXTS.systemsEN}
          note="We handle anything that can be connected via API or WhatsApp Business."
        />
        <Includes
          locale={LOCALE}
          h2="What we can solve."
          items={[
            'WhatsApp Business bots with menu, replies and handoff to a human.',
            'Support and sales flows in n8n (open source, self-hosted).',
            'Integrations between CRM, spreadsheets, calendars and invoicing.',
            'Automatic reply and follow-up for new customers.',
            'Booking, payment and reminder confirmations.',
            'Monthly reports via email or Slack.',
            'Social/form data pushed into your CRM.',
            'AI automations when they help (summaries, lead classification).',
            'Figma design systems so every piece ships consistently.',
          ]}
          note="Specific case studies (our own) are added here when a client authorizes showing them [CONFIRMAR: publishable example]."
        />
        <Process
          locale={LOCALE}
          h2="How we do it."
          intro="We ship the minimum that works first, test it with real data and then scale. No big systems nobody uses."
          steps={[
            { title: '01 · Mapping', text: 'See what you do by hand today and where time is lost.' },
            { title: '02 · MVP', text: 'Build the minimum useful version of the flow and turn it on.' },
            { title: '03 · Testing', text: 'Real data for 1–2 weeks, adjustments and improvements.' },
            { title: '04 · Handoff', text: 'Documentation, dashboard and team handover.' },
          ]}
          closing="Less drama. More progress."
        />
        <Pricing
          locale={LOCALE}
          h2="How much it costs."
          priceFrom="[CONFIRMAR]"
          detail="The starting price covers a small flow (bot with 3–4 replies and one integration). Larger systems are quoted by scope."
          payment="Bank transfer: 50% at kickoff, 50% at delivery. Monthly maintenance is available afterwards."
          primaryLabel="Ask for your starting price"
          primaryText={WHATSAPP_TEXTS.systemsEN}
        />
        <Faq locale={LOCALE} h2="FAQ about automation." items={FAQ} />
        <ClosingCta
          locale={LOCALE}
          h2="What do you want to stop doing by hand?"
          lead="Tell us the process that eats most of your time. We'll say if it can be automated and how much it costs."
          primaryLabel="Tell us what you want to automate"
          primaryText={WHATSAPP_TEXTS.systemsEN}
        />
      </main>
      <Footer locale={LOCALE} />
      <StickyCta locale={LOCALE} text={WHATSAPP_TEXTS.systemsEN} />
    </>
  );
}
