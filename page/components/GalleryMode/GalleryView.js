import React, { useState } from "react";

import { Container, Box } from '@chakra-ui/react';

import GalleryMode from "./GalleryMode";
import galleryStyles from './GalleryMode.module.scss';

const GalleryView = (props) => {

    const [index, setIndex] = useState(0);

    return (
        <Box w='100vw' h='100vh'>
            <Container position='relative' w='100vw' h='100vh' top='50px' p='11%' m='0'>
                <Container position='absolute' left='0'
                    className={galleryStyles.layer} w='100vw' h='100vh' p='0' m='0' top='13%'>
                    <GalleryMode blured={props.blured} index={index} setIndex={setIndex} />
                </Container>
            </Container>
        </Box>
    );
};

export default GalleryView;