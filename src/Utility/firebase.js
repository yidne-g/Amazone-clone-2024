
import  firebase  from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDozdJK_P9iHLkXqzzGaJsduAAgwxZVuc",
  authDomain: "clone-36597.firebaseapp.com",
  projectId: "clone-36597",
  storageBucket: "clone-36597.appspot.com",
  messagingSenderId: "936377443701",
  appId: "1:936377443701:web:14cd6d08b6b868d461df3c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
