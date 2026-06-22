import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Self-hosted via next/font (build-time download, no render-blocking external request
// and no @next/next/no-page-custom-font warning). Both are variable fonts; omitting
// `weight` includes the full variable axis — Orbitron 400–900 and Space Grotesk
// 300–700 — i.e. exactly the weights the previous <link> requested. Exposed as CSS
// variables consumed by tailwind.config.ts (display/body) and globals.css.
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const title = "OleyArcade - Family-Built AI-Powered Web Games"
const description =
  "Discover OleyArcade's collection of family-built AI-powered web games designed to challenge your mind and spark your imagination."

export const metadata: Metadata = {
  metadataBase: new URL("https://oleyarcade.com"),
  title,
  description,
  // Image is auto-populated from the app/opengraph-image.tsx file convention for
  // both openGraph and twitter — no need to list it here.
  openGraph: {
    title,
    description,
    url: "https://oleyarcade.com",
    siteName: "OleyArcade",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${orbitron.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
