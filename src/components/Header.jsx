import React from 'react'

const Header = ({handleToggleDarkMode}) => {
  const changeMode = () => {
    handleToggleDarkMode( prev => !prev);
  }
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button onClick={changeMode} className='save'>Toggle Mode</button>
    </div>
  )
}

export default Header