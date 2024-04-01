import React from "react";
import styles from "./Services.module.css";
function Services(props) {
  const services = [
    "ОКЛЕЙКA ПЛЕНКОЙ И ТОНИРОВАНИЕ",
    "ЗАЩИТНЫЕ ПОКРЫТИЯ И ПОЛИРОВКА",
    "ДЕТЕЙЛИНГ И ХИМЧИСТКА",
    "МАЛЯРНЫЕ И АРМАТУРНЫЕ РАБОТЫ",
    "ИНТЕРЬЕР И ДООСНАЩЕНИЕ",
    "ОБУЧЕНИЕ",
  ];
  return (
    <div>
      <ul className={styles.wrapper_services}>
        {services.map((item, i) => (
          <li key={i} className={styles.services}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
