import Head from "next/head";
import React, { useState } from "react";

import styles from "../styles/Home.module.scss";

import SietHeader from "components/Header/siteHeader";
import Bio from "components/Bio/Bio";
import ContactForm from "components/ContactForm/ContactForm";
import Footer from "components/Footer/Footer";
import GalleryAM from "../../components/GalleryAM/GalleryAM";

const Home = (props) => {

  const [drawerState, setDrawerState] = useState(false);

  const clickHandler = () => {
    setDrawerState(!drawerState);
  }

  return (
    <div className={styles.container} >
      <Head>
        <title>Anita Machura</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Strona malarstwa Anity Mchury znakomitej artystki młodego pokolenia"
        />
        <meta
          name="author"
          content="Code: Kuba Koder = Jakub Grzegorzek, Design: Anita Machura"
        />
        <link rel="icon" href="/favico.png" />

      </Head>
      <SietHeader clicked={clickHandler} state={drawerState} />

      <div className={styles.secondLayer} onClick={() => setDrawerState(false)}>
        <GalleryAM blured={drawerState} />
        <Bio blured={drawerState} />
        <ContactForm blured={drawerState} />
        <Footer blured={drawerState} />
      </div>
    </div>
  );
};

export default Home;

// export const getStaticProps = async () => {
//   return {
//     props: {
//       formKey: process.env.NEXT_PUBLIC_ENDP,
//     },
//   };
// };
