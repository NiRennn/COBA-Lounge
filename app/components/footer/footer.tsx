"use client";

import React from "react";
import styles from "./footer.module.css";
import { FaVk, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.column}>
            <p>О НАС</p>
            <p>НОВОСТИ</p>
          </div>

          <div className={styles.socials}>
            <FaVk className={styles.icon} />
            <FaTelegramPlane className={styles.icon} />
            <FaYoutube className={styles.icon} />
          </div>

          <div className={styles.contact}>
            <p className={styles.email}>INFO@COBAOFFICIAL.COM</p>
          </div>
        </div>

        <div className={styles.map}>
          <YMaps>
            <Map
              defaultState={{ center: [55.69176712522453, 37.588782353633405], zoom: 15 }}
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
