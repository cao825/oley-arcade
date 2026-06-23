import type { MetadataRoute } from "next"

// Single-page umbrella site: the only URL on this domain is the home page. Every
// game link in app/page.tsx is OUTBOUND to another domain, so it is deliberately
// NOT listed here (those are other sites — listing them would be incorrect/spammy).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://oleyarcade.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
