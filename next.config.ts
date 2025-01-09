import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/bear-creek-honey-farm',
  reactStrictMode: true
}

export default nextConfig
