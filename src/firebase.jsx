// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBbx-omqgOahq31BuK45fZMFYXVjjhFuDE",
  authDomain: "myntra-6a0e3.firebaseapp.com",
  projectId: "myntra-6a0e3",
  storageBucket: "myntra-6a0e3.appspot.com",
  messagingSenderId: "126810342814",
  appId: "1:126810342814:web:35003bea2b4ffef9f0c28f",
  measurementId: "G-ZKMBY5KKJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;