import React from 'react';
import TextEditor from '../TextEditor/TextEditor';
import './EmailComposer.css';
import { GrClose } from 'react-icons/gr';
import {  useSelector } from 'react-redux';
import { setPortal } from '../Redux/Slices/StoreEmail';
import { useDispatch } from 'react-redux';


export default function EmailComposer() {
  const portal = useSelector(state => state.StoreEmail.portal);
  const dispatch = useDispatch();

  const CloseHandler = () => {
    console.log(portal); // Add this console log to see if the function is called
    dispatch(setPortal());
  };

  return (
    <div className="text-editor-container">
      <div className='heading-emails'>
        <span>New Message</span>
        <div>
          <GrClose style={{ cursor: "pointer" }} onClick={CloseHandler} />
        </div>
      </div>
      <TextEditor />
    </div>
  );
}
