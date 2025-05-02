"use client";

import React from "react";
import styles from "./footer.module.css";
import { FaVk, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function Footer() {
  return (
    <footer className={styles.footer}>
      <YMaps query={{ apikey: "6b1f2de0-7847-4b5a-b172-1727e4bd4aeb" }}>
        <Map
          defaultState={{
            center: [55.69176712522453, 37.588782353633405],
            zoom: 15,
          }}
          width="100%"
          height="100%"
          options={{
            drag: true,
            zoomControl: true,
            scrollZoom: true,
            behaviors: ["default", "scrollZoom"],
          }}
        >
          <Placemark geometry={[55.69176712522453, 37.588782353633405]} />
        </Map>
      </YMaps>

      <div className={styles.infoOverlay}>
        <div className={styles.footer_socials}>
          <FaVk className={styles.footer_icon} />
          <FaTelegramPlane className={styles.footer_icon} />
          <FaYoutube className={styles.footer_icon} />
        </div>
        <div className={styles.footer_contact}>
          <p>INFO@COBAOFFICIAL.COM</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
