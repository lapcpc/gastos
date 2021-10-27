// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN_MxIVCszcBElZUS29RBZZUdPWpB9esU",
  authDomain: "iberofinantial-a2e29.firebaseapp.com",
  projectId: "iberofinantial-a2e29",
  storageBucket: "iberofinantial-a2e29.appspot.com",
  messagingSenderId: "633911891256",
  appId: "1:633911891256:web:440e3d2f76adc9f45e5dcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
