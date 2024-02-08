import React, { useState, useRef } from "react";


import "yet-another-react-lightbox/styles.css";

import { Button, Text, Flex } from '@chakra-ui/react';
import { artsList } from "./artsList";




import blurStyle from "../../src/styles/blurStyle.module.scss";
import galleryStyle from "./GalleryMode.module.scss";

import { ArrowLeftIcon, SearchIcon, ChevronRightIcon, ChevronLeftIcon, InfoOutlineIcon } from '@chakra-ui/icons'



const GalleryNote = (props) => {



    const buttonNote = <Button position='absolute'
        left='25%' w='50%' p='3px' top='77.4vh' h='40px' border='3px solid black'
        color='black' borderRadius='0' m={0} borderColor='#000' display='block'
        onClick={props.closeNote} >
        {<ArrowLeftIcon m={0} boxSize={5} />} &nbsp;
        wróć
    </Button>;

    return (
        <Flex className={`${props.blured && blurStyle.blured}`} style={{ position: 'relative' }} 
        w='100vw' h='100vh' flexDirection='column' justifyContent='center' 
        pl='7%'>
            <Text display='block' fontSize='3xl'>{artsList[props.index].title}</Text>
            <Text display='block' fontSize='xl'> {artsList[props.index].adn.size}</Text>
            <Text display='block' fontSize='lg'> {artsList[props.index].adn.method}</Text>

            {buttonNote}
        </Flex>

    );
};

export default GalleryNote;
