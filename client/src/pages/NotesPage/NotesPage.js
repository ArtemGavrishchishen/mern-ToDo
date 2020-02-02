import React, { useState, useContext, useCallback, useEffect } from 'react';

import useHttp from '../../hooks/http.hook';
import AuthContext from '../../context/AuthContext';

import { ReactComponent as Delete } from './assets/delete.svg';
import { ReactComponent as Update } from './assets/update.svg';

import styles from './NotesPage.module.css';

const NotesPage = () => {
  const { request } = useHttp();
  const auth = useContext(AuthContext);
  const { token } = useContext(AuthContext);

  const [form, setForm] = useState({ title: '', content: '' });
  const [updateNote, setUpdateNote] = useState({
    _id: '',
    title: '',
    content: ''
  });
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setModal] = useState(false);

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const changeUpdateHandler = e => {
    setUpdateNote({ ...updateNote, [e.target.name]: e.target.value });
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const data = await request(
        '/note',
        'POST',
        {
          note: form
        },
        { Authorization: `Bearer ${auth.token}` }
      );

      if (data && data.note) {
        setNotes([data.note, ...notes]);
        setForm({ title: '', content: '' });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchNotes = useCallback(async () => {
    try {
      const fatched = await request('/note', 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      const reversed = fatched.reverse();

      setNotes(reversed);
    } catch (e) {
      console.log(e);
    }
  }, [token, request]);

  const deleteNote = useCallback(
    async id => {
      try {
        const deleted = await request(
          '/note',
          'DELETE',
          { id },
          {
            Authorization: `Bearer ${token}`
          }
        );

        if (deleted) {
          setNotes(notes.filter(note => note._id !== deleted));
        }
      } catch (e) {
        console.log(e);
      }
    },
    [token, request, notes]
  );

  const updateNoteHandler = note => {
    setUpdateNote({ ...note });
    setModal(true);
  };

  const submitModalHandler = async e => {
    e.preventDefault();
    try {
      const data = await request(
        '/note',
        'PUT',
        {
          note: updateNote
        },
        { Authorization: `Bearer ${auth.token}` }
      );

      if (data && data.note) {
        const updateArr = notes.map(note =>
          note._id === data.note._id ? data.note : note
        );

        setNotes(updateArr);
      }
    } catch (e) {
      console.log(e);
    }
    setModal(false);
  };

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <div className={styles.container}>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.content}>
            <form className={styles.form} onSubmit={submitModalHandler}>
              <h1 className={styles.title}>Update Note!</h1>

              <input
                className={styles.input}
                name="title"
                placeholder="Title"
                required
                value={updateNote.title}
                onChange={changeUpdateHandler}
              />
              <textarea
                className={styles.textarea}
                name="content"
                placeholder="Text"
                rows="3"
                value={updateNote.content}
                onChange={changeUpdateHandler}
              />
              <button className={styles.submit} type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
      )}

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

      <section className={styles.notes}>
        <ul className={styles.list}>
          {notes.map(note => (
            <li key={note._id} className={styles.item}>
              <h3 className={styles.title}>{note.title}</h3>
              <div className={styles.content}>{note.content}</div>
              <ul className={styles.btnList}>
                <li className={styles.btnItem}>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={() => updateNoteHandler(note)}
                  >
                    <Update />
                  </button>
                </li>
                <li className={styles.btnItem}>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={() => deleteNote(note._id)}
                  >
                    <Delete />
                  </button>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default NotesPage;
