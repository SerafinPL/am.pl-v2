import React from "react";
import Link from "next/link";

import styles from "./Menu.module.scss";

import CloseButton from "./CloseButton/CloseButton";
import CloseButtonNew from "./CloseButton/CloseButtonNew"

const Menu = (props) => {
  return (
    <React.Fragment>
      <nav
        id="menuDrawer"
        className={`${styles.navDrawer} ${
          props.open ? styles.openDrawer : styles.closeDrawer
        }`}
      >
        {/* <CloseButton clicked={props.closeClick} />
        <CloseButtonNew/> */}
        <h1 className={styles.amenu}>Anita Machura</h1>
        <Link href="#art"><h3>Malarstwo</h3></Link>
        <Link href="#bio"><h3>Bio</h3></Link>
        <Link href="#kontakt"><h3>Kontakt</h3></Link>
        <img src="assets/anitkalogo.png" alt="Logo Anita Machura, Anity Machury" />
      </nav>
    </React.Fragment>
  );
};

export default Menu;
