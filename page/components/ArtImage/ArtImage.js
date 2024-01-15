'use client'

import React, { useState } from "react";
import styles from "./ArtImage.module.scss";
import blurStyle from "../../src/styles/blurStyle.module.scss";
import Image from 'next/image';
import { Skeleton, } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "./NextJSImg";


const ArtImage = props => {

  const [loadingState, setLoadingState] = useState(false);
  const [open, setOpen] = useState(false);

  const fullscreenRef = React.useRef(null);
  const zoomRef = React.useRef(null);

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
          onClick={() => setOpen(true)}
        />
        <Lightbox
          plugins={[Fullscreen, Zoom]}
          open={open}
          close={() => setOpen(false)}
          slides={[props.fileName]}
          carousel={{ finite: [props.fileName].length <= 1 }}
          render={{
            buttonPrev: [props.fileName].length <= 1 ? () => null : undefined,
            buttonNext: [props.fileName].length <= 1 ? () => null : undefined,
          }}
          // render={{ slide: NextJsImage }}

          fullscreen={{ ref: fullscreenRef }}
          on={{
            click: () => fullscreenRef.current?.enter(),
          }}
        />

        <Text className={`${styles.skeletonText}`} display={`${loadingState ? 'none' : 'block'} `} >Ładowanie obrazów wysokiej jakości</Text>
      </Skeleton>
    </div>
  )
}

export default ArtImage;