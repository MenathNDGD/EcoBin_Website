import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import BackToTop from '../BackToTop/BackToTop'
import './Login.css'
import LoginImg from '../../assets/loginImg.png'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordInputActive, setIsPasswordInputActive] = useState(false);

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

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordInputActive(e.target.value.length > 0);
  };

  return (
    <div className='background'>
      <Helmet>
        <title>Login | EcoBin</title>
      </Helmet>
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
              <MdEmail className='icon'/>
            </div>
            <div className="inputBox">
              <input 
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                value={password}
                onChange={handlePasswordChange} 
                required
              />
              <FaLock className='icon'/>
              {isPasswordInputActive && (
                showPassword ? (
                  <FaEyeSlash className='togglePasswordIcon' onClick={togglePasswordVisibility} />
                ) : (
                  <FaEye className='togglePasswordIcon' onClick={togglePasswordVisibility} />
                )
              )}
            </div>
            <div className="rememberForgot">
              <label><input type='checkbox'/>Remember Me</label>
              <Link to="/forgot-password">Forgot Password?</Link>
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
