
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-agent-83651.firebaseapp.com",
  projectId: "ai-interview-agent-83651",
  storageBucket: "ai-interview-agent-83651.firebasestorage.app",
  messagingSenderId: "723218037323",
  appId: "1:723218037323:web:5a141b976f947790882bce",
  measurementId: "G-8PG559VHSH"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}