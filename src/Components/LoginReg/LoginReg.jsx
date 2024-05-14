import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './LoginReg.css'
import LoginImg from '../../assets/loginImg.png'
import RegistrationImg from '../../assets/RegImg.png'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCity } from "react-icons/fa6";

const Login = () => {

  const [action, setAction] = useState('');
  const registerLink = () => {
    setAction('active');
  };

  const loginLink = () => {
    setAction('');
  };

  return (
    <div className='hero'>
      <Navbar/>
      <div className={`logRegContent${action}`}>
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
                <p>Don't Have an Account? <a href='#' onClick={registerLink}>Register Now!</a></p>
              </div>
            </form>
          </div>
        </div>

        <div className="regContent">
          <div className="regImg">
            <img src={RegistrationImg} alt="" />
          </div>
          <div className="regForm">
            <form action=''>
              <h1>Registration</h1>
              <div className="inputBox">
                <input type='text' placeholder='Username' required />
                <FaUser  className='icon'/>
              </div>
              <div className="inputBox">
                <input type='email' placeholder='Email Address' required />
                <MdEmail  className='icon'/>
              </div>
              <div className="inputBox">
                <input type='text' placeholder='Contact Number' required />
                <FaPhoneSquare className='icon'/>
              </div>
              <div className="inputBox">
                <input type='text' placeholder='Address' required />
                <FaLocationDot  className='icon'/>
              </div>
              <div className="inputBox">
                <input type='text' placeholder='City' required />
                <FaCity className='icon'/>
              </div>
              <div className="inputBox">
                <input type='password' placeholder='Password' required />
                <FaLock className='icon'/>
              </div>
              <div className="agree">
                <label><input type='checkbox'/>I Agree to the Terms & Conditions</label>
              </div>
              <button type='submit'>Register</button>
              <div className="loginLink">
                <p>Already Have an Account? <a href='#' onClick={loginLink}>Login Now!</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
