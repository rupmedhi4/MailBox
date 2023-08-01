import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SetEmailData, sendEmailData } from '../Redux/Slices/StoreEmail';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase';

export default function SendEmail() {

    const user = useSelector(state => state.StoreEmail.user);
    const sendEmail = useSelector(state => state.StoreEmail.sendEmail);
    const dispatch = useDispatch();


    useEffect(()=>{
        if (user) {
          const docRef = doc(db, "sendEmail", user.uid);
          const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
              dispatch(SetEmailData(docSnap.data()))
            } else {
              console.log("no doc");
            }
          });
          return () => unsubscribe(); // Cleanup the listener when the component unmounts
    
        } else {
          console.log("not user");
        }
      }, [user])

  return (
    <div>
   <h2>{SendEmail}</h2>
    </div>
  )
}
