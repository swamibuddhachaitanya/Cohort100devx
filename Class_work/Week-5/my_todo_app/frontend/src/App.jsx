import { useState } from 'react'

import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todosfunc } from './components/Todos'

function App() {
  
  const [ todos, setTodos] = useState([{"title":"im title","description":"hello im description"}]);

  fetch("http://localhost:3000/todos").then(async function (res) {
    const json = await res.json();
    setTodos(json);
  })

  return (
    
    <div>
     
     <CreateTodo/>
     <Todosfunc todos={todos}/>
    
    </div>
  )

}

export default App
