import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //Lifts state from Tasklist
  const[tasks, setTasks] = useState(TASKS);//set state in APP

  //passdown function to Tasklist to lift state up to APP
  const updateTasks = (updatedTasks)=> {setTasks(updatedTasks)}



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter category = {CATEGORIES} />
      <NewTaskForm />
      <TaskList tasks = {tasks} updateTasks={updateTasks}/>
    </div>
  );
}

export default App;
