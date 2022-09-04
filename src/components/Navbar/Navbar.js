import React , {useState} from 'react'

import './Navbar.css'
import NavbarUpper from './NavbarUpper'
import logo from '../images/logo.png'
import {Link} from "react-router-dom"

const Navbar = () => {


    
       
       
    
  return (
    <div className='full-navbar'>
       
      <NavbarUpper/>
      <div className='navbar'>
       <Link to="/">
        <div className='logo'>
            <img src={logo} />
            
        </div>
        </Link>
        
        <div className="list-images">
        
        <ul className="hide">
          <Link to="/programs">
          <li>PROGRAMS</li>
          </Link>
            
            <Link to="/transformations">
            <li>TRANSFORMATIONS
            </li>
            </Link>
            <li>BLOGS</li>
            <li>CONTACT</li>
            
            <li>TOOLS</li>
            <Link to="/about">
            <li>ABOUT</li>
            </Link>
            
        </ul>
         
        
          
        
      </div>
      </div>
    </div>
  )
}

export default Navbar 