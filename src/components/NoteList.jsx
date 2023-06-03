import React from 'react'
import { Note,AddNote } from "../components";

const NoteList = ({ notes, handleAddNote,handleDeleteNote }) => {
    return (
        <div className='notes-list'>
            {notes.map(note => {
                return <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    deleteNote={handleDeleteNote}
                />
            })}
            <AddNote handleAddNote={handleAddNote}  />
        </div>
    )
}

export default NoteList