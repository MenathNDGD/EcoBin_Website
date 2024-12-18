import React, { useState } from "react";
import "./Registration.css";
import Navbar from "../../Components/Navbar/Navbar";
import BackToTop from "../BackToTop/BackToTop";
import RegistrationImg from "../../assets/RegImg.png";
import { MdEmail } from "react-icons/md";
import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaPhoneSquare,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCity } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordInputActive, setIsPasswordInputActive] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Invalid email address.");
      return;
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          username: username,
          contactNumber: contactNumber,
          address: address,
          city: city,
        });
      }
      toast.success("User is Registered Successfully!", {
        position: "top-center",
      });
      window.location.href = "/user-profile";
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordInputActive(value.length > 0);

    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError("Invalid email address.");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="bgReg">
      <Helmet>
        <title>Become a Member | EcoBin</title>
      </Helmet>
      <Navbar />
      <BackToTop />
      <div className="regContent">
        <div className="regImg">
          <img src={RegistrationImg} alt="" />
        </div>
        <div className="regForm">
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="inputBox">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <MdEmail className="icon" />
            </div>
            {emailError && <p className="error">{emailError}</p>}
            <div className="inputBox">
              <input
                type="text"
                placeholder="Contact Number"
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
              <FaPhoneSquare className="icon" />
            </div>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <FaLocationDot className="icon" />
            </div>
            <div className="inputBox">
              <input
                type="text"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <FaCity className="icon" />
            </div>
            <div className="inputBox">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <FaLock className="icon" />
              {isPasswordInputActive &&
                (showPassword ? (
                  <FaEyeSlash
                    className="togglePasswordIcon"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEye
                    className="togglePasswordIcon"
                    onClick={togglePasswordVisibility}
                  />
                ))}
            </div>
            {passwordError && <p className="error">{passwordError}</p>}
            <div className="agree">
              <label>
                <input type="checkbox" required />I Agree to the{" "}
                <Link to="/about-us">Terms & Conditions</Link>
              </label>
            </div>
            <button type="submit">Register</button>
            <div className="loginLink">
              <p>
                Already Have an Account?{" "}
                <Link to="/user-login">Login Now!</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
