import React from 'react';
import './Profile.css'       
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop'
import DefaultUserPic from '../../assets/DefaultUser.png'  
import { Link } from 'react-router-dom';

const Profile = () => {

  return (
    <div className='hero'>
      <Navbar/>
      <BackToTop/>
      <div className="profileContent">
        <h1>Welcome, </h1>
        <div className="fields">
          <img src={DefaultUserPic} alt='Avatar' className='userAvatar'/>
        </div>
        <div className="profileInfo">
          <p><strong>Username:</strong></p>
          <p><strong>Email:</strong></p>
          <p><strong>Contact Number:</strong></p>
          <p><strong>Address:</strong></p>
          <p><strong>City:</strong></p>
        </div>
        <button type='submit'><Link to="/">Logout</Link></button>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile
