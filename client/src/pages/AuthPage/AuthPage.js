import React, { useState } from "react";

import SignInIcon from "../../components/SignInIcon";

import styles from "./AuthPage.module.css";

const AuthPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className={styles.authentication}>
      <form className={styles.form} onSubmit={() => {}}>
        <input
          className={styles.input}
          type="text"
          name="email"
          value={form.email}
          required
          onChange={changeHandler}
          placeholder="Your email"
        />

        <SignInIcon />
      </form>
    </section>
  );
};

export default AuthPage;
