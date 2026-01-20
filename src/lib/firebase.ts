// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYes6Ql7XtxjRhFcQiUi8DOdddBCJCkMM",
  authDomain: "my-kitchen-b9c2a.firebaseapp.com",
  projectId: "my-kitchen-b9c2a",
  storageBucket: "my-kitchen-b9c2a.firebasestorage.app",
  messagingSenderId: "623203499366",
  appId: "1:623203499366:web:ffe2710750eac3e092dca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };