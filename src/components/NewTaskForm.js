import React from "react";

function NewTaskForm({categories, onTaskFormSubmit, onTextChange, onCategoryChange, text, category}) {
  console.log(categories);
  const filterAll = categories.filter(category => category !=="All")

  const handleSubmit=(e)=>{
    e.preventDefault();
    onTaskFormSubmit();
  };
    
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={onTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={onCategoryChange}>
          {/* render <option> elements for each category here */}
          {filterAll.map(category => (
            <option key ={category}>{category}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
