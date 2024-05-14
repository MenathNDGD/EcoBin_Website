import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Login.css'
import LoginImg from '../../assets/loginImg.png'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'

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
              <MdEmail  className='icon'/>
            </div>
            <div className="inputBox">
              <input type='password' placeholder='Password' required />
              <FaLock className='icon'/>
            </div>
            <div className="rememberForgot">
              <label><input type='checkbox'/>Remember me</label>
              <a href='#'>Forgot Password?</a>
            </div>
            <button type='submit'>Login</button>
            <div className="regLink">
              <p>Don't Have an Account? <Link to="/user-reg">Register Now!</Link></p>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
