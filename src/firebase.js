// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: "AIzaSyDLHJhHFsDj8w_jySHCO-zx7dq9NM6oJw0",
  authDomain: "chatter-5474e.firebaseapp.com",
  projectId: "chatter-5474e",
  storageBucket: "chatter-5474e.appspot.com",
  messagingSenderId: "1054523112144",
  appId: "1:1054523112144:web:1322990ae83f9f2a17bcd5"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app)