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
        <LookArt fileName={plew} title="Plew" blured={props.blured}
          type='portrait' >
          100x80 cm
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName={miAoAA} title="Miłość" blured={props.blured}
          type='portrait' >
          100x70 cm
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName={jestSuper} title="2020" blured={props.blured}
          type='landscape'  >
          110x140 cm
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName={matka} title="Matka" blured={props.blured}
          type='portrait'>           55x46 cm
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName={autoMaska} title="Autoportet z maskami" blured={props.blured}
          type='portrait'> 
          100x70 cm
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName={melancholik} title="Melancholik" blured={props.blured}
          type='portrait'>           80x60 cm
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName={autoKrolik} title="Ostatni dzień" blured={props.blured}
          type='portrait'>           80x60 cm
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName={melancholja} title="Melancholja" blured={props.blured}
          type='portrait'>  
          200x140 cm
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt fileName={autoPort} title="Autoportret" blured={props.blured}
          type='portrait'>           60x50 cm
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt
          fileName={wedrowiec}
          title="Wędrowiec"
          blured={props.blured}
          type='landscape'  >
          100x140 cm
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>
      <FadeInSection>
        <LookArt
          fileName={reminiscencje}
          title="Reminiscencje"
          blured={props.blured}
          type='landscape'  >
          140x180 cm
          <br />
          farba olejna na płótnie
        </LookArt>
      </FadeInSection>

    </div>
  );
};

export default GalleryAM;
