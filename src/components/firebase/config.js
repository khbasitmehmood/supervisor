// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // ✅ Import Firebase Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh82cZcffJ7IoSOduTmyEVnOjjESwXtQY",
  authDomain: "supervisor-81df6.firebaseapp.com",
  projectId: "supervisor-81df6",
  storageBucket: "supervisor-81df6.firebasestorage.app",
  messagingSenderId: "883491546571",
  appId: "1:883491546571:web:dd338f07c056bfc6a3c24e",
  measurementId: "G-K36W4S3ZVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // ✅ Initialize Auth

// ✅ Export the auth instance for use in your Login.jsx
export { auth };
