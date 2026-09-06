// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU_ASRnbMtNuZYxR9IG6MNL7RVIkiCwhU",
  authDomain: "woffy-ai.firebaseapp.com",
  projectId: "woffy-ai",
  storageBucket: "woffy-ai.firebasestorage.app",
  messagingSenderId: "190287770784",
  appId: "1:190287770784:web:d0cb3f472607bcd2a985c5",
  measurementId: "G-19TGTWL0LC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
