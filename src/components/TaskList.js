import React, { useState } from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const[newTasks, setNewTasks] = useState(tasks)

  const deleteTask = (taskId)=>{
    setNewTasks(newTasks.filter(task => task.text !== taskId));
  }

  
  return (
    <div className="tasks">
      {newTasks.map(task=>(<Task key ={task.text} task={task} 
      deleteTask = {deleteTask}/>))}
    </div>
  );
}

export default TaskList;
