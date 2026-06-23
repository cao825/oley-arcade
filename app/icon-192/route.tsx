import { ImageResponse } from "next/og"
import { gamepadIcon } from "@/lib/gamepad-icon"

// Stable-URL 192x192 PNG for the web manifest (app/manifest.ts references /icon-192).
// A route handler gives a fixed path (unlike icon.tsx's hashed URL), so the manifest
// icon src always resolves.
// Prerender at build to a cached static PNG (stable manifest icon asset).
export const dynamic = "force-static"

export function GET() {
  return new ImageResponse(gamepadIcon(192), { width: 192, height: 192 })
}
