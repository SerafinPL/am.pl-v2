import { useContext } from "react";

import { langAnswer, LangContext, isPl } from "../../ContextService/lang.service";

import styles from "./LangButton.module.scss";


const LangButton = (props) => {

  const { isLang, chengeLang } = useContext(LangContext);



  return (
    <section className={styles.model} onClick={() => chengeLang()}>
      <div className={`${styles.menu} ${isPl(isLang)}`} >
        <p>{isLang.toUpperCase()}</p>
      </div>
    </section>
  )
}


export default LangButton;