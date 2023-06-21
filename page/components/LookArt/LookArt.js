import React from "react";

import styles from "./LookArt.module.scss";

const LookArt = (props) => {
  const [lookState, setLookState] = React.useState(true);

  const changeLookStateHandler = (state) => {
    setLookState(state);
  };

  return (
    <div className={styles.LookArt} id={props.idToMenu}>
      <div
        className={`${styles.firstLook} ${lookState ? styles.firstOpen : " "}`}
      >
        <img
          src={`assets/${props.fileName}.png`}
          alt={props.alt}
          onClick={() => changeLookStateHandler(true)}
        />
      </div>
      <div
        className={`${styles.secondLook} ${
          lookState ? styles.secondOpen : " "
        }`}
      >
        <div className="empty">
          <img
            src={`assets/${props.fileName}.png`}
            alt={props.alt}
            onClick={() => changeLookStateHandler(false)}
          />
        </div>
        <div className={styles.full}>
          
          <h1>{props.title}</h1>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default LookArt;
