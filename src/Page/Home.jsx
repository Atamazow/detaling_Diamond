import React from "react";
import Header from "../components/Header/Header";
import "../styles.css";
import logoPhone from "../assets/icon/WDB+Fractal+Diamond.png";
function Home(props) {
  return (
    <div>
      <div className="intro">
        <div className="intro-media">
          <video
            src="https://brooklandsdetailing.ru/images/site_main_brooklands_1.mp4"
            muted
            loop
            autoPlay
            className="video_media"
          >
            das
          </video>
        </div>
        <div className="intro_content_wrapper">
          <div className="intro_content">
            <Header />
          </div>
        </div>
        <div className="logoPhone_wrapper">
          <div className="logoPhoneDiamond">
            <img className="logoPhone" src={logoPhone} alt="" />
          </div>
        </div>
      </div>
      <div className="header_title_wrapper">
        <div className="header_title_text">
          <div className="header_title">Детейлинг высокого класса</div>
          <p className="header_text">
            Для самых требовательных автолюбителейИсключительный уход за кузовом
            и салоном вашего автомобиля
          </p>
          <div className="header_btn">Записаться</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
