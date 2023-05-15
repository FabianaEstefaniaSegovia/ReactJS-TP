import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVYD6TpUJI-oF5QKcuGqdl8iK9VfJKld4",
  authDomain: "libros-e689a.firebaseapp.com",
  projectId: "libros-e689a",
  storageBucket: "libros-e689a.appspot.com",
  messagingSenderId: "407150678405",
  appId: "1:407150678405:web:c26bcdf9baf8c7818bb4ec",
  measurementId: "G-1CKH5NQZVM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);