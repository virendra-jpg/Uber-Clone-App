// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBukiR1osSqWRxQyU9LXtJy_R6s-6MbN_A",
  authDomain: "uber-75576.firebaseapp.com",
  projectId: "uber-75576",
  storageBucket: "uber-75576.appspot.com",
  messagingSenderId: "1028439881518",
  appId: "1:1028439881518:web:94ddecd60c127958192cbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app, provider, auth};