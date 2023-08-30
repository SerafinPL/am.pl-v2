import React from "react";

import styles from "./ArtImage.module.scss";

import Image from 'next/image'
import profilePic from '../../src/assets/autoportret_z_krolikiem-kopia.jpg'
import profilePic2 from '../../src/assets/gnoznezja.jpg'

const imageLoader = ({ src, width, quality }) => {
  return <Image src={profilePic2}
                   alt="Picture of the author"/> //`https://example.com/${src}?w=${width}&q=${quality || 75}`
}

 
const ArtImage = props =>  {
  return (
    <Image
      className={styles.imgArt}
      src={profilePic}
      alt="Picture of the author"
      quality={100}
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
  
      loading="lazy"
       loader={imageLoader}
    />
  )
}

export default ArtImage;