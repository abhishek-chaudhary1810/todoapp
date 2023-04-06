import React, { useState } from "react";
//Below Function is add to handle events while adding
export default function Form(props) {
  const [name, setName] = useState(""); // Initializing and defining Hooks
 //Reading and Logging Changing User Inputs
  function handleChange(e) {
    const { value } = e.target;
    setName(value);  
  }
//Submitting data and resetting setName or state
  function handleSubmit(e){
    e.preventDefault();
  
    props.addTask(name);
    setName(""); //Setting setname again to empty string
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}
