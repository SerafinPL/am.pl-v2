import React from "react";

import styles from "./formspree.module.scss";
import blurStyle from "../../src/styles/blurStyle.module.scss";

import ContactModal from "./ContactModal";

import { useForm, ValidationError } from "@formspree/react";

function Formspree(props) {
  const [state, handleSubmit] = useForm("xdorpdar");

  const modal = <>
    <ContactModal />
  </>;

  if (state.succeeded) {
    // return modal;
    return <p className={styles.Text}>Dziękuje za wysłanie wiadomości</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={`${styles.Form} ${props.blured && blurStyle.blured}`} id='contact'>
        <h1>Kontakt</h1>
        <textarea id="message" name="message" placeholder="Twoja wiadomość..." />
        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Twój e-mail..."
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit">Wyślij Wiadomość</button>
        </div>
        <p className={styles.Text}>W sprawie cen obrazów zapraszam do kontaktu poprzez formularz kontaktowy</p>
      </form>

    </>
  );
}

export default Formspree;
