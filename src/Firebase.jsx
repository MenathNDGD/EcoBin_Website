// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAu0rcRm5nFiDNRydaaVtG2GWgYb4pROk",
  authDomain: "ecobintest.firebaseapp.com",
  projectId: "ecobintest",
  storageBucket: "ecobintest.appspot.com",
  messagingSenderId: "331033004273",
  appId: "1:331033004273:web:095d05316396812727c150"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };