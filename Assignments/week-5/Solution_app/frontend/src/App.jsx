import { useState } from 'react'
import './App.css'
import { CreateCard } from './components/CreateCard'
// import { cardInfo } from "./assets/cardInfo"
import { TakeInfoIntoTheDB } from './components/TakeInfoIntoTheDB'


function App() {
  const [cards,setCards] = useState([]);

  fetch("http://localhost:3000/admin/displayCards",{
    method: "GET",
    headers:{
      username: "admin",
      password: "admin",
      "Content-Type": "application/json"
    }
  }).then(async function (res) {
    const json = await res.json();
    if (res.status !==500 && res.status !==404) {
      setCards(json);
    }
  })
  

  return (
    <div>
      

      {<TakeInfoIntoTheDB/>}


      {
        
        cards.map((card,cardIndex)=>
        (
          <CreateCard key={cardIndex} card= {card}/>
        ))
      }
      
    </div>
  )
}



export default App
