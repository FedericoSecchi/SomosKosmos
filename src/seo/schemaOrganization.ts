const SITE_URL = "https://somoskosmos.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kosmos Studio",
  url: SITE_URL,
  logo: `${SITE_URL}/branding/logo-light.png`,
  sameAs: [] as string[],
};
