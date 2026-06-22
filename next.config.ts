import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // NOTE: the `eslint` config block (eslint.ignoreDuringBuilds) was removed here
  // because Next 16 dropped the built-in ESLint integration (`next lint` is gone),
  // so `eslint` is no longer a valid NextConfig key — keeping it fails the type
  // check and the build. This does NOT change lint posture: Next 16 doesn't run
  // ESLint during the build at all. Standalone ESLint (flat config + CI lint step)
  // is the separate follow-up (PR-D).
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "xurtccytrzafbfk3.public.blob.vercel-storage.com",
      },
    ],
    unoptimized: true,
  },
}

export default nextConfig
