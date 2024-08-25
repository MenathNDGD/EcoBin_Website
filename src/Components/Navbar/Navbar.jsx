import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu_icon.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth, db } from '../../Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import DefaultUserPic from '../../assets/DefaultUser.png';

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

    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event) => {
      if (!event.target.closest('.user-menu')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'Users', currentUser.uid));
        if (userDoc.exists()) {
          console.log('User Document Data:', userDoc.data()); // Debugging line
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
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const toggleMenu = () => {
    setHideMenu(!hideMenu);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
  };

  return (
    <nav className={`container ${sticky ? 'darkNav' : ''}`}>
      <div className="navbar-left">
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="" className="logo" />
        </NavLink>
      </div>
      <div className="navbar-center">
        <ul className={hideMenu ? '' : 'hideMenuIcon'}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/how-to-use">How to Use</NavLink></li>
          <li><NavLink to="/about-us">About Us</NavLink></li>
        </ul>
      </div>
      <div className="navbar-right">
        {loading ? (
          <div className="spinner"></div>
        ) : user ? (
          <div className="user-menu">
            <div className="user-info" onClick={toggleDropdown}>
              <img
                src={user.profilePic || DefaultUserPic}
                alt="Avatar"
                className="avatar"
              />
              <span>Hello, {getFirstName(user.username)}</span>
            </div>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><NavLink to="/user-profile">Profile</NavLink></li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            )}
          </div>
        ) : (
          <NavLink to="/user-login"><button className="navBtn">Login</button></NavLink>
        )}
        <img src={menuIcon} alt="" className="menuIcon" onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
