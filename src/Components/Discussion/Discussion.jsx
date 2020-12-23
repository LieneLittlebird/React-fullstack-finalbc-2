import React from "react";
import "./discussion.css";

const Discussion = () => (
  <div>
    <h3>Discussion</h3>
    <div id="chat-window">
      <div id="chat-postarea" />
      <div>
        <label htmlFor="chat-username">
          <input type="text" className="chat-data" id="chat-username" />
          <strong>Username</strong>:
        </label>
      </div>
      <div>
        <label htmlFor="chat-message">
          <textarea type="text" id="chat-message" className="chat-data" />
          <strong>Message</strong>:
        </label>
      </div>
      <button id="submit-button" type="submit">
        Submit
      </button>
    </div>
  </div>
);

export default Discussion;
