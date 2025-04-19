// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "abc",
    authDomain: "abc",
    projectId: "abc",
    storageBucket: "ab",
    messagingSenderId: "abc",
    appId: "abc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication & Firestore database
export const auth = getAuth(app);
export const db = getFirestore(app);
