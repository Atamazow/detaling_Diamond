import React, { useRef } from "react";
import styles from "./ModalContent.module.css";
function ModalContent(props) {
  const form = useRef();
  const sendEmail = () => {};
  return (
    <div className={styles.wrapper_data}>
      <p className={styles.data_title}>
        Оставьте свой email и мы, <br /> отправим письмо в ближайшее время
      </p>
      <form ref={form} action="" onSubmit={sendEmail}>
        <div className={styles.name}>
          <input className={styles.dataSize} placeholder="Имя..." type="text" />
        </div>
        <div className={styles.lastName}>
          <input
            className={styles.dataSize}
            placeholder="Фамилия..."
            type="text"
          />
        </div>
        <div className={styles.email}>
          <input
            className={styles.dataSize}
            placeholder="email..."
            type="text"
          />
        </div>
        <div className={styles.dataBtn}>Отправить заявку</div>
      </form>
    </div>
  );
}

export default ModalContent;
