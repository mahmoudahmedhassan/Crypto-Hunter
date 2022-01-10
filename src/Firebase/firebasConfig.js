import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
  
const firebaseConfig = {
  apiKey: "AIzaSyDYVu8-4dZ2PAWRGs1KFgLuZ-jznXH1aQY",
  authDomain: "crypto-hunter-app.firebaseapp.com",
  projectId: "crypto-hunter-app",
  storageBucket: "crypto-hunter-app.appspot.com",
  messagingSenderId: "1097493818889",
  appId: "1:1097493818889:web:08c98fa59363d2d69792d8",
  measurementId: "G-0Y0ZT2BEYP"
};

 const app = initializeApp(firebaseConfig);
 
  
export const db = getFirestore(app);
export const auth = getAuth(app);
