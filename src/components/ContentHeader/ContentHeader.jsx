import React, { useState } from "react";
import Header from "../Header/Header";
import logoPhone from "../../assets/icon/WDB+Fractal+Diamond.png";
import ModalWindow from "../ModalWindow/ModalWindow";

function ContentHeader(props) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="intro_content_wrapper">
        {isModalOpen && (
          <ModalWindow
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            closeModal={closeModal}
          />
        )}
        <div className="intro_content">
          <Header />
        </div>
      </div>
      <div className="logoPhone_wrapper">
        <div className="logoPhoneDiamond">
          <img className="logoPhone" src={logoPhone} alt="" />
        </div>
      </div>
      <div className="header_title_wrapper">
        <div className="header_title_text">
          <div className="header_title">Детейлинг высокого класса</div>
          <p className="header_text">
            Для самых требовательных автолюбителей Исключительный уход за
            кузовом и салоном вашего автомобиля
          </p>
          <div className="header_btn" onClick={openModal}>
            Записаться
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
