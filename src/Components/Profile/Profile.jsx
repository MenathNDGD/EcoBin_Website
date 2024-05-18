import React, { useEffect, useState } from 'react';
import { auth, db, storage } from '../../Firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import './Profile.css'       
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer.jsx';
import BackToTop from '../BackToTop/BackToTop.jsx'
import DefaultUserPic from '../../assets/DefaultUser.png'  
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Profile = () => {

  const [userData, setUserData] = useState(null);
  const [profilePic, setProfilePic] = useState(DefaultUserPic);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, 'Users', user.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setUserData(data);
            if (data.profilePic) {
              setProfilePic(data.profilePic);
            }
          } else {
            toast.error('No Such User Data Found!', { position: 'top-center' });
          }
        } else {
          toast.error('No User Logged In!', { position: 'top-center' });
        }
      } catch (error) {
        console.log(error.message);
        toast.error(error.message, { position: 'top-center' });
      }
    };

    fetchUserData();
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const user = auth.currentUser;
      if (user) {
        const storageRef = ref(storage, `profilePictures/${user.uid}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        await updateDoc(doc(db, 'Users', user.uid), {
          profilePic: downloadURL,
        })
        setProfilePic(downloadURL);
        toast.success('Profile Picture Updated Successfully!', { position: 'top-center' });
      }
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='hero'>
      <Navbar/>
      <BackToTop/>
      <div className="profileContent">
        <h1>Welcome, {userData.Username}</h1>
        <div className="fields">
          <img src={DefaultUserPic} alt='Avatar' className='userAvatar'/>
          <input type="file" accept="image/*" onChange={handleFileChange} className='fileInput' />
        </div>
        <div className="profileInfo">
          <p><strong>Username:</strong> {userData.Username}</p>
          <p><strong>Email:</strong> {userData.Email}</p>
          <p><strong>Contact Number:</strong> {userData.Contact_Number}</p>
          <p><strong>Address:</strong> {userData.Address}</p>
          <p><strong>City:</strong> {userData.City}</p>
        </div>
        <button type='submit'><Link to="/">Logout</Link></button>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile
