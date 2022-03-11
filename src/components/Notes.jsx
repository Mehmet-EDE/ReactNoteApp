import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Notes() {
    const notes = useSelector((state) => state.notes.items)
    var searchValue = useSelector((state) => state.notes.search)
    return (
        <div className='noteContainer'>
            <div className='content'>
                {
                    notes.map((item, index) => (
                        <h1 id={index} className='notePaper' style={{ backgroundColor: `${item.color}` }}>
                            {item.note}
                        </h1>
                    ))
                }
            </div>
        </div>
    )
}

export default Notes