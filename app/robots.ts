import type { MetadataRoute } from "next"

// Allow all crawlers; point them at the sitemap. Host is derived from metadataBase
// (https://oleyarcade.com) set in app/layout.tsx.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://oleyarcade.com/sitemap.xml",
  }
}
