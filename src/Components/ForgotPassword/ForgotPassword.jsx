import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import BackToTop from '../BackToTop/BackToTop'
import './ForgotPassword.css'
import { MdEmail } from "react-icons/md";
import { auth } from '../../Firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password Reset Email Sent! Check Your Inbox.", { position: "top-center", });
      navigate('/user-login');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "top-center", });
    }
  };

  return (
    <div className='background'>
      <Navbar/>
      <BackToTop/>
      <div className="forgotPasswordContent">
        <div className="forgotPasswordForm">
          <form onSubmit={handleResetPassword}>
            <h1>Reset Password</h1>
            <div className="inputBox">
              <input 
                type='email'             
                placeholder='Enter Your Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
              <MdEmail className='icon'/>
            </div>
            <button type='submit'>Send Reset Email</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ForgotPassword
