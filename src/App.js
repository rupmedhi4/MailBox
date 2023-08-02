import React, { useEffect, useState } from "react";
import JoditEditor from "jodit-react";
import EmailComposer from "./Components/EmailComposer/EmailComposer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import Login from "./Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./Firebase";
import { useDispatch } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { SetEmailData } from "./Components/Redux/Slices/StoreEmail";

function App() {
  const dispatch = useDispatch();
  const [user1, setUser1] = useState(null);
  const user = auth.currentUser

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser1(user);
          console.log(user1); // Move this line here to log the user1 state after it's set
      } else {
        setUser1(null)
      }
    });
  
    return () => unsubscribe();
  }, [user]);


  useEffect(()=>{
    if (user1) {
      const docRef = doc(db, "sendEmail", user.uid);
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          dispatch(SetEmailData(docSnap.data().emails));
          console.log(docSnap.data().emails)
        } else {
          console.log("no doc");
        }
      });
      return () => unsubscribe(); 
    } else {
      console.log("not user");
    }
  }, [dispatch, user])

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/email" element={<EmailComposer user1={user1} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
