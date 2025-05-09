"use client"


import React, { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";

const sections = [
  { label: "Главная", href: "#home" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Интерьер", href: "#interior" },
  { label: "Меню", href: "#menu" },
  { label: "Контакты", href: "#contacts" },
];
 
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>COBA</div>
      <nav className={styles.nav}>
        {sections.map((section) => (
          <a key={section.label} href={section.href}>
            {section.label}
          </a>
        ))}
      </nav>
      <div className={styles.burger} onClick={toggleMenu}>
        <Image src="/assets/icons/tabler_menu.png" width={36} height={36} alt="Menu" />
      </div>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
  <div className={styles.close} onClick={toggleMenu}>×</div>
  {sections.map((section) => (
    <a  key={section.label} href={section.href} onClick={() => setMenuOpen(false)}>
      {section.label}
    </a>
  ))}
</div>

    </header>
  );
}

export default Header;
