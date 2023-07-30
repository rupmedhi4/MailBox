
import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

    const navigate = useNavigate()
    const loginhandler = () => {
        navigate("/login")
    }
    const signuphandler = () => {
        navigate("/signup")
    }
    return (
        <nav className='container_nav'>
            <ul className='ul_nav'>
                <li>
                    <Link to={"/home"} href="#"   style={{color:"white", textDecoration:"none"}}>Home</Link>

                </li>
                <li>
                    <Link to={"/about"} href="#"  style={{color:"white", textDecoration:"none"}}>About us</Link>

                </li>
                <li>
                    <Link to={"/contactus"} href="#"  style={{color:"white", textDecoration:"none"}}>Contact us</Link>

                </li>
                <li>
                    <Link to={"/email"} href="#"  style={{color:"white", textDecoration:"none"}}>email composer</Link>

                </li>
               
            </ul>
            <ul className="cartBtn_main" >
                <button onClick={loginhandler}  style={{color:"white", background:"black",  cursor: "pointer"}} className="cartBtn" >Login</button>
                <button onClick={signuphandler} style={{color:"white", background:"black",  cursor: "pointer"}} className="cartBtn"  >Signup</button>
            </ul>

        </nav>
    )
}