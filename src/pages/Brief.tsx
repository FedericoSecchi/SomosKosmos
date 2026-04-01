import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/seo/SEO";
import { Helmet } from "react-helmet-async";
import { useI18n } from "@/i18n/context";

const SITE_URL = "https://somoskosmos.com";

const Brief = () => {
  const { t } = useI18n();

  return (
    <div className="relative min-h-screen bg-background">
      <SEO
        title={`${t("brief.title")} | Kosmos Studio`}
        description={t("brief.subtitle")}
        url={`${SITE_URL}/brief`}
        type="website"
      />
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Header />
      <main className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <section className="section-container">
          <div className="mb-8">
            <BackButton />
          </div>
          <div className="max-w-2xl">
            <h1 className="headline-large mb-6">{t("brief.title")}</h1>
            <p className="body-large text-muted-foreground mb-10">{t("brief.subtitle")}</p>
            <a
              href={`mailto:${t("contact.email")}?subject=${encodeURIComponent(t("contact.mailtoSubject"))}`}
              className="inline-flex items-center gap-2 font-display text-xl font-semibold text-primary hover:underline"
            >
              {t("contact.email")}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Brief;
