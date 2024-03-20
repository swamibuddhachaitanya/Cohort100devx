
import './App.css'
import {useState} from 'react';


function App() {

  const [todos , setTodos] = useState([
    {
    title: "go to gym",
    description: "go to gym from 6-8",
    completed: false
    },

    {
      title: "study hard",
      description: "study from 9-11",
      completed: false
    },
    
    {
      title: "sleep well",
      description: "sleep from 12-8",
      completed: false
    }
]);

  function addTodo() {
    setTodos([...todos,{
      title: "new todo",
      description: "desc of new todo"
    }])
  }

  
  return (
    <div>
      
      <button onClick={addTodo}>add a random todo</button>
      
      {
        todos.map((todo)=>{
          return <ShowTodos title={todo.title} description={todo.description}/>
        })
      }
    </div>  
   
  
  )
}

//component
function ShowTodos(props){

  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>





}




export default App
