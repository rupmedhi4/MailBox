import React from 'react'
import TextEditor from '../TextEditor/TextEditor'
import SendEmail from '../SendEmail/SendEmail'

export default function EmailComposer({user1}) {
  return (
    <div>
      <TextEditor/>
      <SendEmail user1={user1}/>
    </div>
  )
}
