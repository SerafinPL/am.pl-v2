import React, { useContext } from "react";

import { langAnswer, LangContext } from "../ContextService/lang.service";

import styles from "./Bio.module.scss";
import blurStyle from "../../src/styles/blurStyle.module.scss";

const Bio = (props) => {

  const { isLang } = useContext(LangContext);

  return (
    <div className={`${styles.Bio} ${props.blured && blurStyle.blured}`} id='bio'>
      <h1>Bio</h1><br />
      {
        langAnswer(isLang,
          <p>
            Absolwentka malarstwa Akademii Sztuk Pięknych w Katowicach.
            Dyplom realizowała w pracowni malarstwa prof.
            Andrzeja Tobisa w 2021 roku.
            Jej sztuka jest niezwykle emocjonalna i osobista, oparta na wątkach autobiograficznych,
            jednak poprzez bogactwo symboli oraz nawiązań do klasycznego malarstwa, dotyka tematów uniwersalnych.
            Jej oniryczne, ekspresyjne obrazy eksplorują obszary podświadomości,
            inspiracje często znajduje we wspomnieniach z dzieciństwa i snach, korzystając między innymi z techniki świadomego śnienia.
            Interesują ją zagadnienia związane z psychologią i duchowością.
          </p>,
          <p>
            {"The Graduate of polish Academy of Fine Arts in Katowice. She’s released her diploma in the painting studio of prof. Andrzej Tobis in 2021. Her art is extremely emotional and personal. Based on autobiographical threads, but through the abundance of symbols and references to classical painting, it touches on universal topics. Her dreamlike, expressive paintings explore the areas of the subconscious, often finding inspiration in childhood memories and dreams, using, among others, the technique of lucid dreaming. She is interested in issues related to psychology and spirituality"}.
          </p>
        )
      }

      <h1>{langAnswer(isLang,'Wybrane wystawy','selected exhibitions')}</h1><br />

      <ul>
        <li>
        {langAnswer(isLang,
          'Goddamn hippies, wystawa indywidualna, Galeria Pojedyncza, 2 - 15.03.2017',
          'Goddamn hippies, solo exhibition, Galeria Pojedyncza, 2 - 15.03.2017')}
        </li>
        <li><a target="_blank" href="http://bwa.katowice.pl/wystawy-i-wydarzenia/przebudzenia-wystawa-podyplomowa-wydzialu-artystycznego-akademii-sztuk-pieknych-w-katowicach/">
        {langAnswer(isLang,
          'Przebudzenia, wystawa zbiorowa, BWA Katowice, 2021',
          'Awakenings, group exhibition BWA Katowice, 2021')}</a>
        </li>
        <li><a target="_blank" href="https://gxgaleriasztuki.pl/spacer-w-nieznane-showroom/">
          {langAnswer(isLang,
          'Spacer w nieznane, wystawa zbiorowa, Galeria GX, 2023',
          'A walk into the unknown, collective exhibition, Gellery GX, 2023')}</a>
        </li>
      </ul>
    </div>
  );
};

export default Bio;
