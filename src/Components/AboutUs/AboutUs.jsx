import React from 'react'
import './AboutUs.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import BackToTop from '../BackToTop/BackToTop'
import VisionImg from '../../assets/vision.png'
import MissionImg from '../../assets/mission.png'

const AboutUs = () => {
  return (
    <div className='hero'>
      <Navbar/>
      <BackToTop/>
      <div className="aboutText">
        <h1>About Us</h1>
        <p>EcoBin, an innovative IoT-based smart garbage management system, is poised to transform waste management practices. With its primary focus on real-time monitoring of bin fill levels, EcoBin enables optimized collection routes and substantial cost reductions of up to 30%. Through a user-friendly mobile app and website, municipalities and businesses can efficiently manage waste disposal.</p>
      </div>

      <div className="aboutSec">
        <div className="aboutMid">
          <img src={VisionImg} alt="" />
          <div className="VisionBody">
            <i class="fa-solid fa-eye-low-vision"></i>
            <h1>Our <span>Vision</span></h1>
            <p>“To lead the transformation of waste management practices globally by providing innovative IoT-based solutions that optimize efficiency, reduce environmental impact, and empower communities towards a sustainable future.”</p>
          </div>
        </div>

        <div className="aboutMid1">
          <div className="VisionBody1">
            <i class="fa-solid fa-bullseye"></i>
            <h1>Our <span>Mission</span></h1>
            <p>The EcoBin-Smart Garbage Management System utilizes IoT tech to automate sorting, monitor garbage levels in real time, provide notifications, and track locations, revolutionizing waste management for enhanced efficiency and sustainability.</p>
          </div>
          <img src={MissionImg} alt="" />
        </div>
      </div>

      <div className="aboutPara">
        <p>Traditional waste management grapples with challenges such as overflowing bins, inefficient routes, and limited data. EcoBin addresses these issues with intelligent alerts for timely waste removal and optimized routes that minimize fuel consumption and unnecessary pickups. By providing real-time data and insights, EcoBin empowers informed decision-making, ushering in a cleaner, greener future.</p>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
