import React from 'react'
import './Sidebar.css'
import { useDispatch, useSelector } from 'react-redux';
import { setPortal } from '../Redux/Slices/StoreEmail';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const portal = useSelector(state => state.StoreEmail.portal);
    const dispatch = useDispatch();

    const modalHandler =  ()=>{
        dispatch(setPortal())   
     
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
             <span className='inbox'>Inbox</span>
        </div>
        <div className='mail-inbox'  style={{cursor:"pointer"}}>
             <span className='inbox'>Send Mail</span>
        </div>
       
       
    </div>
      

    </>
  )
}
