import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  authDomain: "qbarato-c8edc.firebaseapp.com",
  projectId: "qbarato-c8edc",
  storageBucket: "qbarato-c8edc.firebasestorage.app",
  messagingSenderId: "929102260179",
  appId: "1:929102260179:web:f28a6135ca4fc77691f126",
  measurementId: "G-CLW69LTLJ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
