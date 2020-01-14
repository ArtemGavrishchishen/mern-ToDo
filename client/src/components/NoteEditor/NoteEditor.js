import React, { useState, useContext } from "react";

import useHttp from "../../hooks/http.hook";
import AuthContext from "../../context/AuthContext";

import styles from "./NoteEditor.module.css";

const NoteEditor = () => {
  const { request } = useHttp();
  const auth = useContext(AuthContext);
  const [form, setForm] = useState({ title: "", content: "" });

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const data = await request(
        "/note",
        "POST",
        {
          note: form
        },
        { Authorization: `Bearer ${auth.token}` }
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className={styles.editor}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1 className={styles.title}>Add a new ToDo!</h1>

        <input
          className={styles.input}
          name="title"
          placeholder="Title"
          required
          value={form.title}
          onChange={changeHandler}
        />
        <textarea
          className={styles.textarea}
          name="content"
          placeholder="Text"
          rows="3"
          value={form.content}
          onChange={changeHandler}
        />
        <button className={styles.submit} type="submit">
          Add ToDo
        </button>
      </form>
    </section>
  );
};

export default NoteEditor;
