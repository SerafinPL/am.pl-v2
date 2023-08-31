'use client'

import React, { useState } from "react";

import styles from "./ArtImage.module.scss";

import Image from 'next/image'
import profilePic from '../../src/assets/melancholja.jpg'




const ArtImage = props => {

  const [loadingState, setLoadingState] = useState(false);

  return (
    <div className={`${styles.ArtBox}`}>

      <div className={`${styles.placeHolderImg} ${loadingState && styles.offPlaceholder}`}>
        <div className={styles.ArtSpinner}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>

      <Image
        className={`${styles.imgArt} ${loadingState && styles.loaded}`}
        src={profilePic}
        alt="Picture of the author"
        quality={100}
        sizes="100vw"
        style={{
          width: 'auto',
          height: '100%',
        }}
        onLoadingComplete={img => {
          setLoadingState(true)
        }}
        onClick={props.clicked}

        loading="lazy"
      />

    </div>
  )
}

export default ArtImage;