import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'



export type Cards={
  logo:string,
  name:string,
  description:string,
  isActive:boolean
}

function App() {
  const[cards,setCards]=useState<Cards[]>([])
  const [count, setCount] = useState(0)
useEffect(()=>{
  fetch("/data.json").then(res=>res.json()).then(data=>{setCards(data)})
},[])
  return (
    <>
      <div>
         <Navbar />
        
        <h1>Extensions List</h1>
        <section className='Column'>
          {cards.map(card=><Card{...card}/>)} 
        </section>
        
      </div>
        
    </>
  )
}

export default App
