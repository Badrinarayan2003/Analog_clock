import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBqWYHkJEgLYgqAsZvdUAHZvrFepRQsUN8",
  authDomain: "analog-clock-14329.firebaseapp.com",
  projectId: "analog-clock-14329",
  storageBucket: "analog-clock-14329.appspot.com",
  messagingSenderId: "657261703533",
  appId: "1:657261703533:web:af1ca4e7fc3f6b8c032a64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;