import React from "react";
import JoditEditor from "jodit-react";
import EmailComposer from "./Components/EmailComposer/EmailComposer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import Login from "./Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
