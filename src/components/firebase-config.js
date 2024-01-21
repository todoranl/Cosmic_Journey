// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF8N4jW9q5x85cSmWV7O08Tlw6r2tBmX4",
  authDomain: "cosmicjourney-dab3e.firebaseapp.com",
  projectId: "cosmicjourney-dab3e",
  storageBucket: "cosmicjourney-dab3e.appspot.com",
  messagingSenderId: "994442545877",
  appId: "1:994442545877:web:4c26ce09933389e9e8705c",
  measurementId: "G-T6ZFCZBX0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// firebase-config.js
export const db = getFirestore(app);
export const auth = getAuth(app);
