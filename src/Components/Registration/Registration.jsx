import React, { useState } from 'react'
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
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../Firebase'
import { doc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

const Registration = () => {

  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          username: Username,
          contactNumber: contactNumber,
          address: address,
          city: city,
          password: password,
        });
      }
      console.log("User is Registered Successfully!");
      window.location.href = "/user-profile";
      toast.success("User is Registered Successfully!", {position: "top-center", });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {position: "top-center", });
    }
  };

  return (
    <div className='bgReg'>
        <Navbar/>
        <BackToTop/>
        <div className="regContent">
          <div className="regImg">
            <img src={RegistrationImg} alt="" />
          </div>
          <div className="regForm">
            <form onSubmit={handleRegister}>
              <h1>Registration</h1>
              <div className="inputBox">
                <input 
                  type='text'
                  placeholder='Username'
                  onChange={(e) => setUsername(e.target.value)} 
                  required 
                />
                <FaUser  className='icon'/>
              </div>
              <div className="inputBox">
                <input 
                  type='email'
                  placeholder='Email Address'
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
                <MdEmail  className='icon'/>
              </div>
              <div className="inputBox">
                <input 
                  type='text' 
                  placeholder='Contact Number'
                  onChange={(e) => setContactNumber(e.target.value)} 
                  required 
                />
                <FaPhoneSquare className='icon'/>
              </div>
              <div className="inputBox">
                <input 
                  type='text' 
                  placeholder='Address'
                  onChange={(e) => setAddress(e.target.value)} 
                  required 
                />
                <FaLocationDot  className='icon'/>
              </div>
              <div className="inputBox">
                <input 
                  type='text'
                  placeholder='City'
                  onChange={(e) => setCity(e.target.value)} 
                  required 
                />
                <FaCity className='icon'/>
              </div>
              <div className="inputBox">
                <input 
                  type='password' 
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
                <FaLock className='icon'/>
              </div>
              <div className="agree">
                <label><input type='checkbox'/>I Agree to the Terms & Conditions</label>
              </div>
              <button type='submit'>Register</button>
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
