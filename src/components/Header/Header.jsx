import React from "react";
import LogoHeader from "../../assets/icon/1678444501_gas-kvas-com-p-belaya-mashina-na-chernom-fone-risunok-22.png";
import style from "./Header.module.css";
function Header(props) {
  return (
    <div>
      <div className={style.wrapperlogo_border}>
        <img className={style.logoHeader} src={LogoHeader} alt="" />
        <div className={style.borderVertikal}></div>
        <div className={style.logoDD}>DD</div>
      </div>
      <div className={style.logoTitle}>Detailing diamond</div>
      <div className="video"></div>
      <video
        poster="https://static.tildacdn.com/tild3032-3136-4539-b436-626231643930/Rectangle_16.png"
        muted
        loop
        autoPlay
        playsInline=""
        preload="metadata"
        pip="false"
        className="video_media"
        onLoadedMetadata="this.muted = true"
      >
        <source
          src="https://storage.yandexcloud.net/lupo/%D0%A4%D0%B0%D0%B9%D0%BB%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2%20%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%BE%D0%B2/Re5/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F.mp4#t=0.001"
          type="video/mp4"
        />
        das
      </video>
    </div>
  );
}

export default Header;
