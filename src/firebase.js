// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nutri-sandra.firebaseapp.com",
  projectId: "nutri-sandra",
  storageBucket: "nutri-sandra.firebasestorage.app",
  messagingSenderId: "548757799626",
  appId: "1:548757799626:web:1e0773b5bacd88a8ebea33",
  measurementId: "G-HXCSCTJKC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);