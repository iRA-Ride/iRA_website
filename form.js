// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0ZB-oECWiEwB8eCopC1g0FmDgyc0r4b8",
  authDomain: "ira-driver.firebaseapp.com",
  projectId: "ira-driver",
  storageBucket: "ira-driver.appspot.com",
  messagingSenderId: "996507683838",
  appId: "1:996507683838:web:4a1d8647e7554e3c60ceaf",
  measurementId: "G-1JHLE3PMY9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
