import React, { useEffect } from "react";
import styles from "./ModalWindow.module.css";
import CloseIcon from "@mui/icons-material/Close";
import ModalContent from "./ModalContent/ModalContent";

function ModalWindow({ closeModal, setIsModalOpen }) {
  // useEffect(() => {
  //   const closeModalClick = (e) => {
  //     if (e.target.id === "modal_backdrop") closeModal();
  //   };
  //   window.addEventListener("click", closeModalClick);
  //   return () => window.removeEventListener("click", closeModalClick);
  // }, [isModalOpen]);
  // if (!isModalOpen) return null;
  const handleModalClick = () => setIsModalOpen(false);
  return (
    <div onClick={handleModalClick} className={styles.modal_backdrop}>
      <div className={styles.modal}>
        <div>
          <ModalContent />
        </div>
        <CloseIcon className={styles.closeICon} onClick={closeModal} />
      </div>
    </div>
  );
}

export default ModalWindow;
