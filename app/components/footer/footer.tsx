"use client";

import React, { useState } from "react";
import styles from "./footer.module.css";
import { FaTelegramPlane, FaInstagram, FaWhatsapp   } from "react-icons/fa";
import { YMaps, Map, Placemark } from "@iminside/react-yandex-maps";

function Footer() {
  const [mapAccessible, setMapAccessible] = useState(false); 

  const handleClick = () => {
    setMapAccessible(true);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_map}>
        <YMaps query={{ apikey: "6b1f2de0-7847-4b5a-b172-1727e4bd4aeb" }}>
          <Map
            state={{
              center: [55.69176712522453, 37.588782353633405],
              zoom: 15,
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <Placemark geometry={[55.69176712522453, 37.588782353633405]} />
          </Map>
        </YMaps>

        {!mapAccessible && (
          <div
            className={styles.overlay}
            onClick={handleClick} 
          />
        )}
      </div>

      <div className={styles.infoOverlay}>
        <h2 className={styles.title}>COBA</h2>
        <h3 className={styles.subtitle}>LOUNGE-BAR</h3>
        <div className={styles.infoItem}>
          <p>Пн-Вс: 12:00–00:00</p>
        </div>
        <div className={styles.infoItem}>
          <p>м. Крымская</p>
          <p>ул. Шверника, 13к1</p>
        </div>
        <div className={styles.infoItem}>
          <p>+7 999 999 99 99</p>
        </div>
        <div className={styles.footer_socials}>
          <FaTelegramPlane className={styles.footer_icon} />
          <FaInstagram  className={styles.footer_icon} />
          <FaWhatsapp  className={styles.footer_icon} />
        </div>
        <div className={styles.footer_contact}>
          <p>INFO@COBAOFFICIAL.COM</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
