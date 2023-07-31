import React, { useEffect } from "react";
import JoditEditor from "jodit-react";
import EmailComposer from "./Components/EmailComposer/EmailComposer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import Login from "./Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import { addEmail } from "./Components/Redux/Slices/StoreEmail";
import { UseSelector } from "react-redux/es/hooks/useSelector";

function App() {

  const user = useSelector(state => state.StoreEmail.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addEmail(user))
       
      } else {
        dispatch(addEmail(user))
      }
    });
    unsubscribe();
  },[])

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/email" element={<EmailComposer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
