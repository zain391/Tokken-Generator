import React from 'react'
import NoteContext from './notecontext'

const dairy={
    "note1":"this is note 1",
    "name":"write by zain"
}
const NoteState = (props) => {
    
  return (
    <NoteContext.Provider value={dairy}>
        {props.children}

    </NoteContext.Provider>
  )
}

export default NoteState