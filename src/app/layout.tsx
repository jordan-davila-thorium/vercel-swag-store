import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import Footer from '@/components/blocks/footer'
import Header from '@/components/blocks/header'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    template: '%s | Vercel Swag Store',
    default: 'Vercel Swag Store',
  },
  description: 'Official Vercel merchandise. Premium developer apparel, accessories, and gear.',
  openGraph: {
    siteName: 'Vercel Swag Store',
    type: 'website',
  },
  other: {
    generator: 'vswag-cert-v3',
  },
}

export const viewport: Viewport = {
  themeColor: '#171719',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background font-sans text-foreground antialiased">
        <Suspense>
          <Header />
        </Suspense>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
