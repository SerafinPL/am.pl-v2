import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.firstBox}>
      <div className={styles.secondBox}>
        <h3>
          Designed by <a href="#">Anita Machura</a> powered with ❤️ by <a href="https://kubakoder.pl"> Kuba Koder</a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
