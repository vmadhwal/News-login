// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC2n1urYwNcKNpxAajRWojxDOfNRUIHCs",
  authDomain: "news-login-f02c3.firebaseapp.com",
  projectId: "news-login-f02c3",
  storageBucket: "news-login-f02c3.appspot.com",
  messagingSenderId: "622603766372",
  appId: "1:622603766372:web:b0cd23328a79bb02ea2d71",
  measurementId: "G-YH3W8WW2J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth();//Authentication 
export{app, auth};
