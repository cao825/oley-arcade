import { ImageResponse } from "next/og"

// Zero-asset OG card generated at build time. Colors are the site's design tokens
// read from app/globals.css (not guessed): --background 222.2 84% 4.9% (near-black),
// --primary 329 100% 65% (brand magenta), --foreground 210 40% 98% (near-white).
export const alt = "OleyArcade - Family-Built AI-Powered Web Games"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const BG = "hsl(222.2, 84%, 4.9%)"
const MAGENTA = "hsl(329, 100%, 65%)"
const FG = "hsl(210, 40%, 98%)"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: BG,
          // subtle synthwave grid + glow vignette
          backgroundImage:
            "radial-gradient(circle at 50% 38%, rgba(255,77,170,0.18), transparent 55%)",
          border: `12px solid ${MAGENTA}`,
        }}
      >
        {/* Gamepad glyph (drawn with boxes — no external asset / emoji fetch) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: 188,
            height: 104,
            borderRadius: 52,
            border: `9px solid ${MAGENTA}`,
            padding: "0 24px",
            marginBottom: 44,
          }}
        >
          {/* D-pad */}
          <div style={{ display: "flex", position: "relative", width: 40, height: 40 }}>
            <div
              style={{ position: "absolute", left: 15, top: 0, width: 10, height: 40, background: MAGENTA }}
            />
            <div
              style={{ position: "absolute", left: 0, top: 15, width: 40, height: 10, background: MAGENTA }}
            />
          </div>
          {/* Buttons */}
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ width: 18, height: 18, borderRadius: 9, background: MAGENTA }} />
            <div style={{ width: 18, height: 18, borderRadius: 9, background: MAGENTA }} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 116,
            fontWeight: 800,
            letterSpacing: -2,
            color: MAGENTA,
            textShadow: "0 0 30px rgba(255,77,170,0.6)",
          }}
        >
          OleyArcade
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 40,
            fontWeight: 500,
            color: FG,
            opacity: 0.85,
          }}
        >
          Family-Built AI-Powered Web Games
        </div>
      </div>
    ),
    { ...size },
  )
}
