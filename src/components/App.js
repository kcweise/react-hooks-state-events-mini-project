import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //Lifts state from Tasklist
  const[tasks, setTasks] = useState(TASKS);//set state for task list in APP
  const[selectedCategory, setSelectedCategory] = useState ("All")//set state for category list in App
  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState(CATEGORIES[1] || "");
  //
  const handleSelectCategory = (category)=>{
  setSelectedCategory(category);
  }
  

  const handleAddNewTask = (e)=>{
      const newTask = {
      text: newTaskText,
      category: newTaskCategory,
    };
    setTasks(currentTask=>[...currentTask, newTask]);
    setNewTaskText("");
    setNewTaskCategory(CATEGORIES[1] || "");
  };

  const handleTextChange = (e) => {
    setNewTaskText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setNewTaskCategory(e.target.value);
  };


  //
  const updateTasks = (updatedTasks)=> {setTasks(updatedTasks)}

  //filtered tasks based on click event in CategoryFilter
  const filteredTasks = selectedCategory === "All"
  ? tasks : tasks.filter(task=> task.category === selectedCategory)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      selectedCategory= {selectedCategory} 
      categories = {CATEGORIES}
      onSelectCategory = {handleSelectCategory} 
      />
      <NewTaskForm 
      categories = {CATEGORIES}
      onTaskFormSubmit={handleAddNewTask}
      onTextChange={handleTextChange}
      onCategoryChange={handleCategoryChange}
      text={newTaskText}
      category={newTaskCategory}
      />
      <TaskList 
      tasks = {filteredTasks} 
      updateTasks={updateTasks}
      />
    </div>
  );
  }

export default App;
