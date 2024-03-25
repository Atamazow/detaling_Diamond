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
    </div>
  );
}

export default Header;
