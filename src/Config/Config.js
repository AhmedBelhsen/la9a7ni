import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-secret";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db=getFirestore(app)
export {auth , db}