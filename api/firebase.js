// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbweT_fha-ms3eoJ3zKBtKazpt95ynTW8",
  authDomain: "havenhub-99597.firebaseapp.com",
  projectId: "havenhub-99597",
  storageBucket: "havenhub-99597.appspot.com",
  messagingSenderId: "549596886721",
  appId: "1:549596886721:web:3daf9392cafaf711b34640",
  measurementId: "G-M1YQHKYFVM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
