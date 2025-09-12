import React from 'react'
import type { Cards } from '../App'
import logo from "../assets/logo.svg"
import napocska from "../assets/icon-sun.svg"

const Navbar = () => {
  return (
    <div className='header'>
        <img src={logo} alt="" />
        <button><img src={napocska} alt="" /></button>
    </div>
  )
}

export default Navbar