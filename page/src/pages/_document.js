
import { Providers } from "../providers";

import { Html, Head, Main, NextScript } from 'next/document';

import Script from 'next/script';


export default function Document() {
  return (
    <Html lang="en" className='light'>
      <Head />
      <body >
        <Providers>
          <Main />
          <NextScript />
        </Providers>
      </body>
    </Html>
  )
}
