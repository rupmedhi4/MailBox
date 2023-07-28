
import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

    const navigate = useNavigate()
    const loginhandler = ()=>{
    navigate("/login")
    }
    const signuphandler = ()=>{
    navigate("/signup")
    }
    return (
        <nav className='container'>
            <ul className='ul'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
             
            </ul>
             <button onClick={signuphandler}>signup</button>
              <button onClick={loginhandler}>login</button>
        </nav>
    )
}