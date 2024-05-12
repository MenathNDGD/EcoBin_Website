import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <nav className={`container ${sticky? 'darkNav' : ''}`}>
      <img src = {logo} alt = "" className='logo'/>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/how-to-use">How to Use</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/login"><button className='navBtn'>Login</button></NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar