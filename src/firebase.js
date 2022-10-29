import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0EMjCuIXRBjfjSSk3urRQjkvBRrifEwI",
  authDomain: "rekrunet.firebaseapp.com",
  projectId: "rekrunet",
  storageBucket: "rekrunet.appspot.com",
  messagingSenderId: "639930051856",
  appId: "1:639930051856:web:38516a61c7fcc9047a0995",
  measurementId: "G-7K5WB7MFP4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
