"use client"

import { ChevronDown } from "lucide-react"

// Deterministic pseudo-random in [0, 1) from a seed. Replaces Math.random() for the
// decorative particles so values are STABLE across renders and identical on server
// and client — fixing react-hooks/purity (no impure call during render) and the
// hydration mismatch that random-in-render would otherwise cause. Computed once at
// module load, outside any render.
const rand = (seed: number) => {
  const x = Math.sin(seed) * 43758.5453
  return x - Math.floor(x)
}

const PARTICLES = Array.from({ length: 30 }, (_, i) => {
  const s = i * 6.1
  return {
    width: rand(s) * 10 + 5,
    height: rand(s + 1) * 10 + 5,
    left: rand(s + 2) * 100,
    top: rand(s + 3) * 100,
    delay: rand(s + 4) * 3,
    duration: rand(s + 5) * 5 + 3,
  }
})

export function HeroSection() {
  const scrollToGames = () => {
    document.getElementById("games")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative overflow-hidden bg-background min-h-[70vh] flex items-center">
      {/* Animated background grid */}
      <div className="absolute inset-0 z-0 arcade-grid opacity-30"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/20 animate-float"
            style={{
              width: `${p.width}px`,
              height: `${p.height}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Pixel animation background */}
      <div className="absolute inset-0 z-0 pixel-bg"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Entrance animation via tailwindcss-animate (pure CSS on mount) — replaces
            the previous isVisible state + mount effect, clearing react-hooks/set-state-in-effect. */}
        <div className="text-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 font-display glow-text">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Welcome to OleyArcade
            </span>
          </h1>
          <p className="max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl font-medium mt-4">
            Family-built AI-powered games. Play. Learn. Laugh.
          </p>
          <p className="max-w-lg mx-auto text-md text-gray-400 sm:max-w-3xl mt-2">
            Built by the Oley family using AI and imagination.
          </p>

          {/* Bouncing down arrow */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={scrollToGames}
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 focus:outline-none"
              aria-label="Scroll to games"
            >
              <ChevronDown size={36} className="animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Glowing orb effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full filter blur-3xl opacity-30"></div>
    </div>
  )
}
