import React, { useState } from 'react'
import "./assets/Tasks.css"
import TaskList from './TaskList.js'
import TaskFilter from "./TaskFilter"

const Tasks = (props) => {
    const [chosenName, setChosenName] = useState("")
    const filterChanged = (selected) => {
        setChosenName(selected);
    }
    const filterListChanged = props.tasks.filter((tasks) => {
        return tasks.title.includes(chosenName)
    })
    return (
        <div className="tasks">
            <TaskFilter selected={chosenName} onChangeFilter={filterChanged} />
            <TaskList tasks={filterListChanged} />
        </div >

    );
}
export default Tasks