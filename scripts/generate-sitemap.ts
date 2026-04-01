/**
 * Generates sitemap.xml with all project and topic pages.
 * Run before build: npx tsx scripts/generate-sitemap.ts
 */
import { writeFileSync } from "fs";
import { resolve } from "path";
import { projectIds } from "../src/data/projectIds";
import { projectTopics } from "../src/seo/projectTopics";
import { programmaticTopics } from "../src/seo/programmaticTopics";
import { seoKeywords } from "../src/seo/seoKeywords";

const SITE_URL = "https://somoskosmos.com";
const BUILD_DATE = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

const SERVICE_SLUGS = ["branding", "websites", "content-motion", "systems-automation"];

interface SitemapEntry {
  url: string;
  priority: string;
  changefreq: string;
}

const entries: SitemapEntry[] = [];

// Home — highest priority
entries.push({ url: SITE_URL + "/", priority: "1.0", changefreq: "weekly" });

// Service pages — high priority
SERVICE_SLUGS.forEach((slug) => {
  entries.push({ url: `${SITE_URL}/services/${slug}`, priority: "0.9", changefreq: "monthly" });
});

// Topic landing pages — high priority
programmaticTopics.forEach((topic) => {
  entries.push({ url: `${SITE_URL}/topic/${topic.slug}`, priority: "0.8", changefreq: "monthly" });
});

// Project case study pages — high priority
projectIds.forEach((projectId) => {
  entries.push({ url: `${SITE_URL}/project/${projectId}`, priority: "0.8", changefreq: "monthly" });
  projectTopics.forEach((topic) => {
    entries.push({ url: `${SITE_URL}/project/${projectId}/${topic}`, priority: "0.6", changefreq: "monthly" });
  });
  seoKeywords.forEach((keyword) => {
    entries.push({ url: `${SITE_URL}/project/${projectId}/${keyword}`, priority: "0.5", changefreq: "monthly" });
  });
});

// Note: /brief is intentionally excluded (noindexed contact form)

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
