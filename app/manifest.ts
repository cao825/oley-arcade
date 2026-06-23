import type { MetadataRoute } from "next"

// PWA manifest. Colors are the globals.css design tokens converted to hex:
// background_color = --background 222.2 84% 4.9% -> #020817,
// theme_color      = --primary 329 100% 65%     -> #ff4da9.
// Icons reference the fixed-path route handlers (app/icon-192, app/icon-512).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OleyArcade",
    short_name: "OleyArcade",
    description:
      "Discover OleyArcade's collection of family-built AI-powered web games designed to challenge your mind and spark your imagination.",
    start_url: "/",
    display: "standalone",
    background_color: "#020817",
    theme_color: "#ff4da9",
    icons: [
      { src: "/icon-192", sizes: "192x192", type: "image/png" },
      { src: "/icon-512", sizes: "512x512", type: "image/png" },
    ],
  }
}
