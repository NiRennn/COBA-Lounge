"use client";

import React, { useState } from "react";
import styles from "./order.module.css";

function Order() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    countryCode: "+7",
    guests: 1,
    date: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки данных (например, через email или на сервер)
    console.log(form);
  };

  return (
    <section className={styles.order}>
      <div className={styles.order_content}>
        <h2 className={styles.order_title}>Бронирование столика</h2>
        <form onSubmit={handleSubmit} className={styles.order_form}>
          <div className={styles.form_group}>
            <label className={styles.order_label}>Имя</label>
            <input
              className={styles.order_input}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ваше имя"
              required
            />
          </div>

          {/* Телефон и количество гостей */}
<div className={styles.order_row}>
  <div className={styles.form_group}>
    <label className={styles.order_label}>Телефон</label>
    <div className={styles.phone_group}>
      <select
        className={styles.order_select}
        name="countryCode"
        value={form.countryCode}
        onChange={handleChange}
      >
        <option value="+7">+7 (RU)</option>
        <option value="+375">+375 (BY)</option>
        <option value="+380">+380 (UA)</option>
      </select>
      <input
        className={styles.order_input}
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="999 999 99 99"
        required
      />
    </div>
  </div>

  <div className={styles.form_group}>
    <label className={styles.order_label}>Количество гостей</label>
    <input
      className={styles.order_input}
      type="number"
      name="guests"
      value={form.guests}
      min={1}
      max={20}
      onChange={handleChange}
      required
    />
  </div>
</div>

<div className={styles.order_row}>
  <div className={styles.form_group}>
    <label className={styles.order_label}>Дата</label>
    <input
      className={styles.order_input}
      type="date"
      name="date"
      value={form.date}
      onChange={handleChange}
      required
    />
  </div>

  <div className={styles.form_group}>
    <label className={styles.order_label}>Время</label>
    <input
      className={styles.order_input}
      type="time"
      name="time"
      value={form.time}
      onChange={handleChange}
      required
    />
  </div>
</div>


          <button type="submit" className={styles.order_button}>
            Забронировать
          </button>

          <p className={styles.order_notice}>
            Нажимая кнопку "забронировать", вы даете согласие на обработку
            персональных данных и соглашаетесь c политикой конфиденциальности.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Order;
