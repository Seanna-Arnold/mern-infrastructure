import React, { useState } from 'react';

export default function NoteForm({ addNote }) {
  const [newNote, setNewNote] = useState({ text: "" });

  function handleAddNote(evt) {
    evt.preventDefault();
    addNote(newNote);
    setNewNote({ text: "" }); // Reset the textarea to an empty string
  }

  function handleChange(evt) {
    setNewNote({ ...newNote, [evt.target.name]: evt.target.value });
  }

  return (
    <form onSubmit={handleAddNote}>
      <h1>Make a Note</h1>
      <textarea
        name="text"
        value={newNote.text}
        onChange={handleChange}
      />
      <button>Add Note</button>
    </form>
  );
}
