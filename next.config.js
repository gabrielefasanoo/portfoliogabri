/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'raw.githubusercontent.com', 'cdn.sanity.io'],
  },
}

module.exports = nextConfig
