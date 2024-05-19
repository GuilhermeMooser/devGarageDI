// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBtRimI1GroPMr8Up2DRTvKLpMqnwrRB8",
  authDomain: "devgaragedi.firebaseapp.com",
  projectId: "devgaragedi",
  storageBucket: "devgaragedi.appspot.com",
  messagingSenderId: "178822383860",
  appId: "1:178822383860:web:e936e98b0239b72b1276a1",
  measurementId: "G-6BMP0MPPPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);