import React from 'react';
import "./assets/TaskList.css"
import Task from "./Task"
const TaskList = (props) => {
    const onHandleRemove = (e) => {

    }
    if (props.tasks.length === 0) {
        return <h2 className='task-list__fallback'>Found no task.</h2>;
    }
    return (
        <ul className="task-list">
            {props.tasks.sort((a, b) => {
                return new Date(a.date) - new Date(b.date)
            }
            ).map(t => <Task key={t.id} task={t} />)
            }
        </ul>

    )
}

export default TaskList