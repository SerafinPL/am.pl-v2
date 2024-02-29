
import { Nunito_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/globals.css';


const urbanistFont = Nunito_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return <main className={urbanistFont.className}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    <Analytics />

  </main>
}
