
import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='container'>
            <ul className='ul'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </nav>
    )
}