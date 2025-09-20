// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGZirPFQMP630cUew09mOv5dNb_pp8p_o",
  authDomain: "aliuniverseltravels.firebaseapp.com",
  projectId: "aliuniverseltravels",
  storageBucket: "aliuniverseltravels.firebasestorage.app",
  messagingSenderId: "507341726614",
  appId: "1:507341726614:web:092e73a20cb3448af0b3b7",
  measurementId: "G-MLRS6T3LDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
