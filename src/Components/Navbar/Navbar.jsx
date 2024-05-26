import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu_icon.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [hideMenu, setHideMenu] = useState(false);
  const toggleMenu = ()=>{
    hideMenu ? setHideMenu(false) : setHideMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'darkNav' : ''}`}>
      <img src = {logo} alt = "" className='logo'/>
      <ul className={hideMenu ? '' : 'hideMenuIcon'}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/how-to-use">How to Use</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/user-login"><button className='navBtn'>Login</button></NavLink></li>
      </ul>
      <img src={menuIcon} alt='' className='menuIcon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar