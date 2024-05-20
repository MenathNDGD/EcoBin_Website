import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import BackToTop from '../BackToTop/BackToTop'
import './Login.css'
import LoginImg from '../../assets/loginImg.png'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase'
import { toast } from 'react-toastify'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged In Successfully!");
      window.location.href = "/user-profile";
      toast.success("User Logged In Successfully!", { position: "top-center", });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "top-center", });
    }
  };

  return (
    <div className='background'>
      <Navbar/>
      <BackToTop/>
      <div className="loginContent">
        <div className="loginImg">
          <img src={LoginImg} alt="" />
        </div>
        <div className="loginForm">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="inputBox">
              <input 
                type='email'             
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
              <MdEmail  className='icon'/>
            </div>
            <div className="inputBox">
              <input 
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
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
