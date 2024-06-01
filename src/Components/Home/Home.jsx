import React, { useEffect } from 'react'
import './Home.css'
import MidPic from '../../assets/midPic.png'
import JoinUsPic from '../../assets/volunteer.png'
import QRImg from '../../assets/qr.png'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import BackToTop from '../BackToTop/BackToTop'
import { Helmet } from 'react-helmet'

const Home = () => {

  useEffect(() => {
    let valueDisplays = document.querySelectorAll('.num');
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute('data-val'));
      let difference = endValue - startValue;
      let duration = Math.floor(interval / difference);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue >= endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }, []);
  
  return (
    <div className='hero'>
      <Helmet>
        <title>Welcome | EcoBin</title>
      </Helmet>
      <Navbar/>
      <BackToTop/>
      <div className="hero-text">
        <div className="text-head">
          <h1>ECO</h1>
          <h1>BIN</h1>
        </div>

        <div className="text-head2">
          <h1><span>Smart</span> Bins</h1>
          <h1><span>Smart</span> Waste Management</h1>
          <h1><span>Smart</span> Solutions</h1>
        </div>
      </div>

      <p>EcoBin, an IoT waste management system, utilizes real-time sensors to address overflowing bins and wasted fuel, optimizing collection routes and reducing costs and emissions by up to 30%. Accessible through an app and website, EcoBin empowers municipalities and businesses for smarter waste disposal, tackling issues like unreliable service and limited data. With optimized sorting and environmental benefits, EcoBin paves the way for a cleaner, smarter, and more sustainable waste management future. Join the waste revolution with EcoBin® Smart Garbage Management System! Transform your organization's waste management with real-time data, optimized routes, and reduced costs. Embrace a cleaner, greener future. Learn more today!</p>

      <div className="hero-mid">
        <h1>Welcome to <span>ECOBIN</span></h1>
      </div>
      <img src={MidPic} alt="" className='hero-mid-pic'/>

      <div className="achive">
        <h1>Our <span>Achievements</span></h1>
        <p>Our organization is one of the IoT-based smart garbage management systems, revolutionizing waste sorting and real-time monitoring.</p>
        <div className="wrapper">
          <div className="contain">
            <i class="fa-solid fa-users"></i>
            <span class="num" data-val="400">000</span>
            <span class="text">Registered Users</span>
          </div>
          <div className="contain">
            <i class="fa-solid fa-users-between-lines"></i>
            <span class="num" data-val="340">000</span>
            <span class="text">Active Users</span>
          </div>
          <div className="contain">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="num" data-val="225">000</span>
            <span class="text">Sold Products</span>
          </div>
          <div className="contain">
            <i class="fa-solid fa-star"></i>
            <span class="num" data-val="280">000</span>
            <span class="text">Five Stars</span>
          </div>
        </div>
      </div>

      <div className="volunteer">
        <div className="volText">
          <h1>Become an awsome <span>Volunteer</span></h1>
          <p>Join us in revolutionizing waste management practices with our innovative EcoBin-Smart Garbage Management System, which optimizes routes, reduces operational costs, and empowers efficient waste disposal through real-time monitoring and automated sorting technologies.</p>
          <button className='btn2'><Link to="/user-login">JOIN US</Link></button>
        </div>
        <div className="volImg">
          <img src={JoinUsPic} alt="" className='join-us-pic'/>
        </div>
      </div>
      
      <div className="download">
        <div className="scanImg">
          <img src={QRImg} alt="Scan Me!" />
        </div>
        <div className="scanText">
          <h1>Download Our Android Application</h1>
          <ol>
            <li>Scan QR Code Or Click Download To Get App</li>
            <li>Register & Create Your Account OR Login with Existing Account</li>
            <li>Access Same Data via App and Website</li>
          </ol>
          <button className='btn1'>Download App</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
