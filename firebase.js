// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA52QreGd5iSxkPC4bDuiijdyuTBDL2ZT8",
  authDomain: "uber-clone-fea30.firebaseapp.com",
  projectId: "uber-clone-fea30",
  storageBucket: "uber-clone-fea30.appspot.com",
  messagingSenderId: "221041300516",
  appId: "1:221041300516:web:1c0a6c23f1f442569874b1",
  measurementId: "G-0R0R66K6F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { app, provider, auth };
