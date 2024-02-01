import React, { useState, useRef } from "react";

import NextJsImage from "../ArtImage/NextJSImg";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline"; 0
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import { Button } from '@chakra-ui/react'

import { artsList } from "./artsList";

import blurStyle from "../../src/styles/blurStyle.module.scss";
import galleryStyle from "./GalleryMode.module.scss";

import { ArrowRightIcon, SearchIcon, ChevronRightIcon, ChevronLeftIcon, InfoOutlineIcon } from '@chakra-ui/icons'


const artsFilesList = artsList.map(el => el.fileName)

const GalleryMode = (props) => {

    const [open, setOpen] = useState(false);
    const [fullViewSlide, setFullViewSlide] = useState(false);
    const fullscreenRef = React.useRef(null);
    const zoomRef = React.useRef(null);
    const ref = React.useRef(null);
    
    // const [index, setIndex] = useState(0);

    const stateHandler = (slide) => {
        setFullViewSlide(slide)
        setOpen(true);
    }

    const buttonShowFull = <Button position='absolute'
        right='3%' top='3%' w='40px' p='3px'
        color='black' borderRadius='0' m={0} borderColor='#000' display='block'
        border='3px solid black'
        onClick={() => stateHandler(artsFilesList[props.index])}>
        {<SearchIcon m={0} boxSize={5} />}
    </Button>

    const buttonNac = (sideRight, click) => {
        return <Button position='absolute'
            right={`${sideRight && '3%'}`} left={`${!sideRight && '3%'}`}
            bottom='0'
            color='black' borderRadius='0' m={0} borderColor='#000' display='block'
            p='3px'
            border='3px solid black'
            onClick={sideRight ? () => ref.current.next() : () => ref.current.prev()} >
            {sideRight ? <ChevronRightIcon m={0} w={7} h={7} /> : <ChevronLeftIcon m={0} w={7} h={7} />}
        </Button>

    }

    const buttonRight = buttonNac(true);
    const buttonLeft = buttonNac(false);

    const buttonNote = <Button position='absolute'
        left='25%' w='50%' p='3px' pl='5%' bottom='0' h='40px' border='3px solid black'
        color='black' borderRadius='0' m={0} borderColor='#000' display='block'
        onClick={props.openNote} >
        {<InfoOutlineIcon m={0} boxSize={5} />}  &nbsp;
        Opis
        &nbsp;  &nbsp;{<ArrowRightIcon m={0} boxSize={5} />}
    </Button>;

    return (<div>
        <div className={`${props.blured && blurStyle.blured}`} id='art1' style={{ position: 'relative' }}>
            <Lightbox
                plugins={[Inline]}
                slides={artsFilesList}
                styles={{ container: { backgroundColor: '#fff' } }}
                on={{
                    click: stateHandler,
                    view: ({ index: currentIndex }) => props.setIndex(currentIndex),
                }}
                index={props.index}
                controller={{ ref }}
                inline={{
                    style: { width: "100%", minHeight: "81vh", maxHeight: "100vh", aspectRatio: "3 / 2", },
                }}
                render={{
                    buttonPrev: () => buttonLeft,
                    buttonNext: () => buttonRight,
                    slide: NextJsImage
                }}
                noScroll={{
                    disabled: true
                }}
            />

            {buttonShowFull}
            {buttonNote}

            <Lightbox
                plugins={[Fullscreen, Zoom]}
                open={open}
                close={() => setOpen(false)}
                slides={[fullViewSlide]}
                carousel={{ finite: [props.fileName].length <= 1 }}
                render={{
                    buttonPrev: [props.fileName].length <= 1 ? () => null : undefined,
                    buttonNext: [props.fileName].length <= 1 ? () => null : undefined,
                }}
                fullscreen={{ ref: fullscreenRef }}
                on={{
                    click: () => fullscreenRef.current?.enter(),
                }}
            />
        </div>
    </div>
    );
};

export default GalleryMode;
