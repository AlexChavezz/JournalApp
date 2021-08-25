import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <form className="notes__content">
                    <input 
                    type="text" 
                    placeholder="some awesome title"
                    className="note__title-input"
                    
                    />
                    <textarea
                    className="note__textarea"
                    placeholder="what happened today"
                    >
                    </textarea>
                    <div className="notes__image">
                       <img 
                        src="https://i.pinimg.com/originals/75/fc/ba/75fcbae63f7ae0b20a79a8c1a053030c.jpg" 
                        alt="imagen" 
                        /> 
                    </div>
                </form>
            </div>
        </div>
    )
}
