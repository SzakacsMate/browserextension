import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Kartya from './components/Card'




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
        
        <h1 >Extensions List</h1>
        <section className='Column'>
          {cards.map(card=><Kartya{...card}/>)} 
        </section>
        
      </div>
        
    </>
  )
}

export default App
