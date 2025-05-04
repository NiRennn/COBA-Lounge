"use client";

import React from "react";
import { useForm } from "react-hook-form";
import styles from "./reservation.module.css";

const ADMIN_PHONE = "79194101212";

function Reservation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const message = `Здравствуйте! Я хочу забронировать стол:\n\nИмя: ${data.name}\nТелефон: ${data.phone}\nГостей: ${data.guests}\nДата: ${data.date}\nВремя: ${data.time}`;
    const whatsappURL = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    reset();
  };

  return (
    <section className={styles.reservation}>
      <div className={styles.reservation_content}>
        <h2 className={styles.title}>Бронирование</h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.reservation_input}
            type="text"
            placeholder="Имя"
            {...register("name", { required: "Введите имя" })}
          />
          {errors.name && <span className={styles.error_message}>{errors.name.message}</span>}

          <input
            className={styles.reservation_input}
            type="tel"
            placeholder="Телефон"
            {...register("phone", {
              required: "Введите номер",
              pattern: {
                value: /^[0-9+()\-\s]+$/,
                message: "Неверный формат номера",
              },
            })}
          />
          {errors.phone && <span className={styles.error_message}>{errors.phone.message}</span>}

          <input
            className={styles.reservation_input}
            type="number"
            placeholder="Количество гостей"
            min="1"
            {...register("guests", { required: "Укажите количество гостей" })}
          />
          {errors.guests && <span className={styles.error_message}>{errors.guests.message}</span>}

          <input
            className={styles.reservation_input}
            type="date"
            {...register("date", { required: "Укажите дату" })}
          />
          {errors.date && <span className={styles.error_message}>{errors.date.message}</span>}

          <input
            className={styles.reservation_input}
            type="time"
            {...register("time", { required: "Укажите время" })}
          />
          {errors.time && <span className={styles.error_message}>{errors.time.message}</span>}

          <button className={styles.reservation_button} type="submit">
            Забронировать через WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

export default Reservation;
