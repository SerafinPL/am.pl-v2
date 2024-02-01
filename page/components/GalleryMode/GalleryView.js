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
            <Container position='relative' w='100vw' h='100vh'  >
                <Container position='absolute' left={note ? '100vw' : '0' } className={galleryStyles.layer}  w='100vw' h='100vh'>
                    <GalleryMode blured={props.blured} openNote={()=>setNote(true)}
                    index={index} setIndex={setIndex}/>
                </Container>
                <Container position='absolute' left={!note ? '100vw' : '0' } className={galleryStyles.layer}  w='100vw' h='100vh'>
                    <GalleryNote blured={props.blured} closeNote={()=>setNote(false)}
                    index={index}/>
                </Container>
            </Container>

        </Box>
    );
};

export default GalleryView;