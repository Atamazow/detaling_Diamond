import React from "react";
import LogoHeader from "../../assets/icon/1678444501_gas-kvas-com-p-belaya-mashina-na-chernom-fone-risunok-22.png";
import style from "./Header.module.css";
import Services from "../Services/Services";
function Header(props) {
  return (
    <div>
      <div className={style.wrapperlogo_border}>
        <div className={style.logoBorder}>
          <img className={style.logoHeader} src={LogoHeader} alt="" />
          <div className={style.borderVertikal}></div>
          <div className={style.logoDD}>DD</div>
        </div>
        <div className={style.wrapper_dataCompany}>
          <div className={style.keys}>Контакты</div>
          <div className={style.keys}> Кейсы</div>
          <div className={style.keys}>Грозный</div>
        </div>
      </div>
      <div className={style.logoTitle}>Detailing diamond</div>
      <Services />
    </div>
  );
}

export default Header;
