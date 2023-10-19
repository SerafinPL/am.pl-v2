import React from "react";

import styles from "./Bio.module.scss";
import blurStyle from "../../src/styles/blurStyle.module.scss";


const Bio = (props) => {
  return (
    <div className={`${styles.Bio} ${props.blured && blurStyle.blured}`} id='bio'>
      <h1>Bio</h1>

      <p>
        Absolwentka malarstwa po Akademii Sztuk Pięknych w Katowicach. Dyplom realizowany w pracowni malarstwa prof. Andrzeja Tobisa w 2021 roku. Jej sztuka jest niezwykle emocjonalna i osobista, oparta na wątkach autobiograficznych, jednak poprzez bogactwo symboli oraz nawiązań do klasycznego malarstwa dotyka tematów uniwersalnych. Jej oniryczne, ekspresyjne obrazy eksplorują obszary podświadomości, inspiracje zaś często znajduje wspomnieniach z dzieciństwa i snach, korzystając także z techniki świadomego śnienia. Interesują ją zagadnienia związane z psychologią i duchowością.
      </p>

      <h1>Wybrane wystawy:</h1>
      
      <ul>
        <li>Goddamn hippies, wystawa indywidualna, Galeria Pojedyncza, 2017
        </li>
        <li>Przebudzenia, wystawa zbiorowa, BWA Katowice, 2021
        </li>
        <li>Spacer w nieznane, wystawa zbiorowa, Galeria GX, 2023
        </li>
      </ul>

    </div>
  );
};

export default Bio;
