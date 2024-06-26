import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCHgx5sJ6Y3gMQi3WdvSJZE9Qeb77ZdofU",
  authDomain: "ecobin-login-auth.firebaseapp.com",
  projectId: "ecobin-login-auth",
  storageBucket: "ecobin-login-auth.appspot.com",
  messagingSenderId: "267555158405",
  appId: "1:267555158405:web:3a13ab797a9e4bbb45acec"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
