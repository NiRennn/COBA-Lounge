"use client";

import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./reservation.module.css";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon, Clock } from "lucide-react";

const ADMIN_PHONE = "79194101212";

// Тип данных формы
interface ReservationFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
}

function Reservation() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<ReservationFormData>();

  const onSubmit: SubmitHandler<ReservationFormData> = (data) => {
    const formattedDate = format(new Date(data.date), "dd.MM.yyyy");
    const formattedTime = data.time;

    const message = `Здравствуйте! Я хочу забронировать стол:\n\nИмя: ${data.name}\nТелефон: ${data.phone}\nГостей: ${data.guests}\nДата: ${formattedDate}\nВремя: ${formattedTime}`;
    const whatsappURL = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
    reset();
  };

  useEffect(() => {
    register("date", { required: "Обязательное поле" });
    register("time", { required: "Обязательное поле" });
  }, [register]);

  const generateTimes = () => {
    const times = [];
    for (let h = 12; h <= 23; h++) {
      times.push(`${h.toString().padStart(2, "0")}:00`);
      times.push(`${h.toString().padStart(2, "0")}:30`);
    }
    return times;
  };

  const handleTimeSelect = (time: string) => {
    const selectedDate = new Date(watch("date"));
    const [hours, minutes] = time.split(":");
    selectedDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);

    setValue("time", time, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
    setValue("date", selectedDate.toISOString(), { shouldDirty: true });
  };

  return (
    <section className={styles.reservation}>
      <div className={styles.reservation_content}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.reservation_input}
            type="text"
            placeholder="Имя"
            {...register("name", { required: "Обязательное поле" })}
          />
          {errors.name && (
            <span className={styles.error_message}>{errors.name.message}</span>
          )}

          <input
            className={styles.reservation_input}
            type="tel"
            placeholder="Телефон"
            {...register("phone", {
              required: "Обязательное поле",
              pattern: {
                value: /^[0-9+()\-\s]+$/,
                message: "Неверный формат номера",
              },
            })}
          />
          {errors.phone && (
            <span className={styles.error_message}>{errors.phone.message}</span>
          )}

          <div className={styles.row}>
            <div className={styles.inputWrapper}>
              <Popover>
                <div className={styles.date_button_wrapper}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`${styles.reservation_input} ${styles.date_input}`}
                      type="button"
                    >
                      {watch("date")
                        ? format(new Date(watch("date")), "dd.MM.yyyy")
                        : "Выберите дату"}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-30" />
                    </Button>
                  </PopoverTrigger>

                  {errors.date && (
                    <span className={styles.error_message}>
                      {errors.date.message}
                    </span>
                  )}
                </div>

                <PopoverContent
                  className={styles.calendarPopover}
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={watch("date") ? new Date(watch("date")) : undefined}
                    onSelect={(date) =>
                      setValue("date", date?.toISOString() ?? "", {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch: true,
                      })
                    }
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className={styles.inputWrapper}>
              <Popover>
                <div className={styles.date_button_wrapper}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`${styles.reservation_input} ${styles.date_input}`}
                      type="button"
                    >
                      {watch("time") ? watch("time") : "Выберите время"}
                      <Clock className="ml-auto h-4 w-4 opacity-30" />
                    </Button>
                  </PopoverTrigger>

                  {errors.time && (
                    <span className={styles.error_message}>
                      {errors.time.message}
                    </span>
                  )}
                </div>

                <PopoverContent
                  className={styles.calendarPopover}
                  align="start"
                >
                  <ul className={styles.timeList}>
                    {generateTimes().map((time) => (
                      <li
                        key={time}
                        className={styles.timeItem}
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </li>
                    ))}
                  </ul>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <input
            className={styles.reservation_input}
            type="number"
            placeholder="Количество гостей"
            min="1"
            {...register("guests", { required: "Обязательное поле" })}
          />
          {errors.guests && (
            <span className={styles.error_message}>
              {errors.guests.message}
            </span>
          )}

          <button className={styles.reservation_button} type="submit">
            Забронировать через WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

export default Reservation;
