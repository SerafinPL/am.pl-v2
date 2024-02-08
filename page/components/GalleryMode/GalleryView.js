import React, { useState } from "react";

import { Container,Box } from '@chakra-ui/react';

import GalleryMode from "./GalleryMode";
import galleryStyles from './GalleryMode.module.scss';
import GalleryNote from "./GalleryNote";


const GalleryView = (props) => {

    const [index, setIndex] = useState(0);
    const [note, setNote] = useState(false);
    

    return (
        <Box w='100vw' h='100vh'>
            <Container position='relative' w='100vw' h='100vh' top='50px'  p='0' m='0'>
                <Container position='absolute' left={note ? '133vw' : '0' } className={galleryStyles.layer}  w='100vw' h='100vh' p='0' m='0' >
                    <GalleryMode blured={props.blured} openNote={()=>setNote(true)}
                    index={index} setIndex={setIndex}/>
                </Container>
                <Container position='absolute' left={!note ? '133vw' : '0' } className={galleryStyles.layer}  w='100vw' h='100vh' p='0' m='0'>
                    <GalleryNote blured={props.blured} closeNote={()=>setNote(false)}
                    index={index}/>
                </Container>
            </Container>

        </Box>
    );
};

export default GalleryView;