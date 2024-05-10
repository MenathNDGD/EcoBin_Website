import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
            <div className="row">
                <div className="colLeft">
                    <h1>Contact Us</h1>
                    <p className="footer-text">Address:</p>
                    <ol>
                        <li>No. 128, Colombo 07, Sri Lanka</li>
                    </ol>
                    <p className="footer-text">E-Mail:</p>
                    <ol>
                        <li>ecobinmana@gmail.com</li>
                        <li>info@ecobinadmin.net</li>
                    </ol>
                    <p className="footer-text">Office:</p>
                    <ol>
                        <li>0750104549</li>
                        <li>0701234859</li>
                    </ol>
                </div>

                <div className="colMid">
                    <h1>Services</h1>
                    <ol>
                        <li>Automated Sorting Service</li>
                        <li>Real-time Garbage Level Monitoring Service</li>
                        <li>Notification Service</li>
                        <li>Location Tracking Service</li>
                        <li>Reporting and Analytics Service</li>
                    </ol>
                </div>

                <div className="colRight">
                    <h1>Follow Us</h1>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                    <p>Let's Rock And Roll Together!</p>
                </div>
            </div>

            <div className="footer-legal">
                <p>T & C | Copyright © 2024 EcoBin Smart Garbage Management Platform | Privacy & Policy</p>
            </div>             
        </footer>
    </div>
  )
}

export default Footer
