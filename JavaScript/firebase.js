// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"; 
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY8rAzFTcpzhx9vvzLUP3t9gQY2U3I648",
  authDomain: "filesnap-net101.firebaseapp.com",
  projectId: "filesnap-net101",
  storageBucket: "filesnap-net101.firebasestorage.app",
  messagingSenderId: "1042397217298",
  appId: "1:1042397217298:web:43b985209e12d672090ecb",
  measurementId: "G-PJDYYPL6QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };