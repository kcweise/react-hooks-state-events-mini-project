import React, { useState } from "react";



function CategoryFilter({category}) {




  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {category.map((category)=>(<button key={category} category={category}> {category} </button>
      ))}
      
    </div>
  );
}

export default CategoryFilter;
