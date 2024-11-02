import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('../../assets/footerImg.png')" }}
    >
      <footer className="bg-black/90 text-white py-10 mt-10">
        <div className="container mx-auto px-4 flex flex-wrap justify-between">
          {/* Contact Us Section */}
          <div className="flex-1 min-w-[200px] mb-8 md:mb-0">
            <h1 className="text-center text-2xl border-b-2 border-white pb-2 mb-4">
              Contact Us
            </h1>
            <ul className="space-y-2 text-lg">
              <li>ecobinmana@gmail.com | info@ecobinadmin.net</li>
              <li>0750104549 | 0701234859</li>
              <li>No. 128, Colombo 07, Sri Lanka.</li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="flex-1 min-w-[200px] mb-8 md:mb-0">
            <h1 className="text-center text-2xl border-b-2 border-white pb-2 mb-4">
              Services
            </h1>
            <ul className="space-y-2 text-lg">
              <li>Automated Sorting Service</li>
              <li>Real-time Bin Level Monitoring Service</li>
              <li>Fast Notification Service</li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="flex-1 min-w-[200px] text-center">
            <h1 className="text-2xl border-b-2 border-white pb-2 mb-4">
              Follow Us
            </h1>
            <div className="flex justify-center space-x-4 mb-4">
              <i className="fa-brands fa-facebook text-white text-4xl hover:text-green-500 transition-transform transform hover:scale-125"></i>
              <i className="fa-brands fa-whatsapp text-white text-4xl hover:text-green-500 transition-transform transform hover:scale-125"></i>
              <i className="fa-brands fa-linkedin text-white text-4xl hover:text-green-500 transition-transform transform hover:scale-125"></i>
              <i className="fa-brands fa-square-twitter text-white text-4xl hover:text-green-500 transition-transform transform hover:scale-125"></i>
            </div>
            <div className="justify-center text-center">
              T & C | © 2024 EcoBin | Privacy & Policy
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
