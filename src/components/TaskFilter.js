import React from "react"
import "./assets/Filter.scss"
const TaskFilter = (props) => {
    const handleChange = (e) => {
        props.onChangeFilter(e.target.value)
    }
    return (
        <div className="task-filter">
            <div className='task-filter__control'>
                <input type="text" value={props.selected} onChange={handleChange}>
                </input>
            </div>
        </div>
    )
}

export default TaskFilter