import { useContext } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { langAnswer, LangContext } from "../ContextService/lang.service";
import ContactModal from "./ContactModal";
import styles from "./formspree.module.scss";
import blurStyle from "../../src/styles/blurStyle.module.scss";

function Formspree(props) {

  const code = process.env.NEXT_PUBLIC_FORM;

  const [state, handleSubmit] = useForm(code);
  const { isLang } = useContext(LangContext);

  const modal = <>
    <ContactModal />
  </>;

  if (state.succeeded) {
    return <p className={styles.Text}>Dziękuje za wysłanie wiadomości</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={`${styles.Form} ${props.blured ? blurStyle.blured : ''}`} id='contact'>
        <h1> {langAnswer(isLang, 'Kontakt', 'Contact')}</h1>
        <textarea id="message" name="message" placeholder={langAnswer(isLang, "Twoja wiadomość...", 'Your message...')} />
        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={langAnswer(isLang, "Twój e-mail...", 'Your e-mail...')}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit">{langAnswer(isLang, "Wyślij Wiadomość", 'Send message')}</button>
        </div>
        <p className={styles.Text}>{langAnswer(isLang,
          "W sprawie cen obrazów zapraszam do kontaktu poprzez formularz kontaktowy",
          'For painting prices, please contact me via the contact form')}
        </p>
      </form>
    </>
  );
}

export default Formspree;
