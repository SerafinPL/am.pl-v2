import Image from "next/image";
import { useState } from "react";
import { Skeleton, } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
} from "yet-another-react-lightbox";

function isNextJsImage(slide) {
  return (
    isImageSlide(slide) &&
    typeof slide.width === "number" &&
    typeof slide.height === "number"
  );
}

export default function NextJsImage({ slide, offset,rect,startColor,endColor }) {
  const { imageFit } = useLightboxProps().carousel;
  const onns = useLightboxProps().on;
  const carousel = useLightboxProps().carousel;

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / slide.height) * slide.width),
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / slide.width) * slide.height),
      )
    : rect.height;


  return (
    <div style={{ position: "relative", width, height }}>
       {/* <Skeleton fitContent
        // className={`${styles.skeletonBase}`}
        startColor={startColor} endColor={endColor}
        // isLoaded={loadingState}
        > */}
      <Image
        fill
        alt=""
        src={slide}
        loading="eager"
        draggable={false}
        placeholder={slide.blurDataURL ? "blur" : undefined}
        style={{ objectFit: cover ? "cover" : "contain" }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        onClick={() => onns.click(slide)}
        // onLoadingComplete={img => {
        //   setLoadingState(true)
        // }}

      />
      {/* </Skeleton> */}
    </div>
  );
}