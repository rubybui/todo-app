import React, { useState } from 'react';
import "./assets/Task.scss"
import EditTask from "./EditTask"

const Task = (props) => {
    const [isEdit, setIsEdit] = useState(false);

    const submitUpdate = value => {

    };
    const activateForm = (e) => {
        if (isEdit === true) {
            setIsEdit(false)
        }
        else {
            setIsEdit(true)
        }
    }
    const handleRemove = (e) => {
        if (isEdit === true) {
            setIsEdit(false)
        }
        else {
            setIsEdit(true)
        }
    }

    const handleSelect = (e) => {
        
    }

    return (
        <div className="task-list-item-wrapper">
            <li className="task-list-item">
                <div className="task-list-item__content">
                    <input type="checkbox" className="checkbox" />
                    <span> {props.task.title}</span>
                </div>
                <div className="task-list-item__controller">
                    <button className="task-list-item__controller--detail" onClick={activateForm}>Detail</button>
                    <button className="task-list-item__controller--remove" onClick={handleRemove}>Remove</button>
                </div>

            </li>
            {isEdit === true &&
                <div className="task-list-item-updateForm">
                    <EditTask edit={isEdit} value={props.task}></EditTask>
                </div>
            }
        </div>
    )
}

export default Task