import React from "react";

import styles from "./Footer.module.scss";
import blurStyle from "../../src/styles/blurStyle.module.scss";


const Footer = ({blured}) => {
  return (
    <div className={`${styles.firstBox} ${blured && blurStyle.blured}`} >
      <div className={styles.secondBox}>
        <h3>
          Designed by <a href="#">Anita Machura</a> powered with ❤️ by <a href="https://kubakoder.pl"> Kuba Koder</a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
