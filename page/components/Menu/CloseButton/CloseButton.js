import React from "react";


import styles from "./CloseButton.module.scss";


const CloseButton = (props) => {
    return(
    <div onClick={props.clicked} className={styles.virtualBox}>
          <div className={styles.leftIks}></div>
          <div className={styles.rightIks}></div>
        </div>)}


export default CloseButton;