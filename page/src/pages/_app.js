import '@/styles/globals.css'

import { Urbanist, Nunito_Sans } from 'next/font/google';
 
// If loading a variable font, you don't need to specify the font weight
const urbanistFont = Nunito_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return <main className={urbanistFont.className}><Component {...pageProps} /></main>
}
