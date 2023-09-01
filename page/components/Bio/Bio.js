import React from "react";

import styles from "./Bio.module.scss";

const Bio = (props) => {
  return (
    <div className={styles.Bio} id='bio'>
      <h1>Bio</h1>

      <p>
    Absolwentka malarstwa po Akademii Sztuk Pięknych w Katowicach. Dyplom realizowany w pracowni malarstwa prof. Andrzeja Tobisa w 2021 roku. Jej sztuka jest niezwykle emocjonalna i osobista, oparta na wątkach autobiograficznych, jednak poprzez bogactwo symboli oraz nawią- zań do klasycznego malarstwa dotyka tematów uniwersalnych. Jej oniryczne, ekspresyjne obrazy eksplorują obszary podświadomości, inspiracje zaś często znajduje w snach i wspomnieniach z dzieciństwa. Wykorzystuje rownież w pracy twórczej technikę świadomego śnienia. Interesują ją zagadnienia związane z psychologią i duchowością.W malarstwie stawia przede wszystkim na autentyczność i siłę emocjonalnego oddziaływania.
      </p>
    </div>
  );
};

export default Bio;
