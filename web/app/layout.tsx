import type { Metadata } from 'next'
import './globals.css'
import { Inter, Merriweather } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const merriweather = Merriweather({ subsets: ['latin'], weight: ['300','400','700'], variable: '--font-merriweather', display: 'swap' })

export const metadata: Metadata = {
  title: 'Krishna Consciousness | Devotional Site',
  description: 'Bhakti is the journey of the heart, a path of pure love and eternal peace.',
  metadataBase: new URL('https://agentic-9e6cd9d8.vercel.app'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
