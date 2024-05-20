import React, { useEffect, useState } from 'react';
import './Profile.css';       
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop';
import DefaultUserPic from '../../assets/DefaultUser.png';  
import { auth, db } from '../../Firebase';
import { doc, getDoc } from 'firebase/firestore';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          console.log("User is logged in:", user);
          const docRef = doc(db, "Users", user.uid);
          console.log("Document Reference:", docRef.path);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
            console.log("User Data:", docSnap.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.log("User is not logged in.");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/user-login";
      console.log("User Logged Out Successfully!");
    } catch (error) {
      console.error("Error Logging Out: ", error.message);
    }
  }

  return (
    <div className='hero'>
      <Navbar/>
      <BackToTop/>
      {loading ? (
        <p>Loading...</p>
      ) : (
        userDetails ? (
          <>
            <div className="profileContent">
              <h1>Welcome, {userDetails.username}</h1>
              <div className="fields">
                <img src={DefaultUserPic} alt='Avatar' className='userAvatar'/>
              </div>
              <div className="profileInfo">
                <p><strong>Username: {userDetails.username}</strong></p>
                <p><strong>Email: {userDetails.email}</strong></p>
                <p><strong>Contact Number: {userDetails.contactNumber}</strong></p>
                <p><strong>Address: {userDetails.address}</strong></p>
                <p><strong>City: {userDetails.city}</strong></p>
              </div>
              <button type='submit' onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <p>No user details available.</p>
        )
      )}
      <Footer/>
    </div>
  );
}

export default Profile;
