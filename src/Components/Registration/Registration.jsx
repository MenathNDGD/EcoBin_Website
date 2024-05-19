import React from 'react'
import './Registration.css'
import Navbar from '../../Components/Navbar/Navbar'
import BackToTop from '../BackToTop/BackToTop'
import RegistrationImg from '../../assets/RegImg.png'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCity } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Registration = () => {

  return (
    <div className='bgReg'>
        <Navbar/>
        <BackToTop/>
        <div className="regContent">
          <div className="regImg">
            <img src={RegistrationImg} alt="" />
          </div>
          <div className="regForm">
            <form>
              <h1>Registration</h1>
              <div className="inputBox">
                <input 
                  type='text'
                  placeholder='Username' 
                  required 
                />
                <FaUser  className='icon'/>
              </div>
              <div className="inputBox">
                <input 
                  type='email'
                  placeholder='Email Address' 
                  required 
                />
                <MdEmail  className='icon'/>
              </div>
              <div className="inputBox">
                <input 
                  type='text' 
                  placeholder='Contact Number' 
                  required 
                />
                <FaPhoneSquare className='icon'/>
              </div>
              <div className="inputBox">
                <input 
                  type='text' 
                  placeholder='Address' 
                  required 
                />
                <FaLocationDot  className='icon'/>
              </div>
              <div className="inputBox">
                <input 
                  type='text'
                  placeholder='City' 
                  required 
                />
                <FaCity className='icon'/>
              </div>
              <div className="inputBox">
                <input 
                  type='password' 
                  placeholder='Password' 
                  required 
                />
                <FaLock className='icon'/>
              </div>
              <div className="agree">
                <label><input type='checkbox'/>I Agree to the Terms & Conditions</label>
              </div>
              <button type='submit'><Link to="/user-profile">Register</Link></button>
              <div className="loginLink">
                <p>Already Have an Account? <Link to="/user-login">Login Now!</Link></p>
              </div>
            </form>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Registration
