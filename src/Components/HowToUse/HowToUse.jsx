import React from 'react'
import './HowToUse.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import BackToTop from '../BackToTop/BackToTop.jsx'
import Step01Img from '../../assets/Step01.png'
import Step02Img from '../../assets/Step02.png'
import Step03Img from '../../assets/Step03.png'
import Step04Img from '../../assets/Step04.png'
import Step05Img from '../../assets/Step05.png'
import Step06Img from '../../assets/Step06.png'
import Step07Img from '../../assets/Step07.png'
import Step08Img from '../../assets/Step08.png'
import Step09Img from '../../assets/Step09.png'

const HowToUse = () => {
  return (
    <div className='hero'>
      <Navbar/>
      <BackToTop/>
      <div className="useBox">
        <div className="contentBox">
          <h3>User Registration/Login</h3>
          <ul>
            <li>If You're A New User, Click On The "Register" Button To Create An Account.</li>
            <li>Fill The Required Information: Username, Email, & Password.</li>
            <li>If You're Already Have An Account, Simply Login Using Your Credentials.</li>
          </ul>
        </div>
        <div className="stepBox">
          <div className="boxHead">
            <h1>Step 01</h1>
          </div>
          <div className="boxImg">
            <img src={Step01Img} alt="" />
          </div>
        </div>
      </div>

      <div className="useBox2">
        <div className="stepBox">
          <div className="boxHead">
            <h1>Step 02</h1>
          </div>
          <div className="boxImg">
            <img src={Step02Img} alt="" />
          </div>
        </div>
        <div className="contentBox">
          <h3>User Dashboard</h3>
          <ul>
            <li>After Logging In, You'll Be Directed To Your Personalized Dashboard.</li>
            <li>Here, You'll Find Essential Information Such As Real-time Bin Fill Levels, Nearby Bin Locations, & Historical Data.</li>
          </ul>
        </div>
      </div>

      <div className="useBox3">
        <div className="contentBox">
          <h3>Locating Nearby Bins</h3>
          <ul>
            <li>Click On The "Locate Bins" Tab To Find Bins Available For Waste Disposal Near Your Location.</li>
            <li>The System Will Display A Map With Pins Indicating The Locations Of Nearby Bins.</li>
          </ul>
        </div>
        <div className="stepBox">
          <div className="boxHead">
            <h1>Step 03</h1>
          </div>
          <div className="boxImg">
            <img src={Step03Img} alt="" />
          </div>
        </div>
      </div>

      <div className="useBox2">
        <div className="stepBox">
          <div className="boxHead">
            <h1>Step 04</h1>
          </div>
          <div className="boxImg">
            <img src={Step04Img} alt="" />
          </div>
        </div>
        <div className="contentBox">
          <h3>Waste Disposal</h3>
          <ul>
            <li>Once You've Located A Nearby Bin, Click On The Pin To View Details.</li>
            <li>Follow The Instructions Provided To Dispose Of Your Waste Responsibly.</li>
          </ul>
        </div>
      </div>

      <div className="useBox">
        <div className="contentBox">
          <h3>Providing Feedback</h3>
          <ul>
            <li>We Value Your Feedback! Click On The "Feedback" Tab To Share Your Thoughts & Suggestions.</li>
            <li>Your Feedback Helps Us Improve Our Services & Enhance User Experience.</li>
          </ul>
        </div>
        <div className="stepBox">
          <div className="boxHead">
            <h1>Step 05</h1>
          </div>
          <div className="boxImg">
            <img src={Step05Img} alt="" />
          </div>
        </div>
      </div>

      <div className="useBox2">
        <div className="stepBox">
          <div className="boxHead">
            <h1>Step 06</h1>
          </div>
          <div className="boxImg">
            <img src={Step06Img} alt="" />
          </div>
        </div>
        <div className="contentBox">
          <h3>Monitoring Bin Fill Levels</h3>
          <ul>
            <li>Stay Informed About The Fill Levels Of Bins In Your Area.</li>
            <li>The System Provides Real-time Updates On Bin Fill Levels, Allowing You To Plan Waste Disposal Efficiently.</li>
          </ul>
        </div>
      </div>

      <div className="useBox3">
        <div className="contentBox">
          <h3>Accessing Reports</h3>
          <ul>
            <li>Want To Track Your Waste Disposal Habits? Click On The "Reports" Tab.</li>
            <li>Access Detailed Weekly or Monthly Reports On Your Waste Disposal Activities & Bin Usage.</li>
          </ul>
        </div>
        <div className="stepBox">
          <div className="boxHead">
            <h1>Step 07</h1>
          </div>
          <div className="boxImg">
            <img src={Step07Img} alt="" />
          </div>
        </div>
      </div>

      <div className="useBox2">
        <div className="stepBox">
          <div className="boxHead">
            <h1>Step 08</h1>
          </div>
          <div className="boxImg">
            <img src={Step08Img} alt="" />
          </div>
        </div>
        <div className="contentBox">
          <h3>Logging Out</h3>
          <ul>
            <li>Ensure Your Account Security By Logging Out After Use.</li>
            <li>Click On The "Logout" Button To End Your Session Securely.</li>
          </ul>
        </div>
      </div>

      <div className="useBox3">
        <div className="contentBox">
          <h3>System Administrator Access</h3>
          <ul>
            <li>System Administrators Have Access To Additional Functionalities For Managing The EcoBin System.</li>
            <li>Access User Management, Generate Reports, Configure Bins, & Monitor Fill Levels Through The Admin ashboard.</li>
          </ul>
        </div>
        <div className="stepBox">
          <div className="boxHead">
            <h1>Step 09</h1>
          </div>
          <div className="boxImg">
            <img src={Step09Img} alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HowToUse
