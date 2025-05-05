import { GameCard } from "@/components/game-card"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  const games = [
    {
      id: "wordisles",
      title: "WordIsles",
      description:
        "A strategic word adventure where every choice shapes your journey across floating isles of language.",
      url: "https://wordisles.com",
    },
    {
      id: "emojigrid",
      title: "Emoji Grid",
      description: "A puzzle-strategy challenge using emoji-based logic and color matching to outsmart the grid.",
      url: "https://emojigrid.vercel.app",
    },
    {
      id: "catmazes",
      title: "CatMazes",
      description: "Guide curious cats through tricky mazes. Adorable visuals meet clever spatial puzzles.",
      url: "https://catmazes.vercel.app",
    },
    {
      id: "breaktheice",
      title: "Break the Ice",
      description:
        "A cool logic game where you melt your way to mastery—layered challenges and hidden achievements await.",
      url: "https://icegame.vercel.app",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />
      <main>
        <HeroSection />
        <section id="games" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Our Games
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Dive into our collection of family-crafted games, each designed to challenge your mind and delight your
            senses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
