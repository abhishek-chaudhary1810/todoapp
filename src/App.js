import Todo from './Components/Todo';
import Form from './Components/Form';
import Filterbutton from './Components/Filterbutton';

function App(props) {
  const tasklist = props.tasks.map((task)=> (<Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />)) ;//conversion of array to object to map 
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
     <Form />
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