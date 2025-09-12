import React from 'react'
import type { Cards } from '../App'
import { Switch } from './ui/switch'
const Card = (props:Cards) => {
  return (
    <div className='Cardclass'>
        <img src={props.logo} alt="" />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <Switch defaultChecked={props.isActive}></Switch>
    </div>
  )
}

export default Card