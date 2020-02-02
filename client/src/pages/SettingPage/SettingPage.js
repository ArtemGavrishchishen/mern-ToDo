import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { IMAGE } from '../../components/Avatar';
import Avatar from '../../components/Avatar';
import VerifiedIcon from '../../components/VerifiedIcon';
import RemoveIcon from '../../components/RemoveIcon';

import useHttp from '../../hooks/http.hook';
import AuthContext from '../../context/AuthContext';
import routes from '../../configs/routes';

import styles from './SettingPage.module.css';

const SettingPage = () => {
  const { request } = useHttp();
  const { token, setUpdateTrue } = useContext(AuthContext);
  const history = useHistory();
  const [form, setForm] = useState({
    name: '',
    surname: '',
    avatar: 'default'
  });

  const fetchUser = useCallback(async () => {
    try {
      const fatched = await request('/user', 'GET', null, {
        Authorization: `Bearer ${token}`
      });

      setForm({
        avatar: fatched.avatar,
        name: fatched.name,
        surname: fatched.surname
      });
    } catch (e) {
      console.log(e);
    }
  }, [token, request]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const avatars = Object.keys(IMAGE);

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateHandler = async e => {
    e.preventDefault();

    try {
      const data = await request(
        '/user',
        'PUT',
        {
          user: form
        },
        { Authorization: `Bearer ${token}` }
      );
      if (data) {
        setUpdateTrue();
      }
      history.push(routes.NOTES);
    } catch (e) {
      console.log(e);
    }
  };

  const cancelHandler = e => {
    e.preventDefault();
    history.push(routes.NOTES);
  };

  return (
    <section className={styles.setting}>
      <form className={styles.form}>
        <div className={styles.inputField}>
          <div className={styles.avatar}>
            <select
              className={styles.select}
              value={form.avatar}
              name="avatar"
              onChange={changeHandler}
            >
              {avatars.map(img => (
                <option key={img} value={img}>
                  {img}
                </option>
              ))}
            </select>
            <Avatar img={form.avatar} />
          </div>

          <input
            className={styles.input}
            type="text"
            name="name"
            value={form.name}
            required
            onChange={changeHandler}
            placeholder="First Name"
          />
          <input
            className={styles.input}
            type="text"
            name="surname"
            value={form.surname}
            required
            onChange={changeHandler}
            placeholder="Last Name"
          />

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.btn}
              onClick={cancelHandler}
            >
              <RemoveIcon />
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={updateHandler}
            >
              <VerifiedIcon />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SettingPage;
