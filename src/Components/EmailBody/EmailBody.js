import React from 'react';
import { useSelector } from 'react-redux';
import './EmailBody.css';

export default function EmailBody() {
  const emails = useSelector(state => state.StoreEmail.sendEmail);

  const getFirst10Words = (text) => {
    const words = text.split(' ');
    if (words.length > 10) {
      return words.slice(0, 10).join(' ') + '...';
    } else {
      return text;
    }
  };

  return (
    <div className='send_mail_main_div'>
      {emails.map((email) => (
        <div key={email.id} className='send_mail_container'>
          <span>{email.to}</span>
          <span>{getFirst10Words(email.emailBody)}</span>
        </div>
      ))}
    </div>
  );
}
