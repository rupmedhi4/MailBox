import React from 'react';
import { useSelector } from 'react-redux';
import './ReadEmail.css'; // Import the external CSS file

export default function ReadEmail() {
  const userClickMail = useSelector((state) => state.StoreEmail.userClickMail);

  return (
    <div className="container">
      <div className="email">
        <h1 className="subject">{userClickMail.subject}</h1>
        <p className="to"> {userClickMail.to}</p>
        <p className="body">{userClickMail.emailBody}</p>
      </div>
    </div>
  );
}
