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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'design4users.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.adekz.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.projectmanager.com',
        pathname: '**',
      },
    ],
  }
 }
 
 module.exports = nextConfig
 