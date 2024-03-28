import React from "react";
import "../styles.css";
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
        ></video>
      </div>
      <ContentHeader />
    </div>
  );
}

export default Home;
