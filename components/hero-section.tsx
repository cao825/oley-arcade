"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToGames = () => {
    document.getElementById("games")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative overflow-hidden bg-background min-h-[70vh] flex items-center">
      {/* Animated background grid */}
      <div className="absolute inset-0 z-0 arcade-grid opacity-30"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/20 animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          />
        ))}
      </div>

      {/* Pixel animation background */}
      <div className="absolute inset-0 z-0 pixel-bg"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div
          className={`text-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
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
