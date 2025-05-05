"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Gamepad } from "lucide-react"

interface Game {
  id: string
  title: string
  description: string
  shortDescription: string
  url: string
}

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Determine image path
  const imagePath = `/screenshots/${game.id}.png`

  // Fallback colors based on game ID
  const getGameColors = (gameId: string) => {
    const colorMap: Record<string, { from: string; to: string }> = {
      wordisles: { from: "from-purple-500", to: "to-blue-500" },
      emojigrid: { from: "from-yellow-500", to: "to-orange-500" },
      catmazes: { from: "from-green-500", to: "to-teal-500" },
      breaktheice: { from: "from-blue-500", to: "to-cyan-500" },
    }

    return colorMap[gameId] || { from: "from-purple-500", to: "to-pink-500" }
  }

  const { from, to } = getGameColors(game.id)

  return (
    <div
      ref={cardRef}
      className="group relative bg-gray-800/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:scale-105 hover:ring-2 hover:ring-indigo-400/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        {/* Fallback gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${from} ${to} flex items-center justify-center`}>
          <Gamepad className="w-16 h-16 text-white text-opacity-30" />
        </div>

        {/* Actual image */}
        <Image
          src={imagePath || "/placeholder.svg"}
          alt={`${game.title} screenshot`}
          className={`object-cover w-full h-full transition-all duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          width={600}
          height={338}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          priority={game.id === "wordisles"}
        />

        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold font-display mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {game.title}
        </h3>
        <p className="text-gray-300 mb-2 text-sm">{game.shortDescription}</p>
        <p className="text-gray-400 mb-6 flex-grow text-sm">{game.description}</p>
        <Link
          href={game.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-1 active:translate-y-0"
        >
          Play Now <ExternalLink size={18} className="ml-2" />
        </Link>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
    </div>
  )
}
