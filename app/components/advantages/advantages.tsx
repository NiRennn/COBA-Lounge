import React from "react";
import styles from "./advantages.module.css";
import { IoLeafOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa6";
import { GiCeilingLight } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { RiSofaLine } from "react-icons/ri";
import { CiParking1 } from "react-icons/ci";

const advantages = [
  {
    icon: <CiParking1 className={styles.icon} />,
    title: "Бесплатная парковка",
  },
  {
    icon: <IoLeafOutline className={styles.icon} />,
    title: "Большой выбор вкусов",
  },
  {
    icon: <GiCeilingLight className={styles.icon} />,
    title: "Стильная атмосфера",
  },
  {
    icon: <BiSolidDrink className={styles.icon} />,
    title: "Разнообразие напитков",
  },
  {
    icon: <FaWifi className={styles.icon} />,
    title: "Бесплатный Wi-Fi",
  },
  {
    icon: <RiSofaLine className={styles.icon} />,
    title: "Комфортные зоны отдыха",
  },
];

function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className={styles.advantages_container}>
        <h2 className={styles.advantages_title}>Почему выбирают нас</h2>

        <div className={styles.advantages_grid}>
          {advantages.map((item, index) => (
            <div key={index} className={styles.advantages_card}>
              <div>{item.icon}</div>
              <p className={styles.advantages_card_title}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantages;