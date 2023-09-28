// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABixiQ76vijBISbNHV5im_9-aGlTjiRWU",
  authDomain: "videogpt-d8397.firebaseapp.com",
  projectId: "videogpt-d8397",
  storageBucket: "videogpt-d8397.appspot.com",
  messagingSenderId: "687909126468",
  appId: "1:687909126468:web:6f0f56a8b2c03933c99711",
  measurementId: "G-6GS0N16DVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();