import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Login.css'
import LoginImg from '../../assets/loginImg.png'

const Login = () => {
  return (
    <div className='hero'>
      <Navbar/>
      <div className="loginContent">
        <div className="loginImg">
          <img src={LoginImg} alt="" />
        </div>
        <div className="loginForm">
          <form action=''>
            <h1>Login</h1>
            <div className="inputBox">
              <input type='email' placeholder='Email Address' required /> 
            </div>
            <div className="inputBox">
              <input type='password' placeholder='Password' required /> 
            </div>
            <button type='submit'>Login</button>
            <div className="regLink">
              <p>Don't Have an Account? <a href='#'>Register Now!</a></p>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
