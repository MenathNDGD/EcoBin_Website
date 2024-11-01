import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "../../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu_icon.png";
import DefaultUserPic from "../../assets/DefaultUser.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event) => {
      if (!event.target.closest(".user-menu")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "Users", currentUser.uid));
        if (userDoc.exists()) {
          console.log("User Document Data:", userDoc.data());
          setUser({
            ...currentUser,
            ...userDoc.data(),
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleMenu = () => {
    setHideMenu(!hideMenu);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-10 flex items-center justify-between p-4 transition ${
        sticky ? "bg-gray-700 bg-opacity-70 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="flex-1 flex items-center">
        <NavLink to="/" className="cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="w-[120px] hover:scale-110 transition-transform duration-200"
          />
        </NavLink>
      </div>
      <div className="flex-1 justify-center hidden md:flex">
        <ul
          className={`${
            hideMenu ? "" : "hidden md:flex"
          } space-x-6 text-white font-semibold text-2xl`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active text-green-500 font-bold" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/how-to-use"
              className={({ isActive }) =>
                isActive ? "active text-green-500 font-bold" : "text-white"
              }
            >
              How to Use
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "active text-green-500 font-bold" : "text-white"
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex justify-end items-center space-x-4">
        {loading ? (
          <div className="w-10 h-10 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin"></div>
        ) : user ? (
          <div className="relative user-menu">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <img
                src={user.profilePic || DefaultUserPic}
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-white text-lg">
                Hello, {getFirstName(user.username)}
              </span>
            </div>
            {dropdownOpen && (
              <ul className="absolute top-full right-0 mt-2 bg-gray-700 bg-opacity-70 backdrop-blur-lg shadow-lg rounded-md w-48 text-white">
                <li className="px-4 py-2 hover:bg-green-500 rounded-t-md">
                  <NavLink to="/user-profile">Profile</NavLink>
                </li>
                <li
                  className="px-4 py-2 hover:bg-green-500 rounded-b-md"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            )}
          </div>
        ) : (
          <NavLink to="/user-login">
            <button className="bg-green-500 text-gray-800 px-6 py-2 rounded-full text-lg font-semibold hover:scale-110 transition-transform">
              Login
            </button>
          </NavLink>
        )}
        <img
          src={menuIcon}
          alt="Menu Icon"
          className="w-8 md:hidden cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-60 bg-gray-800 bg-opacity-90 backdrop-blur-lg transition-transform transform ${
          hideMenu ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="space-y-4 mt-20 px-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "text-white"
              }
              onClick={() => setHideMenu(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/how-to-use"
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "text-white"
              }
              onClick={() => setHideMenu(false)}
            >
              How to Use
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "text-white"
              }
              onClick={() => setHideMenu(false)}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
