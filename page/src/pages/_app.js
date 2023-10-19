import '@/styles/globals.css'

import { Urbanist, Nunito_Sans } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';

const urbanistFont = Nunito_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return <main className={urbanistFont.className}>
    <Component {...pageProps} />
    <Analytics />
  </main>
}
