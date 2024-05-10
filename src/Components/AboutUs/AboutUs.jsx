import React from 'react'
import './AboutUs.css'
import Navbar from '../Navbar/Navbar'
import VisionImg from '../../assets/vision.png'
import MissionImg from '../../assets/mission.png'

const AboutUs = () => {
  return (
    <div className='hero'>
      <Navbar/>
      <div className="aboutText">
        <h1>About Us</h1>
        <p>EcoBin, an innovative IoT-based smart garbage management system, is poised to transform waste management practices. With its primary focus on real-time monitoring of bin fill levels, EcoBin enables optimized collection routes and substantial cost reductions of up to 30%. Through a user-friendly mobile app and website, municipalities and businesses can efficiently manage waste disposal.</p>
      </div>

      <div className="aboutMid">
        <div className="VisionImg">
          <img src={VisionImg} alt="" />
        </div>
        <div className="VisionBody">
          <i class="fa-solid fa-eye-low-vision"></i>
          <h1>Our Vision</h1>
        </div>
        <p>“To lead the transformation of waste management practices globally by providing innovative IoT-based solutions that optimize efficiency, reduce environmental impact, and empower communities towards a sustainable future.”</p>
      </div>
    </div>
  )
}

export default AboutUs
