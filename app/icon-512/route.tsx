import { ImageResponse } from "next/og"
import { gamepadIcon } from "@/lib/gamepad-icon"

// Stable-URL 512x512 PNG for the web manifest (app/manifest.ts references /icon-512).
// Prerender at build to a cached static PNG (stable manifest icon asset).
export const dynamic = "force-static"

export function GET() {
  return new ImageResponse(gamepadIcon(512), { width: 512, height: 512 })
}
