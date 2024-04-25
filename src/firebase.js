// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYrpwcskoNAgUyuc8mDkxFQywMxav4Ko4",
  authDomain: "employee-evaluation-5fb11.firebaseapp.com",
  projectId: "employee-evaluation-5fb11",
  storageBucket: "employee-evaluation-5fb11.appspot.com",
  messagingSenderId: "213913051067",
  appId: "1:213913051067:web:b46fbec68186d08d3fae9e",
  measurementId: "G-M4GZP9ZWGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// const analytics = getAnalytics(app); 