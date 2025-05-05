"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface Game {
  id: string
  title: string
  description: string
  url: string
  imageUrl?: string
}

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={`/abstract-geometric-shapes.png?key=dqw93&height=400&width=600&query=${encodeURIComponent(game.title + " game screenshot")}`}
          alt={`${game.title} screenshot`}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          width={600}
          height={400}
          priority={game.id === "wordisles"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 transition-colors duration-300">
          {game.title}
        </h3>
        <p className="text-gray-300 mb-4 flex-grow">{game.description}</p>
        <Link
          href={game.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Play Now <ExternalLink size={16} className="ml-2" />
        </Link>
      </div>

      {/* Glow effect on hover */}
      <div
        className={`absolute -inset-px bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 ${
          isHovered ? "animate-pulse" : ""
        }`}
      ></div>
    </div>
  )
}
