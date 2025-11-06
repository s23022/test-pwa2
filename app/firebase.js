// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYKoh1gNsSpnMAUSihiowg6WHQtKJbA0o",
    authDomain: "walkmaster-a0b9a.firebaseapp.com",
    projectId: "walkmaster-a0b9a",
    storageBucket: "walkmaster-a0b9a.firebasestorage.app",
    messagingSenderId: "640547590759",
    appId: "1:640547590759:web:947c574f270079552bfac2",
    measurementId: "G-MZPX8LR7JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);