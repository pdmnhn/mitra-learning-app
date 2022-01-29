// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4YH9Fc6ZOPuBjrjgeVAlavwwVnEH3cCc",
  authDomain: "mitra-learning.firebaseapp.com",
  projectId: "mitra-learning",
  storageBucket: "mitra-learning.appspot.com",
  messagingSenderId: "204199760096",
  appId: "1:204199760096:web:407a3924f193118e024085",
  measurementId: "G-248JVPL736",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
