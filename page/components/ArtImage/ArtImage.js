'use client'

import React, { useState } from "react";

import styles from "./ArtImage.module.scss";

import Image from 'next/image'


const ArtImage = props => {

  const [loadingState, setLoadingState] = useState(false);

  return (
    <div className={`${styles.ArtBox} ${props.blured && styles.blured}`}>

      <Image
        className={`${styles.imgArt} ${loadingState && styles.loaded}`}
        src={props.fileName}
        alt="Picture of the author"
        quality={100}
        sizes="100vw"
        // style={{ width: 'auto', height: '100%', maxHeight: '95%' }}
        onLoadingComplete={img => {
          setLoadingState(true)
        }}
        onClick={props.clicked}
        loading="lazy"
      />

      <div className={`${styles.placeHolderImg} ${loadingState && styles.offPlaceholder}`}>
        <div className={`${styles.ldsRing}`}><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  )
}

export default ArtImage;