import React from 'react'

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = React.useState("");
    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value)
        }
    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText("");
        }
    };

    return (
        <div className='note new'>
            <textarea
                onChange={handleChange} 
                value={noteText}
                placeholder='Type to add a note..'
                cols="10"
                rows="8">
            </textarea>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} Remaining</small>
                <button onClick={handleSaveClick} className='save'>Save</button>
            </div>
        </div>
    )
}

export default AddNote