import React from "react";

import styles from "./formspree.module.scss";

import { useForm, ValidationError } from "@formspree/react";

function Formspree(props) {
  const [state, handleSubmit] = useForm(props.formKey);

  if (state.succeeded) {
    return <p className={styles.Text}>Dziękuje za wysłanie wiadomości</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.Form} id='kontakt'>
        <h1>Kontakt</h1>
        <textarea id="message" name="message" placeholder="Twoja wiadomość" />
        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Adres email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit">Wyślij Wiadomość</button>
        </div>
      </form>
      <p className={styles.Text}>W sprawie cen obrazów zapraszam do kontaktu poprzez formularz kontaktowy</p>
    </>
  );
}

export default Formspree;
