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
        startColor='red.500' endColor="yellow.200"
        isLoaded={loadingState}>

        <Image
          className={`
          ${styles.imgArt}          
          ${props.type && styles[props.type]} 
        `}
          src={props.fileName}
          alt="Picture of the author"
          quality={100}
          sizes="98vw"
          onLoadingComplete={img => {
            setLoadingState(true)
          }}
          // onClick={props.clicked}          
        />

        <Text className={`${styles.skeletonText}`} display={`${loadingState ? 'none' : 'block'} `} sx={{ zIndex: 15, color: '#000000', visibility: 'visible', position: 'absolute' }}>Ładowanie obrazów wysokiej jakości</Text>
      </Skeleton>
    </div>
  )
}

export default ArtImage;