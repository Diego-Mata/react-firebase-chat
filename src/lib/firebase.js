import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "rise-app-4f4b6.firebaseapp.com",
  projectId: "rise-app-4f4b6",
  storageBucket: "rise-app-4f4b6.appspot.com",
  messagingSenderId: "847756348796",
  appId: "1:847756348796:web:f395c35e2590ccd19468f9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()


/* nuevo */

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
