// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth
} from 'firebase/auth';
import { getFirebaseConfig } from "./firebaseConfig";

// Initialize Firebase
const app = initializeApp(getFirebaseConfig());



export const auth = getAuth(app);
export default app;
