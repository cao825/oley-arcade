"use client"

import { useEffect } from "react"

// Import the Monaco configuration
import "../lib/monaco-config"

// Rest of your code editor component
export function CodeEditor() {
  useEffect(() => {
    // Monaco editor initialization code
    // ...
  }, [])

  return <div className="h-96 w-full border border-gray-700 rounded-lg">{/* Monaco editor container */}</div>
}
