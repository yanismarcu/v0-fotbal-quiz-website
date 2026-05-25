import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteJsonLd } from '@/components/site-json-ld'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.romaniastie.com'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'România Știe – Quiz Fotbal | Premii în bani',
    template: '%s | România Știe',
  },
  description:
    'România Știe – quiz fotbal live în România. Înscrie-te, răspunde la întrebări și concurează pentru premii în bani. Competiție transparentă pe romaniastie.com.',
  keywords: [
    'România Știe',
    'RomâniaStie',
    'Romania Stie',
    'quiz fotbal',
    'competiție fotbal',
    'premii fotbal',
    'romaniastie',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: siteUrl,
    siteName: 'România Știe',
    title: 'România Știe – Quiz Fotbal',
    description:
      'Testează-ți cunoștințele despre fotbal și câștigă premii în bani. Competiție live cu extragere transparentă.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'România Știe – Quiz Fotbal',
    description:
      'Quiz fotbal live în România. Înscrie-te și concurează pentru premii.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'googlea9f4a2229569fd62',
  },
  icons: {
    icon: [
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <body className="font-sans antialiased">
        <SiteJsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
