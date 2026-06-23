import { ImageResponse } from "next/og"
import { gamepadIcon } from "@/lib/gamepad-icon"

// Apple touch icon (Next metadata-route convention; auto-injected as
// <link rel="apple-touch-icon">). Apple's expected size is 180x180.
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(gamepadIcon(size.width), { ...size })
}
