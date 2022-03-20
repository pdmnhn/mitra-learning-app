import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD4YH9Fc6ZOPuBjrjgeVAlavwwVnEH3cCc",
  authDomain: "mitra-learning.firebaseapp.com",
  projectId: "mitra-learning",
  storageBucket: "mitra-learning.appspot.com",
  messagingSenderId: "204199760096",
  appId: "1:204199760096:web:407a3924f193118e024085",
  measurementId: "G-248JVPL736",
};

const app = initializeApp(firebaseConfig);

export const vapidKey =
  "BMe8hoNPFM1MWPIPYJno2Mmil3PXe5aagpZw4eh4uzb1PoL1yL24a9Fi172gzizCpX1chmx53GLgNF5a4qPwSTY"; // notification key

export default app;
