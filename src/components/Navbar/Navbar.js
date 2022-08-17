import React , {useState} from 'react'

import './Navbar.css'
import NavbarUpper from './NavbarUpper'
import logo from '../images/logo.png'

const Navbar = () => {


    
       
       
    
  return (
    <div className='full-navbar'>
       
      <NavbarUpper/>
      <div className='navbar'>
        <div className='logo'>
            <img src={logo} />
            
        </div>

        
        <div className="list-images">
        
        <ul className="hide">
            <li>PROGRAMS</li>
            <li>TRANSFORMATIONS</li>
            <li>BLOGS</li>
            <li>CONTACT</li>
            
            <li>TOOLS</li>
            <li>ABOUT</li>
            
        </ul>
         
        
          
        
      </div>
      </div>
    </div>
  )
}

export default Navbar 