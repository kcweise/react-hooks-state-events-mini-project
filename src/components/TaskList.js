import React, { useState } from "react";
import Task from "./Task";

function TaskList({tasks, updateTasks}) {
  const[newTasks, setNewTasks] = useState(tasks)

  const deleteTask = (taskText)=>{
    const updatedTasks = (newTasks.filter(task => task.text !== taskText));
    setNewTasks(updatedTasks);//update Tasklist state
    updateTasks(updatedTasks);//update parent state

  }

  
  return (
    <div className="tasks">
      {newTasks.map(task=>(<Task key ={task.text} text={task.text} category={task.category}
      deleteTask = {deleteTask}/>))}
    </div>
  );
}

export default TaskList;
