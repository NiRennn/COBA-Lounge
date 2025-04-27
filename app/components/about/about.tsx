import React from "react";
import styles from "./about.module.css";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>О нас</h2>
        <p className={styles.text}>
          МЯТА LOUNGE — это идеальное место для отдыха в уютной атмосфере.
          Мы предлагаем широкий выбор кальянов, авторских напитков и комфортные
          зоны для ваших встреч, вечеров с друзьями и расслабления после
          насыщенного дня.
        </p>
      </div>
    </section>
  );
}

export default About;
