import React from "react";
import Header from "../components/Header/Header";
import "../styles.css";
import logoPhone from "../assets/icon/WDB+Fractal+Diamond.png";
import ContentHeader from "../components/ContentHeader/ContentHeader";
function Home(props) {
  return (
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
      <ContentHeader />
    </div>
  );
}

export default Home;
