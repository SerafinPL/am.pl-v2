import React, { useState } from "react";

import styles from "@/styles/Home.module.scss";
import CloseButtonNew from "../Menu/CloseButton/CloseButtonNew";
import LangButton from "../Menu/LangButton/LangButton";

import Menu from "../Menu/Menu";
const sietHeader = (props) => {

  return (
    <React.Fragment>
      <Menu open={props.state} clicked={props.clicked}/>
      <CloseButtonNew clicked={props.clicked} state={props.state} />
      <LangButton/>
      
      <header className={`${styles.siteHeader} ${props.state && styles.blur}`}>
      <span className={`${styles.anitaText} ${props.state ? styles.positionOpen : styles.positionNormal}`}>Anita Machura</span>
      </header>
    </React.Fragment>
  );
};

export default sietHeader;
