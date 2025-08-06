// firebase.config.js or firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Replace this object with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB6RT3dot0JIBRlRvw1-gKuuSwZTpTtg5s",
  authDomain: "react-firebase-auth-67309.firebaseapp.com",
  projectId: "react-firebase-auth-67309",
  storageBucket: "react-firebase-auth-67309.firebasestorage.app",
  messagingSenderId: "194696440953",
  appId: "1:194696440953:web:f0bf0ecc763839ead038a8",
  measurementId: "G-9QDQRS3WYY"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export the Firebase Auth instance
export const auth = getAuth(app);
