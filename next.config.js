/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    HYGRAPH_URL: process.env.HYGRAPH_URL,
    HYGRAPH_TOKEN: process.env.HYGRAPH_TOKEN
  },
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
      {
        protocol: 'https',
        hostname: 'app.hygraph.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'api-sa-east-1.hygraph.com',
        pathname: '**',
      }
    ],
  }
 }
 
 module.exports = nextConfig
 