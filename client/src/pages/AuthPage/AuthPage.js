import React, { useState, useContext } from 'react';

import SignInIcon from '../../components/SignInIcon';

import useHttp from '../../hooks/http.hook';
import AuthContext from '../../context/AuthContext';

import styles from './AuthPage.module.css';

const AuthPage = () => {
  const { request, loading } = useHttp();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({ email: '', password: '' });

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loginHandler = async e => {
    e.preventDefault();

    try {
      const data = await request('/auth/login', 'POST', { ...form });

      login(data.token, data.userId);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className={styles.authentication}>
      <form className={styles.form} onSubmit={loginHandler}>
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
        <button type="submit" className={styles.btn} disabled={loading}>
          <SignInIcon />
        </button>
      </form>
    </section>
  );
};

export default AuthPage;
