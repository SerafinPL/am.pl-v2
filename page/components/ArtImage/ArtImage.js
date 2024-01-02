'use client'

import React, { useState } from "react";
import styles from "./ArtImage.module.scss";
import blurStyle from "../../src/styles/blurStyle.module.scss";
import Image from 'next/image';
import { Skeleton, } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'


const ArtImage = props => {

  const [loadingState, setLoadingState] = useState(false);

  return (
    <div className={`${styles.ArtBox} ${props.blured && blurStyle.blured} ${props.mini && styles.miniArtBox}`}>
      <Skeleton fitContent
        className={`${styles.skeletonBase}`}
        startColor={props.startColor} endColor={props.endColor}
        isLoaded={loadingState}>

        <Image
          className={`
          ${styles.imgArt}          
          ${props.type && styles[props.type]} 
        `}
          src={props.fileName}
          alt={props.alt}
          quality={100}
          sizes="98vw"
          onLoadingComplete={img => {
            setLoadingState(true)
          }}
          // onClick={props.clicked}          
        />

        <Text className={`${styles.skeletonText}`} display={`${loadingState ? 'none' : 'block'} `} >Ładowanie obrazów wysokiej jakości</Text>
        </Skeleton>
    </div>
  )
}

export default ArtImage;