/**
 * Generates sitemap.xml with only high-value, indexable pages.
 *
 * Excluded intentionally:
 *   - /brief: noindexed contact form
 *   - /project/:id/:keyword: 220 thin programmatic pages (noindexed)
 *   - external-only projects (no gallery content, noindexed)
 *
 * Run before build: npx tsx scripts/generate-sitemap.ts
 */
import { writeFileSync } from "fs";
import { resolve } from "path";
import { projectTopics } from "../src/seo/projectTopics";
import { programmaticTopics } from "../src/seo/programmaticTopics";

const SITE_URL = "https://somoskosmos.com";
const BUILD_DATE = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

const SERVICE_SLUGS = ["branding", "websites", "content-motion", "systems-automation"];

// Only premium projects with real gallery content
const PREMIUM_PROJECT_IDS = ["security-alliance", "the-red-guild", "orbita", "nude"];

interface SitemapEntry {
  url: string;
  priority: string;
  changefreq: string;
}

const entries: SitemapEntry[] = [];

// Home
entries.push({ url: SITE_URL + "/", priority: "1.0", changefreq: "weekly" });

// Service pages
SERVICE_SLUGS.forEach((slug) => {
  entries.push({ url: `${SITE_URL}/services/${slug}`, priority: "0.9", changefreq: "monthly" });
});

// Topic landing pages (keyword-targeted, distinct from service pages)
programmaticTopics.forEach((topic) => {
  entries.push({ url: `${SITE_URL}/topic/${topic.slug}`, priority: "0.8", changefreq: "monthly" });
});

// Premium project case study pages only
PREMIUM_PROJECT_IDS.forEach((projectId) => {
  entries.push({ url: `${SITE_URL}/project/${projectId}`, priority: "0.8", changefreq: "monthly" });
  // Topic variants for premium projects (branding, design-system, etc.)
  projectTopics.forEach((topic) => {
    entries.push({ url: `${SITE_URL}/project/${projectId}/${topic}`, priority: "0.6", changefreq: "monthly" });
  });
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(({ url, priority, changefreq }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${BUILD_DATE}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join("\n")}
</urlset>
`;

const outPath = resolve(process.cwd(), "public/sitemap.xml");
writeFileSync(outPath, xml, "utf-8");
console.log(`Generated sitemap with ${entries.length} URLs → ${outPath}`);
