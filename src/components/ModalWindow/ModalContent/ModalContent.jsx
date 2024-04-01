import React, { useRef } from "react";
import styles from "./ModalContent.module.css";
import emailjs from "@emailjs/browser";

function ModalContent(props) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d2haskt", "template_qmpagsq", form.current, {
        publicKey: "GaTDZac-xe_f3iQ2G",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
    e.target.reset();
  };

  return (
    <div className={styles.wrapper_data}>
      <p className={styles.data_title}>
        Оставьте свой email и мы, <br /> отправим письмо в ближайшее время
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.name}>
          <input
            name="user_name"
            className={styles.dataSize}
            placeholder="Имя..."
            type="text"
          />
        </div>
        <div className={styles.lastName}>
          <input
            className={styles.dataSize}
            name="user_lastname"
            placeholder="Фамилия..."
            type="text"
          />
        </div>
        <div className={styles.email}>
          <input
            name="user_email"
            className={styles.dataSize}
            placeholder="email..."
            type="text"
          />
        </div>

        <input
          type="submit"
          value="Отправить заявку"
          className={styles.dataBtn}
        ></input>
      </form>
    </div>
  );
}

export default ModalContent;
