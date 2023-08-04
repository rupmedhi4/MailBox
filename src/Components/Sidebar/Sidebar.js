import React from 'react'
import './Sidebar.css'
import { useDispatch, useSelector } from 'react-redux';
import { setPortal } from '../Redux/Slices/StoreEmail';
import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const portal = useSelector(state => state.StoreEmail.portal);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const modalHandler =  ()=>{
        dispatch(setPortal())   
     
       }
    const emailShowHandler =  ()=>{
        navigate("/")  
     
       }
    const sendmailHandler =  ()=>{
        navigate("/emailbody")  
     
       }

  return (
    <>
    <div className="main_container">
        <button className='compose-btn' onClick={modalHandler}>
            <Link to={"/emailcompose"} style={{ textDecoration: 'none', color: 'inherit' }}>
             Compose Email
            </Link>
           
        </button>
        <div className='mail-inbox' style={{cursor:"pointer"}}>
             <span className='inbox' onClick={emailShowHandler}>Inbox</span>
        </div>
        <div className='mail-inbox'  style={{cursor:"pointer"}}>
             <span className='inbox' onClick={sendmailHandler}>Send Mail</span>
        </div>
        <div className='mail-inbox'  style={{cursor:"pointer"}}>
             <span className='inbox'>Unread</span>
        </div>
       
       
    </div>
      

    </>
  )
}
