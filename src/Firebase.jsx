// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASGQ_1e3tkNEx_hCClLxinnHoVwTuUMdM",
  authDomain: "ecobin-3637f.firebaseapp.com",
  projectId: "ecobin-3637f",
  storageBucket: "ecobin-3637f.appspot.com",
  messagingSenderId: "194990816200",
  appId: "1:194990816200:web:ea74708fd8bb8627af9efd"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db = getFirestore(app);
export default app;