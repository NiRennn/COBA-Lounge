"use client";

import React, { useState } from "react";
import styles from "./carousel.module.css";
import Image from "next/image";

const images = [
  "/carousel/photo-1.jpg",
  "/carousel/photo-2.jpg",
  "/carousel/photo-3.jpeg",
  "/carousel/photo-4.jpg",
  "/carousel/photo-5.jpg",
  "/carousel/photo-6.jpg",
  "/carousel/photo-7.jpg",
];

function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className={styles.carousel}>
      <button onClick={prevSlide} className={`${styles.button} ${styles.left}`}>
        &#10094;
      </button>

      <div className={styles.carouselInner}>
        <div
          className={styles.slider}
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((src, i) => (
            <div className={styles.slide} key={i}>
              <Image
                src={src}
                alt={`Интерьер ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className={`${styles.button} ${styles.right}`}
      >
        &#10095;
      </button>
      <div className={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`${styles.dot} ${i === index ? styles.activeDot : ""}`}
            aria-label={`Перейти к слайду ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Carousel;
