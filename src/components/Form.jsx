import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNote,searchNote } from '../redux/notes/noteSlice'

function Form() {
  const dispatch = useDispatch()
  const notesVar = useSelector((state) => state.notes.items)
  var search;
  const [note, setNote] = useState('')
  const [color, setColor] = useState('')
  const handleClick = (e) => {
    e.preventDefault()
    if (!note || !color) return alert('Not ve Renk Seçilmeli.')
    var values = {
      'note': note,
      'color': color
    }
    dispatch(createNote(values))
    setNote('')
    setColor('')
  };
  const changeColor = (e) => {
    setColor(e.target.style.backgroundColor)
  }
  const searchNotes = (e) => {
    // if (e.target.value !== "") {

      search = notesVar.filter((item) => {
        return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(e.target.value.toLocaleLowerCase()))
      })
      dispatch(searchNote(search))
    debugger
  }
  return (
    <div className='rootContainer'>
      <input type="text" placeholder='Search...' onChange={searchNotes} className='searchInput' />
      <br />
      <br />
      <div>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} className='noteContent' placeholder='Note here...'></textarea>
        <div className='btnColors'>
          <div style={{ display: 'flex' }}>
            <span className="Colors"
              onClick={changeColor}
              style={{ backgroundColor: '#f06292' }} ></span>
            <span className="Colors"
              onClick={changeColor}
              style={{ backgroundColor: '#ba68c8' }}></span>
            <span className="Colors"
              onClick={changeColor}
              style={{ backgroundColor: '#ffd54f' }}></span>
            <span className="Colors"
              onClick={changeColor}
              style={{ backgroundColor: '#4fc3f7' }}></span>
            <span className="Colors"
              onClick={changeColor}
              style={{ backgroundColor: '#aed581' }}></span>
          </div>
          <button className='addBtn' onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Form