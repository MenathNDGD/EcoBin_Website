import React, { useEffect, useState, useRef } from 'react';
import './Profile.css';       
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop';
import DefaultUserPic from '../../assets/DefaultUser.png';  
import { auth, db, storage } from '../../Firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { toast } from 'react-toastify';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profilePic, setProfilePic] = useState(DefaultUserPic);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          console.log("User is logged in:", user);
          const docRef = doc(db, "Users", user.uid);
          console.log("Document Reference:", docRef.path);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setUserDetails(userData);
            if (userData.profilePic) {
              setProfilePic(userData.profilePic);
            }
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

  const handleProfilePicChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(true);
      const storageRef = ref(storage, `profilePics/${auth.currentUser.uid}`);
      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setProfilePic(downloadURL);
        const userRef = doc(db, "Users", auth.currentUser.uid);
        await updateDoc(userRef, {
          profilePic: downloadURL
        });
        console.log("Profile Picture Updated Successfully!");
        toast.success("Profile Picture Updated Successfully!", { position: "top-center" });
      } catch (error) {
        console.error("Error Uploading Profile Picture: ", error);
        toast.error(error.message, { position: "top-center" });
      } finally {
        setUploading(false);
      }
    }
  };

  const handleProfilePicClick = () => {
    fileInputRef.current.click();
  };

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
      <Navbar />
      <BackToTop />
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <div className="loading-text">Loading...</div>
        </div>
      ) : (
        userDetails ? (
          <>
            <div className="profileContent">
              <h1>Welcome, {userDetails.username}</h1>
              <div className="fields">
                <img 
                  src={profilePic} 
                  alt='Avatar' 
                  className='userAvatar' 
                  onClick={handleProfilePicClick} 
                />
                <input 
                  type='file' 
                  accept='image/*' 
                  onChange={handleProfilePicChange} 
                  ref={fileInputRef} 
                />
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
          <div className="center-content">
            <p className="message"><strong>No User Details Available.</strong></p>
          </div>
        )
      )}
      <Footer />
    </div>
  );
}

export default Profile;
