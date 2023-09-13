import React from 'react'
import Menubar from './Menubar'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <Link to={"/"}>
        <img src='img/logo.png' alt='HeaderLogo' style={{width:"4%"}}/>
      </Link>
      <Menubar />      
    </div>
    
  )
}

export default Header