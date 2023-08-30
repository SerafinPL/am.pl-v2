import React from "react";

import styles from "./ArtImage.module.scss";

import Image from 'next/image'
import profilePic from '../../src/assets/autoportret_z_krolikiem-kopia.jpg'
 
const ArtImage = props =>  {
  return (
    <Image
      src={profilePic}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      placeholder="blur" // Optional blur-up while loading
      loading="lazy"
    />
  )
}

export default ArtImage;