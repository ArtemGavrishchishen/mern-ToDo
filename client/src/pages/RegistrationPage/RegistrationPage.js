import React, { useState } from "react";

import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <section className={styles.registration}>
      <form className={styles.form}>
        <div className={styles.inputField}>
          <input
            className={styles.input}
            type="text"
            name="email"
            value={form.email}
            required
            onChange={changeHandler}
            placeholder="Your email"
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            value={form.password}
            required
            onChange={changeHandler}
            placeholder="Enter password"
          />
        </div>
      </form>
    </section>
  );
};

export default RegistrationPage;
