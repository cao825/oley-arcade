import { Github, Heart, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="about" className="bg-background border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              OleyArcade
            </h3>
            <p className="text-gray-400 max-w-md">
              A collection of family-built AI-powered web games designed to challenge your mind and spark your
              imagination.
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="text-xl font-bold font-display text-white mb-4">About Us</h3>
            <p className="text-gray-400">
              Made with <Heart className="inline h-4 w-4 text-pink-500 mx-1" /> by the Oley family using ChatGPT and
              Vercel v0.
            </p>
            <div className="flex mt-4 space-x-4 md:justify-end">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} OleyArcade. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
