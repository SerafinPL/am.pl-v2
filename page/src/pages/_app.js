
import { Nunito_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ChakraProvider } from '@chakra-ui/react';
import { ProvLangContext } from "../../components/ContextService/lang.service";

import '@/styles/globals.css';

const urbanistFont = Nunito_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return <main className={urbanistFont.className}>

    <ChakraProvider>
      <ProvLangContext>
        <Component {...pageProps} />
      </ProvLangContext>
    </ChakraProvider>
    <Analytics />

  </main>
}
