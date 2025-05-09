'use client'


import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_overlay}></div>
      <div className={styles.hero_content}>
        <div className={styles.hero_content_top}>
          <Image
            src="/logos/white-logo.svg"
            alt="COBA"
            width={230}
            height={250}
            className={styles.hero_content_logo}
          />
          <div className={styles.hero_content_top_title_desc}>
            <h1 className={styles.hero_content_top_title}>COBA</h1>
            <h2 className={styles.hero_content_top_desc}>LOUNGE</h2>
          </div>
        </div>
        <div className={styles.hero_content_mid}>
          <button
            className={styles.hero_content_mid_button}
            onClick={() => {
              const reservationSection = document.getElementById("reservation");
              if (reservationSection) {
                reservationSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Бронирование столика
          </button>
        </div>
        <div className={styles.hero_content_bot}>
          <div className={styles.hero_content_bot_section}>
            <span className={styles.hero_content_bot_section_title}>
              Время работы:
            </span>
            <span className={styles.hero_content_bot_section_text}>
              Пн-Вс 12:00-00:00
            </span>
          </div>
          <div className={styles.hero_content_bot_section}>
            <span className={styles.hero_content_bot_section_title}>
              Адрес:
            </span>
            <span className={styles.hero_content_bot_section_text}>
              м. Крымская
            </span>
            <span className={styles.hero_content_bot_section_text}>
              ул. Шверника, 13к1
            </span>
          </div>

          <div className={styles.hero_content_bot_section}>
            <span className={styles.hero_content_bot_section_title}>
              Телефон:
            </span>
            <span className={styles.hero_content_bot_section_text}>
              +7 999 999 99 99
            </span>
            <span className={styles.hero_content_bot_section_text}>
              COBA LOUNGE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

{
  /* 
<span className={styles.hero_content_title}>LOUNGE - BAR</span>
<span className={styles.hero_content_address}>Шверника, 13к1</span>
<div className={styles.hero_content_time_container}>
<span className={styles.hero_content_time}>Пн-Вс </span>
<span className={styles.hero_content_time_gray}>12:00 - 00:00</span>
</div>
<button className={styles.hero_content_button}>
Бронирование столика
</button>
<span className={styles.hero_content_number}>+7 999 999 99 99</span> */
}
