import React, { useState } from "react";

// import styles from './Layout.module.scss'
import styles from "@/styles/Home.module.scss";
import DrawerHumb from "./drawerHumburger/drawerHumburger";

import Menu from "../Menu/Menu";
const sietHeader = (props) => {
  const [drawerState, setDrawerState] = useState(false);

    const clickHandler = () => {
        setDrawerState(true);
    }

    const clickClose = () => {
        setDrawerState(false);
    }

  return (
    <React.Fragment>
      <Menu open={drawerState} closeClick={clickClose}/>
      <header className={styles.siteHeader}>
        <DrawerHumb clicked={clickHandler} />
        <span className={`${
         drawerState ? styles.positionOpen : styles.positionNormal
        }`}>Anita Machura</span>
      </header>
    </React.Fragment>
  );
};

export default sietHeader;
