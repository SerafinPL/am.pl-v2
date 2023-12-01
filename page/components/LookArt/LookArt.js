import React from "react";

import ArtImage from "../ArtImage/ArtImage";

import styles from "./LookArt.module.scss";

const LookArt = (props) => {
  const [lookState, setLookState] = React.useState(true);

  const changeLookStateHandler = (state) => {
    setLookState(state);
  };

  return (
    <div className={`${styles.LookArt}`} id={props.idToMenu}>
      <div className={`${styles.firstLook} ${lookState && styles.firstOpen}`}>
        <ArtImage 
        startColor={props.startColor} endColor={props.endColor}
        alt={props.alt} 
        clicked={() => changeLookStateHandler(true)} 
        fileName={props.fileName} 
        blured={props.blured} ratio={props.ratio}
        type={props.type} 
        />
      </div>
      <div className={`${styles.secondLook} ${lookState && styles.secondOpen}`} >
        <ArtImage 
        startColor={props.startColor} endColor={props.endColor}
        alt={props.alt} 
        clicked={() => changeLookStateHandler(false)} 
        fileName={props.fileName} 
        blured={props.blured} 
        type={props.type} 
        mini        
        />
        <div className={`${styles.full} ${props.blured && styles.blured}`} >
          <h2>{props.title}</h2>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default LookArt;
