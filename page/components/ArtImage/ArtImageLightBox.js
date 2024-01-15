'use client'

import React, { useState } from "react";
import styles from "./ArtImage.module.scss";
import blurStyle from "../../src/styles/blurStyle.module.scss";
import Image from 'next/image';
import { Skeleton, } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "./NextJSImg";


const ArtImageLightBox = props => {

  const [loadingState, setLoadingState] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.ArtBox} ${props.blured && blurStyle.blured} ${props.mini && styles.miniArtBox}`}>
      <Skeleton fitContent
        className={`${styles.skeletonBase}`}
        startColor={props.startColor} endColor={props.endColor}
        isLoaded={loadingState}>

        <Text className={`${styles.skeletonText}`} display={`${loadingState ? 'none' : 'block'} `} >Ładowanie obrazów wysokiej jakości</Text>
        </Skeleton>
    </div>
  )
}

export default ArtImageLightBox;