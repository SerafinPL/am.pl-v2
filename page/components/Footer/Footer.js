import React, { useContext } from "react";

import { langAnswer, LangContext } from "../ContextService/lang.service";

import styles from "./Footer.module.scss";
import blurStyle from "../../src/styles/blurStyle.module.scss";

const Footer = ({ blured }) => {

  const d = new Date();
  let year = d.getFullYear();
  const { isLang } = useContext(LangContext);


  return (
    <div className={`${styles.firstBox} ${blured && blurStyle.blured}`} >
      <div className={styles.secondBox}>
        <h3>
        {langAnswer(isLang,"Projekt ", 'Design ')}
           <a href="https://anitamachura.pl">Anita Machura</a> 
           {langAnswer(isLang," wykonanie z ❤️ ", ' made with ❤️ ')}<a href={langAnswer(isLang,"https://kubakoder.pl",'https://jackthecoder.dev/')}>{langAnswer(isLang,"Kuba Koder", 'Jack the Coder')}</a> &#169; v2.1.15 2023 - {year}
          
        </h3>
      </div>
    </div>
  );
};

export default Footer;
