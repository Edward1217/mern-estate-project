// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5abba.firebaseapp.com",
  projectId: "mern-estate-5abba",
  storageBucket: "mern-estate-5abba.firebasestorage.app",
  messagingSenderId: "1541304788",
  appId: "1:1541304788:web:7e5d785fed7de4960aa641",
  measurementId: "G-W317BMH19T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
