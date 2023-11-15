/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ]
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'media.graphassets.com', 'design4users.com'],
  }
}

module.exports = nextConfig
