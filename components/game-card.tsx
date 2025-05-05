"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ExternalLink, Sparkles, ImageIcon } from "lucide-react"

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
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  // 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    setRotation({ x: rotateX, y: rotateY })
  }

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 })
  }

  // Lazy loading
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Generate game-specific background colors based on the game id
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
      className="game-card relative bg-gray-800/80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col retro-glow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        resetRotation()
      }}
      onMouseMove={handleMouseMove}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          : "perspective(1000px) rotateX(0) rotateY(0)",
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
      }}
    >
      <div className="relative aspect-video overflow-hidden">
        {/* Fallback colored background with game icon */}
        <div className={`absolute inset-0 bg-gradient-to-br ${from} ${to} flex items-center justify-center`}>
          <div className="text-white text-opacity-30">
            <ImageIcon className="w-16 h-16" />
          </div>
        </div>

        {/* Loading state */}
        {!isLoaded && isInView && (
          <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm flex items-center justify-center z-10">
            <Sparkles className="h-8 w-8 text-white animate-pulse" />
          </div>
        )}

        {/* Game title overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
          <h3 className="text-2xl font-bold font-display text-white">{game.title}</h3>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-300 mb-6 flex-grow">{game.description}</p>
        <Link
          href={game.url}
          target="_blank"
          rel="noopener noreferrer"
          className="play-button inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 active:translate-y-0"
        >
          Play Now <ExternalLink size={18} className="ml-2" />
        </Link>
      </div>

      {/* Glow effect on hover */}
      <div
        className="absolute -inset-px bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 transition-opacity duration-300 -z-10"
        style={{
          opacity: isHovered ? 0.2 : 0,
        }}
      ></div>
    </div>
  )
}
