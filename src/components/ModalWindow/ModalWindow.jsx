import React from "react";
import styles from "./ModalWindow.module.css";
function ModalWindow({ onClose, children }) {
  return (
    <div className={styles.modal - backdrop}>
      <div className="modal">{children}</div>
      <div>X</div>
    </div>
  );
}

export default ModalWindow;
