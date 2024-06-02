import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop';
import './Login.css';
import LoginImg from '../../assets/loginImg.png';
import { MdEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

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
      toast.success(<div>User Logged In Successfully!</div>, { 
        position: "top-center", 
        autoClose: 3000,
        className: 'toast-success'
      });
    } catch (error) {
      console.error("Login Error:", error);
      let errorMessage = "";
      if (error.code) {
        switch (error.code) {
          case "auth/user-not-found":
            errorMessage = "User Not Found! Please Contact Support.";
            break;
          case "auth/wrong-password":
            errorMessage = "Wrong Password! Please Try Again.";
            break;
          case "auth/invalid-email":
            errorMessage = "Invalid Email Address Format!";
            break;
          case "auth/user-disabled":
            errorMessage = "Account Has Been Disabled! Please Contact Support.";
            break;
          case "auth/invalid-credential":
            errorMessage = "Invalid Credentials! Please Try Again.";
            break;
          default:
            errorMessage = "Login Failed! Please Try Again Later.";
            break;
        }
      } else {
        errorMessage = "Login failed. Please try again later.";
      }
      toast.error(<div>{errorMessage}</div>, { 
        position: "top-center", 
        autoClose: 5000,
        className: 'toast-error'
      });
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
      <ToastContainer />
    </div>
  );
};

export default Login;
