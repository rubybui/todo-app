import React, { useState } from 'react'
import "./assets/EditTask.css"
import TaskForm from './TaskForm'
const EditTask = (props) => {
    const submitForm = (enteredForm) => {
            const enteredTasks = {
                ...enteredForm,
            }
            props.onAddTasks(enteredTasks)
        }
    

    return (
        <div>
            <TaskForm
                onSubmitForm={submitForm}
                value={props.value}
            />
        </div>
    )
}

export default EditTask