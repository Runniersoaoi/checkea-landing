import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAELygsxGemqg9q72t_bY-AJ45h7bVWNDM",
  authDomain: "checkea-a0c35.firebaseapp.com",
  projectId: "checkea-a0c35",
  storageBucket: "checkea-a0c35.firebasestorage.app",
  messagingSenderId: "676884314500",
  appId: "1:676884314500:web:cc1f487b6b5baa2df8c5d1",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
