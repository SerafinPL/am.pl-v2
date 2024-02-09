import React, { useState, useRef } from "react";
import NextJsImage from "../ArtImage/NextJSImg";

import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";

import { Button, Text, Flex } from '@chakra-ui/react';
import { artsList } from "./artsList";




import blurStyle from "../../src/styles/blurStyle.module.scss";
import galleryStyle from "./GalleryMode.module.scss";

import { ArrowLeftIcon, SearchIcon, ChevronRightIcon, ChevronLeftIcon, InfoOutlineIcon } from '@chakra-ui/icons'



const GalleryNote = (props) => {

    const artsFilesList = artsList.map(el => el.fileName)


    const buttonBack = <Button position='absolute'
        right={{ base: "25%", md: "7%" }}
        w={{ base: "50%", md: "25%" }}
        maxW={{ base: "50%", md: "100px" }}
        p='3px' top='75vh' h='40px' border='3px solid black'
        color='black' borderRadius='0' m={0} borderColor='#000' display='block'
        onClick={props.closeNote} >
        {<ArrowLeftIcon m={0} boxSize={5} />} &nbsp;
        wróć
    </Button>;

    return (
        <Flex w="100vw" h='81vh' >
            <Flex className={`${props.blured && blurStyle.blured}`} style={{ position: 'relative' }}
                w={{ base: "0vw", md: "29vw" }}>
                <Lightbox
                    plugins={[Inline]}
                    slides={artsFilesList}
                    styles={{ container: { backgroundColor: '#fff' } }}
                    // on={{
                    //     click: stateHandler,
                    //     view: ({ index: currentIndex }) => props.setIndex(currentIndex),
                    // }}
                    index={props.index}
                    // controller={{ ref }}
                    inline={{
                        style: { width: "100%", minHeight: "81vh", maxHeight: "81vh", aspectRatio: "3 / 2", },
                    }}
                    render={{
                        buttonPrev: () => null,
                        buttonNext: () => null,
                        slide: NextJsImage
                    }}
                    noScroll={{
                        disabled: true
                    }}
                />
            </Flex>
            <Flex className={`${props.blured && blurStyle.blured}`} style={{ position: 'relative' }}
                w={{ base: "100vw", md: "71vw" }} h='100%'
                flexDirection='column' justifyContent={{ base: "center", md: "flex-start" }}
                pl='7%' pt={{ base: "0%", md: "7%" }}>
                <Text display='block' fontSize='3xl'>{artsList[props.index].title}</Text>
                <Text display='block' fontSize='xl'> {artsList[props.index].adn.size}</Text>
                <Text display='block' fontSize='lg'> {artsList[props.index].adn.method}</Text>

                {buttonBack}
            </Flex>

        </Flex>
    );
};

export default GalleryNote;
