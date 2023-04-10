import Todo from "./Components/Todo";
import Form from "./Components/Form";
import Filterbutton from "./Components/Filterbutton";
import React, { useState } from "react";
import { nanoid } from "nanoid";
//Defining these const outside as these will not calculated with every render
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  //created function to fix check and unchecked issue

  function deleteTask(id) {
    const deletedTasks = tasks.filter((task) => id !== task.id);
    setTasks(deletedTasks);
  }

  //function created to edit a task
  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...tasks, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      //if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        //whose completed prop has been inverted
        return { ...tasks, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  const tasklist = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  )); //conversion of array of object to map
  const [filter, setFilter] = useState("All");
  const filterList = FILTER_NAMES.map((name) => (
    <Filterbutton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  function addTask(name) {
    const newTask = { id: nanoid(), name, completed: false }; //object created as new task will be added,used nanoid for unique id generation
    setTasks([...tasks, newTask]); // old array of objects in tasks and added new Task as an Object on top of that
  }
  const taskNoun = tasklist.length !== 1 ? "tasks" : "task"; //task and tasks are different so we have to add accordingly
  const headingText = `${tasklist.length} ${taskNoun} remaining`; //here we have set a variable as headingText so that we can update our heading list accordingly
  return (
    <div className="todoapp stack-large">
      <h1>My To Do List</h1>
      <Form addTask={addTask} />
      <h2 id="list-heading">{headingText}</h2>
      {filterList}
      {filterList}
      {filterList}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasklist}
      </ul>
    </div>
  );
}
export default App;
