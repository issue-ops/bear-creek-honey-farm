import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/bear-creek-honey-farm'
}

export default nextConfig
