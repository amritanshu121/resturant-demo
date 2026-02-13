import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'

import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '900']
})

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600']
})

export const viewport: Viewport = {
  themeColor: '#8b2a2a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Dragon\'s Feast - Best Chinese Restaurant in Chincholi | Authentic Chinese Cuisine',
  description: 'Experience authentic Chinese cuisine at Dragon\'s Feast. Best Chinese food near you in Chincholi. Dine-in, delivery, and catering available.',
  keywords: 'Best Chinese in Chincholi, Chinese restaurant, Food near me, Authentic Chinese cuisine, Chinese dishes, Dragon Feast restaurant',
  generator: 'v0.app',
  openGraph: {
    title: 'Dragon\'s Feast - Authentic Chinese Cuisine in Chincholi',
    description: 'Best Chinese restaurant in Chincholi featuring authentic dishes, vegetarian options, and fast delivery.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${lora.variable}`}>
      <body className="font-lora antialiased">{children}</body>
    </html>
  )
}
