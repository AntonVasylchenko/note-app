import React from "react";
import { nanoid } from "nanoid";
import { NoteList,Search,Header } from "./components";

let initialState = [
  {
    id: nanoid(),
    text: "This is my first note",
    date: "15.04.2023"
  },
  {
    id: nanoid(),
    text: "This is my second note",
    date: "15.04.2023"
  },
  {
    id: nanoid(),
    text: "This is my third note",
    date: "15.04.2023"
  }
]


const App = () => {
  const [notes, setNotes] = React.useState(initialState);
  const [searchText, setSearchText] = React.useState("");
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes)
    } else {
      setNotes(initialState)
    }


  }, [])

  React.useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const data = new Date();
    let newNote = {
      id: nanoid(),
      text: text,
      date: data.toLocaleDateString()
    }
    setNotes(prev => [...prev, newNote])
  }
  const deleteNote = (id) => {
    setNotes(prev => [...prev.filter(el => el.id !== id)])
  }

  const searchNote = (note) => {
    return note.filter(el => el.text.toLowerCase().includes(searchText.toLocaleLowerCase()))
  }

  return (
    <div className={darkMode ? "dark-moder" : ""}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={searchNote(notes)}
          handleDeleteNote={deleteNote}
          handleAddNote={addNote}
        />
      </div>
    </div>
  );
}

export default App;
