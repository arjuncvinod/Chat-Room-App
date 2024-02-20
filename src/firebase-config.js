// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLkmtdP3Fdf1uzMWUCfSdC1hpIHIZ2Mto",
  authDomain: "chat-room-48892.firebaseapp.com",
  projectId: "chat-room-48892",
  storageBucket: "chat-room-48892.appspot.com",
  messagingSenderId: "666211132536",
  appId: "1:666211132536:web:9390b0b5b7a4d8390e798d",
  measurementId: "G-L5206G4X63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db=getFirestore(app)
// const analytics = getAnalytics(app);
