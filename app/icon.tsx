import { ImageResponse } from "next/og"
import { gamepadIcon } from "@/lib/gamepad-icon"

// Favicon / browser-tab app icon (Next metadata-route convention; auto-injected as
// <link rel="icon">). 64px source so it stays legible when the browser downscales.
export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(gamepadIcon(size.width), { ...size })
}
