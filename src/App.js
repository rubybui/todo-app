import React, { useState } from 'react'

import './App.css';
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"
import BulksActionController from "./components/BulksActionController"
function App() {
  const [tasks, setTasks] = useState([])
  const addTask = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };
  
  return (
    <div className="App">
      <div className="split--left">
        <AddTask onAddTasks={addTask} ></AddTask>
      </div>
      <div className="split--right">
        <Tasks tasks={tasks}></Tasks>
        <BulksActionController></BulksActionController>
      </div>

    </div>
  );
}

export default App;
