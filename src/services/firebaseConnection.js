// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

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

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };