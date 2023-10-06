
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC1wxkGCm-xKZxO3mdLwEAUsNfOfkpdVlg",
  authDomain: "chatapp-1680f.firebaseapp.com",
  projectId: "chatapp-1680f",
  storageBucket: "chatapp-1680f.appspot.com",
  messagingSenderId: "722372199502",
  appId: "1:722372199502:web:76844bfc89e2497ee9af1f"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()