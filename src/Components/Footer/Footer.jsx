import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
        <footer className="footer">
            <div className="row">
                <div className="colLeft">
                    <h1>Contact Us</h1>
                    <div className="contact-item">
                    <i class="fa-solid fa-street-view"></i>
                        <ol>
                            <li>
                                <a 
                                    href="https://www.google.com/maps?q=No. 128, Colombo 07, Sri Lanka" 
                                    target="_blank" 
                                    rel="noopener noreferrer">No. 128, Colombo 07,
                                    <li>
                                        Sri Lanka.
                                    </li>
                                </a>
                            </li>
                        </ol>
                    </div>
                    <div className="contact-item">
                        <i className="fa-solid fa-envelope"></i>
                        <ol>
                            <li><a href='mailto:ecobinmana@gmail.com'>ecobinmana@gmail.com</a></li>
                            <li><a href='mailto:info@ecobinadmin.net'>info@ecobinadmin.net</a></li>
                        </ol>
                    </div>
                    <div className="contact-item">
                        <i className="fa-solid fa-phone-volume"></i>
                        <ol>
                            <li><a href="tel:0750104549">0750104549</a></li>
                            <li><a href="tel:0701234859">0701234859</a></li>
                        </ol>
                    </div>
                </div>

                <div className="colMid">
                    <h1>Services</h1>
                    <ol>
                        <li>Automated Sorting Service</li>
                        <li>Real-time Bin Level Monitoring Service</li>
                        <li>Fast Notification Service</li>
                        <li>Bin Location Tracking Service</li>
                        <li>Reporting and Analytics Service</li>
                    </ol>
                </div>

                <div className="colRight">
                    <h1>Follow Us</h1>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-square-twitter"></i>
                    <p>Let's Rock And Roll Together!</p>
                </div>
            </div>

            <div className="footer-legal">
                <p>T & C | Copyright © 2024 EcoBin Smart Garbage Management Platform | Privacy & Policy</p>
            </div>             
        </footer>
    </div>
  );
}

export default Footer;
