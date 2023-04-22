import React from "react";

import styles from "./Bio.module.scss";

const Bio = (props) => {
  return (
    <div className={styles.Bio} id='bio'>
      <h1>Bio</h1>

      <p>
        Absolwentka malarstwa po Akademii Sztuk Pięknych w Katowicach. Dyplom
        realizowany w pracowni malarstwa prof. Andrzeja Tobisa w 2021 roku. Moje
        zainteresowania oscylują wokół psychologii, duchowości i aktualnych
        wydarzeń. Swoją sztukę określiłabym jako swego rodzaju eksperymentalne
        pole badań na temat ludzkiego umysłu, percepcji rzeczywistości i
        zależności społeczno-kulturowych. Malarstwo jest dla mnie szczególnym
        rodzajem autoekspresji, wynikającym z nadmiernej emocjonalności; to taka
        taktyka wypracowana już w dzieciństwie, pozwalająca przetrwać- maluję,
        więc żyję. Sztuka musi być ściśle powiązana z życiem, inaczej byłaby
        nieautentyczna. Sztuka moim życiem, życie moją sztuką. Uprawiam
        artystyczny ekshibicjonizm i cieszę się, że sztuka daje mi taka wolność.
      </p>
    </div>
  );
};

export default Bio;
