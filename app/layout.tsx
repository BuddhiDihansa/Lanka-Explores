import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Lanka Explorer - Discover Sri Lanka',
  description: 'Explore the beauty of Sri Lanka - districts, places, hotels and more',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className="font-sans antialiased bg-black text-foreground relative overflow-x-hidden">
        <div aria-hidden className="fixed inset-0 -z-20 bg-black" />
        <div
          aria-hidden
          className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.24),transparent_0_18%,transparent_34%),radial-gradient(circle_at_top_right,rgba(202,138,4,0.18),transparent_0_16%,transparent_32%),radial-gradient(circle_at_bottom_center,rgba(251,191,36,0.1),transparent_0_16%,transparent_36%),linear-gradient(180deg,#090909_0%,#050505_55%,#090909_100%)]"
        />
        <div
          aria-hidden
          className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_20%_18%,rgba(251,191,36,0.18),transparent_0_14%,transparent_32%),radial-gradient(circle_at_80%_14%,rgba(202,138,4,0.14),transparent_0_12%,transparent_30%),radial-gradient(circle_at_50%_88%,rgba(251,191,36,0.08),transparent_0_12%,transparent_32%)] blur-3xl opacity-90"
        />
        <div
          aria-hidden
          className="fixed inset-0 -z-10 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0)),linear-gradient(90deg,rgba(251,191,36,0.04)_1px,transparent_1px)] bg-[size:100%_100%,140px_140px] [mask-image:radial-gradient(circle_at_center,black_34%,transparent_100%)] opacity-10"
        />
        <main className="relative z-10">
          {children}
        </main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
