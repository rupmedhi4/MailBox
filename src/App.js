import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import Login from "./Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
     <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
