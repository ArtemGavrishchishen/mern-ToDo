import React from "react";

import NoteEditor from "../../components/NoteEditor";
import NoteList from "../../components/NoteList";

const NotesPage = () => {
  return (
    <>
      <NoteEditor />
      <NoteList />
    </>
  );
};

export default NotesPage;
