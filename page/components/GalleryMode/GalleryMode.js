import React, { useState,useRef } from "react";

import NextJsImage from "../ArtImage/NextJSImg";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline"; 0
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";


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
    const fullscreenRef = React.useRef(null);
    const zoomRef = React.useRef(null);


    return (
        <div className={`${props.blured && blurStyle.blured}`} id='art1'>
            <Lightbox
                plugins={[Inline]}
                slides={artsFilesList}
                on={{
                    click: () => setOpen(true),
                }}
                
                inline={{
                    style: { width: "100%", height:"100vh", aspectRatio: "3 / 2", backgroundColor: '#fff' },
                }}
                render={{ slide: NextJsImage }}
            // render={{
            //     iconPrev: () => <MyPrevIcon />,
            //     iconNext: () => <MyNextIcon />,
            //     iconClose: () => <MyCloseIcon />,
            //   }}


            />

            <Lightbox
                plugins={[Fullscreen, Zoom]}
                open={open}
                close={() => setOpen(false)}
                slides={artsFilesList[0]}
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
    );
};

export default GalleryMode;
