// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVMP8PvJpD3-4QlDy1MXEPaVommhbGt4k",
    authDomain: "furniture-dbd32.firebaseapp.com",
    projectId: "furniture-dbd32",
    storageBucket: "furniture-dbd32.appspot.com",
    messagingSenderId: "463527977084",
    appId: "1:463527977084:web:3ec51b4c1c7dca363e29f9",
    measurementId: "G-X1BLVQ044Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;