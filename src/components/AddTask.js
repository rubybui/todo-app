import React, { useState } from 'react'
import "./assets/EditTask.css"
import TaskForm from './TaskForm'
const AddTask = (props) => {
    const submitForm = (enteredForm) => {
        const enteredTasks = {
            ...enteredForm,
            id: Math.random().toString(),
        }
        props.onAddTasks(enteredTasks)

    }

    return (
        <div>
            <h3>New Task</h3>
            <TaskForm
                onSubmitForm={submitForm}
                value={props.value}
            />
        </div>
    )
}

export default AddTask