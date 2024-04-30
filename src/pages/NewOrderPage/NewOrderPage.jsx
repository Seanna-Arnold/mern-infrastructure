import NoteForm from "../NoteForm/NoteForm"
import React, { useState, useEffect } from "react";
import * as notesApi from "../../utilities/notes-api"

export default function NewOrderPage() {
  const [notes, setNotes] = useState([])
  const [changeState, setChangeState] = useState(true);
  async function fetchNotes() {
    const fetchedNotes = await notesApi.getAll();
    setNotes(fetchedNotes);
  }
  useEffect(() => {
    fetchNotes();
  }, [changeState]); 

  async function addNote(note) {

    // setNotes([...notes, note]);
    await notesApi.createNotes(note);
    fetchNotes();
    setChangeState(prevState => !changeState)
  } 


  return (
    <>
    
      <h1>NewOrderPage</h1>
      <NoteForm addNote={addNote} />
      {notes.length !== 0 ?
      <div>
        {notes.map(note => (
          <div key={note.id}>{note.text} Created at: {new Date(note.createdAt).toLocaleString()}</div>
          //date?????
          
        ))}
      </div>
      :
      <p>No notes yet</p>
        }
    </>
  ); //how to display no notes yet
}
