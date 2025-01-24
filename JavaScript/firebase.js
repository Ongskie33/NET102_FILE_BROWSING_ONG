// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"; 
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnMi114Ql0jBtMWIivxCGJ-JxMUEsBvpI",
  authDomain: "net102filebrowser.firebaseapp.com",
  projectId: "net102filebrowser",
  storageBucket: "net102filebrowser.firebasestorage.app",
  messagingSenderId: "622272765450",
  appId: "1:622272765450:web:4b92ab8c04b8751c7349f3",
  measurementId: "G-YZDQ4NGE0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};