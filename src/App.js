import Todo from './Components/Todo';
import Form from './Components/Form';
import Filterbutton from './Components/Filterbutton';
import React,{ useState } from 'react';


function App(props) {
  const [tasks,setTasks] = useState(props.tasks);  
  const tasklist = tasks.map((task)=> (<Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />)) ;//conversion of array to object to map 
  
  function addTask(name){
    const newTask={id:"id",name, completed:false}; //object of name as name is string and cant be setted to array of object
    setTasks([...tasks,newTask]);
  }
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
     <Form addTask={addTask}/> 
      <h2 id="list-heading">3 tasks remaining</h2>
      <Filterbutton />
      <Filterbutton />
      <Filterbutton />      
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
       {tasklist}
        </ul>
    </div>
  );
}
export default App;