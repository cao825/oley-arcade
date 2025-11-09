import { GameCarousel } from "@/components/game-carousel"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  const games = [
    {
      id: "wordisles",
      title: "WordIsles",
      shortDescription: "Build bridges of words across floating islands.",
      description:
        "A strategic word adventure where every choice shapes your journey across floating isles of language.",
      url: "https://wordisles.com",
      screenshotUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2303.jpg-FDwra9gKm3DwQ9NjiOuT7nEMk5vi6o.jpeg",
    },
    {
      id: "emojigrid",
      title: "Emoji Grid",
      shortDescription: "Match patterns and outsmart the colorful grid.",
      description: "A puzzle-strategy challenge using emoji-based logic and color matching to outsmart the grid.",
      url: "https://emojigrid.vercel.app",
      screenshotUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2305.jpg-esR6JAe32rjuIgd2WotybE5H9kr9GU.jpeg",
    },
    {
      id: "catmazes",
      title: "CatMazes",
      shortDescription: "Guide curious cats through tricky mazes.",
      description: "Guide curious cats through tricky mazes. Adorable visuals meet clever spatial puzzles.",
      url: "https://catmazes.vercel.app",
      screenshotUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2306.jpg-7DKpGs7mSMfkMFM3N0licf62uM0lVx.jpeg",
    },
    {
      id: "breaktheice",
      title: "Break the Ice",
      shortDescription: "Melt your way to mastery in this cool logic game.",
      description:
        "A cool logic game where you melt your way to mastery—layered challenges and hidden achievements await.",
      url: "https://icegame.vercel.app",
      screenshotUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2307.jpg-qrtvoW3hrwarAU8Perh8M45U3FyHPq.jpeg",
    },
    {
      id: "gardeningtycoon",
      title: "Gardening Tycoon",
      shortDescription: "Build your garden empire from seed to success.",
      description:
        "Grow plants, manage resources, and build the ultimate garden business in this strategic tycoon game.",
      url: "https://gardeningtycoon.vercel.app",
      screenshotUrl:
        "https://xurtccytrzafbfk3.public.blob.vercel-storage.com/agent-assets/bb024399904e8b3d3415d123b463cfc97f5f3473e897b5f5946c45d723f48951.jpeg",
    },
    {
      id: "artstudio",
      title: "Art Studio",
      shortDescription: "Create masterpieces with digital drawing tools.",
      description: "Express your creativity with a full suite of digital drawing tools and save your artwork.",
      url: "https://v0-drawing-game-with-wallet.vercel.app",
      screenshotUrl:
        "https://xurtccytrzafbfk3.public.blob.vercel-storage.com/agent-assets/d2339b0cbba98204c7979a586c6b7c07b6a42b780af5575df3b9dc0bc76214e4.jpeg",
    },
    {
      id: "bedroomdesigner",
      title: "Bedroom Designer",
      shortDescription: "Design your dream bedroom with style.",
      description: "Create and customize your perfect bedroom with furniture, colors, and decorations.",
      url: "https://bedroomdesigner.vercel.app",
      screenshotUrl:
        "https://xurtccytrzafbfk3.public.blob.vercel-storage.com/agent-assets/e11ed087df33113fefb8b0d0350f52866158416e3bb79db4fc6b21de02cca1b2.jpeg",
    },
    {
      id: "lemonadestand",
      title: "Lemonade Stand",
      shortDescription: "Run your own lemonade business empire.",
      description: "Make smart business decisions, set prices, and grow your lemonade stand into a thriving business.",
      url: "https://v0-gabby-lemonade-stand.vercel.app",
      screenshotUrl:
        "https://xurtccytrzafbfk3.public.blob.vercel-storage.com/agent-assets/5f94748736093ce667f815a3c7a4bd30ccf1c474a10e7d1a4d8aeed2517c22e6.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <section id="games" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-3 font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Our Games
          </h2>
          <p className="text-gray-400 text-center mb-20 max-w-2xl mx-auto text-lg">
            Dive into our collection of family-crafted games, each designed to challenge your mind and delight your
            senses.
          </p>
          <GameCarousel games={games} />
        </section>
      </main>
      <Footer />
    </div>
  )
}
