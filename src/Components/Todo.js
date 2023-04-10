import React, { useState } from "react";
export default function Todo(props) {
const [isEditing, setEditing] = useState(false);
const [newName,setNewName]=useState('');
 function handleChange(e){
  setNewName(e.target.value);
 }
 //function to handle edited task submit
 function handleSubmit(e){
  e.preventDefault();
  props.editTask(props.id, newName);
  setNewName("");
  setEditing(false);
 }
 //made 2 template that will be switched as per user interaction 1 is for editing a task second is for viewing
  const editingTemplate = (
    //Binding handlesubmit to form tag
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input id={props.id} className="todo-text" type="text" value={newName} onChange={handleChange}/>
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={()=> setEditing(false)}>
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );
//Rendered my UI as per conditions , view temmplate is set by default and editing template is used to edit a task
//Used ternary operator by checking value of isEditing
  return (
    <li className="todo stack-small">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}
