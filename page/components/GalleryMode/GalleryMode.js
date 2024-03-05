import { useState, useContext, useRef } from "react";
import { isPl, LangContext} from "../ContextService/lang.service";


import NextJsImage from "../ArtImage/NextJSImg";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import { Button, Box, Text } from '@chakra-ui/react'

import { artsList } from "./artsList";

import blurStyle from "../../src/styles/blurStyle.module.scss";

import { ArrowRightIcon, SearchIcon, ChevronRightIcon, ChevronLeftIcon, InfoOutlineIcon } from '@chakra-ui/icons'


const artsFilesList = artsList.map(el => el.fileName)

const GalleryMode = (props) => {

    const [open, setOpen] = useState(false);
    const [fullViewSlide, setFullViewSlide] = useState(false);
    const fullscreenRef = useRef(null);
    const zoomRef = useRef(null);
    const ref = useRef(null);
    const { isLang } = useContext(LangContext);

    const stateHandler = (slide) => {
        setFullViewSlide(slide)
        setOpen(true);
    }

    const buttonShowFull = <Button position='absolute'
        right='3%' top='-7%' w='40px' p='3px'
        color='black' borderRadius='0' m={0} borderColor='#000' display='block'
        border='3px solid black'
        onClick={() => stateHandler(artsFilesList[props.index])}>
        {<SearchIcon m={0} boxSize={5} />}
    </Button>

    const buttonNac = (sideRight) => {
        return <Button position='absolute'
            right={`${sideRight && '3%'}`} left={`${!sideRight && '3%'}`}
            top={{ base: "100%", md: "50%" }}
            color='black' borderRadius='0' m={0} borderColor='#000' display='block'
            p='3px'
            border='3px solid black'
            onClick={sideRight ? () => ref.current.next() : () => ref.current.prev()} >
            {sideRight ? <ChevronRightIcon m={0} w={7} h={7} /> : <ChevronLeftIcon m={0} w={7} h={7} />}
        </Button>
    }
    const buttonRight = buttonNac(true);
    const buttonLeft = buttonNac(false);

    // const buttonNote = <Button position='absolute'
    // p='3px'  h='40px' border='3px solid black'
    //     pl={{ base: "5%", md: "0%" }}
    //     w={{ base: "50%", md: "25%" }}
    //     maxW={{ base: "50%", md: "125px" }}
    //     top={{ base: "75vh", md: "93%" }}
    //     right={{ base: "25%", md: "7%" }}
    //     color='black' borderRadius='0' m={0} borderColor='#000' display='block'
    //     onClick={props.openNote} >
    //     {<InfoOutlineIcon m={0} boxSize={5} />}  &nbsp;
    //     Opis
    //     &nbsp;  &nbsp;{<ArrowRightIcon m={0} boxSize={5} />}
    // </Button>;

    return (<Box className={`${props.blured && blurStyle.blured}`} id='art1' style={{ position: 'relative', overflow: 'visible' }}
        w='100vw' h='71vh' p='0' m='0'>
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
                style: { width: "100%", height: "81vh", maxHeight: "81%", aspectRatio: "3 / 2", overflow: 'visible' },
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
        {/* {buttonNote} */}
        <Box w='100%'
            pl='0%'
            pt={{ base: "11%", md: "3%" }}>
            <Text display='block'
                fontSize={{ base: "xl", md: "3xl" }}
                align='center'>
                { isPl(isLang) ? artsList[props.index].title: artsList[props.index].titleAng}, {artsList[props.index].adn.size}
            </Text>
            <Text display='block'
                fontSize={{ base: "xl", md: "3xl" }}
                align='center'>
                { isPl(isLang) ? 'olej na płótnie': 'oli on canvas'}
            </Text>

        </Box>
        <Lightbox
            plugins={[Fullscreen, Zoom]}
            open={open}
            close={() => setOpen(false)}
            slides={[fullViewSlide]}
            carousel={{ finite: [props.fileName].length <= 1 }}
            render={{
                buttonPrev: [props.fileName].length <= 1 ? () => null : undefined,
                buttonNext: [props.fileName].length <= 1 ? () => null : undefined,
                slide: NextJsImage
            }}
            fullscreen={{ ref: fullscreenRef }}
            on={{
                click: () => fullscreenRef.current?.enter(),
            }}
        />
    </Box>
    );
};

export default GalleryMode;
