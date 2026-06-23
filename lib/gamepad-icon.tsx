import type { ReactElement } from "react"

// Shared gamepad glyph for the metadata-route icons (favicon, apple-icon, manifest
// 192/512). Drawn with boxes — zero asset — and uses the same brand colors and
// outlined-controller look as app/opengraph-image.tsx so every icon is visually
// consistent with the OG card. Colors are the globals.css design tokens converted
// to hex: --background 222.2 84% 4.9% -> #020817, --primary 329 100% 65% -> #ff4da9.
const BG = "#020817"
const MAGENTA = "#ff4da9"

// Renders a square gamepad scaled from `side` (px). All sub-parts derive from `side`
// so the glyph keeps its proportions at 64, 180, 192 and 512.
export function gamepadIcon(side: number): ReactElement {
  const bodyW = Math.round(side * 0.66)
  const bodyH = Math.round(side * 0.4)
  const radius = Math.round(side * 0.2)
  const bw = Math.max(2, Math.round(side * 0.06)) // controller outline weight
  const padX = Math.round(side * 0.1)
  const dpad = Math.round(side * 0.17) // d-pad bounding box
  const bar = Math.max(2, Math.round(side * 0.05)) // d-pad bar thickness
  const btn = Math.max(2, Math.round(side * 0.08)) // button diameter

  return (
    <div
      style={{
        width: side,
        height: side,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: BG,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: bodyW,
          height: bodyH,
          borderRadius: radius,
          border: `${bw}px solid ${MAGENTA}`,
          padding: `0 ${padX}px`,
        }}
      >
        {/* D-pad (cross) */}
        <div style={{ display: "flex", position: "relative", width: dpad, height: dpad }}>
          <div
            style={{
              position: "absolute",
              left: (dpad - bar) / 2,
              top: 0,
              width: bar,
              height: dpad,
              background: MAGENTA,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: (dpad - bar) / 2,
              width: dpad,
              height: bar,
              background: MAGENTA,
            }}
          />
        </div>
        {/* Buttons */}
        <div style={{ display: "flex", gap: Math.max(2, Math.round(side * 0.045)) }}>
          <div style={{ width: btn, height: btn, borderRadius: btn / 2, background: MAGENTA }} />
          <div style={{ width: btn, height: btn, borderRadius: btn / 2, background: MAGENTA }} />
        </div>
      </div>
    </div>
  )
}
