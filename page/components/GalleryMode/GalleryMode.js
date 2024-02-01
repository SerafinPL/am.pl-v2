import React, { useState, useRef } from "react";

import NextJsImage from "../ArtImage/NextJSImg";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline"; 0
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import { Button, ButtonGroup } from '@chakra-ui/react'


import autoMaska from "../../src/assets/autoportret-z-maskami_.jpg";
import autoKrolik from "../../src/assets/ostatnidzien.jpg";
import autoPort from "../../src/assets/autoportret.jpg";
import jestSuper from "../../src/assets/jest_super.jpg";
import matka from "../../src/assets/matka.jpg";
import melancholik from "../../src/assets/melancholik.jpg";
import melancholja from "../../src/assets/melancholja.jpg";
import miAoAA from "../../src/assets/miAoAA.jpg";
import reminiscencje from "../../src/assets/reminiscencje.jpg";
import plew from "../../src/assets/plew.jpg";
import wedrowiec from "../../src/assets/wedrowiec.jpg";


import FadeInSection from "../FadeFunc/FadeFunc";
import LookArt from "../LookArt/LookArt";

import blurStyle from "../../src/styles/blurStyle.module.scss";

import { ArrowRightIcon, SearchIcon, ChevronRightIcon, ChevronLeftIcon, InfoOutlineIcon } from '@chakra-ui/icons'





const artsList = [
    {
        startColor: 'teal.500', endColor: 'red.500',
        fileName: plew, title: "Plew", type: 'portrait',
        adn: {
            size: '100x80 cm',
            method: ' olej na płótnie',
        }
    },
    {
        startColor: 'yellow.700', endColor: 'green.900',
        fileName: miAoAA, title: "Miłość", type: 'portrait',
        adn: {
            size: '100x70 cm',
            method: ' olej na płótnie',
        }
    },
    {
        startColor: 'red.600', endColor: 'gray.900',
        fileName: jestSuper, title: "2020", type: 'landscape',
        adn: {
            size: '110x140 cm',
            method: ' olej na płótnie',
        }
    },
    {
        startColor: 'yellow.300', endColor: 'teal.600',
        fileName: matka, title: "Matka", type: 'portrait',
        adn: {
            size: '55x46 cm',
            method: ' olej na płótnie',
        }
    },
    {
        startColor: 'pink.200', endColor: 'cyan.400',
        fileName: autoMaska, title: "Autoportet z maskami", type: 'portrait',
        adn: {
            size: '100x70 cm',
            method: ' olej na płótnie',
        }
    },
    {
        startColor: 'teal.300', endColor: 'yellow.300',
        fileName: melancholik, title: "Melancholik", type: 'portrait',
        adn: {
            size: '80x60 cm',
            method: ' olej na płótnie',
        }
    },
    {
        startColor: 'gray.300', endColor: 'orange.800',
        fileName: autoKrolik, title: "Ostatni dzień", type: 'portrait',
        adn: {
            size: '80x60 cm',
            method: ' olej na płótnie',
        }
    }, {
        startColor: 'gray.200', endColor: 'black',
        fileName: melancholja, title: "Melancholja", type: 'portrait',
        adn: {
            size: '200x140 cm',
            method: ' olej na płótnie',
        }
    }, {
        startColor: 'yellow.100', endColor: 'red.500',
        fileName: autoPort, title: "Autoportret", type: 'portrait',
        adn: {
            size: '60x50 cm',
            method: ' olej na płótnie',
        }
    }, {
        startColor: 'teal.300', endColor: 'blue.700',
        fileName: wedrowiec, title: "Wędrowiec", type: 'landscape',
        adn: {
            size: '100x140 cm',
            method: ' olej na płótnie',
        }
    }, {
        startColor: 'blue.400', endColor: 'green.400',
        fileName: reminiscencje, title: "Reminiscencje", type: 'landscape',
        adn: {
            size: '140x180 cm',
            method: ' olej na płótnie',
        }
    },

]

const artsFilesList = artsList.map(el => el.fileName)

const GalleryMode = (props) => {

    const [open, setOpen] = useState(false);
    const [fullViewSlide, setFullViewSlide] = useState(false);
    const fullscreenRef = React.useRef(null);
    const zoomRef = React.useRef(null);
    const ref = React.useRef(null);
    const [index, setIndex] = useState(-1);


    
    const stateHandler = (slide) => {
        setFullViewSlide(slide)
        setOpen(true);
    }

    const buttonNote = <Button position='absolute'
        left='25%'
        w='50%' p='3px' pl='5%'
        bottom='0' h='40px'
        color='black' borderRadius='0' m={0} borderColor='#000' display='block'
        border='3px solid black' >
         {<InfoOutlineIcon m={0} boxSize={5} />}  &nbsp;
        Opis
        &nbsp;  &nbsp;{<ArrowRightIcon m={0} boxSize={5} />}
    </Button>

    const buttonShowFull = <Button position='absolute'
        left='25%' w='50%' p='3px' pl='5%'
        top='0'
        color='black' borderRadius='0' m={0} borderColor='#000' display='block'
        border='3px solid black' 
        onClick={() => stateHandler(artsFilesList[index])}>
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

    return (
        <div className={`${props.blured && blurStyle.blured}`} id='art1' style={{ position: 'relative' }}>
            <Lightbox
                plugins={[Inline]}
                slides={artsFilesList}
                styles={{ container: { backgroundColor: '#fff' } }}
                on={{
                    click: stateHandler,
                    view: ({ index: currentIndex }) => setIndex(currentIndex) ,
                }}
                index={index}
                controller={{ ref }}
                inline={{
                    style: { width: "100%", minHeight: "81vh", maxHeight: "100vh", aspectRatio: "3 / 2", },
                }}
                render={{
                    buttonPrev: () => buttonLeft,
                    buttonNext: () => buttonRight,
                    slide: NextJsImage
                }}
            >

            </Lightbox>

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
                noScroll={{
                    disabled: false
                }}
            />

        </div>
    );
};

export default GalleryMode;
