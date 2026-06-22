import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

// Flat config per Next.js 16's official ESLint migration (`next lint` and build-time
// linting were removed; lint runs via the ESLint CLI as a CI step). Ported from the
// v0-word-archipelago sibling shape (flat-native, no FlatCompat), plus the TypeScript
// shared config. eslint-config-next is flat-config native at v16, so both shared
// configs are imported directly:
//   - core-web-vitals: Next base + Core Web Vitals rules (as errors)
//   - typescript:      typescript-eslint rules
export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])
