import React from "react";

import styles from "./Footer.module.scss";
import blurStyle from "../../src/styles/blurStyle.module.scss";


const Footer = ({ blured }) => {

  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className={`${styles.firstBox} ${blured && blurStyle.blured}`} >
      <div className={styles.secondBox}>
        <h3>
          Projekt <a href="anitamachura.pl">Anita Machura</a> wykonanie z ❤️ <a href="https://kubakoder.pl">Kuba Koder</a> &#169; 2023 - {year}
        </h3>
      </div>
    </div>
  );
};

export default Footer;
