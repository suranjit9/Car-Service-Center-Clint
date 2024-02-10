// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE-apiKey,
  authDomain: import.meta.env.VITE-authDomain,
  projectId: import.meta.env.VITE-projectId,
  storageBucket: import.meta.env.VITE-storageBucket,
  messagingSenderId: import.meta.env.VITE-messagingSenderId,
  appId: import.meta.env.VITE-appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;