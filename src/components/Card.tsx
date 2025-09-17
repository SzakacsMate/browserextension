import React from 'react'
import type { Cards } from '../App'
import { Switch } from './ui/switch'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
const Kartya = (props:Cards) => {
  return (
    <div className='Cardclass'>
        <Card>
  <CardHeader>
    <img src={props.logo} alt="" />
    <h3>{props.name}</h3>
  </CardHeader>
  <CardContent>
   <p>{props.description}</p>
   <Switch className='switch' defaultChecked={props.isActive}></Switch>
  </CardContent>
  <CardFooter>
    
  </CardFooter>
</Card>
    </div>
    
  )
}

export default Kartya