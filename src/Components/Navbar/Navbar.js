
import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setPortal } from '../Redux/Slices/StoreEmail';

export default function Navbar() {
    const user = auth.currentUser;
    const portal = useSelector(state => state.StoreEmail.portal);
    const dispatch = useDispatch();



    const navigate = useNavigate()
    const loginhandler = () => {
        navigate("/login")
    }
    const signuphandler = () => {
        navigate("/signup")
    }
    const logoutHandler = async ()=>{
        try{
           await signOut(auth)
           console.log(user)
           alert("signout")
        }catch(err){
          alert(err)
        }
    
      }
    const modalHandler =  ()=>{
       dispatch(setPortal())   
    
      }
    return (
        <nav className='container_nav'>
            <ul className='ul_nav'>
                <li>
                    <Link to={"/home"} href="#"   style={{color:"white", textDecoration:"none"}}>Home</Link>

                </li>
                <li>
                    <Link to={"/receivedemails"} href="#"  style={{color:"white", textDecoration:"none"}}>Received Email</Link>

                </li>
                <li>
                    <Link to={"/sendbox"} href="#"  style={{color:"white", textDecoration:"none"}}>Send Box</Link>

                </li>
              
               
            </ul>
            <ul className="cartBtn_main" >
                <button onClick={loginhandler}  style={{color:"white", background:"black",  cursor: "pointer"}} className="cartBtn" >Login</button>
                <button onClick={signuphandler} style={{color:"white", background:"black",  cursor: "pointer"}} className="cartBtn"  >Signup</button>
                <button onClick={logoutHandler} style={{color:"white", background:"black",  cursor: "pointer"}} className="cartBtn"  >logout</button>
            </ul>

        </nav>
    )
}