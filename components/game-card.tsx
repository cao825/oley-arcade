"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface Game {
  id: string
  title: string
  description: string
  url: string
  imageUrl: string
}

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

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

  return (
    <div
      ref={cardRef}
      className="game-card relative bg-gray-800/80 rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
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
      <div className="relative h-48 overflow-hidden">
        {isInView && (
          <Image
            src={game.imageUrl || "/placeholder.svg"}
            alt={`${game.title} screenshot`}
            className="object-cover w-full h-full transition-transform duration-700 ease-out"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
            width={600}
            height={400}
            loading="lazy"
          />
        )}

        {/* Game title overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-bold font-display text-white">{game.title}</h3>
          </div>
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <p className="text-gray-300 mb-6 flex-grow">{game.description}</p>
        <Link
          href={game.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 active:translate-y-0"
        >
          Play Now <ExternalLink size={16} className="ml-2" />
        </Link>
      </div>

      {/* Glow effect on hover */}
      <div
        className="absolute -inset-px bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 transition-opacity duration-300 -z-10"
        style={{
          opacity: isHovered ? 0.2 : 0,
        }}
      ></div>
    </div>
  )
}
