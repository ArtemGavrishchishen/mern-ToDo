import React, { useState, useContext, useCallback, useEffect } from "react";

import { ReactComponent as Delete } from "./assets/delete.svg";
import { ReactComponent as Update } from "./assets/update.svg";

import useHttp from "../../hooks/http.hook";
import AuthContext from "../../context/AuthContext";

import styles from "./NoteList.module.css";

const NoteList = () => {
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);

  const fetchNotes = useCallback(async () => {
    try {
      const fatched = await request("/note", "GET", null, {
        Authorization: `Bearer ${token}`
      });
      setNotes(fatched);
    } catch (e) {
      console.log(e);
    }
  }, [token, request]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const deleteNote = useCallback(
    async id => {
      try {
        const deleted = await request(
          "/note",
          "DELETE",
          { id },
          {
            Authorization: `Bearer ${token}`
          }
        );

        if (deleted) {
          console.log(notes);
          setNotes(notes.filter(note => note._id !== deleted));
        }
      } catch (e) {
        console.log(e);
      }
    },
    [token, request, notes]
  );

  return (
    <section className={styles.notes}>
      <ul className={styles.list}>
        {notes.map(note => (
          <li key={note._id} className={styles.item}>
            <h3 className={styles.title}>{note.title}</h3>
            <div className={styles.content}>{note.content}</div>
            <ul className={styles.btnList}>
              <li className={styles.btnItem}>
                <button type="button" className={styles.btn} onClick={() => {}}>
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
  );
};

export default NoteList;
