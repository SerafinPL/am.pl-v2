import Head from "next/head";
import React, { useState } from "react";

import styles from "../styles/Home.module.scss";

import SietHeader from "components/Header/siteHeader";
import LookArt from "components/LookArt/LookArt";
import Bio from "components/Bio/Bio";
import ContactForm from "components/ContactForm/ContactForm";
import FadeInSection from "components/FadeFunc/FadeFunc";
import Footer from "components/Footer/Footer";

import autoMaska from "../assets/autoportret-z-maskami_.jpg"
import autoKrolik from "../assets/autoportret_z_krolikiem.jpg"
import autoPort from "../assets/autoportret.jpg"
import jestSuper from "../assets/jest_super.jpg"
import matka from "../assets/matka.jpg"
import melancholik from "../assets/melancholik.jpg"
import melancholja from "../assets/melancholja.jpg"
import miAoAA from "../assets/miAoAA.jpg"
import reminiscencje from "../assets/reminiscencje.jpg"
import plew from "../assets/plew.jpg"
import wedrowiec from "../assets/wedrowiec.jpg"

import GalleryAM from "../../components/GalleryAM/GalleryAM";

const Home = (props) => {

  const [drawerState, setDrawerState] = useState(false);

  const clickHandler = () => {
    setDrawerState(!drawerState);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Anita Machura</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Strona malarstwa Anity Mchury znakomitej artystki"
        />
        <meta
          name="author"
          content="Code: Kuba Koder = Jakub Grzegorzek, Design: Anita Machura"
        />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <SietHeader clicked={clickHandler} state={drawerState} />

      <div className={styles.secondLayer}>
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
