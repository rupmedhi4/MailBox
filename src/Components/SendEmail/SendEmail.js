import React, { useEffect } from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { auth, db } from '../../Firebase';
import { SetEmailData } from '../Redux/Slices/StoreEmail';

export default function SendEmail({user1}) {
  const dispatch = useDispatch();

const user = auth.currentUser

  useEffect(() => {
    if (user1) {
      const docRef = doc(db, "sendEmail", user.uid);
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          dispatch(SetEmailData(docSnap.data()));
          console.log("doc have")
        } else {
          console.log("no doc");
        }
      });
      return () => unsubscribe(); // Cleanup the listener when the component unmounts
    } else {
      console.log("not user");
    }
    console.log(user);
  }, [dispatch, user]); // Use 'user' as a dependency

  return (
    <div>
      <h2>{user ? user.email : "No user data"}</h2>
    </div>
  );
}
