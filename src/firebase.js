import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBNRbtC7jsDq4aZaODLzDYRtv7aVr7nZyI",
  authDomain: "qr-menu-3a446.firebaseapp.com",
  projectId: "qr-menu-3a446",
  storageBucket: "qr-menu-3a446.appspot.com",
  messagingSenderId: "400479249",
  appId: "1:400479249:web:54a9922c8539e43716cdb0",
  measurementId: "G-WMGDQ0QRHZ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth  = getAuth(app);


