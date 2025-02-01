// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPnFT9xKlspjdCdslBiRvyBnkGKg3WnCs",
  authDomain: "writesync-docs.firebaseapp.com",
  projectId: "writesync-docs",
  storageBucket: "writesync-docs.firebasestorage.app",
  messagingSenderId: "844651539785",
  appId: "1:844651539785:web:701a91f37515f6ba193e98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }