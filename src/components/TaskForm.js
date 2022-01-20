import React, { useState, useEffect } from 'react';
import "./assets/TaskForm.scss"

const TaskForm = (props) => {
    const [userInput, setUserInput] = useState({
        id:  null,
        title: "",
        date: new Date(),
        description: "",
        priority: ""
    })


    const onChangeField = (e) => {
        const { name, value } = e.target
        setUserInput(
            prevState => ({ ...prevState, [name]: value }))
        console.log(userInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = {
            title: userInput.title,
            date: new Date(userInput.date),
            description: userInput.description,
            priority: userInput.priority
        }
        props.onSubmitForm(taskData)
    }

    return (
        <form className="taskform" onSubmit={handleSubmit}>
            <div className="taskform__controls">
                <div className="taskform__control">
                    <input type="text" name="title"
                        onChange={onChangeField}
                        value={userInput.title}
                        placeholder="Add new task" />
                </div>
                <div className="taskform__control">
                    <label htmlFor="description">Description</label>
                    <textarea rows="4" cols="50"
                        name="description"
                        onChange={onChangeField}
                        value={userInput.description}
                        placeholder="Enter text here..." >
                    </textarea>
                </div>
                <div className="taskform__control">
                    <div className="taskform__control--left">
                        <label>Date</label>
                        <input type="date" name="date"
                            onChange={onChangeField}
                            value={userInput.date}></input>
                    </div>
                    <div className="taskform__control--right">
                        <label for="priority">Priority</label>
                        <select name="priority" id="priority"
                            value={userInput.priority}
                            onChange={onChangeField}>
                            <option value="low">Low</option>
                            <option value="normal" selected="selected">Normal</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="taskform__actions">
                {!props.value?
                    <button type="submit">Add</button>
                    :
                    <button type="submit">Update</button>}
            </div>

        </form>
    )
}

export default TaskForm