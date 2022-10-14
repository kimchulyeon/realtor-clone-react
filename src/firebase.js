// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW0zZF0MSduxEuhKVpD-scNvNajl0XjMI",
  authDomain: "realtor-clone-react-830da.firebaseapp.com",
  projectId: "realtor-clone-react-830da",
  storageBucket: "realtor-clone-react-830da.appspot.com",
  messagingSenderId: "973463391441",
  appId: "1:973463391441:web:3da2a151d363b4cc7a89f0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()