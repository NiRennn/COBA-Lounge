'use client';

import React from "react";
import styles from "./advantages.module.css";
import { IoLeafOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa6";
import { GiCeilingLight } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { RiSofaLine } from "react-icons/ri";
import { CiParking1 } from "react-icons/ci";
import { GiMusicalNotes } from "react-icons/gi";
import { FaRegSmileWink } from "react-icons/fa";
import { motion } from "framer-motion";

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
  {
    icon: <GiMusicalNotes className={styles.icon} />,
    title: "Приятная музыка",
  },
  {
    icon: <FaRegSmileWink className={styles.icon} />,
    title: "Приветливый персонал",
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className={styles.advantages_container}>
        <h2 className={styles.advantages_title}>Почему выбирают нас</h2>

        <div className={styles.advantages_grid}>
          {advantages.map((item, index) => (
            <motion.div key={index} className={styles.advantages_card}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              variants={cardVariants}>
              <div>{item.icon}</div>
              <p className={styles.advantages_card_title}>{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantages;
