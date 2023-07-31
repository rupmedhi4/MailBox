import React, { useState } from "react";
import JoditEditor from "jodit-react";
import "./TextEditor.css";
import { useDispatch } from "react-redux";
import { addEmail } from "../Redux/Slices/StoreEmail";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { useSelector } from "react-redux";

export default function App() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [content, setContent] = useState("");
  const user = useSelector(state => state.StoreEmail.user);
  const dispatch = useDispatch();

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const handleSendEmail = async () => {
    const emailObj = {
      to,
      subject,
      emailBody
    }
    try {
      await setDoc(doc(db, 'sendEmail', to), emailObj);
      await setDoc(doc(db, 'sendEmail', user.uid), emailObj);
      alert("done")
    }
    catch (err) {
      alert(err);
      console.log(err)
    }

  };

  return (
    <div className="email-compose">

      <div className="input_span">
        <span className="input_start">To</span>
        <input type="text" className="input_text" onChange={(e) => { setTo(e.target.value); }} value={to} />
        <span className="input_end">Cc Bcc</span>
      </div>

      <div className="input_span">
        <input type="text" placeholder="Subject" className="input_text" onChange={(e) => { setSubject(e.target.value) }} value={subject} />
      </div>

      <div className="input_span_body">
        <input type="text" placeholder="Write your email" className="input_text" onChange={(e) => { setEmailBody(e.target.value) }} value={emailBody} />
      </div>

      <JoditEditor value={content} tabIndex={1} onChange={newContent => setContent(newContent)} />

      <button className="send-button" onClick={handleSendEmail}> Send </button>

    </div>
  );
}
