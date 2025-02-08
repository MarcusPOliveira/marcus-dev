import type { Metadata } from 'next'
import { Poppins, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: {
    default: 'marcus.dev',
    template: '%s | marcus.dev',
  },
  icons: [
    {
      url: '/favicon.ico',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${plexMono.variable}`}>
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
