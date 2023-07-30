import React, { useState } from "react";
import JoditEditor from "jodit-react";
import "./TextEditor.css";

export default function App() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [content, setContent] = useState("");

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleEmailBodyChange = (event) => {
    setEmailBody(event.target.value);
  };

  // Update the Jodit editor content when any input changes
  const handleInputChange = (event) => {
   
    setTo(event.target.value);
  };

  const handleSendEmail = () => {
    // Implement your logic to send the email here
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Email Body:", emailBody);
  };

  return (
    <div className="email-compose">
      <div className="input_span">
        <span className="input_start">To</span>
        <input
          type="text"
          className="input_text"
          onChange={(e) => {
            handleInputChange(e)
          }}
          value={to}
        />
        <span className="input_end">Cc Bcc</span>
      </div>

      <div className="input_span">
        <input
          type="text"
          placeholder="Subject"
          className="input_text"
          onChange={(e) => {
            handleSubjectChange(e);
           
          }}
          value={subject}
        />
      </div>

      <div className="input_span_body">
        <input
          type="text"
          placeholder="Write your email"
          className="input_text"
          onChange={(e) => {
            handleEmailBodyChange(e);
            
          }}
          value={emailBody}
        />
      </div>

      <JoditEditor
        value={content}
        tabIndex={1}
        onChange={(newContent) => {
          setContent(newContent)
        }}
      />

      <button className="send-button" onClick={handleSendEmail}>
        Send
      </button>
    </div>
  );
}
