import React, { useState } from "react";

import styles from "@/styles/Home.module.scss";
import CloseButtonNew from "../Menu/CloseButton/CloseButtonNew";

import Menu from "../Menu/Menu";
const sietHeader = (props) => {
  const [drawerState, setDrawerState] = useState(false);

    const clickHandler = () => {
        setDrawerState(!drawerState);
    }

  return (
    <React.Fragment>
      <Menu open={drawerState} />
      <header className={styles.siteHeader}>
      <CloseButtonNew clicked={clickHandler} state={drawerState}/>
        <span className={`${
         drawerState ? styles.positionOpen : styles.positionNormal
        }`}>Anita Machura</span>
      </header>
    </React.Fragment>
  );
};

export default sietHeader;
