import React, { useState, useMemo } from "react";
import JoditEditor from "jodit-react";
import './TextEditor.css'

export default function App() {
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      buttons: "bold,italic,underline,image,fontsize", // Specify the buttons to display
    }),
    []
  );


  const handleChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div>


      <span className="input_span">
        <span className="input_start">To</span>
        <input type="text" className="input_text" />
        <span className="input_end">Cc Bcc</span>
      </span>

      <span className="input_span">
        <input type="text" placeholder="subject" className="input_text" />
      </span>

      <span className="input_span_body">
        <input type="text" placeholder="write your email" className="input_text" />
      </span>

      <JoditEditor
        value={content}
        config={config}
        tabIndex={1}
        onChange={handleChange}
      />
    </div>
  );
}
