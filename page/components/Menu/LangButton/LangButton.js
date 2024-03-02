import React from "react";


import styles from "./LangButton.module.scss";


const LangButton = (props) => {
  return (
    <section className={styles.model}>
      <div className={`${styles.menu} ${props.state && styles.close}`} onClick={props.clicked}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </section>
  )
}


export default LangButton;