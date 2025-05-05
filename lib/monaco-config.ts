// This file configures the Monaco Editor worker paths

// Define the Monaco environment
self.MonacoEnvironment = {
  getWorkerUrl: (_moduleId: string, label: string) => {
    if (label === "json") {
      return "/monaco-editor-workers/json.worker.js"
    }
    if (label === "css" || label === "scss" || label === "less") {
      return "/monaco-editor-workers/css.worker.js"
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return "/monaco-editor-workers/html.worker.js"
    }
    if (label === "typescript" || label === "javascript") {
      return "/monaco-editor-workers/ts.worker.js"
    }
    return "/monaco-editor-workers/editor.worker.js"
  },
}
