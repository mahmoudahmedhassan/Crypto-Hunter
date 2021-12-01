import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
  
const firebaseConfig = {
  apiKey: "AIzaSyCxSzAtR470NHZaid3mTEnJUYZGbDtSH5I",
  authDomain: "crypto-hunter-422f5.firebaseapp.com",
  projectId: "crypto-hunter-422f5",
  storageBucket: "crypto-hunter-422f5.appspot.com",
  messagingSenderId: "621491552956",
  appId: "1:621491552956:web:c591ab9eb6be990021c6b9",
  measurementId: "G-FX64PSMNGS"
};

 const app = initializeApp(firebaseConfig);
 
  
export const db = getFirestore(app);
export const auth = getAuth(app);
