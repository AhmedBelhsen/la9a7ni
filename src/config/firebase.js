// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlgvPulQI_NqiIv4ptjKWeXHbdKIkTWMY",
  authDomain: "build-a38a9.firebaseapp.com",
  projectId: "build-a38a9",
  storageBucket: "build-a38a9.appspot.com",
  messagingSenderId: "807037175596",
  appId: "1:807037175596:web:007d9bc9ff99a7c78fce89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);