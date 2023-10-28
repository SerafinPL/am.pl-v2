import React from "react";

import styles from "./Bio.module.scss";
import blurStyle from "../../src/styles/blurStyle.module.scss";


const Bio = (props) => {
  return (
    <div className={`${styles.Bio} ${props.blured && blurStyle.blured}`} id='bio'>
      <h1>Bio</h1><br/>

      <p>
        Absolwentka malarstwa Akademii Sztuk Pięknych w Katowicach.
        Dyplom realizowała w pracowni malarstwa prof.
        Andrzeja Tobisa w 2021 roku.
        Jej sztuka jest niezwykle emocjonalna i osobista, oparta na wątkach autobiograficznych,
        jednak poprzez bogactwo symboli oraz nawiązań do klasycznego malarstwa, dotyka tematów uniwersalnych.
        Jej oniryczne, ekspresyjne obrazy eksplorują obszary podświadomości,
        inspiracje często znajduje we wspomnieniach z dzieciństwa i snach, korzystając między innymi z techniki świadomego śnienia.
        Interesują ją zagadnienia związane z psychologią i duchowością.
      </p>

      <h1>Wybrane wystawy</h1><br/>

      <ul>
        <li>
          Goddamn hippies, wystawa indywidualna, Galeria Pojedyncza, 2 - 15.03.2017
        </li>
        <li><a target="_blank" href="http://bwa.katowice.pl/wystawy-i-wydarzenia/przebudzenia-wystawa-podyplomowa-wydzialu-artystycznego-akademii-sztuk-pieknych-w-katowicach/">
          Przebudzenia, wystawa zbiorowa</a>, BWA Katowice, 2021
        </li>
        <li><a target="_blank" href="https://gxgaleriasztuki.pl/spacer-w-nieznane-showroom/">
          Spacer w nieznane, wystawa zbiorowa</a>, Galeria GX, 2023
        </li>
      </ul>

    </div>
  );
};

export default Bio;
