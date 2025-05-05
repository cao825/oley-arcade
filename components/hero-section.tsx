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
    <div className="relative overflow-hidden bg-gray-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div
          className={`text-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Welcome to OleyArcade
            </span>
          </h1>
          <p className="max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
            A family-built collection of AI-powered web games designed to challenge your mind and spark your
            imagination.
          </p>

          {/* Bouncing down arrow */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={scrollToGames}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Scroll to games"
            >
              <ChevronDown size={32} className="animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Glowing orb effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full filter blur-3xl opacity-30"></div>
    </div>
  )
}
