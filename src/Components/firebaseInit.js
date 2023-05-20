// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbmueA1Lc0odcdFq6YBWr0QgrHiUYTnQU",
 authDomain: "react-hooks-blog-3ecf5.firebaseapp.com",
  projectId: "react-hooks-blog-3ecf5",
  storageBucket: "react-hooks-blog-3ecf5.appspot.com",
  messagingSenderId: "978634333062",
  appId: "1:978634333062:web:efd85b44c56a434618ea07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);