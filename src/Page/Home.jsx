import React from "react";
import Header from "../components/Header/Header";
import "../styles.css";
function Home(props) {
  return (
    <div>
      <div className="intro">
        <div className="intro-media">
          <video
            src="https://storage.yandexcloud.net/lupo/%D0%A4%D0%B0%D0%B9%D0%BB%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2%20%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%BE%D0%B2/Re5/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F.mp4#t=0.001"
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
      </div>
    </div>
  );
}

export default Home;
