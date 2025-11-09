"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { GameCard } from "./game-card"

interface Game {
  id: string
  title: string
  shortDescription: string
  description: string
  url: string
  screenshotUrl?: string
}

interface GameCarouselProps {
  games: Game[]
}

export function GameCarousel({ games }: GameCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const gamesPerPage = 4
  const totalPages = Math.ceil(games.length / gamesPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentGames = games.slice(currentPage * gamesPerPage, (currentPage + 1) * gamesPerPage)

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <div className="flex items-center justify-center gap-8 mb-8">
        <button
          onClick={prevPage}
          className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous games"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        {/* Page Indicator */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next games"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>

      {/* Game Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {currentGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}
