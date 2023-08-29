import React from "react";


import styles from "./CloseButton.module.scss";


const CloseButton = (props) => {
  return (
    <section className={styles.model}>
      <div className={`${styles.menu} ${props.state && styles.close}`} onClick={props.clicked}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}> </div>
      </div>
    </section>
  )
}


export default CloseButton;