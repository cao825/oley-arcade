# OleyArcade

The front-door umbrella site for the Oley family's collection of AI-powered web games.
Production: **[https://oleyarcade.com](https://oleyarcade.com)**

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://oleyarcade.com)

## Overview

A single-page Next.js (App Router) + React 19 site whose homepage links out to the
family's games (each hosted on its own domain). Originally scaffolded with
[v0.dev](https://v0.dev), now maintained directly in this repository.

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **pnpm** (pinned via `packageManager`), Tailwind CSS, TypeScript
- Deployed on **Vercel**

## Local development

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm dev        # http://localhost:3000
```

Other scripts: `pnpm build` (production build), `pnpm lint` (ESLint), and
`tsc --noEmit` for type-checking.

## CI

Every PR runs a `verify` gate (install → typecheck → lint → build) plus CodeQL,
OSV-Scanner, and dependency-review. See `.github/workflows/`.
