import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import VerifiedIcon from "../../components/VerifiedIcon";
import RemoveIcon from "../../components/RemoveIcon";

import useHttp from "../../hooks/http.hook";
import routes from "../../configs/routes";

import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const { request } = useHttp();
  const history = useHistory();
  const [form, setForm] = useState({ email: "", password: "" });

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerHandler = async e => {
    e.preventDefault();

    try {
      const data = await request("/auth/register", "POST", { ...form });
      console.log(data);
      history.push(routes.AUTH);
    } catch (e) {
      console.log(e);
    }
  };

  const cancelHandler = e => {
    e.preventDefault();
    history.push(routes.AUTH);
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

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.btn}
              onClick={registerHandler}
            >
              <VerifiedIcon />
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={cancelHandler}
            >
              <RemoveIcon />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RegistrationPage;