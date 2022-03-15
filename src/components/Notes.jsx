import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Notes() {
    const notes = useSelector((state) => state.notes.items)
    var searchValue = useSelector((state) => state.notes.search)

    const getMap = () => {
        if (searchValue.length> 0)
            return searchValue

        return notes
    }

    useEffect(() => {
      
        console.log(searchValue, notes);
    }, [searchValue, notes])
    

    return (
        <div className='noteContainer'>
            <div className='content'>
                {
                    getMap().map((item, index) => (
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