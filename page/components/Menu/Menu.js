import React from "react";
import Link from "next/link";

import Image from 'next/image'

import wedrowiec from "../../src/assets/am.png"

import styles from "./Menu.module.scss";


const Menu = (props) => {
  return (
    <React.Fragment>
      <nav
        id="menuDrawer"
        className={`${styles.navDrawer} ${props.open ? styles.openDrawer : styles.closeDrawer
          }`}
      >
        <div className={styles.headerMenu}>
          <h1 className={styles.h1Menu}>Anita Machura</h1>
        </div>
        <div className={styles.boxMenu}>
          <div className={styles.linksMenu}>
            <Link href="#art" onClick={props.clicked}><h3>Malarstwo</h3></Link>
            <Link href="#bio" onClick={props.clicked}><h3>Bio</h3></Link>
            <Link href="#kontakt" onClick={props.clicked}><h3>Kontakt</h3></Link>
          </div>
          <div className={styles.logoMenu}>
            <Image src={wedrowiec}
              alt="Logo Anita Machura, Anity Machury"
              className={styles.logotypAM}
              quality={100}
              sizes="100vw"
            />
          </div>
        </div>

      </nav>
    </React.Fragment>
  );
};

export default Menu;
