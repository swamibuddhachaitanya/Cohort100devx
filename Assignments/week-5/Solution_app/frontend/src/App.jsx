import { useState } from 'react'
import './App.css'
import { CreateCard } from './components/CreateCard'
import { cardInfo } from "./assets/cardInfo"
import { TakeInfoIntoTheDB } from './components/TakeInfoIntoTheDB'


function App() {


  return (
    <div>
      {/* <CreateDiv/> */}

      {<TakeInfoIntoTheDB/>}

      {/* now i just need to create a section where i can input the data and send it to the db ,
      and then i need to create a function which will look at the state constantly and render the changes immediately. */}
      {
        cardInfo.map((card,cardIndex)=>
        (
          <CreateCard key={cardIndex} card= {card}/>
        ))
      }
      
    </div>
  )
}



export default App
