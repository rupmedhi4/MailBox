import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './ReceivedEmail.css'
import { SetReadMail, setReadMail } from '../Redux/Slices/StoreEmail';

export default function ReceivedEmail() {

    const recievedEmail = useSelector(state => state.StoreEmail.recievedEmail);
    const dispatch = useDispatch();

    const getFirst10Words = (text) => {
        const words = text.split(' ');
        if (words.length > 10) {
          return words.slice(0, 10).join(' ') + '...';
        } else {
          return text;
        }
      };
    const readMailHandler = (id) => {
      recievedEmail.map((mail)=>{
        if (mail.id === id) {
          const updatedMail = {
            ...mail,
            ReadEmails: true,
          };
    
          // Dispatch the updated mail object
          dispatch(SetReadMail(updatedMail));
    
          console.log(updatedMail);
      }
       
        
      })
    }
    
  
    

  return (
    <div className='send_mail_main_div'>
    {recievedEmail.map((email) => (
      <>
       <div key={email.id} className='send_mail_container' onClick={()=>readMailHandler(email.id)}>
        {
          !email.readMail ?<span class="dot"></span> : null
        }
          <span>{email.to}</span>
          <div className="div_span">
              <span>{getFirst10Words(email.emailBody)}</span>    
          </div>
            
      </div>
      <br />
      </>
     
    ))}
  </div>
  )
}
