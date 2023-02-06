// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDpgThGS98kv81unllteKuQKk1GdZ_-0B4",
  authDomain: "fir-app-adef9.firebaseapp.com",
  projectId: "fir-app-adef9",
  storageBucket: "fir-app-adef9.appspot.com",
  messagingSenderId: "319288975048",
  appId: "1:319288975048:web:09ba6e2a5757ff4c740ffd",
  measurementId: "G-SNTLQGYVHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth};

// const analytics = getAnalytics(app);