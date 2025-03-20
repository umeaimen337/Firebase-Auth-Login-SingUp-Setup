// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAiLsAU2lU7lI72eu1ZSnjUiJvUiSNnmOg",
    authDomain: "ai-based-interview-app.firebaseapp.com",
    projectId: "ai-based-interview-app",
    storageBucket: "ai-based-interview-app.firebasestorage.app",
    messagingSenderId: "276197556048",
    appId: "1:276197556048:web:9e99c1887f4d04e3ef3655"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication & Firestore database
export const auth = getAuth(app);
export const db = getFirestore(app);
