import React from 'react'
import {updateToDo} from "../action/listAction";
import {deleteToDo} from "../action/listAction";


const ToDo = ({text, updateMode, deleteToDo}) => {
    return (
        <div className="todo">
            <div className="text">{text}</div>
            <div className="icons">
                <div className='icon' onClick={updateMode}> upd</div>
                <button className='icon' onClick={deleteToDo}> delete</button>
            </div>
        </div>
    )
}

export default ToDo