import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAs2kb3bx6asxFGnk_hPha5N3xNqMNwidw",
  authDomain: "mailbox-bd8f7.firebaseapp.com",
  projectId: "mailbox-bd8f7",
  storageBucket: "mailbox-bd8f7.appspot.com",
  messagingSenderId: "4043917977",
  appId: "1:4043917977:web:98db5e6074ec34c0440608",
  measurementId: "G-MZ61G10360"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };