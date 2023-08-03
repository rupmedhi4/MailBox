import React from 'react'
import SendEmail from '../SendEmail/SendEmail'
import TextEditor from '../TextEditor/TextEditor'
import './Modal.css'

export default function Modal() {
  return (
    <>
      <div className='heading-email'>
      <span >New Message</span>
      </div>
      <TextEditor/>
    </>
  )
}
