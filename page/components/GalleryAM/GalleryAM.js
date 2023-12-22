import React from "react";

import autoMaska from "../../src/assets/autoportret-z-maskami_.jpg"
import autoKrolik from "../../src/assets/autoportret_z_krolikiem.jpg"
import autoPort from "../../src/assets/autoportret.jpg"
import jestSuper from "../../src/assets/jest_super.jpg"
import matka from "../../src/assets/matka.jpg"
import melancholik from "../../src/assets/melancholik.jpg"
import melancholja from "../../src/assets/melancholja.jpg"
import miAoAA from "../../src/assets/miAoAA.jpg"
import reminiscencje from "../../src/assets/reminiscencje.jpg"
import plew from "../../src/assets/plew.jpg"
import wedrowiec from "../../src/assets/wedrowiec.jpg"


import styles from "./GalleryAM.module.scss";
import FadeInSection from "../FadeFunc/FadeFunc";
import LookArt from "../LookArt/LookArt";

import blurStyle from "../../src/styles/blurStyle.module.scss";


const GalleryAM = (props) => {
  return (
    <div className={`${props.blured && blurStyle.blured}`} id='art'>
      <FadeInSection >
        <LookArt startColor='teal.500' endColor='red.500' fileName={plew}
          title="Plew" blured={props.blured} type='portrait' >
          100x80 cm
          <br />
          olej na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt startColor='yellow.700' endColor='green.900' fileName={miAoAA}
          title="Miłość" blured={props.blured} type='portrait' >
          100x70 cm
          <br />
          olej na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt startColor='red.600' endColor='gray.900' fileName={jestSuper}
          title="2020" blured={props.blured} type='landscape'  >
          110x140 cm
          <br />
          olej na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt startColor='yellow.300' endColor='teal.600' fileName={matka}
          title="Matka" blured={props.blured} type='portrait'>
          55x46 cm
          <br />
          olej na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt startColor='pink.200' endColor='cyan.400' fileName={autoMaska}
          title="Autoportet z maskami" blured={props.blured} type='portrait'>
          100x70 cm
          <br />
          olej na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt startColor='teal.300' endColor='yellow.300' fileName={melancholik}
          title="Melancholik" blured={props.blured} type='portrait'>
          80x60 cm
          <br />
          olej na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt startColor='gray.300' endColor='orange.800' fileName={autoKrolik}
          title="Ostatni dzień" blured={props.blured} type='portrait'>
          80x60 cm
          <br />
          olej na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt startColor='gray.200' endColor='black' fileName={melancholja}
          title="Melancholja" blured={props.blured} type='portrait'>
          200x140 cm
          <br />
          olej na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt startColor='yellow.100' endColor='red.500' fileName={autoPort}
          title="Autoportret" blured={props.blured} type='portrait'>           
          60x50 cm
          <br />
          olej na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt startColor='teal.300' endColor='blue.700' fileName={wedrowiec}
          title="Wędrowiec" blured={props.blured} type='landscape'  >
          100x140 cm
          <br />
          olej na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt
          startColor='blue.400' endColor='green.400' fileName={reminiscencje}
          title="Reminiscencje" blured={props.blured} type='landscape'  >
          140x180 cm
          <br />
          olej na płótnie
        </LookArt>
      </FadeInSection>

    </div>
  );
};

export default GalleryAM;
